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

    return {
        name,
        age,
        email,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook
        }
    }
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
