// Confirm the Ending - https://www.youtube.com/watch?v=9ilI_QRGq28

function confirmEnding(str, target) {
    return str.substring(str.length - target.length) === target;
}

console.log(confirmEnding("Abstraction", "action")); 
