/**
 * Cursor Hover
 */
const links = [...document.querySelectorAll("a")];
const images = [...document.querySelectorAll("img")];
const cursor = document.querySelector(".cursor");

links.map((link) => {
  link.addEventListener("mouseenter", () => {
    if (link.classList.contains("portfolio-link-block")) {
      if (!cursor.classList.contains("p-grow")) {
        cursor.classList.add("p-grow");
      }
    } else {
      if (!cursor.classList.contains("a-grow")) {
        cursor.classList.add("a-grow");
      }
    }
  });
  link.addEventListener("mouseleave", () => {
    if (link.classList.contains("portfolio-link-block")) {
      if (cursor.classList.contains("p-grow")) {
        cursor.classList.remove("p-grow");
      }
    } else {
      if (cursor.classList.contains("a-grow")) {
        cursor.classList.remove("a-grow");
      }
    }
  });
});

images.map((image) => {
  image.addEventListener("mouseenter", () => {
    if (!cursor.classList.contains("a-grow")) {
      cursor.classList.add("grow");
    }
  });
  image.addEventListener("mouseleave", () => {
    if (cursor.classList.contains("a-grow")) {
      cursor.classList.remove("grow");
    }
  });
});

/**
 * Nav Date and Weather
 */

window.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    let today = new Date();
    let rToday = today.toLocaleString("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Europe/London"
    });
    document.getElementById("london-time").textContent = rToday;
  }, 1000);
});

/*
fetch(
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London?unitGroup=metric&include=current&key=6LAYSG7XBAAS3UTJGPCCQWYZ8&contentType=json",
  {
    method: "GET",
    headers: {}
  }
)
  .then((response) => {
    if (!response.ok) {
      throw response; //check the http response code and if isn't ok then throw the response as an error
    }

    return response.json(); //parse the result as JSON
  })
  .then((response) => {
    //response now contains parsed JSON ready for use
    console.log(response.currentConditions.temp);
    document.querySelector(
      "#temp"
    ).textContent = `${response.currentConditions.temp}ºC`;
    //processWeatherData(response);
  })
  .catch((errorResponse) => {
    if (errorResponse.text) {
      //additional error information
      errorResponse.text().then((errorMessage) => {
        //errorMessage now returns the response body which includes the full error message
      });
    } else {
      //no additional error information
    }
  });

  */

fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=51.5&longitude=-0.1276&current_weather=true",
  {
    method: "GET",
    headers: {}
  }
)
  .then((response) => {
    if (!response.ok) {
      throw response; //check the http response code and if isn't ok then throw the response as an error
    }

    return response.json(); //parse the result as JSON
  })
  .then((response) => {
    //response now contains parsed JSON ready for use
    //console.log(response);

    document.querySelector(
      "#temp"
    ).textContent = `${response.current_weather.temperature}ºC`;
    //processWeatherData(response);
  })
  .catch((errorResponse) => {
    if (errorResponse.text) {
      //additional error information
      errorResponse.text().then((errorMessage) => {
        //errorMessage now returns the response body which includes the full error message
      });
    } else {
      //no additional error information
    }
  });

/**
 * Menu
 */

let currentColor = window.getComputedStyle(
  document.querySelector(".placeholder-nav-top")
).color;

let menuIcon = document.querySelector(".menu-icon-wrapper");
menuIcon.addEventListener("click", () => {
  if (!menuIcon.classList.contains("open")) {
    let tlMenu = gsap.timeline();
    tlMenu.fromTo(
      ".burger-menu-parent",
      { opacity: 1 },
      { opacity: 0, duration: 0.2, ease: "power4.inOut" }
    );

    tlMenu.fromTo(
      ".menu-close-container",
      { opacity: 0 },
      { opacity: 1, duration: 0.2, ease: "power4.inOut" },
      "<"
    );

    tlMenu.fromTo(
      ".menu-bg",
      { x: "110%" },
      { x: "0%", duration: 0.5, ease: "power2.inOut" },
      "<"
    );
    tlMenu.fromTo(
      ".header-columns",
      { opacity: 1 },
      { opacity: 0, duration: 0.2, ease: "power4.inOut" },
      "<"
    );
    tlMenu.fromTo(
      ".header-columns, .placeholder-footer",
      { color: currentColor },
      { color: "#000000", duration: 0.5, ease: "power4.inOut" },
      "<"
    );
    tlMenu.fromTo(
      ".burger-menu-parent",
      { display: "flex" },
      { display: "none", duration: 0, ease: "power4.inOut" },
      "<"
    );
    tlMenu.fromTo(
      ".placeholder-footer",
      { opacity: 1 },
      { opacity: 0, duration: 0.2, ease: "power4.inOut" },
      "<"
    );
    tlMenu.fromTo(
      ".column-info",
      { x: "-2rem", y: "-2rem" },
      { x: "0rem", y: "0rem", duration: 0.5, ease: "Bounce.easeOut" },
      ">"
    );
    tlMenu.fromTo(
      ".menu-link-block",
      {
        x: "30%"
      },
      {
        x: "0%",
        duration: 0.8,
        stagger: {
          each: 0.05,
          ease: "power4.out"
        }
      },
      "<"
    );

    tlMenu.fromTo(
      ".column-menu-icon",
      { x: "2rem", y: "-2rem" },
      { x: "0rem", y: "0rem", duration: 0.5, ease: "Bounce.easeOut" },
      "<"
    );
    tlMenu.fromTo(
      ".column-links",
      { x: "0rem", y: "-2rem" },
      { x: "0rem", y: "0rem", duration: 0.5, ease: "Bounce.easeOut" },
      "<"
    );
    tlMenu.fromTo(
      ".column-logo-2",
      { x: "-2rem", y: "2rem" },
      { x: "0rem", y: "0rem", duration: 0.5, ease: "Bounce.easeOut" },
      "<"
    );
    tlMenu.fromTo(
      ".column-strapline",
      { x: "2rem", y: "2rem" },
      { x: "0rem", y: "0rem", duration: 0.5, ease: "Bounce.easeOut" },
      "<"
    );
    tlMenu.fromTo(
      ".menu-animated-icon-wrapper",
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power4.inOut" },
      "<"
    );
    tlMenu.fromTo(
      ".menu-content-links-wrapper",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power4.inOut" },
      "<"
    );
    tlMenu.fromTo(
      ".header-columns, .placeholder-footer",
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power4.inOut" },
      "<"
    );

    tlMenu.fromTo(
      ".menu-animated-icon-wrapper",
      { x: "-2rem" },
      { x: "-2.5rem", duration: 0.4, ease: "Bounce.easeOut", delay: 0.4 },
      "<"
    );

    menuIcon.classList.add("open");
  } else {
    let tlMenu = gsap.timeline();
    tlMenu.fromTo(
      ".menu-animated-icon-wrapper",
      { x: "-2.5rem" },
      { x: "0rem", duration: 0.4, ease: "power4.inOut" }
    );
    tlMenu.fromTo(
      ".burger-menu-parent",
      { opacity: 1 },
      { opacity: 0, duration: 0.2, ease: "power4.inOut" },
      "<"
    );

    tlMenu.fromTo(
      ".menu-close-container",
      { opacity: 1 },
      { opacity: 0, duration: 0.2, ease: "power4.inOut" },
      "<"
    );

    tlMenu.fromTo(
      ".menu-bg",
      { x: "0%" },
      { x: "110%", duration: 0.5, ease: "power2.inOut" },
      "<"
    );
    tlMenu.fromTo(
      ".header-columns",
      { opacity: 1 },
      { opacity: 0, duration: 0.2, ease: "power4.inOut" },
      "<"
    );
    tlMenu.fromTo(
      ".header-columns, .placeholder-footer",
      { color: "#000000" },
      { color: currentColor, duration: 0.5, ease: "power4.inOut" },
      "<"
    );
    tlMenu.fromTo(
      ".burger-menu-parent",
      { display: "none" },
      { display: "flex", duration: 0, ease: "power4.inOut" },
      "<"
    );
    tlMenu.fromTo(
      ".placeholder-footer",
      { opacity: 1 },
      { opacity: 0, duration: 0.2, ease: "power4.inOut" },
      "<"
    );
    tlMenu.fromTo(
      ".column-info",
      { x: "-2rem", y: "-2rem" },
      { x: "0rem", y: "0rem", duration: 0.5, ease: "Bounce.easeOut" },
      ">"
    );
    tlMenu.fromTo(
      ".column-menu-icon",
      { x: "2rem", y: "-2rem" },
      { x: "0rem", y: "0rem", duration: 0.5, ease: "Bounce.easeOut" },
      "<"
    );
    tlMenu.fromTo(
      ".column-links",
      { x: "0rem", y: "-2rem" },
      { x: "0rem", y: "0rem", duration: 0.5, ease: "Bounce.easeOut" },
      "<"
    );
    tlMenu.fromTo(
      ".column-logo-2",
      { x: "-2rem", y: "2rem" },
      { x: "0rem", y: "0rem", duration: 0.5, ease: "Bounce.easeOut" },
      "<"
    );
    tlMenu.fromTo(
      ".column-strapline",
      { x: "2rem", y: "2rem" },
      { x: "0rem", y: "0rem", duration: 0.5, ease: "Bounce.easeOut" },
      "<"
    );
    tlMenu.fromTo(
      ".menu-animated-icon-wrapper",
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power4.inOut" },
      "<"
    );
    tlMenu.fromTo(
      ".menu-content-links-wrapper",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power4.inOut" },
      "<"
    );
    tlMenu.fromTo(
      ".header-columns, .placeholder-footer, .burger-menu-parent",
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power4.inOut" },
      "<"
    );

    tlMenu.fromTo(
      ".menu-animated-icon-wrapper",
      { opacity: 1 },
      { opacity: 0, duration: 0.4, ease: "Bounce.easeOut", delay: 0.4 },
      ">"
    );

    menuIcon.classList.remove("open");
  }
});

let menuBackIcon = document.querySelector(".menu-animated-icon-wrapper");
menuBackIcon.addEventListener("click", () => {
  menuIcon.click();
});

/**
 * Change Menu and Footer Color
 */

let mSections = [...document.querySelectorAll("[c-section]")];
let footer = document.querySelector(".placeholder-footer");
let nav = document.querySelector(".placeholder-nav-top");
let bgColor;
let newColor;
let prevColor = window.getComputedStyle(footer).color;
/*
mSections.map((section) => {
  ScrollTrigger.create({
    trigger: mSections,
    start: "top top",
    end: "bottom bottom",
    markers: true,
    onEnter: () => {
      //bgColor = section.getAttribute("c-section");
      //console.log(newColor);
      newColor = window.getComputedStyle(section).color;
      //console.log(bgColor);
    },
    onUpdate: (self) => {
      console.log(section, newColor);
      //console.log(self.progress);
      if (self.progress > 0.07) {
        gsap.to(footer, { color: newColor });
      }
      if (self.progress > 0.5) {
        gsap.to(nav, { color: newColor });
      }
    },
    onLeaveBack: () => {
      gsap.to([footer, nav], { color: prevColor });
    }
  });
});
*/

let mainM = document.querySelector("body");
const optionsM = {
  root: null,
  rootMargin: "-40% 0px 0% 0px",
  threshold: 0.1
};
let section;
let callbackM = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      section = entry.target;
      //console.log("m", section);
      newColor = window.getComputedStyle(section).color;
      gsap.to(footer, { color: newColor });
    } else {
      //console.log("m", section);
      //gsap.to([footer, nav], { color: prevColor });
    }
  });
};
let observerM = new IntersectionObserver(callbackM, optionsM);
document.querySelectorAll("[c-section]").forEach((section) => {
  observerM.observe(section);
});

const optionsN = {
  root: null,
  rootMargin: "0% 0px 0% 0px",
  threshold: 0.9
};
let callbackN = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let section = entry.target;
      //console.log(section);
      let newColor = window.getComputedStyle(section).color;
      if (entry.intersectionRatio > 0.98) {
        console.log(entry.target, entry.intersectionRatio);
        gsap.to(nav, { color: newColor });
      }
    } else {
      //console.log(section);
      gsap.to([nav], { color: prevColor });
    }
  });
};
let observerN = new IntersectionObserver(callbackN, optionsN);
document.querySelectorAll("[c-section]").forEach((section) => {
  observerN.observe(section);
});

/**
 * Logo Animation
 */

let logoLink = document.querySelector(".sr-logo-link");
let tlLogo = gsap.timeline({ paused: true });
tlLogo.to(".logo-s", { y: "-100%", duration: 0.3, ease: "expo.out" });
tlLogo.to(".logo-r", { y: "100%", duration: 0.3, ease: "expo.out" }, "<");
tlLogo.to(
  ".logo-s, .logo-r, .logo-divider",
  {
    opacity: 0,
    duration: 0.4,
    ease: "power3.out"
  },
  "<"
);
tlLogo.to(".sr-logo-text", { opacity: 1, duration: 0, ease: "power4.out" });
logoLink.addEventListener("mouseenter", () => {
  tlLogo.timeScale(1);
  tlLogo.play();
});
logoLink.addEventListener("mouseleave", () => {
  tlLogo.timeScale(2);
  tlLogo.reverse();
});
