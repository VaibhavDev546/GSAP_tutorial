// gsap.registerPlugin()
// gsap.from("#page1 .box1", {
//   scale: 0,
//   // duration: 1
//   delay: 1,
//   duration: 1,
//   rotate: 360,
// })
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
// gsap.from("#page2 h1", {
//   opacity: 0,
//   duration: 2,
//   y: 300,
//   scrollTrigger: {
//     trigger:"#page2 h1",
//     scroller: "body",
//     markers: true,
//     start: "top 50%",
//     end: "top: 30%",
//     scrub: 3
//   }
// })
// gsap.from("#page2 p", {
//   opacity: 0,
//   duration: 3,
//   y: -300,
//   scrollTrigger: {
//     trigger:"#page2 p",
//     scroller: "body",
//     markers: true,
//     start: "top 50%",
//     end: "top: 30%",
//     scrub: 3
//   }
// })
// gsap.from("#page3 .box3", {
//   scale: 0,
//   // duration: 1
//   delay: 1,
//   duration: 1,
//   rotate: 360
// })


gsap.registerPlugin(ScrollTrigger);

// Pin the heading in #page2
gsap.to("#page2 h1", {
  x: "-150%", // Move the element horizontally
  scrollTrigger: {
    trigger: "#page2 h1",   // Target the heading inside #page2
    markers: true,          // Display markers for debugging
    start: "top 0%",    // When the top of the element reaches the center of the viewport
    end: "-=150",           // Pin for 500px of scrolling
    scrub: 3,               // Smooth animation synchronized with scroll
    pin: true,              // Keeps the heading pinned during the animation
  }
});
