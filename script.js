// Smoothie class definition
class Smoothie {
    constructor(size, base, ingredients, sweetness) {
        this.size = size;
        this.base = base;
        this.ingredients = ingredients;
        this.sweetness = sweetness;
    }

    // Method to get a description of the smoothie
    getDescription() {
        let description = `Size: ${this.size} <br>`;
        description += `Base: ${this.base} <br>`;
        description += `Ingredients: ${this.ingredients.join(', ')} <br>`;
        description += `Sweetness: ${this.sweetness} <br>`;
        return description;
    }
}

// Event listener for the order button
document.getElementById("orderButton").addEventListener("click", function() {
    // Get values from the form
    const size = document.getElementById("size").value;
    const base = document.getElementById("base").value;
    const sweetness = document.getElementById("sweetness").value;
    const ingredients = Array.from(document.querySelectorAll("input[name='ingredient']:checked"))
                             .map(ingredient => ingredient.value);

    // Create a new smoothie object
    const smoothie = new Smoothie(size, base, ingredients, sweetness);

    // Display the smoothie description
    document.getElementById("orderDetails").innerHTML = smoothie.getDescription();
    document.getElementById("orderSummary").style.display = "block";
});
