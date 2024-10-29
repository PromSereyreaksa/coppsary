let stars = document.getElementById("stars");
let skatebg = document.getElementById("skatebg");
let subject = document.getElementById("subject");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let cloud = document.getElementById("cloud");
let header = document.getElementById("header");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.bottom = value * 1.5 + "px";
  skatebg.style.top = value * 1.25 + "px";
  subject.style.top = value * 0.5 + "px";
  cloud.style.top = value * 0 + "px";
  text.style.marginRight = value * 4 + "px";
  text.style.marginTop = value * 1.5 + "px";
  btn.style.marginTop = value * 1.5 + "px";
  header.style.top = value * 0.5 + "px";
});
