var menClick = document.getElementById("menIcon");
var menList = document.getElementById("men");

var womenClick = document.getElementById("womenIcon");
var womenList = document.getElementById("women");

var kidsClick = document.getElementById("kidsIcon");
var kidsList = document.getElementById("kids");

var offer = document.getElementById("offer");
var banner = document.getElementById("banner");

var burgerOpen = document.getElementById("burgerOpen");
// var burgerClose = document.getElementById("burgerClose");
var burgerMenu = document.getElementById("burgerMenu");

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");
var img7 = document.getElementById("img7");
var img8 = document.getElementById("img8");
var img9 = document.getElementById("img9");
var img10 = document.getElementById("img10");
var img11 = document.getElementById("img11");
var img12 = document.getElementById("img12");
var img13 = document.getElementById("img13");
var img14 = document.getElementById("img14");
var img15 = document.getElementById("img15");
var img16 = document.getElementById("img16");

menClick.addEventListener("click", () => {
  menList.classList.toggle("show");
  womenList.classList.remove("show");
  kidsList.classList.remove("show");
});

womenClick.addEventListener("click", () => {
  womenList.classList.toggle("show");
  menList.classList.remove("show");
  kidsList.classList.remove("show");
});

kidsClick.addEventListener("click", () => {
  kidsList.classList.toggle("show");
  womenList.classList.remove("show");
  menList.classList.remove("show");
});


let text = [
  "LITERATURA ELECTRÓNICA",
  "VIDEOPOESÍA",
  "ENSAYO",
];
let i = 0;
function changeOffer() {
  offer.textContent = text[i];
  i++;
  if (i >= text.length) {
    i = 0;
  }
}
setInterval(changeOffer, 2000);

////////////////////////////// CAMBIAR IMAGEN DE BANNER///////////////////////
let bannerChg = [
  'url("./imagenes/imagen7.gif")',
  'url("./imagenes/imagen12.gif")',
  'url("./imagenes/imagen16.gif")',
];
let pic = 1;
function changePic() {
  banner.style.backgroundImage = bannerChg[pic];
  pic++;
  if (pic > bannerChg.length -1) {
    pic = 0;
  }
}
setInterval(changePic, 4000);

//////////////////////////////// BURGER MENU//////////////////////////////
  burgerOpen.addEventListener("click", function() {
    burgerMenu.classList.toggle("show");
  });
//////////////////////////////// CATALOGO//////////////////////////////

function changeImg1() {
  img1.src = "./imagenes/imagen0.gif";
}
function restoreImg1() {
  img1.src = "./imagenes/imagen1.gif";
}
function changeImg2() {
  img2.src = "./imagenes/imagen2.gif";
}
function restoreImg2() {
  img2.src = "./imagenes/imagen3.gif";
}
function changeImg3() {
  img3.src = "./imagenes/imagen4.gif";
}
function restoreImg3() {
  img3.src = "./imagenes/imagen5.gif";
}
function changeImg4() {
  img4.src = "./imagenes/imagen6.gif";
}
function restoreImg4() {
  img4.src = "./imagenes/imagen7.gif";
}
function changeImg5() {
  img5.src = "./imagenes/imagen8.gif";
}
function restoreImg5() {
  img5.src = "./imagenes/imagen9.gif";
}
function changeImg6() {
  img6.src = "./imagenes/imagen10.gif";
}
function restoreImg6() {
  img6.src = "./imagenes/imagen11.gif";
}
function changeImg7() {
  img7.src = "./imagenes/imagen12.gif";
}
function restoreImg7() {
  img7.src = "./imagenes/imagen13.gif";
}
function changeImg8() {
  img8.src = "./imagenes/imagen14.gif";
}
function restoreImg8() {
  img8.src = "./imagenes/imagen15.gif";
}
function changeImg9() {
  img9.src = "./imagenes/imagen16.gif";
}
function restoreImg9() {
  img9.src = "./imagenes/imagen15.gif";
}
function changeImg10() {
  img10.src = "./imagenes/imagen14.gif";
}
function restoreImg10() {
  img10.src = "./imagenes/imagen13.gif";
}
function changeImg11() {
  img11.src = "./imagenes/imagen12.gif";
}
function restoreImg11() {
  img11.src = "./imagenes/imagen11.gif";
}
function changeImg12() {
  img12.src = "./imagenes/imagen10.gif";
}
function restoreImg12() {
  img12.src = "./imagenes/imagen9.gif";
}
function changeImg13() {
  img13.src = "./imagenes/imagen8.gif";
}
function restoreImg13() {
  img13.src = "./imagenes/imagen7.gif";
}
function changeImg14() {
  img14.src = "./imagenes/imagen6";
}
function restoreImg14() {
  img14.src = "./imagenes/imagen5";
}
function changeImg15() {
  img15.src = "./imagenes/imagen4.gif";
}
function restoreImg15() {
  img15.src = "./imagenes/imagen3.gif";
}
function changeImg16() {
  img16.src = "./imagenes/imagen2.gif";
}
function restoreImg16() {
  img16.src = "./imagenes/imagen1.gif";
}