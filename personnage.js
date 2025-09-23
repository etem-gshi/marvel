let wrapper = document.querySelector('.card-wrapper');
let image = document.querySelector('.card-image');
let slider = document.querySelector('.slider');

/*wrapper.forEach((wrapper, index) => {
    let image = image [index];
    let slider = slider [index];*/

function zoom() {
    image.style.backgroundSize = '120%';
    slider.style.top = '0%';
}

function unZoom() {
    image.style.backgroundSize = '100%';
    slider.style.top = '-95%';
}

wrapper.addEventListener('mouseover',zoom);
wrapper.addEventListener('mouseout',unZoom);
/*});*/



console.log("ok");