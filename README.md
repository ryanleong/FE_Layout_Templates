
# Layout Framework
### CSS Libraries

These libraries have been converted to SASS to be imported as they have been customized
- Reset CSS
- Normalize CSS
- Bootstrap (only grid system)
- Animate CSS

Theses libraries are CDN calls
- Swiper 3.3.1

### JS Libraries (from CDN)
- jQuery 3.1.1
- Swiper 3.3.1
. WOW 1.1.2
- jQuery ImagesLoaded 4.1.1


### Components

#### JS Functions
Refer to "src/assets/js/_layout-framework.js".

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
