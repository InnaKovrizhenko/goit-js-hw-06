// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoriesId = document.querySelector("#categories");

const categories = categoriesId.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

// for (const el of categories) {
//   const nameTitle = el.querySelector("h2").textContent;
//   const totalElements = el.querySelectorAll("li").length;
//   console.log(`Category: ${nameTitle}`);
//   console.log(`Elements: ${totalElements}`);
// }

categories.forEach((el) => {
  const nameTitle = el.querySelector("h2").textContent;
  const totalElements = el.querySelectorAll("li").length;
  console.log(`Category: ${nameTitle}`);
  console.log(`Elements: ${totalElements}`);
  return;
});
