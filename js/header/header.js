let idheader = '#header';


// //////////////////////////////////////////////////

import { arryHEADER } from './header-DATA.js';

// //////////////////////////////////////////////////

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

// //////////////////////////////////////////
const toHTMLheader = fruitchapter =>
    `<div class="block-header-upper-level">
    <div class="quick-contact">
        <div class="contact-menu">
            <li class="contact-menu-li">
                <a href="#" class="contact-menu-a">+380953989891</a>
            </li>
            <li class="contact-menu-li">
                <a href="#" class="contact-menu-a">sima-biz@meta.ua</a>
            </li>
        </div>
    </div>

    <div class="language-selection">
        <div id="lg-lgen" class="flagen flag-en flag"></div>
        <div id="lg-lgua" class="flagua flag-ua flag"></div>
        <div id="lg-lgru" class="flagru flag-ru flag"></div>
    </div>

</div>
<div class="block-header-slider-level">
    <div class="container-slider">
        <img class="photo-slider" src="images/slider/header-slider-1.png" alt="">
        <img class="photo-slider" src="images/slider/header-slider-2.png" alt="">
        <img class="photo-slider" src="images/slider/header-slider-3.png" alt="">
        <img class="photo-slider" src="images/slider/header-slider-4.png" alt="">
        <img class="photo-slider" src="images/slider/header-slider-5.png" alt="">
        <img class="photo-slider" src="images/slider/header-slider-6.png" alt="">
        <div id="logo">
            <a id="defaultOpen" href="index.html?a=${fruitchapter.aimA}">
                <div class="block-logo">
                    <div class="block-logo-text">
                        <p class="logo-text">Sewing Industrial Machines Accessories</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</div>

<div class="block-header-menu-level">
    <div class="menu-section">
        <nav class="dws-menu nav-menu">
            <input type="checkbox" name="toggle" id="menu" class="toggleMenu">
            <label for="menu" class="toggleMenu"><i class="fa fa-bars"></i><p class="lng-lev-menu"></p></label>
            <ul id="level-menu">
                <li>
                    <input type="checkbox" name="toggle" class="toggleSubmenu" id="submit-m1">
                    <a href="#"><i class="fas fa-th-list"></i><p class="lng-lev-spare-parts"></p></a>
                    <label for="submit-m1" class="toggleSubmenu"><i class="fa"></i></label>
                    <ul id="sublevel-menu-one" class="level-li-one">
                        <li><a href="#"><p class="lng-lev-feed-dogs"></p></a></li>
                        <li><a href="#">Лапки</a></li>
                        <li><a href="#"><p class="lng-lev-loopers"></p></a></li>
                        <li><a href="#"><p class="lng-lev-knives"></p></a></li>
                        <li><a href="#">Лезвия раскройные</a></li>
                        <li><a href="#">Игольные пластины</a></li>
                        <li><a href="#"><p class="lng-lev-needle-clamp"></p></a></li>
                        <li><a href="#"><p class="lng-lev-gauge-set"></p></a></li>
                        <li><a href="#"><p class="lng-lev-hooks"></p></a></li>
                        <li><a href="#"><p class="lng-lev-bobbin-cases"></p></a></li>
                        <li><a href="#"><p class="lng-lev-bobbins"></p></a></li>
                        <li><a href="#">Нитенапровители</a></li>
                        <li><a href="#"><p class="lng-lev-machine-parts"></p></a></li>
                        <li><a href="#">Запчасти ВТО</a></li>
                        <li><a href="#">Запчасти ножи</a></li>
                        <li><a href="#"><p class="lng-lev-belts"></p></a></li>
                        <li><a href="#">Запчасти моторы</a></li>
                        <li><a href="#">Запчасти электрика</a></li>
                    </ul>
                </li>

                <li>
                    <input type="checkbox" name="toggle" class="toggleSubmenu" id="submit-m2">
                    <a href="#"><i class="fas fa-th-list"></i><p class="lng-lev-mechanization"></p></a>
                    <label for="submit-m2" class="toggleSubmenu"><i class="fa"></i></label>
                    <ul id="sublevel-menu-two" class="level-li-two">
                        <li><a href="#">Окантователи</a></li>
                        <li><a href="#">Приспособления</a></li>
                        <li><a href="#">Ограничители линейки</a></li>
                        <li><a href="#">Приспособления разные</a></li>
                        <li><a href="#">Светильники</a></li>
                        <li><a href="#">Бобиностойки</a></li>
                        <li><a href="#">Ножницы</a></li>
                        <li><a href="#">Лазарные линейки</a></li>
                        <li><a href="#">Мел и маркеры</a></li>
                        <li><a href="#">Иглы</a></li>
                    </ul>
                </li>

                <li>
                    <input type="checkbox" name="toggle" class="toggleSubmenu" id="submit-m3">
                    <a href="#"><i class="fas fa-th-list"></i><p class="lng-lev-">ххххххх</p></a>
                    <label for="submit-m3" class="toggleSubmenu"><i class="fa"></i></label>
                    <ul id="sublevel-menu-three" class="level-li-three">
                        <li><a href="#">Прямострочные машины</a></li>
                        <li><a href="#">Зиг-заг машины</a></li>
                        <li><a href="#">Оверложные машины</a></li>
                        <li><a href="#">Распошивальные машины</a></li>
                        <li><a href="#">Закрепочные машины</a></li>
                        <li><a href="#">Двоиного продвижения </a></li>
                        <li><a href="#">Тройного продвижения</a></li>
                        <li><a href="#">Петельные машины</a></li>
                        <li><a href="#">Пуговичные машины</a></li>
                        <li><a href="#">Колонковые машины</a></li>
                        <li><a href="#">Беечные машины</a></li>
                        <li><a href="#">Кетельные машины</a></li>
                        <li><a href="#">Мешкозашивочные машины</a></li>
                        <li><a href="#">Ультрозвуковые машины</a></li>
                    </ul>
                </li>

                <li>
                    <input type="checkbox" name="toggle" class="toggleSubmenu" id="submit-m4">
                    <a href="#"><i class="fas fa-th-list"></i><p class="lng-lev-service-center"></p></a>
                    <label for="submit-m4" class="toggleSubmenu"><i class="fa"></i></label>
                    <ul id="sublevel-menu-four" class="level-li-four">
                        <li><a href="#">Помощь при выборе</a></li>
                        <li><a href="#">Обучение работе</a></li>
                        <li><a href="#">Техническое обслуживание</a></li>
                        <li><a href="#">Ремонт расскройных ножей</a></li>
                        <li><a href="#">Ремонт парогенераторов</a></li>
                        <li><a href="#">Ремонт швейных машин</a></li>
                        <li><a href="#">Ремонт бытовых машин</a></li>
                        <li><a href="#">Возможные нейсправности</a></li>
                        <li><a href="#">Смазка швейной машины</a></li>
                    </ul>
                </li>

                <li>
                    <input type="checkbox" name="toggle" class="toggleSubmenu" id="submit-m5">
                    <a class="btn-lev-documentation" href="#"><i class="fas fa-th-list"></i><p class="lng-lev-documentation"></p></a>
                    <label for="submit-m5" class="toggleSubmenu"><i class="fa"></i></label>
                    <ul id="sublevel-menu-five" class="level-li-five">
                        <li><a href="index-page-catalog-pdf.html?a=home&b=documentation&c=catalogs-pdf&d=&e=&f="><p class="lng-lev-catalogs-pdf"></p></a></li>
                        <li><a href="index-page-species.html?a=home&b=documentation&c=parts-list-pdf&d=&e=&f="><p class="lng-lev-parts-list-pdf"></p></a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</div>`;

function renderHeader() {
    const htmlHeader = paramsUrl.map(toHTMLheader).join('')
    document.querySelector(idheader).innerHTML = htmlHeader
};
renderHeader()