/******************************************************
 * Author: O. Rey
 * email: rey.olivier@gmail.com
 * Date: November 2017
 * Core library for MicaGraph
 * License: Apache 2
 ******************************************************/


/**
 * Business root
 * This class is not exported
 */
class BusinessRoot {
  constructor(id,
              type,
              name,
              domain = 'Default domain',
              creationUser = 'Default user',
              creationDate = Date.now()) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.domain = domain;
    this.creationUser = creationUser;
    this.creationDate = creationDate;
  }
  
  print() {
    return JSON.stringify(this);
  }
}

/**
 * BusinessRootDB
 * Not used
 */
class BusinessRootDB {
  constructor(dbtype) {
    this.dbtype = dbtype;
  } 
}

/**
 * Business node
 */
class BusinessNode extends BusinessRoot {
  constructor(id,
              type,
              name,
              domain = 'Default domain',
              creationUser = 'Default user') {
    super(id, type, name, domain, creationUser);
  }
}

/**
 * Business relationship
 */
class BusinessRel extends BusinessRoot {
  constructor(id,
              type,
              name,
              source,
              target,
              domain = 'Default domain',
              creationUser = 'Default user') {
    super(id, type, name, domain, creationUser);
    if (source.constructor.name == 'BusinessNode')
      this.source = source;
    else {
      console.log('Source has bad type');
      this.source = null;
    }
    if (target.constructor.name == 'BusinessNode')
      this.target = target;
    else {
      console.log('Target has bad type');
      this.target = null;
    }
  }
  
  isValid() {
    return ((this.source == null ? false : true) && (this.target == null ? false : true))
  }
}

/**
 * BusinessArc
 */
class BusinessArc {
  constructor(source, rel, target) {
    if (source.constructor.name == 'BusinessNode')
      this.source = source;
    else {
      console.log('Source has bad type');
      this.source = null;
    }
    if (target.constructor.name == 'BusinessNode')
      this.target = target;
    else {
      console.log('Target has bad type');
      this.target = null;
    }
    if (rel.constructor.name == 'BusinessRel')
      this.rel = rel;
    else {
      console.log('Rel has bad type');
      this.rel = null;
    }
  }

  isValid() {
    if ((this.source == null) || (this.target == null) || (this.rel == null))
      return false;
    if ((this.rel.source.id != this.source.id) ||
        (this.rel.target.id != this.target.id))
      return false;
    return true;
  }
  
}

/*=======================================
 * Constants
 ========================================*/
const UNSET = 0;


/*=======================================
 * Main APIs
 ========================================*/
function searchNode(type, clause) {

} 

function getNeighbours(bnode) {
  
}

function addToGraph(things) {
  
}






/*=======================================
 * Exports
 ========================================*/
module.exports = {
  UNSET : UNSET,
  BusinessNode : BusinessNode,
  BusinessRel  : BusinessRel,
  BusinessArc  : BusinessArc,
  BNode : BusinessNode,
  BRel  : BusinessRel,
  BArc  : BusinessArc
};
