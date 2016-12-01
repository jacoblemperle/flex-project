var header = $('.topSection');

var backgrounds = new Array(
    'url(https://s3.amazonaws.com/www-assets.invisionapp.com/marketplace/assets/mp-hero-06.jpg)', 'url(https://s3.amazonaws.com/www-assets.invisionapp.com/marketplace/assets/mp-hero-02.jpg)',
    'url(https://s3.amazonaws.com/www-assets.invisionapp.com/marketplace/assets/mp-hero-04.jpg)',
   'url(https://s3.amazonaws.com/www-assets.invisionapp.com/marketplace/assets/mp-hero-07.jpg)',
   'url(https://s3.amazonaws.com/www-assets.invisionapp.com/marketplace/assets/mp-hero-03.jpg)',
   'url(https://s3.amazonaws.com/www-assets.invisionapp.com/marketplace/assets/mp-hero-01.jpg)',
   'url(https://s3.amazonaws.com/www-assets.invisionapp.com/marketplace/assets/mp-hero-05.jpg)'
);

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background-image', backgrounds[current]);
}
setInterval(nextBackground, 5000);

header.css('background-image', backgrounds[0]);
