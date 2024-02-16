const timeContainer = document.querySelector("#time-container");

timeContainer.innerHTML = new Date().toLocaleTimeString();

setInterval(() => {
  //   console.log(pastTime);
  timeContainer.innerHTML = new Date().toLocaleTimeString();
}, 1000);
