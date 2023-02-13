import { weatherKey } from "../../apiKEY.js";

const getWeather = (local, callback) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=${weatherKey}&q=${local}&units=metric`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        resolve();
      });
  });
};

// insert here
getWeather("seoul").then(() => {
  console.log("서울 날씨 가져오기");
});
getWeather("pusan", () => {
  console.log("부산 날씨 가져오기");
});
getWeather("cheongju", () => {
  console.log("청주 날씨 가져오기");
});

