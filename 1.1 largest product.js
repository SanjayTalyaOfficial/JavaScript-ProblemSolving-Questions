let unsortedArray = [-10, 7, 29, 30, 5, -10, -70];
let res = computeProduct(unsortedArray);
print( res );
function computeProduct(unsortedArray) {
    let max1 = 0, max2 = 0, max3 = 0, neg1 = 0, neg2 = 0;
    for (let i = 0; i < unsortedArray.length; i++) {
        let cur = unsortedArray[i];
        if (cur > max1) {
            max3 = max2;
            max2 = max1;
            max1 = cur;
        } else if (cur > max2) {
            max3 = max2;
            max2 = cur;
        } else if (cur > max3) {
            max3 = cur;
        } else if (cur < 0 && cur < neg1) {
            neg2 = neg1;
            neg1 = cur;
        } else if (cur < 0 && cur < neg2) {
            neg2 = cur
        }
    }
    if (neg1 * neg2 * max1 > max1 * max2 * max3) return neg1 * neg2 * max1;
    else return max1 * max2 * max3;
}