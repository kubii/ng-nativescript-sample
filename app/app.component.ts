import {Component} from './util/Component';
import {RouteConfig} from "@angular/router-deprecated";
import {Login} from './pages/login/login.component';
import {Start} from './pages/start/start.component';
import {LoginService} from './services/login.service';

import {PlatformMetadata, Router} from './app.metadata'; 

@Component({
    selector: "my-app",
    providers: [LoginService]
}, PlatformMetadata)
@RouteConfig([
    { path: '/Login', component: Login, name: 'Login', useAsDefault: true },
    { path: '/Start', component: Start, name: 'Start' }
])
export class AppComponent {
    constructor(private _router: Router) {
        
    }
}
