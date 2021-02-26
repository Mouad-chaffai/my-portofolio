const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});



function myFunction1() {
    document.getElementById("header").style.display = "block";
    document.getElementById("hero").style.display = "block";
    document.getElementById("projects").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("footer").style.display = "block";
    }
	function myFunction2() {
		document.getElementById("header").style.display = "block";
		document.getElementById("hero").style.display = "none";
		document.getElementById("projects").style.display = "block";
		document.getElementById("about").style.display = "none";
		document.getElementById("contact").style.display = "none";
		document.getElementById("footer").style.display = "block";
		}
		function myFunction3() {
			document.getElementById("header").style.display = "block";
			document.getElementById("hero").style.display = "none";
			document.getElementById("projects").style.display = "none";
			document.getElementById("about").style.display = "block";
			document.getElementById("contact").style.display = "none";
			document.getElementById("footer").style.display = "block";
			}
			function myFunction4() {
				document.getElementById("header").style.display = "block";
				document.getElementById("hero").style.display = "none";
				document.getElementById("projects").style.display = "none";
				document.getElementById("about").style.display = "none";
				document.getElementById("contact").style.display = "block";
				document.getElementById("footer").style.display = "block";
				}