"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var series_list_model_1 = require("./series-list.model");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var SeriesListService = (function () {
    function SeriesListService(_http) {
        this._http = _http;
    }
    SeriesListService.prototype.getSeries = function () {
        return this._http.get("https://webcomicr.herokuapp.com/getSeriesList")
            .map(function (responseData) {
            return responseData.json();
        })
            .map(function (series) {
            var result = [];
            if (series) {
                series.forEach(function (serie) {
                    result.push(new series_list_model_1.Series(serie._id, serie.name, serie.thumbnail));
                });
            }
            return result;
        })
            .catch(this.handleErrors);
    };
    SeriesListService.prototype.handleErrors = function (error) {
        return Rx_1.Observable.throw(error);
    };
    SeriesListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SeriesListService);
    return SeriesListService;
}());
exports.SeriesListService = SeriesListService;
//# sourceMappingURL=series-list.service.js.map