let wrapper = document.querySelectorAll('.card-wrapper');
let image = document.querySelectorAll('.card-image');
let slider = document.querySelectorAll('.slider');

wrappers.forEach(wrapper => {
    let image = wrapper.querySelector('.card-image');
    let slider = wrapper.querySelector('.slider')});

    // Si l'un des deux n'existe pas, on arrête là
    if (!image || !slider) {
        console.warn('Elément manquant dans ce wrapper', wrapper);
        return;
    };


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


function test() {
console.log("ok");
}