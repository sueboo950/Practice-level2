function practice1() {
    let obj = {
        name: "John",
        details: ["Hello", 42, true]
    };

    obj.details.forEach(detail => console.log(detail));
}

function practice2() {
    let obj = {
        prop1: ["String1", 1, true],
        prop2: ["String2", 2, false],
        prop3: ["String3", 3, true]
    };

    for (let prop in obj) {
        obj[prop].forEach(value => console.log(value));
    }
}
practice1();
practice2();