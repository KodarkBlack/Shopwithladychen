const allProduct = document.getElementById('all-product')
const dailyProduct = document.getElementById('daily-product');
const antiAging = document.getElementById('anti-aging');
const cleansersProduct = document.getElementById('cleansers-product');


const dailyProductContent = document.getElementById('daily-product-content');
const antiAgingContent = document.getElementById('anti-aging-content');
const cleansersProductContent = document.getElementById('cleansers-product-content');
const allProductContent = document.getElementById('all-product-content');


allProduct.addEventListener('click', () => {
    allProduct.style.display = 'block';
    dailyProductContent.style.display = 'none';
    antiAgingContent.style.display = 'none';
    cleansersProductContent.style.display = 'none';
});

dailyProduct.addEventListener('click', () => {
    dailyProductContent.style.display = 'block';
    antiAgingContent.style.display = 'none';
    cleansersProductContent.style.display = 'none';
    allProduct.style.display = 'none';

});

antiAging.addEventListener('click', () => {
    dailyProductContent.style.display = 'none';
    antiAgingContent.style.display = 'block';
    cleansersProductContent.style.display = 'none';
    allProduct.style.display = 'none';

});

cleansersProduct.addEventListener('click', () => {
    dailyProductContent.style.display = 'none';
    antiAgingContent.style.display = 'none';
    allProduct.style.display = 'none';
    cleansersProductContent.style.display = 'block';
});
