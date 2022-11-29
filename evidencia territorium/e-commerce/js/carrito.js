const btnCart =document.querySelector('.container-icon');
const containerCartProducts = document.querySelector('.container-cart-products');

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
});


const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

const productList = document.querySelector('.container-items');
let allProducts = [];

productList.addEventListener('click', e => {
    console.log(e.target.classList.contains('btn-add-cart'))
});