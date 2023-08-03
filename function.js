// const allProduct = document.getElementById('all-product')
const dailyProduct = document.getElementById('daily-product');
const antiAging = document.getElementById('anti-aging');
const cleansersProduct = document.getElementById('cleansers-product');



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
    // dailyProductContent.style.color = '#BFBBAF'
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




// // Initialize an empty cart
// let cartItems = [];

// // Function to add an item to the cart
// function addToCart(productName, price, quantity) {
//     // Check if the product already exists in the cart
//     const existingItem = cartItems.find(item => item.name === productName);
//     if (existingItem) {
//         existingItem.quantity += quantity;
//     } else {
//         cartItems.push({ name: productName, price: price, quantity: quantity });
//     }
//     updateCart();
// }

// // Function to update the cart UI
// function updateCart() {
//     const cartList = document.getElementById("added-cart");
//     const alertMessage = document.getElementById("alert-message");

//     // Clear the previous cart content
//     cartList.innerHTML = "";

//     // Rebuild the cart with the updated items
//     cartItems.forEach(item => {
//         const li = document.createElement("li");
//         li.innerText = `${item.name} - ${item.quantity} x ${item.price} NGN`;
//         cartList.appendChild(li);
//     });

//     // Display a message when the cart is empty
//     alertMessage.style.display = cartItems.length === 0 ? "block" : "none";
// }

// // Function to handle the form submission
// document.getElementById("add-to-cart-btn").addEventListener("click", function (event) {
//     event.preventDefault();
//     const productName = "Skin Care"; // Change this to the actual product name
//     const price = 59.00; // Change this to the actual product price
//     const quantity = parseInt(document.getElementById("input").value) || 1;
//     addToCart(productName, price, quantity);
// });

