//Write a function that receives array of strings in the following format '{device name}'.
// Create a Shelly object that receives the name from the input. 
// It should also have a method named "details" that will print "{device name} optimize energy consumption" on the console.
// For each of the strings provided, you must create a shelly object and invoke the .details() method.

function shellyObj(input){
    let obj = {
        deviceName: "Not provided",
        init: function(name){
            this.deviceName = name;
        },
        details: function(){
            console.log(this.deviceName, "optimise energy consumption!");
        }
    }

    for (let i = 0; i < input.length; i++){
        let currentIterationDeviceName = input[i];
        let deviceObj = Object.create(obj);
        deviceObj.init(currentIterationDeviceName);
        deviceObj.details();
    }
}

shellyObj(['Shelly Plus 1', 'Shelly Dimmer 2', 'Shelly 1']);
