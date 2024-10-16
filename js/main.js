// sidebar menu toggle function
let hamburIcon = document.getElementById('hamburIcon');
let asideMenu = document.getElementById("asideMenu");
let menuClicked = false;

hamburIcon.addEventListener("click", () => {
    menuClicked = !menuClicked;
    asideMenu.style.display = menuClicked ? "flex" : "none";
});
document.addEventListener("click", (event) => {
    if (!hamburIcon.contains(event.target) && !asideMenu.contains(event.target)) {
        asideMenu.style.display = "none";
        menuClicked = false;
    }
});