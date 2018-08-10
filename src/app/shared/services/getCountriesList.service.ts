import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RootObject } from "../models/RootObject";
import { Observable } from "rxjs/Observable";


@Injectable()
export class countriesService{
    public getcountriesService:RootObject={};
    str:string;
    localCountriesList={};
constructor(private httpService:HttpClient){
    this.getInfo();
    this.str="dsgfdsgsd"
}

public getInfo():Observable<RootObject> {
    let url:string=`https://restcountries.eu/rest/v2/all`;
    return this.httpService.get(url);
     
    }

}

