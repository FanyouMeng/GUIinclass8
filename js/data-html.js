// NOTE: If you run this file locally
// You will not get a server status and the example will fail
// Comment out lines 9 and 11 if you are working locally

var xhr = new XMLHttpRequest();                 // comment here: Create a new XMLHttpRequest object.

xhr.onload = function() {                       // comment here: Try to check if the xhr object has been loaded. If so, run the function.

  // The following conditional check will not work locally - only on a server
  if(xhr.status === 200) {                      // comment here: check if the status of the object is ok.
    document.getElementById('content').innerHTML = xhr.responseText; // comment here: get updates
  }
};

xhr.open('GET', 'data/data.html', true);        // comment here: prepare request
xhr.send(null);                                 // comment here: send request
