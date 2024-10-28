function double1(x: number): number {
    return x * x;
}

const res3 = double1(2);
console.log(res3); 

// 화살표 함수로 작성
const double2 = (x: number): number => x * x;
const res4 = double2(2);
console.log(res4);