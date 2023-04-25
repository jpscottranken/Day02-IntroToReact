//  https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
//
//  To send an HTTP request, create an XMLHttpRequest object, 
//  open a URL, and send the request.
//
//  After the transaction completes, the object will contain 
//  useful information such as the response body and the HTTP
//  status of the result.
//

let fact = document.querySelector("#fact");
let factText = document.querySelector("#factText");
let numberInput = document.querySelector("#numberInput");

// Set up event listener
numberInput.addEventListener("input", getFactFetch);

 // Fetch with Fetch API
 function getFactFetch(){
    let number = numberInput.value;
    
    if(number != ''){
      fetch('http://numbersapi.com/'+number)
      .then(response => response.text())
      .then(data => {
        fact.style.display = 'block';
        factText.innerText = data;
      })
      .catch(err => console.log(err)); 
    }
  }