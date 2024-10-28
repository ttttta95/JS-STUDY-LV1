// 1.
function throwError(msg: string): never {
    throw new Error(msg);
}

// 2.
function infiniteLoop(): never {
    while (true) {}
}

// 3.
let x: never;

function neverReturn(): never {
    while (true) {}
}

x = neverReturn(); // 함수가 아무것도 반환하지 않기 때문에 에러 발생