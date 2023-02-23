const toggle = document.querySelector('.nav__wrapper__toggle');
const ul = document.querySelector(".nav__wrapper__ul");
toggle.addEventListener('click', () => {
    ul.classList.toggle('nav__active');
});

const nameElement = document.querySelector(".header__data__contents__heading");
const nameText = "muhammad asif";
let start = 0;

const typeWrite = () => {
    if(start < nameText.length) {
        nameElement.innerHTML += nameText.charAt(start);
        start++;
        setTimeout(typeWrite, 300);
    }
}

typeWrite();

const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector(".modal__wrapper__close");

modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
})

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
})



const year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();