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
  
  
  today: number = Date.now(); 


  constructor() { }

  ngOnInit() {
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
  console.log( this.displayWalking() + "AND" + this.displayExpress()); 
 
  }

  displayWalking(){

  var betweenMondFriday = moment().isBetween(moment('13:00', 'LT'), moment('16:45', 'LT') ); 
  var isTime = moment().isBetween(moment('Monday', 'dddd'), moment('Friday', 'dddd')); 
  
  //return betweenMondFriday && isTime; 
  return false && false; 

  }

  displayExpress() {
    
    var betweenMondFriday = moment().isBetween(moment('Monday', 'dddd'), moment('Friday', 'dddd')); 
    
    if(betweenMondFriday = true) {
      
      var today = moment().format('dddd'); 
      console.log(today); 
        
      switch(today){
       case 'Monday': { return  moment().isBetween(moment('13:00', 'LT'), moment('16:45', 'LT')); }
      
       case 'Tuesday': { return moment().isBetween(moment('09:00', 'LT'), moment('11:45', 'LT')); }      

       case 'Thursday': { return moment().isBetween(moment('09:00', 'LT'), moment('11:45', 'LT'))
                          ||     moment().isBetween(moment('13:00', 'LT'), moment('16:45', 'LT'));}

       case 'Friday': {return moment().isBetween(moment('13:00', 'LT'), moment('16:45', 'LT'))}

       case 'Wednesday': { return false; }
      }
    }

    return false; 
  }

}
