let googleUser;

/*window.onload = (event) => {
  // Use this to retain user state between html pages.
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('Logged in as: ' + user.displayName);
      googleUser = user;
    } else {
      window.location = 'index.html'; // If not logged in, navigate back to login page.
    }
  });
}; */


const handleItinSubmit = () => {
  // 1. Capture the form data
  const itinTitle = document.querySelector('#itinTitle');
  const dateOfTravel = document.querySelector('#dateOfTravel').value;
  const itinDescription = document.querySelector('#itinDescription');
  // 2. Format the data and write it to our database
  firebase.database().ref(`users/${googleUser.uid}`).push({
    title: itinTitle.value,
    date: dateOfTravel.value,
    description: itinDescription.value
  })
  // 3. Clear the form so that we can write a new note
  .then(() => {
    itinTitle.value = "";
    dateOfTravel.value = "";
    itinDescription.value = "";
  });
}