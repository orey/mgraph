/******************************************************
 * Author: O. Rey
 * email: rey.olivier@gmail.com
 * Date: November 2017
 * Core library for MicaGraph
 * License: Apache 2
 ******************************************************/
'use strict';

var mgraph    = require('./mgraph');


const UNSET = 0;

/*
 * Assumption: Node has id
 * Assumption: Edge has id, source, target
 */
class Node {
  constructor(obj) {
    this.obj = obj;
    if (obj == null)
      this.id = UNSET;      
    else
      this.id  = obj.id;
  }
  setObj(obj) {
    this.obj = obj;
  }
  setId(id) {
    this.id = id;
  }
}

class Edge {
  constructor(obj) {
    this.obj      = obj;
    this.id       = obj.id;
    this.sourceid = obj.source.id;
    this.targetid = obj.target.id;
  }
}

class Graph {
  addNode(node) {
    this.nodes[node.id] = node;
  }
  addEdge(edge) {
    this.edges[edge.id] = edge;
  }
  getNode(id) {
    return nodes[id];
  }
  getEdge(id) {
    return edges[id];
  }
  getNodes() {
    return this.nodes;
  }
  getEdges() {
    return this.edges;
  }
  getEdgeEnds(edge) {
    return [this.getNode(edge.sourceid),this.getNode(edge.targetid)];
  }
  getNeighbours(id) {
    resultind = [];
    for (edge in edges)
      if (edge.sourceid == id) resultind.push(this.getEdge(edge.targetid));
    result = [];
    for (i in resultind)
      result.push(this.getNode(i));
    return result;
  }
  createNode() {
    return new Node(null);
  }
}
  



