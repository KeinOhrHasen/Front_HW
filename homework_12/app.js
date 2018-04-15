// 1 - object parser for tanks
function makePreviewObject(list){
    window.location.hash = '#'
    var rootDiv = document.getElementById('root'),
        newUl = document.createElement('ul');
    for (let i = 0;i < list.length; ++i){
        
        var nextLi = document.createElement('li'),
            newImgDiv = document.createElement('div'),
            newCommonDiv = document.createElement('div'),
            divForFlag = document.createElement('div'),
            divForLevel = document.createElement('div'),
            divForModel = document.createElement('div');
        
        nextLi.className = list[i].model;
        newImgDiv.className = 'newImgDiv';
        newCommonDiv.className = 'newCommonDiv';
        divForFlag.className = 'divForFlag';
        newImgDiv.style.backgroundImage = 'url(' + list[i].preview + ')';
        divForFlag.style.backgroundImage = 'url(' + list[i]['country_image'] + ')';
        divForLevel.innerHTML = list[i].level;
        divForModel.innerHTML = lengthOffSet(list[i].model.toUpperCase());
        
        newCommonDiv.appendChild(divForFlag);
        newCommonDiv.appendChild(divForLevel);
        newCommonDiv.appendChild(divForModel);
        
        nextLi.onclick = newDoc;
        nextLi.appendChild(newImgDiv);
        nextLi.appendChild(newCommonDiv);
        
        newUl.appendChild(nextLi);
        
        rootDiv.appendChild(newUl); 
    }
}


// length offset
function lengthOffSet(string){
    if (string.length < 14){
        return string
    } else{
        return string.substr(0, 11) + '...'
    }
}


// get list of tanks back
function originList(){
    var rootN = document.getElementById('root');
    rootN.innerHTML = '';
    makePreviewObject(tanks)
}


// move to tank datails
function newDoc(event) {
    window.location.hash = event.currentTarget.className
    var root = document.getElementById('root');
    root.innerHTML = '';
    
    
    //create all needed element
    var previewBox1 = document.createElement('div'),
        previewBox2 = document.createElement('div'),
        previewBox3 = document.createElement('div'),
        previewCommon = document.createElement('div'),
        tankImg = document.createElement('div'),
        previewLabel = document.createElement('div'),
        backToList = document.createElement('div'),
        tableLabel = document.createElement('div'),
        table = document.createElement('table'),
            tr1 = document.createElement('tr'),
            tr2 = document.createElement('tr'),
            tr3 = document.createElement('tr'),
            tr4 = document.createElement('tr'),
            tr5 = document.createElement('tr'),
            td11 = document.createElement('td'),
            td12 = document.createElement('td'),
            td21 = document.createElement('td'),
            td22 = document.createElement('td'),
            td31 = document.createElement('td'),
            td32 = document.createElement('td'),
            td41 = document.createElement('td'),
            td42 = document.createElement('td'),
            td51 = document.createElement('td'),
            td52 = document.createElement('td'),
        previewBox1Flag = document.createElement('div'),
        previewBox1Model = document.createElement('div'),
        previewBox1Level = document.createElement('div');
    
    
//    add className
    previewBox1.className = 'previewBox1';
    previewBox2.className = 'previewBox2';
    previewBox3.className = 'previewBox3';
    previewCommon.className = 'previewCommon' ;
    tankImg.className = 'tankImg';
    previewLabel.className = 'previewLabel';
    backToList.className = 'backToList' ;
    tableLabel.className = 'tableLabel' ;
    previewBox1Flag.className = 'previewBox1Flag';
    previewBox1Model.className = 'previewBox1Model' ;
    previewBox1Level.className = 'previewBox1Level';
        
    backToList.onclick =  originList;  
    
    
    // find tank object by Model name
    for (let i = 0; i < tanks.length; ++i){
        if (tanks[i].model === event.currentTarget.className){
            var clickedObj = tanks[i];
            break;
        }
    }
    
    
    // fill by data object
    tankImg.style.backgroundImage = "url(" + clickedObj.preview + ")"; 
    previewBox1Flag.style.backgroundImage = "url(" + clickedObj["country_image"] + ")";
    previewBox1Level.innerHTML = "(level " + clickedObj.level + ")";
    previewBox1Model.innerHTML = clickedObj.model.toUpperCase();
    backToList.innerHTML = 'Back to list view';
    previewLabel.innerHTML = 'Preview';
    tableLabel.innerHTML = 'Characteristic';
        td11.innerHTML = 'damage';
        td12.innerHTML = clickedObj.details.damage;
        td21.innerHTML = 'breoning';
        td22.innerHTML = clickedObj.details.breoning;
        td31.innerHTML = 'attack speed';
        td32.innerHTML = clickedObj.details.attack_speed;
        td41.innerHTML = 'time of targeting';
        td42.innerHTML = clickedObj.details.time_of_targeting;
        td51.innerHTML = 'ammunition';
        td52.innerHTML = clickedObj.details.ammunition;
    
    
//    to construck all the element 
    previewCommon.appendChild(previewBox1Flag);
    previewCommon.appendChild(previewBox1Model);
    previewCommon.appendChild(previewBox1Level);
    
    previewBox1.appendChild(previewCommon);
    previewBox2.appendChild(previewLabel);
    previewBox2.appendChild(tankImg);
    previewBox2.appendChild(backToList);
        tr1.appendChild(td11);
        tr1.appendChild(td12);
        tr2.appendChild(td21);
        tr2.appendChild(td22);
        tr3.appendChild(td31);
        tr3.appendChild(td32);
        tr4.appendChild(td41);
        tr4.appendChild(td42);
        tr5.appendChild(td51);
        tr5.appendChild(td52);
        table.appendChild(tr1)
        table.appendChild(tr2)
        table.appendChild(tr3)
        table.appendChild(tr4)
        table.appendChild(tr5)
    previewBox3.appendChild(tableLabel);
    previewBox3.appendChild(table);
    
    root.appendChild(previewBox1);
    root.appendChild(previewBox2);  
    root.appendChild(previewBox3);
}
    
makePreviewObject(tanks);