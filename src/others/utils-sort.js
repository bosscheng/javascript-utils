/*
* date: 2020-01-15
* desc:
*/
function sort(a, b, type) {
    const sortString = (a, b, type) => {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                const aAcsii = a.charCodeAt(i);
                const bAcsii = b.charCodeAt(i);
                const returnS = type === 'desc' ? bAcsii - aAcsii : aAcsii - bAcsii;
                return returnS;
            }
        }
    };
    const fa = parseInt(a, 10);
    const fb = parseInt(b, 10);
    if (!isNaN(fa) && !isNaN(fb)) {
        if (fa.toString().length === a.toString().length && fb.toString().length === b.toString().length) {
            return type === 'desc' ? b - a : a - b;
        } else if (!isNaN(Number(a)) && !isNaN(Number(b))) {
            return type === 'desc' ? b - a : a - b;
        } else {
            return sortString(a, b, type);
        }
    } else {
        return sortString(a, b, type);
    }
}
