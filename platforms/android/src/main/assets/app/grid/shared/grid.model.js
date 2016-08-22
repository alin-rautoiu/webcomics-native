"use strict";
var Episode = (function () {
    function Episode(id, seriesId, row, columns, name, thumbnail, panels) {
        this.id = id;
        this.seriesId = seriesId;
        this.row = row;
        this.columns = columns;
        this.name = name;
        this.thumbnail = thumbnail;
        this.panels = panels;
    }
    return Episode;
}());
exports.Episode = Episode;
//# sourceMappingURL=grid.model.js.map