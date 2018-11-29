var navMobBtn = document.querySelector(".nav-mob");
var backgroundMain = document.getElementById("opacity-main");
var mobSideMenu = document.querySelector(".mob-side-menu");
var mobMenuHiddenBtn = document.querySelector(".mob-menu-close");
var sideMenuLiBtn = document.getElementById("sideMenuLi");
var insideMenu = document.querySelector(".inside-menu");
var startPage = document.querySelector("body"); //body

navMobBtn.addEventListener("click", function () {
    navMob();
});

backgroundMain.addEventListener("click", function () {
    mobMenuHidden();
});

mobMenuHiddenBtn.addEventListener("click", function () {
    mobMenuHidden();
});

sideMenuLiBtn.addEventListener("click", function () {
    sideMenuLi();
});

function navMob() {
    backgroundMain.classList.add("opacity-main");
    mobSideMenu.style.right = 0;
    startPage.style = "overflow: hidden"
}

function mobMenuHidden() {
    backgroundMain.classList.remove("opacity-main");
    mobSideMenu.style.right = -340 + "px";
    insideMenu.style.height = 0;
    startPage.style = "overflow: auto"
}

function sideMenuLi() {
    if (insideMenu.style.height === "0px") {
        insideMenu.style.height = 367 + "px";
    }else {
        insideMenu.style.height = 0;
    };
}


