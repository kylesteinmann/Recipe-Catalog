let addIngredientsButton = document.querySelector(".addIngredient");
let ingredientList = document.querySelector(".ingredientList");
let ingredientListArray = [];
let recipeMethod = {}
let recipesArray = JSON.parse(localStorage.getItem("recipes")) || [];
let recipeForm = document.querySelector(".recipeForm");
let addRecipeButton = document.querySelector(".addRecipe");

function pushNameInputToObject() {
    let nameInput = document.querySelector(".recipeName");
    let nameText = nameInput.value;
    recipeMethod.name = nameText;
}
function pushIngredientsInputToObject() {
        let numberOfUnitsInput = document.querySelector("#numberOfUnits");
        let numberOfUnitsText = numberOfUnitsInput.value;
        let unitInput = document.querySelector("#unit");
        let unitText = unitInput.value;
        let ingredientInput = document.querySelector("#ingredient");
        let ingredientText = ingredientInput.value; 

        ingredientListArray.push(numberOfUnitsText + " " + unitText + " " + ingredientText);
        recipeMethod.ingredients = ingredientListArray
}

function addTextInputs(){
    pushNameInputToObject()
    pushIngredientsInputToObject()
};

function createIngredientInputs() {
    let ingredientContainer = document.createElement("div");
    ingredientContainer.className = "ingredientContainer row";

    let numberOfUnits = document.createElement("input");
    numberOfUnits.type = "text";
    numberOfUnits.id = "numberOfUnits";
    numberOfUnits.className = "col form-control";
    numberOfUnits.placeholder = "Number of Units";
    
    let unit = document.createElement("input");
    unit.type = "text";
    unit.id = "unit";
    unit.className = "col form-control";
    unit.placeholder = "Measuring Unit"
   
    let ingredient = document.createElement("input");
    ingredient.type = "text";
    ingredient.id = "ingredient";
    ingredient.className = "col form-control";
    ingredient.placeholder = "Ingredient";
    
    ingredientList.appendChild(ingredientContainer);
    ingredientContainer.appendChild(numberOfUnits);
    ingredientContainer.appendChild(unit);
    ingredientContainer.appendChild(ingredient);
}

addIngredientsButton.addEventListener("click", () => {
createIngredientInputs()
addTextInputs();
});

addRecipeButton.addEventListener("click", () => {
    
    addTextInputs();

    recipesArray.push(recipeMethod);

    localStorage.setItem("recipes", JSON.stringify(recipesArray));
 
    location.reload();
});

console.table(recipesArray);

// pull and create recipe cards from local storage array. 

//................NOT FINISHED...........................................................
// for(i = 0; i < recipesArray.length; i++) {

//     let recipeContainer = document.querySelector(".recipeCardsContainer");
//     let recipeCard = document.createElement("div");

//     recipeContainer.appendChild(recipeCard);

//     recipeCard.textContent(recipesArray[i]);   
// };

