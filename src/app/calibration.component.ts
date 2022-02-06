import { Storage } from '@ionic/storage';
import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


@Component({
    
    selector: 'calibration',
    templateUrl: './calibration.component.html',
    styleUrls: ['./type.component.css']
})
export class calibrationComponent{
    constructor(private storage: Storage, private router: Router) {
    }

    done=false;
    fontSize=20;
    height=67.4;
    width= 42.5; 
    value=0;
    onChange(event){
        this.fontSize=event.target.value;
        var elms = document.getElementById("rectangle");
        elms.style.height = Math.floor(this.fontSize *3.37)+"px"
        elms.style.width = Math.floor(this.fontSize *2.125)+"px"
      }
    continue(){
        this.storage.set('sizing', this.fontSize);
        this.storage.get('sizing').then((val) => {
            alert(val)
            this.value=val;
          });
        this.router.navigate(['./type']);

    }
    
}