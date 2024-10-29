// 일반 함수
function addOne(num: number) {
    return num + 1;
}

const result = addOne(7);
console.log(result);

// 화살표 함수
const double = (x: number, y: number) => x * y;
const res1 = double(2, 10);
console.log(res1);