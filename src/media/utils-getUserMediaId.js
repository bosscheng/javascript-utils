function getUserMediaId() {
    let self = this
    let sUserAgent = navigator.userAgent.toLowerCase();
    let isAndroid = sUserAgent.includes('android');
    let isRedmi = sUserAgent.includes('redmi');
    let isXiaomi = sUserAgent.includes('xiaomi');
    let isVivo = sUserAgent.includes('vivo');
    if (!isAndroid) {
        //苹果手机可以直接打开后置摄像头，无需自动切换
        const mediaConstraints = { video: { facingMode: { exact: "environment" } }, audio: false };//打开后置摄像头
        self.openDevice(mediaConstraints)
        return
    }
    let videoDeviceArray = []
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        if (stream) {
            stream.getTracks().forEach(track => {
                track.stop();
            });
        }
    })
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
        console.log("不支持 enumerateDevices() .");
    }
    navigator.mediaDevices.enumerateDevices().then(function (devices) {
        //寻找摄像头id
        devices.forEach(device => {
            if (device.kind === 'videoinput') {
                videoDeviceArray.push(device.deviceId);
            }
        });
        self.setState({
            videoDeviceArray: videoDeviceArray
        }, () => {
            if(self.state.videoDeviceArray.length < 1){
                console.log("无可用摄像头")
            }
        })
        if (videoDeviceArray.length > 0) {
            //部分安卓手机机型无法直接打开后置摄像头，需要自动切换至前置摄像头
            self.setState({
                currentId: ((videoDeviceArray.length === 2 && !(isRedmi || isXiaomi || isVivo)) ? videoDeviceArray[1] : videoDeviceArray[0])
            }, () => {
                let constraints = {
                    video: { deviceId: { exact: self.state.currentId } },
                    audio: false
                }
                self.openDevice(constraints)
            })
        }
    })
}

function openDevice(constraints) {
    let self = this
    //开启摄像头
    if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
    }
    if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function (constraints) {
            var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
            if (!getUserMedia) {
                return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
            }
            return new Promise(function (resolve, reject) {
                getUserMedia.call(navigator, constraints, resolve, reject);
            });
        }
    }
    //如果发现有流存在，要先关闭，再去打开流
    if (window.stream) {
        window.stream.getTracks().forEach(track => {
            track.stop();
        });
    }
    if (self.localMediaStream) {
        self.localMediaStream.getTracks().forEach(track => {
            track.stop();
        });
    }
    try {
        navigator.mediaDevices.getUserMedia(constraints)
            .then(
                (stream) => {
                    var video1 = this.video.current;
                    video1.style.display = 'block'
                    try {
                        window.stream = stream;
                        video1.srcObject = stream;
                    } catch (error) {
                        video1.src = window.URL.createObjectURL(stream);//如果srcObject无法给到值，则给src,做好兼容
                    }
                    self.localMediaStream = stream;
                })
            .catch(()=>{
                if(!this.state.isOpenVideo){
                    if(self.state.openNumber>10){
                        console.log('打开摄像头失败')
                        return
                    }
                    self.changeDevice();
                    return
                }
            });
    } catch (e) {
        console.log('打开摄像头失败',e)
    }
}


function changeDevice ()  {
    //切换摄像头设备
    let constraints = {
        video: { deviceId: { exact: this.state.currentId } },
        audio: false
    }
    let currentId = this.state.currentId;
    let videoDeviceArray = this.state.videoDeviceArray;
    videoDeviceArray.forEach(id => {
        if (id !== currentId) {
            this.setState({
                currentId: id
            }, () => {
                constraints = {
                    video: { deviceId: { exact: this.state.currentId } },
                    audio: false
                }
                this.openDevice(constraints);
            })
        }
    })
}

function stopRecording() {
    let self = this;
    setTimeout(() => {
        try {
            var video = this.video.current;
            if (self.localMediaStream) {
                var canvas = document.getElementById('canvas1');
                let ctx = canvas.getContext("2d")
                //安卓手机调整角度，苹果手机因为镜像需要特殊处理
                var sUserAgent = navigator.userAgent.toLowerCase();
                console.log(navigator.userAgent.toLowerCase())
                var isAndroid = sUserAgent.includes('android');
                if (!isAndroid) {
                    ctx.rotate(90 * Math.PI / 180);
                    ctx.drawImage(video, 0, -canvas.width, canvas.height, canvas.width);
                } else {
                    ctx.scale = (2, 2)
                    ctx.rotate(-270 * Math.PI / 180);
                    ctx.drawImage(video, 0, 0, canvas.height, -canvas.width);
                }
                var firstFrame = canvas.toDataURL("image/png", 1.0);
                // 停止摄像机
                self.stopCapture();
                if (self.state.picType === 'people') {
                    self.props.history.push({ pathname: "/ocrStart", PeopleUrl: firstFrame })
                } else if (self.state.picType === 'nation') {
                    self.props.history.push({ pathname: "/ocrStart", NationUrl: firstFrame })
                } else {
                    console.log("拍照失败请重新拍照")
                }
            }
        } catch (e) {
            console.log("停止异常，进入到catch",e)
        }
    }, 10)
}

function stopCapture() {
    var video = this.video.current;
    if (video.srcObject) {
        let stream = video.srcObject
        if (stream) {
            let tracks = stream.getTracks();
            tracks.forEach(track => {track.stop()})
        }
    }
    if (video.src) {
        let stream1 = video.src
        let tracks1 = stream1.getTracks();
        if (tracks1) {
            tracks1.forEach(track => {track.stop()})
        }
    }
}

