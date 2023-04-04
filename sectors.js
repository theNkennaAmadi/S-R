gsap.to(".sectors-img-wrapper", {
  rotation: 360,
  //z: 100,
  transformOrigin: "50% 50%",
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".sectors-img-main-wrapper",
    start: "top 10%", // when the top of the trigger hits the top of the viewport
    end: "bottom 10%", // end after scrolling 500px beyond the start
    scrub: true // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  }
});
