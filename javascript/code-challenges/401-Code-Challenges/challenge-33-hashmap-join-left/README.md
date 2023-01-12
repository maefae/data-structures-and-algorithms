# 401 Challenge 33 - Left Join

A leftJoin function is used to combine the key and corresponding values from two hash maps, following the LEFT JOIN logic. The first parameter of the function is a hashmap that has word strings as keys, and a synonym of the key as values. The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values. The returned data structure holds the results of the left join operation and can be in any format that the developer chooses.

## Challenge

The challenge of this function is to combine the key and corresponding values from two different hashmaps according to the LEFT JOIN logic. LEFT JOIN means that all the values in the first hashmap are returned, and if values exist in the second hashmap, they are appended to the result row. If no values exist in the second hashmap, then some flavor of NULL should be appended to the result row.

## Approach & Efficiency

![image](https://user-images.githubusercontent.com/105423307/211943049-dd8f49e4-65f2-4c7f-9d56-dd1a76c25f69.png)

The approach for this function is to iterate through the keys in the first hashmap, and for each key, check if it exists in the second hashmap. If it does, append the value from the second hashmap to the result row. If it does not, append a NULL value. The time and space complexity for this approach would be O(n) for both, where n is the number of keys in the first hashmap.

## API

`leftJoin`
Parameters:
hashmap1: A hashmap that has word strings as keys and a synonym of the key as values.
hashmap2: A hashmap that has word strings as keys, and antonyms of the key as values.
Return:
An object that holds the results of the left join operation. It doesn't need to match the output format exactly, as long as it achieves the LEFT JOIN logic.
