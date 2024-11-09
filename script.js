const menuBtn = document.querySelector('.menu-btn');
const sideNav = document.querySelector('.sideNav');
const menu = document.querySelector('#menu');
const navbar= document.querySelector('.navbar');

 sideNav.style.right = '-250px';

menuBtn.addEventListener('click',()=>{
  if(sideNav.style.right === '-250px'){
    sideNav.style.right = '0';
    menu.src ='images/close.png';
  }else{
    sideNav.style.right = '-250px';
    menu.src ='images/menu.png';
  }
});



let scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});