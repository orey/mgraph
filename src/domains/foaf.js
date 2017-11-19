/******************************************************
 * Author: O. Rey
 * email: rey.olivier@gmail.com
 * Date: November 2017
 * Core library for MicaGraph
 * License: Apache 2
 ******************************************************/
'use strict';

var c = require('../core/mgraph');

class FoafPerson extends c.BusinessNode {
  constructor(id, name, firstName, creationUser) {
    super(id, "FoafPerson", name, "FOAF", creationUser);
    this.firstName = firstName;
  }
}

/*=======================================
 * Exports
 ========================================*/
module.exports = {
  FoafPerson : FoafPerson
};

