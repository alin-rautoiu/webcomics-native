"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var grid_model_1 = require("./grid.model");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var GridService = (function () {
    function GridService(_http) {
        this._http = _http;
    }
    GridService.prototype.getGrid = function (id) {
        var params = new http_1.URLSearchParams();
        params.set('episodeId', id);
        return this._http.get("https://webcomicr.herokuapp.com/getEpisode/", { search: params })
            .map(function (responseData) {
            return responseData.json();
        })
            .map(function (episode) {
            var result;
            console.log(JSON.stringify(episode));
            if (episode) {
                var images = [];
                result =
                    new grid_model_1.Episode(episode._id, episode.seriesId, episode.row, episode.columns, episode.name, episode.thumbnail, episode.images);
            }
            return result;
        })
            .catch(this.handleErrors);
    };
    GridService.prototype.handleErrors = function (error) {
        console.log("handleErrors in service " + JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    GridService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GridService);
    return GridService;
}());
exports.GridService = GridService;
//# sourceMappingURL=grid.service.js.map