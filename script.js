let addIngredientsButton = document.querySelector(".addIngredient");
let ingredientList = document.querySelector(".ingredientList");
let ingredientListArray = [];
let recipeMethod = {}
let recipesArray = JSON.parse(localStorage.getItem("recipes")) || [];
let recipeForm = document.querySelector(".recipeForm");
let ingredientIncrement = 0;
let addRecipeButton = document.querySelector(".addRecipe")


function pushNameInputToObject() {
    let nameInput = document.querySelector(".recipeName");
    let nameText = nameInput.value;
    recipeMethod.name = nameText;
}
function pushIngredientsInputToObject() {
 if (ingredientIncrement>0) {
        let ingredientKey = "ingredient" + ingredientIncrement;
        let numberOfUnitsInput = document.querySelector("#numberOfUnits" + (ingredientIncrement -1));
        let numberOfUnitsText = numberOfUnitsInput.value;
        let unitInput = document.querySelector("#unit" + (ingredientIncrement -1));
        let unitText = unitInput.value;
        let ingredientInput = document.querySelector("#ingredient" + (ingredientIncrement -1));
        let ingredientText = ingredientInput.value; 
        recipeMethod[ingredientKey] = (numberOfUnitsText + " " + unitText + " " + ingredientText);
    }
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
    numberOfUnits.id = "numberOfUnits"  + ingredientIncrement;
    numberOfUnits.className = "col form-control";
    numberOfUnits.placeholder = "Number of Units";
    
    let unit = document.createElement("input");
    unit.type = "text";
    unit.id = "unit"  + ingredientIncrement;
    unit.className = "col form-control";
    unit.placeholder = "Measuring Unit"
   
    let ingredient = document.createElement("input");
    ingredient.type = "text";
    ingredient.id = "ingredient"  + ingredientIncrement;
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
    
    ingredientIncrement = ingredientIncrement + 1;
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

