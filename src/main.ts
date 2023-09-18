import { Triangle } from "./triangle.ts";  

let triangle = new Triangle(3, 4, 5);

console.log(triangle.CoordB);



const form = document.getElementById('triangleForm');

const sideA = document.getElementById('sideA');
const sideB = document.getElementById('sideB');
const sideC = document.getElementById('sideC');

const alpha = document.getElementById('alpha');
const beta = document.getElementById('beta');
const gamma = document.getElementById('gamma');

const perimeter = document.getElementById('perimeter');
const content = document.getElementById('content');

const resultFeedback = document.getElementById('result-feedback');

const lineAB = document.getElementById('lineAB');
