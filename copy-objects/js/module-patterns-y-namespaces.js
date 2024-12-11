//RORO = Receive an Object, return an Object
function createStudent({
    name = requiredParam("name"), 
    age, 
    email,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = []
} = {}) {
    const private = {
        "_name": name
    };

    const public = {
        age,
        email,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook
        },
        readName() {
            return private._name
            
        },
        changeName(newName) {
            private["_name"] = newName;
        }
    };

    // esta forma puede llegar a afectar uno de los pilares de OOP que es el polimorfismo
    // pero en este caso vale la pena porque no queremos que cambien la funcion para leer nuestro nombre
    Object.defineProperty(public, "readName", {
        writable: false,
        configurable: false,
    });
    Object.defineProperty(public, "changeName", {
        writable: false,
        configurable: false,
    });

    return public;
}

function requiredParam(param) {
    throw new Error(`${param} es obligatorio`);
}

const juan = createStudent({
    name: "juanito",
    age: 18,
    email: "juanito@gmail.com",
    twitter: "fjuan" 
});

console.log(juan);
