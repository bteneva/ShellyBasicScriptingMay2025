//Write a function that receives a name, a description, and a color and sets them to an object.
//Convert the object to JSON string and print it.

function convertToString(manufacturer, model, color){
    let deviceObj = {
        color: color,
        name: manufacturer,
        description: model
    };

    return deviceObj;
}
let createAnObjString = convertToString('Shelly', 'wall switch 2', 'white');
console.log(JSON.stringify(createAnObjString));