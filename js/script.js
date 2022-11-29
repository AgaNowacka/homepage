console.log("Hello!");

let przycisk = document.querySelector(".przycisk");
let hiddenHeader = document.querySelector(".hiddenHeader");
let showHide = document.querySelector(".showHide");

przycisk.addEventListener("click", () => {
    hiddenHeader.classList.toggle("hidden");
    showHide.innerText = hiddenHeader.classList.contains("hidden") ? "Pokaż" : "Ukryj";  
});

let changeBackgroudButton = document.querySelector(".changeBackground");
let body = document.querySelector(".body")

changeBackgroudButton.addEventListener("click", () => {
    body.classList.toggle("lightBackground");
});


