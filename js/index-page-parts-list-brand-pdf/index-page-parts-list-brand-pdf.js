///////////////////////////////
const idcrumbs = '#crumbs'
const iddiscription = '#discription'
const idpartslist = '#list-positions';

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

//////////////////////////////

import { barudanPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { berninaHomePDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { bonisPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { brotherPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { brotherHomePDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { chandlerPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { consewPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { durkoppAdlerPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { eastmanPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { fischbeinPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { globalPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { hashimaFusingPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { highleadPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { janomeHomePDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { jukiPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { jukiHomePDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { kansaiSpecialPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { kingtexPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { kmPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { maierPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { mauserSpezialPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { merrowPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { minervaPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { minervaHomePDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { mitsubishiPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { NCcarpetPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { newlongPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { pegasusPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { pfaffPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { reecePDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { rimoldiPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { seikoPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { singerPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { singerHomePDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { sirubaPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { strobelPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { sunStarPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { suprenaPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { typicalPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { unionSpecialPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { veitPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { willcoxGibbsPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { yamatoPDF } from './index-page-parts-list-brand-pdf-DATA.js';
import { zojePDF } from './index-page-parts-list-brand-pdf-DATA.js';


let brandPDF = [];

switch (params.get("d")) {
    case 'barudan':
        brandPDF = barudanPDF.reverse();
        break;
    case 'bernina-home':
        brandPDF = berninaHomePDF.reverse();
        break;
    case 'bonis':
        brandPDF = bonisPDF.reverse();
        break;
    case 'brother':
        brandPDF = brotherPDF.reverse();
        break;
    case 'brother-home':
        brandPDF = brotherHomePDF.reverse();
        break;
    case 'chandler':
        brandPDF = chandlerPDF.reverse();
        break;
    case 'consew':
        brandPDF = consewPDF.reverse();
        break;
    case 'durkopp-adler':
        brandPDF = durkoppAdlerPDF.reverse();
        break;
    case 'eastman':
        brandPDF = eastmanPDF.reverse();
        break;
    case 'fischbein':
        brandPDF = fischbeinPDF.reverse();
        break;
    case 'global':
        brandPDF = globalPDF.reverse();
        break;
    case 'hashima-fusing':
        brandPDF = hashimaFusingPDF.reverse();
        break;
    case 'highlead':
        brandPDF = highleadPDF.reverse();
        break;
    case 'janome-home':
        brandPDF = janomeHomePDF.reverse();
        break;
    case 'juki':
        brandPDF = jukiPDF.reverse();
        break;
    case 'juki-home':
        brandPDF = jukiHomePDF;
        break;
    case 'kansai-special':
        brandPDF = kansaiSpecialPDF.reverse();
        break;
    case 'kingtex':
        brandPDF = kingtexPDF.reverse();
        break;
    case 'km':
        brandPDF = kmPDF.reverse();
        break;
    case 'maier':
        brandPDF = maierPDF.reverse();
        break;
    case 'mauser-spezial':
        brandPDF = mauserSpezialPDF.reverse();
        break;
    case 'merrow':
        brandPDF = merrowPDF.reverse();
        break;
    case 'minerva':
        brandPDF = minervaPDF.reverse();
        break;
    case 'minerva-home':
        brandPDF = minervaHomePDF;
        break;
    case 'mitsubishi':
        brandPDF = mitsubishiPDF.reverse();
        break;
    case 'n-c-carpet':
        brandPDF = NCcarpetPDF.reverse();
        break;
    case 'newlong':
        brandPDF = newlongPDF.reverse();
        break;
    case 'pegasus':
        brandPDF = pegasusPDF.reverse();
        break;
    case 'pfaff':
        brandPDF = pfaffPDF.reverse();
        break;
    case 'reece':
        brandPDF = reecePDF.reverse();
        break;
    case 'rimoldi':
        brandPDF = rimoldiPDF.reverse();
        break;
    case 'seiko':
        brandPDF = seikoPDF.reverse();
        break;
    case 'singer':
        brandPDF = singerPDF.reverse();
        break;
    case 'singer-home':
        brandPDF = singerHomePDF;
        break;
    case 'siruba':
        brandPDF = sirubaPDF.reverse();
        break;
    case 'strobel':
        brandPDF = strobelPDF.reverse();
        break;
    case 'sun-star':
        brandPDF = sunStarPDF.reverse();
        break;
    case 'suprena':
        brandPDF = suprenaPDF.reverse();
        break;
    case 'typical':
        brandPDF = typicalPDF.reverse();
        break;
    case 'union-special':
        brandPDF = unionSpecialPDF.reverse();
        break;
    case 'veit':
        brandPDF = veitPDF.reverse();
        break;
    case 'willcox-gibbs':
        brandPDF = willcoxGibbsPDF.reverse();
        break;
    case 'yamato':
        brandPDF = yamatoPDF.reverse();
        break;
    case 'zoje':
        brandPDF = zojePDF.reverse();
        break;

};

// ////////////////////////////////

const toHTMLcrumbs = fruitchapter =>
    `<ul class="crumbs-text">
            <li class="lev-${fruitchapter.aimA}"><a class="lng-lev-${fruitchapter.aimA}" href="index.html?a=${fruitchapter.aimA}"></a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimB}"><a class="lng-lev-${fruitchapter.aimB}" href="#"></a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimC}"><a class="lng-lev-${fruitchapter.aimC}" href="index-page-species-section.html?a=${fruitchapter.aimA}&b=${fruitchapter.aimB}&c=${fruitchapter.aimC}&d=&e=&f="></a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimD}"><a class="lng-lev-${fruitchapter.aimD}" href="index-page-parts-list-brand-pdf.html?a=${fruitchapter.aimA}&b=${fruitchapter.aimB}&c=${fruitchapter.aimC}&d=${fruitchapter.aimD}&e=1&f=">${fruitchapter.aimD.split('-').join(' ')}</a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimE}"><a class="lng-lev-${fruitchapter.aimE}" href="index-page-parts-list-brand-pdf.html?a=${fruitchapter.aimA}&b=${fruitchapter.aimB}&c=${fruitchapter.aimC}&d=${fruitchapter.aimD}&e=${fruitchapter.aimE}&f=">${fruitchapter.aimE}</a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimF}"><a class="lng-lev-${fruitchapter.aimF}" href="#"></a><i class="fas fa-angle-right"></i></li>
        </ul>`;

function renderCrumbs() {
    const htmlcrumbs = paramsUrl.map(toHTMLcrumbs).join('')
    document.querySelector(idcrumbs).innerHTML = htmlcrumbs
};
renderCrumbs()

/////////////////////////////

const toHTMLchapter = fruitchapter =>
    `<div class="dsn">
        <h1 class="title-shadow-one lng-lev-${fruitchapter.aimC}" ></h1>
        <p class="title-shadow-two lng-lev-${fruitchapter.aimD}">${fruitchapter.aimD.split('-').join(' ')}</p>
    </div>`;

function renderchapter() {
    const htmlchapter = paramsUrl.map(toHTMLchapter).join('')
    document.querySelector(iddiscription).innerHTML = htmlchapter
};
renderchapter();

////////////////////////////



// START /////////// paginatin ////////////////////////////////////////////////////////////////////////


let currenPage = Number((new URL(document.location)).searchParams.get("e"));

let perPage = 30; /*колличество на странице */

let start = 0; /* нулевой элемент массива */
let end = perPage;

const page = document.querySelector(".page-num");
const nextMax = document.querySelector(".next-max");

const totalPages = Math.ceil(brandPDF.length / perPage);

const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

nextMax.innerHTML = totalPages;

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");


renderBasic();

function renderBasic() {

    let toHTMLbasic = ''
    const htmlbasic = brandPDF.map((item, index) => {
        start = (currenPage - 1) * perPage;
        end = currenPage * perPage;
        if (index >= start && index < end) {

            toHTMLbasic =
                `<div class = "content2-list-section-wrapper">
                    <a href = "${item.brandhref}" title="${item.brandname.slice(0, -4).split('_').join(' ')}. The parts list for sewing machine manual format pdf">
                        <div class = "content2-list-section">
                            <div class = "list-block-text" >
                                <p class = "content2-list-text">${item.brandname.slice(0, -4).split('_').join(' ')} <span>pdf</span></p>
                            </div> 
                            <div class = "list-block-img"> </div> 
                        </div> 
                    </a> 
                </div>`;
            return toHTMLbasic
        } else {
            return toHTMLbasic = ''
        };
    });

    document.querySelector(idpartslist).innerHTML = htmlbasic.join('');

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