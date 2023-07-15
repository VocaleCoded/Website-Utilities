(function() {
  var script = document.createElement('script');
  script.src = 'https://x-ray-goggles.mouse.org/webxray.js';
  script.className = 'webxray';
  script.setAttribute('data-lang', 'en-US');
  script.setAttribute('data-baseuri', 'https://x-ray-goggles.mouse.org');
  document.body.appendChild(script);

  var timeout = setTimeout(function() {
    alert('Failed to launch the script within 6 seconds.');
    return; // Exit the entire script
  }, 6000);

  function messageSend(titleX, descX) {
    javascript:(function() {
      const title = titleX;
      const description = descX;

      const messageBox = document.createElement('div');

      const messageContent = document.createElement('div');
      messageContent.innerHTML = `<h2 style="margin: 0 0 5px; color: #FFFFFF; word-wrap: break-word;">${title}</h2><p style="margin: 0; color: #FFFFFF; word-wrap: break-word;">${description}</p>`;

      messageBox.appendChild(messageContent);
      document.body.appendChild(messageBox);
  
      messageBox.style.position = 'fixed';
      messageBox.style.top = '0'
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
  }
  script.onload = function() {
    clearTimeout(timeout);
    messageSend('Successfully Launched', 'Launched script (scripts by CoderBoyCodes on Github)');
  };
})();
