type User = {
    name: string;
    age: number;
    location: string;
};

const printUserInfo = (user: User) => {
    return `Name: (${user.name}) Age: (${user.age}) Location: (${user.location})`;
};

const result = printUserInfo({ name: "Yoon Seok", age: 27, location: "Seoul" });
console.log(result); 