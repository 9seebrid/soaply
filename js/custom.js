// 프로그래밍 언어 조합 약속:
// menu_icon: 스네이크 케이스
// menu-icon: 하이픈 케이스(오류가 많이 나서 css에서만 사용)
// menuIcon: 카멜 케이스

//  addEventListner(): 이벤트 리스너 추가
// contains(): 클래스 포함 여부 - 결과는 true, false (boolean값)
// getAttribute: 속성값 가져오기 - 파라미터가 1개 - 파라미터로 지정된 속성의 값을 가져온다
// setAttribute: 속성값 설정하기 - 파라미터가 2개 - 첫번째 파라미터는 설정할 속성 이름, 두번째 파라미터는 설정할 속성의 값을 지정

const menuIcon = document.querySelector('.menu-icon');
// console.log(menuIcon);
const menuIconFont = document.querySelector('.menu-icon > i');
const mobileMenus = document.querySelector('.mobile-menus');

console.dir(mobileMenus);

// menu icon click event
menuIcon.addEventListener('click', function () {
  this.classList.toggle('active');

  if (this.classList.contains('active')) {
    menuIconFont.setAttribute('class', 'ri-close-large-line');
    mobileMenus.style.height = mobileMenus.scrollHeight + 'px';
  } else {
    menuIconFont.setAttribute('class', 'ri-menu-line');
    mobileMenus.style.height = 0;
  }
});

// Header style change when scrolling down
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
  // console.log(window.scrollY);
  const scrollTop = window.scrollY;

  if (scrollTop > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

// Swiper Slider Options
setTimeout(() => {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical', // 주석 처리 하면 default : horizontal
    loop: true, //슬라이더 무한 반복

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true, //페이지네이션 클릭 가능 여부: 클릭 한 index로 슬라이더 이동 페이지 네이션은 슬라이더 바에 위치한 동그라미 또는 숫자 표시 등
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar - 가로 프로세스 바
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
}, 300); // {}실행 기능 함수, 시간 - 300 0.3초

// Fit insta Image Height
const instaImgHeight = document.querySelector('#h').scrollHeight;
document.querySelector('#fh').style.height = instaImgHeight + 'px';
// console.log(instaImgHeight);

window.addEventListener('resize', function () {
  const instaImgHeight = document.querySelector('#h').scrollHeight;
  document.querySelector('#fh').style.height = instaImgHeight + 'px';
});
