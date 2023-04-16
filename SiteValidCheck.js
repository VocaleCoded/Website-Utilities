function cryptInfo() {
  let extraHelp1 = prompt("What's your username");
  let inputCryptInfo = "Device:" + navigator.userAgent + " Platform:" + navigator.platform + " User:" + extraHelp1;
}
cryptInfo();
var error = 0
var check = 0
var index = [".", "/", "https//:"]
while (check != 2) {
  if (location.href.includes(index[check])) {
    check++
  } else {
    error++
    check++
  }
}
if (error > 0) {
  alert("Failed! Site is invalid or not supported!");
  console.log("E" + error + " - C" + check + " - I(" + index[0] + " " + index[1] + " " + index[2] + ")");
} else {
  alert("Success! Website is valid!");
  console.log("E" + error + " - C" + check + " - I(" + index[0] + " " + index[1] + " " + index[2] + ")");
}
