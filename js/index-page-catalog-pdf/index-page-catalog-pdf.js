///////////////////////////////

// const idchapter = '#chaptercatalog'  
// const idcatalog = '#catalogbrand'
const idcrumbs = '#crumbs'
    // const idchapter = '#chapter-list';
const idpartslist = '#list-positions';
const iddiscription = '#discription'

//////////////////////////////



let params = (new URL(document.location)).searchParams;
// const paramsss = [{ item: params.get("item").split('-').join(' '), brand: params.get("brand").split('-').join(' ') }, ];
// const paramsss = [{ item: params.get("item").split('-').join(' '), brand: params.get("brand").split('-').join(' ') }, ];

const paramsUrl = [{

    aimA: params.get("a"),
    aimB: params.get("b"),
    aimC: params.get("c"),
    aimD: params.get("d"),
    aimE: params.get("e"),
    aimF: params.get("f"),
    aimLANG: params.get("lang"),
}];


//////////////////////////////

import { catalogDATA } from './index-page-catalog-pdf-DATA.js';


let brandPDF = [];

switch (params.get("c")) {
    case 'catalogs-pdf':
        brandPDF = catalogDATA.reverse();
        break;


}

/////////////////////////////


// /////////////////////////////////////////

// const toHTMLcrumbs = fruitchapter =>
//     `<ul class="crumbs-text">
//     <li><a href="index.html">Главная</a><i class="fas fa-angle-right"></i></li>
//     <li><a href="">Документация</a><i class="fas fa-angle-right"></i></li>
//     <li><a href="index-parts-list-brand.html">${fruitchapter.brand} pdf</a><i class="fas fa-angle-right"></i></li>

// </ul>`;

// function rendercrumbs() {
//     const htmlchapter = paramsss.map(toHTMLcrumbs).join('')
//     document.querySelector(idcrumbs).innerHTML = htmlchapter
// };

// rendercrumbs()

const toHTMLcrumbs = fruitchapter =>
    `<ul class="crumbs-text">
            <li class="lev-${fruitchapter.aimA}"><a class="lng-lev-${fruitchapter.aimA}" href="index.html"></a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimB}"><a class="lng-lev-${fruitchapter.aimB}" href="#"></a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimC}"><a class="lng-lev-${fruitchapter.aimC}" href="#"></a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimD}"><a class="lng-lev-${fruitchapter.aimD}" href="#"></a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimE}"><a class="lng-lev-${fruitchapter.aimE}" href="#"></a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimF}"><a class="lng-lev-${fruitchapter.aimF}" href="#"></a><i class="fas fa-angle-right"></i></li>
        </ul>`;

function renderCrumbs() {
    const htmlcrumbs = paramsUrl.map(toHTMLcrumbs).join('')
    document.querySelector(idcrumbs).innerHTML = htmlcrumbs
};
renderCrumbs()


//////////////////////////////////////////////

// const toHTMLchapter = fruitchapter =>
//     `<h1 class="content1-description-title">${fruitchapter.item}</h1>
//     <h2 class="content2-list-title">${fruitchapter.brand}</h2>`

// function renderchapter() {
//     const htmlchapter = paramsss.map(toHTMLchapter).join('')
//     document.querySelector(idchapter).innerHTML = htmlchapter
// }
// renderchapter()

////////////////////////////

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


/////////////////////////////

// const toHTMLchapter = fruitchapter =>
//     `
//     <h2 class="title-shadow-two lng-lev-${fruitchapter.aimC}"></h2>`;

// function renderchapter() {
//     const htmlchapter = paramsUrl.map(toHTMLchapter).join('')
//     document.querySelector(idchapter).innerHTML = htmlchapter
// };
// renderchapter();

////////////////////////////

const toHTMLbasic = fruitbasic =>
    `<div class="content2-list-section-wrapper">
        <a href="${fruitbasic.brandhref}" title="${fruitbasic.brandname.slice(0, -4).split('_').join(' ')} Spare Parts And Accessories" target="_ blank">
            <div class="content2-list-section">
                <div class="list-block-text">
                    <p class="content2-list-text">${fruitbasic.brandname.slice(0, -4).split('_').join(' ')} <span>pdf</span></p>
                </div>
                <div class="list-block-img"></div>
            </div>
        </a>
    </div>`




function renderbasic() {
    const htmlbasic = brandPDF.map(toHTMLbasic).join('')
    document.querySelector(idpartslist).innerHTML = htmlbasic
}
renderbasic()