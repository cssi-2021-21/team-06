console.log("running");

let businessList = [{
    name: "Four Barrels Coffee",
    url: "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
    location: {
        city: "San Francisco",
        state: "CA"
    },
    price: "$$"
},
{
    name: "The Hideout Kitchen",
    url: "https://www.yelp.com/biz/the-hideout-kitchen-lafayette-3?osq=Restaurants",
    location: {
        city: "Lafayette",
        state: "CA"
    },
    price: "$$"
},
{
    name: "Postino",
    url: "https://www.yelp.com/biz/postino-lafayette-2?osq=postinos",
    location: {
        city: "Lafayette",
        state: "CA"
    },
    price: "$$$"
}];

// const submitButton = document.querySelector("#submitButton");
const results = document.querySelector("#results");

const submitForm = () =>{
    const inputText = document.querySelector("#inputText");
    console.log(inputText.value);
    console.log(businessList);
    // businessList.forEach(business =>{
    //     if(business.location.city.value === inputText.value){
    //         results.innerHTML="<h1>YAY</h1>"
    //         console.log(business);
    //     }
}
