"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var grid_service_1 = require("./shared/grid.service");
var GridComponent = (function () {
    function GridComponent(route, _router, _gridService, page) {
        this.route = route;
        this._router = _router;
        this._gridService = _gridService;
        this.page = page;
    }
    GridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params["id"];
            _this._gridService.getGrid(id)
                .subscribe(function (grid) {
                _this.grid = grid;
                _this.panels = grid.panels;
                console.log("PANLES: " + JSON.stringify(_this.grid.panels));
            }, function (error) { return console.log(error); });
        });
    };
    GridComponent = __decorate([
        core_1.Component({
            selector: "gr-grid",
            providers: [grid_service_1.GridService],
            templateUrl: "./grid/grid.component.html",
            styleUrls: ["./grid/grid.common.css"]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, grid_service_1.GridService, page_1.Page])
    ], GridComponent);
    return GridComponent;
}());
exports.GridComponent = GridComponent;
//# sourceMappingURL=grid.component.js.map