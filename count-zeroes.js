function countZeroes(arr) {
    let l = 0;
    let r = arr.length-1;

    while (l <= r) {
        let mid = Math.floor((r+l)/2);
        if (arr[mid] == 0) {
            // if at the beginning everything is zero
            if (mid == 0)
                return arr.length;

            // if we find the first zero find the difference between the that index and the end
            if (arr[mid-1] != 0)
                return arr.length - mid;

            // otherwise search left half
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    // if not found no zeroes
    return 0;
}

module.exports = countZeroes