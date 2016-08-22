import { Injectable } from "@angular/core"
import { Http, Headers, Response, URLSearchParams } from "@angular/http"
import { Episode } from "./grid.model"
import { Panel } from "./panel.model"
import { Observable } from "rxjs/Rx"
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class GridService {
    constructor(private _http: Http) { }

    getGrid(id: string): Observable<Episode> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('episodeId', id);

        return this._http.get("https://webcomicr.herokuapp.com/getEpisode/", { search: params })
            .map((responseData: Response) => {
                return responseData.json();
            })
            .map((episode: any) => {
                let result: Episode;
                console.log(JSON.stringify(episode));
                if (episode) {
                    let images: Array<Panel> = [];
                    result =
                        new Episode(episode._id, episode.seriesId, episode.row, episode.columns, episode.name, episode.thumbnail, episode.images);
                }
                return result;
            })
            .catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        console.log("handleErrors in service " + JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}