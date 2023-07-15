javascript:(function() {
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].style.border = "2px solid red";
  }
})();
