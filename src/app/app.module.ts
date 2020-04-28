import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TypeComponent } from './type.component';
import { AdultInstructionsComponent } from './adultInstructions.component';
import { adultChartComponent } from './adultChart.component';
import { adultChart2Component } from './adultChart2.component';
import { BabyInstructionsComponent } from './babyInstructions.component';
import { babyChartComponent } from './babyChart.component';
import { babyChart2Component } from './babyChart2.component';
import { AdultInstructions2Component } from './adultInstructions2.component';
import { BabyInstructions2Component } from './babyInstructions2.component';
import {informationComponent} from './information.component'
@NgModule({
  declarations: [AppComponent, TypeComponent, AdultInstructionsComponent, adultChartComponent, adultChart2Component, BabyInstructionsComponent, babyChartComponent, babyChart2Component, AdultInstructions2Component, BabyInstructions2Component, informationComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    
    StatusBar,
    SplashScreen,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
