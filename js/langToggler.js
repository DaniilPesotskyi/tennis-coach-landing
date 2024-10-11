const langButton = document.querySelector(".lang-btn");
const langModal = document.querySelector(".lang-btn-modal");

const isLangModalOpen = false;

const toggleLangModal = () => {
  console.log('toogle');
};

langButton.addEventListener("click", toggleLangModal);
