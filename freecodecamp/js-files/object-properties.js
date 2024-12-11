// Test only

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

let newFoods = {
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

// Object.assign para copiar objetos
const mixedFoods = Object.assign(newFoods, foods);
console.log("mixedFoods", mixedFoods);

const keysFood = Object.keys(newFoods);
console.log("keysFood", keysFood);

// Object.defineProperty para definir propiedades
const defineFood = Object.defineProperty(newFoods, "bananas", {
    value: 300,
    writable: false
});
console.log("defineFood", defineFood);

const createFood = Object.create(newFoods, {
    bananas: {
        value: 300,
        writable: false
    }
});
console.log("createFood", createFood);

// Object.setPrototypeOf para establecer el prototipo de un objeto
const setFood = Object.setPrototypeOf(newFoods, foods);
console.log("setPrototypeOf", setFood);




