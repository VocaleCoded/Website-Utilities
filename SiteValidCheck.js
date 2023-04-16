alert("By clicking 'OK', you accept that we will go throught your full URL. Are you sure? (Reset if no)");
let check = 0
let index = []
let error = 0
index.push("/");
index.push(".");
index.push("https://");
console.log("Ready to check");
console.log("-----------------------------");
while (check != 3)
if (location.href.includes(index[check])) {
    check++
} else if (!location.href.includes(index[check])) {
    check++
    error++
}
if (error > 0) {
    alert("Failed! Your domain is suspicious..!");
} else if (error = 0) {
    alert("Success! Your domain is verified!");
}
console.log("C" + check + " - E" + error);
