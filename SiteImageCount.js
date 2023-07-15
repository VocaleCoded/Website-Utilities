javascript:(function() {
  var images = document.getElementsByTagName("img");
  var imageCount = images.length;
  
  const title = 'Site Image Count';
  const description = 'Current image count is: "' + imageCount + '" (Click to dismiss)';

  const messageBox = document.createElement('div');

  const messageContent = document.createElement('div');
  messageContent.innerHTML = `<h2 style="margin: 0 0 5px; color: #FFFFFF; word-wrap: break-word;">${title}</h2><p style="margin: 0; color: #FFFFFF; word-wrap: break-word;">${description}</p>`;

  messageBox.appendChild(messageContent);
  document.body.appendChild(messageBox);

  messageBox.style.position = 'fixed';
  messageBox.style.top = '0';
  messageBox.style.left = '0';
  messageBox.style.width = '100%';
  messageBox.style.backgroundColor = '#007AFF';
  messageBox.style.padding = '10px 15px';
  messageBox.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.2)';
  messageBox.style.zIndex = '9999';
  messageBox.style.fontFamily = 'Helvetica, Arial, sans-serif';
  messageBox.style.fontSize = '16px';
  messageBox.style.cursor = 'pointer';

  messageBox.addEventListener('click', function() {
    document.body.removeChild(messageBox);
  });
})();
