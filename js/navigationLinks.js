// scroll to
document.querySelectorAll(".js-nav-item").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");

    gsap.to(window, {
      scrollTo: {
        y: targetId,
        offsetY: 50,
      },
      duration: 1,
    });
  });
});

// active navigation item
gsap.utils.toArray("section").forEach((section) => {
  gsap.fromTo(
    section,
    {},
    {
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveLink(section.id),
        onEnterBack: () => setActiveLink(section.id),
      },
    }
  );
});

function setActiveLink(id) {
  document.querySelectorAll(".js-nav-item").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${id}`) {
      link.classList.add("active");
    }
  });
}
