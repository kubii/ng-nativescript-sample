import {Component} from '../../util/Component';
import {LoginService} from '../../services/login.service';
import {Camera} from '../../util/camera';

import {PlatformMetadata} from './start.metadata';

@Component({
    selector: 'my-start'
}, PlatformMetadata)
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