gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".box-section");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".scroll-content",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".scroll-content").offsetWidth
  }
});