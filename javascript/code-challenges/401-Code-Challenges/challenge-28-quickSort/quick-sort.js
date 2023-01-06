"use strict";

function quickSort(arr, left, right) {
  if (left < right) {
    let position = _partition(arr, left, right);
    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);
  }

  function _partition(arr, left, right) {
    let pivot = arr[right];
    let low = left - 1;

    for (let i = left; i < right; i++) {
      if (arr[i] <= pivot) {
        low++;
        _swap(arr, i, low);
      }
    }

    _swap(arr, right, low + 1);
    return low + 1;
  }

  function _swap(arr, i, low) {
    let temp;

    temp = arr[i];
    arr[i] = arr[low];
    arr[low] = temp;
  }
}

module.exports = quickSort;
