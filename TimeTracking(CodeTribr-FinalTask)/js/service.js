const URL =
  "https://raw.githubusercontent.com/Fernando0654/Fernando0654/main/data.timeTracking.json";
let DATA = [];
let content = document.querySelector(".user-pannel");

function getTimeTracking() {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      DATA = data;
      document.querySelector(".active").classList.remove("active");
      document.getElementById("weekly").classList.add("active");
      boxContent = "";
      DATA.map((data) => {
        boxContent += `
                <div class="pannel-box ${data.title.toLowerCase()}">
                    <div class="box-content">
                        <div class="_header-box">
                            <h3>${data.title}</h3>
                            <span><img src="./assets/icons/icon-ellipsis.svg" alt=""></span>
                        </div>
                        <div class="_body-box">
                            <p class="hrs">${
                              data.timeframes.weekly.current
                            }hrs</p>
                            <p class="period">Last Week - ${
                              data.timeframes.weekly.previous
                            }hrs</p>
                        </div>
                    </div>
                </div>`;
      });
      content.innerHTML = boxContent;
    });
}

getTimeTracking();
