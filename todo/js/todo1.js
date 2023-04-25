/*
    Gleaned from the following Pen:

    https://codepen.io/learnwebcode/pen/qBEKBwx?editors=1010
 */

//  Create $ alias for document.getElementById
//  Gleaned from the following URL:
//  https://stackoverflow.com/questions/954417/make-alias-to-document-getelementbyid-in-javascript
const $ = id => document.getElementById(id);

//  Bind local JS variables to their HTML file equivalents
const theForm  = $("theForm")
const theField = $("theField")
const theList  = $("theList")

//  data array will hold local pased local storage data
let data = []
if (localStorage.getItem("domData")) 
{
  //  JSON.parse turns a string of JSON text into 
  //  a JavaScript object
  data = JSON.parse(localStorage.getItem("domData"))
}

//  Fill the list
function onLoad() {
  theList.innerHTML = data
    .map(function(item) 
    {
      return itemTemplate(item)
    })
    .join("")
}

onLoad()

//  Return todo item, Edit button, and Delete button
function itemTemplate(item) 
{
  return `<li>
            <span class="value">${item}</span>
            <button onclick="handleEdit(this)">Edit</button>
            <button onclick="handleDelete(this)">Delete</button>
          </li>`
}

//  Attempt to add new todo
theForm.addEventListener("submit", function(e) 
{
  let addItem = theField.value
  //alert(addItem)

  //  ONly add if todo item is not empty
  if (addItem !== "")
  {
    e.preventDefault()
    theList.insertAdjacentHTML("beforeend", 
                              itemTemplate(theField.value))
    theField.value = ""
    saveData()
  }
  else
  {
    alert("No todo item to add in textbox!")
  }
})

//  Edit existing todo item
function handleEdit(todo) 
{
  let newValue = prompt("Enter new value.", 
              todo.parentElement.querySelector(".value").innerHTML)
  if (newValue) 
  {
    todo.parentElement.querySelector(".value").innerHTML = newValue
  }
  saveData()
}

//  Let use delete "active" todo item
function handleDelete(todo) 
{
  let theItem    = todo.parentElement.querySelector(".value").innerHTML
  let removeItem = confirm("Are you sure you want to remove item "
                           + theItem + "?");

  //  User indicated that todo is to be removed
  if (removeItem)
  {
    todo.parentElement.remove()
    saveData()
  }
}

//  Save todo list
function saveData() 
{
  let allItems = []
  let simpleArray = theList.querySelectorAll("li").forEach(function(el) {
    allItems.push(el.querySelector(".value").innerHTML)
  })

  //  JSON.stringify turns a JavaScript object into JSON text
  //  and stores that JSON text in a string
  localStorage.setItem("domData", JSON.stringify(allItems))
}
