# Merge Sort

Merge sort is a sorting algorithm that splits an incoming list in half. First it sorts the left, and then sorts the right. Upon completion, each side merges together.

# Trace
Sample Array: [8,4,23,42,16,15]

Pass 1: The original list is taken and split into two arrays. Then, the function recursively calls the left array.

pass 2: During the first recursion (R1), it splits the list again and calls a recursion on the left side (1), and the recursion call completes. This pattern will continue to the next line of code calling a recursion on the right side.

pass 3: Recursion 2 (R2), the list splits again resulting in two single item lists. The recursive function of merge_sort(left) and merge_sort(right) are both called, but since both only have a length of 1, they're immediately completed. Results in moving on to the next line of code which is merge, the functions merge based on value.

pass 4: We are still on R2, the final function which is merge. We are now merging the lists based on value, which completes this recursion function and returns to the next function on the call stack, R1

pass 5: in pass 5, recursion 1, merge_sort(left) and merge_sort(right) have already been completed and are continuing on to the merge. Based on value, we merge the two lists. Completing recursion 1, it moves back to the next function on the call stack which is the initial invocation of the merge_sort function.

pass 6: in pass 6, we're back on the initial call of the function where the original split of the list occured. merge_sort(left) is sorted. Now we must sort the right half. merge_sort(right) results in the same process of recursion

pass 7: we enter recursion 3. We split the list into halves, noticing that left is a single item list, no recursion required. Right is more than 1 in length so we will merge_sort(right) to split more

pass 8: Entering recursion 4, we split the right list down to two single item lists which result in nomore recursions and enter the merge function.

pass 9: Still in recursion 4 (r4), we enter the merge function. The lists merged based on value which results in completing the R4 function. Now, we head back to the callstack to the next function which is R3.

pass 10: merge_sort(left) and merge_sort(right) have entered the merge function. in R3, we merge the two halves based on value of the integers. Once complete, this finishes this recursion and we return to the call stack. The last thing in the stack is the initial function call.

pass 11: Last but not least, we retrn to the initial invocation of this function, which now has completed the sort of the left half and the righ half. We move into the final piece which is the merge function, merging the two lists together based on the value of the integers. Results in the completed sorted list.

# Efficiency

- time O(log(n))
  - Algorithm for merge sort is to split the list into two halves, and continue to repeat this process until the list becomes the length of 1. Then, merge them back together based on value. The time is O(log(n)), because the function is continually splitting the lists in half like a binary search tree.

  - space O(n)
    - why? because the function is constantly splitting the list, making small lists of the original one but not adding to it.
