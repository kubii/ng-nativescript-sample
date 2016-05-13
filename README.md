# ng-nativescript-sample
One codebase for mobile and web with NativeScript and Angular2 (sample).

This sample demonstrates a way how to create a project for web and mobile with one codebase.

<h2>Prerequisites</h2>

https://angular.io/docs/ts/latest/quickstart.html

http://docs.nativescript.org/start/quick-setup

<h2>Getting started</h2>

<h3>Mobile</h3>

Start livesync

```
$ tns livesync android --emulator --watch
```

After that the application will be executed on your android emulator.

<h3>Web</h3>

Start livesync before running the web version to compile and build the project.

Start a webserver (e.g. live-server)

```
$ npm install -g live-server
$ live-server
```

Navigate to app/index.html.

<h2>Workflow</h2>

Create a new page:

- create new folder in app/pages (pagename)
- you need to add these files to that folder:
 - pagename.android.css: style for android
 - pagename.ios.css: style for ios
 - pagename.common.css: style for android and ios
 - pagename.web.css: style for web
 - pagename.component.ts: angular component for the page
 - pagename.mobile.html: view for android and ios
 - pagename.web.html: view for web
- configure router (app.component.ts)
- notes about pagename.component.ts configuration:
 - templateUrl should point to the html file without "mobile.html" or "web.html" suffix
 - styleUrls should point to the css file without "android.css", "common.css", "ios.css" or "web.css" suffix

Write new util what can't be reused in web and mobile but has the same "api" (example: router)

- create a ts file without any prefix (app/util/router.ts) - this will contain the mobile implementation
- create a ts file with the same name but with web suffix - this will contain the web implementation
- map the module in app/systemjs.config.js

```
...
map: {
   './util/route': './util/route.web.js'
}
```

- import the module without ".web" suffix (.../util/router)

<h2>References</h2>

http://angularjs.blogspot.hu/2016/03/code-reuse-in-angular-2-native-mobile.html
