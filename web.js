$(document).keypress(function(e) {
    if ((e.keyCode || e.which) == 13) {
        // Enter key pressed
        $('search-color').trigger('search-color');
    }
});

$('search-color').click(function(e) {
    e.preventDefault();
    // Link clicked
});