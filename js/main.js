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

var controller15bis = new ScrollMagic.Controller();

var DeplacementControler = TweenLite.fromTo("#people-s15", 1, {x: 700, y:700}, {x: -100, y: -50, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#two-s15",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementControler)
.addTo(controller15bis);

// ____________________________________________________________________________________________________________________

var controller15ter = new ScrollMagic.Controller();

var DeplacementTexteControler = TweenLite.fromTo("#txt2-s15", 1, {x: 500}, {x:-320, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#three-s15",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementTexteControler)
.addTo(controller15ter);



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


var controller16bis = new ScrollMagic.Controller();

var DeplacementTexteControler2 = TweenLite.fromTo("#texte-s16", 1, {x: 500}, {x: -10, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s16",
    duration: $(window).height(),
    offset: -10,
    triggerHook: 0,
})

.setTween(DeplacementTexteControler2)
.addTo(controller16bis);


//_______________ SLIDE 17 ____________________________________________________________________________________________


var controller17 = new ScrollMagic.Controller();

var DeplacementControler2 = TweenLite.fromTo("#fusee-s17", 1, {x: 500, y:1}, {x: -700, y: -100, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#two-s17",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementControler2)
.addTo(controller17);

// _______________________________________________________________________________________________________________________

var controller17bis = new ScrollMagic.Controller();

var DeplacementControler17bis = TweenLite.fromTo("#texte-s17", 1, {x: 1000}, {x: -200, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s17",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementControler17bis)
.addTo(controller17bis);

//_______________ SLIDE 18 ______________________________________________________________________________________________

var controller18 = new ScrollMagic.Controller();

var DeplacementFusee = TweenLite.fromTo("#fusee-s18", 1, {opacity: 0 }, {opacity: 1})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s18",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementFusee)
.addTo(controller18);

// ____________________________________________________________________________________________________________________

var controller18bis = new ScrollMagic.Controller();

var DeplacementControler3 = TweenLite.fromTo("#texte1-s18", 1, {x: -1000}, {x: 0, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#two-s18",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementControler3)
.addTo(controller18bis);

// ____________________________________________________________________________________________________________________

var controller18ter = new ScrollMagic.Controller();

var DeplacementControler4 = TweenLite.fromTo("#texte2-s18", 1, {x: -1100}, {x: 0, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#three-s18",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementControler4)
.addTo(controller18ter);

//_______________ SLIDE 19 ____________________________________________________________________________________________

var controller19 = new ScrollMagic.Controller();

var DeplacementFusee19 = TweenLite.fromTo("#fusee-s19", 1, {y:0, x:0}, {y:-200, rotation:-180})

var fusees19 = new ScrollMagic.Scene({
    triggerElement: "#one-s19",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementFusee19)
.addTo(controller19);

// ____________________________________________________________________________________________________________________

var controller19 = new ScrollMagic.Controller();

var DeplacementFusee191 = TweenLite.fromTo("#fusee-s19", 1, {y:-200, x:0}, {x:-500, rotation:-157})

var fusees19 = new ScrollMagic.Scene({
    triggerElement: "#two-s19",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementFusee191)
.addTo(controller19);

// ____________________________________________________________________________________________________________________

var controller19 = new ScrollMagic.Controller();

var DeplacementFusee192 = TweenLite.fromTo("#fusee-s19", 1, {y:-200, x:-500}, {x:-700, y:-350, rotation:-100})

var fusees19 = new ScrollMagic.Scene({
    triggerElement: "#three-s19",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementFusee192)
.addTo(controller19);

// ____________________________________________________________________________________________________________________

var controller19 = new ScrollMagic.Controller();

var DeplacementFusee193 = TweenLite.fromTo("#fusee-s19", 1, {x:-700, y:-350}, {x:-790, y:-900})

var fusees19 = new ScrollMagic.Scene({
    triggerElement: "#four-s19",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementFusee193)
.addTo(controller19);

// ____________________________________________________________________________________________________________________


var controller19 = new ScrollMagic.Controller();

var DeplacementMeteorites = TweenLite.fromTo("#espace-s19", 1, {y:0, x:0}, {y:170, x:170})

var meteorites = new ScrollMagic.Scene({
    triggerElement: "#one-s19",
    duration: 3*$(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementMeteorites)
.addTo(controller19);

// ____________________________________________________________________________________________________________________


var controller19 = new ScrollMagic.Controller();

var DeplacementIt1 = TweenLite.fromTo("#fusee-it", 1, {y:-300, x:0}, {y:-300, x:-30, rotation:40})

var meteorites = new ScrollMagic.Scene({
    triggerElement: "#one-s19",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementIt1)
.addTo(controller19);

// ____________________________________________________________________________________________________________________


var controller19 = new ScrollMagic.Controller();

var DeplacementIt = TweenLite.fromTo("#fusee-it", 1, {y:-300, x:-30}, {y:-200, x:-100, rotation:50})

var meteorites = new ScrollMagic.Scene({
    triggerElement: "#two-s19",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementIt)
.addTo(controller19);

// ____________________________________________________________________________________________________________________

var controller19 = new ScrollMagic.Controller();

var DeplacementIt2 = TweenLite.fromTo("#fusee-it", 1, {y:-200, x:-100}, {y:-300, x:-200, rotation:90})

var meteorites = new ScrollMagic.Scene({
    triggerElement: "#three-s19",
    duration: $(window).height()+300,
    triggerHook: 0,
})

.setTween(DeplacementIt2)
.addTo(controller19);

// ____________________________________________________________________________________________________________________

var controller19 = new ScrollMagic.Controller();

var DeplacementIt3 = TweenLite.fromTo("#fusee-it", 1, {y:-300, x:-200}, {opacity:0})

var meteorites = new ScrollMagic.Scene({
    triggerElement: "#four-s19",
    duration: 150,
    triggerHook: 0,
})

.setTween(DeplacementIt3)
.addTo(controller19);

// ____________________________________________________________________________________________________________________

var controller19 = new ScrollMagic.Controller();

var DeplacementIt4 = TweenLite.fromTo("#explosion", 1, {y:-320, x:-320, opacity:0}, {opacity:1})

var meteorites = new ScrollMagic.Scene({
    triggerElement: "#four-s19",
    duration: 150,
    triggerHook: 0,
})

.setTween(DeplacementIt4)
.addTo(controller19);

//_______________ SLIDE 23 ____________________________________________________________________________________________

// var controller23 = new ScrollMagic.Controller();

// var DeplacementFusee = TweenLite.fromTo("#fusee-s23", 1, { y: -500}, { y: 0, ease: Linear.easeNone})

// var Aterrisage = new ScrollMagic.Scene({
//     triggerElement: "#one-s23",
//     duration: $(window).height(),
//     triggerHook: 0,
// })

// .setTween(DeplacementFusee)
// .addTo(controller23);

// ____________________________________________________________________________________________________________________

//_______________ SLIDE 20 _____________________________________________________________________________________________

var controller20 = new ScrollMagic.Controller();

var DeplacementControler20 = TweenLite.fromTo("#texte-s20", 1, {x: 1000}, {x: -460, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s20",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementControler20)
.addTo(controller20);

//_______________________________________________________________________________________________________________________

var controller20alien1 = new ScrollMagic.Controller();

var FadePlanet20alien1 = TweenLite.fromTo("#alien1-s20", 1, {x:0, opacity: 0}, {opacity:0.95, ease:Power1.easeInOut})

var Fade20alien1 = new ScrollMagic.Scene({
    triggerElement: "#one-s20",
    duration: $(window).height(),
    offset: -10,
    triggerHook: 0,
})

.setTween(FadePlanet20alien1)
.addTo(controller20alien1);

//_______________________________________________________________________________________________________________________

var controller20alien2 = new ScrollMagic.Controller();

var FadePlanet20alien2 = TweenLite.fromTo("#alien2-s20", 1, {x:0, opacity: 0}, {opacity:0.95, ease:Power1.easeInOut})

var Fade20alien2 = new ScrollMagic.Scene({
    triggerElement: "#one-s20",
    duration: $(window).height(),
    offset: -10,
    triggerHook: 0,
})

.setTween(FadePlanet20alien2)
.addTo(controller20alien2);

// ______________ SLIDE 22 ______________________________________________________________________________________________

var controller22 = new ScrollMagic.Controller();

var DeplacementControler22 = TweenLite.fromTo("#fusee-s22", 1, {x: 500, y: -100}, {x: -500, y: 230, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s22",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementControler22)
.addTo(controller22);

//_______________________________________________________________________________________________________________________

var controller22 = new ScrollMagic.Controller();

var DeplacementControler22 = TweenLite.fromTo("#texte-s22", 1, {x: 1000}, {x: 0, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s22",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementControler22)
.addTo(controller22);