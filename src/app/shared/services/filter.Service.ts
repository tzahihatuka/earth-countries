import { Injectable } from "@angular/core";
import { countriesService } from "./getCountriesList.service";
import { RootObject } from "../models/RootObject";

@Injectable()
export class filter{

    localCountriesList: RootObject;
    newFilteredarr:Array<RootObject>;
    constructor(public getCountrieslist:countriesService) {
    
        setTimeout(() => {
          this.localCountriesList=this.getCountrieslist.getcountriesService;
         }, 100);
       }

       public getFilter(name1:string){
        var input, filter, table, tr, td, i;
        input = name1;
        filter = input.toUpperCase();
        table = this.localCountriesList;
        this.newFilteredarr=[]; 
        for (i = 0; i < Object.keys(this.localCountriesList).length; i++) {
            console.log(Object.keys(this.localCountriesList).length);
          if (table[i].name){
            if (table[i].name.toUpperCase().indexOf(filter) > -1||table[i].capital.toUpperCase().indexOf(filter) > -1) { 
                this.newFilteredarr.push(this.localCountriesList[i])
            }            
          }     
        } return this.newFilteredarr; 
} 
}