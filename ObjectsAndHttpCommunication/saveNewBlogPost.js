let objToSave = {
    body: "Body",
    title: "Title"
}

let url = "http://192.168.0.101:3030/jsonstore/blog/posts";

Shelly.call("HTTP.POST", {url: url, body: JSON.stringify(objToSave)}, function(response){
    console.log(response.body);
})