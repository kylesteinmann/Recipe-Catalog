let addIngredientsButton = document.querySelector(".addIngredient");
let ingredientList = document.querySelector(".ingredientList");

let ingredientListArray = [];
let recipeMethod = {}
let addedIngredientsArray = [];
let i = (-1);

addIngredientsButton.addEventListener("click", () => {
    

    i = i + 1;
    
    let ingredientContainer = document.createElement("div");
    let numberOfUnits = document.createElement("input");
    let unit = document.createElement("input");
    let ingredient = document.createElement("input");
   
    let ingredientKey = "ingredient" + i;
      
    ingredientContainer.className = "ingredientContainer row";
    
    numberOfUnits.type = "text";
    numberOfUnits.id = "numberOfUnits"  + i;
    numberOfUnits.className = "col form-control";
    numberOfUnits.placeholder = "Number of Units";
       
    unit.type = "text";
    unit.id = "unit"  + i;
    unit.className = "col form-control";
    unit.placeHolder = "Measuring Unit"
        
    ingredient.type = "text";
    ingredient.id = "ingredient"  + i;
    ingredient.className = "col form-control";
    ingredient.placeholder = "Ingredient";
    
    ingredientList.appendChild(ingredientContainer);
   
    ingredientContainer.appendChild(numberOfUnits);
    ingredientContainer.appendChild(unit);
    ingredientContainer.appendChild(ingredient);
   
    
    let nameInput = document.querySelector(".recipeName");
    let nameText = nameInput.value;
    recipeMethod.name = nameText;
   
    if (i>0) {
        let numberOfUnitsInput = document.querySelector("#numberOfUnits" + (i - 1));
        let numberOfUnitsText = numberOfUnitsInput.value;
        let unitInput = document.querySelector("#unit" + (i - 1));
        let unitText = unitInput.value;
        let ingredientInput = document.querySelector("#ingredient" + (i - 1));
        let ingredientText = ingredientInput.value; 
        recipeMethod[ingredientKey] = (numberOfUnitsText + " " + unitText + " " + ingredientText)
    };

    
    
    console.log(recipeMethod)
    console.log(ingredientListArray)
    console.log(i)
  
});

let addRecipeButton = document.querySelector(".addRecipe")

 ingredientListArray.push(recipeMethod);