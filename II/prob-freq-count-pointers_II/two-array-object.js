// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {

    let obj = {}

    for (let i=0; i<keys.length; i++) {

        if (keys[i] && !values[i]) {
            obj[keys[i]] = null
        } else if (!keys[i]) {
                break
        } else {
            obj[keys[i]] = values[i]
        }
    }

    return obj
}