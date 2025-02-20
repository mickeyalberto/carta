document.addEventListener("DOMContentLoaded", function () {
    let letter = document.querySelector(".letter");
    let openButton = document.querySelector("#openBtn");
    let closeButton = document.querySelector("#closeBtn");

    // Inicia oculta
    letter.style.display = "none";

    openButton.addEventListener("click", function () {
        letter.style.display = "block";
        letter.style.transform = "translateY(-50px)";
    });

    closeButton.addEventListener("click", function () {
        letter.style.display = "none";
    });
});
