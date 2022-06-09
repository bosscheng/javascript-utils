function utilsDescending(fn){
    return function (a, b) {
        const valA = fn(b);
        const valB = fn(a);
        return valA < valB ? -1 : valA > valB ? 1 : 0;
    }
}


// const byPrice = descending(val => val.price);
// [{ price: 300 }, { price: 100 }, { price: 200 }].sort(byPrice);
// // = [{ price: 300 }, { price: 200 }, { price: 100 }]