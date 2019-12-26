const HouseHold = require('./household');
const PowerPlant = require('./powerplant');


class World {


    constructor() {

    }

    createPowerPlant() {
        let powerplant = new PowerPlant();
        return powerplant;
    }


    createHousehold() {
        let household = new HouseHold();
        return household;
    }


    connectHouseholdToPowerPlant(household, powerPlant) {
        household.connectTo(powerPlant)
    }


    connectHouseholdToHousehold(household1, household2) {
        household1.connectTo(household2)
    }


    disconnectHouseholdFromPowerPlant(household, powerPlant) {
        household.disconnectFrom(powerPlant)
    }


    killPowerPlant(powerPlant) {
        powerPlant.kill()
    }


    repairPowerPlant(powerPlant) {
        powerPlant.repair()
    }


    householdHasEletricity(household) {
        return household.hasElectricity();
    }
}

module.exports = World;