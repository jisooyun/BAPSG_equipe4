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

//_______________ SLIDE 11 ___________________________________________________________________________________________

var controller11 = new ScrollMagic.Controller();

var DeplacementFusee = TweenLite.fromTo("#fusee", 1, {rotation: 60, x: 150}, {rotation: 0, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one",
    duration: $(window).height(),
    triggerHook: 0
})

.setTween(DeplacementFusee)
.addTo(controller11);

// ____________________________________________________________________________________________________________________


var controller11 = new ScrollMagic.Controller();

var DeplacementFusee = TweenLite.fromTo("#fusee", 1, {x: 150}, {rotation: -20, scale: 0.1, y: -290, x: 50, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#two",
    duration: $(window).height(),
    triggerHook: 0
})

.setTween(DeplacementFusee)
.addTo(controller11);

//_______________ SLIDE 12 ____________________________________________________________________________________________


var controller12 = new ScrollMagic.Controller();

var DeplacementTexteFusee = TweenLite.fromTo("#texte_a", 1, {x: -500 }, {x: 50, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s12",
    duration: $(window).height(),
    triggerHook: 0
})

.setTween(DeplacementTexteFusee)
.addTo(controller12);

// ____________________________________________________________________________________________________________________

var controller12 = new ScrollMagic.Controller();

var DeplacementControler = TweenLite.fromTo("#people", 1, {x: 700, y:700}, {x: -110, y: -150, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#two-s12",
    duration: $(window).height(),
    triggerHook: 0
})

.setTween(DeplacementControler)
.addTo(controller12);

// ____________________________________________________________________________________________________________________

var controller12 = new ScrollMagic.Controller();

var DeplacementTexteControler = TweenLite.fromTo("#texte_b", 1, {x: 500}, {x: -10, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#three-s12",
    duration: $(window).height(),
    offset: -10,
    triggerHook: 0,
})

.setTween(DeplacementTexteControler)
.addTo(controller12);



//_______________ SLIDE 13 ____________________________________________________________________________________________

var controller13 = new ScrollMagic.Controller();

var FadePlanet = TweenLite.fromTo("#espace-s13", 1, {x:0}, {opacity:0.95, ease:Power1.easeInOut})

var Fade = new ScrollMagic.Scene({
    triggerElement: "#two-s13",
    duration: $(window).height(),
    offset: -10,
    triggerHook: 0,
})

.setTween(FadePlanet)
.addTo(controller13);

// ____________________________________________________________________________________________________________________


var controller13 = new ScrollMagic.Controller();

var DeplacementTexteControler = TweenLite.fromTo("#texte_s13", 1, {x: 500}, {x: -10, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s13",
    duration: $(window).height(),
    offset: -10,
    triggerHook: 0,
})

.setTween(DeplacementTexteControler)
.addTo(controller13);


//_______________ SLIDE 13 BIS ________________________________________________________________________________________

var controller = new ScrollMagic.Controller();

var DeplacementTexteFusee = TweenLite.fromTo("#planete-s13bis", 1, {x: -300, y: 1 }, {x: 1, y: 0, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#slide13bis",
    duration: $(window).height(),
    triggerHook: 0
})

.setTween(DeplacementTexteFusee)
.addTo(controller);

// ____________________________________________________________________________________________________________________

var controller1 = new ScrollMagic.Controller();

var DeplacementControler = TweenLite.fromTo("#fusee-s13bis", 1, {x: 500, y:1}, {x: -2000, y: 0, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#three-s13bis",
    duration: $(window).height(),
    triggerHook: 0
})

.setTween(DeplacementControler)
.addTo(controller1);


// ____________________________________________________________________________________________________________________

