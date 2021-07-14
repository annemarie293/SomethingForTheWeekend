console.log("working")

window.onload = function() {
    document.getElementById('itinerary-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm("service_r5f1ryo", "sftw", "#itinerary-form" )
            .then(function() {
                console.log('SUCCESS!');
                $("#itinerary-form").addClass("hide");
                $("#form-submit-message").html("<h4>Thanks for sumitting your itinerary request, we will send you on your completed trip plan by email very soon!</h4>");
            }, function(error) {
                console.log('FAILED...', error);
                alert("Whoops! Something went wrong, please try again");
            });
    });
}