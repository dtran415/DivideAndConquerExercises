function sortedFrequency(arr, target) {
    const firstIndex = findFirst(arr, target);
    if (firstIndex == -1)
        return -1;

    const lastIndex = findLast(arr, target);
    return lastIndex - firstIndex + 1;
}

function findFirst(arr, target) {
    let l = 0;
    let r = arr.length-1;

    while (l <= r) {
        let mid = Math.floor((r+l)/2);
        // if target found and at beginning or first occurrence
        if (arr[mid] == target && (mid == 0 || arr[mid-1] != target))
            return mid;

        // if value greater than or target
        if (arr[mid] >= target)
            // check left
            r = mid - 1;
        else
            // check right
            l = mid + 1;
    }

    // if not found
    return -1;
}

function findLast(arr, target) {
    let l = 0;
    let r = arr.length-1;

    while (l <= r) {
        let mid = Math.floor((r+l)/2);
        // if target found and at end or first occurrence
        if (arr[mid] == target && (mid == arr.length-1 || arr[mid+1] != target))
            return mid;

        // if value less than or equal target
        if (arr[mid] <= target)
            // check right
            l = mid + 1;
        else
            // check left
            r = mid - 1;
    }

    // if not found
    return -1;
}

module.exports = sortedFrequency