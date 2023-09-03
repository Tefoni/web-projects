const mealButton = document.querySelector(".meal-button");

mealButton.addEventListener('click',() => {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php').then(meal => meal.json()).then(meal => updatePage(meal));
});

function getIngredients(meal) {
  ingredients = '';
  for (let index = 0; index < 20; index++) {
    if(meal[`strIngredient${index+1}`]){
      ingredients += `<p>•${meal[`strIngredient${index+1}`]} - ${meal[`strMeasure${index+1}`]}</p>`
    }
    
  }
  return ingredients;
}

function updatePage(data) {
  const meal = data.meals[0];
  console.log(meal)
  
  videolink = meal.strYoutube.replace("watch?v=","embed/");
  let mealHTML = document.querySelector(".js-meal-grid");
  
  mealHTML.innerHTML = `<div>
  <img src='${meal.strMealThumb}' style='height: 400px;'>
  <p><span style='font-weight: bold;'>Category:</span> ${meal.strCategory}</p>
  <p><span style="font-weight: bold;">Area:</span> ${meal.strArea}</p>
  <p><span style="font-weight: bold;">Tags:</span> ${meal.strTags ? meal.strTags : ""}</p>
  <p style="font-size: 32px;">Ingredients:</p>
  <div style="padding-left: 12px;">
    ${getIngredients(meal)}
    <p style="font-size: 32px;">Video Recipe</p>
  </div>
</div>
<div>
  <p style="font-weight: 500;font-size: 36px;">Ma Po Tofu</p>
  <p>${meal.strInstructions}</p>
</div>
<div>
<iframe width="560" height="315" src="${videolink}" frameborder="0" allowfullscreen></iframe>
</div>`
}






