import {CoreConfig, Platform} from './core.config';
CoreConfig.platform = Platform.mobile;

import {nativeScriptBootstrap} from "nativescript-angular/application";
import {AppComponent} from "./app.component";

nativeScriptBootstrap(AppComponent);