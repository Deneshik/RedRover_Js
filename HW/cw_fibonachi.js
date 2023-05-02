/* I love Fibonacci numbers in general, but I must admit I love some more than others.
I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.

For example:
nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two. */

// https://www.codewars.com/kata/522551eee9abb932420004a0

// 0, 1, 1, 2, 3, 5, 8, 13, 21 - каждое последующее число - это сумма двух предыдущих
// 1, 2, 3, 4, 5, 6, 7, 8,  9 - элементы Фибоначчи

function fib(n) {
    n--;
    if (n == 0) return 0;
    if (n == 1) return 1;
    let arr = [0, 1];
    let sumArr = 0;
    for (let i = 2; i <= n; i++) {
        sumArr = arr.at(-1) + arr.at(-2);
        arr.push(sumArr);
    }
    return arr[n];
}

console.log(fib(5));
console.log(fib(8));
console.log(fib(10));
console.log(fib(16));