import {Component} from '../../util/Component';
import {LoginService} from '../../services/login.service';

import {Camera} from '../../util/camera';
import {RenderImage} from '../../directive/renderImage.directive';

@Component({
    selector: 'my-start',
    platform: {
        templateUrl: 'pages/start/start',
        styleUrls: ['pages/start/start']
    },
	directives: [RenderImage]
})
export class Start {
    public count = 1;
    public imgSrc;
    
    constructor(private _loginService: LoginService) { }
    
    public incrementCount() {
        this.count++;
    }
    
    public getGreatingMessage() {
        var name = this._loginService.loggedInAs;
        if (name.toLowerCase() === 'batman')
            return 'nananananananananana Batman!';
        else
            return 'Hello ' + name + '!';
    }
    
    public takePhoto() {
        Camera.takePicture({width: 300, height: 300}).then(picture => {
            this.imgSrc = picture;
        });
    }
}