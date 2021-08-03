let googleUser;
  const itinTitle = document.querySelector('#itinTitle');
  const dateOfTravel = document.querySelector('#dateOfTravel').value;
  const itinDescription = document.querySelector('#itinDescription');

const handleItinSubmit = (itinTitle, dateOfTravel, itinDescription) => {
  // 1. Format the data and write it to our database
  firebase.database().ref(`users/${googleUser.uid}`).push({
    title: itinTitle.value,
    date: dateOfTravel.value,
    description: itinDescription.value
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