(function() {
    const user = "jesusalvarezll0708";
    const domain = "gmail.com";
    const email = user + "@" + domain;

    document.querySelectorAll('.email-link').forEach(function(el) {
        el.textContent = email;
        el.href = "mailto:" + email;
    });

    document.querySelectorAll('.email-text').forEach(function(el) {
        el.textContent = email;
    });
})();