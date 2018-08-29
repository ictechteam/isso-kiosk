import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showAppointment: boolean = false; 
  needAppointment: boolean = false; 
  showExpress:     boolean = false; 
  showPick:        boolean = false; 
  showEA:          boolean = false; 
  showStarterMessage: boolean = true; 
  expressTime: any; 
  expressNotification: any; 
  
  
  today: number = Date.now(); 


  constructor() { }

  ngOnInit() {
    this.displayExpress(); 
    this.displayWalkin(); 
  }



  selectOnKiosk(x) {
  
   this.showAppointment = false; 
   this.showExpress = false; 
   this.showPick = false; 
   this.showEA = false;  
   this.needAppointment = false; 
   this.showStarterMessage = false; 
   
    switch(x) {
     
      case 1: { this.showAppointment = true; break;   };

      case 2: { this.needAppointment = true; break;   };

      case 3: { this.showExpress = true; break; };

      case 4: { this.showPick = true; break;    };
      
      case 5: { this.showEA = true; break; }

    }
  }

 walkinexpresslogic() {
   console.log(moment().format('dddd')); 
   console.log(moment().format("1:00 PM")); 
  console.log( this.displayWalkin() + "AND" + this.displayExpress()); 
 
  }

  displayWalkin(){

  var today = moment().format('dddd'); 

  if(today === 'Monday' || today  === 'Friday' ){

     return moment().isBetween(moment('12:45', 'LT'), moment('16:45', 'LT') );
  }

 return false; 
  }

  displayExpress() {
  
    var betweenMondFriday = moment().isBetween(moment('Monday', 'dddd'), moment('Friday', 'dddd')); 
    this.expressNotification=""
    
    if(betweenMondFriday = true) {
      
      var today = moment().format('dddd'); 
      console.log(today); 
        
      switch(today){
       case 'Monday': { this.expressTime = '<h4> 1pm - 4:45pm</h4>'; 
                        if(moment().isBefore(moment('12:45', 'LT'))) {
                          this.expressNotification = '<h4>Express check in starts at 12:45pm</h4>'; 
                         }                        
                        return  moment().isBetween(moment('12:45', 'LT'), moment('16:45', 'LT')); }
      
       case 'Tuesday': { this.expressTime = '<h4> 9am - 11:45am</h4>'; 
                         if( moment().isBefore(moment('8:45', 'LT'))) {
                         this.expressNotification = '<h4>Express check in starts at 8:45am</h4>'; 
                        }
                        return moment().isBetween(moment('08:45', 'LT'), moment('11:45', 'LT')); }      

       case 'Thursday': { this.expressTime = '<h4> 9am - 11:45am and 1pm - 4:45pm</h4>'
                          if( moment().isBefore(moment('8:45', 'LT')) ) {
                              this.expressNotification = '<h4>Express check in starts at 8:45pm and 12:45am</h4>';
                          } 
                          
                          return moment().isBetween(moment('08:45', 'LT'), moment('11:45', 'LT'))
                          ||     moment().isBetween(moment('12:45', 'LT'), moment('16:45', 'LT'));}

       case 'Friday': { this.expressTime = '<h4> 1pm - 4:45pm</h4>'
                        if(moment().isBefore(moment('12:45', 'LT'))) {
                        this.expressNotification = '<h4>Express check in starts at 12:45pm</h4>'; 
                        }

                        return moment().isBetween(moment('12:45', 'LT'), moment('16:45', 'LT'))}

       case 'Wednesday': { this.expressTime = '<h4>No express advising</h4>'
                           return false; }
      }
    }

    return false; 
  }

}
