const btnCart =document.querySelector('.container-icon');
const containerCartProducts = document.querySelector('.container-cart-products');

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
});


const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

//lista de contenedores de productos
const producstList = document.querySelector('.about_main');

//varibale de arreglo de productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countproducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

producstList.addEventListener('click', e => {
   if(e.target.classList.contains('carrito')){
    const product = e.target.parentElement

    // console.log(product.querySelector('h3').textContent)  // sirve para ver las clases que esta llamando 
     const infoProduct = {
        quantity:1,
        title: product.querySelector('h3').textContent,
        price: product.querySelector('p').textContent,
     }
     const exits = allProducts.some(product => product.title === infoProduct.title)
if(exits){
    const products = allProducts.map(product => {
        if(product.title === infoProduct.title){
            product.quantity ++;
            return product
        } else{
            return product
        }
    })
    allProducts = [...products];
    }else {
     allProducts = [...allProducts, infoProduct];
    }
     showHTML()
   }
});

rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')){
      const product = e.target.parentElement
      const title = product.querySelector('p').textContent;

      allProducts = allProducts.filter(
        product => product.title !== title
        );
        console.log(allProducts)
        showHTML()
    }
});

//funcion para mostrar html

const showHTML = () => {
    if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
    }


    //limpiar html
    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;
     
    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        containerProduct.innerHTML = `
        <div class="info-cart-product">
                        <span class="cantidad-product-carrito">${product.quantity}</span>
                        <p class="titulo-producto-carrito">${product.title}</p>
                        <span class="precio-product-carito">${product.price}</span>
                    </div>
                    <img src="images/bx-trash.svg" alt="" class="icon-close">
                    </div>
        `
        rowProduct.append(containerProduct)
        total = total + parseInt(product.quantity * product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;

    });

    valorTotal.innerText = `$${total}`;
    countproducts.innerText = totalOfProducts;
};