import "./styles.css";

if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
  appendCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
    appendCode();
  });
}

function initializeCode() {
  const myButton = document.getElementById("my-button");
  const newText = document.getElementById("newText");
  myButton.addEventListener("click", function () {
    console.log("Hello world");
    newText.innerHTML = "My notebook";
  });
}

function appendCode() {
  const addData = document.getElementById("add-data");
  const list = document.getElementById("my-list");
  addData.addEventListener("click", function () {
    const newItem = document.createElement("li");
    newItem.textContent = randomWord();
    list.appendChild(newItem);
  });
}

const words = [
  "apple",
  "banana",
  "cat",
  "dog",
  "elephant",
  "flower",
  "guitar",
  "hat",
  "igloo",
  "jellyfish",
  "kangaroo",
  "lion",
  "monkey",
  "notebook",
  "orange",
  "pineapple",
  "zebra"
];

function randomWord() {
  const randomNumber = Math.floor(Math.random() * words.length);

  document.getElementById("display").innerHTML = words[randomNumber];
  return words[randomNumber];
}
