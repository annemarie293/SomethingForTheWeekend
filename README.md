# Something For The Weekend

View the deployed site [here](https://annemarie293.github.io/SomethingForTheWeekend/ "Something For The Weekend")

## PROJECT INTRODUCTION
Something For The Weekend is a travel inspiration site designed to help users choose a travel destination based on the type of holiday they are looking for. Users are guided through a set of responsive sections as they make their decision, and are then presented with local information on their chosen destination. 

![image of site mock-ups on various screen sizes](/assets/images/readme/sftw-mockup.jpg "Mock Up")
___

## **USER EXPERIENCE (UX)**

###  Strategy
 - **Customer Stories**

As the website is designed to be repeatedly used as a tool new user and return user stories will be the same

1. As a user of this site I want help making a decision where to go on holidays
2. As a user of this site, I want to explore many new destinations
3. As a user of this site, I want to find out useful information about my holiday destination
4. As a user of this site, I want to request a more detailed itinerary for my chosen destination

### Design

 - **Colour Scheme**

   - The site uses a light pink, white and navy blue colour scheme, designed to be bright and cheerful and inspirational of a summer travel theme. Most of the colours are restricted to navbar/footer and button elements so as not to overpower the destination images and maps.
   - Color shades were refined for best accessibility contrast using https://webaim.org/resources/contrastchecker/
   - ![Contrast-check blue on pink](/assets/images/readme/colour-checker-blue-on-pink.jpg)
   - ![Contrast-check blue on white](/assets/images/readme/colour-checker-blue-on-white.jpg)
   - ![Contrast-check pink on blue](/assets/images/readme/colour-checker-pink-on-blue.jpg)
   - ![Contrast-check white on blue](/assets/images/readme/colour-checker-pink-on-blue.jpg)

 - **Font**

   - An elegant but relaxed and playful front, Josefin Sans from google fonts has been used for this site, and sans serif is the backup font.


- **Images**

  - All images taken from open source sites, or from free download allowance on subscription sites. The large hero image on the home page was chosen to complement the colour scheme and theme of the site and act as a bright invitation to new users.


### Wireframes

Wireframes showing the responsive development as the user interacts and makes choices
  - Wireframe for home page one ![Wireframe for home page one](/assets/images/wireframes/wireframe-home-1.jpg)
  - Wireframe for home page two with second question ![Wireframe for home page two with second question](/assets/images/wireframes/wireframe-home-2.jpg)
  - Wireframe for destination page on open ![Wireframe for destination page on open](/assets/images/wireframes/wireframe-destination-1.jpg)
  - Wireframe for destination page once user makes initial destination choice, displaying location suggestions ![Wireframe for destination page once user makes initial destination choice, displaying location suggestions](/assets/images/wireframes/wireframe-destination-2.jpg)
  - Wireframe for destination page once user makes location choice, displaying location information and local map ![Wireframe for destination page once user makes location choice, displaying location information and local map](/assets/images/wireframes/wireframe-destination-3.jpg)
  - Wireframe for itinerary page - form to request personalised travel plan ![Wireframe for itinerary page - form to request personalised travel plan](/assets/images/wireframes/wireframe-itinerary.jpg)
___

## **FEATURES**

###  Current Features

  - All pages:
    - Full width header containing navbar links to all pages on the site.
    - Responsive and interactive navbar which collapses to hamburger menu with dropdown menu for smaller screen sizes
    - Footer with contact info and links to social media sites.
  - Home Page:
    - Large full width, viewport height travel themed hero image, an "open road" inviting the user to enter the page
    - On page load, a question appears asking the user if they would like help choosing a travel destination, with button to click "yes"
    -On click, section text changes to explain that the site will help user make their decision, and button to click to start the process which links to destination page 
 - Destination Page:
    - On page load user presented with page intro and four "destination buttons" to choose from, and empty google map
    - When a destination button is chosen, markers are displayed on the map for each of the corresponding four locations, and buttons are displayed below the map with the location names
    - When a location is chosen, locations section becomes visible, containing location name, image, information text and location map.
    - Location map displays markers for hotels in the area by default.
    - Clicking on the "hotels", "restaurants", or "sights" buttons below the locations map re-plots the markers for the relevant feature. 
    - Link to itinerary page to request personalised travel plan.
    - User can continue to reselect both destination type and location and the page will respond and display correct information.
  - Itinerary Page:
    - Form to complete with required travel information.
    - On submit, form is hidden and page displays a "thank you" message
    - Automated email is received by user with submission confirmation details
 - Site is fully responsive (using bootstrap and CSS) to adapt to all display sizes - mobiles,  tablets and large monitors/laptop screens.


### Potential future features

 - Additional API connection to provide further travel information, weather and booking sites
 - Increased location selection

 ____

 ## **TECHNOLOGIES USED**

 ### Languages

  - [Html5](https://en.wikipedia.org/wiki/HTML5)
  - [CSS3](https://en.wikipedia.org/wiki/CSS)
  - [Javascript](https://www.javascript.com/)

 ### Frameworks, libraries and tools used

  - [Bootstrap v5.02](https://getbootstrap.com/)
    - Bootstrap was used for navbar, grid layout, form structure, responsive layout, margins, padding etc on all screen sizes.
  - [JQuery](https://jquery.com/)
    - JQuery library used for JS scripts across all pages
  - [Google Maps API](https://developers.google.com/maps)
    - API used to display maps for each location, and markers for local places search
  - [Email JS](https://www.emailjs.com/)
    - API used to submit form information via email, and send automated confirmation response to user
  - [Gitpod](https://www.gitpod.io/)
    - Code was written in Gitpod, and version control was managed by commit and push to GitHub.
  - [GitHub](https://github.com/)
    - Used to store the project repository and deploy the final website.
  - [Font Awesome](https://fontawesome.com/)
    - Used to display social media icons.
  - [Google Fonts](https://fonts.google.com/)
    - Used to import the Josefin Sans font used throughout the site.
  - [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
    - Used for testing code output, especially to view various display sizes during the site creation.
  - [Balsamiq](https://balsamiq.com/)
    - Wireframes were created using the balsamiq app.
  - [JPEGmini Pro](https://www.jpegmini.com/)
    - Used to reduce file size of images while preserving quality, to improve page loading times.
  - [Image Compressor](https://imagecompressor.com/)
    - Used to reduce file size of images while preserving quality, to improve page loading times.
  - [Wix Logo Maker](https://www.wix.com/logo/maker)
    - Used to create the logo for the site.
  - [Moqups website mockup generator](https://moqups.com/)
    - Used to generate a mockup of the site on multiple devices
  - [Web AIM contrast checker](https://webaim.org/resources/contrastchecker/)
    - Used to check contrast of colours used across the site to ensure readability

   ___

## **TESTING**
Full testing documentation found in separate file [testing.md](testing.md)
___

## **DEPLOYMENT**

#### Deployed using GitHub pages

- **Instructions**
  1. Open the [repository](https://github.com/annemarie293/SFTW)
  2. Click on “settings” on the repository menu across the top of the page
  3. Scroll down until you find the “pages” button on the left hand menu
  4. Under the “Source” section, click the dropdown currently showing “None” and choose “master branch”, then save.
  5. The page will refresh and an alert is seen informing that the page is ready to be published along with a link to the site.


#### Forking the Repository

- **Instructions**
  1. Open the [repository](https://github.com/annemarie293/SomethingForTheWeekend)
  2. Click on the “fork” button at the top right hand side of the page, just below the navbar.
  3. A copy of the original repository will be created to your own GitHub account.


#### Cloning the Repository

- **Instructions**
  1. Open the [repository](https://github.com/annemarie293/SomethingForTheWeekend)
  2. Click on the “code” button to the left of the green “Gitpod” button.
  3. To clone the repository using HTTPS, under "Clone with HTTPS", click the clipboard icon. 
  4. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click the clipboard icon . 
  5. To clone a repository using GitHub CLI, click Use GitHub CLI, then click the clipboard icon.
  6. Open Git Bash.
  7. Change the current working directory to the location where you want the cloned directory.
  8. Type `git clone`, and then paste the URL you copied earlier.

   ```
   $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
   ```

  9. Press Enter to create your local clone.

  ```
  $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
  > Cloning into `Spoon-Knife`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```
  10. For more detailed info on this process please click [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

___

## **CODE**

#### Credits

All code written by myself with the exception of:
 - Google maps initMap and markMap taken directly from documentation, hotelMap function adapted from various examples in the documentation.
    - [Google Maps API](https://developers.google.com/maps)
      - API key needed for this API, documentation and instructions on this can be found here: https://developers.google.com/maps/documentation/javascript/get-api-key
 - Email JS form submit code
    - [Email JS](https://www.emailjs.com/docs/sdk/send-form/) 
 

#### Content
  - Introduction text for each location taken from [Lonely Planet](https://www.lonelyplanet.com)
  - All other text content for this site was all written by myself, Anne Marie Murphy.


#### Media
*The photos used in this site were freely obtained from below image sites:*

 - [Ischia](https://stock.adobe.com/ie/images/landscape-with-aragonese-castle-ischia-island-italy/277322803?asset_id=277322803)

 - [Arcachon](https://stock.adobe.com/ie/images/arcachon-gironde-nouvelle-aquitaine-france/253464731?asset_id=253464731)

 - [Madeira](https://stock.adobe.com/ie/images/panoramic-view-over-camara-de-lobos-madeira-island-portugal/164366892?asset_id=164366892)

  - [Skiathos](https://www.shutterstock.com/image-photo/old-part-town-island-skiathos-greece-82643806)

  - [Riga](https://stock.adobe.com/ie/images/town-hall-square-in-riga-the-capital-of-latvia/57743841?asset_id=57743841)

  - [Gdansk](https://stock.adobe.com/ie/images/aerial-cityscape-view-on-the-old-town-with-beautiful-coorful-buildings-in-gdansk-poland/129942453?asset_id=129942453)

 - [Bruges](https://stock.adobe.com/ie/images/beautiful-canal-and-traditional-houses-in-the-old-town-of-bruges-brugge-belgium/248976957?asset_id=248976957)

 - [Porto](https://stock.adobe.com/ie/images/porto-portugal-skyline/159701299?asset_id=159701299)

 - [Budapest](https://stock.adobe.com/ie/images/budapest-hungary-aerial-view-of-the-parliament-of-hungary-at-winter-time-with-snowing/243445799?asset_id=243445799)

 - [Hallstatt](https://www.shutterstock.com/image-photo/winter-view-hallstatt-traditional-austrian-wood-409973635)

 - [Tallinn](https://www.shutterstock.com/image-photo/panoramic-aerial-view-old-town-tallinn-1875823927)

 - [Bergen](https://stock.adobe.com/ie/images/evening-view-on-bruges/85974819)

 - [Palermo](https://unsplash.com/photos/ZXSDMEGipNY)

 - [Naples](https://www.shutterstock.com/image-photo/panoramic-aerial-view-old-town-tallinn-1875823927)

 - [Lille](https://www.shutterstock.com/image-photo/lille-france-november-2019-cozy-cafe-1889729104)

 - [Galway](https://www.shutterstock.com/image-photo/street-galway-ireland-september-2017-1159007608)

 - [Food button](https://www.shutterstock.com/image-photo/assorted-indian-food-on-dark-wooden-573575497)

 - [City button](https://www.shutterstock.com/image-photo/scenic-summer-aerial-panorama-old-town-1168888273)

 - [Winter button](https://www.shutterstock.com/image-photo/winter-new-york-151906451)

 - [Summer button](https://www.shutterstock.com/image-photo/tropical-beach-coconut-palm-tree-1892388787)

 - [Hero Image on home page](https://www.pexels.com/photo/green-car-near-seashore-with-blue-ocean-1118448/)

#### Acknowledgements

   - I received inspiration for this project from our course material, and help with issues from the below resources:
     - [W3schools](https://www.w3schools.com/)
     - [Stackoverlfow](https://stackoverflow.com/)
     - [CSS-Tricks](https://css-tricks.com/)
     - [Mozilla developer](https://developer.mozilla.org/en-US/) 
     - Code Institute slack channel

   - Thanks also to my mentor Rahul Lakhanpal for all his help and support throughout this project. 
 