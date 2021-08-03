let googleUser = "CihZifpVyNT4E2Phc3paZYQ6Nf62";

//added function here
const addToDatabase = (input, quantityItem) => {
    firebase.database().ref(`users/${googleUser}/checklist`).push({
        item: input.value,
        quantity: quantityItem.value
    });
}

// const deleteItem = (item) => {
//     firebase.database().ref(`users/${googleUser}/checklist/${item}`).remove();
// }


var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    this.parentElement.style.display = "none";
  }
}

document.querySelector('ul').addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function addElement() {
  var li = document.createElement("li");
  var myInput = document.querySelector(".myInput");
  var inputQuantity = document.querySelector(".myQuant");
  if(inputQuantity.value>1){
    var t = document.createTextNode(`${myInput.value} (${inputQuantity.value})`);
  }else{
        var t = document.createTextNode(myInput.value);
  }
  addToDatabase(myInput, inputQuantity);
 
  li.appendChild(t);
  if (myInput.value === '') {
    alert("The input is blank!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  myInput.value = "";
  inputQuantity.value ="";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}