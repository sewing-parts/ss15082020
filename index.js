///////////////////////////////
const idcourse = '#coursebonis'
const coursePDF = [{ coursehref: 'bonis', coursetitle: 'parts list' }, ]


///////////////////////////////
const idchapter = '#chapterbonis'
const chapterPDF = [{ items: 'bonis', chap: 'parts list' }, ]

//////////////////////////////
const idpl = '#plbonis'
const bonisPDF = [
    { bonistitle: 'Bonis_3000_series_Parts_List', bonishref: 'https://drive.google.com/file/d/1zQRolSN7CJ1A2V4P_SfHDVopjnlx3eQS/view?usp=sharing' },
    { bonistitle: 'Bonis_3012_3032_BD_Parts_List', bonishref: 'https://drive.google.com/file/d/1zLLS9xVhBqH0f7E-Lv9flPqp-dMnA8YC/view?usp=sharing' },
    { bonistitle: 'Bonis_3014_3010_Parts_List', bonishref: 'https://drive.google.com/file/d/1zQRolSN7CJ1A2V4P_SfHDVopjnlx3eQS/view?usp=sharing' },
    { bonistitle: 'Bonis_3032_3027_Parts_List', bonishref: 'https://drive.google.com/file/d/1zLLS9xVhBqH0f7E-Lv9flPqp-dMnA8YC/view?usp=sharing' },
    { bonistitle: 'Bonis_3051_3064_Parts_List', bonishref: 'https://drive.google.com/file/d/1zQRolSN7CJ1A2V4P_SfHDVopjnlx3eQS/view?usp=sharing' },
    { bonistitle: 'Bonis_3065_3066_Parts_List', bonishref: 'https://drive.google.com/file/d/1zLLS9xVhBqH0f7E-Lv9flPqp-dMnA8YC/view?usp=sharing' },
    { bonistitle: 'Bonis_3067_3068_Parts_List', bonishref: 'https://drive.google.com/file/d/1zQRolSN7CJ1A2V4P_SfHDVopjnlx3eQS/view?usp=sharing' },
    { bonistitle: 'Bonis_A21_A18_A15_Parts_List', bonishref: 'https://drive.google.com/file/d/1zLLS9xVhBqH0f7E-Lv9flPqp-dMnA8YC/view?usp=sharing' },
    { bonistitle: 'Bonis_A21_A18_A16_Parts_List', bonishref: 'https://drive.google.com/file/d/1zQRolSN7CJ1A2V4P_SfHDVopjnlx3eQS/view?usp=sharing' },
    { bonistitle: 'Bonis_B-27_B-32_Parts_List', bonishref: 'https://drive.google.com/file/d/1zLLS9xVhBqH0f7E-Lv9flPqp-dMnA8YC/view?usp=sharing' },
    { bonistitle: 'Bonis_BG-12_BG-14_Parts_List', bonishref: 'https://drive.google.com/file/d/1zQRolSN7CJ1A2V4P_SfHDVopjnlx3eQS/view?usp=sharing' },
    { bonistitle: 'Bonis_BH-12_BD-32_Parts_List', bonishref: 'https://drive.google.com/file/d/1zLLS9xVhBqH0f7E-Lv9flPqp-dMnA8YC/view?usp=sharing' },
    { bonistitle: 'Bonis_BK-10_BK-12_Parts_List', bonishref: 'https://drive.google.com/file/d/1zQRolSN7CJ1A2V4P_SfHDVopjnlx3eQS/view?usp=sharing' },
    { bonistitle: 'Bonis_BN-10_BC-14_Parts_List', bonishref: 'https://drive.google.com/file/d/1zLLS9xVhBqH0f7E-Lv9flPqp-dMnA8YC/view?usp=sharing' },
    { bonistitle: 'Bonis_BT-11_T-12_Parts_List', bonishref: 'https://drive.google.com/file/d/1zQRolSN7CJ1A2V4P_SfHDVopjnlx3eQS/view?usp=sharing' },
    { bonistitle: 'Bonis_SL-64_Parts_List', bonishref: 'https://drive.google.com/file/d/1zLLS9xVhBqH0f7E-Lv9flPqp-dMnA8YC/view?usp=sharing' },
    { bonistitle: 'Bonis_SL-65_SB-66_Parts_List', bonishref: 'https://drive.google.com/file/d/1zQRolSN7CJ1A2V4P_SfHDVopjnlx3eQS/view?usp=sharing' },
    { bonistitle: 'Bonis_T-57_Parts_List', bonishref: 'https://drive.google.com/file/d/1zLLS9xVhBqH0f7E-Lv9flPqp-dMnA8YC/view?usp=sharing' }
]



////////////////////////////////

const toHTMLchapter = fruitchapter =>
    `<h1 class="content1-description-title">${fruitchapter.chap}</h1>
    <h2 class="content2-list-title">${fruitchapter.items}</h2>`

function renderchapter() {
    const htmlchapter = chapterPDF.map(toHTMLchapter).join('')
    document.querySelector(idchapter).innerHTML = htmlchapter
}
renderchapter()


/////////////////////////////////

const toHTMLbasic = fruitbasic =>
    `<div class = "content2-list-section-wrapper">
        <a href = "${fruitbasic.bonishref}" target="_ blank">
            <div class = "content2-list-section">
                <div class = "list-block-text" >
                    <p class = "content2-list-text">${fruitbasic.bonistitle.split('_').join(' ')}<span>.pdf</span></p>
                </div> 
                <div class = "list-block-img"> </div> 
            </div> 
        </a> 
    </div>`

function renderbasic() {
    const htmlbasic = bonisPDF.map(toHTMLbasic).join('')
    document.querySelector(idpl).innerHTML = htmlbasic
}
renderbasic()


// import { fruits } from './dataindex.js'

// const toHTML = fruit => `
//     <div class = "content2-list-section-wrapper">
//         <a href = "${fruit.gplhref}" target="_ blank">
//             <div class = "content2-list-section">
//                 <div class = "list-block-text" >
//                     <p class = "content2-list-text">${fruit.title.split('_').join(' ')}<span>.pdf</span></p>
//                 </div> 
//                 <div class = "list-block-img"> </div> 
//             </div> 
//         </a> 
//     </div> `


// function render() {
//     const html = fruits.map(toHTML).join('')
//     document.querySelector('#fruits').innerHTML = html
// }
// render()