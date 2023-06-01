function findRotatedIndex(arr, target) {
    let l = 0;
    let r = arr.length-1;

    while (l <= r) {
        let m = Math.floor((l+r)/2);

        if (arr[m] == target)
            return m;

        // if left half is sorted
        if (arr[l] <= arr[m]) {
            // if target is within range of left side, search left
            if (target < arr[m] && target >= arr[l])
                r = m - 1;
            // else search right side
            else
                l = m + 1;
        } else { // else right half is sorted
            if (target > arr[m] && target <= arr[r])
                l = m + 1;
            else
                r = m - 1;
        }
    }

    return -1;
}

module.exports = findRotatedIndex