let obj = {
    name: "Shelly plug S MTR",
    printname: function() {
        console.log("The device name is:", this.name, "!" );
    }
}
obj.name = "Shelly plug S GEN 3 MTR new";
obj.ipAddress = "http://192.168.0.111";
console.log(JSON.stringify(obj));
console.log(obj.name);
obj.printNameWithAddress = function(){
    console.log("The device name is:", this.name, "with IP address", this.ipAddress);
}
obj.printNameWithAddress();