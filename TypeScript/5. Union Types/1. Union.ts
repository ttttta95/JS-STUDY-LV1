let password: string | number = 20;

type UserInfo1 = {
    first: string;
    last: string;
    age: number;
};

type AccountDetails1 = {
    email: string;
    password: string;
};

let user3: UserInfo1 | AccountDetails1 = {
    first: "Hyojin",
    last: "Park",
    age: 27,
};