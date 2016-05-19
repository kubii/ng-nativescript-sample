# ng-nativescript-sample
One codebase for mobile and web with NativeScript and Angular2 (sample).

This sample demonstrates a way how to create a project for web and mobile with one codebase.

<h2>1. Prerequisites</h2>

https://angular.io/docs/ts/latest/quickstart.html

http://docs.nativescript.org/start/quick-setup

<h2>2. Getting started</h2>

<h3>2.1 Mobile</h3>

Start livesync

```
$ tns livesync android --emulator --watch
```

After that the application will be executed on your android emulator.

<h3>2.2 Web</h3>

Start livesync before running the web version to compile and build the project.

Start a webserver (e.g. live-server)

```
$ npm install -g live-server
$ live-server
```

Navigate to app/index.html.

<h2>3. Code sharing between platforms</h2>

We need to use a custom angular decorators:
```
util/Component.ts
```

This decorator can accept a second parameter. This parameter contains the platform specific information.
Example:

app.component.ts:
```
import {Component} from './util/Component';
import {PlatformMetadata} from './app.metadata';

@Component({
    selector: "my-app",
    providers: [LoginService]
}, PlatformMetadata)
export class App { }
```

app.metadata.ts:
```
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";

let PlatformMetadata = {
    templateUrl: 'app.mobile.html',
    styleUrls: [
        'app.common.css',
        'app.css'
    ],
    directives: [NS_ROUTER_DIRECTIVES],
    providers: [NS_ROUTER_PROVIDERS]
};

export { PlatformMetadata }
```

In the PlatformMetadata we can define platform specific directives, providers, styleUrls and templateUrl. We can define the common things with the first parameter of the decorator.

But how to define the web platform? First we need to map the "app.metadata" component. Add this map info the "system.config.js" file:
```
...
map: {
    ...
    './app.metadata': './app.metadata.web.js',
    ...
}
...
```

After that we can create "app.metadata.web.ts" file and define the web specific information:
```
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "@angular/router-deprecated";

let PlatformMetadata = {
    templateUrl: 'app.web.html',
    styleUrls: ['app.web.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
};

export { PlatformMetadata }
```

With this map approach we can create platform specific utils, services, etc. The camera util is an example:
- Create "camera.ts" and "camera.web.ts" files and implement these.
- Import "camera.ts" where you need to use it.
- Map to "camera.web.ts" in "systemjs.config.js"
- It should "implements the same interface".  

<h2>4. References</h2>

http://angularjs.blogspot.hu/2016/03/code-reuse-in-angular-2-native-mobile.html

Basic structure is based on https://github.com/NativeScript/sample-Groceries
