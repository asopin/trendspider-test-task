class HouseHold {
    constructor() {
        this.connections = [];
    }

    connectTo(electricitySource) {
        let self = this;
        function isConnected(electricitySource) {
            return self.connections.filter(item => {
                return item === electricitySource;
            }).length > 0;
        }

        if (!isConnected(electricitySource)) {
            this.connections.push(electricitySource);
            if (electricitySource instanceof HouseHold) {
                electricitySource.connectTo(this)
            }
        }
    }

    disconnectFrom(electricitySource) {
        this.connections = this.connections.filter(item => item !== electricitySource);
    }

    hasElectricity(source) {
        for (const connection of this.connections) {
            if (connection !== source && connection.hasElectricity(this)) {
                return true;
            }
        }
        return false;
    }
}

module.exports = HouseHold