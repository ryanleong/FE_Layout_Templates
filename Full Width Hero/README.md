
# Layout Framework
### CSS Libraries
These libraries have been converted to SASS and compiled into bootstrap.reset.css

- Reset CSS
- Normalize CSS
- Bootstrap (only grid system)

These libraries have been converted to SASS to be imported
- Animate CSS


### Components
##### .horizontal-nav
- Creates Horizontal Navigation bar. Navigation will be 100% width.
- Use .container to add left/right margin.


    &.absolute
        Makes nav bar absolute

    &.fixed
        Makes nav bar fixed

##### .col-custom
- Creates columns divs side by side.
- Set your own width of each column

##### .show, .visually-show
- Add these class 2 for fade in.
- Use setUpLightbox() to set up listeners.


##### .lightbox

- Creates a lightbox.
- lightbox element has to be direct child of body
- lightbox element has to have class ".lightbox" and an ID


    .lightbox#main

- Use setUpLightbox() function in JS to set up trigger and callbacks


    setUpLightbox('triggerElement', 'lightboxID',
        function() {
            $('#main.lightbox .wrapper').css({ "height": "200px", "width": "200", "background-color": "#fff"});
        },
        function() {
            $('#main.lightbox .wrapper').css({ "height": "0", "width": "0", "background-color": "#fff"});
    });

# Layouts Templates
### Full Width hero
Template for full width conten block.
