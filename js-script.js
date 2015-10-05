var number1 = new Array(m);
var number2 = new Array(n);
while (n > m) {
        number1.unshift(0);
}
while (n < m) {
    number2.unshift(0);
}
var sum = new Array(m+1);
var carry = 0;
for (var i = m-1; i >= 0; i--) {
    sum[i + 1] = (number1[i] + number2[i] + carry) % 10;
    carry = Math.floor((number1[i] + number2[i] + carry) / 10);
    if (i == 0 && carry != 0) {
        sum[0] = 1;
    }
    else {
        sum[0] = 0;
    }
}
if (sum[0] == 0) {
    sum.shift();
}
for (var j = 0; j < sum.length; j++) {
    document.write(sum[j])
}
