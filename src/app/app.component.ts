import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {MobileAccessibility} from '@ionic-native/mobile-accessibility'


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '',
      icon: 'home'
    },
    {
      title: 'Adult Test',
      url: 'adultInstructions',
      icon: 'man'
    },
    {
      title: 'Child Test',
      url: 'babyInstructions',
      icon: 'happy'
    },
    {
      title: 'Learn More',
      url: 'information',
      icon: 'information-circle'
    },
    {
      title: 'Version Info',
      url: 'version', 
      icon: 'information'
    },
    {
      title: 'Recalibrate',
      url: 'calibrate', 
      icon: 'information'
    }
  ];
  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (MobileAccessibility){

      MobileAccessibility.usePreferredTextZoom(false);
      }
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
