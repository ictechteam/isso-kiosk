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

  var betweenMondFriday = moment().isBetween(moment('13:00', 'LT'), moment('16:45', 'LT') ); 
  var isTime = moment().isBetween(moment('Monday', 'dddd'), moment('Friday', 'dddd')); 
  
  //return betweenMondFriday && isTime; 
  return false && false; 

  }

  displayExpress() {
  
    var betweenMondFriday = moment().isBetween(moment('Monday', 'dddd'), moment('Friday', 'dddd')); 
    this.expressMessage="Please see schedule on our website to view express advising."
    
    if(betweenMondFriday = true) {
      
      var today = moment().format('dddd'); 
      console.log(today); 
        
      switch(today){
       case 'Monday': { this.expressMessage = '<h3>Monday 1pm - 4:45pm</h3>'
                        return  moment().isBetween(moment('13:00', 'LT'), moment('16:45', 'LT')); }
      
       case 'Tuesday': { this.expressMessage = '<h3>Tuesday 9am - 11:45am</h3>'
                        return moment().isBetween(moment('09:00', 'LT'), moment('11:45', 'LT')); }      

       case 'Thursday': { this.expressMessage = '<h3>Thursday 9am - 11:45am and 1pm - 4:45pm</h3>'
                          return moment().isBetween(moment('09:00', 'LT'), moment('11:45', 'LT'))
                          ||     moment().isBetween(moment('13:00', 'LT'), moment('16:45', 'LT'));}

       case 'Friday': { this.expressMessage = '<h3>Friday 1pm - 4:45pm</h3>'
                        return moment().isBetween(moment('13:00', 'LT'), moment('16:45', 'LT'))}

       case 'Wednesday': { this.expressMessage = '<h3>Wednesday, no express advising today</h3>'
                           return false; }
      }
    }

    return false; 
  }

}
