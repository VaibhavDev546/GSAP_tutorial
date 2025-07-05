gsap.registerPlugin(ScrollTrigger);

// Navbar animation on scroll
ScrollTrigger.create({
    trigger: "#mainNav",
    start: "top top",
    onEnter: () => {
        gsap.to("#mainNav", { width: "100%", duration: 0.3 });
    },
    onLeaveBack: () => {
        gsap.to("#mainNav", { width: "50%", duration: 0.3 });
    }
});

// Animation config for boxes
const boxes = ["#box1", "#box2", "#box3", "#box4"];

boxes.forEach((box) => {
    gsap.from(box, {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: box,
            start: "top 90%",   // when top of box hits 80% of viewport height
            end: "top 40%",     // animate until top of box hits 40% of viewport
            scrub: 3,
            // markers: true       // turn off in production
        }
    });
});
