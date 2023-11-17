gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    const sections = gsap.utils.toArray('section');

    let scrollTween = gsap.to('.wrapper', {
        xPercent: -100,
        x: () => window.innerWidth,
        ease: 'none',
        scrollTrigger: {
            trigger: '.wrapper',
            pin: true,
            scrub: 0.5,
            start: 'top top',
            end: 2000,
        }
    })

})

