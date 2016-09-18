
# Layout Framework
### CSS Libraries

These libraries have been converted to SASS to be imported
- Reset CSS
- Normalize CSS
- Bootstrap (only grid system)
- Animate CSS

### JS Libraries
- jQuery 2.2.4
- Swiper
. WOW
- jQuery ImagesLoaded


### Components

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

#### #map
- Creates a div containing Google Maps
- initMap() is used
- initMap() is the callback for the Google Maps API

# Layout Templates
### Full Width hero
Template for full width conten block.
