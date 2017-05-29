/*--------------------------------------------------------------------
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
--------------------------------------------------------------------*/
var result = 0;
var sum = 0;
var mod = 0;

result = Math.pow(2, 1000); //Math.pow(base, power)

while(result!==0){
  mod = result%10;
  sum += mod;
  result = Math.floor(result/10);
}

console.log(sum);