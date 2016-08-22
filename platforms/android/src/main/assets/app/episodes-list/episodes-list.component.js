"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var episodes_list_service_1 = require("./shared/episodes-list.service");
var EpisodesListComponent = (function () {
    function EpisodesListComponent(route, _router, _episodesListService, page) {
        this.route = route;
        this._router = _router;
        this._episodesListService = _episodesListService;
        this.page = page;
    }
    EpisodesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params["id"];
            _this._episodesListService.getEpisodes(id)
                .subscribe(function (episodes) {
                _this.episodes = episodes;
            }, function (error) { return console.log("Episodes list " + error); });
        });
    };
    EpisodesListComponent.prototype.episodeTap = function (args) {
        this._router.navigate(["grid", this.episodes[args.index].id]);
    };
    EpisodesListComponent = __decorate([
        core_1.Component({
            selector: "gr-episode-list",
            providers: [episodes_list_service_1.EpisodesListService],
            templateUrl: "./episodes-list/episodes-list.component.html",
            styleUrls: ["./episodes-list/episodes-list.common.css"]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, episodes_list_service_1.EpisodesListService, page_1.Page])
    ], EpisodesListComponent);
    return EpisodesListComponent;
}());
exports.EpisodesListComponent = EpisodesListComponent;
//# sourceMappingURL=episodes-list.component.js.map