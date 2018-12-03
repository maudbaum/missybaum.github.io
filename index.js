function switchMap(name) {
    window.top.postMessage({map: name}, '*'); 
}

function switchInfo(title, body) {
	window.top.postMessage({title: title, body: body}, '*'); 
}

window.addEventListener('message', function(event) { 
    // IMPORTANT: Check the origin of the data! 
    if (~event.origin.indexOf('https://missybaum.github.io')) { 
        if (event.data.map) {
            document.getElementById("campus-map").data = event.data.map;
        }
        else {
            document.getElementById("info-heading").innerHTML = event.data.title;

            let newBody = event.data.body.replace(/\n/g, "<br>");
            document.getElementById("info").innerHTML = newBody;
        }
    }
    else { 
        console.log("don't hack me!");
        return; 
    } 
}); 