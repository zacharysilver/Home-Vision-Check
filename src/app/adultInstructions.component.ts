import {Component} from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'adultInstructions',
    templateUrl: './adultInstructions.component.html',
    styleUrls: ['./type.component.css']
})
export class AdultInstructionsComponent{
    constructor(private storage: Storage) {
    }
    value;
    getValue(){
        this.storage.get('name').then((val) => {
        console.log(val)
      });
    }
}