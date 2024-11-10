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
}
