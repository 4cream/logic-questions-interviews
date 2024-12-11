// Iterate Through All an Array's Items Using For Loops - https://www.youtube.com/watch?v=FkR9bEBrUTk

function filteredArray(arr, elem) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].indexOf(elem) === -1) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

console.log(filteredArray(
    [
        [10, 8, 3],
        [14, 6, 23],
        [3, 18, 6]
    ], 18
));

console.log(filteredArray(
    [
        [23, 1, 3],
        [18, 13, 3],
        [13, 18, 3]
    ], 18
));


