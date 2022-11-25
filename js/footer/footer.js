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
            
        </div>
    </div>

    <div class="box">
        <h2 class="lng-footer-b"></h2>
        <div class="address">
            <a href="#">
                <div class="block">
                    <div class="block-a">
                        <img src="images/footer/pin-8-256.png" alt="" >
                    </div>
                    <div class="block-b">
                        <p class="lng-footer-b-p1"></p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div class="block">
                    <div class="block-a">
                        <img src="images/footer/worldwide-location-256.png" alt="" >
                    </div>
                    <div class="block-b">
                        <p class="lng-footer-b-p2"></p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div class="block">
                    <div class="block-a">
                        <img src="images/footer/time-8-256.png" alt="" >
                    </div>
                    <div class="block-b">
                        <p class="lng-footer-b-p3"></p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div class="block">
                    <div class="block-a">
                        <img src="images/footer/alarm-clock-256.png" alt="" >
                    </div>
                    <div class="block-b">
                        <p class="lng-footer-b-p4"></p>
                    </div>
                </div>
            </a>
            
        </div>
    </div>

    <div class="box">
        <h2 class="lng-footer-c"></h2>
        <div class="address">
            
            <a href="tel:+380953989891">
                <div class="block">
                    <div class="block-a">
                        <img src="images/footer/phone-24-256.png" alt="" >
                    </div>
                    <div class="block-b">
                        <p class="lng-footer-c-p1"></p>
                    </div>
                    <div class="block-c">
                        <img src="images/footer/telegram-256.png" alt="" >
                    </div>
                    <div class="block-c">
                        <img src="images/footer/viber-4-256.png" alt="" >
                    </div>
                </div>
            </a>
            <a href="tel:+380962343285">
                <div class="block">
                    <div class="block-a">
                        <img src="images/footer/phone-24-256.png" alt="" >
                    </div>
                    <div class="block-b">
                        <p class="lng-footer-c-p2"></p>
                    </div>
                </div>
            </a>
            <a href="mailto:sewing77parts@gmail.com">
                <div class="block">
                    <div class="block-a">
                        <img src="images/footer/mail-256.png" alt="" >
                    </div>
                    <div class="block-b">
                        <p class="lng-footer-c-p3"></p>
                    </div>
                </div>
            </a>
            <a href="mailto:sima77sewing@gmail.com">
                <div class="block">
                    <div class="block-a">
                        <img src="images/footer/mail-256.png" alt="" >
                    </div>
                    <div class="block-b">
                        <p class="lng-footer-c-p4"></p>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <div class="box">
        <h2 class="lng-footer-d"></h2>
        <div class="connection">
            <div class="connection-one">
            <p class="lng-footer-connection-text connection-text"></p>
            </div>
            <div class="connection-two">
                <div class="block">
                    <button class="modal__btn _modal-open" data-modal-open="modal-1">
                        <img src="images/message-request.png" alt="">
                        <p class="lng-footer-connection-button"></p>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="author">
    <p><span class="author-text-one">Dev AT</span> copyright <span class="author-text-two">&copy;</span> 2020</p>
</div>`;

// 

{
    /* <a href="#"><i class="fas fa-map-marker-alt fa-lg"></i><p class="lng-footer-b-p1"></p></a>
                <a href="#"><i class="fas fa-address-card"></i><p class="lng-footer-b-p2"></p></a>
                <a href="tel:+380953989891"><i class="fas fa-phone-square-alt fa-lg"></i><p class="lng-footer-b-p3"></p><i class="fab fa-telegram fab1"></i><i class="fab fa-viber fab2"></i></a>
                <a href="tel:+380962343285"><i class="fas fa-phone-square-alt fa-lg"></i><p class="lng-footer-b-p4"></p></a>
                <a href="mailto:sewing77parts@gmail.com"><i class="fas fa-envelope fa-lg"></i><p  class="lng-footer-b-p5"></p></a> */
}

{
    /* <p class="text-info lng-footer-a-p2"></p>
                <p class="text-info lng-footer-a-p3"></p>
                <p class="text-info lng-footer-a-p4"></p>
                <p class="text-info lng-footer-a-p5"></p>
                <p class="text-info lng-footer-a-p6"></p>
                <p class="text-info lng-footer-a-p7"></p> */
}
// 







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