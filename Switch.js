class SwitchButton{
    constructor(status, electricLamp) {
        this.status = status;
        this.electricLamp = electricLamp;
    }
    connectToLamp(electricLamp){
        this.electricLamp = electricLamp;
    }
    switchOff(){
        this.electricLamp.turnOff();
    }
    switchOn(){
        this.electricLamp.turnOn();
    }
}
let btn = new SwitchButton();
btn.connectToLamp(lamp);