const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

// 1 вариант
// const list = document.querySelector("#ingredients");
// const markup = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");
// list.innerHTML = markup;

// 2 вариант
const list = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = ingredient;
  list.append(listItem);
});

// 3 вариант
// const list = document.querySelector("#ingredients");
// const listItem = ingredients
//   .map((ingredient) => {
//     const listItem = document.createElement("li");
//     listItem.classList.add("item");
//     listItem.textContent = ingredient;
//     return listItem;
//   })
//   .reduce((accumulator, currentElement) => {
//     accumulator.append(currentElement);
//     return accumulator;
//   }, list);

// list.append(listItem);
