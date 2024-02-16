const myForm = document.querySelector("#myForm");
const main = document.querySelector("#main");

myForm.addEventListener("submit", (e) => {
  if (document.getElementById("bmiDisplay"))
    document.getElementById("bmiDisplay").remove();

  e.preventDefault();

  const newDiv = document.createElement("div");
  setDivAttributes();

  const textNode = document.createTextNode(`Your BMI is ${calcBMI()}`);

  newDiv.appendChild(textNode);

  main.insertBefore(newDiv, main.childNodes[5]);

  function setDivAttributes() {
    newDiv.setAttribute("id", "bmiDisplay");
    newDiv.style.margin = "30px";
    newDiv.style.padding = "20px";
    newDiv.style.fontSize = "30px";
    newDiv.style.backgroundColor = "lime";
    newDiv.style.color = "black";
    newDiv.style.borderRadius = "20px";
  }
});

function calcBMI() {
  return (
    parseInt(document.getElementById("weight").value) /
    Math.pow(parseInt(document.getElementById("height").value), 2)
  );
}
