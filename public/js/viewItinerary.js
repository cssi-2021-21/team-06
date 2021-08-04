let googleUserId;
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

const viewItinButton = document.querySelector("#viewItinButton")

viewItinButton.addEventListener("click", () => {
    window.location.href = "viewItinerary.html"
})

const getItin = (userId) => {
  const itinRef = firebase.database().ref(`users/${userId}`);
  itinRef.on('value', (snapshot) => {
    const data = snapshot.val();
    renderDataAsHtml(data);
  });
};

const renderDataAsHtml = (data) => {
  let cards = ``;
  for (const itinItem in data ){
    const itin = data[itinItem];
    // For each note create an HTML card
    cards += createItinCard(itin, itinItem)
  };
  // Inject our string of HTML into our viewNotes.html page
  document.querySelector('#app').innerHTML = cards;
};

const createItinCard = (itin,itinId) => {
  return `
    <div class="column is-one-quarter">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">${itin.title}</p>
        </header>
        <div class="card-content">
          <div class="content">${itin.text}</div>
        </div>
      </div>
    </div>
  `;
}
