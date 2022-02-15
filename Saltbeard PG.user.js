// ==UserScript==
// @name         Saltbeard PG
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Jesper
// @match        https://www.pennergame.de/activities/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function getTimeLeft(){
    const timeLeft = document.querySelector("#counter2").innerHTML.substring(1);
    return timeLeft;
}

function minutesFromTimeStr (timeStr){
    console.log("extracting minutes from timeStr "+ timeStr.slice(0, 1));
    return timeStr.slice(0, 1);
}

function secondsFromTimeStr (timeStr){
    console.log("extracting seconds from timeStr " +timeStr.slice(Time.length - 2));
    return timeStr.slice(Time.length - 2);
}

function calculateGammelTime(){
    const min = 20000;
    const max = 120000;
    const gammelTime = (Math.random() * (max - min)) + min;
    console.log("gammeltime: "+ gammelTime);
    return gammelTime;
}

function clickTimeBtn(){
    const btn = document.querySelector("#content > div.b61.zflexpix > div > table:nth-child(6) > tbody > tr:nth-child(3) > td:nth-child(2) > form > input.button_skill");
    btn.click();
}


function isTimerElapsed(){
    // hier war denke ich bei dir noch ein fehler drin weil du beim prüfen ob die Zeit vergangen ist nur auf die minuten geschaut hast
    if(minutesFromTimeStr(getTimeLeft()) == 0 && secondsFromTimeStr(getTimeLeft() == 0)){
        return true;
    }
    return false // <-- andernfalls
}

// ----------------------------------------------------------------
// Ab hier beginnt die ausfuehrung die Funktionen darueber sind
// erstmal nur definert erst durch "funktionsname()" wird die
// Funktion ausgefuehrt.
// ----------------------------------------------------------------

const TimeMin = minutesFromTimeStr(getTimeLeft());
const TimeSec = secondsFromTimeStr(getTimeLeft());


var TimeMinToMs = TimeMin * 60000;
var TimeSecToMs = TimeSec * 1000;

if (getTimeLeft() == '-/-'){
    setTimeout(() => {console.log('Gammeln')}, calculateGammelTime());
    clickTimeBtn();
}else {
    // timer ist abgelaufen
    if (isTimerElapsed()) {
        console.log(TimeSecToMs);
        setTimeout(() => {console.log('Gammeln')}, TimeSecToMs);
    } else {
        var TimeMs = TimeMinToMs + TimeSecToMs;
        console.log(TimeMs);
        setTimeout(() => {console.log('Gammeln')}, TimeMs);
    }
  }
})();
