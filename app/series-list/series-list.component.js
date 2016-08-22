"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("./shared/index");
var page_1 = require("ui/page");
var SeriesListComponent = (function () {
    function SeriesListComponent(_router, _seriesListService, page) {
        this._router = _router;
        this._seriesListService = _seriesListService;
        this.page = page;
    }
    SeriesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page.actionBarHidden = true;
        this._seriesListService.getSeries()
            .subscribe(function (series) {
            _this.series = series;
        }, function (error) { return console.log(error); });
    };
    SeriesListComponent.prototype.seriesTap = function (args) {
        this._router.navigate(["episodes", this.series[args.index].id]);
    };
    SeriesListComponent = __decorate([
        core_1.Component({
            selector: "gr-series-list",
            providers: [index_1.SeriesListService],
            templateUrl: "./series-list/series-list.component.html",
            styleUrls: ["./series-list/series-list.common.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.SeriesListService, page_1.Page])
    ], SeriesListComponent);
    return SeriesListComponent;
}());
exports.SeriesListComponent = SeriesListComponent;
//# sourceMappingURL=series-list.component.js.map