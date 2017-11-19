/******************************************************
 * Author: O. Rey
 * email: rey.olivier@gmail.com
 * Date: November 2017
 * Core library for MicaGraph
 * License: Apache 2
 ******************************************************/
'use strict';

const neo4j = require('neo4j-driver').v1;

//TODO: to be externalized
const driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'mgraph'));
const session = driver.session();









const personName = 'Alice';
const resultPromise = session.run(
  'CREATE (a:Person {name: $name}) RETURN a',
  {name: personName}
);

resultPromise.then(result => {
  session.close();

  const singleRecord = result.records[0];
  const node = singleRecord.get(0);

  console.log(node.properties.name);

  // on application exit:
  driver.close();
});



/*=======================================
 * Exports
 ========================================*/
module.exports = {
//  FoafPerson : FoafPerson
};
