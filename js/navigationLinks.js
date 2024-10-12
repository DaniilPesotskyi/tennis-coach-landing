document.querySelectorAll(".js-nav-item").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").split("#")[1];
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: "smooth",
      });
    }
  });
});

const sections = document.querySelectorAll("section");

function setActiveLink(id) {
    document.querySelectorAll(".js-nav-item").forEach((link) => {
      link.classList.remove("active");
      const linkHref = link.getAttribute("href").split("#")[1]; 
      if (linkHref === id) {
        link.classList.add("active");
      }
    });
  }
  

function handleScroll() {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top;
    const sectionBottom = rect.bottom;

    if (
      sectionTop <= window.innerHeight / 2 &&
      sectionBottom >= window.innerHeight / 2
    ) {
      setActiveLink(section.id);
    }
  });
}

window.addEventListener("scroll", handleScroll);
