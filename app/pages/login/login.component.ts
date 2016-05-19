import {Component} from '../../util/Component';
import {RouteDirective, RouteProviders, Router} from '../../util/route';
import {LoginService} from '../../services/login.service';

import {PlatformMetadata} from './login.metadata';

@Component({
    selector: 'my-login'
}, PlatformMetadata)
export class Login {
    public name: string;
    public password: string;
    
    constructor(private _router: Router, private _loginService: LoginService) { }
    
    public login() {
        this._loginService
            .login(this.name, this.password)
            .then(() => this._router.navigate(['Start']));
    }
}