// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  //create a place to store possible nodes - NOTE: getElementsByClassName 
  var allNodes = [];
  // write helper inner recursive function which pushes possible nodes to all nodes array
  var innerRecursion = function (node) {
    if (node.classList.indexOf(className) > -1) {
      allNodes.push(node);
    }
    for (var i = 0; i < node.childNodes.length; i++) {
      innerRecursion(node[i]);
    }
  };

// use innerRecusrion function on list of all possible nodes on html page 
  // use document body for all possible nodes 
      // W3 Note : In the HTML DOM (Document Object Model), everything is a node:
        // The document itself is a document node
        // All HTML elements are element nodes
        // All HTML attributes are attribute nodes
        // Text inside HTML elements are text nodes
        // Comments are comment nodes
  innerRecursion(document.body);
  //return list of all nodes 
  return allNodes;
};