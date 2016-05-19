import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from "@angular/router-deprecated";

let PlatformMetadata = {
    templateUrl: 'app.web.html',
    styleUrls: ['app.web.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
};

export {
    PlatformMetadata,
    Router
}