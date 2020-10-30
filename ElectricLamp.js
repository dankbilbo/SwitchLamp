class Lamp{
    constructor(status) {
        this.status = status;
    }
    turnOff(){
        this.status = false;
        alert("OFF");
    }
    turnOn(){
        this.status = true;
        alert("ON");
    }
    setStatus(status){
        this.status = status;
    }
}
let lamp = new Lamp();
lamp.setStatus(false);
