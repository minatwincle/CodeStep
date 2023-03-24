// slick
$('.slick-wrapper').slick({
  autoplay: true,
  autoplaySpeed: 3000, 
  infinite: true,
  slidesToShow: 3,
  centerMode: true,
  centerPadding: '12%',
  responsive: [{
    breakpoint: 1440, // ブレイクポイントを指定
    settings: {
      slidesToShow: 2,
    },
  },
  {
    breakpoint:1000,
    settings: {
      slidesToShow: 1,
      centerPadding: '25%',
    },
  },
  {
    breakpoint:768,
    settings: {
      slidesToShow: 1,
      centerPadding: '18%',
    },
  },
  {
    breakpoint:570,
    settings: {
      slidesToShow: 1,
      centerPadding: '0%',
    },
  },
  ]
});

// スムーススクロール
$(function(){
  const smoothScroll = document.querySelectorAll('a[href^="#"]');
  smoothScroll.forEach((smoothScroll)=> {
    smoothScroll.addEventListener('click', (e)=> {
      e.preventDefault();
      const hrefLink = smoothScroll.getAttribute('href');
      const targetContent = document.getElementById(hrefLink.replace('#', ''));
      const rectTop = targetContent.getBoundingClientRect().top;
      const positionY = window.pageYOffset;
      const target = rectTop + positionY - 80;
      window.scrollTo({
        top: target,
        behavior: 'smooth'
      });
    });
  });
})

// ハンバーガーメニュー
$(function() {
  const nav = document.getElementsByClassName('header__container__nav')[0];
  const navBurger = document.getElementsByClassName('header__container__nav--burger')[0];
  const navMenu = document.getElementsByClassName('header__container__nav__menu')[0];
  const navSpan = navBurger.getElementsByTagName('span');
  const navArray = [nav, navBurger, navMenu, navSpan[0], navSpan[1], navSpan[2]]
  nav.addEventListener('click', function(){
    Array.prototype.forEach.call(navArray, function(_navArray) {
      _navArray.classList.add('origin');
      _navArray.classList.toggle('appear');
    });
  });
});