///////////////////////////////

// const idchapter = '#chaptercatalog'  
// const idcatalog = '#catalogbrand'
const idcrumbs = '#crumbs'
const idchapter = '#chapter-list';
const idpartslist = '#list-positions';

//////////////////////////////



let params = (new URL(document.location)).searchParams;
// const paramsss = [{ item: params.get("item").split('-').join(' '), brand: params.get("brand").split('-').join(' ') }, ];
const paramsss = [{ item: params.get("item").split('-').join(' '), brand: params.get("brand").split('-').join(' ') }, ];

//////////////////////////////

import { catalogDATA } from './index-page-catalog-pdf-DATA.js';


let brandPDF = [];

switch (params.get("brand")) {
    case 'catalogs':
        brandPDF = catalogDATA.reverse();
        break;


}

/////////////////////////////


// /////////////////////////////////////////

const toHTMLcrumbs = fruitchapter =>
    `<ul class="crumbs-text">
    <li><a href="index.html">Главная</a><i class="fas fa-angle-right"></i></li>
    <li><a href="">Документация</a><i class="fas fa-angle-right"></i></li>
    <li><a href="index-parts-list-brand.html">${fruitchapter.brand} pdf</a><i class="fas fa-angle-right"></i></li>
    
</ul>`;

function rendercrumbs() {
    const htmlchapter = paramsss.map(toHTMLcrumbs).join('')
    document.querySelector(idcrumbs).innerHTML = htmlchapter
};

rendercrumbs()


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


/////////////////////////////

const toHTMLchapter = fruitchapter =>
    `
    <h2 class="title-shadow-h1h2">${fruitchapter.item}</h2>`;

function renderchapter() {
    const htmlchapter = paramsss.map(toHTMLchapter).join('')
    document.querySelector(idchapter).innerHTML = htmlchapter
};
renderchapter();

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