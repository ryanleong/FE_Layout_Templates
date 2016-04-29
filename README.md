
# Layout Framework
### CSS Libraries

These libraries have been converted to SASS to be imported
- Reset CSS
- Normalize CSS
- Bootstrap (only grid system)
- Animate CSS


### Components
#### .horizontal-nav
- Creates Horizontal Navigation bar. Navigation will be 100% width.
- Use .container to add left/right margin.
- For Absolute use '.absolute'
- For Fixed use '.fixed'

#### .col-custom
- Creates columns divs side by side.
- Set your own width of each column

#### .show, .visually-show
- Add these class 2 for fade in.
- Use setUpLightbox() to set up listeners.


#### .lightbox

- Creates a lightbox.
- lightbox element has to be direct child of body
- lightbox element has to have class ".lightbox" and an ID

```sass
.lightbox#main
```

- Use setUpLightbox() function in JS to set up trigger and callbacks

```javascript
setUpLightbox('triggerElement', 'lightboxID',
    function() {
    	// Open Lightbox Call back
    },
    function() {
    	// Close Lightbox Call back
	}
);
```

#### .horizontal-nav
- Creates Horizontal Navigation
- Add ".fixed" or ".absolute" to make them fixed or absoluted
- Use setUpResponsiveNav() function in JS to set up responsive navigation animations

```javascript
setUpResponsiveNav({
    "animation": "slideDown | slideInLeft | slideInRight",
    "width": "% | px",
});
```

#### #map
- Creates a div containing Google Maps
- initMap() is used
- initMap() is the callback for the Google Maps API

# Layout Templates
### Full Width hero
Template for full width conten block.
