// content.js
document.addEventListener('DOMContentLoaded', function() {
    var loc = location.href;
    if (!loc.includes("udm=14")) {
        if (loc.indexOf("?") == -1) {
            location.replace(loc + "?udm=14");
        } else {
            location.replace(loc + "&udm=14");
        }
    }
});
