function bai1(arr) {
    arr.toString();
    arr.join();
    arr.join("+");

    return document.write('"' + arr + '"');
}

bai1(["Red", "Green", "While", "Black"]);
function bai2(number) {
    var str = number.toString();
    var newStr = [str[0]];
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] % 2 == 0 && str[i] % 2 == 0) {
            newStr.push('-', str[i]);
        } else {
            newStr.push(str[i]);
        }
    }
    return document.write(newStr.join(''));
}

bai2(2034658697);
function bai3(str) {
    const UPPER ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const LOWER = 'abcdefghijklmnopqrstuvwxyz';
    var newStr = [];
    //chuyen chu in thuong sang in hoa
    for (let i = 0;i<str.length;i++){
        if (UPPER.includes(str[i])){
            newStr.push(str[i].toLowerCase());
        } else if (LOWER.includes(str[i])){
            newStr.push(str[i].toUpperCase());
        } else {
            newStr.push(str[i]);
        }
    }
    return document.write(newStr.join(''))
}
bai3('The Quick Breown Fox');