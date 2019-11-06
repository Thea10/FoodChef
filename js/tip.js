$(document).ready(function () {
    slideShow();
    togglerAnimation();
}

);

function slideShow() {
    let images = new Array('images/slide1.jpg', 'images/slide2.jpg', 'images/slide3.jpg');

    let next = 0;

    imgSlide();

    function imgSlide() {
        $('.headerimg').length != 0 ?
            $('.headerimg').fadeOut(2000, function () {
                imgFadeIn();
                $(this).remove()
            })
            :
            imgFadeIn()
    }

    function imgFadeIn() {
        $('.headerslider').css('background-image', `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55) ), url(${images[next++]})`).fadeIn(2000, function () {
            setTimeout(imgSlide, 5000);
        });
        $('.headerslider').css({ transition: 'opacity 10s ease-in-out' });
        if (next >= images.length) next = 0;
    }


     $('.slidebtn1').on('click', function () {
        $('.headerslider').css('background-image', `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55) ), url(${images[0]})`).fadeIn(2000);
        $('.headerslider').css({ transition: 'opacity 10s ease-in-out' });
    });

    $('.slidebtn2').on('click', function () {
        $('.headerslider').css('background-image', `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55) ), url(${images[1]})`).fadeIn(2000);
        $('.headerslider').css({ transition: 'opacity 10s ease-in-out' });
    });

    $('.slidebtn3').on('click', function () {
        $('.headerslider').css('background-image', `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55) ), url(${images[2]})`).fadeIn(2000);
        $('.headerslider').css({ transition: 'opacity 10s ease-in-out' });
    }); 


    $('.textSlide').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button class="  fa fa-chevron-left slick-prev" aria-label="Previous" type="button"></button>',
        nextArrow: '<button class=" fa fa-chevron-right slick-next " aria-label="Next" type="button"></button>',
        responsive: [{
            breakpoint: 850,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }]
    });
    


   /* let text = new Array('Lorem ipsum dolor sit amet, consectetur adpiscing elit.  Maecenas cursurs liguta quismales uada placerat. Maecenas cursurs liguta quismales uada placerat.  Maecenas cursurs liguta quismales uada placerat. Maecenas cursurs liguta quismales uada placerat ', 'Lorem ipsum dolor sit amet, consectetur adpiscing elit.  Maecenas cursurs liguta quismales uada placerat. Maecenas cursurs liguta quismales uada placerat.  Maecenas cursurs liguta quismales uada placerat. Maecenas cursurs liguta quismales uada placerat ', 'Lorem ipsum dolor sit amet, consectetur adpiscing elit.  Maecenas cursurs liguta quismales uada placerat. Maecenas cursurs liguta quismales uada placerat.  Maecenas cursurs liguta quismales uada placerat. Maecenas cursurs liguta quismales uada placerat ');

    let nextText = 0;
    let index = 1;

    slideText(index);

    $('.next').on('click', slideText(index += 1));
    $('.prev').on('click', slideText(index += -1));

    function slideText(n) {
        var i;
        let textLength = $('.slidetext').length;
        if (n > textLength) index = 1;

        if (n < 1) index = textLength;

        for(i=0; i < textLength; i++){
            $('.slidetext').css('display', 'none');
        }

        $('.slidetext').css('display', 'block');
    } */
        




}



function togglerAnimation() {
    $('.collapsebtn1').on('click', function (){
        $('.animated-icon1').toggleClass('open');
    });
}





/*var changeimg = false;
  function imgLoop(){
    window.setTimeout("imgLoop()", 4000);
    nextImg = changeimg ?  ' linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url("../images/slide1.jpg")' :  'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url("../images/slide2.jpg")';
    changeimg = !changeimg;
    headslider.style.backgroundImage = nextImg;
  }

  imgLoop(); */