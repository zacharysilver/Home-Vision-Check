import { Storage } from '@ionic/storage';
import {Component} from '@angular/core';




@Component({
    selector: 'app-home-type',
    templateUrl: './type.component.html',
    styleUrls: ['./type.component.css']
})
export class TypeComponent{
    constructor(private storage: Storage) {
    }
    value;
    setValue(){
        this.storage.get('sizing').then((val) => {
            alert(val)
            this.value=val;
          });
                  
}
}