var limit = 3;

// Check if jQuery is loaded
console.log("Is jQuery loaded?", typeof $ !== 'undefined');

// AJAX request to fetch facts
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/facts',
    headers: { 'X-Api-Key': 'am9lZAzFVNCW7fAQHRKpGQ==avUtvbExfHSazs26'},
    contentType: 'application/json',
    success: function(result) {
        console.log("API Response:", result); // Log the API response
        var factsContainer = $('#facts-container');
        factsContainer.empty(); // Clear any existing content

        // Display each fact in the container
        result.forEach(function(fact) {
            var factElement = $('<p></p>').text(fact.fact);
            factsContainer.append(factElement);
        });
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
