'use strict';

function mergeSort(arr) {
  let n = arr.length

  if (n > 1) {

    let mid = n / 2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid)

    mergeSort(left);
    mergeSort(right);

    _merge(left, right, arr);
  };

  function _merge(left, right, arr) {

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.lenth && j < right.lenth) {
      if (left[i] <= right[j] {

        arr[k] = left[i];
        i++
      } else {
        arr[k] = right[j];
        j++
      };

      k++
    };

    while (i < left.length) {

      arr[k] = left[i];
      i++
      k++

    };

    while (j < right.length) {

      arr[k] = right[j];
      j++
      k++
    };
  };
};

module.exports = mergeSort;
