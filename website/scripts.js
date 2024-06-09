document.addEventListener("DOMContentLoaded", function() {
    // Cart count animation
    const cartIcon = document.querySelector('.cart');
    const cartCount = document.querySelector('.cart-count');

    cartIcon.addEventListener('click', function() {
        let count = parseInt(cartCount.textContent);
        count++;
        cartCount.textContent = count;
        cartCount.classList.add('animate-count');
        setTimeout(() => {
            cartCount.classList.remove('animate-count');
        }, 500);
    });

    // Toggle mobile menu
    const navMenu = document.querySelector('.nav-menu ul');
    const toggleMenu = document.querySelector('.toggle-menu');

    toggleMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});
