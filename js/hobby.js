var searchBoard = document.querySelector("#firstSearch");

var list2 = document.querySelector(".first");
var list1 = document.querySelectorAll(".accordion-button");
console.log(list2)
// console.log(Array.from(list1.innerText))

searchBoard.addEventListener("keyup", Search1);

function Search1() {
    list1 = Array.from(list1);
  list2 = Array.from(list2.getElementsByTagName("label"));
//   var list = list1;
//   console.log(list2);
  var main = [...list1,...list2]
  console.log(main)
  var val = searchBoard.value.toLowerCase();
//   Array.from(list1)
  main.forEach((listItem) => {
    var text = listItem.textContent;
    if (text.toLowerCase().indexOf(val) != -1) {
      listItem.parentElement.parentElement.style.display = "block";
    } else {
      listItem.parentElement.parentElement.style.display = "none";
    }
  });
}