const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(element => {
  const ingredient = document.createElement('li');
  ingredient.classList.add('item');
  ingredient.innerText = element;
  document.body.append(ingredient)
})