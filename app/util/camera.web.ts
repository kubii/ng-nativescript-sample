var noop = () => { }

interface Options {
    width?: number;
    height?: number;
}

export class Camera {
    public static takePicture(options: Options) {        
        return new Promise(resolve => {
            navigator['getUserMedia'] = navigator['getUserMedia'] ||
            navigator['webkitGetUserMedia'] || navigator['mozGetUserMedia'];

            var constraints = {video: true};

            let showVideo = (localMediaStream) => {
                var videoContext = this.createVideo(options, () => 
                    resolve(this.takePhoto(videoContext)));
                videoContext.play(localMediaStream);
            }

            navigator['getUserMedia'](constraints, showVideo, noop);
        });
    }
    
    private static takePhoto(videoContext) {
        let canvas = document.createElement('canvas');
        
        canvas.width = videoContext.video.width;
        canvas.height = videoContext.video.height;
        
        let context = canvas.getContext('2d');
                        
        context.drawImage(videoContext.video, 0, 0);
        
        let imageData = context.getImageData(0, 0, videoContext.video.width, videoContext.video.height);
        
        videoContext.destroy();
        
        return imageData;
    }
    
    private static createVideo(options: Options, takePhoto: () => void) {
        let body = document.querySelector('body');
        
        let container = document.createElement('div');
        container.classList.add('video-container');
        container.style.position = 'absolute';
        container.style.top = '0';
        container.style.left = '0';
        container.style.zIndex = '999';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        container.style.margin = 'auto';
        
        let video = document.createElement('video');
        if (options.width)
            video.width = options.width;
        if (options.height)
            video.height = options.height;
        video.style.display = 'block';
        video.style.margin = 'auto';
        container.appendChild(video);
        
        let button = document.createElement('button');
        button.style.display = 'block';
        button.style.margin = 'auto';
        button.innerHTML = 'take photo';
        button.addEventListener('click', takePhoto);
        container.appendChild(button);
        
        body.appendChild(container);
        
        return {
            video: video,
            destroy: () => {
                button.removeEventListener('click', takePhoto);
                body.removeChild(container);
            },
            play: (localMediaStream) => {
                window['stream'] = localMediaStream;
                video['src'] = window.URL.createObjectURL(localMediaStream);
                video['play']();
            }
        }
    }
}