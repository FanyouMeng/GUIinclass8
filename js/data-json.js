// NOTE: If you run this file locally
// You will not get a server status
// You can comment out lines 9 and 26 to make it work locally

var xhr = new XMLHttpRequest();                 // comment here: Create a new XMLHttpRequest object.

xhr.onload = function() {                       // comment here: Try to check if the xhr object has been loaded. If so, run the function.
  // The following conditional check will not work locally - only on a server
  if(xhr.status === 200) {                      // comment here: check if the status of the object is ok.
    responseObject = JSON.parse(xhr.responseText); // comment here: get the json object from the server

    // comment here: trying to create a javaScript object to store the json object. Build up string with newContent.
    var newContent = '';
    for (var i = 0; i < responseObject.events.length; i++) { // comment here: loop through every line from the json object and create a corresponding javaScript object
      newContent += '<div class="event">';
      newContent += '<img src="' + responseObject.events[i].map + '" ';
      newContent += 'alt="' + responseObject.events[i].location + '" />';
      newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
      newContent += responseObject.events[i].date + '</p>';
      newContent += '</div>';
    }

    // comment here: get updates
    document.getElementById('content').innerHTML = newContent;

  }
};

xhr.open('GET', 'data/data.json', true);        // comment here: prepare request
xhr.send(null);                                 // comment here: send request

// When working locally in Firefox, you may see an error saying that the JSON is not well-formed.
// This is because Firefox is not reading the correct MIME type (and it can safely be ignored).

// If you get it on a server, you may need to se the MIME type for JSON on the server (application/JSON).
