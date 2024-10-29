type UserInfo = {
    first: string;
    last: string;
    age: number;
};

type AccountDetails = {
    email: string;
    password: string;
};

type User2 = UserInfo & AccountDetails;

const Hyojin: User2 = {
    first: "Hyojin",
    last: "Park",
    age: 27,
    email: "hyojinee@dgsw.hs.kr",
    password: "1234",
};