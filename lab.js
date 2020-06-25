"use strict";
;
var mountains = [{ name: "Kilamanjaro", height: 19341 }, { name: "Everest", height: 29029 }, { name: "Denali", height: 20310 }];
function findTallestMountain(arr) {
    var lowest = arr[0];
    arr.forEach(function (element) {
        if (element.height > lowest.height) {
            lowest = element;
        }
    });
    return lowest.name;
}
;
var tallestMountain = findTallestMountain(mountains);
console.log(tallestMountain);
var products = [{ name: "Granola Bar", price: 5 }, { name: "Pencil", price: .50 }, { name: "Book", price: 35 }];
var calcAverageProductPrice = function (arr) {
    var sum = 0;
    arr.forEach(function (element) {
        sum += element.price;
    });
    return sum / arr.length;
};
var average = calcAverageProductPrice(products);
console.log(average);
var inventory = [{ product: { name: "Motor", price: 10 }, quantity: 10 }, { product: { name: "Sensor", price: 12.5 }, quantity: 4 }, { product: { name: "LED", price: 1 }, quantity: 20 }];
var calcInventoryValue = function (arr) {
    var total = 0;
    var current = 0;
    arr.forEach(function (element) {
        current = element.product.price * element.quantity;
        total += current;
    });
    return total;
};
var value = calcInventoryValue(inventory);
console.log(value);
