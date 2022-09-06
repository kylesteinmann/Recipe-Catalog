let addIngredientsButton = document.querySelector(".addIngredient");
let ingredientList = document.querySelector(".ingredientList");
let ingredientListArray = [];
let recipeMethod = {};
let recipesArray = JSON.parse(localStorage.getItem("recipes")) || [];
let recipeForm = document.querySelector(".recipeForm");
let addRecipeButton = document.querySelector(".addRecipe");
let ingredientClassIncrement = 0;

function createIngredientInputs() {
    let ingredientEntryContainer = document.createElement("div");
    ingredientEntryContainer.className = "ingredientEntryContainer";

    let numberOfUnits = document.createElement("input");
    numberOfUnits.type = "text";
    numberOfUnits.id = "numberOfUnits" + ingredientClassIncrement;
    numberOfUnits.className = "col form-control";
    numberOfUnits.placeholder = "Number of Units";
    
    let unit = document.createElement("input");
    unit.type = "text";
    unit.id = "unit" + ingredientClassIncrement;
    unit.className = "col form-control";
    unit.placeholder = "Measuring Unit"
   
    let ingredient = document.createElement("input");
    ingredient.type = "text";
    ingredient.id = "ingredient" + ingredientClassIncrement;
    ingredient.className = "col form-control";
    ingredient.placeholder = "Ingredient";
    
    ingredientList.appendChild(ingredientEntryContainer);
    ingredientEntryContainer.appendChild(numberOfUnits);
    ingredientEntryContainer.appendChild(unit);
    ingredientEntryContainer.appendChild(ingredient);
    
}
function idAssignment() {
    if (recipesArray.length > 0) {
        let lastUsedId = recipesArray.length - 1
        let findIdIncrement = recipesArray[lastUsedId];
        let nextIdIncrement = findIdIncrement.id 
        recipeMethod.id = nextIdIncrement + 1
    } else {
        recipeMethod.id = 0
  }
 }
function addTextInputs(){
    let nameInput = document.querySelector(".recipeName");
    let nameText = nameInput.value;
        if(nameText != "") {
            pushNameInputToObject()
            pushIngredientsInputToObject()
            ingredientClassIncrement++;
        } else {
            alert("Please enter the name of your recipe!");
            location.reload()
    
    
};
function pushNameInputToObject() {
    if(ingredientClassIncrement > 0){
        
        let nameInput = document.querySelector(".recipeName");
        let nameText = nameInput.value;
        recipeMethod.name = nameText;          
        };     
    ;}
};
function pushIngredientsInputToObject() {
       if(ingredientClassIncrement>0) {
        let numberOfUnitsInput = document.querySelector("#numberOfUnits" + (ingredientClassIncrement - 1));
        let numberOfUnitsText = numberOfUnitsInput.value;
        let unitInput = document.querySelector("#unit" + (ingredientClassIncrement - 1));
        let unitText = unitInput.value;
        let ingredientInput = document.querySelector("#ingredient" + (ingredientClassIncrement - 1));
        let ingredientText = ingredientInput.value; 

        ingredientListArray.push(numberOfUnitsText + " " + unitText + " " + ingredientText);
        recipeMethod.ingredients = ingredientListArray
       }
       
};
function createRecipeCards() {
    for(i = 0; i < recipesArray.length; i++) {

        let recipeContainer = document.querySelector(".recipeCardsContainer");
        let recipeCard = document.createElement("div");
        recipeCard.className = "recipeCard"
        let recipeCardName = document.createElement("h1");
        recipeCardName.className = ("individualRecipeName")
        let removeIcon = document.createElement("div")
        removeIcon.className = "removeIcon"
        if(recipesArray.length > 0) {
            removeIcon.Id = recipesArray[i].id;
        }
        

        let recipeData = recipesArray[i];
        let recipeNameString = recipeData.name;
                
        recipeCardName.innerText = recipeNameString;
        
        recipeContainer.appendChild(recipeCard);
        recipeCard.appendChild(recipeCardName);
        recipeCardName.appendChild(removeIcon)
        let ingredientsString = recipeData.ingredients;

        for(index = 0; index < ingredientsString.length; index++) {
        let recipeCardIngredients = document.createElement("p")
        recipeCardIngredients.className = ("individualIngredients")        
        
        recipeCardIngredients.innerText = ingredientsString[index];  
        recipeCard.appendChild(recipeCardIngredients);
        };       
    };
    
};

createRecipeCards(); 

addIngredientsButton.addEventListener("click", () => {
createIngredientInputs()
addTextInputs();
});
addRecipeButton.addEventListener("click", () => {
    
    addTextInputs();

    idAssignment();

    recipesArray.push(recipeMethod);    

    localStorage.setItem("recipes", JSON.stringify(recipesArray));   
    
    location.reload();
});

let removeRecipeIcon = document.querySelectorAll(".removeIcon");

removeRecipeIcon.forEach(removeRecipe => {
    removeRecipe.addEventListener("click", (e) => {    
    let removalIndex = recipesArray.findIndex(function findRemovalIndex(recipesArray) {
            return recipesArray.id === e.target.Id;
        });    

    recipesArray.splice(removalIndex,1);   
    localStorage.setItem("recipes", JSON.stringify(recipesArray));        
    location.reload()      
    });
});
