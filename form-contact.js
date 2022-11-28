const form = document.forms["form"];
const formArr = Array.from(form);
const validFormArr = [];
const button = form.elements["button"];

formArr.forEach((el) => {
    if (el.hasAttribute("data-reg")) {
        el.setAttribute("is-valid", "0");
        validFormArr.push(el);
    }
});

form.addEventListener("input", inputHandler);
form.addEventListener("submit", formCheck);

function inputHandler({ target }) {
    if (target.hasAttribute("data-reg")) {
        inputCheck(target);
    }
}

function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    if (reg.test(inputValue)) {
        el.setAttribute("is-valid", "1");
        el.style.border = "2px solid rgb(0, 196, 0)";
    } else {
        el.setAttribute("is-valid", "0");
        el.style.border = "2px solid rgb(255, 0, 0)";
    }
}

function formCheck(e) {
    e.preventDefault();
    const allValid = [];
    validFormArr.forEach((el) => {
        allValid.push(el.getAttribute("is-valid"));
    });
    const isAllValid = allValid.reduce((acc, current) => {
        return acc && current;
    });
    if (!Boolean(Number(isAllValid))) {
        alert("Заполните поля правильно!");
        return;
    }
    formSubmit();
}

async function formSubmit() {
    const data = serializeForm(form);
    const response = await sendData(data);
    if (response.ok) {
        let result = await response.json();
        alert(result.message);
        formReset();
    } else {
        alert("Код ошибки: " + response.status);
    }
}

function serializeForm(formNode) {
    return new FormData(form);
}

async function sendData(data) {
    return await fetch("send_mail.php", {
        method: "POST",
        body: data,
    });
}

function formReset() {
    form.reset();
    validFormArr.forEach((el) => {
        el.setAttribute("is-valid", 0);
        el.style.border = "none";
    });
}

// start //////////// file

let fileInput = document.getElementById("file-input");
let fileList = document.getElementById("files-list");
let numOfFiles = document.getElementById("num-of-files");

fileInput.addEventListener("change", () => {
    fileList.innerHTML = "";
    numOfFiles.textContent = `${fileInput.files.length} Files Selected`;

    for (i of fileInput.files) {
        let reader = new FileReader();
        let listItem = document.createElement("li");
        let fileName = i.name;
        let fileSize = (i.size / 1024).toFixed(1);
        listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}KB</p>`;

        if (fileSize >= 1024) {
            fileSize = (fileSize / 1024).toFixed(1)
            listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}MB</p>`;
        }
        fileList.appendChild(listItem);
    }
});



// end //////////// file