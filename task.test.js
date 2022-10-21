const {hello, sum, myRand, factorial, maxElem} = require('./task.js')

// test('Test hello', () => {
//     expect(hello()).toBe("Hello world!");
// });

// test('Test sum', () => {
//     expect(sum(1, 2)).toBe(3);
//     expect(sum(1000, 2001)).toBe(3001);
//     expect(sum(1.1, 2.2)).toBeCloseTo(3.3, 5);
// });

// test('Random', () => {
//     expect(myRand(1, 1)).toBe(1);
//     expect(myRand(1.1, 1.1)).toBe(1.1);
// });

// test('Test factorial', () => {
//     expect(factorial(0)).toBe(1);
//     expect(factorial(10)).toBe(1*2*3*4*5*6*7*8*9*10);
//     expect(factorial(5)).toBe(120);
// });

test('Test max', ()=>{
    expect(maxElem([1,2,3,4])).toBe(4);
    expect(maxElem([-5,-6,-3])).toBe(-3);
});