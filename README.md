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

### Validation

HTML Validation
- No errors found
 - [W3C Markup Validator](https://validator.w3.org/) : Results: ![View Results](/assets/images/readme/sftw-html-validation.jpg)
 
CSS Validation
- No errors found
 - [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) : Results: ![View Results](/assets/images/readme/sftw-css-validation.jpg)
 
JS Validation
Javascript validation carried out using [JS hint](https://jshint.com/)
 - home.js
    - Initial verification found some errors with Jquery "$" as an undeclared constant, searching [stackoverflow](https://try2explore.com/questions/10039255), I found advice to use `/*globals $:false */` as comments at the top of the file to instruct the validator that $ is a global variable, and the false indicates that it should not be overridden.
    - Errors: ![Errors Screenshot](/assets/images/readme/jshint-home-errors.jpg)
    - No errors found following this fix.
    - Validated: ![Validated Screenshot](/assets/images/readme/jshint-home-final.jpg)

 - destinations.js
    - Initial verification found 30 errors related to use of const: '"const" is available in ES6'. Solution to this was found in [stackoverflow](https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const) to add `/*jshint esversion: 6 */` as comment to tell JSHint that JS code uses ECMAScript 6 specific syntax.
    - Similar error to $ variable was found with goole variable, `/*globals google:false */` used to resolve.
    - Errors: ![Errors Screenshot](/assets/images/readme/jshint-destinations-errors.jpg)
    - Remaining errors all come from Google Maps API script taken directly from their developper page, so I did not want to change this code.
    - Validated: ![Validated Screenshot](/assets/images/readme/jshint-destinations-final.jpg)

 - itinerary.js
    - Above fixes also applied to this page and no errors found
    - Validated: ![Validated Screenshot](/assets/images/readme/jshint-itinerary-final.jpg)


 ### User Stories

 - **All Users**

     1. As a user of this site I want help making a decision where to go on holidays

         1. On the first visit to the site, users are greeted by a full screen travel themed image, overlayed with a question asking if they need help choosing a holiday destination.
         2. Clicking the button for "yes", the question text is replaced by an introduction to the site, inviting them to discover some new destinations.
         3. Clicking the "find my dream holiday" button, the user is taken to the destination page to continue.
         4. From here, the user is guided to first select the type of trip they wish to take: "Summer Sun", "Winter Chill", "City Break" or "Foodie Feast"
        5. Once one of these destination types is clicked, markers are populated on the map below and four buttons are made visible below the map with the corresponding location names.
        6. User can click on any of the location buttons to display the location information section, containing more details on each location and amenities. 
        7. User can continue to change the destination type and locations until they have found a holiday destination that suits.

     2. As a user of this site, I want to explore many new destinations
        1. Following the above path, through the destination page, the customer can browse forwards and back through each of the four destination types with four locations each to explore

     3. As a user of this site, I want to find out useful information about my holiday destination
        1. Following the above path through the destinations page, the user can select their chosen holiday location.
        2. In the locations section, an image on their location is shown, along with some introductory information.
        3. Beside this section (stacked below on mobile/tablet) a new map is displayed with markers showing hotel locations in the area.
        4. Underneath the map there are three buttons displayed there the user can switch the map markers between hotels, restaurants and local sights.

   4.  As a user of this site, I want to request a more detailed itinerary for my chosen destination

         1. The user can reach the itinerary request page either directly from the navbar, or else using the link below the location information on the destinations page.
         2.The user can complete the form with their contact details, chosen destination, numbers travelling and trip dates.
         3. On form submit, the form data is sent by email to the site owner.
         4. User receives an automated email confirming their submitted details, and advising that they will receive a personalised itinerary shortly.


### Manual Testing of All Elements

Testing was carried out by myself using Chrome DevTools while writing the code, and once deployed, friends and family helped to test the site on various screen sizes and web browsers.

#### Navbar

  - **Tests**

    1. Check that logo and "Something For the Weekend" text are visible on all screen sizes, and resized accordingly.
       - **_Verified_**
    2. Check that navbar links are collapsed to hamburger menu for tablet and mobile screens.
       - **_Verified_**
    3. Check that dropdown menu of links is shown when hamburger menu is clicked on mobile and tablet.
       - **_Verified_**
    5. Click on each link to ensure the link goes to the correct page.
       - **_Verified_**

#### Footer

  - **Tests**
    1. Check that footer is visible at the bottom of the page.
        - **_Verified_** 
    2. Check that the logo and "Something for the Weekend" text is visible on the left hand side and has responsive sizing on all screen sizes.
        - **_Verified_** 
    3. Check that the contact information below the logo section is clearly visible on all screen sizes.
        - **_Verified_** 
    4. Check that the social media icon links are visible on all screen sizes, and positioned to the right of the footer.
        - **_Verified_** 
    5. Check that the hover class is working on computer screens - icon should change to white.
        - **_Verified_** 
    6. Check that the social media links open in a new tab.
        - **_Verified_** 
    7. Check that the social media links open to the correct site.
        - **_Verified_** 

  - **Bugs found during testing**
    - Social media links were only displayed on the home page, and missing from destinations page and itinerary page. I found that fontawsome link had not been added to these pages. Issue was resolved once link was added.
        
#### Home Page

  - **Tests**
     1. Navbar and Footer are visible on page
        - **_Verified_**
     2. Hero Image is visible on all screen sizes, and covers the full width and height.
        - **_Verified_**
     3. Opening question is visible on all screen sizes, located in the middle of the screen
        - **_Verified_**
    4. On click of "yes" section text and button are replaced by the next question.
        - **_Verified_**
    5. On click of "Find my dream holiday" button, user is taken to Destinations page.
        - **_Verified_**

  - **Bugs found during testing**
     No issues found.


#### Destination Page

  - **Tests**
     1. Navbar and Footer are visible on page
        - **_Verified_**
     2. On page load, contect should only display the Intro text, destination buttons and empty Google map.
        - **_Verified_** 
     3. Each destination button should have corresponding image as background. Buttons should be displayed 4x1 grid on laptops and large screens, and stacked 2x2 on mobile and tablet screens
        - **_Verified_**  
     4. Google map should be full screen width and centered on Europe
        - **_Verified_**
     5. When destination button is selected, button style should change to blue background, pink border, white text. When destination button is switched, the style should switch also.
        - **_Verified_** 
     6. When destination button is selected, the map below should display four markers, and four buttons appear below the map with corresponding location names. Buttons should be displayed 4x1 grid on laptops and large screens, and stacked 2x2 on mobile and tablet screens
        - **_Verified_**
     7. When location button is selected, button style should change to white background.
        - **_Verified_**
     8. When location button is selected, locations section below should be displayed. Left side column displays location name, image and information, with itinerary request button. Right side column (stacked below on mobile/tablets) shows "Places to know" title and map of the location.
        - **_Verified_**
    9. Location map should display markers for local hotels at first. Buttons displayed below map for "hotels", "restaurants" and "sights" can be clicked to change markers on the map accordingly. Selected button style should change to pink background.
        - **_Verified_**
    9. If a different location button is selected, button style should change and all details in the location section (as above) should update to match the new location.
        - **_Verified_**
    10. If a different destination button is selected, button style should change and the entire location section should be hidden again until a new location is selected.
        - **_Verified_**
    11. On click of "Request a personalised travel plan for this location" button, user should be taken to the itinerary page.
        - **_Verified_**

  - **Bugs found during testing**
    - This page was initially very slow loading on all devices due to large images and maps. Images were compressed and resized and load times increased considerably.
    - The destination button selected style was not showing in white text. I could not find the source of this error, but adding h4 tags to the button display text and styling accordingly resolved the issue.
    - Javascript function for the location buttons was not working. I discovered this was because these button elements were added after page load by a previous JS function on click of the destination buttons. Location button functions were wrapped in `$(document).on("DOMNodeInserted", elementID, function ())` function to resolve this issue and function now works correctly.


#### Itinerary Page

  - **Tests**
     1. Navbar and Footer are visible on page
        - **_Verified_**
     2. Intro text to form is displayed at top of the page
        - **_Verified_**
     3. Check that form displays full width on mobile devices, and displayed in the centre of the screen with intended offset cols on tablet and large screens.
        - **_Verified_**
     4. Check that all placeholder text is displaying correctly and clearly visible.
        - **_Verified_** 
     5. Check that required fields must be completed before form can be submitted (first name, last name, phone, email, destinations, # of adults, # of children, and trip dates)
        - **_Verified_**    
     6. Check that all fields are mapped to the correct name when form is submitted (via emailJS email containing form details)
        - **_Verified_** 
    7. User should receive automated email confirming details submitted. 
        - **_Verified_** 
    8. On form submit, form elements should be hidden and confirmation message should be displayed instead.
        - **_Verified_** 

  - **Bugs found during testing**
     - Cursor indent in the textarea section was starting in the middle of the text box. I found there were blank spaces between the textarea tags causing this, removing spaces resolved the


### Lighthouse Testing
![Lighthouse Results](/assets/images/readme/lighthouse-final.jpg)
#### Performance
Initial score was in the mid-60s due to large image sizes and maps. Compressing the images greatly increased the performance speed. Remaining improvement option to "Eliminate render-blocking resources" refers to Bootstrap CDN which I can't remove.
#### Accessibility
Initial score was also 95. Opportunity to improve refers to aria-hidden="true" property automatically added to fontawsome icons.
#### Best Practices
Initial score was 80. Improvement gained by adding `<link rel="icon" href="data:;base64,iVBORwOKGO=" />` script to html pages to resolve console error for favicon, found at [stackoverflow](https://stackoverflow.com/questions/30693021/chrome-developer-tools-shows-favicon-404-error-in-brackets-livepreview). `rel="noopener"` also added to externally opening links. Remaining improvement is to display navbar logo in correct aspect ratio, but it fits the navbar better slightly stretched and does not alter the skew the image for the user.
#### SEO
Initial score was 89, improvement was gained by adding meta description tag to html pages.
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
 - Email JS form submit code
    -[Email JS](https://www.emailjs.com/docs/sdk/send-form/) 
 

#### Content
  - The text content for this site was all written by myself, Anne Marie Murphy.


#### Media
- **The photos used in this site were freely obtained from below image sites:**

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
 