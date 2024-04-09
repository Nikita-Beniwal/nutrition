document.addEventListener('DOMContentLoaded', function() {
    const foodSelect = document.getElementById('food-select');
    const benefitsText = document.getElementById('benefits-text');
    const fullBodyContainer = document.getElementById('full-body-container');
    const svgContainer = document.getElementById('svg-container');

    showFullBodySvg();
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
        { "name": "Melon", "bodyPartsAffected": ["Eyes", "ImmuneSystem", "Kidneys"] },
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
        { "name": "Cucumber", "bodyPartsAffected": ["Kidneys", "Skin"] },
        { "name": "Lettuce", "bodyPartsAffected": ["Kidneys"] },
        { "name": "Lemon", "bodyPartsAffected": ["Kidneys", "ImmuneSystem", "Skin"] },
        { "name": "Grapefruit", "bodyPartsAffected": ["ImmuneSystem", "Skin", "Brain"] },
        { "name": "Cranberries", "bodyPartsAffected": ["Bladder", "Kidneys", "Heart"] },
        { "name": "Watermelon", "bodyPartsAffected": ["Kidneys", "Heart", "Muscles"] },
        { "name": "Pomegranate", "bodyPartsAffected": ["Heart", "Brain", "Prostate"] },
        { "name": "Figs", "bodyPartsAffected": ["Digestion", "Bones", "BloodPressure"] },
        { "name": "Papaya", "bodyPartsAffected": ["Eyes", "Digestion", "ImmuneSystem"] },
    ];

    const organMap = {
        "Brain": "Brain.svg",
        "Heart": "Heart.svg",
        "Lungs": "Respiratory System.svg",
        "BloodPressure": "Circulatory System.svg",
        "Digestion": "Digestive System.svg",
        "ImmuneSystem": "Immune System.svg",
        "Eyes": "Eyes.svg",
        "Skin": "Skin.svg",
        "Kidneys": "Kidneys & Bladder.svg",
        "Bladder": "Kidneys & Bladder.svg",
        "Stomach": "Stomach.svg",
        "Thymus": "Thymus.svg",
        "Appendix": "Appendix.svg",
        "Liver": "Liver & Gallbladder.svg",
        "Gallbladder": "Liver & Gallbladder.svg",
        "Pancreas": "Pancreas.svg",
        "SmallIntestine": "Small Intestine.svg",
        "LargeIntestine": "Large Intestine.svg",
        "Spleen": "Spleen.svg",
        "Bones": "Bones.svg",
        "Prostate": "Excretory System.svg",
        "Muscles": "Muscles.svg",
        "Prostate": "Prostate",
        "Thyroid": "Thyroid.svg",
        "MaleEndocrine": "Male Endocrine System.svg",
        "FemaleEndocrine": "Female Endocrine System.svg"
    };

    const defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.textContent = "Select a food";
    defaultOption.selected = true;
    defaultOption.disabled = true;
    foodSelect.appendChild(defaultOption);

    // Populate dropdown with food options
    foods.forEach(food => {
        const option = document.createElement('option');
        option.value = food.name;
        option.textContent = food.name;
        foodSelect.appendChild(option);
    });

    foodSelect.addEventListener('change', function() {
        const selectedFoodName = this.value;
        const selectedFood = foods.find(food => food.name === selectedFoodName);
        if (selectedFood) {
            benefitsText.textContent = `${selectedFood.bodyPartsAffected.join(', ')}`;
            updateSvgDisplay(selectedFood.bodyPartsAffected, organMap);
        } else {
            showFullBodySvg();
        }
    });

    function updateSvgDisplay(partsAffected, organMap) {
        svgContainer.innerHTML = ''; // Clear previous SVGs
        partsAffected.forEach(part => {
            const svgFileName = organMap[part];
            const img = document.createElement('img');
            img.src = `BodyOrgans/${svgFileName}`;
            img.alt = part;
            svgContainer.appendChild(img);
        });
        svgContainer.style.display = 'flex'; // Ensure SVG container is visible
    }

    function showFullBodySvg() {
        document.getElementById('svg-container').style.display = 'none';
        document.querySelector('.full-body-container').style.display = 'flex';
    }

});
