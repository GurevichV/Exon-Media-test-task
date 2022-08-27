const modalLink = document.querySelectorAll('.show_more');
const overlay = document.querySelectorAll('.highlights ');

for (let i = 0; i < modalLink.length; i++) {
    modalLink[i].addEventListener('click', e => {
        overlay[i].classList.toggle('hide');
    });
}
