function btn(number) {
  let screenText = document.getElementById("screen-text");
  screenText.value += number;
  console.log(screenText.value);
}
function calculate(number) {
  let screenText = document.getElementById("screen-text");
  console.log(screenText.value);
  screenText.value = eval(screenText.value);
}
function del() {
  let screenText = document.getElementById("screen-text");
  screenText.value = screenText.value.slice(0, -1);
  console.log(screenText.value);
}
function clearall() {
  let screenText = document.getElementById("screen-text");
  screenText.value = " ";
  console.log(screenText.value);
}
