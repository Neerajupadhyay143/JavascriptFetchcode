let dayNight = document.querySelector(".dayNight");
let Banner = document.querySelector(".banner");
let content = document.querySelector(".content");
let buttonDiv = document.querySelector(".button-div");
dayNight.addEventListener("click", () => {
    Banner.classList.toggle("night"),
        content.classList.toggle("night"),
        buttonDiv.classList.toggle("dark-button");
})

var typed = new Typed('#text', {
    strings: ['Swiftsnipp', 'Developer'],
    loop: true,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000
});
