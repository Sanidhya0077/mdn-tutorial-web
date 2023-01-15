// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
// document.querySelector("html").addEventListener("click", function () {
//   alert("Ouch! Stop poking me!");
// });
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (
    mySrc ===
    "https://icons.iconarchive.com/icons/carlosjj/mozilla/256/Firefox-icon.png"
  ) {
    myImage.setAttribute(
      "src",
      "https://images-platform.99static.com//ZbbB2Z2Flhy_Nq-N-YR1ZN2ZBpA=/0x0:960x960/fit-in/500x500/99designs-contests-attachments/137/137629/attachment_137629091"
    );
  } else {
    myImage.setAttribute(
      "src",
      "https://icons.iconarchive.com/icons/carlosjj/mozilla/256/Firefox-icon.png"
    );
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
