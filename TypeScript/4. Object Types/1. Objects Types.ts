const person: { firstName: string; lastName: string; age: number; } = {
    firstName: "Yoon",
    lastName: "Seok",
    age: 27,
};

console.log(`First Name: ${person.firstName}`);


function printUser(): { name: string; age: number; location: string; } {
    return {
        name: "Yoon Seok",
        age: 27,
        location: "Seoul",
    };
}

const res = printUser();
console.log(res);