function findFloor(arr, target) {
    let l = 0;
    let r = arr.length-1;
    // no floor if target less than smallest number
    if (target < arr[l])
        return -1;

    // floor is highest number if target greater than that
    if (target > arr[r])
        return arr[r];

    while (l <= r) {
        let m = Math.floor((l+r)/2);

        // if target found, that is the floor
        if (target == arr[m])
            return target;

        // if target is greater than number before mid and less than mid, floor is number before
        if (target >= arr[m-1] && target < arr[m])
            return arr[m-1];

        if (target < arr[m])
            r = m - 1;
        else
            l = m + 1;
    }

    return -1;
}

module.exports = findFloor