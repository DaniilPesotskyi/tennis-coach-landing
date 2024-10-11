// header
const header = document.getElementById("header");

const handleScroll = () => {
  const scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > 100) {
    header.style.boxShadow = "0px 0px 22px -22px rgba(0,0,0,0.75)";
    header.style.padding = "8px 0";
  } else {
    header.style.boxShadow = "none";
    header.style.padding = "";
  }
};

window.addEventListener("scroll", handleScroll);

// hero
const heroRefs = {};

// suitability
const suitabilityRefs = {};

// coach
const coachRefs = {};
