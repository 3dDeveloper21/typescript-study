"use strict";
let message = () => {
    console.log('hello world');
};
let greet;
greet = () => {
    console.log('hello, again');
};
// optionial ?
const add = (a, b, c) => {
    console.log(a + b);
};
// default parameter
const minus = (a, b, c = 10) => {
    console.log(a - b);
};
add(3, 4);
