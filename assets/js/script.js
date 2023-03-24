$(function(){
  $('.slider__box').slick({
    prevArrow:'<img class="slider__arrow slider__arrow-left" src="assets/img/arrow-left.svg" alt="left">',
    nextArrow:'<img class="slider__arrow slider__arrow-right" src="assets/img/arrow-right.svg" alt="right">',
    responsive: [
      {
        breakpoint: 481,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.nav-btn').on('click', function() {
    $('.nav__list').toggleClass('active');
  }); 
});