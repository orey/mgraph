/******************************************************
 * Author: O. Rey
 * email: rey.olivier@gmail.com
 * Date: November 2017
 * Core library for MicaGraph
 * License: Apache 2
 ******************************************************/
'use strict';

const mg    = require('./core/mgraph');
const utils = require('./core/utils');
const foaf  = require('./domains/foaf');
const neo   = require('./db/neo/neo');

const toto = new mg.BNode (1, 'Twingo', 'Car');
const titi = new mg.BNode (2, 'Clio', 'Car');

utils.printPrototypeChain(toto);


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

// début
console.log("BEGIN test");

//console.log(person.toSource());
//taken archan937/inspector.js
//Created 6 years ago

console.log(utils.inspect(person));

console.log(neo.attributesForQuery(person));

console.log("FIN test");




console.log(person.print());



//This is weird, this should not give the full list of properties
console.log(Object.keys(person));
console.log(Object.values(person));



