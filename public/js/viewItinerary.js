window.onload = (event) => {
  // Use this to retain user state between html pages.
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('Logged in as: ' + user.displayName);
      getItin(googleUserId);
    } else {
      // If not logged in, navigate back to login page.
      window.location = 'index.html';
    };
  });
};

const viewItinButton = document.querySelector("#viewItinButton");
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
  for (const itinItem in itin ){
    const Itinerary = data[itinItem];
    // For each note create an HTML card
    cards += createCard(itin, itinItem)
  };
  // Inject our string of HTML into our viewNotes.html page
  document.querySelector('#app').innerHTML = cards;
};

const createCard = (itin,itinId) => {
  return `
    <div class="column is-one-quarter">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">${itin.title}</p>
        </header>
        <header class="card-header">
          <p class="card-header-title">${itin.date}</p>
        </header>
        <div class="card-content">
          <div class="content">${itin.description}</div>
        </div>
        <footer class = "card-footer">
            <a href = "#" class="card-footer-item" onclick="editNote('${itinId}')">
                Edit
            </a>
            <a href = "#" class="card-footer-item" onclick="deleteNote('${itinId}')">
                Delete
            </a>
        </footer>
      </div>
    </div>
  `;
}

const deleteNote = (itinId) => { 
        
    firebase.database().ref(`users/${googleUserId}/${itinId}`).remove();
};

/*const editNote = (itinId) => {
    const editNoteModal = document.querySelector('#editNoteModal');
    const notesRef = firebase.database().ref(`users/${googleUserId}`);
    notesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        const itin = data[itinId];
        document.querySelector('#editTitleInput').value = itin.title;
        document.querySelector('#editTextInput').value = itin.description;
         document.querySelector('#editNoteId').value = noteId;
    })
    editNoteModal.classList.toggle('is-active')
}

const closeEditModal = () => {
    const editNoteModal = document.querySelector('#editNoteModal');
    editNoteModal.classList.toggle('is-active');
}

const saveEditedNote = () => {
    const noteTitle = document.querySelector("#editTitleInput").value;
    const noteText = document.querySelector("#editTextInput").value;
    const noteId = document.querySelector("#editNoteId").value;
    const noteEdits = {
        title: noteTitle, 
        text: noteText,
    }
    firebase.database().ref(`users/${googleUserId}/${noteId}`).update(noteEdits);
    closeEditModal();
    

}

const archiveNotes = (noteId) => {
    archiveNotes = firebase.database().ref(`users/${googleUserId}/${noteId}`);

}
*/
