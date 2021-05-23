const sign_in_btn = document.querySelector("#sign-in-ctn");
const sign_up_btn = document.querySelector("#sign-up-ctn");
const container = document.querySelector(".wrapper");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
