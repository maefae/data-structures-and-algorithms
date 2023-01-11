# 401 Challenge 31: Repeated Word
Find the first repeated word in a book.


## Features
- [x] Write a function that accepts a lengthy string parameter.
- [x] Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

## Examples

|Input|Output|
|:---|---:|
|`"Once upon a time, there was a brave princess who..."`| `"a"`|
|`"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."	`|`"it"`|
|`"It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."`|`"summer"`|

---

## Approach & Efficiency

Repeated_word takes in an initial string, to get a list of words we must split the string based on spaces. Now, before we do this I wanted to ensure common special grammer characters were removed and replaced with a space. This was done using regex, O(n) on the initial string. Next we take a O(1) space string and make it to a list. here we create a dictionary to keep track of some values. Then O(N) as we loop through the list of words, increasing the counter for that word, key, in dictionary by 1. When a word reacheds a count of 2, the loop breaks and returns the output word. This whole operation is O(N) time complexity with a space of O(N) based on the length of the initial string.


---

## Solution

![uml](./Untitled%20(5).png)
