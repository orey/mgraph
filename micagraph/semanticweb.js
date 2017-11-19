'use strict';

var c = require('./core');

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