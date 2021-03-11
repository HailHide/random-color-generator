const h1 = document.querySelector('h1');
const btn = document.querySelector('#rbgButton');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    let randRgb = () => {
        return Math.floor(Math.random() * 255) + 1;
    }
    rgbFull = `rgb(${randRgb()},${randRgb()},${randRgb()})`;
    body.style.backgroundColor = rgbFull;
    h1.innerText = rgbFull;
});