///////////////////////////////
const idcrumbs = '#crumbs'
const idchapter = '#chapter-list';
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
    aimLANG: params.get("lang"),
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
            <li class="lev-${fruitchapter.aimC}"><a class="lng-lev-${fruitchapter.aimC}" href="index-page-species.html?a=${fruitchapter.aimA}&b=${fruitchapter.aimB}&c=${fruitchapter.aimC}&d=&e=&f="></a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimD}"><a class="lng-lev-${fruitchapter.aimD}" href="index-page-parts-list-brand-pdf.html?a=${fruitchapter.aimA}&b=${fruitchapter.aimB}&c=${fruitchapter.aimC}&d=${fruitchapter.aimD}&e=&f=">${fruitchapter.aimD.split('-').join(' ')}</a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimE}"><a class="lng-lev-${fruitchapter.aimE}" href="#"></a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimF}"><a class="lng-lev-${fruitchapter.aimF}" href="#"></a><i class="fas fa-angle-right"></i></li>
        </ul>`;

function renderCrumbs() {
    const htmlcrumbs = paramsUrl.map(toHTMLcrumbs).join('')
    document.querySelector(idcrumbs).innerHTML = htmlcrumbs
};
renderCrumbs()

/////////////////////////////

const toHTMLchapter = fruitchapter =>
    `<h1 class="title-shadow-one lng-lev-${fruitchapter.aimC}" ></h1>
    <p class="title-shadow-two">${fruitchapter.aimD.split('-').join(' ')}</p>`;

// <p class="title-shadow-two">${paramsUrl[0]["aimD"].split('-').join(' ')}</p>

function renderchapter() {
    const htmlchapter = paramsUrl.map(toHTMLchapter).join('')
    document.querySelector(idchapter).innerHTML = htmlchapter
};
renderchapter();

////////////////////////////

const toHTMLbasic = fruitbasic =>
    `<div class = "content2-list-section-wrapper">
        <a href = "${fruitbasic.brandhref}" title="${fruitbasic.brandname.slice(0, -4).split('_').join(' ')} Manuals to Sewing Machine Pdf" target="_ blank">
            <div class = "content2-list-section">
                <div class = "list-block-text" >
                    <p class = "content2-list-text">${fruitbasic.brandname.slice(0, -4).split('_').join(' ')} <span>pdf</span></p>
                </div> 
                <div class = "list-block-img"> </div> 
            </div> 
        </a> 
    </div>`;

function renderbasic() {
    const htmlbasic = brandPDF.map(toHTMLbasic).join('')
    document.querySelector(idpartslist).innerHTML = htmlbasic
};
renderbasic()