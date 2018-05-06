import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { countriesService } from './shared/services/getCountriesList.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { RouterModule, Routes } from '@angular/router';
import { filter } from './shared/services/filter.Service';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'countries-list',component: CountriesListComponent },
  
  { path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: '**', component: MainPageComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MainPageComponent,
    CountriesListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [countriesService,filter],
  bootstrap: [AppComponent]
})
export class AppModule { }
