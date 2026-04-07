"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_utils_1 = require("./math-utils");
const datos = [10, 12, 15, 100, 20];
console.log("Datos:", datos);
console.log("Media:", (0, math_utils_1.calcularMedia)(datos));
console.log("Mediana:", (0, math_utils_1.calcularMediana)(datos));
console.log("Sin atípicos:", (0, math_utils_1.filtrarAtipicos)(datos, 50));
