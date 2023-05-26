"use strict";
// ! function
// ? Named function
function create() {
    return "create";
}
// ? Arrow function
const create2 = () => "create2";
// ? Anonymous function
const create3 = function () {
    return "create3";
};
// ? Anonymous arrow function
const create4 = function () {
    return "create4";
};
console.log(create4());
// void
function print() {
    console.log("print");
}
print();
// ? Optional parameter
function add(x, y) {
    console.log(`${x} ditambah ${y} hasilnya ${x + y}`);
}
add(1, 2);
// ? Optional parameter
function add2(x, y) {
    return `${x} ditambah ${y} hasilnya ${x + y}`;
}
console.log(add2(10, 2));
