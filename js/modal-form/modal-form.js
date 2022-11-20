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
const toHTMLmodalForm = fruitchapter =>
    `<div class="_modal" data-modal="modal-1">
    <div class="modal-bg">
        <div class="modal-body">
            <div class="modal-close"><img src="images/close-cross.png" alt=""></div>
            <div class="modal-content modal-callback">
                <div class="modal-callback__title modal-cotainer">
                    <div class="container">
                        <div class="content">
                            <div class="left-side">
                                <div class="address details">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="topic">Адрес</div>
                                    <div class="text-one">г. Москва</div>
                                    <div class="text-two">Пресненская наб., 8 стр. 1</div>
                                </div>
                                <div class="phone details">
                                    <i class="fas fa-phone-alt"></i>
                                    <div class="topic">Телефон</div>
                                    <div class="text-one">8-800-000-00-00</div>
                                    <div class="text-two">8-900-000-00-00</div>
                                </div>
                                <div class="email details">
                                    <i class="fas fa-envelope"></i>
                                    <div class="topic">Email</div>
                                    <div class="text-one">support@site.com</div>
                                    <div class="text-two">admin@site.com</div>
                                </div>
                            </div>
                            <div class="right-side">
                                <div class="topic-text">Отправьте нам сообщение</div>
                                <p>
                                    Если у вас есть какие-то вопросы или предложения по сотрудничеству - заполните форму ниже
                                </p>
                                <form action="#">
                                    <div class="input-box">
                                        <input type="text" placeholder="Ваше имя" />
                                    </div>
                                    <div class="input-box">
                                        <input type="text" placeholder="Введите email" />
                                    </div>
                                    <div class="input-box">
                                        <input type="text" placeholder="Введите телефон" />
                                    </div>
                                    <div class="input-box message-box">
                                        <textarea placeholder="Сообщение"></textarea>
                                    </div>
                                    <div class="button">
                                        <input type="button" value="Отправить" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

function renderModalForm() {
    const htmlModalForm = paramsUrl.map(toHTMLmodalForm).join('')
    document.querySelector(idmodalform).innerHTML = htmlModalForm
};
renderModalForm()

// ////////////////////////////////////////////

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