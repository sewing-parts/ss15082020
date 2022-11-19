//  START /////   переключение фоток  //////////////////////////////////////////////////////////////////
document.body.onclick = function(event) {
    event = event || window.event;
    if (event.target.classList.contains('goods-min')) {
        let allDivs = document.querySelectorAll('.picture-min div');
        for (let i = 0; i < allDivs.length; i++) {
            allDivs[i].classList.remove('active');
        }
        document.getElementById('goods-max').src = event.target.src;
        event.target.parentElement.classList.add('active');
    }
};
//  END /////   переключение фоток  //////////////////////////////////////////////////////////////////


// 
// 
// 

const idcrumbs = '#crumbs'

//////////////////////////////



let params = (new URL(document.location)).searchParams;
// const paramsss = [{ item: params.get("item").split('-').join(' '), brand: params.get("brand").split('-').join(' ') }, ];
// const paramsss = [{ item: params.get("item").split('-').join(' '), brand: params.get("brand").split('-').join(' ') }, ];

const paramsUrl = [{

    aimA: params.get("a"),
    aimB: params.get("b"),
    aimC: params.get("c"),
    aimD: params.get("d"),
    aimE: params.get("e"),
    aimF: params.get("f"),
    aimLang: params.get("lang"),
}];


//////////////////////////////

const toHTMLcrumbs = fruitchapter =>
    `<ul class="crumbs-text">
            <li class="lev-${fruitchapter.aimA}"><a class="lng-lev-${fruitchapter.aimA}" href="index.html?a=${fruitchapter.aimA}"></a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimB}"><a class="lng-lev-${fruitchapter.aimB}" href="#"></a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimC}"><a class="lng-lev-${fruitchapter.aimC}" href="index-page-species-section.html?a=${fruitchapter.aimA}&b=${fruitchapter.aimB}&c=${fruitchapter.aimC}&d=&e=&f="></a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimD}"><a class="lng-lev-${fruitchapter.aimD}" href="index-page-category-product.html?a=${fruitchapter.aimA}&b=${fruitchapter.aimB}&c=${fruitchapter.aimC}&d=${fruitchapter.aimD}&e=1&f=">${fruitchapter.aimD.split('-').join(' ')}</a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimE}"><a class="lng-lev-${fruitchapter.aimE}" href="index-page-category-product.html?a=${fruitchapter.aimA}&b=${fruitchapter.aimB}&c=${fruitchapter.aimC}&d=${fruitchapter.aimD}&e=${fruitchapter.aimE}&f=">${fruitchapter.aimE}</a><i class="fas fa-angle-right"></i></li>
            <li class="lev-${fruitchapter.aimF}"><a class="lng-lev-${fruitchapter.aimF}" href="index-page-product-card.html?a=${fruitchapter.aimA}&b=${fruitchapter.aimB}&c=${fruitchapter.aimC}&d=${fruitchapter.aimD}&e=${fruitchapter.aimE}&f=${fruitchapter.aimF}">${fruitchapter.aimF}</a></li>
        </ul>`;

function renderCrumbs() {
    const htmlcrumbs = paramsUrl.map(toHTMLcrumbs).join('')
    document.querySelector(idcrumbs).innerHTML = htmlcrumbs
};
renderCrumbs()


//////////////////////////////////////////////
//  
setTimeout(fff, 10);


function fff() {
    let textOneArry = document.getElementsByClassName('purpose-text-d');
    let resTEXTone = textOneArry[0].innerText;
    console.log(resTEXTone);

    let textTwoArry = document.getElementsByClassName('purpose-text-f');
    let resTEXTtwo = textTwoArry[0].innerText;
    console.log(resTEXTtwo);

    let textThreeArry = document.getElementsByClassName('purpose-text-c');
    let resTEXTthree = textThreeArry[0].innerText;
    console.log(resTEXTthree);

    let resss = resTEXTthree + " " + resTEXTone + " " + resTEXTtwo;
    console.log(resss);

    const form = document.querySelector('.purpose-text-zero');
    // form.textContent += resss
    form.textContent = resss;
}