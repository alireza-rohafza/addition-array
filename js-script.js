function func1() {
    var numb1 = document.getElementById("num1").value;
    var numb2 = document.getElementById("num2").value;
    var m = numb1.length;
    var n = numb2.length;
    var number1 = new Array(m);
    var number2 = new Array(n);
   // var e = number1.length;
   // var f = number2.length;
    for (var a = 0; a < m; a++) {
        number1[a] = numb1.substr(a, 1);
    }
    for (var b = 0; b < n; b++) {
        number2[b] = numb2.substr(b, 1);
    }
    //there is a problem in these two whiles
    while (number2.length > number1.length) {
        number1.unshift(0);
    }
    while (number2.length < number1.length) {
        number2.unshift(0);
    }
    var sum = new Array(m + 1);
    var carry = 0;
    for (var i = m - 1; i >= 0; i--) {
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
}
