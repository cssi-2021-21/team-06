let googleUser;
  window.onload = (event) => {
  // Use this to retain user state between html pages.
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('Logged in as: ' + user.displayName);
      googleUser = user;
    } else {
      window.location = 'index.html'; // If not logged in, navigate back to login page.
    }
  });
};

const handleItinSubmit = () => {
  const itinTitle = document.querySelector('#itinTitle').value;
  const dateOfTravel = document.querySelector('#dateOfTravel').value;
  const itinDescription = document.querySelector('#itinDescription').value;
  console.log(dateOfTravel)
  console.log(itinTitle)
  console.log(itinDescription)
  // 1. Format the data and write it to our database
  firebase.database().ref(`users/${googleUser.uid}`).push({
    title: itinTitle,
    date: dateOfTravel,
    description: itinDescription
  }).catch((error) => {
  console.error(error);
})
  // 2. Clear the form so that we can write a new note
  .then(() => {
    itinTitle.value = "";
    dateOfTravel.value = "";
    itinDescription.value = "";
  });
}