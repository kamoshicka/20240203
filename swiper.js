const swiper = new Swiper(".swiper", {
   
      centeredSlides: true,
    //   centeredSlidesBounds: true,
      loop: true,
      slidesPerView: 3,
    });

    swiper.on('click', function (){
        swiper.slideToClickedSlide(swiper.clickedIndex);
    });