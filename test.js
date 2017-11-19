/******************************************************
 * Author: O. Rey
 * email: rey.olivier@gmail.com
 * Date: November 2017
 * Core library for MicaGraph
 * License: Apache 2
 ******************************************************/
'use strict';

const mg   = require('./micagraph/core');
const foaf = require('./micagraph/semanticweb');

const toto = new mg.BNode (1, 'Twingo', 'Car');
const titi = new mg.BNode (2, 'Clio', 'Car');

// Print the prototype chain
var printChain = function protoChain(obj) {
  let temp = Object.getPrototypeOf(obj);
  if ((temp === {})||(temp === undefined) || (temp === null))
    console.log('END');
  else {
    console.log(temp);
    protoChain(temp);
  }
}

printChain(toto);

console.log(toto.print());

console.log(toto);
console.log(titi);

const rel1 = new mg.BRel(3, 'Gamme', 'Renault', 12, 15);
console.log('rel1 isValid? ' + rel1.isValid());

const rel2 = new mg.BRel(4, 'Gamme', 'Honda', 12, toto);
console.log('rel2 isValid? ' + rel2.isValid());

const rel3 = new mg.BRel(5, 'Gamme', 'Telsa', titi, toto);
console.log('rel3 isValid? ' + rel3.isValid());

console.log(titi.constructor.name);

const arc =  new mg.BArc(titi, rel3, toto);

console.log('Arc is valid? ' + arc.isValid());

const person = new foaf.FoafPerson(mg.UNSET, 'Vandame', 'Jean-Claude', 'admin');

console.log(person);
console.log(person.print());



