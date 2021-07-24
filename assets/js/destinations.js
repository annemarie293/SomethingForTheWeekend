/*jshint esversion: 6 */
/*globals $:false */
/*globals google:false */

//To add google maps API on the page, called from GoogleMaps script on load of destinations.html (from Google maps documentation: https://developers.google.com/maps/documentation/javascript/overview)
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

// Information on each location: Name, co-ordinates and travel introduction text
const summerLocations = [{
  name: "Arcachon",
  lat: 44.66429443582841,
  lng: -1.168633501916241, 
  text: "A long-time oyster-harvesting area on the southern side of the tranquil, triangular Bassin d'Arcachon (Arcachon Bay), this seaside town lured bourgeois Bordelaise at the end of the 19th century. Its four little quarters are romantically named for each of the seasons, with villas that evoke the town's golden past amid a scattering of 1950s architecture. Arcachon's generous swathe of golden-sand beach seethes with sun-seekers in summer, but there are plenty of equally sandy but less-crowded beaches, including the lovely Plage des Arbousiers, just a short bike ride away. Arcachon is the perfect launch pad for swashbuckling adventures on nearby Dune du Pilat, Europe's highest sand dune."
}, {
  name: "Madeira",
  lat: 32.66943006090448, 
  lng: -16.926163872134673,
  text: "Geologically dramatic, bursting with exotic colour and warmed year-round by the Atlantic sun, Portugal’s most enchanting island is a place that keeps all its subtropical holiday promises. Pearl of the Atlantic, island of eternal spring…Madeira well deserves its fanciful nicknames and the affection visitors and locals alike feel for this tiny volcanic island that offers so much.<br>Repeatedly voted Europe's, and even the world's, top island destination, Madeira is a diverse place when it comes to holidaymaking. Black sand beaches, the frothing Atlantic, towering rock walls and gushing streams and irrigation channels make this an outdoor nirvana. But it's also a place of gentler pleasures such as wine tasting, visiting lush botanical gardens and watching embroiderers and wicker weavers at work. Hiking the levada irrigation channels is the top activity, with tens of thousands pulling on hiking boots to discover Madeira's secret interior"
}, {
  name: "Ischia",
  lat: 40.72748712044653, 
  lng: 13.944475911088134,
  text:"The volcanic outcrop of Ischia is the most developed and largest of the islands in the Bay of Naples. An early colony of Magna Graecia, first settled in the 8th century BC, Ischia today is famed for its thermal spas, manicured gardens, striking Aragonese castle and unshowy, straightforward Italian airs – a feature also reflected in its food. Ischia is a refreshing antidote to glitzy Capri. Most visitors head straight for the north-coast towns of Ischia Porto, Ischia Ponte, Forio and Lacco Ameno. Of these, Ischia Porto boasts the best bars, while Forio and Lacco Ameno have the prettiest spas and gardens. On the calmer south coast, the car-free perfection of Sant’Angelo offers a languid blend of a cosy harbour and lazy beaches. In between the coasts lies a less-trodden landscape of chestnut forests, vineyards and volcanic rock, loomed over by Monte Epomeo, Ischia’s highest peak."
}, {
  name: "Skiathos",
  lat: 39.16314268526632, 
  lng: 23.49045709979414,
  text: "Blessed with some of the Aegean’s most exquisite sandy white beaches, backed by rippling hills carpeted in scented pines and olive trees, Skiathos is the most developed of the Sporades. The beautiful beach-fringed south coast is filled with walled-in holiday villas, hotels and apartments, and from June to September, when the island fills up with sun-seeking Greeks and northern Europeans, prices soar and rooms dwindle. Seek out Skiathos' elegant monasteries, hidden-away churches and hillside hiking paths, however, and you'll still catch a glimpse of its soul.<br>Skiathos Town, on the southeast coast, is the attractive main port with a small cobbled old town of narrow whitewashed alleys. The only other settlement is tiny south-coast Troulos, 8km southwest."
}];

const winterLocations = [{
  name: "Budapest",
  lat: 47.497692312534895,
  lng: 19.045855728245087,
  text: "Budapest has something for everyone – from dramatic history and flamboyant architecture to healing thermal waters and a nightlife that is unrivalled in Eastern and Central Europe.<br>Budapest is blessed with an abundance of hot springs. As a result, ‘taking the waters’ has been an experience here since the time of the Romans. The array of bathhouses is generous – you can choose from Turkish-era, art nouveau and modern establishments. Some people come seeking a cure for whatever ails them, but the majority are there for fun and relaxation.They say the past is another country, but it’s always been just around the corner in Budapest. Witness the bullet holes and shrapnel pockmarks on buildings from WWII and the 1956 Uprising."
}, {
  name: "Hallstatt",
  lat: 47.56213795746026,
  lng: 13.649767558157125,
  text: "With pastel-coloured houses casting shimmering reflections onto the looking-glass lake and with lofty mountains rearing up on all sides, Hallstatt’s beauty borders on the surreal and the sublime. Boats glide tranquilly across the lake from the train station to the village, situated precariously on a narrow stretch of land between mountain and shore. (So small is the patch of land occupied by the village that its annual Corpus Christi procession takes place largely in small boats on the lake.) Rumoured to be the inspiration for Arendalle in Disney’s “Frozen”, come explore this winter wonderland for yourself. The centre of Hallstatt is at Hallstatt Markt, and Hallstatt Lahn is on the edge of town near the funicular to the Salzbergwerk. The train station is across the lake from Hallstatt; to get into town from there you have to take the ferry."
}, {
  name: "Tallinn",
  lat: 59.43563118854086,
  lng: 24.748617012494904,
  text: "No longer the plaything of greater powers – Danish, Swedish, Polish, German and Soviet – Tallinn is now a proud European capital with an allure all of its own. It's lively yet peaceful, absurdly photogenic and bursting with wonderful sights – ancient churches, medieval streetscapes and noble merchants' houses. Throw in delightful food and vibrant modern culture and it's no wonder Tallinn seems in danger of being loved to death, especially after a few cruise ships dock. But it's one of those blessed places that seems to cope with all the attention.<br>Despite the boom of 21st-century development, Tallinn safeguards the fairy-tale charms of its Unesco-listed Old Town – one of Europe’s most complete walled cities. Some examples of exuberant post-Soviet development aside, the city clearly realises it's better to be classy than brassy. Hence the blossoming of first-rate restaurants, atmospheric hotels and a well-oiled tourist machine that makes visiting a breeze."
}, {
  name: "Bergen",
  lat: 60.392541530778836,
  lng: 5.313284628475543,
  text: "Surrounded by seven hills and seven fjords, Bergen is a beguiling city. During the early Middle Ages, it was an important seaport and a member of the Hanseatic League, as well as Norway's capital – a heritage that can still be glimpsed in the beautifully preserved wooden buildings of Bryggen, now protected as a Unesco World Heritage site. Chocolate-box, clapperboard houses creep up the hillsides, ferries flit around the fjords, and a cluster of excellent art museums provide a welcome detour, and not only in case Bergen's notoriously fickle weather sets in. Meanwhile, a large student population ensures the city has a buzzy bar scene and nightlife, and easy access to nature means you're minutes away from complete tranquillity"
}];

const cityLocations = [{
  name: "Riga",
  lat: 56.94556321585074,
  lng: 24.099631260635515,
  text: "The Gothic spires that dominate Rīga's cityscape might suggest austerity, but it is the flamboyant art nouveau that forms the flesh and the spirit of this vibrant cosmopolitan city, the largest of all three Baltic capitals. Like all northerners, it is quiet and reserved on the outside, but there is some powerful chemistry going on inside its hip bars, modern art centres and the kitchens of its cool experimental restaurants. <br>Standing next to a gulf named after itself, Rīga is a short drive from jet-setting sea resort, Jūrmala, which comes with a stunning white-sand beach. If you are craving solitude and a pristine environment, gorgeous sea dunes and blueberry-filled forests begin right outside the city boundaries."
}, {
  name: "Gdansk",
  lat: 54.352053224094256, 
  lng: 18.654229034703253,
  text: "Like a ministate all to itself, Gdańsk has a unique feel that sets it apart from other cities in Poland. Centuries of maritime ebb and flow as a major Baltic port; streets of distinctively un-Polish architecture influenced by a united nations of wealthy merchants who shaped the city’s past; the toing and froing of Danzig/Gdańsk between Teutonic Prussia and Slavic Poland; and the destruction wrought by WWII have all bequeathed a special atmosphere that makes Gdańsk an increasingly popular destination.<br>Visitors throng in ever greater numbers to wander historical thoroughfares lined with grand, elegantly proportioned buildings, and to enjoy a treasure trove of characterful bars and cafes, seafood restaurants, amber shops and intriguing museums, not to mention pleasure-boat cruises along the river and a wealth of maritime history to soak up in between brews at dockside beer gardens."
}, {
  name: "Bruges",
  lat: 51.20933380920364,
  lng: 3.2244522911872426,
  text: "If you set out to design a fairy-tale medieval town, it would be hard to improve on central Bruges (Brugge in Dutch), one of Europe's best preserved cities. Picturesque cobbled lanes and dreamy canals link photogenic market squares lined with soaring towers, historical churches and lane after lane of old whitewashed almshouses. <br>For many the secret is already out; during the busy summer months, you'll be sharing Bruges' magic with a constant stream of tourists in the medieval core. To really enjoy Bruges, stay one or two nights – day trippers miss out on the city's stunning nocturnal floodlighting – and try to visit midweek to avoid weekend crowds. The best times to visit are in spring, when daffodils carpet the tranquil courtyard of the historic begijnhof retreat, or outside of Christmas in winter, when you'll have the magnificent, if icy, town almost all to yourself."
}, {
  name: "Porto",
  lat: 41.15756719382757,
  lng: -8.629376466149939,
  text: "Opening up like a pop-up book from the banks of the Rio Douro, edgy-yet-opulent Porto entices with its historic centre, sumptuous food and wine, and charismatic locals.<br>Beyond Porto’s more obvious charms – the river, the port lodges, the alley-woven historic centre – it’s the city’s soulfulness that makes it that bit special. Revealing itself little by little, Porto is made for exploring on foot, and you never know quite where those thigh-challenging steps or back alleys will lead you. The laid-back vibe, ludicrously beautiful viewpoints and relentlessly hospitable locals make this an easy city to love. High-spirited nightlife, outstanding food, wine tasting, street art, avant-garde design, mood-lifting ocean views – you name it, Porto pulls it off time and again."
}];

const foodLocations = [{
    name: "Palermo",
    lat: 38.1148661348203,
    lng: 13.357973304272855,
    text: "Having been the crossroads of civilisations for millennia, Palermo delivers a heady, heavily spiced mix of Byzantine mosaics, Arabesque domes and frescoed cupolas. This is a city at the edge of Europe and at the centre of the ancient world, a place where souk-like markets rub up against baroque churches, where date palms frame Gothic palaces and where the blue-eyed and fair have bronze-skinned cousins.<br>Centuries of dizzying highs and crushing lows have formed a complex metropolis. Despite its noisy streets, Sicily’s largest city is a shy beast, rewarding the inquisitive with citrus-filled cloisters, stucco-laced chapels and crooked side streets dotted with youthful artisan studios. Add to this Italy’s biggest opera house and an ever-growing number of vibrant, new-school eateries and bars and you might find yourself falling suddenly, unexpectedly in love."
  },
  {
    name: "Naples",
    lat: 40.85170745896896,
    lng: 14.265719186192603,
    text: "Naples is raw, high-octane energy, a place of soul-stirring art and panoramas, spontaneous conversations and unexpected, inimitable elegance. Welcome to Italy's most unlikely masterpiece.<br>Blessed with rich volcanic soils, a bountiful sea, and countless generations of culinary know-how, the Naples region is one of Italy's epicurean heavyweights. It's here that you'll find the country's best pizza, pasta and espresso, its most appetising street markets, not to mention some of its most celebrated dishes. From garlicky spaghetti alle vongole (spaghetti with clams) to sultry ragù (meat and tomato sauce) and silky parmigiana di melanzane (eggplant parmigiana), the food on these streets is all about intensity and pleasure. After all, life is too short for diets, so follow the locals' lead and succumb to your gluttonous whims"
  },
  {
    name: "Lille",
    lat: 50.62942892254915,
    lng: 3.057803058306979,
    text: "Capital of the Hauts-de-France région, Lille may be France's most underrated metropolis. Recent decades have seen the country's fourth-largest city (by greater urban area) transform from an industrial centre into a glittering cultural and commercial hub. Highlights include its enchanting old town with magnificent French and Flemish architecture, renowned art museums, stylish shopping, outstanding cuisine, a nightlife scene bolstered by 67,000 university students, and some 1600 designers in its environs.<br>Thanks to the Eurostar and the TGV, Lille makes an easy, environmentally sustainable weekend destination from London, Paris, Brussels and beyond.<br>Visit in September for the famous street fair “Lille-Braderie” and indulge in it’s signature dish of moules-frites, or enjoy a delightful combination of French and Flemish inspired dishes all year round."
  },
  {
    name: "Galway",
    lat: 53.27063598265032,
    lng: -9.057232068160024,
    text: "Arty, bohemian Galway (Gaillimh) is one of Ireland's most engaging cities. Brightly painted pubs heave with live music, while restaurants and cafes offer front-row seats for observing buskers and street theatre. Remnants of the medieval town walls lie between shops selling handcrafted Claddagh rings, books and musical instruments, bridges arch over the salmon-stuffed River Corrib, and a long promenade leads to the seaside suburb of Salthill, on Galway Bay, the source of the area's famous oysters.<br>While it's steeped in history, the city buzzes with a contemporary vibe, thanks in part to students, who make up around a fifth of the population. Its energy and creativity have seen it designated a European Capital of Culture for 2020."
  }];

// function to add marker locations on destination map for the selection destination group
function markMap(markerLocations) {
  const map = new google.maps.Map(document.getElementById("destination-map"), {
    zoom: 3.5,
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
  });

}

//function to remove active CSS classs from previously selected destination button, and apply to current selected destintation
function destinationButtonActiveSwitch(buttonID) {
  $(".destination-button-active").removeClass("destination-button-active").addClass("destination-button");
  $(buttonID).removeClass("destination-button").addClass("destination-button-active");
}

//code to add location markers to destination map and highlight destination type button once selected
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
});

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
});


//Function to search for nearby hotels in the selected location (Adapted from https://developers.google.com/maps/documentation/javascript/places#place_search_requests)
function hotelMap(lat, lng) {

  const location = new google.maps.LatLng(lat, lng);
  //infowindow = new google.maps.InfoWindow();
  const map2 = new google.maps.Map(document.getElementById("location-map"), {
    center: location,
    zoom: 13,
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

//Function to search for nearby restaurants in the selected location (Adapted from https://developers.google.com/maps/documentation/javascript/places#place_search_requests)
function restaurantMap(lat, lng) {

  const location = new google.maps.LatLng(lat, lng);
  //infowindow = new google.maps.InfoWindow();
  const map2 = new google.maps.Map(document.getElementById("location-map"), {
    center: location,
    zoom: 13,
  });
  // Create the places service.
  const service = new google.maps.places.PlacesService(map2);

  // Perform a nearby search.
  service.nearbySearch({
      location: location,
      radius: 10000,
      type: "restaurant"
    },
    (results, status) => {
      if (status !== "OK" || !results) return;
      addPlaces(results, map2);
    }
  );
}

//Function to search for nearby sights in the selected location (Adapted from https://developers.google.com/maps/documentation/javascript/places#place_search_requests)
function sightsMap(lat, lng) {

  const location = new google.maps.LatLng(lat, lng);
  //infowindow = new google.maps.InfoWindow();
  const map2 = new google.maps.Map(document.getElementById("location-map"), {
    center: location,
    zoom: 13,
  });
  // Create the places service.
  const service = new google.maps.places.PlacesService(map2);

  // Perform a nearby search.
  service.nearbySearch({
      location: location,
      radius: 10000,
      type: "tourist_attraction"
    },
    (results, status) => {
      if (status !== "OK" || !results) return;
      addPlaces(results, map2);
    }
  );
}

//Function to add markers on to the city map of the selected location
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

// To add CSS class for selected location to the location button, and remove this class from previous selected button
function selectedLocation(button){
  $(".location-button-selected").removeClass("location-button-selected").addClass("location-button");
  $(button).removeClass("location-button").addClass("location-button-selected"); 
}

// To add CSS class for selected place to the place button, and remove this class from previous selected button
function selectedPlace(button){
  $(".places-button-selected").removeClass("places-button-selected").addClass("places-button");
  $(button).removeClass("places-button").addClass("places-button-selected");
}


// on-click functions for each location button to display location information section + map with markers

$(document).on("DOMNodeInserted", "#arcachon-button", function () {
  $(this).click(function () {
    showHiddenSection();
    selectedLocation("#arcachon-button"); 
    hotelMap((summerLocations[0].lat), (summerLocations[0].lng),);
    selectedPlace("#hotel-button");
    $("#location-name").html(summerLocations[0].name);
    $("#location-image").attr("src","assets/images/arcachon.jpeg").attr("alt","image of arcachon");
    $("#location-text").html(summerLocations[0].text);
    
  });
});

$(document).on("DOMNodeInserted", "#madeira-button", function () {
  $(this).click(function () {
    showHiddenSection();
    selectedLocation("#madeira-button"); 
    hotelMap((summerLocations[1].lat), (summerLocations[1].lng));
    selectedPlace("#hotel-button");
    $("#location-name").html(summerLocations[1].name);
    $("#location-image").attr("src","assets/images/madeira.jpeg").attr("alt","image of madeira");
    $("#location-text").html(summerLocations[1].text);
  });
});

$(document).on("DOMNodeInserted", "#ischia-button", function () {
  $(this).click(function () {
    showHiddenSection();
    selectedLocation("#ischia-button"); 
    hotelMap(summerLocations[2].lat, summerLocations[2].lng);
    selectedPlace("#hotel-button");
    $("#location-name").html(summerLocations[2].name);
    $("#location-image").attr("src","assets/images/ischia.jpeg").attr("alt","image of ischia");
    $("#location-text").html(summerLocations[2].text);
  });
});

$(document).on("DOMNodeInserted", "#skiathos-button", function () {
  $(this).click(function () {
    showHiddenSection();
    selectedLocation("#skiathos-button"); 
    hotelMap(summerLocations[3].lat, summerLocations[3].lng);
    selectedPlace("#hotel-button");
    $("#location-name").html(summerLocations[3].name);
    $("#location-image").attr("src","assets/images/skiathos.jpg").attr("alt","image of skiathos");
    $("#location-text").html(summerLocations[3].text); 
  });
});

$(document).on("DOMNodeInserted", "#budapest-button", function () {
  $(this).click(function () {
    showHiddenSection();
    selectedLocation("#budapest-button"); 
    hotelMap(winterLocations[0].lat, winterLocations[0].lng);
    selectedPlace("#hotel-button");
    $("#location-name").html(winterLocations[0].name);
    $("#location-image").attr("src","assets/images/budapest.jpeg").attr("alt","image of budapest");
    $("#location-text").html(winterLocations[0].text);
  });
});

$(document).on("DOMNodeInserted", "#hallstatt-button", function () {
  $(this).click(function () {
    showHiddenSection();
    selectedLocation("#hallstatt-button"); 
    hotelMap(winterLocations[1].lat, winterLocations[1].lng);
    selectedPlace("#hotel-button");
    $("#location-name").html(winterLocations[1].name);
    $("#location-image").attr("src","assets/images/hallstatt.jpg").attr("alt","image of hallstatt");
    $("#location-text").html(winterLocations[1].text);
  });
});

$(document).on("DOMNodeInserted", "#tallinn-button", function () {
  $(this).click(function () {
    showHiddenSection();
    selectedLocation("#tallinn-button"); 
    hotelMap(winterLocations[2].lat, winterLocations[2].lng);
    selectedPlace("#hotel-button");
    $("#location-name").html(winterLocations[2].name);
    $("#location-image").attr("src","assets/images/tallinn.jpg").attr("alt","image of tallinn");
    $("#location-text").html(winterLocations[2].text);
  });
});

$(document).on("DOMNodeInserted", "#bergen-button", function () {
  $(this).click(function () {
    showHiddenSection();
    selectedLocation("#bergen-button"); 
    hotelMap(winterLocations[3].lat, winterLocations[3].lng);
    selectedPlace("#hotel-button");
    $("#location-name").html(winterLocations[3].name);
    $("#location-image").attr("src","assets/images/bergen.jpeg").attr("alt","image of bergen");
    $("#location-text").html(winterLocations[3].text);
  });
});

$(document).on("DOMNodeInserted", "#riga-button", function () {
  $(this).click(function () {
    showHiddenSection();
    selectedLocation("#riga-button"); 
    hotelMap(cityLocations[0].lat, cityLocations[0].lng);
    selectedPlace("#hotel-button");
    $("#location-name").html(cityLocations[0].name);
    $("#location-image").attr("src","assets/images/riga.jpeg").attr("alt","image of riga");
    $("#location-text").html(cityLocations[0].text);
  });
});

$(document).on("DOMNodeInserted", "#gdansk-button", function () {
  $(this).click(function () {
    showHiddenSection();
    selectedLocation("#gdansk-button"); 
    hotelMap(cityLocations[1].lat, cityLocations[1].lng);
    selectedPlace("#hotel-button");
    $("#location-name").html(cityLocations[1].name);
    $("#location-image").attr("src","assets/images/gdansk.jpeg").attr("alt","image of gdansk");
    $("#location-text").html(cityLocations[1].text);
  });
});

$(document).on("DOMNodeInserted", "#bruges-button", function () {
  $(this).click(function () {
    showHiddenSection();
    selectedLocation("#bruges-button"); 
    hotelMap(cityLocations[2].lat, cityLocations[2].lng);
    selectedPlace("#hotel-button");
    $("#location-name").html(cityLocations[2].name);
    $("#location-image").attr("src","assets/images/bruges.jpeg").attr("alt","image of bruges");
    $("#location-text").html(cityLocations[2].text);
  });
});

$(document).on("DOMNodeInserted", "#porto-button", function () {
  $(this).click(function () {
    showHiddenSection();
    selectedLocation("#porto-button"); 
    hotelMap(cityLocations[3].lat, cityLocations[3].lng);
    selectedPlace("#hotel-button");
    $("#location-name").html(cityLocations[3].name);
    $("#location-image").attr("src","assets/images/porto.jpeg").attr("alt","image of porto");
    $("#location-text").html(cityLocations[3].text);
  });
});

$(document).on("DOMNodeInserted", "#palermo-button", function () {
  $(this).click(function () {
    showHiddenSection();
    selectedLocation("#palermo-button"); 
    hotelMap(foodLocations[0].lat, foodLocations[0].lng);
    selectedPlace("#hotel-button");
    $("#location-name").html(foodLocations[0].name);
    $("#location-image").attr("src","assets/images/palermo.jpg").attr("alt","image of palermo");
    $("#location-text").html(foodLocations[0].text);
  });
});

$(document).on("DOMNodeInserted", "#naples-button", function () {
  $(this).click(function () {
    showHiddenSection();
    selectedLocation("#naples-button"); 
    hotelMap(foodLocations[1].lat, foodLocations[1].lng);
    selectedPlace("#hotel-button");
    $("#location-name").html(foodLocations[1].name);
    $("#location-image").attr("src","assets/images/naples.jpg").attr("alt","image of naples");
    $("#location-text").html(foodLocations[1].text);
  });
});

$(document).on("DOMNodeInserted", "#lille-button", function () {
  $(this).click(function () {
    showHiddenSection();
    selectedLocation("#lille-button"); 
    hotelMap(foodLocations[2].lat, foodLocations[2].lng);
    selectedPlace("#hotel-button");
    $("#location-name").html(foodLocations[2].name);
    $("#location-image").attr("src","assets/images/lille.jpg").attr("alt","image of lille");
    $("#location-text").html(foodLocations[2].text);
  });
});

$(document).on("DOMNodeInserted", "#galway-button", function () {
  $(this).click(function () {
    showHiddenSection();
    selectedLocation("#galway-button"); 
    hotelMap(foodLocations[3].lat, foodLocations[3].lng);
    selectedPlace("#hotel-button");
    $("#location-name").html(foodLocations[3].name);
    $("#location-image").attr("src","assets/images/galway.jpg").attr("alt","image of galway");
    $("#location-text").html(foodLocations[3].text);
  });
});


// on-click functions for each places (Hotel/Restaurant/Sights) button to display selected markers for the displayed location, and highlight selected button

//Hotel Button

$("#hotel-button").click(function () {
  
  if ($("#arcachon-button").hasClass("location-button-selected")){
    hotelMap(summerLocations[0].lat, summerLocations[0].lng);
  }
  else if ($("#madeira-button").hasClass("location-button-selected")){
    hotelMap(summerLocations[1].lat, summerLocations[1].lng);
  }
  else if ($("#ischia-button").hasClass("location-button-selected")){
    hotelMap(summerLocations[2].lat, summerLocations[2].lng);
  }
  else if ($("#skiathos-button").hasClass("location-button-selected")){
    hotelMap(summerLocations[3].lat, summerLocations[3].lng);
  }
  else if ($("#budapest-button").hasClass("location-button-selected")){
    hotelMap(winterLocations[0].lat, winterLocations[0].lng);
  }
  else if ($("#hallstatt-button").hasClass("location-button-selected")){
    hotelMap(winterLocations[1].lat, winterLocations[1].lng);
  }
  else if ($("#tallinn-button").hasClass("location-button-selected")){
    hotelMap(winterLocations[2].lat, winterLocations[2].lng);
  }
  else if ($("#bergen-button").hasClass("location-button-selected")){
    hotelMap(winterLocations[3].lat, winterLocations[3].lng);
  }
  else if ($("#riga-button").hasClass("location-button-selected")){
    hotelMap(cityLocations[0].lat, cityLocations[0].lng);
  }
  else if ($("#gdansk-button").hasClass("location-button-selected")){
    hotelMap(cityLocations[1].lat, cityLocations[1].lng);
  }
  else if ($("#bruges-button").hasClass("location-button-selected")){
    hotelMap(cityLocations[2].lat, cityLocations[2].lng);
  }
  else if ($("#porto-button").hasClass("location-button-selected")){
    hotelMap(cityLocations[3].lat, cityLocations[3].lng);
  }
  else if ($("#palermo-button").hasClass("location-button-selected")){
    hotelMap(foodLocations[0].lat, foodLocations[0].lng);
  }
  else if ($("#naples-button").hasClass("location-button-selected")){
    hotelMap(foodLocations[1].lat, foodLocations[1].lng);
  }
  else if ($("#lille-button").hasClass("location-button-selected")){
    hotelMap(foodLocations[2].lat, foodLocations[2].lng);
  }
  else if ($("#galway-button").hasClass("location-button-selected")){
    hotelMap(foodLocations[3].lat, foodLocations[3].lng);
  }

  $(".places-button-selected").removeClass("places-button-selected").addClass("places-button");
  $(this).removeClass("places-button").addClass("places-button-selected");    
});


//Restaurant Button

$("#restaurant-button").click(function () {
  
  if ($("#arcachon-button").hasClass("location-button-selected")){
    restaurantMap(summerLocations[0].lat, summerLocations[0].lng);
  }
  else if ($("#madeira-button").hasClass("location-button-selected")){
    restaurantMap(summerLocations[1].lat, summerLocations[1].lng);
  }
  else if ($("#ischia-button").hasClass("location-button-selected")){
    restaurantMap(summerLocations[2].lat, summerLocations[2].lng);
  }
  else if ($("#skiathos-button").hasClass("location-button-selected")){
    restaurantMap(summerLocations[3].lat, summerLocations[3].lng);
  }
  else if ($("#budapest-button").hasClass("location-button-selected")){
    restaurantMap(winterLocations[0].lat, winterLocations[0].lng);
  }
  else if ($("#hallstatt-button").hasClass("location-button-selected")){
    restaurantMap(winterLocations[1].lat, winterLocations[1].lng);
  }
  else if ($("#tallinn-button").hasClass("location-button-selected")){
    restaurantMap(winterLocations[2].lat, winterLocations[2].lng);
  }
  else if ($("#bergen-button").hasClass("location-button-selected")){
    restaurantMap(winterLocations[3].lat, winterLocations[3].lng);
  }
  else if ($("#riga-button").hasClass("location-button-selected")){
    restaurantMap(cityLocations[0].lat, cityLocations[0].lng);
  }
  else if ($("#gdansk-button").hasClass("location-button-selected")){
    restaurantMap(cityLocations[1].lat, cityLocations[1].lng);
  }
  else if ($("#bruges-button").hasClass("location-button-selected")){
    restaurantMap(cityLocations[2].lat, cityLocations[2].lng);
  }
  else if ($("#porto-button").hasClass("location-button-selected")){
    restaurantMap(cityLocations[3].lat, cityLocations[3].lng);
  }
  else if ($("#palermo-button").hasClass("location-button-selected")){
    restaurantMap(foodLocations[0].lat, foodLocations[0].lng);
  }
  else if ($("#naples-button").hasClass("location-button-selected")){
    restaurantMap(foodLocations[1].lat, foodLocations[1].lng);
  }
  else if ($("#lille-button").hasClass("location-button-selected")){
    restaurantMap(foodLocations[2].lat, foodLocations[2].lng);
  }
  else if ($("#galway-button").hasClass("location-button-selected")){
    restaurantMap(foodLocations[3].lat, foodLocations[3].lng);
  }

  $(".places-button-selected").removeClass("places-button-selected").addClass("places-button");
  $(this).removeClass("places-button").addClass("places-button-selected");    
});

//Sights Button

$("#sights-button").click(function () {
  
  if ($("#arcachon-button").hasClass("location-button-selected")){
    sightsMap(summerLocations[0].lat, summerLocations[0].lng);
  }
  else if ($("#madeira-button").hasClass("location-button-selected")){
    sightsMap(summerLocations[1].lat, summerLocations[1].lng);
  }
  else if ($("#ischia-button").hasClass("location-button-selected")){
    sightsMap(summerLocations[2].lat, summerLocations[2].lng);
  }
  else if ($("#skiathos-button").hasClass("location-button-selected")){
    sightsMap(summerLocations[3].lat, summerLocations[3].lng);
  }
  else if ($("#budapest-button").hasClass("location-button-selected")){
    sightsMap(winterLocations[0].lat, winterLocations[0].lng);
  }
  else if ($("#hallstatt-button").hasClass("location-button-selected")){
    sightsMap(winterLocations[1].lat, winterLocations[1].lng);
  }
  else if ($("#tallinn-button").hasClass("location-button-selected")){
    sightsMap(winterLocations[2].lat, winterLocations[2].lng);
  }
  else if ($("#bergen-button").hasClass("location-button-selected")){
    sightsMap(winterLocations[3].lat, winterLocations[3].lng);
  }
  else if ($("#riga-button").hasClass("location-button-selected")){
    sightsMap(cityLocations[0].lat, cityLocations[0].lng);
  }
  else if ($("#gdansk-button").hasClass("location-button-selected")){
    sightsMap(cityLocations[1].lat, cityLocations[1].lng);
  }
  else if ($("#bruges-button").hasClass("location-button-selected")){
    sightsMap(cityLocations[2].lat, cityLocations[2].lng);
  }
  else if ($("#porto-button").hasClass("location-button-selected")){
    sightsMap(cityLocations[3].lat, cityLocations[3].lng);
  }
  else if ($("#palermo-button").hasClass("location-button-selected")){
    sightsMap(foodLocations[0].lat, foodLocations[0].lng);
  }
  else if ($("#naples-button").hasClass("location-button-selected")){
    sightsMap(foodLocations[1].lat, foodLocations[1].lng);
  }
  else if ($("#lille-button").hasClass("location-button-selected")){
    sightsMap(foodLocations[2].lat, foodLocations[2].lng);
  }
  else if ($("#galway-button").hasClass("location-button-selected")){
    sightsMap(foodLocations[3].lat, foodLocations[3].lng);
  }

  $(".places-button-selected").removeClass("places-button-selected").addClass("places-button");
  $(this).removeClass("places-button").addClass("places-button-selected");    
});
