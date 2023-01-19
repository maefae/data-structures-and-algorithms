"use strict";

function getEdges(graph, arr) {
  let status = true;
  let cost = 0;
  let pos1 = 0;
  let pos2 = 1;

  function _walk(graph, start, end) {
    let route = graph.graph[start.value];

    for (let i = 0; i < route.length; i++) {
      if (end === route[i].vertex) {
        cost += route[i].weight;

        if (end.value === arr[arr.length - 1].value) {
          break;
        } else {
          pos1 += 1;
          pos2 += 1;

          _walk(graph, arr[pos1], arr[pos2]);
        }
      }
    }
  }

  _walk(graph, arr[pos1], arr[pos2]);

  if (cost === 0) {
    status = false;
  }

  cost = `$${cost}`;

  return [status, cost];
}

module.exports = getEdges;
