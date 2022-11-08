///////////////////////////////

// const idchapter = '#chaptercatalog'  
// const idcatalog = '#catalogbrand'
const idcrumbs = '#crumbs'
    // const idchapter = '#chapter-list';
    // const idpartslist = '#list-positions';
const iddiscription = '#discription'

const idcategoryproduct = '#category-product'



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
    aimLang: params.get("lang"),
}];


//////////////////////////////

import { categoryLOOPERS } from './index-page-category-product-DATA.js';


let categoryPRODUCT = [];

switch (params.get("c")) {
    case 'loopers':
        categoryPRODUCT = categoryLOOPERS.reverse();
        break;
}

let dataRequestC = (new URL(document.location)).searchParams.get("c");
let dataRequestD = (new URL(document.location)).searchParams.get("d")

let categoryPRODUCTresult = categoryPRODUCT.filter(function(item, index, array) {
    return item.c === dataRequestC && item.d === dataRequestD
});
categoryPRODUCTresult = categoryPRODUCTresult.reverse();
console.log(categoryPRODUCTresult)

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
            <li class="lev-${fruitchapter.aimA}"><a class="lng-lev-${fruitchapter.aimA}" href="index.html?a=${fruitchapter.aimA}"></a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimB}"><a class="lng-lev-${fruitchapter.aimB}" href="#"></a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimC}"><a class="lng-lev-${fruitchapter.aimC}" href="index-page-species-section.html?a=${fruitchapter.aimA}&b=${fruitchapter.aimB}&c=${fruitchapter.aimC}&d=&e=&f="></a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimD}"><a class="lng-lev-${fruitchapter.aimD}" href="#">${fruitchapter.aimD.split('-').join(' ')}</a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimE}"><a class="lng-lev-${fruitchapter.aimE}" href="#">${fruitchapter.aimE}</a><i class="fas fa-angle-right"></i></li>
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
        <p class="title-shadow-two lng-lev-${fruitchapter.aimD}">${fruitchapter.aimD.split('-').join(' ')}</p>
    </div>`;

function renderDiscription() {
    const htmlDiscription = paramsUrl.map(toHTMLdiscription).join('')
    document.querySelector(iddiscription).innerHTML = htmlDiscription
};
renderDiscription()


/////////////////////////////
// START /////////// paginatin ////////////////////////////////////////////////////////////////////////


let currenPage = Number((new URL(document.location)).searchParams.get("e"));

let perPage = 5; /*колличество на странице */

let start = 0; /* нулевой элемент массива */
let end = perPage;

const page = document.querySelector(".page-num");
const nextMax = document.querySelector(".next-max");

const totalPages = Math.ceil(categoryPRODUCTresult.length / perPage);

const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

nextMax.innerHTML = totalPages;

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");


renderBasic();

function renderBasic() {

    let toHTMLbasic = ''
    const htmlbasic = categoryPRODUCTresult.map((item, index) => {
        start = (currenPage - 1) * perPage;
        end = currenPage * perPage;
        if (index >= start && index < end) {

            toHTMLbasic =
                `<a href="#">
            <section class="product">
                <div class="product-block-img">
                    <img class="product-img" src="${item.imgSrc}" alt="${item.c} ${item.f}">
                </div>
                <div class="product-block-text">
                    <p class="lng-lev-${item.onlyc} product-text">${item.onlyc}</p>
                    <p class="lng-lev-${item.d} product-text">${item.d.split('-').join(' ')}</p>
                    <p class="lng-lev-${item.f} product-text">${item.f}</p>
                </div>
            </section>
        </a>`;
            // `<div class = "content2-list-section-wrapper">
            //     <a href = "${item.brandhref}" title="${item.brandname.slice(0, -4).split('_').join(' ')}. The parts list for sewing machine manual format pdf">
            //         <div class = "content2-list-section">
            //             <div class = "list-block-text" >
            //                 <p class = "content2-list-text">${item.brandname.slice(0, -4).split('_').join(' ')} <span>pdf</span></p>
            //             </div> 
            //             <div class = "list-block-img"> </div> 
            //         </div> 
            //     </a> 
            // </div>`;
            return toHTMLbasic
        } else {
            return toHTMLbasic = ''
        };
    });

    document.querySelector(idcategoryproduct).innerHTML = htmlbasic.join('');

    showItems();

    if (currenPage === totalPages) { next.classList.add("disable") } else { next.classList.remove("disable") };
    if (currenPage === 1) { prev.classList.add("disable") } else { prev.classList.remove("disable") };

};

// renderBasic();

btnNext.addEventListener('click', () => {
    if (currenPage < totalPages) {
        currenPage++;
        renderBasic();
        document.location.reload();
    };
});


btnPrev.addEventListener('click', () => {
    if (currenPage > 1) {
        currenPage--;
        renderBasic();
        document.location.reload();
    };
});

// START /// формируем  url с текущей страницей без перезагрузки
function showItems() {
    if (history.pushState) {
        var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        let searchPAPAMS = "?" + "a=" + (new URL(document.location)).searchParams.get("a") +
            "&" + "b=" + (new URL(document.location)).searchParams.get("b") +
            "&" + "c=" + (new URL(document.location)).searchParams.get("c") +
            "&" + "d=" + (new URL(document.location)).searchParams.get("d") +
            "&" + "e=" + currenPage +
            "&" + "f=" + (new URL(document.location)).searchParams.get("f") +
            "&" + "lang=" + (new URL(document.location)).searchParams.get("lang");

        var newUrl = baseUrl + searchPAPAMS;
        history.pushState(null, null, newUrl);
    } else {
        console.warn('History API не поддерживается');
    };
    page.innerHTML = currenPage;
};
// END /// формируем  url с текущей страницей без перезагрузки


// START /// возращаемся по кнопке в браузоре назад со страницы
var baseUrlpopstate;
let searchPAPAMSpopstate;
let urlPapamsB = (new URL(document.location)).searchParams.get("b");

addEventListener("popstate", function(e) {
    if (urlPapamsB === "" || urlPapamsB === null || typeof urlPapamsB === "undefined") {
        baseUrlpopstate = window.location.protocol + "//" + window.location.host + "/index.html";
        searchPAPAMSpopstate = "?" + "a=" + (new URL(document.location)).searchParams.get("a") +
            "&" + "lang=" + (new URL(document.location)).searchParams.get("lang");

    } else {
        baseUrlpopstate = window.location.protocol + "//" + window.location.host + "/index-page-species-section.html";
        searchPAPAMSpopstate = "?" + "a=" + (new URL(document.location)).searchParams.get("a") +
            "&" + "b=" + (new URL(document.location)).searchParams.get("b") +
            "&" + "c=" + (new URL(document.location)).searchParams.get("c") +
            "&" + "d=" +
            "&" + "e=" +
            "&" + "f=" +
            "&" + "lang=" + (new URL(document.location)).searchParams.get("lang");
    }
    var newUrlpopstate = baseUrlpopstate + searchPAPAMSpopstate;
    window.location.replace(newUrlpopstate);
}, false);
// END /// возращаемся по кнопке в браузоре назад со страницы