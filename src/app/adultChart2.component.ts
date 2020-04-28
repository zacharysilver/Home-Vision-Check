import {Component, OnInit, Input} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


@Component({
    selector: 'adultChart2',
    templateUrl: './adultChart2.component.html',
    styleUrls: ['./type.component.css']
})
export class adultChart2Component{
    @Input() leftVision: number
    constructor(private router: Router){}
    chartLetters = ['C', 'D', 'E', 'F', 'L', 'O', 'P', 'T', 'Z']
    d = this.chartLetters[Math.floor(Math.random() * 9)]
    x=this.d
    numCorrect=0
    numWrong=0
    fontSizes = ['twenty', 'twentyfive', 'thirtytwo', 'forty', 'fifty', 'sixtythree', 'eighty', 'onehundred', 'onetwentyfive', 'onesixty', 'twohundred']
    fontSize = 4
    numberFontSizes = [20, 25, 32, 40, 50, 63, 80, 100, 125, 160, 200]
    notdone = true
    q = this.fontSizes[this.fontSize]
    m=0
    minScore = -1
    maxScore = 10
    Success() {
        this.numCorrect++
        this.newLetter()
    }
    Failure() {
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
            this.q = this.fontSizes[this.fontSize]
        }
        else if (this.numCorrect>=3) {
            this.maxScore=this.fontSize
            this.fontSize--
            this.numWrong=0
            this.numCorrect=0
            this.q = this.fontSizes[this.fontSize]
        }
        if (this.maxScore-this.minScore==1) {
            this.notdone=false
            this.q="normal"
            this.m=this.numberFontSizes[this.maxScore]
        }
        this.setFontSize(this.fontSize)
    }
    dpi: number = (function () {
        for (var i = 56; i < 2000; i++) {
            if (matchMedia("(max-resolution: " + i + "dpi)").matches === true) {
                return i;
            }
        }
        
        return window.devicePixelRatio*96;
    })();
    setFontSizeForClass(fontSize) {
        var elms = document.getElementById("chart");
        
        elms.style.fontSize = Math.floor(fontSize * this.dpi)+"px"
        console.log(Math.floor(fontSize * this.dpi*96))
    }
    
    setFontSize(number) {
        
            var calcFontSize=0.00875*this.numberFontSizes[number]
            this.setFontSizeForClass(calcFontSize)
    }
}