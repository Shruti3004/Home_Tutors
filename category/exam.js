var searchBoard = document.querySelector("#firstSearch");
var list1 = document.querySelector(".first");

searchBoard.addEventListener("keyup", Search1);

function Search1() {
  var list = list1.getElementsByTagName("label");
  console.log(list);
  var val = searchBoard.value.toLowerCase();
  Array.from(list).forEach((listItem) => {
    var text = listItem.textContent;
    if (text.toLowerCase().indexOf(val) != -1) {
      listItem.parentElement.parentElement.style.display = "block";
    } else {
      listItem.parentElement.parentElement.style.display = "none";
    }
  });
}
