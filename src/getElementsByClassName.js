// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  //create a place to store possible nodes - NOTE: getElementsByClassName 
  var allNodes = [];
  // check if document body has the class name
    // if prsent push document body in all nodes 
  if (document.body.classList.contains(className)) {
    allNodes.push(document.body);
  }
  // write helper inner recursive function which pushes possible nodes to all nodes array
  var innerRecursion = function (node) {
    // check if child nodes have the given class name 
    var nodeChild = node.childNodes;
    // itreate through node child to check if class name is present
    for (var i = 0; i < nodeChild.length; i++) {
      // if node class is defined and has class name push to all nodes 
        // node child element has class list , and class list has class name 
      if (nodeChild[i].classList !== undefined && nodeChild[i].classList.contains(className)) {
        allNodes.push(nodeChild[i]);
      }
      // if node child has children, recurse through the node childre 
        // node child - child nodes should have a length and should not be undefined 
      if (nodeChild[i].childNodes.length > 0 && nodeChild[i].classList !== undefined) {
        innerRecursion(nodeChild[i]);
      }
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