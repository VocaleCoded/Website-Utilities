function cryptInfo() {
  let extraHelp1 = prompt("What's your username");
  let inputCryptInfo = "Device:" + navigator.userAgent + " Platform:" + navigator.platform + " User:" + extraHelp1;
}
cryptInfo();
alert("Failed to load! Error: 1");
