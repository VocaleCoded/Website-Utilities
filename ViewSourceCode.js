javascript:(function() {
  var sourceCode = document.documentElement.innerHTML;
  var encodedSourceCode = encodeURIComponent(sourceCode);
  var newTab = window.open();
  newTab.document.write(
    '<html><head><title>Source Code</title>' +
    '<link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet">' +
    '<style>' +
    '  body { background-color: #f5f5f5; }' +
    '  pre { background-color: #fff; padding: 20px; font-family: "Fira Code", monospace; font-size: 14px; line-height: 1.5; color: #333; overflow-x: auto; }' +
    '</style></head><body>' +
    '<pre>' + decodeURIComponent(encodedSourceCode).replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</pre>' +
    '</body></html>'
  );
  newTab.document.close();
})();
