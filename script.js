document.addEventListener('DOMContentLoaded', function() {
    const foodSelect = document.getElementById('food-select');
    const benefitsText = document.getElementById('benefits-text');

    const foods = [
        { "name": "Apple", "bodyPartsAffected": ["Brain", "Heart", "Lungs"] },
        { "name": "Banana", "bodyPartsAffected": ["Heart", "BloodPressure", "Digestion"] },
        { "name": "Berries (various)", "bodyPartsAffected": ["Brain", "Heart", "Eyes"] },
        { "name": "Orange", "bodyPartsAffected": ["ImmuneSystem", "Skin", "Eyes"] },
        { "name": "Mango", "bodyPartsAffected": ["Eyes", "Digestion", "Skin"] },
        { "name": "Broccoli", "bodyPartsAffected": ["Heart", "Bones", "ImmuneSystem"] },
        { "name": "Spinach", "bodyPartsAffected": ["Brain", "Heart", "Eyes", "Bones"] },
        { "name": "Kale", "bodyPartsAffected": ["Heart", "Bones", "Eyes"] },
        { "name": "Carrots", "bodyPartsAffected": ["Eyes"] },
        { "name": "Sweet Potato", "bodyPartsAffected": ["Eyes", "ImmuneSystem"] },
        { "name": "Avocado", "bodyPartsAffected": ["Heart", "Eyes", "Skin"] },
        { "name": "Pineapple", "bodyPartsAffected": ["ImmuneSystem", "Digestion"] },
        { "name": "Pear", "bodyPartsAffected": ["Heart", "Digestion"] },
        { "name": "Kiwi", "bodyPartsAffected": ["Digestion", "Eyes", "ImmuneSystem"] },
        { "name": "Melon", "bodyPartsAffected": ["Eyes", "ImmuneSystem", "Hydration"] },
        { "name": "Grapes", "bodyPartsAffected": ["Heart", "Brain"] },
        { "name": "Tomato", "bodyPartsAffected": ["Heart", "Skin", "Prostate"] },
        { "name": "Bell Pepper", "bodyPartsAffected": ["Eyes", "ImmuneSystem", "Skin"] },
        { "name": "Onion", "bodyPartsAffected": ["Heart", "ImmuneSystem"] },
        { "name": "Garlic", "bodyPartsAffected": ["Heart", "BloodPressure", "ImmuneSystem"] },
        { "name": "Mushrooms", "bodyPartsAffected": ["ImmuneSystem", "Brain"] },
        { "name": "Asparagus", "bodyPartsAffected": ["Kidneys", "Bones"] },
        { "name": "Brussels Sprouts", "bodyPartsAffected": ["Heart", "Digestion", "ImmuneSystem"] },
        { "name": "Zucchini", "bodyPartsAffected": ["Eyes", "Heart", "Digestion"] },
        { "name": "Beets", "bodyPartsAffected": ["BloodPressure", "Brain", "Energy"] },
        { "name": "Celery", "bodyPartsAffected": ["Kidneys", "Hydration"] },
        { "name": "Green Beans", "bodyPartsAffected": ["Bones", "Digestion"] },
        { "name": "Cucumber", "bodyPartsAffected": ["Hydration", "Skin"] },
        { "name": "Lettuce", "bodyPartsAffected": ["Hydration"] },
        { "name": "Lemon", "bodyPartsAffected": ["Kidneys", "ImmuneSystem", "Skin"] },
        { "name": "Grapefruit", "bodyPartsAffected": ["ImmuneSystem", "Skin", "WeightManagement"] },
        { "name": "Cranberries", "bodyPartsAffected": ["Bladder", "Kidneys", "Heart"] },
        { "name": "Watermelon", "bodyPartsAffected": ["Hydration", "Heart", "Muscles"] },
        { "name": "Pomegranate", "bodyPartsAffected": ["Heart", "Brain", "Prostate"] },
        { "name": "Figs", "bodyPartsAffected": ["Digestion", "Bones", "BloodPressure"] },
        { "name": "Papaya", "bodyPartsAffected": ["Eyes", "Digestion", "ImmuneSystem"] },
    ];

    const defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.textContent = "Select a food";
    defaultOption.selected = true; 
    defaultOption.disabled = true;
    foodSelect.appendChild(defaultOption);

    // Populate the dropdown with food options
    foods.forEach(food => {
        const option = document.createElement('option');
        option.value = food.name;
        option.textContent = food.name;
        foodSelect.appendChild(option);
    });

    // Function to clear all highlights from the body SVG
    function clearHighlights() {
        document.querySelectorAll('.highlight').forEach(part => {
            part.classList.remove('highlight');
        });
    }

    // Function to highlight body parts affected by the selected food
    function highlightBodyParts(partsAffected) {
        clearHighlights(); // First, clear existing highlights
        partsAffected.forEach(part => {
            const bodyPartElement = document.getElementById(part);
            if (bodyPartElement) {
                bodyPartElement.classList.add('highlight');
            }
        });
    }

    // Listen for changes in the food selection dropdown
    foodSelect.addEventListener('change', function() {
        const selectedFoodName = this.value;
        if (selectedFoodName !== "") { // Check if a valid food is selected
            const selectedFood = foods.find(food => food.name === selectedFoodName);
            if (selectedFood) {
                // Update benefits text
                benefitsText.textContent = `${selectedFood.bodyPartsAffected.join(', ')}`;
                // Highlight body parts
                highlightBodyParts(selectedFood.bodyPartsAffected);
            }
        } else {
            // Clear benefits text and highlights if "Select a food" is somehow selected again
            benefitsText.textContent = "";
            clearHighlights();
        }
    });
});
