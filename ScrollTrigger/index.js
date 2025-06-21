gsap.registerPlugin()
gsap.from("#page1 .box1", {
  scale: 0,
  // duration: 1
  delay: 1,
  duration: 1,
  rotate: 360,
})
// gsap.from("#page2 p", {
//   opacity: 0,
//   duration: 2,
//   y: 100,
//   scrollTrigger: {
//     trigger:"#page2 p",
//     scroller: "body",
//     markers: true,
//     top: "40%"
//   }
// })
gsap.from("#page2 h1", {
  opacity: 0,
  duration: 2,
  y: 300,
  scrollTrigger: {
    trigger:"#page2 h1",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top: 30%",
    scrub: 3
  }
})
gsap.from("#page2 p", {
  opacity: 0,
  duration: 3,
  y: -300,
  scrollTrigger: {
    trigger:"#page2 p",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top: 30%",
    scrub: 3
  }
})
// gsap.from("#page3 .box3", {
//   scale: 0,
//   // duration: 1
//   delay: 1,
//   duration: 1,
//   rotate: 360
// })