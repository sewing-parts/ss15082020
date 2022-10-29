"use strict";

var _indexPagePartsListBrandPdfDATA = require("./index-page-parts-list-brand-pdf-DATA.js");

///////////////////////////////
var idcrumbs = '#crumbs';
var idchapter = '#chapter-list';
var idpartslist = '#list-positions'; //////////////////////////////

var params = new URL(document.location).searchParams; // const paramsUrl = [{ item: params.get("item").split('-').join(' '), brand: params.get("brand").split('-').join(' '), lang: params.get("lang") }];

var paramsUrl = [{
  aimA: params.get("a"),
  aimB: params.get("b"),
  aimC: params.get("c"),
  aimD: params.get("d"),
  aimE: params.get("e"),
  aimF: params.get("f"),
  aimLang: params.get("lang")
}]; //////////////////////////////

var brandPDF = [];

switch (params.get("d")) {
  case 'barudan':
    brandPDF = _indexPagePartsListBrandPdfDATA.barudanPDF.reverse();
    break;

  case 'bernina-home':
    brandPDF = _indexPagePartsListBrandPdfDATA.berninaHomePDF.reverse();
    break;

  case 'bonis':
    brandPDF = _indexPagePartsListBrandPdfDATA.bonisPDF.reverse();
    break;

  case 'brother':
    brandPDF = _indexPagePartsListBrandPdfDATA.brotherPDF.reverse();
    break;

  case 'brother-home':
    brandPDF = _indexPagePartsListBrandPdfDATA.brotherHomePDF.reverse();
    break;

  case 'chandler':
    brandPDF = _indexPagePartsListBrandPdfDATA.chandlerPDF.reverse();
    break;

  case 'consew':
    brandPDF = _indexPagePartsListBrandPdfDATA.consewPDF.reverse();
    break;

  case 'durkopp-adler':
    brandPDF = _indexPagePartsListBrandPdfDATA.durkoppAdlerPDF.reverse();
    break;

  case 'eastman':
    brandPDF = _indexPagePartsListBrandPdfDATA.eastmanPDF.reverse();
    break;

  case 'fischbein':
    brandPDF = _indexPagePartsListBrandPdfDATA.fischbeinPDF.reverse();
    break;

  case 'global':
    brandPDF = _indexPagePartsListBrandPdfDATA.globalPDF.reverse();
    break;

  case 'hashima-fusing':
    brandPDF = _indexPagePartsListBrandPdfDATA.hashimaFusingPDF.reverse();
    break;

  case 'highlead':
    brandPDF = _indexPagePartsListBrandPdfDATA.highleadPDF.reverse();
    break;

  case 'janome-home':
    brandPDF = _indexPagePartsListBrandPdfDATA.janomeHomePDF.reverse();
    break;

  case 'juki':
    brandPDF = _indexPagePartsListBrandPdfDATA.jukiPDF.reverse();
    break;

  case 'juki-home':
    brandPDF = _indexPagePartsListBrandPdfDATA.jukiHomePDF;
    break;

  case 'kansai-special':
    brandPDF = _indexPagePartsListBrandPdfDATA.kansaiSpecialPDF.reverse();
    break;

  case 'kingtex':
    brandPDF = _indexPagePartsListBrandPdfDATA.kingtexPDF.reverse();
    break;

  case 'km':
    brandPDF = _indexPagePartsListBrandPdfDATA.kmPDF.reverse();
    break;

  case 'maier':
    brandPDF = _indexPagePartsListBrandPdfDATA.maierPDF.reverse();
    break;

  case 'mauser-spezial':
    brandPDF = _indexPagePartsListBrandPdfDATA.mauserSpezialPDF.reverse();
    break;

  case 'merrow':
    brandPDF = _indexPagePartsListBrandPdfDATA.merrowPDF.reverse();
    break;

  case 'minerva':
    brandPDF = _indexPagePartsListBrandPdfDATA.minervaPDF.reverse();
    break;

  case 'minerva-home':
    brandPDF = _indexPagePartsListBrandPdfDATA.minervaHomePDF;
    break;

  case 'mitsubishi':
    brandPDF = _indexPagePartsListBrandPdfDATA.mitsubishiPDF.reverse();
    break;

  case 'n-c-carpet':
    brandPDF = _indexPagePartsListBrandPdfDATA.NCcarpetPDF.reverse();
    break;

  case 'newlong':
    brandPDF = _indexPagePartsListBrandPdfDATA.newlongPDF.reverse();
    break;

  case 'pegasus':
    brandPDF = _indexPagePartsListBrandPdfDATA.pegasusPDF.reverse();
    break;

  case 'pfaff':
    brandPDF = _indexPagePartsListBrandPdfDATA.pfaffPDF.reverse();
    break;

  case 'reece':
    brandPDF = _indexPagePartsListBrandPdfDATA.reecePDF.reverse();
    break;

  case 'rimoldi':
    brandPDF = _indexPagePartsListBrandPdfDATA.rimoldiPDF.reverse();
    break;

  case 'seiko':
    brandPDF = _indexPagePartsListBrandPdfDATA.seikoPDF.reverse();
    break;

  case 'singer':
    brandPDF = _indexPagePartsListBrandPdfDATA.singerPDF.reverse();
    break;

  case 'singer-home':
    brandPDF = _indexPagePartsListBrandPdfDATA.singerHomePDF;
    break;

  case 'siruba':
    brandPDF = _indexPagePartsListBrandPdfDATA.sirubaPDF.reverse();
    break;

  case 'strobel':
    brandPDF = _indexPagePartsListBrandPdfDATA.strobelPDF.reverse();
    break;

  case 'sun-star':
    brandPDF = _indexPagePartsListBrandPdfDATA.sunStarPDF.reverse();
    break;

  case 'suprena':
    brandPDF = _indexPagePartsListBrandPdfDATA.suprenaPDF.reverse();
    break;

  case 'typical':
    brandPDF = _indexPagePartsListBrandPdfDATA.typicalPDF.reverse();
    break;

  case 'union-special':
    brandPDF = _indexPagePartsListBrandPdfDATA.unionSpecialPDF.reverse();
    break;

  case 'veit':
    brandPDF = _indexPagePartsListBrandPdfDATA.veitPDF.reverse();
    break;

  case 'willcox-gibbs':
    brandPDF = _indexPagePartsListBrandPdfDATA.willcoxGibbsPDF.reverse();
    break;

  case 'yamato':
    brandPDF = _indexPagePartsListBrandPdfDATA.yamatoPDF.reverse();
    break;

  case 'zoje':
    brandPDF = _indexPagePartsListBrandPdfDATA.zojePDF.reverse();
    break;
}

; // ////////////////////////////////

var toHTMLcrumbs = function toHTMLcrumbs(fruitchapter) {
  return "<ul class=\"crumbs-text\">\n            <li class=\"lev-".concat(fruitchapter.aimA, "\"><a class=\"lng-lev-").concat(fruitchapter.aimA, "\" href=\"index.html?a=").concat(fruitchapter.aimA, "\"></a><i class=\"fas fa-angle-right\"></i></li>\n            <li class=\"lev-").concat(fruitchapter.aimB, "\"><a class=\"lng-lev-").concat(fruitchapter.aimB, "\" href=\"#\"></a><i class=\"fas fa-angle-right\"></i></li>\n            <li class=\"lev-").concat(fruitchapter.aimC, "\"><a class=\"lng-lev-").concat(fruitchapter.aimC, "\" href=\"index-page-species-section.html?a=").concat(fruitchapter.aimA, "&b=").concat(fruitchapter.aimB, "&c=").concat(fruitchapter.aimC, "&d=&e=&f=\"></a><i class=\"fas fa-angle-right\"></i></li>\n            <li class=\"lev-").concat(fruitchapter.aimD, "\"><a class=\"lng-lev-").concat(fruitchapter.aimD, "\" href=\"index-page-parts-list-brand-pdf.html?a=").concat(fruitchapter.aimA, "&b=").concat(fruitchapter.aimB, "&c=").concat(fruitchapter.aimC, "&d=").concat(fruitchapter.aimD, "&e=1&f=\"></a><i class=\"fas fa-angle-right\"></i></li>\n            <li class=\"lev-").concat(fruitchapter.aimE, "\"><a class=\"lng-lev-").concat(fruitchapter.aimE, "\" href=\"index-page-parts-list-brand-pdf.html?a=").concat(fruitchapter.aimA, "&b=").concat(fruitchapter.aimB, "&c=").concat(fruitchapter.aimC, "&d=").concat(fruitchapter.aimD, "&e=").concat(fruitchapter.aimE, "&f=\">").concat(fruitchapter.aimE, "</a><i class=\"fas fa-angle-right\"></i></li>\n            <li class=\"lev-").concat(fruitchapter.aimF, "\"><a class=\"lng-lev-").concat(fruitchapter.aimF, "\" href=\"#\"></a><i class=\"fas fa-angle-right\"></i></li>\n        </ul>");
};

function renderCrumbs() {
  var htmlcrumbs = paramsUrl.map(toHTMLcrumbs).join('');
  document.querySelector(idcrumbs).innerHTML = htmlcrumbs;
}

;
renderCrumbs(); /////////////////////////////

var toHTMLchapter = function toHTMLchapter(fruitchapter) {
  return "<h1 class=\"title-shadow-one lng-lev-".concat(fruitchapter.aimC, "\" ></h1>\n    <p class=\"title-shadow-two\">").concat(fruitchapter.aimD.split('-').join(' '), "</p>");
}; // <p class="title-shadow-two">${paramsUrl[0]["aimD"].split('-').join(' ')}</p>


function renderchapter() {
  var htmlchapter = paramsUrl.map(toHTMLchapter).join('');
  document.querySelector(idchapter).innerHTML = htmlchapter;
}

;
renderchapter(); ////////////////////////////
// START /////////// paginatin ////////////////////////////////////////////////////////////////////////

var currenPage = Number(new URL(document.location).searchParams.get("e"));
console.log("ddddddd", currenPage);
var perPage = 5;
/*колличество на странице */

var start = 0;
/* нулевой элемент массива */

var end = perPage;
var page = document.querySelector(".page-num");
var nextMax = document.querySelector(".next-max");
var totalPages = Math.ceil(brandPDF.length / perPage);
var btnNext = document.querySelector('.btn-next');
var btnPrev = document.querySelector('.btn-prev');
nextMax.innerHTML = totalPages;
var prev = document.querySelector(".prev");
var next = document.querySelector(".next"); // ///////

function renderBasic() {
  var toHTMLbasic = '';
  var htmlbasic = brandPDF.map(function (item, index) {
    start = (currenPage - 1) * perPage;
    end = currenPage * perPage;

    if (index >= start && index < end) {
      toHTMLbasic = "<div class = \"content2-list-section-wrapper\">\n                    <a href = \"".concat(item.brandhref, "\" title=\"").concat(item.brandname.slice(0, -4).split('_').join(' '), ". The parts list for sewing machine manual format pdf\">\n                        <div class = \"content2-list-section\">\n                            <div class = \"list-block-text\" >\n                                <p class = \"content2-list-text\">").concat(item.brandname.slice(0, -4).split('_').join(' '), " <span>pdf</span></p>\n                            </div> \n                            <div class = \"list-block-img\"> </div> \n                        </div> \n                    </a> \n                </div>");
      return toHTMLbasic;
    } else {
      return toHTMLbasic = '';
    }

    ;
  });
  document.querySelector(idpartslist).innerHTML = htmlbasic.join('');
  showItems();

  if (currenPage === totalPages) {
    next.classList.add("disable");
  } else {
    next.classList.remove("disable");
  }

  ;

  if (currenPage === 1) {
    prev.classList.add("disable");
  } else {
    prev.classList.remove("disable");
  }

  ;
}

;
renderBasic();

if (currenPage < totalPages) {
  btnNext.addEventListener('click', function () {
    currenPage++;
    renderBasic();
    document.location.reload();
  });
}

;

if (currenPage > 1) {
  btnPrev.addEventListener('click', function () {
    currenPage--;
    renderBasic();
    document.location.reload();
  });
}

; // function showItems() {
//     const url = new URL(document.location);
//     const searchParams = url.searchParams;
//     searchParams.delete("e");
//     window.history.pushState({}, '', url.toString());
//     page.innerHTML = currenPage;
//     updateURL(currenPage)
// };
// function updateURL(room) {
//     if (history.pushState) {
//         var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
//         var newUrl = baseUrl + '&e=' + room;
//         history.pushState(null, null, newUrl);
//     } else {
//         console.warn('History API не поддерживается');
//     };
// };

function showItems() {
  if (currenPage > 1) {
    var url = new URL(document.location); // console.log(url)

    var searchParams = url.searchParams;
    searchParams["delete"]("e");
    searchParams.append('e', currenPage);
    window.history.pushState({}, '', url.toString());
  }

  (function () {
    if (window.localStorage) {
      if (!localStorage.getItem('firstLoad')) {
        localStorage['firstLoad'] = true;
        window.location.reload();
      } else localStorage.removeItem('firstLoad');
    }
  })(); // window.history.pushState(null, null, url.toString());


  page.innerHTML = currenPage; //     updateURL(currenPage)
}

; // function updateURL(room) {
//     if (history.pushState) {
//         var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
//         var newUrl = baseUrl + '&e=' + room;
//         history.pushState(null, null, newUrl);
//     } else {
//         console.warn('History API не поддерживается');
//     };
// document.location.reload();
// };
// END /////////// paginatin ////////////////////////////////////////////////////////////////////////
// const toHTMLbasic = fruitbasic =>
//     `<div class = "content2-list-section-wrapper">
//         <a href = "${fruitbasic.brandhref}" title="${fruitbasic.brandname.slice(0, -4).split('_').join(' ')} Manuals to Sewing Machine Pdf" target="_ blank">
//             <div class = "content2-list-section">
//                 <div class = "list-block-text" >
//                     <p class = "content2-list-text">${fruitbasic.brandname.slice(0, -4).split('_').join(' ')} <span>pdf</span></p>
//                 </div> 
//                 <div class = "list-block-img"> </div> 
//             </div> 
//         </a> 
//     </div>`;
// function renderbasic() {
//     const htmlbasic = brandPDF.map(toHTMLbasic).join('')
//     document.querySelector(idpartslist).innerHTML = htmlbasic
// };
// renderbasic()
// /////////////////////////////////////////////////////////////////////// +++++++++++++
// let currenPage = Number(params.get("e"));
// let perPage = 4;
// console.log(currenPage)
// let start = 0;
// let end = perPage;
// const page = document.querySelector(".page-num");
// const prevMin = document.querySelector(".prev-min");
// const nextMax = document.querySelector(".next-max");
// const totalPages = Math.ceil(brandPDF.length / perPage);
// let num = Number(totalPages);
// console.log(num);
// const btnNext = document.querySelector('.btn-next');
// const btnPrev = document.querySelector('.btn-prev');
// prevMin.innerHTML = 1;
// nextMax.innerHTML = totalPages;
// function renderBasic() {
//     let toHTMLbasic = ''
//     const htmlbasic = brandPDF.map((item, index) => {
//         if (index >= start && index < end) {
//             toHTMLbasic =
//                 `<div class = "content2-list-section-wrapper">
//                     <a href = "${item.brandhref}" title="${item.brandname.slice(0, -4).split('_').join(' ')} Manuals to Sewing Machine Pdf" target="_ blank">
//                         <div class = "content2-list-section">
//                             <div class = "list-block-text" >
//                                 <p class = "content2-list-text">${item.brandname.slice(0, -4).split('_').join(' ')} <span>pdf</span></p>
//                             </div> 
//                             <div class = "list-block-img"> </div> 
//                         </div> 
//                     </a> 
//                 </div>`;
//             return toHTMLbasic
//         } else {
//             return toHTMLbasic = ''
//         };
//     });
//     document.querySelector(idpartslist).innerHTML = htmlbasic.join('');
//     showItems();
// };
// renderBasic();
// btnNext.addEventListener('click', () => {
//     currenPage++;
//     if (currenPage > totalPages) {
//         currenPage = totalPages;
//     }
//     start = (currenPage - 1) * perPage;
//     end = currenPage * perPage;
//     renderBasic();
// })
// btnPrev.addEventListener('click', () => {
//     currenPage--;
//     if (currenPage <= 1) {
//         currenPage = 1;
//     }
//     start = (currenPage - 1) * perPage;
//     end = currenPage * perPage;
//     renderBasic();
// })
// function showItems() {
//     const url = new URL(document.location);
//     const searchParams = url.searchParams;
//     searchParams.delete("e");
//     window.history.pushState({}, '', url.toString());
//     page.innerHTML = currenPage;
//     updateURL(currenPage)
// }
// function updateURL(yy) {
//     if (history.pushState) {
//         var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
//         var newUrl = baseUrl + '&e=' + yy;
//         history.pushState(null, null, newUrl);
//     } else {
//         console.warn('History API не поддерживается');
//     }
// }
// /////////////////////////////////////////************ */
// const url = new URL(document.location);
// const searchParams = url.searchParams;
// searchParams.delete("e");
// window.history.pushState({}, '', url.toString());
// location.href = location.href + "&e=" + currenPage
// ///////////////////////////////////////////////////   ////////////////////////////////////////
// const galleryItems = document.querySelector(".gallery-items").children;
// const prev = document.querySelector(".prev");
// const next = document.querySelector(".next");
// const page = document.querySelector(".page-num");
// const maxItem = 7;
// let index = 1;
// const pagination = Math.ceil(galleryItems.length / maxItem)
// let num = Number(pagination);
// console.log(num)
// prev.addEventListener("click", function() {
//     if (index > 1) {
//         index--;
//         check();
//         showItems();
//     }
// });
// next.addEventListener("click", function() {
//     if (index < num) {
//         index++;
//         check();
//         showItems();
//     }
// });
// function check() {
//     if (index == num) {
//         next.classList.add("disable");
//     } else {
//         next.classList.remove("disable")
//     };
//     if (index == 1) {
//         prev.classList.add("disable");
//     } else {
//         prev.classList.remove("disable")
//     }
//     console.log(index)
// }
// console.log(index)
// function showItems() {
//     for (let i = 0; i < galleryItems.length; i++) {
//         galleryItems[i].classList.remove("show");
//         galleryItems[i].classList.add("hide");
//         if (i >= (index * maxItem) - maxItem && i < index * maxItem) {
//             galleryItems[i].classList.remove("hide");
//             galleryItems[i].classList.add("show");
//         }
//         page.innerHTML = index;
//     }
// }
// window.onload = function() {
//     showItems();
//     check();
// }
// //////////////////////////////////////////////////////  /////////////////////////////////
// const url = new URL(document.location);
// const searchParams = url.searchParams;
// searchParams.delete("e"); // удалить параметр "e"
// window.history.pushState({}, '', url.toString());
// if (location.search.match(/([?&]param)=([^&#]*)/g)) {
//     location.search = location.search.replace(/([?&]param)=([^&#]*)/g, '$1=' + newvalue);
// } else if (location.search.match(/([&][^&#]*)=/g)) {
//     location.search = location.search + "&e=" + index;
// } else {
//     location.search = location.search + "?e=" + index;
// }