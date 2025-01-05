//PROJECT 1 ADD OR REMOVE FRIEND FEATURE
let addFriendButton = document.querySelector("#add");
let relation = document.querySelector("h5");
let flag = 0;

addFriendButton.addEventListener("click", () => {
  if (flag == 0) {
    relation.innerText = "Friend";
    relation.style.color = "green";
    addFriendButton.innerHTML = "Remove Friend";
    addFriendButton.style.color = "black";
    addFriendButton.style.backgroundColor = "#dadada";
    flag++;
  } else {
    relation.innerText = "Stranger";
    relation.style.color = "red";
    addFriendButton.innerHTML = "Add Friend";
    addFriendButton.style.color = "black";
    addFriendButton.style.backgroundColor = "skyblue";
    flag--;
  }
});

//PROJECT 2 INSTAGRAM LOVE FEATURE
let post = document.querySelector("#post");
let heart = document.querySelector("i");
post.addEventListener("dblclick", () => {
  heart.style.transform = "translate(-50%, -50%) scale(1)";
  heart.style.opacity = 0.8;
  setTimeout(() => {
    heart.style.transform = "translate(-50%, -50%) scale(0)";
  }, 2000);
  setTimeout(() => {
    heart.style.opacity = 0;
  }, 1000);
});

//PROJECT 3 CUSTOM CURSOR
let page = document.querySelector("#project3");
let cursor = document.querySelector("#cursor");

page.addEventListener("mousemove", (dets) => {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});

//PROJECT 4 MULTIPLE CURSOR IMAGE EFFECT
let elem = document.querySelectorAll(".elem");

elem.forEach((value) => {
  value.addEventListener("mouseenter", () => {
    value.childNodes[3].style.opacity = 1;
  });

  value.addEventListener("mousemove", (dets) => {
    value.childNodes[3].style.left = dets.x + "px";
    // value.childNodes[3].style.top = dets.y+"px";
  });

  value.addEventListener("mouseleave", () => {
    value.childNodes[3].style.opacity = 0;
  });
});

//PROJECT 5 INSTAGRAM STORY FEATURE
let array = [
  {
    dp: "https://plus.unsplash.com/premium_photo-1710378175239-9c437e2a6422?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1583766395294-9f6b356cbfaf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1595868561602-d94443aa6680?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1637097770131-0cf1efd01bcb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1673792326865-37077bd1ed59?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1674069719694-519c875aa2d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1534162802244-d6f69e9048da?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1546842931-886c185b4c8c?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1523224042829-4731dd15a3bb?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1440749395129-76b2ae3df520?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let clutter = "";
array.forEach((elem, i) => {
  clutter += ` <div class="story"><img src="${elem.dp}" alt="" id="${i}"></div>`;
});

let storiesIcon = document.querySelector("#stories");
let viewStory = document.querySelector("#full-screen");
storiesIcon.innerHTML = clutter;

storiesIcon.addEventListener("click", (dets) => {
  viewStory.style.display = "block";
  viewStory.style.backgroundImage = `url(${array[dets.target.id].story})`;

  setTimeout(()=>{
    viewStory.style.display = "none";
  },3000)
});
