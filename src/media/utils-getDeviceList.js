/**
 * 获取音频视频设备
 * let ePromise = navigator.mediaDevices.enumerateDevices
 *
 * 获取到音频设备的属性
 * deviceId 设备属性  default 默认的设备（只有一个）,communications 通讯中的设备（只有一个) id 设备的id 会和前面的默认设备重复
 * label    设备名称
 * kind     设备种类
 * groupId  两个设备groupId相同, 说明是同一个物理设备
 */
function getDeviceList() {
    return new Promise((resolve, reject) => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
            console.log("enumerateDevices is not supported!");
            reject('enumerateDevices is not supported');
        } else {
            let deviceList = {
                audioinput: [], // 音频输入 (麦克风)
                videoinput: [], // 视频输入 (摄像头)
                audiooutput: [] // 音频输出 (扬声器)
            };
            navigator.mediaDevices
                .enumerateDevices()
                .then(deviceInfos => {
                    deviceInfos.forEach(e => {
                        if (deviceList[e.kind]) {
                            deviceList[e.kind].push(e);
                        }
                    });
                    resolve(deviceList);
                    console.info("deviceList:", deviceList);
                })
                .catch(err => {
                    reject(err);
                    console.log(`${err.name}:${err.message}`);
                });
        }
    })
}