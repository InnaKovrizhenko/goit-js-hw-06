// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

const value = document.querySelector("#value");

decrement.addEventListener("click", onDecrementClick);

function onDecrementClick(event) {
  value.textContent -= 1;
}

increment.addEventListener("click", onIncrementClick);

function onIncrementClick(event) {
  let counterValue = parseInt(value.textContent);
  value.textContent = counterValue + 1;
}
