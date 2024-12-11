const array = [1, 2, "3", "4", 5];

function sumMIxedArray(arr) {
    let gatheredItems = [];

    for(let item of arr) {        
        if(typeof item !== 'number') {
            const convertedNum = Number(item);
            gatheredItems.push(convertedNum);
        } else {
            gatheredItems.push(item);
        }
    }

    // for(let i = 0; i < arr.length; i++) {
    //     // debugger;
    //     if(typeof arr[i] !== 'number') {
    //         const item = Number(arr[i]);
    //         gatheredItems.push(item);   
    //     } else {
    //         gatheredItems.push(arr[i]);
    //     }
    // }

    const result = gatheredItems.reduce((a, b) => a + b);
    
    return result;

}

console.log(sumMIxedArray(array));
