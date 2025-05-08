//Create an object with the name vehicle that has the following properties:
// type – a string
// model – a string
// parts – an object that contains:
// engine – number (quality of the engine)
// power – number
// fuel – a number
// drive – a function that receives fuel loss and decreases the fuel of the vehicle by that number
// The init method should receive the type, the model, the parts as an object, and the fuel.
// Test your vehicle object.

function vehicle(){
    let vehicle ={
        type: "No value provided",
        model: "No value provided",
        parts: {},
        fuel: 0,
        drive: function(fuelLoss){
            this.fuel -=fuelLoss;
        },
        init: function(t, m, p, f){
            this.type = t;
            this.model = m;
            this.parts = p;
            this.fuel = f;
        }
    }
    let newVehicle = Object.create(vehicle);
    newVehicle.init("S", "N", { engine: 9, power: 500 }, 840);
    newVehicle.drive(20);
    console.log(newVehicle.fuel);
    console.log(newVehicle.parts.power);
}
vehicle();