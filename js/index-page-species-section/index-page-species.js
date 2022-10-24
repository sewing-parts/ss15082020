const idcrumbs = '#crumbs';
const idspecies = '#species';
const iddiscription = '#discription'


import { brandsPartsList } from "./index-page-species-DATA.js";


//////////////////////////////

let params = (new URL(document.location)).searchParams;
// const paramsUrl = [{ item: params.get("item").split('-').join(' '), brand: params.get("brand").split('-').join(' '), lang: params.get("lang") }];
const paramsUrl = [{

    aimA: params.get("a"),
    aimB: params.get("b"),
    aimC: params.get("c"),
    aimD: params.get("d"),
    aimE: params.get("e"),
    aimF: params.get("f"),
    aimLang: params.get("lang"),
}];




//////////////////////////////////////////////

let speciesCategory = [];

switch (params.get("c")) {
    case 'parts-list-pdf':
        speciesCategory = brandsPartsList;
        break;
};

//////////////////////////////////////////////
// START  удаление параматра
// let urlDeleteLang

// function funcUrlDelLang(name) {
//     var loca = window.location;
//     var baseUrl = loca.origin + loca.pathname + "?";
//     var query = loca.search.substr(1);
//     if (query.indexOf(name) > -1) {
//         var obj = {}
//         var arr = query.split("&");
//         for (var i = 0; i < arr.length; i++) {
//             arr[i] = arr[i].split("=");
//             obj[arr[i][0]] = arr[i][1];
//         };
//         delete obj[name];
//         urlDeleteLang = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g, "").replace(/\:/g, "=").replace(/\,/g, "&");

//         return urlDeleteLang

//     };
// }
// funcUrlDelLang("lang")


// console.log(urlDeleteLang)
// END  удаление параматра

// console.log(paramsUrl[0]["aimD"].length)

const toHTMLcrumbs = fruitchapter =>
    `<ul class="crumbs-text">
            <li class="lev-${fruitchapter.aimA}"><a class="lng-lev-${fruitchapter.aimA}" href="index.html?a=${fruitchapter.aimA}"></a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimB}"><a class="lng-lev-${fruitchapter.aimB}" href="#"></a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimC}"><a class="lng-lev-${fruitchapter.aimC}" href="index-page-species.html?a=${fruitchapter.aimA}&b=${fruitchapter.aimB}&c=${fruitchapter.aimC}&d=&e=&f="></a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimD}"><a class="lng-lev-${fruitchapter.aimD}" href="#"></a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimE}"><a class="lng-lev-${fruitchapter.aimE}" href="#"></a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimF}"><a class="lng-lev-${fruitchapter.aimF}" href="#"></a><i class="fas fa-angle-right"></i></li>
        </ul>`;

function renderCrumbs() {
    const htmlcrumbs = paramsUrl.map(toHTMLcrumbs).join('')
    document.querySelector(idcrumbs).innerHTML = htmlcrumbs
};
renderCrumbs()

//////////////////////////////////////////////////
// ////////////////////////////////////////////////
import { langArr } from '../lang/lang-DATA.js';


// ///////////////////////////////////////////////
// //////////////////////////////////////////////

const toHTMLdiscription = fruitchapter =>
    `<div class="dsn">
            <h1 class="title-shadow-one lng-lev-${fruitchapter.aimC}"></h1>
            <p class="text-line lng-text-${fruitchapter.aimC}"></p>
        </div>`;

function renderDiscription() {
    const htmlDiscription = paramsUrl.map(toHTMLdiscription).join('')
    document.querySelector(iddiscription).innerHTML = htmlDiscription
};
renderDiscription()

////////////////////////////////////////////

let xx = speciesCategory[0]["c"]
console.log(xx)

const toHTMLspeciesSection = fruitbasic =>
    `<a href="${fruitbasic.href}?a=${fruitbasic.a}&b=${fruitbasic.b}&c=${fruitbasic.c}&d=${fruitbasic.d}&e=1&f=">
            <section class="species">
                <div class="block-fon">
                    <img class="img-fon" src="${fruitbasic.imgFon}" alt="">
                </div>
                <div class="container">
                    <div class="species-img">
                        <img src="${fruitbasic.imgOne}" alt="">
                    </div>
                    <div class="species-name">
                        <p class="lng-lev-${fruitbasic.c} species-text"></p>
                        <p class="lng-lev-${fruitbasic.d} species-text"></p>
                    </div>
                </div>
               
            </section>
        </a>`;



function renderSpeciesSection() {
    const htmlSpeciesSection = speciesCategory.map(toHTMLspeciesSection).join('')
    document.querySelector(idspecies).innerHTML = htmlSpeciesSection
};
renderSpeciesSection()

///////////////////////////////////////////