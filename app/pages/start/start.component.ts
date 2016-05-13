import {Component} from '../../util/Component';
import {LoginService} from '../../services/login.service';

@Component({
    selector: 'my-start',
    templateUrl: 'pages/start/start',
    styleUrls: ["pages/start/start"]
})
export class Start {
    public count = 1;
    
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
}