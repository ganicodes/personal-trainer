var monthly = document.getElementById("monthly");
var yearly = document.getElementById("yearly");
yearly.addEventListener("click", function switchPlans() {
  document.getElementById("monthly").classList.add("inactive");
  document.getElementById("yearly").classList.remove("inactive");
  document.getElementsByClassName("amt")[0].innerHTML = "&#x20B9;14,999";
  document.getElementsByClassName("amt")[1].innerHTML = "&#x20B9;34,999";
  document.getElementsByClassName("amt")[2].innerHTML = "&#x20B9;74,999";
  var validity = document.getElementsByClassName("validity");
  for (let index = 0; index < validity.length; index++) {
    validity[index].innerHTML = "/y";
  }
});
monthly.addEventListener("click", function switchPlans() {
  document.getElementById("yearly").classList.add("inactive");
  document.getElementById("monthly").classList.remove("inactive");
  document.getElementsByClassName("amt")[0].innerHTML = "&#x20B9;1499";
  document.getElementsByClassName("amt")[1].innerHTML = "&#x20B9;3499";
  document.getElementsByClassName("amt")[2].innerHTML = "&#x20B9;7499";
  var validity = document.getElementsByClassName("validity");
  for (let index = 0; index < validity.length; index++) {
    validity[index].innerHTML = "/m";
  }
});
