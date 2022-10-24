// START Переключение языка на текущей странице //////////////////////////////////////////////////////////////////////////////////////////////////

var elementLangEN = document.getElementById('lg-lgen');
elementLangEN.onclick = q

function q() {
    let langRES = "en"
    if (document.location.search === "") { location.href = location.href + "?lang=" + langRES }
    if (document.location.search === "?") { location.href = location.href + "&lang=" + langRES }
    if (document.location.search.includes("lang=ru")) { location.href = location.href.replace(/lang=ru/gi, 'lang=en'); }
    if (document.location.search.includes("lang=ua")) { location.href = location.href.replace(/lang=ua/gi, 'lang=en'); } else { return }
};

var elementLangUA = document.getElementById('lg-lgua');
elementLangUA.onclick = qq

function qq() {
    let langRES = "ua"
    if (document.location.search === "") { location.href = location.href + "?lang=" + langRES }
    if (document.location.search === "?") { location.href = location.href + "&lang=" + langRES }
    if (document.location.search.includes("lang=ru")) { location.href = location.href.replace(/lang=ru/gi, 'lang=ua'); }
    if (document.location.search.includes("lang=en")) { location.href = location.href.replace(/lang=en/gi, 'lang=ua'); } else { return }
};

var elementLangRU = document.getElementById('lg-lgru');
elementLangRU.onclick = qqq

function qqq() {
    let langRES = "ru"
    if (document.location.search === "") { location.href = location.href + "?lang=" + langRES }
    if (document.location.search === "?") { location.href = location.href + "&lang=" + langRES }
    if (document.location.search.includes("lang=ua")) { location.href = location.href.replace(/lang=ua/gi, 'lang=ru'); }
    if (document.location.search.includes("lang=en")) { location.href = location.href.replace(/lang=en/gi, 'lang=ru'); } else { return }
};

// ////// END //////////////////  Переключение языка на текущей странице  ///////////////////////////


// ///// START /////////////////////////////  переключение флагов по клику иконки ////////////////////////////////////

if (document.location.search.includes("lang=ru")) {
    var elementRU = document.getElementById("lg-lgru");
    elementRU.className += " flag-active";
};
if (document.location.search.includes("lang=ua")) {
    var elementUA = document.getElementById("lg-lgua");
    elementUA.className += " flag-active";
};
if (document.location.search.includes("lang=en")) {
    var elementEN = document.getElementById("lg-lgen");
    elementEN.className += " flag-active";
    // elementEN.classList.add(" flag-active");
};
// ////// END //////////////////////////// переключение флагов по клику иконки /////////////////////////////////////////


// ////// START //////////////// передача выбранного языка по ссылке на следующюю страницу //////////////////////

let lang = "";
if (document.location.search.includes("lang=ua")) { lang = "lang=ua" };
if (document.location.search.includes("lang=ru")) { lang = "lang=ru" };
if (document.location.search.includes("lang=en")) { lang = "lang=en" };
let langRes = lang;


//собираем все ссылки в массив
var links = document.getElementsByTagName("a");
//для каждой ссылки делаем
for (var i = 0; i < links.length; i++) {
    // если href="#"
    if (links[i].href.includes("#")) {
        // то отключаем сылку 
        links[i].href = "javascript:void(0)";
    }
    //если в ссылке есть 'index' и есть "?"
    if (links[i].href.includes("index") && links[i].href.includes("?")) {
        //дописываем в конец ссылки 
        links[i].href += "&" + langRes;
    }
    //если в ссылке есть 'index' и нет "?"
    if (links[i].href.includes("index") && !links[i].href.includes("?")) {
        //дописываем в конец ссылки 
        links[i].href += "?" + langRes;
    }
};
// ///// END //////////////  передача выбранного языка по ссылке на следующюю страницу ///////////////////


// ///// START /////////////////   TITLE DISCRIPTION  KEYWOR со своим переводчиком  ///////////////////////

import { arryHEAD } from './lang-DATA.js';






// let levelURL = (new URL(document.location)).searchParams.get("level");
// let itemURL = (new URL(document.location)).searchParams.get("item");
// let brandURL = (new URL(document.location)).searchParams.get("brand");
// let pageURL = (new URL(document.location)).searchParams.get("page");
// let codeURL = (new URL(document.location)).searchParams.get("code");
// let langURL = (new URL(document.location)).searchParams.get("lang");

// let levelHEAD = "";
// let itemHEAD = "";
// let brandHEAD = "";
// let pageHEAD = "";
// let codeHEAD = "";
// let langHEAD = "";

// if (levelURL === null || levelURL === "") { levelHEAD = "" } else { levelHEAD = levelURL };
// if (itemURL === null || itemURL === "") { itemHEAD = "" } else { itemHEAD = "_" + itemURL };
// if (brandURL === null || brandURL === "") { brandHEAD = "" } else { brandHEAD = "_" + brandURL };
// if (pageURL === null || pageURL === "") { pageHEAD = "" } else { pageHEAD = "_" + pageURL };
// if (codeURL === null || codeURL === "") { codeHEAD = "" } else { codeHEAD = "_" + codeURL };
// if (langURL === null || langURL === "") { langHEAD = "" } else { langHEAD = "_" + langURL };

// let keyHEAD = levelHEAD + itemHEAD + brandHEAD + pageHEAD + codeHEAD + langHEAD;


// 

let aimAurl = (new URL(document.location)).searchParams.get("a");
let aimBurl = (new URL(document.location)).searchParams.get("b");
let aimCurl = (new URL(document.location)).searchParams.get("c");
let aimDurl = (new URL(document.location)).searchParams.get("d");
let aimEurl = (new URL(document.location)).searchParams.get("e");
let aimFurl = (new URL(document.location)).searchParams.get("f");
let aimLANGurl = (new URL(document.location)).searchParams.get("lang");

let aimAhead = "";
let aimBhead = "";
let aimChead = "";
let aimDhead = "";
let aimEhead = "";
let aimFhead = "";
let aimLANGhead = "";

if (aimAurl === null || aimAurl === "") { aimAhead = "" } else { aimAhead = aimAurl };
if (aimBurl === null || aimBurl === "") { aimBhead = "" } else { aimBhead = "_" + aimBurl };
if (aimCurl === null || aimCurl === "") { aimChead = "" } else { aimChead = "_" + aimCurl };
if (aimDurl === null || aimDurl === "") { aimDhead = "" } else { aimDhead = "_" + aimDurl };
if (aimEurl === null || aimEurl === "") { aimEhead = "" } else { aimEhead = "_" + aimEurl };
if (aimFurl === null || aimFurl === "") { aimFhead = "" } else { aimFhead = "_" + aimFurl };
if (aimLANGurl === null || aimLANGurl === "") { aimLANGhead = "" } else { aimLANGhead = "_" + aimLANGurl };

let keyHEAD = aimAhead + aimBhead + aimChead + aimDhead + aimEhead + aimFhead + aimLANGhead;




let titleHEAD = "";
let descriHEAD = "";
let keyworHEAD = "";

function getValue(array, search) {
    var i = array.length;
    while (i--) {
        if (array[i].key === search) {
            titleHEAD = array[i].title;
            descriHEAD = array[i].descri;
            keyworHEAD = array[i].keywor;
            return

        }
    }
};
getValue(arryHEAD, keyHEAD);

console.log(keyHEAD);
console.log(titleHEAD);
console.log(descriHEAD);
console.log(keyworHEAD);

var code = `<title>${titleHEAD}</title>` +
    // var code = `<title>${titleHEAD + itemResultHead}</title>` +
    `<meta name="description" content="${descriHEAD}" />` +
    `<meta name="keywords" content="${keyworHEAD}" />`;

let temp = document.createElement('div');
temp.innerHTML = code;
let head = document.head;
while (temp.firstChild) {
    head.appendChild(temp.firstChild);
};

// ///// END ////////////////////////////   TITLE DISCRIPTION  KEYWOR со своим переводчиком //////////////////////////////////


// /////  START ////////////////////////////////////  ПРЕВОДЧИК  //////////////////////////////////////////////   

import { langArr } from './lang-DATA.js';

// for (let key in langArr) { document.querySelector('.lng-' + key).innerHTML = langArr[key][langURL] }

for (let key in langArr) {
    const demoClasses = document.querySelectorAll('.lng-' + key)
        // console.log(demoClasses)
    demoClasses.forEach(element => {
        // element.textContent += langArr[key][langURL]
        element.textContent += langArr[key][(new URL(document.location)).searchParams.get("lang")]
    });
};

// /////  END  ////////////////////////////////////  ПРЕВОДЧИК  ///////////////////////////////////////////////