let addIngredientsButton = document.querySelector(".addIngredient");
let ingredientList = document.querySelector(".ingredientList");

let ingredientListArray = [];
let recipeMethod = {}
let addedIngredientsArray = [];

addIngredientsButton.addEventListener("click", () => {

    let ingredientContainer = document.createElement("div");
    let numberOfUnits = document.createElement("input");
    let unit = document.createElement("input");
    let ingredient = document.createElement("input");
      
    let i = 0;

    ingredientContainer.className = "ingredientContainer row";
    
    numberOfUnits.type = "text";
    numberOfUnits.id = "numberOfUnits";
    numberOfUnits.className = "col form-control";
    numberOfUnits.placeholder = "Number of Units";
       
    unit.type = "text";
    unit.id = "unit";
    unit.className = "col form-control";
    unit.placeHolder = "Measuring Unit"
        
    ingredient.type = "text";
    ingredient.id = "ingredient";
    ingredient.className = "col form-control";
    ingredient.placeholder = "Ingredient";
    
    ingredientList.appendChild(ingredientContainer);
   
    ingredientContainer.appendChild(numberOfUnits);
    ingredientContainer.appendChild(unit);
    ingredientContainer.appendChild(ingredient);
   
    let nameInput = document.querySelector(".recipeName");
    let nameText = nameInput.value;
    let numberOfUnitsInput = document.querySelector("#numberOfUnits");
    let numberOfUnitsText = numberOfUnitsInput.value;
    let unitInput = document.querySelector("#unit");
    let unitText = unitInput.value;
    let ingredientInput = document.querySelector("#ingredient");
    let ingredientText = ingredientInput.value; 

    recipeMethod.name = nameText;
    addedIngredientsArray.push(numberOfUnitsText + " " + unitText + " " + ingredientText);   
    recipeMethod.ingredient = addedIngredientsArray
    ingredientListArray.push(recipeMethod)
    
    console.log(recipeMethod)
    console.log(ingredientListArray)
   i++
});
