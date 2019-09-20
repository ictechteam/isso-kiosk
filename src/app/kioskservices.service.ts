import { Injectable } from '@angular/core';
import {Component } from '@angular/core'; 
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})
export class KioskservicesService {

  constructor(private db: AngularFireDatabase) { }


getListforFrontDeskItems(): Observable<any[]> {

  return this.db.list('frontdeskitems').valueChanges(); 
}

getListforFronDesk(): Observable<any[]> {
  return this.db.list('frontdeskitems').snapshotChanges(['child_added']); 
}


}
