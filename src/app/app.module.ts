import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { MaterializeModule } from 'angular2-materialize'; 
import * as moment from "moment"; 

import { AppComponent } from './app.component';

import {RouterModule, Routes, ActivatedRoute }  from '@angular/router';
import { AngularFireModule, } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { SunapsisWindowComponent } from './sunapsis-window/sunapsis-window.component';
import { QlessWindowComponent } from './qless-window/qless-window.component';
import { SafePipe } from './safe.pipe';

const appRoutes: Routes =[
  { path: 'home', component: HomeComponent }, 
  { path: 'sunapsis',component: SunapsisWindowComponent}, 
  { path: 'qless', component: QlessWindowComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: '**', component: HomeComponent }
] 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SunapsisWindowComponent,
    QlessWindowComponent,
    SafePipe
  ],
  imports: [
    BrowserModule, 
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireDatabaseModule, AngularFireModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
