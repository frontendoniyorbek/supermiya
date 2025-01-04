document.addEventListener('DOMContentLoaded', () => {
	const headers = document.querySelectorAll('.accordion-header');

	headers.forEach(header => {
		header.addEventListener('click', () => {
			const currentlyActive = document.querySelector('.accordion-content.active');
			const currentIcon = document.querySelector('.accordion-header.active .icon');
			const content = header.nextElementSibling;
			const icon = header.querySelector('.icon');

			if (currentlyActive && currentlyActive !== content) {
				currentlyActive.classList.remove('active');
				currentIcon.innerHTML = '&#9660;';
				currentIcon.classList.remove('active');
			}

			if (content.classList.contains('active')) {
				content.classList.remove('active');
				icon.innerHTML = '&#9660;';
			} else {
				content.classList.add('active');
				icon.innerHTML = '&#9650;';
			}

			header.classList.toggle('active');
		});
	});
});

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

var splide = new Splide('.splide', {
	type: 'loop', // Slayderni aylantirish
	perPage: 3, // Har bir sahifada 3 ta slayd
	perMove: 1, // Har safar 1 slaydni ko‘rsatish
});

splide.mount(); // Slayderni ishga tushirish

document.addEventListener('DOMContentLoaded', () => {
	const headers = document.querySelectorAll('.accordion-header');

	headers.forEach(header => {
		header.addEventListener('click', () => {
			const currentlyActive = document.querySelector('.accordion-content.active');
			const currentIcon = document.querySelector('.accordion-header.active .icon');
			const content = header.nextElementSibling;
			const icon = header.querySelector('.icon');

			if (currentlyActive && currentlyActive !== content) {
				currentlyActive.classList.remove('active');
				currentIcon.innerHTML = '&#9660;';
				currentIcon.classList.remove('active');
			}

			if (content.classList.contains('active')) {
				content.classList.remove('active');
				icon.innerHTML = '&#9660;';
			} else {
				content.classList.add('active');
				icon.innerHTML = '&#9650;';
			}

			header.classList.toggle('active');
		});
	});
});
