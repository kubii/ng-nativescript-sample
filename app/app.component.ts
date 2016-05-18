import {Component} from './util/Component';
import {RouteConfig} from "@angular/router-deprecated";
import {Login} from './pages/login/login.component';
import {Start} from './pages/start/start.component';
import {RouteDirective, RouteProviders, Router} from './util/route';
import {LoginService} from './services/login.service';

@Component({
    selector: "my-app",
    directives: [RouteDirective],
    providers: [RouteProviders, LoginService],
    templateUrl: 'app',
    styleUrls: ['app']
})
@RouteConfig([
    { path: '/Login', component: Login, name: 'Login', useAsDefault: true },
    { path: '/Start', component: Start, name: 'Start' }
])
export class AppComponent {
    constructor(private _router: Router) {
        
    }
}
