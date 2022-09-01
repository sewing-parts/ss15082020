///////////////////////////////

const idchapter = '#chapterbrand'
const idpartslist = '#partslistbrand'

//////////////////////////////

let params = (new URL(document.location)).searchParams;
const paramsss = [{ item: params.get("item").split('-').join(' '), brand: params.get("brand").split('-').join(' ') }, ]

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

let brandPDF = [];

switch (params.get("brand")) {
    case 'barudan':
        brandPDF = barudanPDF;
        break;
    case 'bonis':
        brandPDF = bonisPDF;
        break;
    case 'bernina-home':
        brandPDF = berninaHomePDF;
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

}

/////////////////////////////

const toHTMLchapter = fruitchapter =>
    `<h1 class="content1-description-title">${fruitchapter.item}</h1>
    <h2 class="content2-list-title">${fruitchapter.brand}</h2>`

function renderchapter() {
    const htmlchapter = paramsss.map(toHTMLchapter).join('')
    document.querySelector(idchapter).innerHTML = htmlchapter
}
renderchapter()

////////////////////////////

const toHTMLbasic = fruitbasic =>
    `<div class = "content2-list-section-wrapper">
        <a href = "${fruitbasic.brandhref}" target="_ blank">
            <div class = "content2-list-section">
                <div class = "list-block-text" >
                    <p class = "content2-list-text">${fruitbasic.brandname.slice(0, -4).split('_').join(' ').split('-').join(' ')}<span>.pdf</span></p>
                </div> 
                <div class = "list-block-img"> </div> 
            </div> 
        </a> 
    </div>`

function renderbasic() {
    const htmlbasic = brandPDF.map(toHTMLbasic).join('')
    document.querySelector(idpartslist).innerHTML = htmlbasic
}
renderbasic()