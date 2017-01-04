
// Init ScrollMagic
var ctrl = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave',
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

//_______________ SLIDE 13 ____________________________________________________________________________________________

var controller13 = new ScrollMagic.Controller();

var DeplacementControler13 = TweenLite.fromTo("#fusee-s13", 1, {x: 310, y: -170}, {x: -600, y: -200, ease:Power1.easeInOut})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s13",
    duration: 4*$(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementControler13)
.addTo(controller13);

// ____________________________________________________________________________________________________________________

var DeplacementControler13bis = TweenLite.fromTo("#texte-s13", 1, {x: 1600}, {x: 0, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s13",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementControler13bis)
.addTo(controller13);

// ____________________________________________________________________________________________________________________

var DeplacementControler13people1 = TweenLite.fromTo("#people1-s13", 1, {x: -1000, y: 350}, {x: -200, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s13",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementControler13people1)
.addTo(controller13);

// ____________________________________________________________________________________________________________________

var DeplacementControler13people2 = TweenLite.fromTo("#people2-s13", 1, {x: 1000, y:370}, {x: 130, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s13",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementControler13people2)
.addTo(controller13);

//_______________ SLIDE 99 ____________________________________________________________________________________________

var controller99 = new ScrollMagic.Controller();

var DeplacementFusee991 = TweenLite.fromTo("#fusee", 1, {rotation: 60, x: 150}, {rotation: 0, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s99",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementFusee991)
.addTo(controller99);

// ____________________________________________________________________________________________________________________

var DeplacementFusee992 = TweenLite.fromTo("#fusee", 1, {x: 150}, {rotation: -20, scale: 0.0, y: -290, x: 50, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#two-s99",
    duration: $(window).height(),
    triggerHook: 0
})

.setTween(DeplacementFusee992)
.addTo(controller99);

// ____________________________________________________________________________________________________________________

var DeplacementFusee993 = TweenLite.fromTo("#fusee1-s99", 1, {y: 1200}, {scale: 0.5, y: -300, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s99",
    duration:6*$(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementFusee993)
.addTo(controller99);

// ____________________________________________________________________________________________________________________

var DeplacementFusee994 = TweenLite.fromTo("#fusee2-s99", 1, {x: 200, y: 1200}, {scale: 0.5, y: -300, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s99",
    duration:6*$(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementFusee994)
.addTo(controller99);

//_______________ SLIDE 14 ____________________________________________________________________________________________

var controller14 = new ScrollMagic.Controller();

var DeplacementTexte14 = TweenLite.fromTo("#texte-s14", 1, {x: 1600}, {x: 0, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s14",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementTexte14)
.addTo(controller14);

// ____________________________________________________________________________________________________________________

var controller14onde = new ScrollMagic.Controller();

var Onde = TweenLite.fromTo("#onde", 1, {x:-400, y:280, opacity:0, rotation:0}, {rotation:15, x:-100, opacity:1, ease: Linear.easeNone})

var dispersion = new ScrollMagic.Scene({
    triggerElement: "#one-s14",
    duration: $(window).height()+200,
    triggerHook: 0
})

.setTween(Onde)
.addTo(controller14onde);

// ____________________________________________________________________________________________________________________

var Onde1 = TweenLite.fromTo("#onde", 1, {x:-100}, {opacity:0, ease: Linear.easeNone})

var dispersion = new ScrollMagic.Scene({
    triggerElement: "#two-s14",
    duration: 200,
    triggerHook: 0
})

.setTween(Onde1)
.addTo(controller14);

// ____________________________________________________________________________________________________________________

var Onde2 = TweenLite.fromTo("#onde", 1, {x:-400, y:280, opacity:0, rotation:0}, {rotation:15, x:-100, opacity:1, ease: Linear.easeNone})

var dispersion = new ScrollMagic.Scene({
    triggerElement: "#three-s14",
    duration: $(window).height()+200,
    triggerHook: 0
})

.setTween(Onde2)
.addTo(controller14onde);

// ____________________________________________________________________________________________________________________

var Onde3 = TweenLite.fromTo("#onde", 1, {x:-100}, {opacity:0, ease: Linear.easeNone})

var dispersion = new ScrollMagic.Scene({
    triggerElement: "#four-s14",
    duration: 200,
    triggerHook: 0
})

.setTween(Onde3)
.addTo(controller14onde);

//_______________ SLIDE 15 ____________________________________________________________________________________________

var controller15 = new ScrollMagic.Controller();

var DeplacementControler = TweenLite.fromTo("#people-s15", 1, {x: 700, y:700}, {x: -100, y: -50, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s15",
    duration: $(window).height(),
    triggerHook: 0,
	
})

.setTween(DeplacementControler)
.addTo(controller15);

// ____________________________________________________________________________________________________________________

var DeplacementFusee15 = TweenLite.fromTo("#fusee-s15", 1, {x: 0, y:0}, {x: -100, y: -700, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s15",
    duration: $(window).height(),
    triggerHook: 0,
    
})

.setTween(DeplacementFusee15)
.addTo(controller15);

// ____________________________________________________________________________________________________________________

var FadeTxt15sld15 = TweenLite.fromTo("#txt2-s15", 1, {x:0, opacity: 0}, {opacity:0.95, delay: 4, ease:Power1.easeInOut})

var Fade20alien2 = new ScrollMagic.Scene({
    triggerElement: "#one-s15",
    duration: $(window).height(),
    offset: -10,
    triggerHook: 0,
	
})

.setTween(FadeTxt15sld15)
.addTo(controller15);

// ____________________________________________________________________________________________________________________


var FadeTxt215sld15 = TweenLite.fromTo("#txt-s15", 1, {x:0, opacity: 0}, {opacity:0.95, delay: 40, ease:Power1.easeInOut})

var Fade20alien2 = new ScrollMagic.Scene({
    triggerElement: "#two-s15",
    duration: $(window).height(),
    offset: -10,
    triggerHook: 0,
})

.setTween(FadeTxt215sld15)
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

var DeplacementTexteControler2 = TweenLite.fromTo("#texte-s16", 1, {x: 500}, {x: -10, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s16",
    duration: $(window).height(),
    offset: -10,
    triggerHook: 0,
})
.setTween(DeplacementTexteControler2)
.addTo(controller16);

// ____________________________________________________________________________________________________________________

var controller16ter = new ScrollMagic.Controller();

var DeplacementTexte16 = TweenLite.fromTo("#texte1-s16", 1, {x: 1600}, {x: 0, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s16",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementTexte16)
.addTo(controller16ter);

// ____________________________________________________________________________________________________________________

var controller16quatre = new ScrollMagic.Controller();

var DeplacementTexte16bis = TweenLite.fromTo("#texte2-s16", 1, {x: 1600}, {x: 0, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#three-s16",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementTexte16bis)
.addTo(controller16quatre);

// ____________________________________________________________________________________________________________________

var controller16people = new ScrollMagic.Controller();

var DeplacementControler16people = TweenLite.fromTo("#people-s16", 1, {x: -1600, y: -20}, {x: -100, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s16",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementControler16people)
.addTo(controller16people);


//_______________ SLIDE 17 ____________________________________________________________________________________________


var controller17 = new ScrollMagic.Controller();

var DeplacementControler2 = TweenLite.fromTo("#fusee-s17", 0.5, {x: 500, y:1}, {x: -550, y: -200, ease:Power1.easeInOut})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#three-s17",
    duration: 2*$(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementControler2)
.addTo(controller17);

// _______________________________________________________________________________________________________________________

var controller17bis = new ScrollMagic.Controller();

var DeplacementControler17bis = TweenLite.fromTo("#texte-s17", 1, {x: 1200}, {x: -100, ease: Linear.easeNone})

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

var DeplacementControler3 = TweenLite.fromTo("#texte1-s18", 1, {x: -1600}, {x: 0, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#two-s18",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementControler3)
.addTo(controller18bis);

// ____________________________________________________________________________________________________________________

var controller18ter = new ScrollMagic.Controller();

var DeplacementControler4 = TweenLite.fromTo("#texte2-s18", 1, {x: 1600}, {x: 0, ease: Linear.easeNone})

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


//_______________ SLIDE 20 _____________________________________________________________________________________________

var controller20 = new ScrollMagic.Controller();

var DeplacementControler20 = TweenLite.fromTo("#texte-s20", 1, {x: 1600}, {x: -10, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s20",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementControler20)
.addTo(controller20);

//_______________________________________________________________________________________________________________________

var controller20alien1 = new ScrollMagic.Controller();

var ApparitionAlien1 = TweenLite.fromTo("#alien1-s20", 0.5, {x: 500, y:1}, {x: 150, y: -20, ease:Power1.easeInOut})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s20",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(ApparitionAlien1)
.addTo(controller20alien1);

// ______________ SLIDE 21 ______________________________________________________________________________________________

var controller21 = new ScrollMagic.Controller();

var ZoomPlanet = TweenLite.fromTo("#planete-s21", 1, {scale:1}, {scale:3, rotation:-25, ease:Power4.easeOutIn})

var ZoomPlanete = new ScrollMagic.Scene({
    triggerElement: "#one-s21",
    duration: 5*$(window).height(),
    triggerHook: 0,
})

.setTween(ZoomPlanet)
.addTo(controller21);

// ______________ SLIDE 22 ______________________________________________________________________________________________

var controller22 = new ScrollMagic.Controller();

var DeplacementControler22 = TweenLite.fromTo("#fusee-s22", 1, {x: 1000, y: -350}, {x: 0, y: -200, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s22",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementControler22)
.addTo(controller22); 


//_______________________________________________________________________________________________________________________

var controller22 = new ScrollMagic.Controller();

var DeplacementControler22 = TweenLite.fromTo("#texte-s22", 1, {x: 1400}, {x: 0, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s22",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementControler22)
.addTo(controller22);

//_______________ SLIDE 23 ____________________________________________________________________________________________

var controller23 = new ScrollMagic.Controller();

var DeplacementFusee = TweenLite.fromTo("#fusee-s23", 1, { opacity: 1, y: -150}, { opacity: 1, y: 0, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#one-s23",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementFusee)
.addTo(controller23);
// _________________________

var controller23 = new ScrollMagic.Controller();

var DeplacementFusee = TweenLite.fromTo("#fusee2-s23", 1, {opacity: 0, x:500, y:-300}, {opacity: 1, x:0, y: 200})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#two-s23",
    duration: 4*$(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementFusee)
.addTo(controller23);


// ____________________________________________________________________________________________________________________

var controller23 = new ScrollMagic.Controller();

var DeplacementFusee = TweenLite.fromTo("#nuage1", 1, { opacity: 0, y: -300}, { opacity: 0, y: 150})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#four-s23",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementFusee)
.addTo(controller23);

// ____________________________________________________________________________________________________________________

var controller23 = new ScrollMagic.Controller();

var DeplacementFusee = TweenLite.fromTo("#nuage2", 1, { opacity: 0, y: -300}, { opacity: 0, y: 100})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#three-s23",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementFusee)
.addTo(controller23);

// ____________________________________________________________________________________________________________________

var controller23 = new ScrollMagic.Controller();

var DeplacementFusee = TweenLite.fromTo("#nuage3", 1, {opacity: 0, y: -300}, {opacity: 0, y: 50})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#two-s23",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementFusee)
.addTo(controller23);

// ____________________________________________________________________________________________________________________

var controller23 = new ScrollMagic.Controller();

var DeplacementFusee = TweenLite.fromTo("#nuage1", 1, { opacity: 0}, { opacity: 1})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#five-s23",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementFusee)
.addTo(controller23);


// ____________________________________________________________________________________________________________________

var controller23 = new ScrollMagic.Controller();

var DeplacementFusee = TweenLite.fromTo("#nuage2", 1, { opacity: 0}, { opacity: 1})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#four-s23",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementFusee)
.addTo(controller23);

// ____________________________________________________________________________________________________________________

var controller23 = new ScrollMagic.Controller();

var DeplacementFusee = TweenLite.fromTo("#nuage3", 1, { opacity: -10}, { opacity: 1})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#three-s23",
    duration: $(window).height(),
    triggerHook: -250,
})

.setTween(DeplacementFusee)
.addTo(controller23);

// ____________________________________________________________________________________________________________________

var controller23bis = new ScrollMagic.Controller();

var DeplacementAstro = TweenLite.fromTo("#astronaute-s23", 1, { opacity : 0, y: 350, x: 900}, { opacity: 1, y: 0, x:0, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#two-s23",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementAstro)
.addTo(controller23bis);

// ____________________________________________________________________________________________________________________

var controller23bis = new ScrollMagic.Controller();

var DeplacementAstro = TweenLite.fromTo("#astronaute-s23", 1, { y: 0, x:0}, { y: 250, x:-200, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#three-s23",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementAstro)
.addTo(controller23bis);


var controller23 = new ScrollMagic.Controller();

var DeplacementFusee = TweenLite.fromTo("#panneau", 1, { opacity: 0, y: -500}, { opacity: 1, y: 300, ease: Linear.easeNone})

var Aterrisage = new ScrollMagic.Scene({
    triggerElement: "#five-s23",
    duration: $(window).height(),
    triggerHook: 0,
})

.setTween(DeplacementFusee)
.addTo(controller23);

var controller23bul = new ScrollMagic.Controller();

var FadeBul23sld23 = TweenLite.fromTo("#bravo", 1, {x:0, opacity: 0}, {opacity:0.95, delay: 3, ease:Power1.easeInOut})

var Fade20alien2 = new ScrollMagic.Scene({
    triggerElement: "#five-s23",
    duration: $(window).height(),
    offset: -10,
    triggerHook: 0,
})

.setTween(FadeBul23sld23)
.addTo(controller23bul);