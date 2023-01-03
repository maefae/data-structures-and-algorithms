# Challenge Summary
Based on pseudo code below make a blog walking through the code. Then create a working solution with tests.

## Whiteboard Process
<!-- Embedded whiteboard image -->

## Approach & Efficiency
The function compares each index of a list and re-orders them based on value. In order to do this we begin with a for loop, O(n), and loop through the range of an inputed list. For each one we check to see if a condition is met for a while loop. This while loop can run O(n) times as it will continue to move a value as long as it is the smaller value in comparison. This results in O(n^2) time. Space is never change, so that leaves us with o(1) as the list is changed in place. No new space is required.

## Solution
# Insertion Sort
Insertion Sort is a sorting algorithm that traverses the list multiple times as it slowly builds out the sorting sequence. During this traversal it will compare two indices at a time, and if the right index is smaller than the left, they will swap positions. This continues until the right index is larger and then it moves on the next interation of the loop. At the end the list is sorted from small to large.

---

## Pseudocode

---

## Trace
 Sample Array: `[8,4,23,42,16,15]`

### Pass 1:

In the first pass through of the insertion sort, we set our j value and temp value to 0 and 4. Then we evalute that j is greater than 0 and temp is less than our list at index i, or index 1. This is true so we will enter the while loop and perform three actions. First we will change the value of index 1 to the value of index 0. Second decrement j by one. Third we change the the value of index 1 to our temp value. This concludes the first iteration of the while loop, it will attempt to run again, but the next time j is now -1, and the conditions for the while loop are not met resulting in end of this for loop interation. After the first pass, our list swapped the lower value to the front of list between index 1 and index 0.

---

### Pass 2:
In the second pass through the j and temp are incremented to the next values in the list. At this point, j is 1 and temp is 23. Then we evaluate the conditions for the while loop, is j greater than 0? yes. Is temp less than list at index i? No. The while conditions are not met this iteration of the for loop and is skipped. Ending this iteration with no changes to our list.

---

### Pass 3:

In the third pass through the j and temp are incremented to the next values in the list. At this point, j is 2 and temp is 42. Then we evaluate the conditions for the while loop, which like the previous pass, they are not met and the while loop is skipped. Ending this iteration with no changes to our list.

---

### Pass 4:

In the fourth pass through the j and temp are incremented to the next values in the list. At this point, j is 3 and temp is 16. Now when evaluating our while loop conditions we pass and enter this inner while loop. First pass inside while loop, change the values at the temp position and list at index j. Swapping the value 16 and 42. Decrement the value of j by one. Since j is now 2, while loop continues. Second time through we are now swapping the 16 which the 23. Then decrementing j again. This next evaluation for the while loop, j = 1 and temp = 16 but temp is not less than list at index j, or 8. This ends the while loop. Ending this iteration with list changed moving temp to index 2.

---

### Pass 5:

In the fifth and final pass through we are evaluating the last index of our list. At this point j = 4 and temp = 15. We meet our while loop conditions and start evaluating each value that precedes the temp value to the temp value. Is 15 less than 42? yes, swap the values. Is 15 less than 23? yes, swap the values. Is 15 less than 16? yes, swap the values. Is 15 less than 8? No, while loop is broken. This ends all iterations of the main for loop, and we finally hit the return block for our function returning the list which has been sorted.

---

## Efficency
* Time O(n^2)
    - The algorithm of this function is to compare each value in the list. This will happen n times for the list, and n-1 times inside the initial loop. The resulting algorithm ends up being n squared.
* Space O(1)
    - No additional space is being created. This list is being sorted in place. Keeping the space at constant O(1).
