import {Component, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { ActivatedRoute, Router } from '@angular/router';

import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


@Component({
    selector: 'babyChart',
    templateUrl: './babyChart.component.html',
    styleUrls: ['./type.component.css']
})
export class babyChartComponent{

    constructor(private router: Router){}
    chartLetters = ['H','O','T','V']
    d = this.chartLetters[Math.floor(Math.random() * 4)]
    x=this.d
    numCorrect=0
    blank = ""
    numWrong=0
    fontSizes = ['twenty', 'twentyfive', 'thirtytwo', 'forty', 'fifty', 'sixtythree', 'eighty', 'onehundred', 'onetwentyfive', 'onesixty', 'twohundred']
    fontSize = 4
    numberFontSizes = [20, 25, 32, 40, 50, 63, 80, 100, 125, 160, 200]
    notdone = true
    q = this.fontSizes[this.fontSize]
    minScore = -1
    maxScore = 10
    m=0
    next = false
    squareSize=""
    width=0;
    
    border=10
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
        this.d = this.chartLetters[Math.floor(Math.random() * 4)]
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
            this.m=this.numberFontSizes[this.maxScore]
            
            this.notdone=false
            this.q="normal"
        }
        this.setFontSize(this.fontSize)
    }
    a=""
    
    continue() {
        this.next=true
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
        var x = Math.floor(fontSize * this.dpi)
        elms.style.fontSize = x+"px"
        this.width=x+20
        this.border=x/10
        
    }
    setFontSize(number) {   
            var calcFontSize=0.00875*this.numberFontSizes[number]
            this.setFontSizeForClass(calcFontSize)
    }
}
    