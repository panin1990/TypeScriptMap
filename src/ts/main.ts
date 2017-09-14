

/*
import {Map} from "./Map";
import {Progressbar} from "./Progressbar";

let test:Progressbar = new Progressbar(50,75,100);
let mapCanvas:Map = new Map();
window.onload = function() {
    console.log(mapCanvas.canvas);
    document.body.appendChild(mapCanvas.canvas);
    document.body.appendChild(test.htmlExit);
};
*/
import {Progressbar} from "./Progressbar";
let test:Progressbar = new Progressbar(50,75,100);
window.onload = function() {
    //console.log(mapCanvas.canvas);
    //document.body.appendChild(mapCanvas.canvas);
    document.body.appendChild(test.htmlExit);
};
console.log("test");