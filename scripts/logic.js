document.getElementById("back-to-top-arrow").addEventListener("click", () => {
  backToTop();
});

document.getElementById("back-to-top-arrow2").addEventListener("click", () => {
  backToTop();
});

function backToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
