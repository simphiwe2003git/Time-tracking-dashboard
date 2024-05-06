function getDailyReport() {
  boxContent = "";
  document.querySelector(".active").classList.remove("active");
  document.getElementById("daily").classList.add("active");
  DATA.map((data) => {
    boxContent += `
          <div class="pannel-box ${data.title.toLowerCase()}">
              <div class="box-content">
                  <div class="_header-box">
                      <h3>${data.title}</h3>
                      <span><img src="./assets/icons/icon-ellipsis.svg" alt=""></span>
                  </div>
                  <div class="_body-box">
                      <p class="hrs">${data.timeframes.daily.current}hrs</p>
                      <p class="period">Last Day - ${
                        data.timeframes.daily.previous
                      }hrs</p>
                  </div>
              </div>
          </div>`;
  });
  content.innerHTML = boxContent;
}
