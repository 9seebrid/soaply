// http://127.0.0.1:5500/details.html?idx=19

const url = new URL(window.location.href);
console.log(url.searchParams.get('idx'));
const a = console.log(url.searchParams.get('idx'));

const prdWrapper = document.querySelector('.prd-wrapper');

const getData = async () => {
  await fetch('https://dabipyeung.com/soaply_backend/model/get_products.php?qnt=1')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let dataElement;

      data.map((item) => {
        // console.log(item);
        dataElement = `
        <div class="prd">
                <div class="prd_img">
                  <img src="images/${item.pro_img}" alt="slider 1" />
                </div>
                <div class="prd-text">
                  <h4>제품명 : ${item.pro_name}</h4>
                  <p>설명: ${item.pro_desc}</p>
                  <p>가격: ${item.pro_price}</p>
                  <p>제품 등록 날짜:${item.pro_reg}</p>
                </div>
              </div>
              `;

        prdWrapper.insertAdjacentHTML('beforeend', dataElement);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

getData();
