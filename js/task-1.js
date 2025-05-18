const categories = document.querySelectorAll('.list .item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const title = category.querySelector('.title').textContent;
  const elementsCount = category.querySelectorAll(
    '.small-list .small-items'
  ).length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
