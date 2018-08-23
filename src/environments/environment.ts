// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false, 
  firebase: {
  apiKey: "AIzaSyDd2-jUcLlqZ5417rck59ID39i0iKnyz04",
  authDomain: "kiosk-isso.firebaseapp.com",
  databaseURL: "https://kiosk-isso.firebaseio.com",
  projectId: "kiosk-isso",
  storageBucket: "kiosk-isso.appspot.com",
  messagingSenderId: "540566962161"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
