/*
 * map.js
 */
//= map.js

//window.addEventListener('load', eventWindowLoaded, false);

function eventWindowLoaded () {
    canvasApp();
}

function canvasApp () {
    var myCanvas = document.getElementById('myCanvas');

    var ctx = myCanvas.getContext('2d');


    myCanvas.width = 400;
    myCanvas.height = 400;

    function drawScreen () {
        var dx = 20;
        var dy = 20;

        var x = 0;
        var y = 0;
        var w = myCanvas.width;
        var h = myCanvas.height;

        var xy = 10;

        ctx.lineWidth = 1;

        while (y < h) {
            y = y + dy;
            ctx.moveTo(x, y);
            ctx.lineTo(w, y);
            ctx.stroke();

            // ctx.fillStyle="#FF0000";
            // ctx.fillRect(20,20,20,20);

            ctx.font = "1px Calibri";
            ctx.fillText(xy, x, y);
            console.log(xy);
            xy += 10;
        }

        y =0;
        xy =10;
        while (x < w) {
            x = x + dx;
            ctx.moveTo(x, y);
            ctx.lineTo(x,h);
            ctx.stroke();

            ctx.font = "1px Calibri";
            ctx.fillText(xy,x,10);
            xy+=10;
        }
    }

    drawScreen();

}