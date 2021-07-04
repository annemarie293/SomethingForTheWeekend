function initMap() {
  const map = new google.maps.Map(document.getElementById("google-map"), {
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
  name: "arcachon",
  lat: 44.66429443582841,
  lng: -1.168633501916241
}, {
  name: "madeira",
  lat: 32.74883604648389,
  lng: -17.016760364644416
}, {
  name: "ischia",
  lat: 40.72954943271221,
  lng: 13.90233479680736
}, {
  name: "skiathos",
  lat: 39.16658699888563,
  lng: 23.49052776734702
}]

const winterLocations = [{
  name: "budapest",
  lat: 47.497692312534895,
  lng: 19.045855728245087
}, {
  name: "hallstatt",
  lat: 47.56213795746026,
  lng: 13.649767558157125
}, {
  name: "tallinn",
  lat: 59.43563118854086,
  lng: 24.748617012494904
}, {
  name: "bergen",
  lat: 60.392541530778836,
  lng: 5.313284628475543
}]

const cityLocations = [{
  name: "riga",
  lat: 56.94556321585074,
  lng: 24.099631260635515
}, {
  name: "gdansk",
  lat: 54.352003211456925,
  lng: 18.646076073493834
}, {
  name: "bruges",
  lat: 51.20933380920364,
  lng: 3.2244522911872426
}, {
  name: "porto",
  lat: 41.15756719382757,
  lng: -8.629376466149939
}]

const foodLocations = [{
    name: "palermo",
    lat: 38.1148661348203,
    lng: 13.357973304272855
  },
  {
    name: "naples",
    lat: 40.85170745896896,
    lng: 14.265719186192603
  },
  {
    name: "lille",
    lat: 50.62942892254915,
    lng: 3.057803058306979
  },
  {
    name: "galway",
    lat: 53.27063598265032,
    lng: -9.057232068160024
  }
]

// function to add marker locations on google map for the selection destinaation group
function markMap(markerLocations) {
  const map = new google.maps.Map(document.getElementById("google-map"), {
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
  $("#location-buttons").html('<button type="button" id="arcachon-button" class="location-button btn btn-lg">Arcachon</button> <button type="button" id="madeira-button" class="location-button btn btn-lg">Madeira</button> <div class="w-100 p-1 d-block d-md-none"></div> <button type="button" id="ischia-button" class="location-button btn btn-lg">Ischia</button> <button type="button" id="skiathos-button" class="location-button btn btn-lg">Skiathos</button>');
});

$("#winter-button").click(function () {
  var buttonID = $("#winter-button");
  destinationButtonActiveSwitch(buttonID);
  markMap(winterLocations);
  $("#location-buttons").html('<button type="button" id="budapest-button" class="location-button btn btn-lg">Budapest</button> <button type="button" id="hallstatt-button" class="location-button btn btn-lg">Hallstatt</button> <div class="w-100 p-1 d-block d-md-none"></div> <button type="button" id="tallinn-button" class="location-button btn btn-lg">Tallinn</button> <button type="button" id="bergen-button" class="location-button btn btn-lg">Bergen</button>');
})

$("#city-button").click(function () {
  var buttonID = $("#city-button");
  destinationButtonActiveSwitch(buttonID);
  markMap(cityLocations);
  $("#location-buttons").html('<button type="button" id="riga-button" class="location-button btn btn-lg">Riga</button> <button type="button" id="gdansk-button" class="location-button btn btn-lg">Gdansk</button> <div class="w-100 p-1 d-block d-md-none"></div> <button type="button" id="bruges-button" class="location-button btn btn-lg">Bruges</button> <button type="button" id="porto-button" class="location-button btn btn-lg">Porto</button>');
});

$("#food-button").click(function () {
  var buttonID = $("#food-button");
  destinationButtonActiveSwitch(buttonID);
  markMap(foodLocations);
  $("#location-buttons").html('<button type="button" id="palermo-button" class="location-button btn btn-lg">Palermo</button> <button type="button" id="naples-button" class="location-button btn btn-lg">Naples</button> <div class="w-100 p-1 d-block d-md-none"></div> <button type="button" id="lille-button" class="location-button btn btn-lg">Lille</button> <button type="button" id="galway-button" class="location-button btn btn-lg">Galway</button>');

})


//Function to search for nearby hotels in the selected location
function hotelMap(lat, lng) {
  const location = new google.maps.LatLng(lat, lng);
  //infowindow = new google.maps.InfoWindow();
  map2 = new google.maps.Map(document.getElementById("location-map"), {
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

$(document).on("DOMNodeInserted", "#arcachon-button", function() {
$(this).click(function () {
  hotelMap((summerLocations[0].lat), (summerLocations[0].lng));
});
});

$(document).on("DOMNodeInserted", "#madeira-button", function() {
$(this).click(function () {
  hotelMap((summerLocations[1].lat), (summerLocations[1].lng));
});
});

$(document).on("DOMNodeInserted", "#ischia-button", function() {
$(this).click(function () {
  hotelMap(summerLocations[2].lat, summerLocations[2].lng);
});
});

$(document).on("DOMNodeInserted", "#skiathos-button", function() {
$(this).click(function () {
  hotelMap(summerLocations[3].lat, summerLocations[3].lng);
});
});

$(document).on("DOMNodeInserted", "#budapest-button", function() {
$(this).click(function () {
  hotelMap(winterLocations[0].lat, winterLocations[0].lng);
});
});

$(document).on("DOMNodeInserted", "#hallstatt-button", function() {
$(this).click(function () {
  hotelMap(winterLocations[1].lat, winterLocations[1].lng);
});
});

$(document).on("DOMNodeInserted", "#tallinn-button", function() {
$(this).click(function () {
  hotelMap(winterLocations[2].lat, winterLocations[2].lng);
});
});

$(document).on("DOMNodeInserted", "#bergen-button", function() {
$(this).click(function () {
  hotelMap(winterLocations[3].lat, winterLocations[3].lng);
});
});

$(document).on("DOMNodeInserted", "#riga-button", function() {
$(this).click(function () {
  hotelMap(cityLocations[0].lat, cityLocations[0].lng);
});
});

$(document).on("DOMNodeInserted", "#gdansk-button", function() {
$(this).click(function () {
  hotelMap(cityLocations[1].lat, cityLocations[1].lng);
});
});

$(document).on("DOMNodeInserted", "#bruges-button", function() {
$(this).click(function () {
  hotelMap(cityLocations[2].lat, cityLocations[2].lng);
});
});

$(document).on("DOMNodeInserted", "#porto-button", function() {
$(this).click(function () {
  hotelMap(cityLocations[3].lat, cityLocations[3].lng);
});
});

$(document).on("DOMNodeInserted", "#palermo-button", function() {
$(this).click(function () {
  hotelMap(foodLocations[0].lat, foodLocations[0].lng);
});
});

$(document).on("DOMNodeInserted", "#naples-button", function() {
$(this).click(function () {
  hotelMap(foodLocations[1].lat, foodLocations[1].lng);
});
});

$(document).on("DOMNodeInserted", "#lille-button", function() {
$(this).click(function () {
  hotelMap(foodLocations[2].lat, foodLocations[2].lng);
});
});

$(document).on("DOMNodeInserted", "#galway-button", function() {
$(this).click(function () {
  hotelMap(foodLocations[3].lat, foodLocations[3].lng);
});
});