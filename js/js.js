function slideshow(element, hideClass, interval) {
  var images = document.querySelector(element).children;
  var imagesArray = [];
  var currentSlide = 0;
  var totalSlides = null;

  function show(image) {
    image.classList.remove(hideClass);
  }

  function hide(image) {
    image.classList.add(hideClass);
  }
  
  function changeSlide() {
    hide(imagesArray[currentSlide]);
    
    if (currentSlide + 1 !== totalSlides) {
      currentSlide = currentSlide + 1;
    } else {
      currentSlide = 0;
    }

    show(imagesArray[currentSlide]);
  }

  function init() {
    var loopIndex = 0;

    for (var i = 0; i < images.length; i++) {
      imagesArray.push(images[i]);

      if (loopIndex !== 0) {
        hide(images[i]);
      }

      loopIndex = loopIndex + 1;
    }

    totalSlides = imagesArray.length;

    setInterval(function () {
      changeSlide();
    }, interval);
  }

  init();
}

document.addEventListener("load", function() {
  slideshow('#card-img__METELEV', 'card-img--hidden', 3000);
  slideshow('#card-img__SMMLABA', 'card-img--hidden', 3000);
  slideshow('#card-img__TRC', 'card-img--hidden', 3000);
  slideshow('#card-img__ECIR', 'card-img--hidden', 3000);
  slideshow('#card-img__SEOLABA', 'card-img--hidden', 3000);
  slideshow('#card-img__WAC', 'card-img--hidden', 3000);
  slideshow('#card-img__PHG', 'card-img--hidden', 3000);
  slideshow('#card-img__WP_BLOG', 'card-img--hidden', 3000);
  slideshow('#card-img__VINSTE', 'card-img--hidden', 3000);
  slideshow('#card-img__VINSTE_FRANCHISE', 'card-img--hidden', 3000);
  slideshow('#card-img__BOOSTFLY', 'card-img--hidden', 3000);
  slideshow('#card-img__VERA', 'card-img--hidden', 3000);
  slideshow('#card-img__reg-panel', 'card-img--hidden', 3000);
});