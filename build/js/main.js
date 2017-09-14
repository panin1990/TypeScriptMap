"use strict";
exports.__esModule = true;
/**/
/**
 * Progressbar class
 */
var Progressbar = /** @class */ (function () {
    /**
     *
     * @param startValue(int)
     * @param nowValue(int)
     * @param finishValue(int)
     */
    function Progressbar(startValue, nowValue, finishValue) {
        if (startValue === void 0) { startValue = 0; }
        if (nowValue === void 0) { nowValue = 0; }
        this.startValue = startValue;
        this.nowValue = nowValue;
        this.finishValue = finishValue;
        this.onePercent = (this.finishValue - this.startValue) / 100;
        this.htmlExit = document.createElement("div");
        this.htmlExit.innerHTML = "<div class='max-progress'><div class='now-value' ></div></div>";
        this.htmlExit.style.width = '100px';
        this.htmlExit.getElementsByClassName('now-value')[0].style.width = (this.nowValue - this.startValue) / this.onePercent + 'px';
    }
    /**
     *
     * @param newValue(int)
     */
    Progressbar.prototype.update = function (newValue) {
        this.nowValue = newValue;
        this.htmlExit.getElementsByClassName('now-value')[0].style.width = (this.nowValue - this.startValue) / this.onePercent + 'px';
    };
    return Progressbar;
}());
exports.Progressbar = Progressbar;
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
var Progressbar_1 = require("./Progressbar");
exports.Progressbar = Progressbar_1.Progressbar;
var test = new Progressbar_1.Progressbar(50, 75, 100);
window.onload = function () {
    //console.log(mapCanvas.canvas);
    //document.body.appendChild(mapCanvas.canvas);
    document.body.appendChild(test.htmlExit);
};
console.log("test");

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJO0FBQ0o7O0dBRUc7QUFDSDtJQUtJOzs7OztPQUtHO0lBQ0gscUJBQW9CLFVBQXFCLEVBQVMsUUFBbUIsRUFBUyxXQUFrQjtRQUE1RSwyQkFBQSxFQUFBLGNBQXFCO1FBQVMseUJBQUEsRUFBQSxZQUFtQjtRQUFqRCxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFPO1FBQzVGLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLGdFQUFnRSxDQUFDO1FBQzNGLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDbEksQ0FBQztJQUVEOzs7T0FHRztJQUNILDRCQUFNLEdBQU4sVUFBUSxRQUFlO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ2xJLENBQUM7SUFDTCxrQkFBQztBQUFELENBM0JBLEFBMkJDLElBQUE7QUEzQlksa0NBQVc7QUErQnhCOzs7Ozs7Ozs7OztFQVdFO0FBQ0YsNkNBQTBDO0FBM0M3QixzQkEyQ0wseUJBQVcsQ0EzQ0s7QUE0Q3hCLElBQUksSUFBSSxHQUFlLElBQUkseUJBQVcsQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xELE1BQU0sQ0FBQyxNQUFNLEdBQUc7SUFDWixnQ0FBZ0M7SUFDaEMsOENBQThDO0lBQzlDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUM7QUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiovXG4vLz0gUHJvZ3Jlc3NiYXIudHNcblxuXG5cbi8qXG5pbXBvcnQge01hcH0gZnJvbSBcIi4vTWFwXCI7XG5pbXBvcnQge1Byb2dyZXNzYmFyfSBmcm9tIFwiLi9Qcm9ncmVzc2JhclwiO1xuXG5sZXQgdGVzdDpQcm9ncmVzc2JhciA9IG5ldyBQcm9ncmVzc2Jhcig1MCw3NSwxMDApO1xubGV0IG1hcENhbnZhczpNYXAgPSBuZXcgTWFwKCk7XG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2cobWFwQ2FudmFzLmNhbnZhcyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYXBDYW52YXMuY2FudmFzKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlc3QuaHRtbEV4aXQpO1xufTtcbiovXG5pbXBvcnQge1Byb2dyZXNzYmFyfSBmcm9tIFwiLi9Qcm9ncmVzc2JhclwiO1xubGV0IHRlc3Q6UHJvZ3Jlc3NiYXIgPSBuZXcgUHJvZ3Jlc3NiYXIoNTAsNzUsMTAwKTtcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAvL2NvbnNvbGUubG9nKG1hcENhbnZhcy5jYW52YXMpO1xuICAgIC8vZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYXBDYW52YXMuY2FudmFzKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlc3QuaHRtbEV4aXQpO1xufTtcbmNvbnNvbGUubG9nKFwidGVzdFwiKTsiXX0=
