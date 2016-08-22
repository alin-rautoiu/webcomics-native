"use strict";
var router_1 = require("nativescript-angular/router");
var grid_component_1 = require("./grid/grid.component");
var series_list_component_1 = require("./series-list/series-list.component");
var episodes_list_component_1 = require("./episodes-list/episodes-list.component");
exports.routes = [
    { path: "", component: series_list_component_1.SeriesListComponent },
    { path: "grid/:id", component: grid_component_1.GridComponent },
    { path: "episodes/:id", component: episodes_list_component_1.EpisodesListComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(exports.routes, { enableTracing: false }),
];
//# sourceMappingURL=app.routes.js.map