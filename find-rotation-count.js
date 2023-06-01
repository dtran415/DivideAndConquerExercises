function findRotationCount(arr) {
    // find index of lowest number
    let l = 0;
    let r = arr.length-1;
    // if no rotation, return first index
    if(arr[l] <= arr[r])
        return l;
    
    while (true) {
        let m = Math.floor((l+r)/2);
        // if number at mid greater than mid+1 return index of mid+1
        if (arr[m] > arr[m+1])
            return m+1;

        // if left side sorted search right
        if (arr[l] <= arr[m])
            l = m+1;
        else
            r = m;
    }
}

module.exports = findRotationCount