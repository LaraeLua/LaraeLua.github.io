function ProjetoDesenv(el){    
    
  var display = document.getElementById(el).style.display;
  var designinfo = document.getElementById("Designinfo2");
  var design = document.querySelector(".Design");
  var robotica = document.querySelector(".Robotica");
  var roboticainfo = document.getElementById("robot2");
  var footer = document.querySelector("footer");

      if (display == "none"){

          footer.style.top = "450%";
          robotica.style.top = "378%";
          roboticainfo.style.top = "378%";
          design.style.top = "337%";
          designinfo.style.top = "337%";
          document.getElementById(el).style.display = 'block';

      }else{

          footer.style.top = "360%";
          robotica.style.top = "302%";
          roboticainfo.style.top = "302%";
          design.style.top = "261%";
          designinfo.style.top = "261%";
          document.getElementById(el).style.display = 'none';
      }
}

function ProjetoDesign(el){    
  
  var display = document.getElementById(el).style.display;
  var robotica = document.querySelector(".Robotica");
  var roboticainfo = document.getElementById("robot2");
  var footer = document.querySelector("footer");
      if (display == "none"){

          footer.style.top = "450%";
          robotica.style.top = "378%";
          roboticainfo.style.top = "378%";
          document.getElementById(el).style.display = 'block';

      }else{
          footer.style.top = "360%";
          robotica.style.top = "302%";
          roboticainfo.style.top = "302%";
          document.getElementById(el).style.display = 'none';
      }
}

function ProjetoRobot(el){    
  
  var display = document.getElementById(el).style.display;
  var footer = document.querySelector("footer");
      if (display == "none"){

          footer.style.top = "450%";
          document.getElementById(el).style.display = 'block';

      }else{
          footer.style.top = "360%";
          document.getElementById(el).style.display = 'none';
      }
}


const repeat = false;
const noArrows = false;
const noBullets = false;


const container = document.querySelector('.slider-container');
var slide = document.querySelectorAll('.slider-single');
var slideTotal = slide.length - 1;
var slideCurrent = -1;

function initBullets() {
  if (noBullets) {
      return;
  }
  const bulletContainer = document.createElement('div');
  bulletContainer.classList.add('bullet-container')
  slide.forEach((elem, i) => {
      const bullet = document.createElement('div');
      bullet.classList.add('bullet')
      bullet.id = `bullet-index-${i}`
      bullet.addEventListener('click', () => {
          goToIndexSlide(i);
      })
      bulletContainer.appendChild(bullet);
      elem.classList.add('proactivede');
  })
  container.appendChild(bulletContainer);
}

function initArrows() {
  if (noArrows) {
      return;
  }
  const leftArrow = document.createElement('a')
  const iLeft = document.createElement('i');
  iLeft.classList.add('fa')
  iLeft.classList.add('fa-arrow-left')
  leftArrow.classList.add('slider-left')
  leftArrow.appendChild(iLeft)
  leftArrow.addEventListener('click', () => {
      slideLeft();
  })
  const rightArrow = document.createElement('a')
  const iRight = document.createElement('i');
  iRight.classList.add('fa')
  iRight.classList.add('fa-arrow-right')
  rightArrow.classList.add('slider-right')
  rightArrow.appendChild(iRight)
  rightArrow.addEventListener('click', () => {
      slideRight();
  })
  container.appendChild(leftArrow);
  container.appendChild(rightArrow);
}

function slideInitial() {
  initBullets();
  initArrows();
  setTimeout(function () {
      slideRight();
  }, 500);
}

function updateBullet() {
  if (!noBullets) {
      document.querySelector('.bullet-container').querySelectorAll('.bullet').forEach((elem, i) => {
          elem.classList.remove('active');
          if (i === slideCurrent) {
              elem.classList.add('active');
          }
      })
  }
  checkRepeat();
}

function checkRepeat() {
  if (!repeat) {
      if (slideCurrent === slide.length - 1) {
          slide[0].classList.add('not-visible');
          slide[slide.length - 1].classList.remove('not-visible');
          if (!noArrows) {
              document.querySelector('.slider-right').classList.add('not-visible')
              document.querySelector('.slider-left').classList.remove('not-visible')
          }
      }
      else if (slideCurrent === 0) {
          slide[slide.length - 1].classList.add('not-visible');
          slide[0].classList.remove('not-visible');
          if (!noArrows) {
              document.querySelector('.slider-left').classList.add('not-visible')
              document.querySelector('.slider-right').classList.remove('not-visible')
          }
      } else {
          slide[slide.length - 1].classList.remove('not-visible');
          slide[0].classList.remove('not-visible');
          if (!noArrows) {
              document.querySelector('.slider-left').classList.remove('not-visible')
              document.querySelector('.slider-right').classList.remove('not-visible')
          }
      }
  }
}

function slideRight() {
  if (slideCurrent < slideTotal) {
      slideCurrent++;
  } else {
      slideCurrent = 0;
  }

  if (slideCurrent > 0) {
      var preactiveSlide = slide[slideCurrent - 1];
  } else {
      var preactiveSlide = slide[slideTotal];
  }
  var activeSlide = slide[slideCurrent];
  if (slideCurrent < slideTotal) {
      var proactiveSlide = slide[slideCurrent + 1];
  } else {
      var proactiveSlide = slide[0];

  }

  slide.forEach((elem) => {
      var thisSlide = elem;
      if (thisSlide.classList.contains('preactivede')) {
          thisSlide.classList.remove('preactivede');
          thisSlide.classList.remove('preactive');
          thisSlide.classList.remove('active');
          thisSlide.classList.remove('proactive');
          thisSlide.classList.add('proactivede');
      }
      if (thisSlide.classList.contains('preactive')) {
          thisSlide.classList.remove('preactive');
          thisSlide.classList.remove('active');
          thisSlide.classList.remove('proactive');
          thisSlide.classList.remove('proactivede');
          thisSlide.classList.add('preactivede');
      }
  });
  preactiveSlide.classList.remove('preactivede');
  preactiveSlide.classList.remove('active');
  preactiveSlide.classList.remove('proactive');
  preactiveSlide.classList.remove('proactivede');
  preactiveSlide.classList.add('preactive');

  activeSlide.classList.remove('preactivede');
  activeSlide.classList.remove('preactive');
  activeSlide.classList.remove('proactive');
  activeSlide.classList.remove('proactivede');
  activeSlide.classList.add('active');

  proactiveSlide.classList.remove('preactivede');
  proactiveSlide.classList.remove('preactive');
  proactiveSlide.classList.remove('active');
  proactiveSlide.classList.remove('proactivede');
  proactiveSlide.classList.add('proactive');

  updateBullet();
}

function slideLeft() {
  if (slideCurrent > 0) {
      slideCurrent--;
  } else {
      slideCurrent = slideTotal;
  }

  if (slideCurrent < slideTotal) {
      var proactiveSlide = slide[slideCurrent + 1];
  } else {
      var proactiveSlide = slide[0];
  }
  var activeSlide = slide[slideCurrent];
  if (slideCurrent > 0) {
      var preactiveSlide = slide[slideCurrent - 1];
  } else {
      var preactiveSlide = slide[slideTotal];
  }
  slide.forEach((elem) => {
      var thisSlide = elem;
      if (thisSlide.classList.contains('proactive')) {
          thisSlide.classList.remove('preactivede');
          thisSlide.classList.remove('preactive');
          thisSlide.classList.remove('active');
          thisSlide.classList.remove('proactive');
          thisSlide.classList.add('proactivede');
      }
      if (thisSlide.classList.contains('proactivede')) {
          thisSlide.classList.remove('preactive');
          thisSlide.classList.remove('active');
          thisSlide.classList.remove('proactive');
          thisSlide.classList.remove('proactivede');
          thisSlide.classList.add('preactivede');
      }
  });

  preactiveSlide.classList.remove('preactivede');
  preactiveSlide.classList.remove('active');
  preactiveSlide.classList.remove('proactive');
  preactiveSlide.classList.remove('proactivede');
  preactiveSlide.classList.add('preactive');

  activeSlide.classList.remove('preactivede');
  activeSlide.classList.remove('preactive');
  activeSlide.classList.remove('proactive');
  activeSlide.classList.remove('proactivede');
  activeSlide.classList.add('active');

  proactiveSlide.classList.remove('preactivede');
  proactiveSlide.classList.remove('preactive');
  proactiveSlide.classList.remove('active');
  proactiveSlide.classList.remove('proactivede');
  proactiveSlide.classList.add('proactive');

  updateBullet();
}

function goToIndexSlide(index) {
  const sliding = (slideCurrent > index) ? () => slideRight() : () => slideLeft();
  while (slideCurrent !== index) {
      sliding();
  }
}

slideInitial();

function index(element) {
  var sib = element.parentNode.childNodes;
  var n = 0;
  for (var i = 0; i < sib.length; i++) {
    if (sib[i] == element) return n;
    if (sib[i].nodeType == 1) n++;
  }
  return -1;
}

function getSiblings(elem) {
  var siblings = [];
  var sibling = elem.parentNode.firstChild;
  for (; sibling; sibling = sibling.nextSibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
  }
  return siblings;
}

var Slider = (function () {
  var slider,
    activeSlide,
    slides,
    slideWidth,
    slideNavPrev,
    slideNavNext,
    slideNavThumbs;

  var _init = function () {
    slider = document.getElementById("slider");
    slideContainer = document.getElementsByClassName("slider__container")[0];
    activeSlide = document.getElementsByClassName("is-active")[0];
    slides = document.getElementsByClassName("slider__item");
    slides = Array.prototype.slice.call(slides, 0);
    slideNavPrev = document.getElementsByClassName("slider__prev")[0];
    slideNavNext = document.getElementsByClassName("slider__next")[0];
    slideNavThumbs = document.getElementsByClassName("navThumbs__item");
    slideNavThumbs = Array.prototype.slice.call(slideNavThumbs, 0);
    slideWidth = parseInt(getComputedStyle(slideContainer).width);

    _prepare();
    _addEventHandlers();
    _animateFirst();
  };

  var _addEventHandlers = function () {
    slideNavNext.addEventListener("click", _goToNext, false);
    slideNavPrev.addEventListener("click", _goToPrev, false);
    // document.addEventListener("keydown", handleKeyboardNav, false);
    slideNavThumbs.forEach(function (element, index) {
      element.classList.remove("is-active");
      element.addEventListener("click", _goToClicked, false);
    });
  };

  var _prepare = function () {
    slides.forEach(function (element, index) {
      if (!element.classList.contains("is-active")) {
        TweenLite.set(element, { autoAlpha: 0 });
      }
    });
    TweenLite.set(slideNavPrev, { autoAlpha: 0.2 });
  };

  var _animateFirst = function () {
    var slideInTitle = activeSlide.children[1].children[0];
    slideInTitle = new SplitText(slideInTitle);
    var _resetTitle = function () {
      splitSlideInTitle.revert();
    };

    var tl = new TimelineLite({ onComplete: _resetTitle });
    tl.staggerFromTo(
      slideInTitle.chars,
      0.6,
      {
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: Back.easeOut
      },
      { opacity: 1, scale: 1, y: 0, rotationX: 0 },
      0.03,
      "-=0.3"
    );
  };

  var _animateNext = function (slideOut, slideIn) {
    var slideOutTitle = slideOut.children[1].children[0];
    var slideOutSubtitle = slideOut.children[1].children[1];
    var size = slides.length;

    if (slideIn) {
      var slideInTitle = slideIn.children[1].children[0];
      var splitSlideInTitle = new SplitText(slideInTitle);
      var slideInSubtitle = slideIn.children[1].children[1];
      var _resetTitle = function () {
        splitSlideInTitle.revert();
      };

      var tl = new TimelineLite({ onComplete: _resetTitle });
      tl.set(slideIn, { x: "100%", autoAlpha: 1, className: "+=is-active" })
        .set(slideOut, { className: "-=is-active" })
        .to(
          slideOutTitle,
          0.3,
          { autoAlpha: 0, y: -50, ease: Power2.easeOut },
          0
        )
        .to(slideOut, 0.9, { x: "-100%", ease: Power2.easeOut }, 0)
        .to(slideIn, 0.9, { x: "-=100%", ease: Power2.easeOut }, 0)
        .staggerFromTo(
          splitSlideInTitle.chars,
          0.6,
          {
            opacity: 0,
            scale: 0,
            y: 80,
            rotationX: 180,
            transformOrigin: "0% 50% -50",
            ease: Back.easeOut
          },
          { opacity: 1, scale: 1, y: 0, rotationX: 0 },
          0.03,
          "-=0.3"
        );
      if (index(slideIn) === size - 1) {
        TweenLite.to(slideNavNext, 0.3, {
          autoAlpha: 0.2,
          ease: Linear.easeNone,
          className: "-=is-active"
        });
      }
    }
    TweenLite.set(slideNavPrev, { autoAlpha: 1, className: "+=is-active" });
  };

  var _goToNext = function () {
    var slideOut = document.getElementsByClassName("is-active")[0];
    var slideIn = slideOut.nextElementSibling;
    _animateNext(slideOut, slideIn);
  };

  var _animatePrev = function (slideOut, slideIn) {
    var slideOutTitle = slideOut.children[1].children[0];
    var tl = new TimelineLite();

    if (slideIn) {
      var slideInTitle = slideIn.children[1].children[0];
      var _resetTitle = function () {
        splitSlideInTitle.revert();
      };
      var splitSlideInTitle = new SplitText(slideInTitle);
      var tl = new TimelineLite({ onComplete: _resetTitle });
      tl.set(slideIn, { x: "-100%", autoAlpha: 1, className: "+=is-active" })
        .set(slideOut, { className: "-=is-active" })
        .set(slideInTitle, { y: 0, autoAlpha: 1 })
        .to(slideOut, 0.9, { x: "100%", ease: Power2.easeOut }, 0)
        .to(slideIn, 0.9, { x: "+=100%", ease: Power2.easeOut }, 0)
        .staggerFromTo(
          splitSlideInTitle.chars,
          0.8,
          {
            opacity: 0,
            scale: 0,
            y: 80,
            rotationX: 180,
            transformOrigin: "0% 50% -50",
            ease: Back.easeOut
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotationX: 0
          },
          0.03,
          "-=0.3"
        );
      if (index(slideIn) === 0) {
        TweenLite.to(slideNavPrev, 0.3, {
          autoAlpha: 0.2,
          ease: Linear.easeNone,
          className: "-=is-active"
        });
      }
    }
    TweenLite.set(slideNavNext, { autoAlpha: 1, className: "+=is-active" });
  };

  var _goToPrev = function () {
    var slideOut = document.getElementsByClassName("is-active")[0];
    var slideIn = slideOut.previousElementSibling;
    _animatePrev(slideOut, slideIn);
  };

  var _goToClicked = function () {
    var clickedSlide = index(this);
    var slideOut = document.getElementsByClassName("is-active")[0];
    var slideIn = document.getElementsByClassName("slider__item")[clickedSlide];
    var siblings = getSiblings(this);
    siblings.forEach(function (element, index) {
      element.classList.remove("is-active");
    });
    if (clickedSlide > index(slideOut)) {
      this.classList.add("is-active");
      _animateNext(slideOut, slideIn);
    } else if (index(slideOut) > clickedSlide) {
      this.classList.add("is-active");
      _animatePrev(slideOut, slideIn);
    }
  };

  var handleKeyboardNav = function (e) {
    if (!e) e = window.event;
    var kc = e.keyCode;
    if (kc == 37) _goToPrev();
    if (kc == 39) _goToNext();
  };

  return {
    init: _init
  };
})();

Slider.init();
