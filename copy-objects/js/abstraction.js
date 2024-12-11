


const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourse: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined,
    }
};

const juan = deepCopy(studentBase);

Object.defineProperty(juan, "name", {
    value: "juanito",
    configurable: false,
});

Object.seal(juan); // Es lo mismo que lo de arriba pero mas facil de hacer
juan.name = "juanito";

Object.isSealed(juan); // Nos muestra con True o False si todas las propiedades estan selladas
Object.isFrozen(juan); // Nos muestra con True o False si todas las propiedades estan congeladas