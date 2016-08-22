import { nativeScriptBootstrap } from "nativescript-angular/application";

import { APP_ROUTER_PROVIDERS } from "./app.routes";
import {NS_HTTP_PROVIDERS} from 'nativescript-angular/http';
import { HTTP_PROVIDERS } from "@angular/http"
import { AppComponent } from "./app.component";
import { SeriesListService } from "./series-list/shared/index"

nativeScriptBootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS, HTTP_PROVIDERS, NS_HTTP_PROVIDERS, SeriesListService
]);
