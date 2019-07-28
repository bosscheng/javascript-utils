/*
* date: 2019-07-28
* desc:
*/

// 自动执行函数，三个状态，then
class Promise {
    constructor(fn) {
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        let resolve = value => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
            }
        }

        let reject = value => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = value;
            }
        };

        try {
            fn(resolve, reject);
        } catch (e) {
            reject(e);
        }

    }

    then(onFulfilled, onRejected) {
        switch (this.state) {
            case "fulfilled":
                onFulfilled();
                break;
            case "rejected":
                onRejected();
                break;
            default:
        }
    }
}
