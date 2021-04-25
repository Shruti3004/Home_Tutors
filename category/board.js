var searchBoard = document.querySelector('#firstSearch');
var searchLang = document.querySelector('#secondSearch');
var list1 = document.querySelector('.first');
// console.log(searchBoard,searchLang)
var list2 = document.querySelector('.second');
// console.log(list1.children.firstElementChild);
searchBoard.addEventListener('keyup', Search1);
searchLang.addEventListener('keyup', Search2);

function Search1(){
    var list = list1.getElementsByTagName('label');
    console.log(list);
    var val = searchBoard.value.toLowerCase();
    console.log(val);
    Array.from(list).forEach(listItem => {
        var text = listItem.textContent;
        if(text.toLowerCase().indexOf(val) != -1){
            console.log(text.toLowerCase().indexOf(val))
            listItem.style.display = "block";
        }
        else
            listItem.style.display = "none";
    })
}

function Search2(){
    var list = list2.getElementsByTagName('label');
    console.log(list);
    var val = searchLang.value.toLowerCase();
    console.log(val);
    Array.from(list).forEach(listItem => {
        var text = listItem.textContent;
        if(text.toLowerCase().indexOf(val) != -1){
            console.log(text.toLowerCase().indexOf(val))
            listItem.style.display = "block";
        }
        else
            listItem.style.display = "none";
    })
}