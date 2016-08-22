import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router";
import { SeriesListService, Series } from "./shared/index"
import {Page} from "ui/page";

@Component({
    selector: "gr-series-list",
    providers: [SeriesListService],
    templateUrl: "./series-list/series-list.component.html",
    styleUrls: ["./series-list/series-list.common.css"]
})
export class SeriesListComponent implements OnInit {
    series: Array<Series>;

    constructor (private _router: Router,
        private _seriesListService: SeriesListService,
        private page: Page) {}

    ngOnInit() {
        this.page.actionBarHidden = true;
        this._seriesListService.getSeries()
            .subscribe(
            (series) => {
                this.series = series;
            },
            (error) => console.log(error));
    }

    public seriesTap(args) {        
        this._router.navigate(["episodes", this.series[args.index].id]);
    }
}