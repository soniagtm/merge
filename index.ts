import { merge } from './merge';

const collection1 = [1, 3, 5];
const collection2 = [0, 2, 4];

const result = merge(collection1, collection2);
console.log("Collection 1 :", collection1)
console.log("Collection 2 :", collection2)
console.log("Result :", result);
