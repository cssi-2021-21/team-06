//tested with restuarants, can change this to fit hotels when yelp api is working

let queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";

const submitForm = () => {
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
        term: 'hotel',
        location: inputLocation,
    }
}).then(function (res) {
   // let results = res.data
    console.log(res);
     $.each(res.businesses, function(i, item) {
          var id = item.id;
                       var alias = item.alias;
                       var phone = item.display_phone;
                       var image = item.image_url;
                       var name = item.name;
                       var rating = item.rating;
                       var reviewcount = item.review_count;
                       var address = item.location.address1;
                       var city = item.location.city;
                       var state = item.location.state;
                       var zipcode = item.location.zip_code;
                       // Append our result into our page
                       $('#results').append('<div id="' + id + '" style="margin-top:50px;margin-bottom:50px;"><img src="' + image + '" style="width:200px;height:150px;"><br>We found <b>' + name + '</b> (' + alias + ')<br>Business ID: ' + id + '<br> Located at: ' + address + ' ' + city + ', ' + state + ' ' + zipcode + '<br>The phone number for this business is: ' + phone + '<br>This business has a rating of ' + rating + ' with ' + reviewcount + ' reviews.</div>');

     })
    });
}
