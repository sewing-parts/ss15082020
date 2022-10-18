"use strict";

var idfooter = '#footer'; // //////////////////////////////////////////////////

var params = new URL(document.location).searchParams; // const paramsUrl = [{ item: params.get("item").split('-').join(' '), brand: params.get("brand").split('-').join(' '), lang: params.get("lang") }];

var paramsUrl = [{
  aimA: params.get("a"),
  aimB: params.get("b"),
  aimC: params.get("c"),
  aimD: params.get("d"),
  aimE: params.get("e"),
  aimF: params.get("f"),
  aimLANG: params.get("lang")
}]; // //////////////////////////////////////////

var toHTMLfooter = function toHTMLfooter(fruitchapter) {
  return "<div class=\"container\">\n    <div class=\"box\">\n        <h2 class=\"lng-footer-a\"></h2>\n        <div class=\"logo\">\n            <a href=\"index.html?a=".concat(fruitchapter.aimA, "\">\n                <div class=\"logo-wrapper\">\n                    <div class=\"logo-img\">\n                        <img src=\"images/11-aaa-waaa.png\" alt=\"\">\n                    </div>\n                    <div class=\"logo-text\">Sewing Industrial Machines Accessories</div>\n                </div>\n            </a>\n        </div>\n        <div class=\"info\">\n            <p class=\"text-info lng-footer-a-p1\"></p>\n            <p class=\"text-info lng-footer-a-p2\"></p>\n            <p class=\"text-info lng-footer-a-p3\"></p>\n            <p class=\"text-info lng-footer-a-p4\"></p>\n            <p class=\"text-info lng-footer-a-p5\"></p>\n            <p class=\"text-info lng-footer-a-p6\"></p>\n            <p class=\"text-info lng-footer-a-p7\"></p>\n        </div>\n    </div>\n\n    <div class=\"box\">\n        <h2 class=\"lng-footer-b\"></h2>\n        <div class=\"address\">\n            <a href=\"#\"><i class=\"fas fa-map-marker-alt fa-lg\"></i><p class=\"lng-footer-b-p1\">\u0423\u043A\u0440\u0430\u0438\u043D\u0430 , \u0417\u0430\u043F\u043E\u0440\u043E\u0436\u044C\u0435</p></a>\n            <a href=\"#\"><i class=\"fas fa-address-card\"></i><p class=\"lng-footer-b-p2\">\u0413\u0440\u0430\u0444\u0438\u043A \u0441 8-00 \u0434\u043E 20-00</p></a>\n            <a href=\"tel:+380953989891\"><i class=\"fas fa-phone-square-alt fa-lg\"></i><p class=\"lng-footer-b-p3\">+38095-39-89-891</p><i class=\"fab fa-telegram fab1\"></i><i class=\"fab fa-viber fab2\"></i></a>\n            <a href=\"tel:+380962343285\"><i class=\"fas fa-phone-square-alt fa-lg\"></i><p class=\"lng-footer-b-41\">+38096-23-43-285</p></a>\n            <a href=\"mailto:sewing77parts@gmail.com\"><i class=\"fas fa-envelope fa-lg\"></i><p  class=\"lng-footer-b-p5\">sewing77parts@gmail.com</p></a>\n            <a href=\"mailto:sima77sewing@gmail.com\"><i class=\"fas fa-envelope fa-lg\"></i><p  class=\"lng-footer-b-p6\">sima77sewing@gmail.com</p></a>\n        </div>\n    </div>\n\n    <div class=\"box\">\n        <h2 class=\"lng-footer-c\">\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438</h2>\n        <form>\n            <label for=\"mail\"><p class=\"lng-footer-c-p1\">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0451 \u0438\u043C\u044F</p>\n            <span class=\"span-icon\">&ensp; &#10034;</span></label>\n            <input type=\"text\" name=\"name\" id=\"name\" required>\n\n            <label for=\"phone\"><p class=\"lng-footer-c-p2\">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D</p>\n            <span class=\"span-icon\">&ensp; &#10034;</span></label>\n            <input type=\"tel\" name=\"tel\" id=\"tel\" required>\n\n            <label for=\"mail\"><p class=\"lng-footer-c-p3\">\u0412\u0438\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 email</p>\n            <span class=\"span-icon\">&ensp; &#10034;</span></label>\n            <input type=\"email\" name=\"email\" id=\"email\" required>\n\n            <label for=\"mess\"><p class=\"lng-footer-c-p4\">\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435</p>\n            <span class=\"span-icon\">&ensp; &#10034;</span>\n            </label>\n            <textarea name=\"mess\" id=\"mess\" rows=\"3\" required></textarea>\n\n            <button class=\"button lng-footer-c-button\" type=\"submit\">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button>\n        </form>\n    </div>\n</div>\n<div class=\"author\">\n    <p><span class=\"author-text-one\">Dev AT</span> copyright <span class=\"author-text-two\">&copy;</span> 2020</p>\n</div>");
};

function renderFooter() {
  var htmlFooter = paramsUrl.map(toHTMLfooter).join('');
  document.querySelector(idfooter).innerHTML = htmlFooter;
}

;
renderFooter();