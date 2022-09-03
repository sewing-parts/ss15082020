///////////////////////////////
const idcrumbs = '#crumbsbrand'
const idchapter = '#chapterbrand';
const idpartslist = '#partslistbrand';

//////////////////////////////

let params = (new URL(document.location)).searchParams;
// const paramsss = [{ item: params.get("item").split('-').join(' '), brand: params.get("brand").split('-').join(' ') }, ];
const paramsss = [{ item: params.get("item").split('-').join(' '), brand: params.get("brand").split('-').join(' ') }, ];

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

switch (params.get("brand")) {
    case 'barudan':
        brandPDF = barudanPDF;
        break;
    case 'bernina-home':
        brandPDF = berninaHomePDF;
        break;
    case 'bonis':
        brandPDF = bonisPDF;
        break;
    case 'brother':
        brandPDF = brotherPDF;
        break;
    case 'brother-home':
        brandPDF = brotherHomePDF;
        break;
    case 'chandler':
        brandPDF = chandlerPDF;
        break;
    case 'consew':
        brandPDF = consewPDF;
        break;
    case 'durkoop-adler':
        brandPDF = durkoppAdlerPDF;
        break;
    case 'eastman':
        brandPDF = eastmanPDF;
        break;
    case 'fischbein':
        brandPDF = fischbeinPDF;
        break;
    case 'global':
        brandPDF = globalPDF;
        break;
    case 'hashima-fusing':
        brandPDF = hashimaFusingPDF;
        break;
    case 'highlead':
        brandPDF = highleadPDF;
        break;
    case 'janome-home':
        brandPDF = janomeHomePDF;
        break;
    case 'juki':
        brandPDF = jukiPDF;
        break;
    case 'juki-home':
        brandPDF = jukiHomePDF;
        break;
    case 'kansai-special':
        brandPDF = kansaiSpecialPDF;
        break;
    case 'kingtex':
        brandPDF = kingtexPDF;
        break;
    case 'km':
        brandPDF = kmPDF;
        break;
    case 'maier':
        brandPDF = maierPDF;
        break;
    case 'mauser-spezial':
        brandPDF = mauserSpezialPDF;
        break;
    case 'merrow':
        brandPDF = merrowPDF;
        break;
    case 'minerva':
        brandPDF = minervaPDF;
        break;
    case 'minerva-home':
        brandPDF = minervaHomePDF;
        break;
    case 'mitsubishi':
        brandPDF = mitsubishiPDF;
        break;
    case 'n-c-carpet':
        brandPDF = NCcarpetPDF;
        break;
    case 'newlong':
        brandPDF = newlongPDF;
        break;
    case 'pegasus':
        brandPDF = pegasusPDF;
        break;
    case 'pfaff':
        brandPDF = pfaffPDF;
        break;
    case 'reece':
        brandPDF = reecePDF;
        break;
    case 'rimoldi':
        brandPDF = rimoldiPDF;
        break;
    case 'seiko':
        brandPDF = seikoPDF;
        break;
    case 'singer':
        brandPDF = singerPDF;
        break;
    case 'singer-home':
        brandPDF = singerHomePDF;
        break;
    case 'siruba':
        brandPDF = sirubaPDF;
        break;
    case 'strobel':
        brandPDF = strobelPDF;
        break;
    case 'sun-star':
        brandPDF = sunStarPDF;
        break;
    case 'suprena':
        brandPDF = suprenaPDF;
        break;
    case 'typical':
        brandPDF = typicalPDF;
        break;
    case 'union-special':
        brandPDF = unionSpecialPDF;
        break;
    case 'veit':
        brandPDF = veitPDF;
        break;
    case 'willcox-gibbs':
        brandPDF = willcoxGibbsPDF;
        break;
    case 'yamato':
        brandPDF = yamatoPDF;
        break;
    case 'zoje':
        brandPDF = zojePDF;
        break;

};

// 
const toHTMLcrumbs = fruitchapter =>
    `<ul class="crumbs-text">
    <li><a href="index.html">Главная</a><i class="fas fa-angle-right"></i></li>
    <li><a href="">Документация</a><i class="fas fa-angle-right"></i></li>
    <li><a href="index-parts-list-brand.html">${fruitchapter.item} pdf</a><i class="fas fa-angle-right"></i></li>
    <li><a href="">${fruitchapter.brand} ${fruitchapter.item} pdf</a><i class="fas fa-angle-right"></i></li>
</ul>`;

function rendercrumbs() {
    const htmlchapter = paramsss.map(toHTMLcrumbs).join('')
    document.querySelector(idcrumbs).innerHTML = htmlchapter
};

rendercrumbs()


/////////////////////////////

const toHTMLchapter = fruitchapter =>
    `<h1 class="content1-description-title">${fruitchapter.item}</h1>
    <h2 class="content2-list-title">${fruitchapter.brand}</h2>`;

function renderchapter() {
    const htmlchapter = paramsss.map(toHTMLchapter).join('')
    document.querySelector(idchapter).innerHTML = htmlchapter
};
renderchapter();

////////////////////////////

const toHTMLbasic = fruitbasic =>
    `<div class = "content2-list-section-wrapper">
        <a href = "${fruitbasic.brandhref}" target="_ blank">
            <div class = "content2-list-section">
                <div class = "list-block-text" >
                    <p class = "content2-list-text">${fruitbasic.brandname.slice(0, -4).split('_').join(' ')}<span>.pdf</span></p>
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