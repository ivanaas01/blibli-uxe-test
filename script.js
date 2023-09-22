
//product card
const cardcontainer = document.querySelector(".card_container");
const valuescards = [{
    image: 'img/product.jpg',
    name: 'NIKE AJ1 Retro High White University Blue Black',
    fixedprice: 'Rp3.550.000',
    price: 'Rp7.100.000',
    discount: '30%'
},
{
    image: 'img/product.jpg',
    name: 'NIKE AJ1 Retro High White University Blue Black',
    fixedprice: 'Rp3.550.000',
    price: 'Rp7.100.000',
    discount: '30%'
},
{
    image: 'img/product.jpg',
    name: 'NIKE AJ1 Retro High White University Blue Black',
    fixedprice: 'Rp3.550.000',
    price: 'Rp7.100.000',
    discount: '30%'
},
{
    image: 'img/product.jpg',
    name: 'NIKE AJ1 Retro High White University Blue Black',
    fixedprice: 'Rp3.550.000',
    price: 'Rp7.100.000',
    discount: '30%'
},
{
    image: 'img/product.jpg',
    name: 'NIKE AJ1 Retro High White University Blue Black',
    fixedprice: 'Rp3.550.000',
    price: 'Rp7.100.000',
    discount: '30%'
},
{
    image: 'img/product.jpg',
    name: 'NIKE AJ1 Retro High White University Blue Black',
    fixedprice: 'Rp3.550.000',
    price: 'Rp7.100.000',
    discount: '30%'
},
{
    image: 'img/product.jpg',
    name: 'NIKE AJ1 Retro High White University Blue Black',
    fixedprice: 'Rp3.550.000',
    price: 'Rp7.100.000',
    discount: '30%'
},
{
    image: 'img/product.jpg',
    name: 'NIKE AJ1 Retro High White University Blue Black',
    fixedprice: 'Rp3.550.000',
    price: 'Rp7.100.000',
    discount: '30%'
},
{
    image: 'img/product.jpg',
    name: 'NIKE AJ1 Retro High White University Blue Black',
    fixedprice: 'Rp3.550.000',
    price: 'Rp7.100.000',
    discount: '30%'
},
{
    image: 'img/product.jpg',
    name: 'NIKE AJ1 Retro High White University Blue Black',
    fixedprice: 'Rp3.550.000',
    price: 'Rp7.100.000',
    discount: '30%'
}]

function returnCards(valuescards) {
    return '<div class="wraper">' + valuescards.map(value => `
    <div class="card_content">
            <img class="product_image" src="${value.image}" alt="product"></img>
            <div class="product_info">
                <p class="product_name"> ${value.name}</p>
                <p class="product_fixedprice">${value.fixedprice}</p>
                <div class="discount">
                    <p class="product_price">${value.price}</p>
                    <span class="product_discount">${value.discount}</span>
                </div>
                <button class="button_add" type="button">Add to bag</button>
            </div>
        </div>`).join('') + '</div>';
}

cardcontainer.innerHTML = returnCards(valuescards);

const leftScrollButton = document.querySelector('.button_prev');
const rightScrollButton = document.querySelector('.button_next');
let scrollableArea = document.querySelector('.section_4');

leftScrollButton.addEventListener('click', event => {
    scrollableArea.scrollBy(-30,0);
})

rightScrollButton.addEventListener('click', event => {
    scrollableArea.scrollBy(30,0);
})

//collapse footer
const parentContainer = document.querySelector('.main_footer');

parentContainer.addEventListener('click', event => {
    const current = event.target;
    const isShowAll = current.className.includes('button_show');
    if (!isShowAll) return;
    const currentText = current.parentNode.querySelector('.all_content');
    currentText.classList.toggle('all_content--show');
    var buttonText = document.querySelector('.button_show')
    buttonText.innerText = (buttonText.innerText === 'Show All') ? 'Collapse All' : 'Show All';
});

//scroll on top
let btnscroll = document.querySelector('.button_float');

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    btnscroll.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
}

btnscroll.addEventListener('click', event => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


