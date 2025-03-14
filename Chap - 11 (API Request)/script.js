const xhr = new XMLHttpRequest();
const URL = "https://api.github.com/users/hiteshchoudhary";
xhr.open("GET", URL);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (this.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(data);
    console.log(`Hitesh Choudhary have ${data.followers}`);
  }
};
xhr.send();
