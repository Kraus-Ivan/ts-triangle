import { Triangle } from "./triangle.ts";


let initialTriangle = new Triangle(3, 4, 5);
console.log(initialTriangle.CoordB); 

let form = document.getElementById('triangleForm');

let sideA = document.getElementById('sideA') as HTMLInputElement;
let sideB = document.getElementById('sideB') as HTMLInputElement;
let sideC = document.getElementById('sideC') as HTMLInputElement;

let alpha = document.getElementById('alpha') as HTMLInputElement;
let beta = document.getElementById('beta') as HTMLInputElement;
let gamma = document.getElementById('gamma') as HTMLInputElement;

let perimeter = document.getElementById('perimeter') as HTMLInputElement;
let content = document.getElementById('content') as HTMLInputElement;

let resultFeedback = document.getElementById('result-feedback') as HTMLElement;

if (form && sideA && sideB && sideC && alpha && beta && gamma && perimeter && content && resultFeedback) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let sA: number = parseFloat(sideA.value);
        let sB: number = parseFloat(sideB.value);
        let sC: number = parseFloat(sideC.value);
        let triangle = new Triangle(sA, sB, sC);

        if(triangle.Constructable) {
            alpha.value = String(triangle.Alpha);
            beta.value = String(triangle.Beta);
            gamma.value = String(triangle.Gamma);
    
            perimeter.value = String(triangle.Perimeter);
            content.value = String(triangle.Content);


            lineAB.setAttribute("x1", String(A.x));
            lineAB.setAttribute("y1", String(A.y));
            lineAB.setAttribute("x2", String(B.x));
            lineAB.setAttribute("y2", String(B.y));

            lineBC.setAttribute("x1", String(B.x));
            lineBC.setAttribute("y1", String(B.y));
            lineBC.setAttribute("x2", String(C.x));
            lineBC.setAttribute("y2", String(C.y));

            lineCA.setAttribute("x1", String(C.x));
            lineCA.setAttribute("y1", String(C.y));
            lineCA.setAttribute("x2", String(A.x));
            lineCA.setAttribute("y2", String(A.y));
        }

        else {
            console.log("Trojúhelník nelze sestrojit.")
        }

    });
}
