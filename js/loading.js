window.addEventListener("load", function () {
  const spinner = document.getElementById("loading-spinner");

  setTimeout(function () {
    spinner.style.display = "none";
  }, 3000);
});
