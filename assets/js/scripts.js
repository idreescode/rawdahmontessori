$(document).ready(function(){
	// Mobile Menu
	$('.menu_icon').click(function(){
		$('.menu').slideToggle(200);

		return false
	});

	// Mobile Menu Icon
	$(document).ready(function(){
		$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
			$(this).toggleClass('open');
		});
	});


	// Banner Carousel
	// $('.banner_carousel').owlCarousel({
	// 	items:1,
	// 	loop:true,
	// 	nav:true,
	// 	dots:true,
	// 	autoplay:true,
	// 	responsive : {
	// 	    0 : {
	// 	        items:1,
	// 	    },
	// 	    480 : {
	// 	        items:1,
	// 	    },
	// 	    768 : {
	// 	        items:2,
	// 	    },
	// 	    992 : {
	// 	        items:3,
	// 	    },
	// 	    1200 : {
	// 	        items:4,
	// 	    }
	// 	}
	// });
	// $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
	// $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');


	// ==== HEADER FIXED ON SCROLL ====
	window.addEventListener("scroll", function () {
	    const header = document.querySelector(".header_main");

	    if (window.scrollY > 300) {
	        header.classList.add("fixed");
	    } else {
	        header.classList.remove("fixed");
	    }
	});


	// ==== ACTIVE MENU BASED ON SCROLL POSITION ====
	const sections = document.querySelectorAll('section[id], header[id]');
	const menuLinks = document.querySelectorAll('.menu ul li a');

	window.addEventListener('scroll', function () {
	    let scrollPos = window.scrollY + 120; // offset for header

	    sections.forEach(sec => {
	        if (
	            scrollPos >= sec.offsetTop &&
	            scrollPos < sec.offsetTop + sec.offsetHeight
	        ) {
	            const id = sec.getAttribute('id');

	            menuLinks.forEach(a => {
	                a.classList.remove('active');

	                if (a.getAttribute('href') === `#${id}`) {
	                    a.classList.add('active');
	                }
	            });
	        }
	    });
	});





});