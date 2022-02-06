import {Component, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { ActivatedRoute, Router } from '@angular/router';

import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'adultChart',
    templateUrl: './adultChart.component.html',
    styleUrls: ['./type.component.css']
})
export class adultChartComponent{

    constructor(private router: Router, private storage: Storage){}
    
    chartLetters = ['C', 'D', 'E', 'F', 'L', 'O', 'P', 'T', 'Z']
    d = this.chartLetters[Math.floor(Math.random() * 9)]
    x=this.d
    numCorrect=0
    numWrong=0
    fontSize = 4
    numberFontSizes = [20, 25, 32, 40, 50, 63, 80, 100, 125, 160, 200]
    notdone = true
    minScore = -1
    maxScore = 10
    m=0
    next = false
    value=20;
    /*dpi: number = (function () {
        for (var i = 56; i < 2000; i++) {
            if (matchMedia("(max-resolution: " + i + "dpi)").matches === true) {
                alert('matchmedia')
                return i;
                
            }
        }
        alert('dpr')
        return window.devicePixelRatio*96;
    })();
    */
    Success() {
        console.log('good')
        this.numCorrect++
        this.newLetter()
        
    }
    Failure() {
        console.log('good')
        this.numWrong++
        this.newLetter()
    }
    newLetter() {
        while (this.x==this.d){
        this.d = this.chartLetters[Math.floor(Math.random() * 9)]
        }
        this.x=this.d
        if (this.numWrong>=3) {
            this.minScore=this.fontSize
            this.fontSize++
            this.numWrong=0
            this.numCorrect=0
            //this.q = this.fontSizes[this.fontSize]
        }
        else if (this.numCorrect>=3) {
            this.maxScore=this.fontSize
            this.fontSize--
            this.numWrong=0
            this.numCorrect=0
            //this.q = this.fontSizes[this.fontSize]
        }
        if (this.maxScore-this.minScore==1) {
            this.m=this.numberFontSizes[this.maxScore]
            
            this.notdone=false
            //this.q="normal"
        }
        this.setFontSize(this.fontSize)
    }
    
    
    continue() {
        this.next=true
    }
    
    setFontSizeForClass(fontSize) {
        this.storage.get("sizing").then((val) => {
            alert(val)
            this.value=val;
          });
        var elms = document.getElementById("chart");
        elms.style.fontSize = Math.floor(10)+"px"   
    }
    setFontSize(number) {   
        
            var calcFontSize=0.00875*this.numberFontSizes[number]
            this.setFontSizeForClass(calcFontSize)
    }
}
    