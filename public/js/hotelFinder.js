let businessList = [{
    name: "Four Barrels Coffee",
    rating: 3.5,
    url: "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
    image_url: "https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg",
    phone: "+14152520800",
    location: {
        city: "San Francisco",
        state: "CA"
    },
    price: "$$"
},
{
    name: "The Hideout Kitchen",
    rating: 2,
    url: "https://www.yelp.com/biz/the-hideout-kitchen-lafayette-3?osq=Restaurants",
    image_url: "https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg",
    phone: "+14152520800",
    location: {
        city: "Lafayette",
        state: "CA"
    },
    price: "$$"
},
{
    name: "Postino",
    rating: 5,
    url: "https://www.yelp.com/biz/postino-lafayette-2?osq=postinos",
    image_url: "https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg",
    phone: "+14152520800",
    location: {
        city: "Lafayette",
        state: "CA"
    },
    price: "$$$"
}];

// const submitButton = document.querySelector("#submitButton");
let newHTML;

const submitForm = () =>{
    const results = document.querySelector("#results");
    const inputText = document.querySelector("#inputText");
    businessList.forEach(business =>{
        if(business.location.city === inputText.value){
            newHTML += `<div class="card cardColor">
            <h1 class="title">${business.name}</h1>
            <h2>Rating: ${business.rating} stars</h2>
            <div class="card-content">
                <h2 class="bigFont">Location: ${business.location.city}, ${business.location.state}</h2>
                <h2 class="bigFont">Price: ${business.price}</h2>
                <h2 class="bigFont">Phone: ${business.phone}</h2>
            </div>
            <div class="media pic-size">
                <img src="${business.image_url}"/>
            </div>
            </div>`
        }
    })
    results.innerHTML = newHTML;
}
