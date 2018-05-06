import { Component, OnInit } from '@angular/core';
import { RootObject } from '../shared/models/RootObject';
import { filter } from '../shared/services/filter.Service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})

export class CountriesListComponent implements OnInit {
public localCountriesList:RootObject;
newFilteredarr:Array<RootObject>;
  constructor(public getCountrieslist:filter) { 
    setTimeout(() => {
      this.localCountriesList=this.getCountrieslist.localCountriesList;
      this.newFilteredarr=[];
       for(let a in Object.keys(this.localCountriesList)){
      this.newFilteredarr[a]=(this.localCountriesList[a]);}
     },600);
   }
searchCountryName(name:string){
  this.newFilteredarr=[];
  this.newFilteredarr=this.getCountrieslist.getFilter(name);
}

    ngOnInit() {
    }
}
