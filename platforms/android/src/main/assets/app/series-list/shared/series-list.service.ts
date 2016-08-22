import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http"
import { Series } from "./series-list.model"
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class SeriesListService {
    constructor(private _http: Http) { }

    getSeries(): Observable<Array<Series>> {

        return this._http.get("https://webcomicr.herokuapp.com/getSeriesList")
            .map((responseData: Response) => {
                return responseData.json();
            })
            .map((series: Array<any>) => {
                let result: Array<Series> = [];
                if (series) {
                    series.forEach((serie) => {
                        result.push(
                            new Series(serie._id, serie.name, serie.thumbnail));
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