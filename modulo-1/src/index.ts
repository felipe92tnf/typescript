import { calcularMedia, calcularMediana, filtrarAtipicos } from "./math-utils";

const datos: number[] = [10, 12, 15, 100, 20];

console.log("Datos:", datos);
console.log("Media:", calcularMedia(datos));
console.log("Mediana:", calcularMediana(datos));
console.log("Sin atípicos:", filtrarAtipicos(datos, 50));