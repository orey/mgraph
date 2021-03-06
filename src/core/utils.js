/******************************************************
 * Author: O. Rey
 * email: rey.olivier@gmail.com
 * Date: November 2017
 * Core library for MicaGraph
 * License: Apache 2
 ******************************************************/

/**
 * Prints the prototype chain v1
 */
function printPrototypeChain(obj) {
  let temp = Object.getPrototypeOf(obj);
  if ((temp === {})||(temp === undefined) || (temp === null))
    console.log('END');
  else {
    console.log(temp);
    printPrototypeChain(temp);
  }
}

/**
 * Taken here
 * https://gist.github.com/archan937/1961799
 */
function inspect(object) {
  switch (typeof(object)) {
  case "undefined":
    return "undefined";
  case "string":
    return "\"" + object.replace(/\n/g, "\\n").replace(/\"/g, "\\\"") + "\"";
  case "object":
    if (object == null) {
      return "null";
    }
    var a = [];
    if (object instanceof Array) {
      for (var i in object) {
        a.push(inspect(object[i]));
      };
      return "[" + a.join(", ") + "]";
    } else {
      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          a.push(key + ": " + inspect(object[key]));
        }
      };
      return "{" + a.join(", ") + "}";
    }
  default:
    return object.toString();
  }
};

/*=======================================
 * Exports
 *=======================================*/
module.exports = {
  inspect              : inspect,
  printPrototypeChain  : printPrototypeChain
};

