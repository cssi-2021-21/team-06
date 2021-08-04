//tested with restaurants, can change this to fit hotels when yelp api is working

let queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";
let find = "hotel";
let limitNum = 12;

const submitForm = () => {
    document.querySelector('#results').innerHTML=""
    var inputLocation = document.querySelector("#locationText").value
    $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
        "accept": "application/json",
        "x-requested-with": "xmlhttprequest",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${apiKey}`
    },
    data: {
        term: find,
        location: inputLocation,
        limit: limitNum
    }
}).then(function (res) {
   // let results = res.data
    console.log(res);
     $.each(res.businesses, function(i, item) {
          var id = item.id;
          var alias = item.alias;
          var total = item.total;
          var phone = item.display_phone;
          var image = item.image_url;
          var name = item.name;
          var rating = item.rating;
          var reviewcount = item.review_count;
          var address = item.location.address1;
          var city = item.location.city;
          var state = item.location.state;
          var zipcode = item.location.zip_code;
          var url = item.url;
          document.querySelector('#results').innerHTML +=  createHotelCard(image, name, rating, reviewcount, address, city, state, zipcode, phone, url);
          document.querySelector("#foot").classList.remove("hidden");
 })
    });
}


const createHotelCard = (image, name, rating, reviewcount, address, city, state, zipcode, phone, url) =>{
    return `
     <div>
     <div class="card" onclick="openYelp('${url}')">
        <div class="card-image">
            <figure class="image is-4by3">
            <img src=${image} alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
            <div class="media-content">
                <p class="title is-4">${name}</p>
                <p class="subtitle is-6">${rating}/5 (${reviewcount} reviews)</p>
            </div>
            </div>

            <div class="content">
            ${address} ${city}, ${state} ${zipcode}
            <br>
            <a>${phone}</a>
            </div>
        </div>
    </div>
    </div>
`;

}

const openYelp = (url) =>{
    window.open(url, '_blank');
}

const openTab = (type) =>{
    document.querySelector('#results').innerHTML = "";
    document.querySelector("#locationText").value = null;
    document.querySelector("#foot").classList.add("hidden");

    if(type == "Hotels"){
        find = 'hotel';
    }
    else if(type == "Restaurants"){
        find = 'restaurant';
    }
    else{
        find = 'shopping';
    }
    document.querySelector("#hotelPage").innerHTML = 
    `<section id="hotelPage" class="hero is-small notification is-info has-text-centered background-grad hotel">
      <div class="hero-body">
        <p class="title">
       ${type} Finder
        </p>
      </div>

    <div class="tabs is-centered">
      <ul>
        <li href="#" onclick="openTab('Hotels')"><a>Hotels</a></li>
        <li><a href="#" onclick="openTab('Restaurants')">Restaurants</a></li>
        <li><a href="#" onclick="openTab('Shopping')">Shopping</a></li>
      </ul>
    </div>

</section>`
}

const showMore = () =>{
    limitNum += 12;
    submitForm();
}