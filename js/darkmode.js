function checkDarkModeCookie() {
    var darkModeEnabled = document.cookie.indexOf("darkmode=true") !== -1;
    if (darkModeEnabled) {
        document.body.classList.add("darkmode")
    }
}
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("darkmode");
    if (body.classList.contains("darkmode")) {
        document.cookie = "darkmode=true; path=/";
    } else {
        document.cookie = "darkmode=false; path=/";
    }
}
window.onload = checkDarkModeCookie;