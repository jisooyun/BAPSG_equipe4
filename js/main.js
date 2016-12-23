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


var controller12 = new ScrollMagic.Controller();

var DeplacementTexteFusee = TweenLite.fromTo("#texte_a", 1, {x: -500 }, {x: 50, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s15",
    duration: $(window).height(),
    triggerHook: 0
})

.setTween(DeplacementTexteFusee)
.addTo(controller12);

// ____________________________________________________________________________________________________________________

var controller12 = new ScrollMagic.Controller();

var DeplacementControler = TweenLite.fromTo("#people-s15", 1, {x: 700, y:700}, {x: -110, y: -150, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#two-s15",
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



//_______________ SLIDE 16 ____________________________________________________________________________________________

var controller13 = new ScrollMagic.Controller();

var FadePlanet = TweenLite.fromTo("#espace-s16", 1, {x:0}, {opacity:0.95, ease:Power1.easeInOut})

var Fade = new ScrollMagic.Scene({
    triggerElement: "#two-s16",
    duration: $(window).height(),
    offset: -10,
    triggerHook: 0,
})

.setTween(FadePlanet)
.addTo(controller13);

// ____________________________________________________________________________________________________________________


var controller13 = new ScrollMagic.Controller();

var DeplacementTexteControler = TweenLite.fromTo("#texte-s16", 1, {x: 500}, {x: -10, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s16",
    duration: $(window).height(),
    offset: -10,
    triggerHook: 0,
})

.setTween(DeplacementTexteControler)
.addTo(controller13);

