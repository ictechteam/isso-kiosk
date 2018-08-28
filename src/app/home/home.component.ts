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
  expressMessage: any; 
  expressNotification: any; 
  
  
  today: number = Date.now(); 


  constructor() { }

  ngOnInit() {
    this.displayExpress(); 
  }

  selectOnKiosk(x) {
  
   this.showAppointment = false; 
   this.showExpress = false; 
   this.showPick = false; 
   this.showEA = false;  
   this.needAppointment = false; 
   
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

  var betweenMondFriday = moment().isBetween(moment('12:00', 'LT'), moment('16:45', 'LT') ); 
  var isTime = moment().isBetween(moment('Monday', 'dddd'), moment('Friday', 'dddd')); 
  
  return betweenMondFriday && isTime; 
   

  }

  displayExpress() {
  
    var betweenMondFriday = moment().isBetween(moment('Monday', 'dddd'), moment('Friday', 'dddd')); 
    this.expressMessage="Please see schedule on our website to view express advising."
    
    if(betweenMondFriday = true) {
      
      var today = moment().format('dddd'); 
      console.log(today); 
        
      switch(today){
       case 'Monday': { this.expressMessage = '<h4>Monday 1pm - 4:45pm</h4>'; 
                        this.expressNotification = '<h4>Express check in starts at 12:30pm</h4>'; 
                        return  moment().isBetween(moment('12:30', 'LT'), moment('16:45', 'LT')); }
      
       case 'Tuesday': { this.expressMessage = '<h4>Tuesday 9am - 11:45am</h4>'; 
                         this.expressNotification = '<h4>Express check in starts at 8:30am</h4>'; 
                        return moment().isBetween(moment('08:30', 'LT'), moment('11:45', 'LT')); }      

       case 'Thursday': { this.expressMessage = '<h4>Thursday 9am - 11:45am and 1pm - 4:45pm</h4>'
                           this.expressNotification = '<h4>Express check in starts at 8:30pm and 12:30am</h4>'; 
                          return moment().isBetween(moment('08:30', 'LT'), moment('11:45', 'LT'))
                          ||     moment().isBetween(moment('13:00', 'LT'), moment('16:45', 'LT'));}

       case 'Friday': { this.expressMessage = '<h4>Friday 1pm - 4:45pm</h4>'
                        this.expressNotification = '<h4>Express check in starts at 12:30pm</h4>'; 
                        return moment().isBetween(moment('12:30', 'LT'), moment('16:45', 'LT'))}

       case 'Wednesday': { this.expressMessage = '<h4>Wednesday, no express advising today</h4>'
                           return false; }
      }
    }

    return false; 
  }

}
