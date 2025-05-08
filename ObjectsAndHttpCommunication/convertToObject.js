//Write a function that receives a string in JSON format and converts it to an object.
// Loop through all the keys and print them with their values in format: "{key}: {value}"

function convertToObject(input){
    let parseInput = JSON.parse(input);

    for (let element in parseInput){
        let key = parseInput[element];
        console.log(element, "-", key);
    }
}
convertToObject('{"name": "Shelly Plug S", "version": "1.6.0", "generation": 3}');
