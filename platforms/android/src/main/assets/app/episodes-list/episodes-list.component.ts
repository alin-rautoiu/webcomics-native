import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router";
import { Page } from "ui/page";
import { Episode } from "./shared/episodes-list.model"
import { EpisodesListService } from "./shared/episodes-list.service"

@Component({
    selector: "gr-episode-list",
    providers: [EpisodesListService],
    templateUrl: "./episodes-list/episodes-list.component.html",
    styleUrls: ["./episodes-list/episodes-list.common.css"]
})
export class EpisodesListComponent implements OnInit {
    episodes: Array<Episode>;    

    constructor (private route: ActivatedRoute, 
        private _router: Router,
        private _episodesListService: EpisodesListService,
        private page: Page) {}

    ngOnInit() {        
        this.route.params.subscribe((params) => {
            let id = params["id"];
            this._episodesListService.getEpisodes(id)
            .subscribe(
                (episodes) => {
                    this.episodes = episodes;                    
                },
                (error) => console.log("Episodes list " + error));
        })
    }

    episodeTap(args) {
        this._router.navigate(["grid", this.episodes[args.index].id]);
    }
}