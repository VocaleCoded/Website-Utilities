(function() {
  var sourceCode = document.documentElement.innerHTML;
  var encodedSourceCode = encodeURIComponent(sourceCode);
  var newTab = window.open();
  newTab.document.write('<pre>' + decodeURIComponent(encodedSourceCode).replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</pre>');
})();
