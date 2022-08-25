let addIngredientsButton = document.querySelector(".addIngredient");

addIngredientsButton.addEventListener("click", () => {
    let numberOfUnits = document.createElement("input");
    
    numberOfUnits.type = "text";
    numberOfUnits.id = "numberOfUnits";
    numberOfUnits.className = "col row";
    numberOfUnits.placeholder = "Number of Units";

    let unit = document.createElement("input");
    
    unit.type = "select";
    unit.id = "unit";
    unit.className = "col";

    let ingredient = document.createElement("input");
    
    ingredient.type = "text";
    ingredient.id = "ingredient";
    ingredient.className = "col";
    ingredient.placeholder = "Ingredient";

    let ingredientList = document.querySelector(".ingredientList");
   
    ingredientList.appendChild(numberOfUnits);
    ingredientList.appendChild(unit);
    ingredientList.appendChild(ingredient);
});