// Function to display object properties
function practice1() {
    let obj = {
        name: "John",
        age: 30,
        isStudent: true
    };

    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

// Function to display array values
function practice2() {
    let arr = ["Hello", 42, false];

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// Function to display properties of objects in an array
function practice3() {
    let objectsArray = [
        { name: "Alice", age: 25, isStudent: true },
        { name: "Bob", age: 28, isStudent: false },
        { name: "Charlie", age: 22, isStudent: true }
    ];

    objectsArray.forEach(obj => {
        for (let key in obj) {
            console.log(`${key}: ${obj[key]}`);
        }
    });
}
