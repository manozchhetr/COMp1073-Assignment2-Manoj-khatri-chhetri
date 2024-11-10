class Smoothie {
    constructor(size, base, ingredients, sweetness) {
        this.size = size;
        this.base = base;
        this.ingredients = ingredients;
        this.sweetness = sweetness;
    }

    getDescription() {
        let description = `Size: ${this.size} <br>`;
        description += `Base: ${this.base} <br>`;
        description += `Ingredients: ${this.ingredients.join(', ')} <br>`;
        description += `Sweetness: ${this.sweetness} <br>`;
        return description;
    }
}document.getElementById("orderButton").addEventListener("click", function() {
    const size = document.getElementById("size").value;
    const base = document.getElementById("base").value;
    const sweetness = document.getElementById("sweetness").value;
    const ingredients = Array.from(document.querySelectorAll("input[name='ingredient']:checked"))
                             .map(ingredient => ingredient.value);

    const smoothie = new Smoothie(size, base, ingredients, sweetness);
});

