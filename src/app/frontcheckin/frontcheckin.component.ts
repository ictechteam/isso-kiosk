import { Component, OnInit } from '@angular/core';
import {KioskservicesService } from '../kioskservices.service'
import { Observable } from 'rxjs/internal/Observable';
import { stringify } from 'querystring';
import {  Frontdeskoption } from '../frontdeskoption'

@Component({
  selector: 'app-frontcheckin',
  templateUrl: './frontcheckin.component.html',
  providers: [KioskservicesService],
  styleUrls: ['./frontcheckin.component.css']
})
export class FrontcheckinComponent implements OnInit {

  listofItems: Observable<any[]>
  item: Object = {}; 

  constructor(private db: KioskservicesService) { }

  ngOnInit() {

    this.listofItems = this.db.getListforFronDesk(); 
    console.log(this.listofItems); 
  }

  selectedItem(item) {
  console.log("me"+ stringify(item)); 
}

getClass() {
  return 'white-text card-panel #ef6c00 orange darken-3'
}


}
