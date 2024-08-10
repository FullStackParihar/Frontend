// Your existing JavaScript code
// Simulating adding items to the cart
let cartItemCount = 0;
function addToCart(button) {
    cartItemCount++;
    updateViewCart(cartItemCount);
    animateButton(button);
}

// Update the "View Cart" button text based on the number of items in the cart
function updateViewCart(count) {
    const viewCartBtn = document.getElementById('view-cart');
    viewCartBtn.textContent = `View Cart (${count})`;
}

// Function to animate the button
function animateButton(button) {
    button.classList.add('clicked');
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 500);
}

// Countdown timer logic for each product
const countdown1 = document.getElementById('countdown1');
const countdown2 = document.getElementById('countdown2');
const countdown3 = document.getElementById('countdown3');

function updateCountdown(countdownElement, endDate) {
    const now = new Date().getTime();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        countdownElement.innerHTML = "Offer expired";
    }
}

const endDate1 = new Date('2024-06-30').getTime();
const endDate2 = new Date('2024-06-30').getTime();
const endDate3 = new Date('2024-06-30').getTime();

setInterval(() => {
    updateCountdown(countdown1, endDate1);
    updateCountdown(countdown2, endDate2);
    updateCountdown(countdown3, endDate3);
}, 1000);

// Function to change product image on mouseover
function changeImage(productId) {
    const product = document.getElementById(productId);
    const productImage = product.querySelector('.product-image');
    const altImageUrl = productImage.getAttribute('data-alt');
    productImage.setAttribute('src', altImageUrl);
}

// Function to reset product image on mouseout
function resetImage(productId) {
    const product = document.getElementById(productId);
    const productImage = product.querySelector('.product-image');
    const originalImageUrl = productImage.getAttribute('src').replace('_2', '_1');
    productImage.setAttribute('src', originalImageUrl);
}

// JavaScript code for sliding image animation
window.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.image-slider');
    
    sliders.forEach(slider => {
        const images = slider.querySelectorAll('.product-image');

        let index = 0;
        setInterval(() => {
            images[index].classList.remove('current');
            index = (index + 1) % images.length;
            images[index].classList.add('current');
        }, 3000); // Change slide interval time as needed
    });
});
