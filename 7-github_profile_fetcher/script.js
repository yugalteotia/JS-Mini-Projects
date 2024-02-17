const imgInsert = document.querySelector("#profileImg");
const dataInsert = document.querySelector("#dataString");
const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const usrInp = document.querySelector("#usrInp");
const button = document.querySelector("#button");

const requestUrl = "https://api.github.com/users/";

function hitApi() {
  const urlToHit = requestUrl + usrInp.value;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", urlToHit);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      // xhr.status === 200: XMLHttpRequest also has a status property that represents the HTTP status code of the response. The value 200 corresponds to the "OK" status code, which means the request was successful.
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        div2.style.display = "none";
        div1.style.display = "flex";
        imgInsert.src = data.avatar_url;
        dataInsert.textContent = `Followers: ${data.followers} | Following: ${data.following} | Location: ${data.location} | Public Repositories: ${data.public_repos}`;
      } else {
        div1.style.display = "none";
        div2.style.display = "flex";
        div2.textContent =
          "Please Enter a valid username. Press F5 or Ctrl+R to refresh the page";
      }
    }
  };
}

button.addEventListener("click", function (e) {
  e.preventDefault();
  hitApi();
});
