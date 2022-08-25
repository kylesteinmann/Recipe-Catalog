let addIngredientsButton = document.querySelector(".addIngredient");

addIngredientsButton.addEventListener("click", () => {

    let ingredientContainer = document.createElement("div");
    let numberOfUnits = document.createElement("input");
    let unit = document.createElement("input");
    let ingredient = document.createElement("input");
    let ingredientList = document.querySelector(".ingredientList");
    
    ingredientContainer.className = "ingredientContainer"
    
    numberOfUnits.type = "text";
    numberOfUnits.id = "numberOfUnits";
    numberOfUnits.className = "col";
    numberOfUnits.placeholder = "Number of Units";
       
    unit.type = "select";
    unit.id = "unit";
    unit.className = "col";
        
    ingredient.type = "text";
    ingredient.id = "ingredient";
    ingredient.className = "col";
    ingredient.placeholder = "Ingredient";
    
    ingredientList.appendChild(ingredientContainer)
   
    ingredientContainer.appendChild(numberOfUnits);
    ingredientContainer.appendChild(unit);
    ingredientContainer.appendChild(ingredient);
});