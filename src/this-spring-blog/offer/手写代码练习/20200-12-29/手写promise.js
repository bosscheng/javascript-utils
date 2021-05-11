/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-29 11:48:16
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-11 11:16:49
*/
// https://imweb.io/topic/5bbc264b6477d81e668cc930
const status = {
    pedding: 'pedding',
    fulfilled: 'fulfilled',
    reject: 'reject',
};

class MPromise {
    constructor(exetor) {
        this._value = undefined;
        this._status = status.pedding;
        this._successCB = [];
        this._errorCB = [];
        const resolve = (value) => {
            if (this._status === status.pedding) {
                this._status = status.fulfilled;
                this._value = value;
                for (let i = 0; i < this._successCB.length; i += 1) {
                    const cb = this._successCB.shift();
                    cb(value);
                }
            }
        };
        const rejected = (value) => {
            if (this._status === status.pedding) {
                this._status = status.reject;
                this._value = value;
                for (let i = 0; i < this._errorCB.length; i += 1) {
                    const cb = this._errorCB.shift();
                    cb(value);
                }
            } 
        };
        exetor(resolve, rejected);
    }

    static race(promiseAll) {
        return new MPromise((ok, no) => {
            for (let i = 0, len = promiseAll.length; i < len; i += 1) {
                promiseAll[i].then((res) => {
                    ok(res);
                }, (e) => {
                    no(e);
                });
            };
        });
    }

    static all(promiseAll) {
        return new MPromise((resolve, reject) => {
            let count = 0;
            let rres = [];
            const cal = () => {
                count += 1;
                if (count === promiseAll.length) resolve(rres);
            };
            for (let i = 0, len = promiseAll.length; i < len; i += 1) {
                promiseAll[i].then((res) => {
                    rres.push(res);
                    cal();
                }).catch((e) => {
                    reject(e);
                });
            }
        });
    }

    static any(promiseAll) {
        return new MPromise((ok, no) => {

        });
    }

    then(onFulfilled, onReject) {
        return new MPromise((resolve, reject) => {
            if (this._status === status.fulfilled) {
                try {
                    let ret = onFulfilled(this._value);
                    if (ret instanceof MPromise) {
                        ret.then(resolve, reject);
                    } else {
                        resolve(ret);
                    }
                } catch(e) {
                    reject(e);
                }
            }
            if (this._status === status.reject) {
                try {
                    let ret = onReject(this._value);
                    if (ret instanceof MPromise) {
                        ret.then(resolve, reject)
                    } else {
                        reject(ret);
                    }
                } catch(e) {
                    reject(e);
                }
            }
            if (this._status === status.pedding) {
                this._successCB.push((value) => {
                    try {
                        let ret = onFulfilled(value);
                        //  如果是一个promise那么就加入事件队列等待触发
                        if (ret instanceof MPromise) {
                            ret.then(resolve, reject);
                        } else {
                            resolve(ret);
                        }
                    } catch(e) {
                        reject(e);
                    }
                });
                this._errorCB.push((value) => {
                    try {
                        let ret = onReject(value);
                        if (ret instanceof MPromise) {
                            ret.then(resolve, reject);
                        } else {
                            resolve(ret);
                        }
                    } catch(e) {
                        reject(e);
                    }
                });
            }
        });
    }

    catch(onReject) {
        this.then(null, onReject);
    }
}

MPromise.all([Promise.resolve(1), Promise.reject(2)]).then((res) => {
    console.log('all success:', res);
}, (e) => {
    console.log('all error:', e);
});

MPromise.race([
    Promise.reject(1),
    new Promise((ok, no) => {
        setTimeout(() => {
            no(1)
        }, 0);
    })
    ]).then((res) => {
        console.log('race sucess:', res);
    }, (e) => {
        console.log('race err:', e);
    })

const p = new MPromise((ok, no) => {
    setTimeout(() => {
        ok('success');
        // no('error');
    }, 2 * 100);
});

p.then((res) => {
    console.log('success:', res);
    return '11'
}, (res) => {
    console.log('error:', res);
}).then(res => {
    console.log('success2:', res);
});



class MyPromise {
    constructor(exetor) {
        this.status = status.pedding;
        this.value = undefined;
        this.successCB = [];
        this.errorCB = [];
        const resolve = () => {
            if (this.status === status.pedding) {
                for (let i = 0, len = this.successCB.length; i < len; i += 1) {
                    this.successCB.shift()(this.value);
                }
            }
        }
        const reject = () => {
            if (this.status === status.pedding) {
                for (let i = 0, len = this.successCB.length; i < len; i += 1) {
                    this.errorCB.shift()(this.value);
                }
            }
        }
        exetor(resolve, reject);
    }

    then(fulfilled, reject) {
        return new MyPromise((resolve, reject) => {
            if (this.status === status.pedding) {
                this.successCB.push(() => {
                    let 
                });
            }
            if (this.status === status.fulfilled) {

            }
            if (this.status === status.resolve) {

            }
        });
    }
}

const p = new MPromise((ok, no) => {

});
p.then((res) => {

},(e) => {

})