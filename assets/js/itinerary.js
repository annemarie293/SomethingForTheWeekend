console.log("working")

window.onload = function() {
    document.getElementById('itinerary-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm("service_r5f1ryo", "sftw", "#itinerary-form" )
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}