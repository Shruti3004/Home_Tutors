var searchBoard = document.querySelector('#firstSearch');
var searchLang = document.querySelector('#secondSearch');
var list1 = document.querySelector('.first');
var list2 = document.querySelector('.second');

searchBoard.addEventListener('keyup', Search1);
searchLang.addEventListener('keyup', Search2);

function Search1(){
    var list = list1.getElementsByTagName('label');    
    var val = searchBoard.value.toLowerCase();    
    Array.from(list).forEach(listItem => {        
        var text = listItem.textContent;
        if (text.toLowerCase().indexOf(val) != -1) {          
          listItem.style.display = "block";
        } else {            
            listItem.parentElement.style.display = "none";
        }
            
    })
}

function Search2(){
    var list = list2.getElementsByTagName('label');    
    var val = searchLang.value.toLowerCase();    
    Array.from(list).forEach(listItem => {
        var text = listItem.textContent;
        if(text.toLowerCase().indexOf(val) != -1){            
            listItem.style.display = "block";
        }
        else
            listItem.parentElement.style.display = "none";
    })
}