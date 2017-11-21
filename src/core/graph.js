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
  constructor(obj, target) {
    this.id = obj.id;
    this.source = obj.source;
    this.target = obj.target;
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
    result = [];
    for (edge in edges) {
      if (edge.sourceid == id)
        result.push(this.getNode(edge.targetid));
    }
    return result;
  }
  //creation methods are just wrappers
  createNode(bnode) {
    return new Node(bnode);
  }
  createEdge(rel) {
    return new Edge(rel);
  }
}




