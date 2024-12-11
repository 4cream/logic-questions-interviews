const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e"
    },
    editA() {
        this.a = "AAAAA";
    }   
};

// function recursiva() {
//     if() {

//     } else {

//     }
// }

const numeros = [0,1,2,3,4,5,6,7,8];
// let numero = 0;
// for(let index = 0; index < numeros.length; index++) {
//     numero = numeros[index];
//     console.log({index, numero});  
// }

function recursiva(numbersArray) {
    if(numbersArray.length != 0) {
        const firstNum = numbersArray[0];
        console.log(firstNum);
        
        numbersArray.shift();
        recursiva(numbersArray),
    }
}