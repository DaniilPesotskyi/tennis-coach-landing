const langButton = document.querySelector(".lang-btn");
const langModal = document.querySelector(".lang-btn-modal");
const langIcon = document.querySelector('.lang-btn-icon')

const isLangModalOpen = false;

const toggleLangModal = () => {
    langModal.classList.toggle('active')
    langIcon.classList.toggle('open')
  console.log('toogle');
};

langButton.addEventListener("click", toggleLangModal);
