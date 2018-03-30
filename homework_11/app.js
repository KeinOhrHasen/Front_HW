var rootNode = document.getElementById("root");
rootNode.onclick = addEventListener('click', function() {
    tree_toggle(arguments[0]);
}, false);

let tree = document.createElement('ul');
tree.id = 'TheRoot';
var resultOfParsing = parseStructure(structure, tree);

rootNode.appendChild(resultOfParsing/* Append your TreeView node*/);

function parseStructure(list, innerFolder){
//    var innerTree = document.createElement('div')
    for(let child = 0; child < list.length; ++child ){
        console.log(list[child].children);
        
        function addNewNode(innerFolder){
            var  newLi =  document.createElement("li");
            var  divStatus =  document.createElement("div");
            var  divContent =  document.createElement("div");
            var  newUl =  document.createElement("ul");
            
            newUl.className = 'Container';
            divContent.className = 'Content Expand';
            divStatus.className = 'Expand withImage';
            newLi.className = 'Node ExpandClosed';

            
            newLi.appendChild(divStatus);
            newLi.appendChild(divContent);
            newLi.appendChild(newUl);
            innerFolder.appendChild(newLi);
            
            divContent.innerHTML = list[child].title;
            
            return newUl
        }
        
        if (typeof(list[child].children) === "object" && list[child].children !== null ){
            newUlEx = addNewNode(innerFolder)
            parseStructure(list[child].children, newUlEx)
            
            
        }else if (list[child].children === false || list[child].children === null){
            
            var  newLi =  document.createElement("li");
            var  newLi2 =  document.createElement("li");
            var  divStatus =  document.createElement("div");
            var  divContent =  document.createElement("div");
            var  divContent2 =  document.createElement("div");
            var  newUl =  document.createElement("ul");
            
            newUl.className = 'Container';
            divContent.className = 'Content Expand';
            divStatus.className = 'Expand withImage';
            newLi.className = 'Node ExpandClosed';
            divContent2.className   = 'EmptyFolder';
                
            divContent2.innerHTML = 'This Folder is Empty';

            
            newLi.appendChild(divStatus);
            newLi.appendChild(divContent);
            newLi2.appendChild(divContent2);
            
            newUl.appendChild(newLi2);
            newLi.appendChild(newUl);
            innerFolder.appendChild(newLi);
            
            divContent.innerHTML = list[child].title;
                       
        }else{
            
        var  liContent = document.createElement('li');
        var  divStatus =  document.createElement("div");
        var  divContent =  document.createElement("div");
            
        liContent.className = 'Node';
        divStatus.className = 'filePict';
        divContent.className = 'Content';
            
        divContent.innerHTML = list[child].title;
        liContent.appendChild(divStatus);
        liContent.appendChild(divContent);          
        innerFolder.appendChild(liContent);
        }
    }
    return innerFolder
}

function tree_toggle(event) {
        event = event || window.event
        var clickedElem = event.target || event.srcElement;

        if (!hasClass(clickedElem, 'Expand')) {return}

        var node = clickedElem.parentNode
        if (hasClass(node, 'ExpandLeaf')) {return}
    
        var newClass = hasClass(node, 'ExpandOpen') ? 'ExpandClosed' : 'ExpandOpen'
        var re =  /(^|\s)(ExpandOpen|ExpandClosed)(\s|$)/
        node.className = node.className.replace(re, '$1'+newClass+'$3')
}

function hasClass(elem, className) {
    return new RegExp("(^|\\s)"+className+"(\\s|$)").test(elem.className)}