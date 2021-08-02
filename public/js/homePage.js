const logIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        var user = result.user;
        console.log("login successful");
        window.location = 'hotelFinder.html'; //for testing, can change later
    }).cath((error) => {
        console.log("error was: ", error);
    })
}

const signUp = () => {
    console.log("user wants to create an account");
}