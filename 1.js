/*let n = 100;
let m = 5;
let c = 0;
while (n>m) {
    c = c + 1;
    n = n / 2;
}
console.log(c);*/

let N = 100;
let M = 5;

let availableCars = N;
let days = 0;

while (availableCars >= M) {
    availableCars /= 2;
    days++;
}

for (; availableCars >= M; days++) {
    availableCars /= 2;
}

console.log(days);