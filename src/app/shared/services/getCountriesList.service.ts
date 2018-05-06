import { HttpClient } from "@angular/common/http";
import { RootObject } from "../models/RootObject";
import { Injectable } from "@angular/core";

@Injectable()
export class countriesService{
    public getcountriesService:RootObject;
constructor(private httpService:HttpClient){

    let url:string=`https://restcountries.eu/rest/v2/all`;
     this.httpService.get(url)
    .subscribe((res)=>{this.getcountriesService=res});
}
}

