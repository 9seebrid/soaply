// http://127.0.0.1:5500/details.html?idx=19

// https://dabipyeung.com/soaply_backend/model/get_details.php?idx=19

const url = new URL(window.location.href);
console.log(url.searchParams.get('idx'));
const idx = url.searchParams.get('idx');

const detailWrapper = document.querySelector('.detail-wrapper');

const getDetailData = async () => {
  await fetch(`https://dabipyeung.com/soaply_backend/model/get_details.php?idx=${idx}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      // let data;
      let dataElement;

      // if (Array.isArray(data)) {
      //   data = data;
      // } else {
      //   data = [data];
      // }

      // console.log(data);
      // let dataArr = Array.isArray(data) ? data : [data];
      // console.log(data);

      dataElement = `      
            <p>${data.pro_idx}</p>
            <p>${data.pro_desc}</p>
            <h2>${data.pro_price}</h2>
            <h3>${data.pro_name}</h3>
            <p>${data.pro_reg}</p>
            <img src="images/${data.pro_img}" alt="img" />
          `;
      detailWrapper.insertAdjacentHTML('beforeend', dataElement);
    })
    .catch((error) => {
      console.log(error);
    });
};

getDetailData();
