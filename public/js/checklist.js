let googleUserId;

//added function here
const addToDatabase = (input, quantityItem) => {
    firebase.database().ref(`users/${googleUserId}/checklist`).push({
        item: input.value,
        quantity: quantityItem.value
    });
    console.log("done")
}


document.querySelector('ul').addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function addElement() {
  var myInput = document.querySelector(".myInput");
  var inputQuantity = document.querySelector(".myQuant");

  
  if (myInput.value === '') {
    alert("The input is blank!");
  } 
  else{
      addToDatabase(myInput, inputQuantity);
      myInput.value = "";
      inputQuantity.value ="";
  }
  
}

window.onload = (event) => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('Logged in as: ' + user.displayName);
      googleUserId = user.uid;
      console.log(googleUserId)
      getListItems(googleUserId);
    } else {
      // If not logged in, navigate back to login page.
      window.location = 'login.html';
    };
  });
};


const getListItems = (userId) => {
  const notesRef = firebase.database().ref(`users/${userId}/checklist`);
  notesRef.on('value', (snapshot) => {
    const data = snapshot.val();
    renderDataAsHtml(data);
  });
};


const renderDataAsHtml = (data) => {
    var listItems = ``;
    var li = document.createElement("li");
    for (const key in data) {
    const myItem = data[key];
       listItems += 
       `
       <li id=${key}>
        ${myItem.item} (${myItem.quantity})
        <span class="close">\u00D7</span>
        </li>
        `;
    }
    document.querySelector("#myUL").innerHTML=listItems;


    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
    }

    var close = document.querySelectorAll(".close");
    var i;
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        this.parentElement.style.display = "none";

    }
    }
};

