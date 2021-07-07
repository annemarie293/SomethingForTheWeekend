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
  lng: -1.168633501916241
}, {
  name: "Madeira",
  lat: 32.74883604648389,
  lng: -17.016760364644416
}, {
  name: "Ischia",
  lat: 40.72954943271221,
  lng: 13.90233479680736
}, {
  name: "Skiathos",
  lat: 39.16658699888563,
  lng: 23.49052776734702
}]

const winterLocations = [{
  name: "Budapest",
  lat: 47.497692312534895,
  lng: 19.045855728245087
}, {
  name: "Hallstatt",
  lat: 47.56213795746026,
  lng: 13.649767558157125
}, {
  name: "Tallinn",
  lat: 59.43563118854086,
  lng: 24.748617012494904
}, {
  name: "Bergen",
  lat: 60.392541530778836,
  lng: 5.313284628475543
}]

const cityLocations = [{
  name: "Riga",
  lat: 56.94556321585074,
  lng: 24.099631260635515
}, {
  name: "Gdansk",
  lat: 54.352003211456925,
  lng: 18.646076073493834
}, {
  name: "Bruges",
  lat: 51.20933380920364,
  lng: 3.2244522911872426
}, {
  name: "Porto",
  lat: 41.15756719382757,
  lng: -8.629376466149939
}]

const foodLocations = [{
    name: "Palermo",
    lat: 38.1148661348203,
    lng: 13.357973304272855
  },
  {
    name: "Naples",
    lat: 40.85170745896896,
    lng: 14.265719186192603
  },
  {
    name: "Lille",
    lat: 50.62942892254915,
    lng: 3.057803058306979
  },
  {
    name: "Galway",
    lat: 53.27063598265032,
    lng: -9.057232068160024
  }
]

// function to add marker locations on google map for the selection destinaation group
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

//scripts to add location markers to map and highlight destination type button once selected
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

// to remove hidden class from loactions section on click on location button

function showHiddenSection() {
  $(".hide").removeClass("hide");
}

// click function for each location button
$(document).on("DOMNodeInserted", "#arcachon-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap((summerLocations[0].lat), (summerLocations[0].lng));
    $("#location-name").html("Arcachon");
    $("#location-image").attr("src","assets/images/arcachon.jpeg").attr("alt","image of arcachon");
  });
});

$(document).on("DOMNodeInserted", "#madeira-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap((summerLocations[1].lat), (summerLocations[1].lng));
    $("#location-name").html("madeira");
    $("#location-image").attr("src","assets/images/madeira.jpeg").attr("alt","image of madeira");
  });
});

$(document).on("DOMNodeInserted", "#ischia-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(summerLocations[2].lat, summerLocations[2].lng);
    $("#location-name").html("ischia");
    $("#location-image").attr("src","assets/images/ischia.jpeg").attr("alt","image of ischia");
  });
});

$(document).on("DOMNodeInserted", "#skiathos-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(summerLocations[3].lat, summerLocations[3].lng);
    $("#location-name").html("skiathos");
    $("#location-image").attr("src","assets/images/skiathos.jpg").attr("alt","image of skiathos");
  });
});

$(document).on("DOMNodeInserted", "#budapest-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(winterLocations[0].lat, winterLocations[0].lng);
    $("#location-name").html("budapest");
    $("#location-image").attr("src","assets/images/budapest.jpeg").attr("alt","image of budapest");
  });
});

$(document).on("DOMNodeInserted", "#hallstatt-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(winterLocations[1].lat, winterLocations[1].lng);
    $("#location-name").html("hallstatt");
    $("#location-image").attr("src","assets/images/hallstatt.jpg").attr("alt","image of hallstatt");
  });
});

$(document).on("DOMNodeInserted", "#tallinn-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(winterLocations[2].lat, winterLocations[2].lng);
    $("#location-name").html("tallinn");
    $("#location-image").attr("src","assets/images/tallinn.jpg").attr("alt","image of tallinn");
  });
});

$(document).on("DOMNodeInserted", "#bergen-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(winterLocations[3].lat, winterLocations[3].lng);
    $("#location-name").html("bergen");
    $("#location-image").attr("src","assets/images/bergen.jpeg").attr("alt","image of bergen");
  });
});

$(document).on("DOMNodeInserted", "#riga-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(cityLocations[0].lat, cityLocations[0].lng);
    $("#location-name").html("riga");
    $("#location-image").attr("src","assets/images/riga.jpeg").attr("alt","image of riga");
  });
});

$(document).on("DOMNodeInserted", "#gdansk-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(cityLocations[1].lat, cityLocations[1].lng);
    $("#location-name").html("gdansk");
    $("#location-image").attr("src","assets/images/gdansk.jpeg").attr("alt","image of gdansk");
  });
});

$(document).on("DOMNodeInserted", "#bruges-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(cityLocations[2].lat, cityLocations[2].lng);
    $("#location-name").html("bruges");
    $("#location-image").attr("src","assets/images/bruges.jpeg").attr("alt","image of bruges");
  });
});

$(document).on("DOMNodeInserted", "#porto-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(cityLocations[3].lat, cityLocations[3].lng);
    $("#location-name").html("porto");
    $("#location-image").attr("src","assets/images/porto.jpeg").attr("alt","image of porto");
  });
});

$(document).on("DOMNodeInserted", "#palermo-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(foodLocations[0].lat, foodLocations[0].lng);
    $("#location-name").html("palermo");
    $("#location-image").attr("src","assets/images/palermo.jpg").attr("alt","image of palermo");
  });
});

$(document).on("DOMNodeInserted", "#naples-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(foodLocations[1].lat, foodLocations[1].lng);
    $("#location-name").html("naples");
    $("#location-image").attr("src","assets/images/naples.jpg").attr("alt","image of naples");
  });
});

$(document).on("DOMNodeInserted", "#lille-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(foodLocations[2].lat, foodLocations[2].lng);
    $("#location-name").html("lille");
    $("#location-image").attr("src","assets/images/lille.jpg").attr("alt","image of lille");
  });
});

$(document).on("DOMNodeInserted", "#galway-button", function () {
  $(this).click(function () {
    showHiddenSection();
    hotelMap(foodLocations[3].lat, foodLocations[3].lng);
    $("#location-name").html("galway");
    $("#location-image").attr("src","assets/images/galway.jpg").attr("alt","image of galway");
  });
});