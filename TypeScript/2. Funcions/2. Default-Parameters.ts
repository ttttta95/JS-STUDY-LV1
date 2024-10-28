function greet(person: string = "Anonymous") {
    return `Hello ${person}`;
}

const res2 = greet();
console.log(res2); 