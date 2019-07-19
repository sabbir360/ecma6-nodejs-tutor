//for import issue of ecma6 https://github.com/babel/example-node-server
// import {CarX} from './Car.js';
// import issue ecma6 https://nodejs.org/api/esm.html
// make file as mjs // node --experimental-modules my-app.js # Runs as ES module

// let Car = require('./class_example.js').Car;
// let RunCar = require('./class_example.js').RunCar;
// let l = require('./class_example.js').l;
import {Car, RunCar, l} from "./class_example";

// function
const addition = (x, y) => {
    console.log(x);
    return x * y;
};
l("Function");
l(addition(2,3));

//class
l("Class example");
let my_car = new Car("AQUA 2014");
my_car.show();

l("Inherit example");
let run_car = new RunCar("AQUA 2014");
run_car.show();

// find
l("Find example");
let numbers = [1, 2, 5, 8];

let find_number = (value, index, array) => {
    return value === 5;
};

if (numbers.find(find_number)) {
    l("Found number.");
} else {
    l("Missing number.");
}

/*
//find index

let find_index = (value, index, array) => {
    return value === 99;
};

if (numbers.findIndex(find_index)) {
    l("Found Index.");
} else {
    l("Missing Index.");
}
*/

//for each
l("For each example.")
let for_each = (iter) => {
    l(iter, "FOR EACH");
};

numbers.forEach(for_each);

//key value
l("Key value example");
let key_value_items = {
    FirstName: "Sabbir",
    LastName: "Ahmed"
};

for (let k in key_value_items) {
    if (k) {
        l(k, "Key");
        l(key_value_items[k], "Value");
    }

}

l(key_value_items.FirstName);

key_value_items = [key_value_items, {FirstName: "Mark", LastName: "Alexander"}];
for (let k in key_value_items) {
    if (key_value_items[k]) {
        l(key_value_items[k].FirstName, "Item");
        l(key_value_items[k].LastName, "Item");
    }

}