/******************************************************
 * Author: O. Rey
 * email: rey.olivier@gmail.com
 * Date: November 2017
 * Core library for MicaGraph
 * License: Apache 2
 ******************************************************/
'use strict';

var cytoscape = require('cytoscape');
var mgraph    = require('./mgraph');


var cy = cytoscape({
  elements: [
    {
      data : mgraph.ROOT
    }
  ]
});

//console.log(cy);
    
