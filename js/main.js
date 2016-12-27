// Init ScrollMagic
var ctrl = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave'
  }
});

// Create scene
$("section").each(function() {

  var name = $(this).attr('id');
  
  new ScrollMagic.Scene({
    triggerElement: this
  })
  .setPin(this)
  .addIndicators({
    colorStart: "rgba(255,255,255,0.5)",
    colorEnd: "rgba(255,255,255,0.5)", 
    colorTrigger : "rgba(255,255,255,1)",
    name:name
    })
  .addTo(ctrl);
 
});

//_______________ SLIDE 15 ____________________________________________________________________________________________


var controller15 = new ScrollMagic.Controller();

var DeplacementTexteFusee = TweenLite.fromTo("#txt-s15", 1, {x: -500 }, {x: 20, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s15",
    duration: $(window).height(),
    triggerHook: 0
})

.setTween(DeplacementTexteFusee)
.addTo(controller15);

// ____________________________________________________________________________________________________________________

var controller15 = new ScrollMagic.Controller();

var DeplacementControler = TweenLite.fromTo("#people-s15", 1, {x: 700, y:700}, {x: -100, y: -50, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#two-s15",
    duration: $(window).height(),
    triggerHook: 0
})

.setTween(DeplacementControler)
.addTo(controller15);

// ____________________________________________________________________________________________________________________

var controller15 = new ScrollMagic.Controller();

var DeplacementTexteControler = TweenLite.fromTo("#txt2-s15", 1, {x: 500}, {x:-320, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#three-s15",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementTexteControler)
.addTo(controller15);



//_______________ SLIDE 16 ____________________________________________________________________________________________

var controller16 = new ScrollMagic.Controller();

var FadePlanet = TweenLite.fromTo("#espace-s16", 1, {x:0}, {opacity:0.95, ease:Power1.easeInOut})

var Fade = new ScrollMagic.Scene({
    triggerElement: "#two-s16",
    duration: $(window).height(),
    offset: -10,
    triggerHook: 0,
})

.setTween(FadePlanet)
.addTo(controller16);

// ____________________________________________________________________________________________________________________


var controller16 = new ScrollMagic.Controller();

var DeplacementTexteControler = TweenLite.fromTo("#texte-s16", 1, {x: 500}, {x: -10, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s16",
    duration: $(window).height(),
    offset: -10,
    triggerHook: 0,
})

.setTween(DeplacementTexteControler)
.addTo(controller16);


//_______________ SLIDE 17 ____________________________________________________________________________________________

var controller17 = new ScrollMagic.Controller();

var DeplacementFusee = TweenLite.fromTo("#planete-s17", 1, {x: -300, y: 1 }, {x: 1, y: 0, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s17",
    duration: $(window).height(),
    triggerHook: 0
})

.setTween(DeplacementFusee)
.addTo(controller17);

// ____________________________________________________________________________________________________________________

var controller17 = new ScrollMagic.Controller();

var DeplacementControler = TweenLite.fromTo("#fusee-s17", 1, {x: 500, y:1}, {x: -1100, y: 0, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#two-s17",
    duration: $(window).height(),
    triggerHook: 0
})

.setTween(DeplacementControler)
.addTo(controller17);

// ____________________________________________________________________________________________________________________


