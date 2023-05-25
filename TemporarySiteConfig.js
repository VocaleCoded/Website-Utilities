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

  script.onload = function() {
    clearTimeout(timeout);
    alert('Launched script (scripts by CoderBoyCodes on Github)');
    // 69
  };
})();
