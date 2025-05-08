let url = "https://v2.jokeapi.dev/joke/Programming?safe-mode";
Shelly.call("HTTP.GET", {url: url}, function(response){
    let parsedResponse = JSON.parse(response.body);
    let type = parsedResponse.type;
    let joke = "";
    if (type == "single"){
        joke = "The joke is: " + parsedResponse.joke;
    } else {
        let firstLine = parsedResponse.setup;
        let secondLine = parsedResponse.delivery;

        joke = "The setup is: " + firstLine + "n\The delivery is: " + secondLine;
    }
    console.log(joke);
})