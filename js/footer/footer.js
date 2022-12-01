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
                    <div class="logo-text">
                        <p>Sewing Industrial Machines Accessories</p>
                    </div>
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
            <img src="images/footer/check-mark-10-256.png" alt="">
            <p class="lng-footer-message-text connection-text"></p>
            </div>
            <div class="connection-two">
                <div class="block">
                    <button class="modal__btn _modal-open" data-modal-open="modal-1">
                        <div class="button-img">
                            <img src="images/footer/reply-256-blu.png" alt="">
                        </div>    
                        <div class="button-p">
                            <p class="lng-link-modal-message"></p>
                        </div>   
                    </button>
                </div>
            </div>
        </div>
        <div class="connection">
            <div class="connection-one">
            <img src="images/footer/check-mark-10-256.png" alt="">
            <p class="lng-footer-delivery-text connection-text"></p>
            </div>
            <div class="connection-two">
                <div class="block">
                    <button class="modal__btn _modal-open" data-modal-open="modal-2">
                        <div class="button-img">
                            <img src="images/footer/car-28-256.png" alt="">
                        </div>
                        <div class="button-p">
                            <p class="lng-link-modal-delivery"></p>
                        </div>     
                    </button>
                </div>
            </div>
        </div>
        <div class="connection">
            <div class="connection-one">
            <img src="images/footer/check-mark-10-256.png" alt="">
            <p class="lng-footer-payment-text connection-text"></p>
            </div>
            <div class="connection-two">
                <div class="block">
                    <button class="modal__btn _modal-open" data-modal-open="modal-3">
                        <div class="button-img">
                            <img src="images/footer/mastercard-256.png" alt="">
                        </div>
                        <div class="button-p">
                            <p class="lng-link-modal-payment"></p>
                        </div>   
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="author">
    <p><span class="author-text-one">Dev AT</span> copyright <span class="author-text-two">&copy;</span> 2020</p>
</div>`;



function renderFooter() {
    const htmlFooter = paramsUrl.map(toHTMLfooter).join('')
    document.querySelector(idfooter).innerHTML = htmlFooter
};
renderFooter()