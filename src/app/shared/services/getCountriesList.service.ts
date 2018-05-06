import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RootObject } from "../models/RootObject";


@Injectable()
export class countriesService{
    public getcountriesService:RootObject={};
    str:string;
constructor(private httpService:HttpClient){
    this.getInfo();
    this.str="dsgfdsgsd"
}

public getInfo() {
    let url:string=`https://restcountries.eu/rest/v2/all`;
     return this.httpService.get(url);
    }

}

