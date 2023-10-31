function twoArrayObject(keys, values) {
    let pkeys = 0;
    let pvalues = 0;

    let obj = {};

    while (pkeys < keys.length) {
        if (pvalues < values.length) {
            obj[keys[pkeys]] = values[pvalues];
        } else {
            obj[keys[pkeys]] = null;
        }

        pkeys++;
        pvalues++;
    }

    return obj;
}