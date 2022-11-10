"use strict";

var _indexPageCategoryProductDATA = require("./index-page-category-product-DATA.js");

///////////////////////////////
// const idchapter = '#chaptercatalog'  
// const idcatalog = '#catalogbrand'
var idcrumbs = '#crumbs'; // const idchapter = '#chapter-list';
// const idpartslist = '#list-positions';

var iddiscription = '#discription';
var idcategoryproduct = '#category-product'; //////////////////////////////

var params = new URL(document.location).searchParams; // const paramsss = [{ item: params.get("item").split('-').join(' '), brand: params.get("brand").split('-').join(' ') }, ];
// const paramsss = [{ item: params.get("item").split('-').join(' '), brand: params.get("brand").split('-').join(' ') }, ];

var paramsUrl = [{
  aimA: params.get("a"),
  aimB: params.get("b"),
  aimC: params.get("c"),
  aimD: params.get("d"),
  aimE: params.get("e"),
  aimF: params.get("f"),
  aimLang: params.get("lang")
}]; //////////////////////////////

var categoryPRODUCT = [];

switch (params.get("c")) {
  case 'loopers':
    categoryPRODUCT = _indexPageCategoryProductDATA.categoryLOOPERS.reverse();
    break;
}

var dataRequestC = new URL(document.location).searchParams.get("c");
var dataRequestD = new URL(document.location).searchParams.get("d");
var categoryPRODUCTresult = categoryPRODUCT.filter(function (item, index, array) {
  return item.c === dataRequestC && item.d === dataRequestD;
});
categoryPRODUCTresult = categoryPRODUCTresult.reverse();
console.log(categoryPRODUCTresult); /////////////////////////////
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

var toHTMLcrumbs = function toHTMLcrumbs(fruitchapter) {
  return "<ul class=\"crumbs-text\">\n            <li class=\"lev-".concat(fruitchapter.aimA, "\"><a class=\"lng-lev-").concat(fruitchapter.aimA, "\" href=\"index.html?a=").concat(fruitchapter.aimA, "\"></a><i class=\"fas fa-angle-right\"></i></li>\n            <li class=\"lev-").concat(fruitchapter.aimB, "\"><a class=\"lng-lev-").concat(fruitchapter.aimB, "\" href=\"#\"></a><i class=\"fas fa-angle-right\"></i></li>\n            <li class=\"lev-").concat(fruitchapter.aimC, "\"><a class=\"lng-lev-").concat(fruitchapter.aimC, "\" href=\"index-page-species-section.html?a=").concat(fruitchapter.aimA, "&b=").concat(fruitchapter.aimB, "&c=").concat(fruitchapter.aimC, "&d=&e=&f=\"></a><i class=\"fas fa-angle-right\"></i></li>\n            <li class=\"lev-").concat(fruitchapter.aimD, "\"><a class=\"lng-lev-").concat(fruitchapter.aimD, "\" href=\"#\">").concat(fruitchapter.aimD.split('-').join(' '), "</a><i class=\"fas fa-angle-right\"></i></li>\n            <li class=\"lev-").concat(fruitchapter.aimE, "\"><a class=\"lng-lev-").concat(fruitchapter.aimE, "\" href=\"#\">").concat(fruitchapter.aimE, "</a><i class=\"fas fa-angle-right\"></i></li>\n            <li class=\"lev-").concat(fruitchapter.aimF, "\"><a class=\"lng-lev-").concat(fruitchapter.aimF, "\" href=\"#\"></a><i class=\"fas fa-angle-right\"></i></li>\n        </ul>");
};

function renderCrumbs() {
  var htmlcrumbs = paramsUrl.map(toHTMLcrumbs).join('');
  document.querySelector(idcrumbs).innerHTML = htmlcrumbs;
}

;
renderCrumbs(); //////////////////////////////////////////////
// const toHTMLchapter = fruitchapter =>
//     `<h1 class="content1-description-title">${fruitchapter.item}</h1>
//     <h2 class="content2-list-title">${fruitchapter.brand}</h2>`
// function renderchapter() {
//     const htmlchapter = paramsss.map(toHTMLchapter).join('')
//     document.querySelector(idchapter).innerHTML = htmlchapter
// }
// renderchapter()
////////////////////////////

var toHTMLdiscription = function toHTMLdiscription(fruitchapter) {
  return "<div class=\"dsn\">\n        <h1 class=\"title-shadow-one lng-lev-".concat(fruitchapter.aimC, "\"></h1>\n        <p class=\"title-shadow-two lng-lev-").concat(fruitchapter.aimD, "\">").concat(fruitchapter.aimD.split('-').join(' '), "</p>\n    </div>");
};

function renderDiscription() {
  var htmlDiscription = paramsUrl.map(toHTMLdiscription).join('');
  document.querySelector(iddiscription).innerHTML = htmlDiscription;
}

;
renderDiscription(); /////////////////////////////
// START /////////// paginatin ////////////////////////////////////////////////////////////////////////

var currenPage = Number(new URL(document.location).searchParams.get("e"));
var perPage = 15;
/*колличество на странице */

var start = 0;
/* нулевой элемент массива */

var end = perPage;
var page = document.querySelector(".page-num");
var nextMax = document.querySelector(".next-max");
var totalPages = Math.ceil(categoryPRODUCTresult.length / perPage);
var btnNext = document.querySelector('.btn-next');
var btnPrev = document.querySelector('.btn-prev');
nextMax.innerHTML = totalPages;
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
renderBasic();

function renderBasic() {
  var toHTMLbasic = '';
  var htmlbasic = categoryPRODUCTresult.map(function (item, index) {
    start = (currenPage - 1) * perPage;
    end = currenPage * perPage;

    if (index >= start && index < end) {
      toHTMLbasic = "<a href=\"https://www.google.com.ua/?gws_rd=ssl\">\n                    <section class=\"product product-".concat(item.widthxheight, "\">\n                        <div class=\"block-img block-img-").concat(item.widthxheight, "\">\n                            <img class=\"img\" src=\"").concat(item.imgSrc, "\" alt=\"").concat(item.c, " ").concat(item.f, "\">\n                        </div>\n                        <div class=\"block-text\">\n                            <p class=\"lng-lev-").concat(item.onlyc, " text\">").concat(item.onlyc, "</p>\n                            <p class=\"lng-lev-").concat(item.d, " text\">").concat(item.d.split('-').join(' '), "</p>\n                            <p class=\"lng-lev-").concat(item.f, " text\">").concat(item.f, "</p>\n                        </div>\n                        <div>\n                            <p class=\"lng-lev-more-details text text-sp\"></p>\n                        </div>\n                    </section>\n                </a>"); // `<div class = "content2-list-section-wrapper">
      //     <a href = "${item.brandhref}" title="${item.brandname.slice(0, -4).split('_').join(' ')}. The parts list for sewing machine manual format pdf">
      //         <div class = "content2-list-section">
      //             <div class = "list-block-text" >
      //                 <p class = "content2-list-text">${item.brandname.slice(0, -4).split('_').join(' ')} <span>pdf</span></p>
      //             </div> 
      //             <div class = "list-block-img"> </div> 
      //         </div> 
      //     </a> 
      // </div>`;

      return toHTMLbasic;
    } else {
      return toHTMLbasic = '';
    }

    ;
  });
  document.querySelector(idcategoryproduct).innerHTML = htmlbasic.join('');
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

; // renderBasic();

btnNext.addEventListener('click', function () {
  if (currenPage < totalPages) {
    currenPage++;
    renderBasic();
    document.location.reload();
  }

  ;
});
btnPrev.addEventListener('click', function () {
  if (currenPage > 1) {
    currenPage--;
    renderBasic();
    document.location.reload();
  }

  ;
}); // START /// формируем  url с текущей страницей без перезагрузки

function showItems() {
  if (history.pushState) {
    var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    var searchPAPAMS = "?" + "a=" + new URL(document.location).searchParams.get("a") + "&" + "b=" + new URL(document.location).searchParams.get("b") + "&" + "c=" + new URL(document.location).searchParams.get("c") + "&" + "d=" + new URL(document.location).searchParams.get("d") + "&" + "e=" + currenPage + "&" + "f=" + new URL(document.location).searchParams.get("f") + "&" + "lang=" + new URL(document.location).searchParams.get("lang");
    var newUrl = baseUrl + searchPAPAMS;
    history.pushState(null, null, newUrl);
  } else {
    console.warn('History API не поддерживается');
  }

  ;
  page.innerHTML = currenPage;
}

; // END /// формируем  url с текущей страницей без перезагрузки
// START /// возращаемся по кнопке в браузоре назад со страницы

var baseUrlpopstate;
var searchPAPAMSpopstate;
var urlPapamsB = new URL(document.location).searchParams.get("b");
addEventListener("popstate", function (e) {
  if (urlPapamsB === "" || urlPapamsB === null || typeof urlPapamsB === "undefined") {
    baseUrlpopstate = window.location.protocol + "//" + window.location.host + "/index.html";
    searchPAPAMSpopstate = "?" + "a=" + new URL(document.location).searchParams.get("a") + "&" + "lang=" + new URL(document.location).searchParams.get("lang");
  } else {
    baseUrlpopstate = window.location.protocol + "//" + window.location.host + "/index-page-species-section.html";
    searchPAPAMSpopstate = "?" + "a=" + new URL(document.location).searchParams.get("a") + "&" + "b=" + new URL(document.location).searchParams.get("b") + "&" + "c=" + new URL(document.location).searchParams.get("c") + "&" + "d=" + "&" + "e=" + "&" + "f=" + "&" + "lang=" + new URL(document.location).searchParams.get("lang");
  }

  var newUrlpopstate = baseUrlpopstate + searchPAPAMSpopstate;
  window.location.replace(newUrlpopstate);
}, false); // END /// возращаемся по кнопке в браузоре назад со страницы