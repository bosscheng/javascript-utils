/**
 *
 * @param fn
 * @returns {function(*=, *=): number}
 */
function utilsAscending(fn) {
    return function (a, b) {
        const valA = fn(a);
        const valB = fn(b);
        return valA < valB ? -1 : valA > valB ? 1 : 0;
    }
}

// const byPrice = utilsAscending(val => val.price);
// [{ price: 300 }, { price: 100 }, { price: 200 }].sort(byPrice);