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
  showExpress: boolean = false;
  showPick: boolean = false;
  showEA: boolean = false;
  showStarterMessage: boolean = true;
  expressTime: any;
  walkinTime: any;
  walkinNotification: any;
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

    switch (x) {

      case 1: { this.showAppointment = true; break; };

      case 2: { this.needAppointment = true; break; };

      case 3: { this.showExpress = true; break; };

      case 4: { this.showPick = true; break; };

      case 5: { this.showEA = true; break; }

    }
  }

  walkinexpresslogic() {
    console.log(moment().format('dddd'));
    console.log(moment().format("1:00 PM"));
    console.log(this.displayWalkin() + "AND" + this.displayExpress());

  }

  displayWalkin() {

    var betweenMondayFriday = moment().isBetween(moment('Monday', 'dddd'), moment('Friday', 'dddd'));
    var schedule = "<h4><b>Monday</b> and <b>Friday</b>, 1pm - 4:45pm</h4> <h4><b>Tuesday</b> and <b>Thursday</b> 9am-11:45am</h4>"
    this.walkinTime = "<h4>No walk-in advising at this time</h4>"
    

    if(betweenMondayFriday = true){

      var today = moment().format('dddd');

     // var testday = "Thursday"
      //switch (testday) {
      
      switch(today) {
        case 'Monday': case 'Friday': {

          this.walkinTime ='<h4> 1pm - 4:45pm</h4>'

          if (moment().isBefore(moment('12:45', 'LT'))) {
          this.walkinNotification ='<h4>Walk-in check in starts at 12:45pm</h4>' }
    
          if (moment().isBetween(moment('12:45', 'LT'), moment('16:45', 'LT'))){
            this.walkinNotification = '<h4>Walk-in queue is now open!</h4>'
          }
    
          if(moment().isAfter(moment('16:45', 'LT'))){
            this.walkinNotification = schedule; 
            this.walkinTime = "<h4>No walk-in advising at this time</h4>"
          }
    
          return moment().isBetween(moment('12:45', 'LT'), moment('16:45', 'LT'));
        }

        case 'Tuesday': case 'Thursday': {

          this.walkinTime ='<h4> 9am - 11:45am</h4>'

          if (moment().isBefore(moment('08:45', 'LT'))) {
          this.walkinNotification ='<h4>Walk-in check in starts at 08:45pm</h4>' }
    
          if (moment().isBetween(moment('08:45', 'LT'), moment('11:45', 'LT'))){
            this.walkinNotification = '<h4>Walk-in queue is now open!</h4>'
          }
    
          if(moment().isAfter(moment('11:45', 'LT'))){
            this.walkinNotification = schedule; 
            this.walkinTime = "<h4>No walk-in advising at this time</h4>"
          }
    
          return moment().isBetween(moment('8:45', 'LT'), moment('11:45', 'LT'));
        }

        case 'Wednesday': {
          this.walkinNotification = schedule; 
          this.walkinTime = "<h4>No walk-in advising at this time</h4>"
          return false; 
        }
      }

    }
   

    
    return false;
  }

  displayExpress() {

    var betweenMondFriday = moment().isBetween(moment('Monday', 'dddd'), moment('Friday', 'dddd'));
    var schedule = '<h4><b>Monday</b> and <b>Friday</b> 1pm - 4:45pm</h4> <h4><b>Tuesday</b> and <b>Thursday</b> 9am-11:45am</h4>'
    this.expressTime = '<h4>No express advising at this time</h4>'

    if (betweenMondFriday = true) {

      var today = moment().format('dddd');
      //var testday = "Thursday"
   
      //switch (testday) {
      switch (today) {
        case 'Monday': case 'Friday': {
        this.expressTime = '<h4> 1pm - 4:45pm</h4>';
          if (moment().isBefore(moment('12:45', 'LT'))) {
            this.expressNotification = '<h4>Express check in starts at 12:45pm</h4>';
          }

          if (moment().isBetween(moment('12:45', 'LT'), moment('16:45', 'LT'))) {
            this.expressNotification = '<h4>Express queue is now open!</h4>';
          }

          if (moment().isAfter(moment('16:45', 'LT'))) {
            this.expressNotification = schedule;
            this.expressTime = '<h4>No express advising at this time</h4>'
          }

          return moment().isBetween(moment('12:45', 'LT'), moment('16:45', 'LT'));
        }

        case 'Tuesday': case 'Thursday': {
        this.expressTime = '<h4> 9am - 11:45am</h4>';

          if (moment().isBefore(moment('8:45', 'LT'))) {
            this.expressNotification = '<h4>Express check in starts at 8:45am</h4>';
          }

          if (moment().isBetween(moment('08:45', 'LT'), moment('11:45', 'LT'))) {
            this.expressNotification = '<h4>Express queue is now open!</h4>'
          }

          if (moment().isAfter(moment('11:45', 'LT'))) {
            this.expressNotification = schedule;
            this.expressTime = '<h4>No express advising at this time</h4>'
          }

          return moment().isBetween(moment('08:45', 'LT'), moment('11:45', 'LT'));
        }


       case 'Wednesday': {
        this.expressNotification = schedule;
          this.expressTime = '<h4>No express advising at this time</h4>'
          return false;
        }
      }
    }

    return false;
  }

}
