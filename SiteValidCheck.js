alert("Please click 'OK' to proceed");
if (location.href.includes("/") && location.href.includes(".") && location.href.includes("https://")) {
    alert("Success! The domain is safe!");
} else {
    alert("Fail! The domain isn't safe!");
}
