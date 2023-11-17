
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray("section");

gsap.to('.wrapper', {
  xPercent: -100 + ('.wrapper'.length - 1),
  x: () => window.innerWidth,
  ease: "none",
  scrollTrigger: {
    trigger: ".wrapper",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".wrapper").offsetWidth
  }
});
