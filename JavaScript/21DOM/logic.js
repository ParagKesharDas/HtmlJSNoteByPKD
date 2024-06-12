// 1.document is----> Root Node
// 2.html is child node of document--->root element
// 3.head is child node of html
// 4.as new line /n will store---->text node
// 5.title is child node of head
// 6.Dom traversing in title is text node of tittle
// 7.new line space will be store under head
// 8.script tag is child node of head
// 9.new line space will be store under head
// this will continue...


// In JavaScript, the Document Object Model (DOM) is a programming interface for web documents. 
// It represents the page so that programs can change the document structure, style, and content.

// The DOM is essentially a tree-like structure, called the DOM tree, that represents the HTML or
//  XML document as a set of nodes and objects. Each node in the tree corresponds to a different part of 
// the document, such as an element, attribute, or piece of text.

// The W3C DOM standard is separated into 3 different parts:

// Core DOM - standard model for all document types
// XML DOM - standard model for XML documents
// HTML DOM - standard model for HTML documents

//this  is DOM tree

const rootNode= document.getRootNode();
console.log(rootNode)//will return document full html code
const htmlElementNode= rootNode.childNodes[0]
console.log(htmlElementNode)
console.log(htmlElementNode.childNodes)//NodeList(3) [head, text, body]
console.log(htmlElementNode.children)//NodeList(3) [head, body]

// children property only returns element nodes, 
// whereas the childNodes property returns all types of nodes, including text nodes, 
// 1comment nodes, and others

const headElementNode=htmlElementNode.childNodes[0];
const textNode1=htmlElementNode.childNodes[1];
const bodyElementNode=htmlElementNode.childNodes[2];
console.log(headElementNode,textNode1,bodyElementNode)

//parentNode
console.log(headElementNode.parentNode)
console.log(htmlElementNode.parentNode)
//sibling node
console.log(headElementNode.nextSibling,headElementNode.nextSibling.nextSibling)//head 's sibling node is text node and body node
console.log(headElementNode.nextElementSibling)//not consider text as netElementSibling







