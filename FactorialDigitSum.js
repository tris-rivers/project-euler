/*--------------------------------------------------------------------------------
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
--------------------------------------------------------------------------------*/
var num = 100;
var factorial = 1;
var rem = 0;
var sum = 0;

/****Computes for the factorial****/
for(var i = 1; i <= num; i++){
  factorial *= i;
}

/****Computes for the sum of the digits****/
while(factorial !== 0){
  rem = factorial%10;
  sum += rem; 
  factorial = Math.floor(factorial/10);
}

console.log(sum);