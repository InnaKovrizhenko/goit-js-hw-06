// Напиши скрипт, который изменяет цвета фона элемента <body>
// через инлайн стиль при клике на button.change - color и выводит
// значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const backgroundControl = document.querySelector("body");
const buttonControl = document.querySelector(".change-color");
const valueColor = document.querySelector(".color");

buttonControl.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor(event) {
  valueColor.textContent = getRandomHexColor();
  backgroundControl.style.backgroundColor = valueColor.textContent;
}
