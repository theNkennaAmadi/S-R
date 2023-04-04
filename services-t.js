let nextIcon = document.querySelector(".services-icon");
let serviceLinks = [...document.querySelectorAll(".service-modal-link")];
nextIcon.addEventListener("click", () => {
  /*
  let mItem1 = document.querySelector(".service-modal-link.black-p");
  let mItem2 = document.querySelector(".service-modal-link.pink-b");
  if (mItem1) {
    let index = serviceLinks.indexOf(mItem1);
    if (index < serviceLinks.length - 1) {
      mItem1.nextElementSibling.click();
    } else {
      serviceLinks[0].click();
    }
  }
  if (mItem2) {
    let index = serviceLinks.indexOf(mItem2);
    if (index < serviceLinks.length - 1) {
      mItem2.nextElementSibling.click();
    } else {
      serviceLinks[0].click();
    }
  }
  */
  let selected = document.querySelector(".service-modal-link.w--current");
  let index = serviceLinks.indexOf(selected);
  if (index < serviceLinks.length - 1) {
    selected.nextElementSibling.click();
  } else {
    serviceLinks[0].click();
  }
});
