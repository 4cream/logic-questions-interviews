
/* 
Funciones recursivas para copiar objetos, y por ejemplo funciones dentro de esos objetos
https://platzi.com/home/clases/2419-javascript-poo-intermedio/39814-que-es-recursividad/ 
*/
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

const obj2 = {};

for(prop in obj1) {
    obj2[prop] = obj1[prop];
}

const obj3 = Object.assign({}, obj1); // copia objetos pero sigue copiando la referencia de obj1
const obj4 = Object.create(obj1); // copia objetos pero sigue copiando la referencia de obj1
//si este hereda de obj1, y obj1 es modificado, esto se refleja en este obj4 no pasa si es al contrario

// esta forma si funciona para objetos pero no puede hacerlo con metodos
const obj5 = JSON.stringify(obj1);
const obj6 = JSON.parse(obj5);

/* 
    Hoy ya se puede un metodo para copias profundas, se llama structuredClone(obj1)
    https://developer.mozilla.org/en-US/docs/Web/API/structuredClone

*/

