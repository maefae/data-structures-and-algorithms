# 401 Challenge 35: Graph

Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

- `AddNode()`
  - Adds a new node to the graph
  - Takes in the value of that node
  - Returns the added node
- `AddEdge()`
  - Adds a new edge between two nodes in the graph
  - Include the ability to have a “weight”
  - Takes in the two nodes to be connected by the edge
  - Both nodes should already be in the Graph
- `GetNodes()`
  - Returns all of the nodes in the graph as a collection (set, list, or similar)
- `GetNeighbors()`
  - Returns a collection of edges connected to the given node
  - Takes in a given node
  - Include the weight of the connection in the returned collection
- `Size()`
  - Returns the total number of nodes in the graph

---

## Approach & Efficiency

Graph is using a hashmap to stores in data. It has 5 methods which are add_node(), add_edge(), get_nodes(), get_neighbors(), size(). All operations are O(1) time complexity except for get_neightbors(). Getting the neighsbors has a for loop inside of it that is looping over the list of edges that a particular node has, and gathering the weight values for the output.

---

## API

1. `addNode()`:
    - Takes in a value, creates a node, then adds this node to our graph. O(1) time as we are working with a dictionary and assign just variable names. Returns the node at the end.
2. `addEdge()`:
    - Takes in two nodes, creates an edge from first node to the second node. Looks up first node, then adds the edge to the list of neighbors. O(1) operations.
3. `getNodes()`:
    - Takes no arguments, and returns a list of all the keys in the dictionary. This function is a O(1) operation as it will retrieve the key list from the dictionary.
4. `getNeighbors()`:
    - Takes in a node, will retreive the edge list from graph. It will loop over the list to access each edge, creating a key:value pair of the edge along with the weight it has, then appending it to a collection list. At the end returns the collection. This is an O(N) operation based on the number of edges a node has, as well as O(1) space for the collection.
5. `size()`:
    - Returns the size of the graph, this is an O(1) operation as its a retrieval of the size attribute.
