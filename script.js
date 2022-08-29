let addIngredientsButton = document.querySelector(".addIngredient");
let ingredientList = document.querySelector(".ingredientList");

let ingredientListArray = [];
let recipeMethod = {}
let recipesArray = JSON.parse(localStorage.getItem("recipes")) || [];
let ingredientIncrement = (-1);
let ingredientKey = "ingredient" + ingredientIncrement;

let = recipeForm = document.querySelector(".recipeForm");



addIngredientsButton.addEventListener("click", () => {
    
    // creates next ingredient input boxes when add ingredient button is checked. 

    i = i + 1;
    
    let ingredientContainer = document.createElement("div");
    let numberOfUnits = document.createElement("input");
    let unit = document.createElement("input");
    let ingredient = document.createElement("input");
   
    let ingredientKey = "ingredient" + ingredientIncrement;
      
    ingredientContainer.className = "ingredientContainer row";
    
    numberOfUnits.type = "text";
    numberOfUnits.id = "numberOfUnits"  + ingredientIncrement;
    numberOfUnits.className = "col form-control";
    numberOfUnits.placeholder = "Number of Units";
       
    unit.type = "text";
    unit.id = "unit"  + ingredientIncrement;
    unit.className = "col form-control";
    unit.placeholder = "Measuring Unit"
        
    ingredient.type = "text";
    ingredient.id = "ingredient"  + ingredientIncrement;
    ingredient.className = "col form-control";
    ingredient.placeholder = "Ingredient";
    
    ingredientList.appendChild(ingredientContainer);
   
    ingredientContainer.appendChild(numberOfUnits);
    ingredientContainer.appendChild(unit);
    ingredientContainer.appendChild(ingredient);
   
    // adds and updates recipe object when add ingredient button is clicked. 
    
    let nameInput = document.querySelector(".recipeName");
    let nameText = nameInput.value;
    recipeMethod.name = nameText;
   
    if (i>0) {
        let numberOfUnitsInput = document.querySelector("#numberOfUnits" + (ingredientIncrement - 1));
        let numberOfUnitsText = numberOfUnitsInput.value;
        let unitInput = document.querySelector("#unit" + (ingredientIncrement - 1));
        let unitText = unitInput.value;
        let ingredientInput = document.querySelector("#ingredient" + (ingredientIncrement - 1));
        let ingredientText = ingredientInput.value; 
        recipeMethod[ingredientKey] = (numberOfUnitsText + " " + unitText + " " + ingredientText)
    }; 
});


let addRecipeButton = document.querySelector(".addRecipe")

//object recipe into array as a method after add recipe is clicked. 

addRecipeButton.addEventListener("click", () => {
    ingredientIncrement++;

    let numberOfUnitsInput = document.querySelector("#numberOfUnits" + (ingredientIncrement - 1));
    let numberOfUnitsText = numberOfUnitsInput.value;
    let unitInput = document.querySelector("#unit" + (ingredientIncrement - 1));
    let unitText = unitInput.value;
    let ingredientInput = document.querySelector("#ingredient" + (ingredientIncrement - 1));
    let ingredientText = ingredientInput.value; 
    recipeMethod[ingredientKey] = (numberOfUnitsText + " " + unitText + " " + ingredientText)

 recipesArray.push(recipeMethod);

 localStorage.setItem("recipes", JSON.stringify(recipesArray));
 
 location.reload()
});
// pull and great recipe cards from local storage array. 

//................NOT FINISHED...........................................................
for(i = 0; i < recipesArray.length; i++) {

    let recipeCardContainer = document.querySelector(".recipeCardContainer");
    let recipeCard = document.createElement("div");

    recipeCard.className = "recipeCard";
    
    recipeCardContainer.appendChild(recipeCard);

    recipeCard.innerText(recipesArray[i]);
};
console.table(recipesArray);
