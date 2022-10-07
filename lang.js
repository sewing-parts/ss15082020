// var code = '<title>oooooo</title>' +
//     '<meta name="description" content="tttttttt" />' +
//     '<meta name="keywords" content="dddddddddd" />';
// var temp = document.createElement('div');
// temp.innerHTML = code;
// var head = document.head;
// while (temp.firstChild) {
//     head.appendChild(temp.firstChild);
// }

// function updateURL() {
//     if (history.pushState) {
//         var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
//         var newUrl = baseUrl + '?lang=ru';
//         history.pushState(null, null, newUrl);
//     } else {
//         console.warn('History API не поддерживается');
//     }
// }
// updateURL()

























// let langRES;
// function q() {
//     langRES = "en"
//     if (document.location.search === "") { location.href = location.href + "?lang=" + langRES; }
//     if (document.location.search == "?") { location.href = location.href + "&lang=" + langRES; }
//     if (document.location.search.includes("lang=ru")) { location.href = location.href.replace(/lang=ru/gi, 'lang=en'); }
//     if (document.location.search.includes("lang=ua")) { location.href = location.href.replace(/lang=ua/gi, 'lang=en'); } else { return }

// };

// function qq() {
//     langRES = "ua"
//     if (document.location.search === "") { location.href = location.href + "?lang=" + langRES; }
//     if (document.location.search == "?") { location.href = location.href + "&lang=" + langRES; }
//     if (document.location.search.includes("lang=ru")) { location.href = location.href.replace(/lang=ru/gi, 'lang=ua'); }
//     if (document.location.search.includes("lang=en")) { location.href = location.href.replace(/lang=en/gi, 'lang=ua'); } else { return }
// };

// function qqq() {
//     langRES = "ru"
//     if (document.location.search === "") { location.href = location.href + "?lang=" + langRES; }
//     if (document.location.search == "?") { location.href = location.href + "&lang=" + langRES; }
//     if (document.location.search.includes("lang=ua")) { location.href = location.href.replace(/lang=ua/gi, 'lang=ru'); }
//     if (document.location.search.includes("lang=en")) { location.href = location.href.replace(/lang=en/gi, 'lang=ru'); } else { return }
// };




// START Переключение языка на текущей странице //////////////////////////////////////////////////////////////////////////////////////////////////

var elementLangEN = document.getElementById('lg-lgen');
elementLangEN.onclick = q

function q() {
    let langRES = "en"
    if (document.location.search === "") { location.href = location.href + "?lang=" + langRES }
    if (document.location.search == "?") { location.href = location.href + "&lang=" + langRES }
    if (document.location.search.includes("lang=ru")) { location.href = location.href.replace(/lang=ru/gi, 'lang=en'); }
    if (document.location.search.includes("lang=ua")) { location.href = location.href.replace(/lang=ua/gi, 'lang=en'); } else { return }
};

var elementLangUA = document.getElementById('lg-lgua');
elementLangUA.onclick = qq

function qq() {
    let langRES = "ua"
    if (document.location.search === "") { location.href = location.href + "?lang=" + langRES }
    if (document.location.search == "?") { location.href = location.href + "&lang=" + langRES }
    if (document.location.search.includes("lang=ru")) { location.href = location.href.replace(/lang=ru/gi, 'lang=ua'); }
    if (document.location.search.includes("lang=en")) { location.href = location.href.replace(/lang=en/gi, 'lang=ua'); } else { return }
};

var elementLangRU = document.getElementById('lg-lgru');
elementLangRU.onclick = qqq

function qqq() {
    let langRES = "ru"
    if (document.location.search === "") { location.href = location.href + "?lang=" + langRES }
    if (document.location.search == "?") { location.href = location.href + "&lang=" + langRES }
    if (document.location.search.includes("lang=ua")) { location.href = location.href.replace(/lang=ua/gi, 'lang=ru'); }
    if (document.location.search.includes("lang=en")) { location.href = location.href.replace(/lang=en/gi, 'lang=ru'); } else { return }
};

// END Переключение языка на текущей странице //////////////////////////////////////////////////////////////////////////////////////////////////


// START переключение флагов по клику ///////////////////////////////////////////////////////
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
// END переключение флагов по клику ///////////////////////////////////////////////////////



// START передача выбранного языка по ссылке на следующюю страницу ///////////////////////////////////////////////////////
let lang = "";
if (document.location.search.includes("lang=ua")) { lang = "lang=ua" };
if (document.location.search.includes("lang=ru")) { lang = "lang=ru" };
if (document.location.search.includes("lang=en")) { lang = "lang=en" };
let langRes = lang;


//собираем все ссылки в массив
var links = document.getElementsByTagName("a");
//для каждой ссылки делаем
for (var i = 0; i < links.length; i++) {
    //если в ссылке есть 'index'
    if (links[i].href.includes("index") && links[i].href.includes("?")) {
        //дописываем в конец ссылки  
        links[i].href += "&" + langRes;
    }
    if (links[i].href.includes("index") && !links[i].href.includes("?")) {
        //дописываем в конец ссылки 
        links[i].href += "?" + langRes;
    }
};
// END передача выбранного языка по ссылке на следующюю страницу ///////////////////////////////////////////////////////





// function getValue(array, value) {
//     var obj = array.filter(function(arr, i) {
//         return arr.key === value ? arr.value : '';
//     });
//     return obj;
// }


// ///// START ///////////////////////////   TITLE DISCRIPTION  KEYWOR  ////////////////////////////////

import { arryHEAD } from './lang-DATA.js';

let titleHEAD = "";
let descriHEAD = "";
let keyworHEAD = "";

// let levelResultHead = (new URL(document.location)).searchParams.get("level");
// let itemResultHead = (new URL(document.location)).searchParams.get("item");
// let brandResultHead = (new URL(document.location)).searchParams.get("brand");
// let pageResultHead = (new URL(document.location)).searchParams.get("page");
// let codeResultHead = (new URL(document.location)).searchParams.get("code");
// let langResultHead = (new URL(document.location)).searchParams.get("lang");


// if (levelResultHead === null) { levelResultHead = "" } else { levelResultHead = levelResultHead };
// if (itemResultHead === null) { itemResultHead = "" } else { itemResultHead = "_" + itemResultHead };
// if (brandResultHead === null) { brandResultHead = "" } else { brandResultHead = "_" + brandResultHead };
// if (pageResultHead === null) { pageResultHead = "" } else { pageResultHead = "_" + pageResultHead };
// if (codeResultHead === null) { codeResultHead = "" } else { codeResultHead = "_" + codeResultHead };
// if (langResultHead === null) { langResultHead = "" } else { langResultHead = "_" + langResultHead };


// let keyHEAD = levelResultHead + itemResultHead + brandResultHead + pageResultHead + codeResultHead + langResultHead;


let levelURL = (new URL(document.location)).searchParams.get("level");
let itemURL = (new URL(document.location)).searchParams.get("item");
let brandURL = (new URL(document.location)).searchParams.get("brand");
let pageURL = (new URL(document.location)).searchParams.get("page");
let codeURL = (new URL(document.location)).searchParams.get("code");
let langURL = (new URL(document.location)).searchParams.get("lang");


if (levelURL === null) { levelURL = "" } else { levelURL = levelURL };
if (itemURL === null) { itemURL = "" } else { itemURL = "_" + itemURL };
if (brandURL === null) { brandURL = "" } else { brandURL = "_" + brandURL };
if (pageURL === null) { pageURL = "" } else { pageURL = "_" + pageURL };
if (codeURL === null) { codeURL = "" } else { codeURL = "_" + codeURL };
if (langURL === null) { langURL = "" } else { langURL = "_" + langURL };


let keyHEAD = levelURL + itemURL + brandURL + pageURL + codeURL + langURL;

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

console.log("keyHEAD", keyHEAD);

getValue(arryHEAD, keyHEAD);

console.log(titleHEAD);
console.log(descriHEAD);
console.log(keyworHEAD);

var code = `<title>${titleHEAD}</title>` +
    // var code = `<title>${titleHEAD + itemResultHead}</title>` +
    `<meta name="description" content="${descriHEAD}" />` +
    `<meta name="keywords" content="${keyworHEAD}" />`;

var temp = document.createElement('div');
temp.innerHTML = code;
var head = document.head;
while (temp.firstChild) {
    head.appendChild(temp.firstChild);
};

// ///// END ////////////////////////////   TITLE DISCRIPTION  KEYWOR  //////////////////////////////////



//  START ////////////////////////////////////  ПРЕВОДЧИК  //////////////////////////////////////////////   

import { langArr } from './lang-DATA.js';

// for (let key in langArr) { document.querySelector('.lng-' + key).innerHTML = langArr[key][langURL] }

let params = (new URL(document.location)).searchParams;
let langUrl = params.get("lang");

for (let key in langArr) {
    const demoClasses = document.querySelectorAll('.lng-' + key)
    demoClasses.forEach(element => {
        element.textContent = langArr[key][langUrl]
    });
};


//  END  ////////////////////////////////////  ПРЕВОДЧИК  ///////////////////////////////////////////////