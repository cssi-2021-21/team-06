let googleUserId;
//var newDate;
//let newDateArr;
window.onload = (event) => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('Logged in as: ' + user.displayName);
      googleUserId = user.uid;
      getItin(googleUserId);
    } else {
      window.location = 'index.html';
    };
  });
};

const getItin = (userId) => {
  const itinRef = firebase.database().ref(`users/${userId}`);
  itinRef.on('value', (snapshot) => {
    const data = snapshot.val();
    renderDataAsHtml(data);
  });
};

/*const sortDate = (oldDate) => {
    var d = new Date(oldDate)
    newDateArr.push((d.getTime()-d.getMilliseconds())/1000);
    console.log(newDate);
}*/




const renderDataAsHtml = (data) => {
  let cards = ``;
  for (const itinItem in data ){
    const itin = data[itinItem];
    //sortDate(itin.date)
    // For each note create an HTML card
    cards += createItinTable(itin, itinItem)
  };
  // Inject our string of HTML into our viewNotes.html page
  document.querySelector('#app').innerHTML = cards;
};

const createItinTable = (itin, itinId) => {
    return `
      <tr>
          <th>${itin.date}</th>
          <th>${itin.time}</th>
          <td><title="${itin.title}">${itin.title}<strong></strong></td>
          <td>${itin.description}</td>
      </tr>
  `
}


