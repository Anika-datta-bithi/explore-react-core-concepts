//primitive type
const a = 5;
const b = "Samsu kopay na akhon ar";
const d = true;

//non-primitive
const ages = [45, 65, 78];
const student = { id: 23, class: 7 };
// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);


let x = 5;
let y = x;
// console.log(x, y);
y = 7;
// console.log(x, y);

let p = { job: 'Web Developer' };
let q = p;
// q = { job: 'Backend End' }; 
q.job = 'front end developer';
console.log(p, q);