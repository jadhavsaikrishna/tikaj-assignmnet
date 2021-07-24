node={
"_id": "node1",
"text": "Node 1",
"children": [
{
"_id": "node1-1",
"text": "Node 1 - 1",
"children": [
{
"_id": "node1-1-1",
"text": "Node 1 - 1 - 1"
},
{
"_id": "node1-1-2",
"text": "Node 1 - 1 - 2"
}
]
},
{
"_id": "node1-2",
"text": "Node 1 - 2"
}
]
}
function childCount(node){
    if(node.children===undefined)   // base condition
     {
       node.directChildCount=0;
       node.totalChildCount=0;
       node.indirectChildCount=0;
       return node;
     }
    node.directChildCount=node.children.length;   // direct children are no. of childrens
    node.totalChildCount=node.directChildCount;   // initialising child count with no. of direct children
    node.children.forEach((child)=>{
      child=childCount(child);  // recursive part
      node.totalChildCount+=child.totalChildCount;
    })
    node.indirectChildCount=node.totalChildCount-node.directChildCount; 
    // indirect childs are total no. of childs - no. of direct childs
    return node;
  }
  node=childCount(node);
  console.log("Number of Childs ",node.totalChildCount);
  console.log("Number of Direct Childs ",node.directChildCount);
  console.log("Number of Indirect Childs ",node.indirectChildCount);