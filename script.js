// scripts.js
$(document).ready(function() {
    $('.show-more').click(function() {
        var $bio = $('.bio');
        var $img = $('.profile-image img');
        var $button = $(this);

        // Toggle the bio content visibility
        if ($button.text() === 'Show More') {
            $bio.css({
                'height': 'auto',
                'margin-bottom': '20px'
            });
            $img.css('filter', 'blur(5px)');
            $button.text('Show Less');
        } else {
            $bio.css({
                'height': '60px',
                'margin-bottom': '0'
            });
            $img.css('filter', 'none');
            $button.text('Show More');
        }
    });
});
