import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {MobileAccessibility} from '@ionic-native/mobile-accessibility'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Device } from '@ionic-native/device';
import { IonicStorageModule } from '@ionic/storage'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TypeComponent } from './type.component';
import { AdultInstructionsComponent } from './adultInstructions.component';
import { adultChartComponent } from './adultChart.component';
import { adultChart2Component } from './adultChart2.component';
import { BabyInstructionsComponent } from './babyInstructions.component';
import { babyChartComponent } from './babyChart.component';
import { babyChart2Component } from './babyChart2.component';
import { calibrationComponent } from './calibration.component';
import { AdultInstructions2Component } from './adultInstructions2.component';
import { BabyInstructions2Component } from './babyInstructions2.component';
import {informationComponent} from './information.component'
import { versionComponent } from './version.component';
@NgModule({
  declarations: [AppComponent, TypeComponent, AdultInstructionsComponent, adultChartComponent, adultChart2Component, BabyInstructionsComponent, babyChartComponent, babyChart2Component, AdultInstructions2Component, BabyInstructions2Component, informationComponent, versionComponent, calibrationComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot()

  ],
  providers: [
    
    StatusBar,
    SplashScreen,
  
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
