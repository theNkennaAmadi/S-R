/**
 * Horizontal Scroll
 */
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  const select = (e) => document.querySelector(e);
  const selectAll = (e) => [...document.querySelectorAll(e)];
  const getTotalWidth = (e) => {
    let width = 0;
    let s2 = [...e.querySelectorAll("[h-section]")].slice(0, -1);
    s2.forEach((el) => (width += el.offsetWidth));
    return width;
  };
  /*
  let sectionWords = selectAll("[section-words]");
  gsap.set(sectionWords, { opacity: 0, y: "30%" });
  sectionWords.map((section) => {
    let tl2 = gsap.timeline();
    tl2.to(section, {
      y: "0%",
      opacity: 1,
      duration: 3,
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        duration: 3,
        markers: true,
        //scrub: true,
        //end: "bottom bottom",
        invalidateOnRefresh: true
      }
    });
  });
  */
  let sectionWords = selectAll("[section-words]");
  gsap.set(sectionWords, { opacity: 0, y: "30%" });
  const options = {
    root: null,
    rootMargin: "20% 0% 0px 0px",
    threshold: 0.05
  };
  let callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let section = entry.target;
        gsap.to(section, {
          opacity: 1,
          y: "0%",
          duration: 1.5,
          ease: "expo.inOut"
        });
      } else {
        //$(".logo").removeClass("white");
      }
    });
  };
  let observer = new IntersectionObserver(callback, options);
  document.querySelectorAll("[section-words]").forEach((section) => {
    observer.observe(section);
  });
  selectAll("[h-section-wrapper]").map((section) => {
    let tl = gsap.timeline();
    tl.to(section.querySelectorAll("[h-section]"), {
      x: () => -getTotalWidth(section),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        //markers: true,
        //horizontal: true,
        scrub: 1,
        //snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + (section.scrollWidth - window.innerWidth),
        invalidateOnRefresh: true,
        onRefresh() {
          let totalWidth = getTotalWidth(section),
            accumulatedWidth = 0,
            progressArray = [...section.querySelectorAll("[h-section]")].map(
              (el) => {
                accumulatedWidth += el.offsetWidth;
                return accumulatedWidth / totalWidth;
              }
            );
          progressArray.unshift(0);
        }
      }
    });
  });

  let tl1 = gsap.timeline({ paused: true });
  tl1.to(".animated-icon-wrapper.work-intro", {
    y: "400%",
    opacity: 0,
    duration: 0.5
  });
  ScrollTrigger.create({
    trigger: ".works-intro-image-wrapper",
    start: "top 20%",
    ease: "expo.inOut",
    //markers: true,
    //scrub: true,
    end: "bottom bottom",
    invalidateOnRefresh: true,
    onEnter: () => {
      tl1.play();
    },
    onEnterBack: () => {
      tl1.reverse();
    }
  });
});
