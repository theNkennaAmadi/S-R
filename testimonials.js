let tSections = [...document.querySelectorAll(".c-section")];
let tIndex = tSections.length.toString().padStart(2, "0");
tSections.map((section) => {
  let index = (tSections.indexOf(section) + 1).toString().padStart(2, "0");
  section.querySelector("[section-index]").textContent = index;
  section.querySelector("[section-total]").textContent = tIndex;
  section.addEventListener("click", () => {
    if (tSections.indexOf(section) !== tSections.length - 1) {
      let nextSection = section.nextElementSibling;
      console.log();
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else {
      let prevSection = tSections[0];
      prevSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

const options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.3
};

let callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let section = entry.target;
      if (tSections.indexOf(section) === tSections.length - 1) {
        gsap.to(".animated-c-icon-spinning.next", { opacity: 0, duration: 0 });
        gsap.to(".animated-c-icon-spinning.back", { opacity: 1, duration: 0 });
        gsap.to(".t-arrow-embed", { rotate: 180 });
      } else {
        gsap.to(".animated-c-icon-spinning.next", { opacity: 1, duration: 0 });
        gsap.to(".animated-c-icon-spinning.back", { opacity: 0, duration: 0 });
        gsap.to(".t-arrow-embed", { rotate: 0 });
      }
      let bgColor = window.getComputedStyle(section).backgroundColor;
      document.querySelector(
        ".animated-icon-c-container"
      ).style.backgroundColor = bgColor;
      document.querySelector(".t-arrow-embed").style.color = bgColor;
      let letters = [...section.querySelectorAll("[letters-fade-in]")];
      letters.map((letter) => {
        let tl = gsap.timeline();
        tl.from(letter.querySelectorAll(".char"), {
          opacity: 0,
          duration: 0.3,
          ease: "power1.out",
          stagger: { amount: 0.8 }
        });
      });
      // Avoid flash of unstyled content
      gsap.set("[text-split]", { opacity: 1 });
    } else {
    }
  });
};
let observer = new IntersectionObserver(callback, options);
document.querySelectorAll(".c-section").forEach((section) => {
  observer.observe(section);
});
