import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { MaterializeModule } from 'angular2-materialize'; 
import * as moment from "moment"; 


import { AppComponent } from './app.component';

import {RouterModule, Routes, ActivatedRoute, RouterStateSnapshot }  from '@angular/router';
import { AngularFireModule, } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { SafePipe } from './safe.pipe';
import { J1AdvisingComponent } from './j1-advising/j1-advising.component';
import { IssoAdvisingComponent } from './isso-advising/isso-advising.component';

const appRoutes: Routes =[
  { path: 'home', component: HomeComponent }, 
  {path: 'j1', component: J1AdvisingComponent }, 
  {path: 'advising', component: IssoAdvisingComponent}, 
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: '**', component: HomeComponent }
] 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SafePipe,
    J1AdvisingComponent,
    IssoAdvisingComponent
  ],
  imports: [
    BrowserModule, 
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireDatabaseModule, AngularFireModule,
    RouterModule.forRoot(appRoutes,  {onSameUrlNavigation: 'reload'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
