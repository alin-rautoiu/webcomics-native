import { Injectable } from "@angular/core"
import { Http, Headers, Response } from "@angular/http"
import { Episode } from "./episodes-list.model"
import { Observable } from "rxjs/Rx"
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class EpisodesListService {
    constructor(private _http: Http) { }

    getEpisodes(id: string): Observable<Array<Episode>> {
        return this._http.get("https://webcomicr.herokuapp.com/getEpisodesList/" + id)
            .map((responseData: Response) => {
                return responseData.json();
            })
            .map((episode: Array<any>) => {
                let result: Array<Episode> = [];
                if (episode) {
                    episode.forEach((episode) => {
                        result.push(
                            new Episode(episode._id, episode.seriesId, episode.row, episode.columns, episode.name, episode.thumbnail));
                    });
                }
                return result;
            })
            .catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        return Observable.throw(error);
    }
}