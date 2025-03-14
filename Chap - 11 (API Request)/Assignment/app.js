const body = document.querySelector("body");
const xhr = new XMLHttpRequest();
const URL = "https://api.github.com/users/hiteshchoudhary";
xhr.open("GET", URL);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (this.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(data);
    let container = document.createElement("div");
    container.style.maxWidth = "280px";
    container.style.minHeight = "400px";
    container.style.padding = "8px 12px";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.borderRadius = "8px";
    container.style.boxShadow = "0 4px 12px rgba(100, 100, 100, 0.6)";
    container.innerHTML = `
     <img src="https://avatars.githubusercontent.com/u/11613311?v=4" alt="Sir Hitesh Choudhary's Image" style="width: 100px; height: 100px; border-radius: 50%;">
     <h1>${data.name}</h1>
     <h3>${data.bio}</h3>
     <div style= "display:flex; justify-content:center;align-items:center; gap:40px">
     <h5>followers : ${data.followers}</h5>
     <h5>following : ${data.following}</h5>
     </div>
    `;
    body.appendChild(container);
  }
};
xhr.send();
