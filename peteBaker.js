function cakes(recipe, available) {
  // TODO: insert code
  const recipeArr = Object.keys(recipe)
  const availableArr = Object.keys(available)
  const canMake = recipeArr.every(ingredient => availableArr.includes(ingredient))
  if (canMake) {
    let divisions = [];
    for (const item of recipeArr) {
      const delta = Math.floor(available[item]/recipe[item])
      divisions.push(delta)
    }
    return Math.min(...divisions)
  }
  else {
    return 0
  }
}; 

const cake = cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})
console.log(cake)