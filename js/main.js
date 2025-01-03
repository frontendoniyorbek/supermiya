// Menu toggle logic
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

// Mobile menu open
menuToggle.addEventListener('click', () => {
	mobileMenu.classList.add('active');
});

// Close mobile menu
closeMenu.addEventListener('click', () => {
	mobileMenu.classList.remove('active');
});

// Close the menu when screen is resized to larger than mobile view
window.addEventListener('resize', () => {
	if (window.innerWidth > 820) {
		mobileMenu.classList.remove('active');
	}
});
