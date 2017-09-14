/**
 * Progressbar class
 */
export class Progressbar {
    public onePercent: number;
    public htmlExit:any;

    
    /**
     *
     * @param startValue(int)
     * @param nowValue(int)
     * @param finishValue(int)
     */
    constructor (public startValue:number = 0, public nowValue:number = 0, public finishValue:number){
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
    update (newValue:number){
        this.nowValue = newValue;
        this.htmlExit.getElementsByClassName('now-value')[0].style.width = (this.nowValue - this.startValue) / this.onePercent + 'px';
    }
}
