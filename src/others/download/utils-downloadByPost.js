/**
 * Date:2021/2/1
 * post数据方式下载文件
 * @param {string} url 接口地址url
 * @param {object} [params] 发送的数据params
 * @param {string} [method=post] 请求方法：post / get
 */
export function downloadByPost(url, params = {}, method = 'post') {
    const form = document.createElement('form')
    form.style.display = 'none'
    form.action = url
    form.method = method
    form.target = '_blank'
    Object.keys(params).forEach(name => {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = name
        input.value = params[name]
        form.appendChild(input)
    })
    document.body.appendChild(form)
    form.submit()
    document.body.removeChild(form)
}
