function getMaxLenStr(str) {
    let temp = {

    }
    let max = 0;
    let i=0,j=0;
    while (j < str.length) {
        if (temp[str[j]] === undefined) {
            temp[str[j]] = j;
            max = Math.max()
        } else {
            while (i < j) {
                delete temp[str[i++]]
            }
        }
    }
}