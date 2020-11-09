console.log('JS script working');

let btn = document.querySelector('.submit-button');

btn.addEventListener('click', (e) => {
    e.preventDefault();
});