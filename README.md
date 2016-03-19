
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
- For Absolute

```sass
&.absolute
```

- For Fixed

```sass
&.fixed
```

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

# Layouts Templates
### Full Width hero
Template for full width conten block.
