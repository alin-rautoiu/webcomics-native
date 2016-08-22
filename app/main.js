"use strict";
var application_1 = require("nativescript-angular/application");
var app_routes_1 = require("./app.routes");
var http_1 = require('nativescript-angular/http');
var http_2 = require("@angular/http");
var app_component_1 = require("./app.component");
var index_1 = require("./series-list/shared/index");
application_1.nativeScriptBootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS, http_2.HTTP_PROVIDERS, http_1.NS_HTTP_PROVIDERS, index_1.SeriesListService
]);
//# sourceMappingURL=main.js.map