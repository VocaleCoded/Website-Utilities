alert("Please click 'OK' to proceed");
if (location.href.includes('/') && location.href.includes(".") && location.href.includes("https://")) {
    alert("Domain is vaild, proceed to check for malware");
    if (!location.href.includes('.com') || !location.href.includes('.org' || !location.href.includes('.edu')) {
        alert('The domain is uses a custom endpoint (."e.g. endpoint"), please be careful exploring it');
    } else {
        alert('The domain is considered safe, but still take care while exploring');
    }
} else {
    alert("Domain is invalid, please do NOT continue exploring");
}
