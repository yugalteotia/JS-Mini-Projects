const desc = document.querySelector("#description");
const inject = document.querySelector("#injection");

window.addEventListener("keydown", (e) => {
  desc.setAttribute("style", "display: none");
  inject.setAttribute("style", "font-size: 50px");
  inject.textContent = `You pressed "${e.key}" key having ASCII value of "${e.keyCode}" and name of the key is "${e.code}"`;
});
