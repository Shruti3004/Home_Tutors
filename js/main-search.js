var btn = document.querySelector("#side-emerge");
var closeBtn = document.querySelector(".closeBtn");
var searchOverlay = document.querySelector(".search-overlay");
var searchContent = document.querySelector(".search-content");
console.log(closeBtn);
btn.addEventListener("click", () => {
  searchContent.classList.add("content-slide-in");
  searchOverlay.classList.add("search-visible");
});
closeBtn.addEventListener("click", () => {
  searchContent.classList.remove("content-slide-in");
  searchOverlay.classList.remove("search-visible");
});
