"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularMedia = calcularMedia;
exports.calcularMediana = calcularMediana;
exports.filtrarAtipicos = filtrarAtipicos;
/**
 * Calcula la media de un array de números.
 * Devuelve null si el array está vacío.
 */
function calcularMedia(datos) {
    if (datos.length === 0)
        return null;
    const suma = datos.reduce((acc, num) => acc + num, 0);
    return suma / datos.length;
}
/**
 * Calcula la mediana de un array de números.
 * Devuelve null si el array está vacío.
 */
function calcularMediana(datos) {
    if (datos.length === 0)
        return null;
    const ordenados = [...datos].sort((a, b) => a - b);
    const mitad = Math.floor(ordenados.length / 2);
    if (ordenados.length % 2 === 0) {
        return (ordenados[mitad - 1] + ordenados[mitad]) / 2;
    }
    return ordenados[mitad];
}
/**
 * Filtra los valores atípicos según un límite.
 * Devuelve solo los números cuyo valor absoluto no supera el límite.
 */
function filtrarAtipicos(datos, limite) {
    return datos.filter((num) => Math.abs(num) <= limite);
}
