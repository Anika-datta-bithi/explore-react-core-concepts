let first;
// console.log(first);

function second(a, b) {
    const total = a + b;
}
const result = second();
console.log(result);

function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d);
}
third(2, 5);

function nonegative(a, b) {
    if (a < 0 || b < 0) {
        return
    }
    return a + b;
};

const sixth = [34, 45, 67, 78, 90, 90];
console.log(sixth[1], sixth[2], sixth[5], sixth[9]);
console.log(sixth);

const nine = null;
const eight = undefined;

const data = { results: [], }