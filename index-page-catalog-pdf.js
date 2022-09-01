///////////////////////////////

// const idchapter = '#chaptercatalog'
const idcatalog = '#catalogbrand'

//////////////////////////////

let params = (new URL(document.location)).searchParams;
const paramsss = [{ item: params.get("item").split('_').join(' '), brand: params.get("brand") }, ]

//////////////////////////////

import { catalogDATA } from './index-page-catalog-pdf-DATA.js';


let brandPDF = [];

switch (params.get("brand")) {
    case 'catalogs':
        brandPDF = catalogDATA;
        break;


}

/////////////////////////////

// const toHTMLchapter = fruitchapter =>
//     `<h1 class="content1-description-title">${fruitchapter.item}</h1>
//     <h2 class="content2-list-title">${fruitchapter.brand}</h2>`

// function renderchapter() {
//     const htmlchapter = paramsss.map(toHTMLchapter).join('')
//     document.querySelector(idchapter).innerHTML = htmlchapter
// }
// renderchapter()

////////////////////////////

const toHTMLbasic = fruitbasic =>
    `<div class="content4-list-section-wrapper">
        <a href="${fruitbasic.brandhref}" target="_ blank">
            <div class="content4-list-section">
                <div class="list-block-text">
                    <p class="content4-list-text">${fruitbasic.brandname.slice(0, -4).split('_').join(' ')}<span>.pdf</span></p>
                </div>
                <div class="list-block-img"></div>
            </div>
        </a>
    </div>`


// `<div class = "content2-list-section-wrapper">
//     <a href = "${fruitbasic.brandhref}" target="_ blank">
//         <div class = "content2-list-section">
//             <div class = "list-block-text" >
//                 <p class = "content2-list-text">${fruitbasic.brandname.slice(0, -4).split('_').join(' ')}<span>.pdf</span></p>
//             </div> 
//             <div class = "list-block-img"> </div> 
//         </div> 
//     </a> 
// </div>`

function renderbasic() {
    const htmlbasic = brandPDF.map(toHTMLbasic).join('')
    document.querySelector(idcatalog).innerHTML = htmlbasic
}
renderbasic()