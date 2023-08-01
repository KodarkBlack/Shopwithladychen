// const allProduct = document.getElementById('all-product')
const dailyProduct = document.getElementById('daily-product');
const antiAging = document.getElementById('anti-aging');
const cleansersProduct = document.getElementById('cleansers-product');

const addToCartBtn = document.getElementById('add-to-cart-btn');
const alertMessage = document.getElementById('alert-message');
const addedCart = document.getElementById('added-cart');

const dailyProductContent = document.getElementById('daily-product-content');
const antiAgingContent = document.getElementById('anti-aging-content');
const cleansersProductContent = document.getElementById('cleansers-product-content');
const allProductContent = document.getElementById('all-product-content');

// Project Section start
const mainProductImage = document.getElementById('main-product-image');
const imageOne = document.getElementById('image-one');
const imagetwo = document.getElementById('image-two');
const imageThree = document.getElementById('image-three');
const imageFour = document.getElementById('image-four');
// 

// allProduct.addEventListener('click', () => {
//     allProduct.style.display = 'block';
//     dailyProductContent.style.display = 'none';
//     antiAgingContent.style.display = 'none';
//     cleansersProductContent.style.display = 'none';
// });

dailyProduct.addEventListener('click', () => {
    dailyProductContent.style.display = 'block';
    antiAgingContent.style.display = 'none';
    cleansersProductContent.style.display = 'none';
    // allProduct.style.display = 'none';

});

antiAging.addEventListener('click', () => {
    dailyProductContent.style.display = 'none';
    antiAgingContent.style.display = 'block';
    cleansersProductContent.style.display = 'none';
    // allProduct.style.display = 'none';

});

cleansersProduct.addEventListener('click', () => {
    dailyProductContent.style.display = 'none';
    antiAgingContent.style.display = 'none';
    // allProduct.style.display = 'none';
    cleansersProductContent.style.display = 'block';
});
