const logIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        var user = result.user;
        console.log("login successful");
        document.querySelector("#welcome").innerHTML = `<p class="subtitle">Welcome Back ${user.displayName}! :D</p>`;
    }).catch((error) => {
        console.log("error was: ", error);
    })
}

const signUp = () => {
    console.log("user wants to create an account");
}