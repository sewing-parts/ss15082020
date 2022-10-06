const idcrumbs = '#crumbs';
const idspecies = '#species';
const iddiscription = '#discription'


import { brandsPartsList } from "./index-page-species-section-DATA.js";
import { discriptionPartsList } from "./index-page-species-section-DATA.js"
import { crumbsPartsList } from "./index-page-species-section-DATA.js"


//////////////////////////////

let params = (new URL(document.location)).searchParams;
const paramsUrl = [{ item: params.get("item").split('-').join(' '), brand: params.get("brand").split('-').join(' '), lang: params.get("lang") }];

let langURL = paramsUrl[0].lang

//////////////////////////////////////////////


let speciesCategory = [];
let speciesDiscription = [];
let speciesCrumbs = [];

switch (params.get("item")) {
    case 'parts-list':
        speciesCategory = brandsPartsList;
        speciesDiscription = discriptionPartsList
        speciesCrumbs = crumbsPartsList
        break;


};

//////////////////////////////////////////////



if (langURL === 'en') {
    const toHTMLcrumbs = fruitchapter =>
        `<ul class="crumbs-text">
            <li><a href="index.html">${fruitchapter.enLev}</a><i class="fas fa-angle-right"></i></li>
            <li><a href="#">${fruitchapter.enLevE}</a><i class="fas fa-angle-right"></i></li>
            <li><a href="#">${fruitchapter.enLevE2}</a><i class="fas fa-angle-right"></i></li>
        </ul>`;

    function renderCrumbs() {
        const htmlcrumbs = speciesCrumbs.map(toHTMLcrumbs).join('')
        document.querySelector(idcrumbs).innerHTML = htmlcrumbs
    };
    renderCrumbs()
};

if (langURL === 'ua') {
    const toHTMLcrumbs = fruitchapter =>
        `<ul class="crumbs-text">
            <li><a href="index.html">${fruitchapter.uaLev}</a><i class="fas fa-angle-right"></i></li>
            <li><a href="#">${fruitchapter.uaLevE}</a><i class="fas fa-angle-right"></i></li>
            <li><a href="#">${fruitchapter.uaLevE2}</a><i class="fas fa-angle-right"></i></li>
        </ul>`;

    function renderCrumbs() {
        const htmlcrumbs = speciesCrumbs.map(toHTMLcrumbs).join('')
        document.querySelector(idcrumbs).innerHTML = htmlcrumbs
    };
    renderCrumbs()
};

if (langURL === 'ru') {
    const toHTMLcrumbs = fruitchapter =>
        `<ul class="crumbs-text">
            <li><a href="index.html">${fruitchapter.ruLev}</a><i class="fas fa-angle-right"></i></li>
            <li><a href="#">${fruitchapter.ruLevE}</a><i class="fas fa-angle-right"></i></li>
            <li><a href="#">${fruitchapter.ruLevE2}</a><i class="fas fa-angle-right"></i></li>
        </ul>`;

    function renderCrumbs() {
        const htmlcrumbs = speciesCrumbs.map(toHTMLcrumbs).join('')
        document.querySelector(idcrumbs).innerHTML = htmlcrumbs
    };
    renderCrumbs()
};

//////////////////////////////////////////////

if (langURL === 'en') {
    const toHTMLdiscription = fruitchapter =>
        `<div class="dsn">
            <h1 class="title-line-one">${fruitchapter.enTitleLine.split('-').join(' ')}</h1>
            <p class="text-line">${fruitchapter.enTextLine}</p>
        </div>`;

    function renderDiscription() {
        const htmlDiscription = speciesDiscription.map(toHTMLdiscription).join('')
        document.querySelector(iddiscription).innerHTML = htmlDiscription
    };
    renderDiscription()
};

if (langURL === 'ua') {
    const toHTMLdiscription = fruitchapter =>
        `<div class="dsn">
            <h1 class="title-line-one">${fruitchapter.uaTitleLine.split('-').join(' ')}</h1>
            <p class="text-line">${fruitchapter.uaTextLine}</p>
        </div>`;

    function renderDiscription() {
        const htmlDiscription = speciesDiscription.map(toHTMLdiscription).join('')
        document.querySelector(iddiscription).innerHTML = htmlDiscription
    };
    renderDiscription()
};

if (langURL === 'ru') {
    const toHTMLdiscription = fruitchapter =>
        `<div class="dsn">
            <h1 class="title-line-one">${fruitchapter.ruTitleLine.split('-').join(' ')}</h1>
            <p class="text-line">${fruitchapter.ruTextLine}</p>
        </div>`;

    function renderDiscription() {
        const htmlDiscription = speciesDiscription.map(toHTMLdiscription).join('')
        document.querySelector(iddiscription).innerHTML = htmlDiscription
    };
    renderDiscription()
};


//////////////////////////////////////////////





if (langURL === 'en') {
    const toHTMLspeciesSection = fruitbasic =>
        `<a href="${fruitbasic.href}${fruitbasic.bd}${fruitbasic.brand}${fruitbasic.im}${fruitbasic.item}">
            <section class="species">
                <div class="block-fon">
                    <img class="img-fon" src="${fruitbasic.imgFon}" alt="">
                </div>
                <div class="species-img">
                    <img src="${fruitbasic.imgOne}" alt="">
                </div>
                <div class="species-name">
                    <h2 class="species-text">${fruitbasic.brand.split('-').join(' ')}</h2>
                    <p class="species-text">${fruitbasic.enItem.split('-').join(' ')}</p>
                </div>
            </section>
        </a>`;

    function renderSpeciesSection() {
        const htmlSpeciesSection = speciesCategory.map(toHTMLspeciesSection).join('')
        document.querySelector(idspecies).innerHTML = htmlSpeciesSection
    };
    renderSpeciesSection()
}

if (langURL === 'ua') {
    const toHTMLspeciesSection = fruitbasic =>
        `<a href="${fruitbasic.href}${fruitbasic.bd}${fruitbasic.brand}${fruitbasic.im}${fruitbasic.item}">
            <section class="species">
                <div class="block-fon">
                    <img class="img-fon" src="${fruitbasic.imgFon}" alt="">
                </div>
                <div class="species-img">
                    <img src="${fruitbasic.imgOne}" alt="">
                </div>
                <div class="species-name">
                    <h2 class="species-text">${fruitbasic.brand.split('-').join(' ')}</h2>
                    <p class="species-text">${fruitbasic.uaItem.split('-').join(' ')}</p>
                </div>
            </section>
        </a>`;

    function renderSpeciesSection() {
        const htmlSpeciesSection = speciesCategory.map(toHTMLspeciesSection).join('')
        document.querySelector(idspecies).innerHTML = htmlSpeciesSection
    };
    renderSpeciesSection()
}

if (langURL === 'ru') {
    const toHTMLspeciesSection = fruitbasic =>
        `<a href="${fruitbasic.href}${fruitbasic.bd}${fruitbasic.brand}${fruitbasic.im}${fruitbasic.item}">
            <section class="species">
                <div class="block-fon">
                    <img class="img-fon" src="${fruitbasic.imgFon}" alt="">
                </div>
                <div class="species-img">
                    <img src="${fruitbasic.imgOne}" alt="">
                </div>
                <div class="species-name">
                    <h2 class="species-text">${fruitbasic.brand.split('-').join(' ')}</h2>
                    <p class="species-text">${fruitbasic.ruItem.split('-').join(' ')}</p>
                </div>
            </section>
        </a>`;

    function renderSpeciesSection() {
        const htmlSpeciesSection = speciesCategory.map(toHTMLspeciesSection).join('')
        document.querySelector(idspecies).innerHTML = htmlSpeciesSection
    };
    renderSpeciesSection()
}