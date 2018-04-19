import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { SigninPage } from '../pages/signin/signin';

const config = {
  apiKey: "AIzaSyBri0PZjFOpVAR5T4dLCwN_gn5lqWYTDjY",
  authDomain: "geotracker-4c8d3.firebaseapp.com",
  databaseURL: "https://geotracker-4c8d3.firebaseio.com",
  projectId: "geotracker-4c8d3",
  storageBucket: 'gs://geotracker-4c8d3.appspot.com'
};


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
   platform.ready().then(() => {
     // Okay, so the platform is ready and our plugins are available.
     // Here you can do any higher level native things you might need.
     statusBar.styleDefault();
     splashScreen.hide();
   });
   firebase.initializeApp(config);
 }
}

