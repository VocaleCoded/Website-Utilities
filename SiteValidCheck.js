function cryptInfo() {
  let extraHelp1 = prompt("What's your username");
  let inputCryptInfo = "Device:" + navigator.userAgent + " Platform:" + navigator.platform + " User:" + extraHelp1;
}
cryptInfo();
var error = 0
var check = 0
var index = [".", "/", "https//:"]
while (check != 3) {
  if (location.href.includes(index[0])) {
    check++
  } else {
    error++
    check++
  }
}
if (error > 0) {
  alert("Failed! Site is invalid or not supported. ERR:1");
} else {
  alert("Success! Website is valid. NOERR:1");
}
