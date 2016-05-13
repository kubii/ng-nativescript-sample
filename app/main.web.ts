import {CoreConfig, Platform} from './core.config';
CoreConfig.platform = Platform.web;

import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';

bootstrap(AppComponent);