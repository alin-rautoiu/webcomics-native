"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var episodes_list_model_1 = require("./episodes-list.model");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var EpisodesListService = (function () {
    function EpisodesListService(_http) {
        this._http = _http;
    }
    EpisodesListService.prototype.getEpisodes = function (id) {
        return this._http.get("https://webcomicr.herokuapp.com/getEpisodesList/" + id)
            .map(function (responseData) {
            return responseData.json();
        })
            .map(function (episode) {
            var result = [];
            if (episode) {
                episode.forEach(function (episode) {
                    result.push(new episodes_list_model_1.Episode(episode._id, episode.seriesId, episode.row, episode.columns, episode.name, episode.thumbnail));
                });
            }
            return result;
        })
            .catch(this.handleErrors);
    };
    EpisodesListService.prototype.handleErrors = function (error) {
        return Rx_1.Observable.throw(error);
    };
    EpisodesListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EpisodesListService);
    return EpisodesListService;
}());
exports.EpisodesListService = EpisodesListService;
//# sourceMappingURL=episodes-list.service.js.map