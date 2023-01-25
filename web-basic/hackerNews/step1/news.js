var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
  .then((response) => response.json()) //응답이 오면 찍어줄래? json으로
  .then(result => console.log(result))  //그 정보를 콘솔에 띄워줄래??
  .then((result) => {
    const ul = document.createElement("ul"); //DOM API /* ul태그는 for문 바깥에 위치 */
    for (let i = 0; i < result.length; i++) {
      const li = document.createElement("li");
      li.innerHTML = result[i].title;
      ul.appendChild(li);

      console.log(result[i].title);
    }
    document.getElementById("root").appendChild(ul);
  })
  .catch((error) => console.log("error", error)); /* 에러발생하면 캐치 */
