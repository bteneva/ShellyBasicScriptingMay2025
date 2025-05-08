//Define an object song, which holds the following information: type, name, and time.
// You will receive the input as three arrays of strings in the following format: [{type}, {name}, {duration}] and the last parameter will be a string, representing a type of song.
// Print only the names of the songs, which have the same type (obtained as the last parameter). 


function parseData(input){
    let type = input[0];
    let name = input[1];
    let duration = input[2];

    let songObj = {
        type: type,
        name: name,
        duration: duration
    }
    return songObj;
}

function processData(input){
    let songs = [];
    let criteriaType = "No value provided";

    for (let i = 0; i < input.length; i++){
        let currentElement = input[i];

        if (i == input.length-1){
            criteriaType = currentElement;
            continue;
        }

        let song = parseData(currentElement);
        songs.push(song);
    }
    
    let filteredData = songs.filter(function(element){
        return element.type === criteriaType
    })
    return filteredData;
}

let input = [['favourite', 'DownTown', '3:14'],
['favourite', 'Kiss', '4:16'],
['favourite', 'Smooth Criminal', '4:01'],
'favourite']

let result = processData(input);

for (let i = 0; i < result.length; i++) {
    let element = result[i];
    console.log(element.name);
}