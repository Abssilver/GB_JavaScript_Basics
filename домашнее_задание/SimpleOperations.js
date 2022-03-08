"use strict";

/**
 * Фукнция расчета суммы.
 * @param {number} first - слагаемое число.
 * @param {number} second - слагаемое число.
 * @return {number} - сумма.
 */
function sum(first, second) {
    return first + second;
}

/**
 * Фукнция расчета разности большего и меньшего числа.
 * @param {number} first - число для сравненияи расчета.
 * @param {number} second - число для сравненияи расчета.
 * @return {number} - разность.
 */
function difference(first, second) {
    if (first > second) {
        return first - second;
    }
    return second - first;
}

/**
 * Фукнция расчета произведения.
 * @param {number} first - множитель.
 * @param {number} second - множитель.
 * @return {number} - произведение.
 */
function multiplication(first, second) {
    return first * second;
}

/**
 * Фукнция расчета частного.
 * @param {number} first - делимое.
 * @param {number} second - делитель.
 * @return {number} - частное.
 */
function division(first, second) {
    return first / second;
}