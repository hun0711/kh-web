const user = document.querySelector(".user_input");
const btnAdd = document.querySelector(".btn_add");

/* callback 함수 */
btnAdd.addEventListener("click", function (e) {
  console.log("plus버튼 호출");

  addRow();
});

user.addEventListener("keypress", (e) => {
  console.log("key===>" + e.key);
  /* 값만 같은지 비교함 */
  if (e.key === "Enter") {
    console.log(`Enter 이벤트호출`);
    addRow();
  }
});

function addRow() {
  const workname = user.value;

  console.log(`사용자가 입력한 workname => ${workname}`);
  if (workname === "") {
    user.focus(); /* 커서의 위치를 input type = text로 가져온다. */
    console.log(`workname = 빈 문자열`);
    return; /* addRow를 탈출한다. */
  }
  /* 위 조건을 수렴하지 않으면 input text를 초기화한다. */
  user.value = "";
  user.focus();
}
