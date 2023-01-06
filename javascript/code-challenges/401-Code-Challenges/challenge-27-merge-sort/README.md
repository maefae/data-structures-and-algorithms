# 401 Challenge 27 - Merge Sort

Based on the pseudo code, make a blog walking through the code and then create a working solution with tests.

## Approach and Efficiency
Given a list, we split it into two halves. We continue to split the lists in half until the length of 1 is reached. Then, we begin to merge them back together based on value. Time complexity for this type of function results in O(log(n)), because it is similar to a binary tree, continually splitting on itself.

Space, however, remains unchanged. Even though we split the list each time, there is not anything being added to the lists, so the size never changes. Splitting a list down to a single element, we get a space complexity of O(n), because when the lists merge back together, we return to the original list space.
