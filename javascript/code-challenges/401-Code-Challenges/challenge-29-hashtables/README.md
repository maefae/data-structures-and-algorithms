# 401 Class 30: Hashtables
This challenge covers the implementation of a hashtable in Javascript. It contains four methods including: `set`, `get`, `has`, and `keys`, `hash`.

A hastable is data structure which efficiently stores and retrieves data.
## Challenge
The challenge is to implement a Hashtable Class with the methods listed in the 'API' section.

## Approach & Efficiency
The approach I am utilizing is the Single-responsibility principle, which indicates that any method I write will be clean, reusable, and abstract component parts to the whole challenge.

## API
- `set`
  - Arguments: `key`, `value`
  - Returns: nothing
  - This method should hash the `key`, and set the `key` and value pair in the table, handling collisions as needed.
  - Should a given `key` already exist, replace its value from the `value` argument given to this method.
  - `set` data ends up at a stringified key:value pair

- `get`
  - Arguments: `key`
  - Returns: Value associated with that `key` in the table

- `has`
  - Arguments: `key`
  - Returns: Boolean, indicating if the `key` exists in the table already.

- `keys`
  - Returns: Collection of `keys`

- `hash`
  - Arguments: `key`
  - Returns: Index in the collection for that `key`
