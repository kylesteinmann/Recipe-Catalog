let addIngredientsButton = document.querySelector(".addIngredient");
let ingredientList = document.querySelector(".ingredientList");

addIngredientsButton.addEventListener("click", () => {

    let ingredientContainer = document.createElement("div");
    let numberOfUnits = document.createElement("input");
    let unit = document.createElement("input");
    let ingredient = document.createElement("input");
    
    
    ingredientContainer.className = "ingredientContainer row"
    
    numberOfUnits.type = "text";
    numberOfUnits.id = "numberOfUnits";
    numberOfUnits.className = "col form-control";
    numberOfUnits.placeholder = "Number of Units";
       
    unit.type = "select";
    unit.id = "unit";
    unit.className = "col form-control";
        
    ingredient.type = "text";
    ingredient.id = "ingredient";
    ingredient.className = "col form-control";
    ingredient.placeholder = "Ingredient";
    
    ingredientList.appendChild(ingredientContainer)
   
    ingredientContainer.appendChild(numberOfUnits);
    ingredientContainer.appendChild(unit);
    ingredientContainer.appendChild(ingredient);
});

addRecipe.addEventListener("submit", () => {

    let recipeForm = document.querySelector(".recipeForm")
    let recipeNameInput = recipeForm.querySelector("input[type=text]")
    
    function createRecipeCard(event) {
    let recipeName = recipeNameInput.value;
    let recipeCard = document.createElement("div");
    
    recipeCard.className = "recipeCard";
    recipeCard.innerText = "recipeName"
    
    ingredientList.appendChild(recipeCard);

    }  
})