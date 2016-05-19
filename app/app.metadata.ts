import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {Router} from '@angular/router-deprecated';

let PlatformMetadata = {
    templateUrl: 'app.mobile.html',
    styleUrls: [
        'app.common.css',
        'app.css'
    ],
    directives: [NS_ROUTER_DIRECTIVES],
    providers: [NS_ROUTER_PROVIDERS]
};

export {
    PlatformMetadata,
    Router
}