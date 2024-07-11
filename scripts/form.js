let $form = document.querySelector("#contactForm");

document.addEventListener("submit", (e) => {
  if (e.target === $form) {
    e.preventDefault();
    openTab(e, "thanks");
  }
});
