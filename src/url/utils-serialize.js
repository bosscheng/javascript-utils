/*
* date: 2019-07-23
* desc:
*/
function serialize(data) {
    var serializeArray = []
    for (var keys in data) {
        serializeArray.push({
            "name": keys,
            "value": data[keys]
        })
    }
    var result = []
    serializeArray.forEach(function (item) {
        result.push(encodeURIComponent(item.name) + '=' + encodeURIComponent(item.value))
    });
    return result.join("&")
}
