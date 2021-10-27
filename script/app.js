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
let tl = gsap.timeline({
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
  },
    '<',
  )