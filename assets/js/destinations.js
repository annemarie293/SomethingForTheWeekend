function initMap() {
  const map = new google.maps.Map(document.getElementById("destination-map"), {
    zoom: 2.5,
    center: {
      lat: 48.91473349834997,
      lng: 14.654953491288719
    },
  });
  const map2 = new google.maps.Map(document.getElementById("location-map"), {
    zoom: 2.5,
    center: {
      lat: 48.91473349834997,
      lng: 14.654953491288719
    },
  });
}

const summerLocations = [{
  name: "Arcachon",
  lat: 44.66429443582841,
  lng: -1.168633501916241, 
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}, {
  name: "Madeira",
  lat: 32.66943006090448, 
  lng: -16.926163872134673,
  text:""
}, {
  name: "Ischia",
  lat: 40.72748712044653, 
  lng: 13.944475911088134,
  text:""
}, {
  name: "Skiathos",
  lat: 39.16314268526632, 
  lng: 23.49045709979414,
  text:""
}]

const winterLocations = [{
  name: "Budapest",
  lat: 47.497692312534895,
  lng: 19.045855728245087,
  text:""
}, {
  name: "Hallstatt",
  lat: 47.56213795746026,
  lng: 13.649767558157125,
  text:""
}, {
  name: "Tallinn",
  lat: 59.43563118854086,
  lng: 24.748617012494904,
  text:""
}, {
  name: "Bergen",
  lat: 60.392541530778836,
  lng: 5.313284628475543,
  text:""
}]

const cityLocations = [{
  name: "Riga",
  lat: 56.94556321585074,
  lng: 24.099631260635515,
  text:""
}, {
  name: "Gdansk",
  lat: 54.390124693792266,
  lng: 18.61325243292161,
  text:""
}, {
  name: "Bruges",
  lat: 51.20933380920364,
  lng: 3.2244522911872426,
  text:""
}, {
  name: "Porto",
  lat: 41.15756719382757,
  lng: -8.629376466149939,
  text:""
}]

const foodLocations = [{
    name: "Palermo",
    lat: 38.1148661348203,
    lng: 13.357973304272855,
    text:""
  },
  {
    name: "Naples",
    lat: 40.85170745896896,
    lng: 14.265719186192603,
    text:""
  },
  {
    name: "Lille",
    lat: 50.62942892254915,
    lng: 3.057803058306979,
    text:""
  },
  {
    name: "Galway",
    lat: 53.27063598265032,
    lng: -9.057232068160024,
    text:""
  }
]

// function to add marker locations on destination map for the selection destination group
function markMap(markerLocations) {
  const map = new google.maps.Map(document.getElementById("destination-map"), {
    zoom: 2.5,
    center: {
      lat: 48.91473349834997,
      lng: 14.654953491288719
    },

  });

  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const markers = markerLocations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  new MarkerClusterer(map, markers, {
    imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });;

}

//function to remove active CSS classs from previously selected destination button, and apply to current selected desintation
function destinationButtonActiveSwitch(buttonID) {
  $(".destination-button-active").removeClass("destination-button-active").addClass("destination-button");
  $(buttonID).removeClass("destination-button").addClass("destination-button-active");
}

//scripts to add location markers to destination map and highlight destination type button once selected
$("#summer-button").click(function () {
  var buttonID = $("#summer-button");
  destinationButtonActiveSwitch(buttonID);
  markMap(summerLocations);
  $("#locations-section").addClass("hide");
  $("#location-buttons").html('<button type="button" id="arcachon-button" class="location-button btn btn-lg">Arcachon</button> <button type="button" id="madeira-button" class="location-button btn btn-lg">Madeira</button> <div class="w-100 p-1 d-block d-md-none"></div> <button type="button" id="ischia-button" class="location-button btn btn-lg">Ischia</button> <button type="button" id="skiathos-button" class="location-button btn btn-lg">Skiathos</button>');
});

$("#winter-button").click(function () {
  var buttonID = $("#winter-button");
  destinationButtonActiveSwitch(buttonID);
  markMap(winterLocations);
  $("#locations-section").addClass("hide");
  $("#location-buttons").html('<button type="button" id="budapest-button" class="location-button btn btn-lg">Budapest</button> <button type="button" id="hallstatt-button" class="location-button btn btn-lg">Hallstatt</button> <div class="w-100 p-1 d-block d-md-none"></div> <button type="button" id="tallinn-button" class="location-button btn btn-lg">Tallinn</button> <button type="button" id="bergen-button" class="location-button btn btn-lg">Bergen</button>');
})

$("#city-button").click(function () {
  var buttonID = $("#city-button");
  destinationButtonActiveSwitch(buttonID);
  markMap(cityLocations);
  $("#locations-section").addClass("hide");
  $("#location-buttons").html('<button type="button" id="riga-button" class="location-button btn btn-lg">Riga</button> <button type="button" id="gdansk-button" class="location-button btn btn-lg">Gdansk</button> <div class="w-100 p-1 d-block d-md-none"></div> <button type="button" id="bruges-button" class="location-button btn btn-lg">Bruges</button> <button type="button" id="porto-button" class="location-button btn btn-lg">Porto</button>');
});

$("#food-button").click(function () {
  var buttonID = $("#food-button");
  destinationButtonActiveSwitch(buttonID);
  $("#locations-section").addClass("hide");
  markMap(foodLocations);
  $("#location-buttons").html('<button type="button" id="palermo-button" class="location-button btn btn-lg">Palermo</button> <button type="button" id="naples-button" class="location-button btn btn-lg">Naples</button> <div class="w-100 p-1 d-block d-md-none"></div> <button type="button" id="lille-button" class="location-button btn btn-lg">Lille</button> <button type="button" id="galway-button" class="location-button btn btn-lg">Galway</button>');

})


//Function to search for nearby hotels in the selected location
function hotelMap(lat, lng) {

  const location = new google.maps.LatLng(lat, lng);
  //infowindow = new google.maps.InfoWindow();
  const map2 = new google.maps.Map(document.getElementById("location-map"), {
    center: location,
    zoom: 14,
  });
  // Create the places service.
  const service = new google.maps.places.PlacesService(map2);

  // Perform a nearby search.
  service.nearbySearch({
      location: location,
      radius: 10000,
      type: "lodging"
    },
    (results, status) => {
      if (status !== "OK" || !results) return;
      addPlaces(results, map2);
    }
  );
}
//Function to add hotel markers on to the city map of the selected location
function addPlaces(places, map) {
  for (const place of places) {
    if (!place.geometry || !place.geometry.location) return;
    const marker = new google.maps.Marker({
      map,
      title: place.name,
      position: place.geometry.location,
    });
    google.maps.event.addListener(marker, "click", () => {
      infowindow.setContent(place.name || "");
      infowindow.open(map);
    });
  }
}


// To remove hidden class from locations section on click of any location button

function showHiddenSection() {
  $(".hide").removeClass("hide");
}

// on-click function for each location button
$(document).on("DOMNodeInserted", "#arcachon-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap((summerLocations[0].lat), (summerLocations[0].lng));
    $("#location-name").html(summerLocations[0].name);
    $("#location-image").attr("src","assets/images/arcachon.jpeg").attr("alt","image of arcachon");
    $("#location-text").html(summerLocations[0].text);
  });
});

$(document).on("DOMNodeInserted", "#madeira-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap((summerLocations[1].lat), (summerLocations[1].lng));
    $("#location-name").html(summerLocations[1].name);
    $("#location-image").attr("src","assets/images/madeira.jpeg").attr("alt","image of madeira");
    $("#location-text").html(summerLocations[1].text);
  });
});

$(document).on("DOMNodeInserted", "#ischia-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(summerLocations[2].lat, summerLocations[2].lng);
    $("#location-name").html(summerLocations[2].name);
    $("#location-image").attr("src","assets/images/ischia.jpeg").attr("alt","image of ischia");
    $("#location-text").html(summerLocations[2].text);
  });
});

$(document).on("DOMNodeInserted", "#skiathos-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(summerLocations[3].lat, summerLocations[3].lng);
    $("#location-name").html(summerLocations[3].name);
    $("#location-image").attr("src","assets/images/skiathos.jpg").attr("alt","image of skiathos");
    $("#location-text").html(summerLocations[3].text);
  });
});

$(document).on("DOMNodeInserted", "#budapest-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(winterLocations[0].lat, winterLocations[0].lng);
    $("#location-name").html(winterLocations[0].name);
    $("#location-image").attr("src","assets/images/budapest.jpeg").attr("alt","image of budapest");
    $("#location-text").html(winterLocations[0].text);
  });
});

$(document).on("DOMNodeInserted", "#hallstatt-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(winterLocations[1].lat, winterLocations[1].lng);
    $("#location-name").html(winterLocations[1].name);
    $("#location-image").attr("src","assets/images/hallstatt.jpg").attr("alt","image of hallstatt");
    $("#location-text").html(winterLocations[1].text);
  });
});

$(document).on("DOMNodeInserted", "#tallinn-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(winterLocations[2].lat, winterLocations[2].lng);
    $("#location-name").html(winterLocations[2].name);
    $("#location-image").attr("src","assets/images/tallinn.jpg").attr("alt","image of tallinn");
    $("#location-text").html(winterLocations[2].text);
  });
});

$(document).on("DOMNodeInserted", "#bergen-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(winterLocations[3].lat, winterLocations[3].lng);
    $("#location-name").html(winterLocations[3].name);
    $("#location-image").attr("src","assets/images/bergen.jpeg").attr("alt","image of bergen");
    $("#location-text").html(winterLocations[3].text);
  });
});

$(document).on("DOMNodeInserted", "#riga-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(cityLocations[0].lat, cityLocations[0].lng);
    $("#location-name").html(cityLocations[0].name);
    $("#location-image").attr("src","assets/images/riga.jpeg").attr("alt","image of riga");
    $("#location-text").html(cityLocations[0].text);
  });
});

$(document).on("DOMNodeInserted", "#gdansk-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(cityLocations[1].lat, cityLocations[1].lng);
    $("#location-name").html(cityLocations[1].name);
    $("#location-image").attr("src","assets/images/gdansk.jpeg").attr("alt","image of gdansk");
    $("#location-text").html(cityLocations[1].text);
  });
});

$(document).on("DOMNodeInserted", "#bruges-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(cityLocations[2].lat, cityLocations[2].lng);
    $("#location-name").html(cityLocations[2].name);
    $("#location-image").attr("src","assets/images/bruges.jpeg").attr("alt","image of bruges");
    $("#location-text").html(cityLocations[2].text);
  });
});

$(document).on("DOMNodeInserted", "#porto-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(cityLocations[3].lat, cityLocations[3].lng);
    $("#location-name").html(cityLocations[3].name);
    $("#location-image").attr("src","assets/images/porto.jpeg").attr("alt","image of porto");
    $("#location-text").html(cityLocations[3].text);
  });
});

$(document).on("DOMNodeInserted", "#palermo-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(foodLocations[0].lat, foodLocations[0].lng);
    $("#location-name").html(foodLocations[0].name);
    $("#location-image").attr("src","assets/images/palermo.jpg").attr("alt","image of palermo");
    $("#location-text").html(foodLocations[0].text);
  });
});

$(document).on("DOMNodeInserted", "#naples-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(foodLocations[1].lat, foodLocations[1].lng);
    $("#location-name").html(foodLocations[1].name);
    $("#location-image").attr("src","assets/images/naples.jpg").attr("alt","image of naples");
    $("#location-text").html(foodLocations[1].text);
  });
});

$(document).on("DOMNodeInserted", "#lille-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(foodLocations[2].lat, foodLocations[2].lng);
    $("#location-name").html(foodLocations[2].name);
    $("#location-image").attr("src","assets/images/lille.jpg").attr("alt","image of lille");
    $("#location-text").html(foodLocations[2].text);
  });
});

$(document).on("DOMNodeInserted", "#galway-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(foodLocations[3].lat, foodLocations[3].lng);
    $("#location-name").html(foodLocations[3].name);
    $("#location-image").attr("src","assets/images/galway.jpg").attr("alt","image of galway");
    $("#location-text").html(foodLocations[3].text).addClass("content-height");
  });
});