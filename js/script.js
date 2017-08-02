var menuItems = document.querySelectorAll('.nav span');
var toTop = document.querySelector('.to-top');
var androids = document.querySelector('.androids');
var androidDiv = document.querySelector('.androids+div');

window.addEventListener('scroll', function(event){
	if(window.scrollY < 462){
		menuItems[0].classList.add('active');
		menuItems[1].classList.remove('active');
	} else {
		menuItems[0].classList.remove('active');
		menuItems[1].classList.add('active');
	}
	if(window.scrollY > 200){
		toTop.classList.remove('hidden');
	} else {
		toTop.classList.add('hidden');		
	}
});

androids.addEventListener('mouseover', function(event){
	this.classList.add('active');
});
androids.addEventListener('mouseout', function(event){
	this.classList.remove('active');
});
androidDiv.addEventListener('mouseover', function(event) {
	androids.classList.add('active');
});
androidDiv.addEventListener('mouseout', function(event) {
	androids.classList.remove('active');
});
