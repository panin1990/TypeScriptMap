/**
 * Map Class
 */

export class Map {
    public fillPlants: Array<string> = [];
    public canvas:HTMLCanvasElement;
    public config:any;

    constructor (){

        this.createCanvas();
    }

    public createCanvas () {
        this.config = {
            width: 400,
            height: 400,
            step: 20,
            lineWidth: 1,
            plants: [
                {
                    x: 2,
                    y: 4,
                    type: 'eat',
                    color: 'red'
                },
                {
                    x: 10,
                    y: 16,
                    type: 'water',
                    color: 'blue'
                },
                {
                    x: 10,
                    y: 10,
                    type: 'player',
                    color: 'yellow'
                }
            ]
        };

        this.canvas = document.createElement('canvas');
        this.drawScreen();
    }

    public drawScreen (){
        this.canvas.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.canvas.width = this.config.width;
        this.canvas.height = this.config.height;

        let dx:number = this.config.step;
        let dy:number = this.config.step;

        let x:number = 0;
        let y:number = 0;
        let w:number = this.config.width;
        let h:number = this.config.height;


        let xy:number = 10;

        this.canvas.getContext('2d').lineWidth = this.config.lineWidth;

        while (y < h) {
            y = y + dy;
            this.canvas.getContext('2d').moveTo(x, y);
            this.canvas.getContext('2d').lineTo(w, y);
            this.canvas.getContext('2d').stroke();

            this.canvas.getContext('2d').font = "1px Calibri";
            this.canvas.getContext('2d').fillText('', x, y);
            xy += 10;
        }

        y = 0;
        xy = 10;

        while (x < w) {
            x = x + dx;
            this.canvas.getContext('2d').moveTo(x, y);
            this.canvas.getContext('2d').lineTo(x,h);
            this.canvas.getContext('2d').stroke();

            this.canvas.getContext('2d').font = "1px Calibri";
            this.canvas.getContext('2d').fillText('',x,10);
            xy += 10;
        }

        for (let i:number = 0; i < this.config.plants.length; i++){
            this.addObjectOnMap(this.config.plants[i]);
        }

    }

    public addObjectOnMap (plant:any){

        let plantX:number = (plant.x * this.config.step) - this.config.step;
        let plantY:number = (plant.y * this.config.step) - this.config.step;
        this.canvas.getContext('2d').fillStyle = plant.color;
        this.canvas.getContext('2d').fillRect(plantX,plantY,this.config.step,this.config.step);
        //console.log(this.fillPlants);
        this.fillPlants[plant.x + '_' + plant.y] = plant.type + '_' + plant.color;
    }

    public giveType (x:string,y:string){
        return this.fillPlants[x + '_' + y];
    }

}
