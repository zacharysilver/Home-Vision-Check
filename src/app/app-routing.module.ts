import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TypeComponent } from './type.component';
import { AdultInstructionsComponent } from './adultInstructions.component';
import { adultChartComponent } from './adultChart.component';
import { adultChart2Component } from './adultChart2.component';
import { BabyInstructionsComponent } from './babyInstructions.component';
import { babyChartComponent } from './babyChart.component';
import { babyChart2Component } from './babyChart2.component';
import { AdultInstructions2Component } from './adultInstructions2.component';
import { BabyInstructions2Component } from './babyInstructions2.component';
import { informationComponent } from './information.component';
import { versionComponent } from './version.component';
import { calibrationComponent } from './calibration.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'type',
    pathMatch: 'full'
  },
  {path: 'type', component: TypeComponent},
  {path:'adultInstructions', children: [
    {path: '', component: AdultInstructionsComponent},
    {path:'adultInstructions2', component: AdultInstructions2Component},
    {path:'adultChart', children: [
      {path: '', component: adultChartComponent},
      
      {path: 'adultChart2', component: adultChart2Component}
    ]}
  ]},
  {path:'babyInstructions', children: [
    {path: '', component: BabyInstructionsComponent},
    {path: 'babyInstructions2', component: BabyInstructions2Component},
    {path:'babyChart', children: [
      {path: '', component: babyChartComponent},
      {path: 'babyChart2', component: babyChart2Component}
    ]}
  ]},
  {path: 'information', component: informationComponent},
  {path: 'version', component: versionComponent},
  {path: 'calibrate', component: calibrationComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
