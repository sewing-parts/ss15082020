let idfooter = '#footer';


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
const toHTMLfooter = fruitchapter =>
    `<div class="container">
    <div class="box">
        <h2 class="lng-footer-a"></h2>
        <div class="logo">
            <a href="index.html?a=${fruitchapter.aimA}">
                <div class="logo-wrapper">
                    <div class="logo-img">
                        <img src="images/11-aaa-waaa.png" alt="">
                    </div>
                    <div class="logo-text">Sewing Industrial Machines Accessories</div>
                </div>
            </a>
        </div>
        <div class="info">
            <p class="text-info lng-footer-a-p1"></p>
            <p class="text-info lng-footer-a-p2"></p>
            <p class="text-info lng-footer-a-p3"></p>
            <p class="text-info lng-footer-a-p4"></p>
            <p class="text-info lng-footer-a-p5"></p>
            <p class="text-info lng-footer-a-p6"></p>
            <p class="text-info lng-footer-a-p7"></p>
        </div>
    </div>

    <div class="box">
        <h2 class="lng-footer-b"></h2>
        <div class="address">
            <a href="#"><i class="fas fa-map-marker-alt fa-lg"></i><p class="lng-footer-b-p1"></p></a>
            <a href="#"><i class="fas fa-address-card"></i><p class="lng-footer-b-p2"></p></a>
            <a href="tel:+380953989891"><i class="fas fa-phone-square-alt fa-lg"></i><p class="lng-footer-b-p3"></p><i class="fab fa-telegram fab1"></i><i class="fab fa-viber fab2"></i></a>
            <a href="tel:+380962343285"><i class="fas fa-phone-square-alt fa-lg"></i><p class="lng-footer-b-p4"></p></a>
            <a href="mailto:sewing77parts@gmail.com"><i class="fas fa-envelope fa-lg"></i><p  class="lng-footer-b-p5"></p></a>
            <a href="mailto:sima77sewing@gmail.com"><i class="fas fa-envelope fa-lg"></i><p  class="lng-footer-b-p6"></p></a>
        </div>
    </div>

    <div class="box">
        <h2 class="lng-footer-c"></h2>
        <form>
            
        </form>
    </div>
</div>
<div class="author">
    <p><span class="author-text-one">Dev AT</span> copyright <span class="author-text-two">&copy;</span> 2020</p>
</div>`;


// <label for="mail"><p class="lng-footer-c-p1"></p>
// <span class="span-icon">&ensp; &#10034;</span></label>
// <input type="text" name="name" id="name" required>

// <label for="phone"><p class="lng-footer-c-p2"></p>
// <span class="span-icon">&ensp; &#10034;</span></label>
// <input type="tel" name="tel" id="tel" required>

// <label for="mail"><p class="lng-footer-c-p3"></p>
// <span class="span-icon">&ensp; &#10034;</span></label>
// <input type="email" name="email" id="email" required>

// <label for="mess"><p class="lng-footer-c-p4"></p>
// <span class="span-icon">&ensp; &#10034;</span>
// </label>
// <textarea name="mess" id="mess" rows="3" required></textarea>

// <button class="button lng-footer-c-button" type="submit"></button>

function renderFooter() {
    const htmlFooter = paramsUrl.map(toHTMLfooter).join('')
    document.querySelector(idfooter).innerHTML = htmlFooter
};
renderFooter()