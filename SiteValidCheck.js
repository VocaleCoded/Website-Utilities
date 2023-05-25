(function() {
    alert("Please click 'OK' to proceed");

    function getDomain(url) {
        const parser = document.createElement('a');
        parser.href = url;
        return parser.hostname;
    }

    function isValidDomain(domain) {
        const domainRegex = /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
        return domainRegex.test(domain);
    }

    function hasMaliciousPattern(url) {
        const maliciousPatterns = ['malware', 'phishing', 'attack'];
        return maliciousPatterns.some(pattern => url.includes(pattern));
    }

    const currentDomain = getDomain(location.href);

    if (isValidDomain(currentDomain)) {
        alert("Domain is valid, proceed to check for malware");

        if (!currentDomain.includes('.com') && !currentDomain.includes('.org') && !currentDomain.includes('.edu')) {
            alert('The domain uses a custom endpoint (e.g., endpoint), please be careful exploring it');
        } else {
            alert('The domain is considered safe, but still take care while exploring');
        }

        if (hasMaliciousPattern(currentDomain)) {
            alert('The domain contains a potential malicious pattern. Exercise caution while exploring.');
        }
    } else {
        alert("Domain is invalid, please do NOT continue exploring");
    }
})();
