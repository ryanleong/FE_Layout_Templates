function setUpLightbox(t,e,o,i){$(t).click(function(){o(),fadeIn(e+".lightbox")}),$(e+".lightbox svg#close").click(function(){i(),fadeOut(e+".lightbox")})}function fadeIn(t){$("body").addClass("no-scroll"),$(t).addClass("show"),setTimeout(function(){$(t).addClass("visually-show")},20)}function fadeOut(t){$("body").removeClass("no-scroll"),$(t).removeClass("visually-show"),$(t).one("transitionend",function(){$(t).removeClass("show")})}
;$(document).ready(function(){var t=function(){$("#main.lightbox .wrapper").css({height:"200px",width:"200","background-color":"#fff"})},e=function(){$("#main.lightbox .wrapper").css({height:"0",width:"0","background-color":"#fff"})};setUpLightbox(".horizontal-nav ul li","#main",t,e),$.stellar(),wow=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0}),wow.init()});
//# sourceMappingURL=app.js.map