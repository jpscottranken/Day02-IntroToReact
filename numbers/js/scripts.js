let fact = document.querySelector("#fact");
let factText = document.querySelector("#factText");
let numberInput = document.querySelector("#numberInput");

// Set up event listener
numberInput.addEventListener("input", getFactXHR);
//numberInput.addeventlistener("input", getFactFetch);

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

function getFactFetch() {
    let number = numberInput.Value;

    if (number != "") {
        fetch("http://numbersapi.com" + number)
        .then((response) => response.text())
            .then((data) => {
                fact.style.display = "block";
                factText.innerText = data;
            })
            .catch((err) => console.log(err))
    }
}