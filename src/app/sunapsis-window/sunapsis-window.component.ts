import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';


@Pipe({ 
	name: 'trustAsResourceUrl' 
})

@Component({
  selector: 'app-sunapsis-window',
  templateUrl: './sunapsis-window.component.html',
  styleUrls: ['./sunapsis-window.component.css']
})
export class SunapsisWindowComponent implements OnInit {

  link: SafeResourceUrl; 
  url: string = "https://sio.utdallas.edu/istart/controllers/checkin/CheckinEngine.cfm?serviceid=CheckinProvider&index=UTD"

  constructor(public ds: DomSanitizer) { 
   
   }

  ngOnInit() {}

  getTrustedLink(){
     
     this.ds.bypassSecurityTrustResourceUrl("https://sio.utdallas.edu/istart/controllers/checkin/CheckinEngine.cfm?serviceid=CheckinProvider&index=UTD"); 
    
  }

}
