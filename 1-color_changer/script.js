const buttons = document.querySelectorAll(".button");
const defaultBgColor = getComputedStyle(document.body).getPropertyValue(
  "background-color"
);

buttons.forEach((button) =>
  button.addEventListener("mouseover", (e) => {
    if (e.target.id === "reset") {
      document.body.style.backgroundColor = defaultBgColor;
    }
    document.body.style.backgroundColor = e.target.id;
  })
);
