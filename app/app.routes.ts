import { RouterConfig } from "@angular/router";
import { nsProvideRouter } from "nativescript-angular/router";

import {GridComponent} from "./grid/grid.component"
import {SeriesListComponent} from "./series-list/series-list.component"
import {EpisodesListComponent} from "./episodes-list/episodes-list.component"

export const routes: RouterConfig = [
  { path: "", component: SeriesListComponent },
  { path: "grid/:id", component: GridComponent},  
  { path: "episodes/:id", component: EpisodesListComponent }
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, { enableTracing: false }),
];
