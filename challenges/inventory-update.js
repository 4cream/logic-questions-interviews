function updateInventory(arr1, arr2) {
    console.log("Original current Array = ", arr1);

    let currentProductObject = {};
    let newProductObject = {};

    currentProductObject = objectConverter(arr1);
    newProductObject = objectConverter(arr2);

    console.log("Current Items = ", currentProductObject);
    console.log("New Items = ", newProductObject);
    
    const newProductList = checkInventory(currentProductObject, newProductObject);
    console.log(newProductList);
    
    return newProductList;
}

function checkInventory(curInv, newInv) {
    
    const combinedInv = Object.assign({}, curInv);
    console.log("El combinedInv = ", combinedInv);

    for(let item in newInv) {
        if(combinedInv[item]) {
            combinedInv[item] += newInv[item];
        } else {
            combinedInv[item] = newInv[item];
        }
    }

    return combinedInv;
}

function objectConverter(arr) {

    convertedElements = {};

    for(let i = 0; i < arr.length; i++) {
        arr.sort();
        const item = arr[i][1];
        const quantity = arr[i][0];
        convertedElements[item] = quantity;
    }

    return convertedElements;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);