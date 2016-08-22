import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router";
import { Page } from "ui/page";
import { Episode } from "./shared/grid.model"
import { Panel } from "./shared/panel.model"
import { GridService } from "./shared/grid.service"

@Component({
    selector: "gr-grid",
    providers: [GridService],
    templateUrl: "./grid/grid.component.html",
    styleUrls: ["./grid/grid.common.css"]
})
export class GridComponent implements OnInit {
    grid: Episode;
    panels: Array<Panel>;

    constructor (private route: ActivatedRoute, 
        private _router: Router,
        private _gridService: GridService,
        private page: Page) {}

    ngOnInit() {        
        this.route.params.subscribe((params) => {
            let id = params["id"];
            this._gridService.getGrid(id)
            .subscribe(
                (grid) => {
                    this.grid = grid;     
                    this.panels = grid.panels;       
                    console.log("PANLES: " + JSON.stringify(this.grid.panels));        
                },
                (error) => console.log(error));
        })
    }
}