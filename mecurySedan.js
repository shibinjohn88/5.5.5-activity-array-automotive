//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//creating a sub class of vehicle class

class car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage, fuel, maximumSpeed) {
        super(make, model, year, color, mileage)
        this.fuel = fuel
        this.maximumPassengers = 5
        this.passenger = 0
        this.scheduleService = false
        this.maximumSpeed = maximumSpeed
        this.numberOfWheels = 4
    }

    loadPassenger(numberOfPassenger) {
        
        if (this.passenger < this.maximumPassengers) {
            if (this.passenger + numberOfPassenger <= this.maximumPassengers) {
                this.passenger += numberOfPassenger
                console.log(`Room available for ${this.maximumPassengers - this.passenger} more passengers`)
                return this.passenger
            }
            else {
                console.log(`Sorry this car can accomodate only ${this.maximumPassengers} passengers` )
            }
           
        }
        else {
            console.log(`Sorry this car reached maximum passenger capacity`)
        }
    }

    needService(mileage) {
        this.mileage = mileage
        if (this.mileage > 30000) {
            this.scheduleService = true
            console.log("need service immediately")
            return this.scheduleService
        }
        else {
            console.log("no service required")
            return this.scheduleService
        }
    }

    start() {
        if (this.fuel > 0) {
            this.started = true
            console.log("car engine started")
            return this.started
        }
        else {
            console.log("can't start engine please fill your fuel tank")
            return this.started
        }
    }
}


let mercurySedan = new car("Mercury", "Sedan", "2015", "black", 30000, 10, 160) 
mercurySedan.loadPassenger(4)
mercurySedan.loadPassenger(1)
mercurySedan.loadPassenger(1)
mercurySedan.needService(30000)
mercurySedan.needService(40000)
mercurySedan.start()

    

