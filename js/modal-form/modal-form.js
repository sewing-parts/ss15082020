let idmodalform = '#modal-form';


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
// const toHTMLmodalForm = fruitchapter =>
//     ``;

// function renderModalForm() {
//     const htmlModalForm = paramsUrl.map(toHTMLmodalForm).join('')
//     document.querySelector(idmodalform).innerHTML = htmlModalForm
// };
// renderModalForm()




// START //////////////////////////////////////////// модальное окно 
const modalBtns = document.querySelectorAll('._modal-open');
const modals = document.querySelectorAll('._modal');
const body = document.body;


function openModal(elem) {
    elem.classList.add('_active');
    body.classList.add('_locked')
};


function closeModal(e) {
    if (e.target.classList.contains('modal-close') || e.target.closest('.modal-close') || e.target.classList.contains('modal-bg')) {
        e.target.closest('._modal').classList.remove('_active')
        body.classList.remove('_locked')
    }
};

modalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let data = e.target.dataset.modalOpen;
        console.log(data)
        modals.forEach(modal => {
            if (modal.dataset.modal == data || modal.dataset.modal == e.target.closest('._modal-open').dataset.modalOpen) {
                openModal(modal)
            }
        });
    });
});

modals.forEach(modal => {
    modal.addEventListener('click', e => closeModal(e))
});

window.addEventListener('keydown', e => {
    modals.forEach(modal => {
        if (e.key === "Escape" && modal.classList.contains('_active')) {
            modal.classList.remove('_active')
            body.classList.remove('_locked')
        }
    });
});
// END ////////////////////////////////////////////////////////////  модальное окно




// START ////////////////////////////////////////////////////////////  форма

// const form = document.forms["form"];
// const button = form.elements["button"];


// const inputArr = Array.from(form);
// const validInputArr = [];


// inputArr.forEach((el) => {
//     if (el.hasAttribute("data-reg")) {
//         el.setAttribute("is-valid", "0")
//         validInputArr.push(el);
//     }
// });


// console.log(validInputArr)


// form.addEventListener("input", inputHandler);
// button.addEventListener('click', buttonHandler);



// function inputHandler({ target }) {
//     if (target.hasAttribute("data-reg")) {
//         inputCheck(target);
//     }
// };

// function inputCheck(el) {
//     const inputValue = el.value;
//     const inputReg = el.getAttribute("data-reg");
//     const reg = new RegExp(inputReg);

//     console.log(inputValue, reg)

//     if (reg.test(inputValue)) {
//         el.style.border = "2px solid rgb(0, 196, 0)";
//         el.setAttribute("is-valid", "1")
//     } else {
//         el.style.border = "2px solid rgb(255, 0, 0)";
//         el.setAttribute("is-valid", "0")
//     }
// }

// function buttonHandler(e) {
//     const isAllValid = [];
//     validInputArr.forEach((el) => {
//         isAllValid.push(el.getAttribute("is-valid"));
//     });
//     // console.log(isAllValid)
//     const isValid = isAllValid.reduce((acc, current) => {
//         return acc && current;
//     });
//     // console.log(isValid)
//     if (!Boolean(Number(isValid))) {
//         e.preventDefault();
//     }
// }







// END ////////////////////////////////////////////////////////////  форма