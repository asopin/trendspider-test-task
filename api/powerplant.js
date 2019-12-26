class PowerPlant {
    constructor(){
        this.alive = true;
    }

    hasElectricity() {
        return this.alive;
    }

    kill() {
        this.alive = false;
    }
    repair() {
        this.alive = true;
    }
}

module.exports = PowerPlant