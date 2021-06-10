var btnContainer = document.getElementById("works__header-btns");



// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("works__header-button");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

  });
}





const worksSlider=new Swiper('.works__slider',{
	
	pagination:{
		el:'.swiper-pagination',
		clickable:true,
		slidesPerView: 'auto',
	},
});

$('.button_1').on('click', function() {
	$('.studia').css('display','none')
	$('.last').css('display','block')
	worksSlider.update();
});

$('.button_2').on('click', function() {
	$('.studia').css('display','block')
	$('.last').css('display','none')
	worksSlider.update();
});

const commentSlider=new Swiper('.comment__slider',{
	
	pagination:{
		el:'.swiper-pagination',
		clickable:true,
		slidesPerView: 'auto',
		spaceBetween:'300',
	},
});

function res(){
   var width =window.screen.width*0.3;
	 $('.slide__row').height(width);
} res();

$( window ).resize(function() {
	res();
});

$(".header__end-btn").on('click',function(){
	$(".header__end-text").toggleClass("show");
	var replaceText=$(".header__end-text").hasClass("show") ? "Скрыть" : "Читать далее";
	$(this).text(replaceText);
});





