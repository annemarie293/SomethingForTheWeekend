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