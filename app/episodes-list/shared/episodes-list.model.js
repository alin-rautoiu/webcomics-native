"use strict";
var Episode = (function () {
    function Episode(id, seriesId, row, columns, name, thumbnail) {
        this.id = id;
        this.seriesId = seriesId;
        this.row = row;
        this.columns = columns;
        this.name = name;
        this.thumbnail = thumbnail;
    }
    return Episode;
}());
exports.Episode = Episode;
//# sourceMappingURL=episodes-list.model.js.map