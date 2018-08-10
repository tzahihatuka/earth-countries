import { Component} from '@angular/core';
import { RootObject } from '../shared/models/RootObject';
import { filter } from '../shared/services/filter.Service';
import { countriesService } from '../shared/services/getCountriesList.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})

export class CountriesListComponent {
public localCountriesList:RootObject={};
newFilteredarr:Array<RootObject>;
constructor(public getCountrieslist:filter, public bb:countriesService) { 
  this.bb.getInfo().subscribe(res =>{this.localCountriesList=res;this.getCountrieslist.localCountriesList=res}); 
       }
   
searchCountryName(name:string){
  this.localCountriesList=undefined;
  console.log(this.localCountriesList)
  this.newFilteredarr=this.getCountrieslist.getFilter(name);
}

}
