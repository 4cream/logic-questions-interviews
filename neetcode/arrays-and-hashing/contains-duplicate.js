// Given an integer array nums, return true if any value appears more than once in the array, 
// otherwise return false.
console.log("Js file running");

function hasDuplicate(nums) {

    const seen = new Set();

    // No fue buena solucion ya que itera por posiciones, y al tener un num grande en el inicio del array
    // no se encuentra la posicion en el arreglo
    // for(let num of nums) {
    //     debugger;
    //     if(!seen.has(nums[num])) {
    //         seen.add(nums[num]);
    //     } else {
    //         return true;
    //     }
    // }

    // O(n) Solution
    for(let num of nums) {
        // debugger;
        if(!seen.has(num)) {
            seen.add(num);
        } else {
            return true;
        }
    }
    
    return false;

}


// const nums = [1, 2, 3, 3];
const nums = [8, 3, 2, 3, 1];
console.log(hasDuplicate(nums));
