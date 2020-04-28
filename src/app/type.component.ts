  
import {Component} from '@angular/core';




@Component({
    selector: 'app-home-type',
    templateUrl: './type.component.html',
    styleUrls: ['./type.component.css']
})
export class TypeComponent{
    adultCont=false
    babyCont=false
    adult() {
        this.adultCont=true
    }
    baby(){
        this.babyCont=true
    }
}