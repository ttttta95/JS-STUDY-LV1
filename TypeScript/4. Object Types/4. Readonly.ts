type person = {
    name: string;
    age: number;
    readonly email: string;
};

const user1: person = {
    name: "Yoon Seok",
    age: 27,
    email: "test@gmail.com", // 이후 코드에서 email 변경 불가능
};