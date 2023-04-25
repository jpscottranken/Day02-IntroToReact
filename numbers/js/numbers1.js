//  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//
//  The Fetch API provides a JavaScript interface for
//  accessing and manipulating parts of the protocol,
//  such as requests and responses.
//
//  It also provides a global fetch() method that 
//  provides an easy, logical way to fetch resources 
//  asynchronously across the network.
//
//  Unlike XMLHttpRequest that is a callback-based API,
//  Fetch is promise-based and provides a better 
//  alternative that can be easily used in service 
//  workers.
//
//  Fetch also integrates advanced HTTP concepts 
//  such as CORS and other extensions to HTTP.
//

let fact = document.querySelector("#fact");
let factText = document.querySelector("#factText");
let numberInput = document.querySelector("#numberInput");

// Set up event listener
numberInput.addEventListener("input", getFactXHR);

function getFactXHR() {
    let number = numberInput.value;

    if (number != "") {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "http://numbersapi.com/" + number);

        xhr.onload = function() {
            if (this.status == 200) {
                fact.style.display = "block";
                factText.innerText = this.responseText;
            }   
        }

        xhr.send();
    }
    else {
        fact.style.display = "none";
    }
   
}
