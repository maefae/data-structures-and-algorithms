# Challenge 27: Quick Sort

Based on the pseudo code below make a blog walking through the code. Then create a working solution with tests

# Approach & Efficiency

Time O(n): because the basic algorithm for Quick Sort is to partition the list based on a pivot value, and utilizing recursion to break this list down sorting smaller numbers to the left of the pivot and larger numbers to the right. First time through a position is determined, and then recursion on main function is called to sort the left then the right based on exact pivot location. This will result in a O(n) performance as we are touching each part, utilizing a for loop.

Space O(n): The space can vary based on the type of quick sort used, in this version of quick sort we have a set pivot over a random pivot. Now the best space complexity still is O(n) as the fixed pivot could be the lowest number.
