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

var testNum = 0;

const p = new Promise(
  (resolve, reject) => {
      const toto = new mg.BNode (1, 'Twingo', 'Car');
      const titi = new mg.BNode (2, 'Clio', 'Car');

      utils.printPrototypeChain(toto);

      console.log(toto.print());

      console.log(toto);
      console.log(titi);

      console.log('******************* Test ' + ++testNum);

      const rel1 = new mg.BRel(3, 'Gamme', 'Renault', 12, 15);
      console.log('rel1 isValid? ' + rel1.isValid());

      const rel2 = new mg.BRel(4, 'Gamme', 'Honda', 12, toto);
      console.log('rel2 isValid? ' + rel2.isValid());

      const rel3 = new mg.BRel(5, 'Gamme', 'Telsa', titi, toto);
      console.log('rel3 isValid? ' + rel3.isValid());

      console.log('******************* Test ' + ++testNum);

      console.log(titi.constructor.name);

      console.log('******************* Test ' + ++testNum);

      const arc =  new mg.BArc(titi, rel3, toto);
      console.log('Arc is valid? ' + arc.isValid());

      console.log('******************* Test ' + ++testNum);

      const person = new foaf.FoafPerson(mg.UNSET, 'Vandame', 'Jean-Claude', 'admin');
      console.log(person);
      console.log(person.print());
      console.log('******************* Test ' + ++testNum);

      // début
      console.log("BEGIN test");
      console.log(utils.inspect(person));
      console.log(neo.attributesForQuery(person));
      console.log("FIN test");
      console.log('******************* Test ' + ++testNum);

      //This is weird, this should not give the full list of properties
      console.log(Object.keys(person));
      console.log(Object.values(person));
      console.log('******************* Test ' + ++testNum);

      resolve(testNum);
    }
  )
  .then(
    () => console.log('============ All tests passed')
  )
  .catch(
    (reason) => console.log('+++++++ Error caught. Reason: ' + reason)
  );



