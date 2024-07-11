document.getElementById("back-to-top-arrow").addEventListener("click", () => {
  backToTop();
});

document.getElementById("back-to-top-arrow2").addEventListener("click", () => {
  backToTop();
});

function backToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

let $btnInteresa = document.querySelector(".interesa");
let $btnInteresa2 = document.querySelector(".interesa2");
let $btnInteresa3 = document.querySelector(".interesa3");
let $btnInteresa4 = document.querySelector(".interesa4");

$btnInteresa.addEventListener("click", () => {
  console.log("btnMeInteresa");
  let value = $btnInteresa.getAttribute("data-paquete");
  console.log(value);
  selectOption(value);
});

$btnInteresa2.addEventListener("click", () => {
  console.log("btnMeInteresa2");
  let value = $btnInteresa2.getAttribute("data-paquete");
  console.log(value);
  selectOption(value);
});

$btnInteresa3.addEventListener("click", () => {
  console.log("btnMeInteresa2");
  let value = $btnInteresa3.getAttribute("data-paquete");
  console.log(value);
  selectOption(value);
});

$btnInteresa4.addEventListener("click", () => {
  console.log("btnMeInteresa2");
  let value = $btnInteresa4.getAttribute("data-paquete");
  console.log(value);
  selectOption(value);
});

// Cambiar valor del formulario al clickear el botón
function selectOption(value) {
  console.log(value, "valor recibido");
  const selectElement = document.getElementById("interest");
  selectElement.value = value;
}

//limitar option size

var e = document.querySelectorAll("option");
e.forEach((x) => {
  if (x.textContent.length > 20)
    x.textContent = x.textContent.substring(0, 20) + "...";
});
