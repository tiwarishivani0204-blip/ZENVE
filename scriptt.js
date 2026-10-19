
// Redirect to shop page after login/signup
document.getElementById("authForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent form from reloading the page
    window.location.href = "shop.html"; // open shopping page
});
