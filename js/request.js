const sliderWrapper = document.querySelector('.swiper-wrapper');

const getData = async () => {
  await fetch('https://dabipyeung.com/soaply_backend/model/get_products.php?qnt=4')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(item);
      let dataElement;

      data.map((item) => {
        // console.log(item);
        dataElement = `
        <div class="swiper-slide">
                <div class="slider-image">
                  <img src="images/${item.pro_img}" alt="slider 1" />
                </div>
                <div class="slider-text">
                  <h4>${item.pro_name}</h4>
                  <p>${item.pro_desc}</p>
                  <a href="#" class="common-btn">자세히 보기</a>
                </div>
              </div>
              `;

        sliderWrapper.insertAdjacentHTML('beforeend', dataElement);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

getData();

// const name = 'Koo';
// const age = 36;
// // const str = 'Hello ' + name + ' 님' + ' 나이는' + age + '세 입니다';
// const str = `hello ${name}님 나이는 ${age}세 입니다.`; template literal - 이 방법으로 쓰는게 더 간단할 수 있음 `기호는 키보드 1번 옆 그레이브 기호 맥북은 영어 상태에서 나오거나 option 버튼과 함꼐 눌러야 나옴
// console.log(str);

//
//
//
//
//
//
// function sum(a, b) {
//   console.log(a + b);
// }

// 위 주석의 함수를 간단하게 쓴 것 자바스크립트만 가능
// const sum = (a, b) => {
//   console.log(a + b);
// };
// sum(2, 8);
