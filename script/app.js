//Tweens
// gsap.to('#Robot', { duration: 1, x: 50 });
// gsap.from('#Robot', { duration: 1, x: 50 });
// gsap.set('#Robot', { duration: 1, x: 50 });
// gsap.fromTo('#Robot', { x: -50 }, { duration: 1, x: 50 })

//Easing
// gsap.to('#Robot', {
//     duration: 2,
//     ease: 'elastic.out(2.5,0.1)',
//     x: 50,
// })

//Timeline
var tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power1.inOut',
    },
    repeat: -1,
    yoyo: true,
  })

tl.set('#Shadow', {
  transformOrigin: '50% 100%',
})
.fromTo('#Robot',{
  y: 2.5,
},{
  y: -2.5,
})
.to('#Shadow', {
  scale: 0.75,
  opacity: 0.075,
},
  '<',
)

var btnPause = document.querySelector('.js-pause');
btnPause.onclick = function (){
  tl.paused(!tl.paused());
}

var btnFast = document.querySelector('.js-fast');
btnFast.onclick = function (){
  tl.timeScale(2);
}

var btnNormal = document.querySelector('.js-normal');
btnNormal.onclick = function (){
  tl.timeScale(1);
}

var btnSlow = document.querySelector('.js-slow');
btnSlow.onclick = function (){
  tl.timeScale(0.5);
}