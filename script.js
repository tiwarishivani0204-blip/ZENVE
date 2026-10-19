let isSignup = false;

function toggleForm() {
    const title = document.getElementById("title");
    const nameField = document.getElementById("nameField");
    const toggleText = document.getElementById("toggleText");
    const toggleLink = document.querySelector(".toggle a");

    isSignup = !isSignup;

    if (isSignup) {
        title.innerText = "Create Account";
        nameField.classList.remove("hidden");
        toggleText.innerText = "Already have an account?";
        toggleLink.innerText = "Login";
    } else {
        title.innerText = "Welcome Back";
        nameField.classList.add("hidden");
        toggleText.innerText = "Don’t have an account?";
        toggleLink.innerText = "Sign up";
    }
    document.getElementById("authForm").addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload

    if (isSignup) {
        alert("Signup submitted");
        // signup logic here
    } else {
        alert("Login submitted");
        // login logic here
    }
});

}
document.getElementById("authForm").addEventListener("submit", function (e) {
    e.preventDefault(); // stop form reload

    // redirect to new page
    window.location.href = "dashboard.html";
});
document.getElementById("Form").addEventListener("submit", function (e) {
    e.preventDefault(); // stop form reload

    // redirect to new page
    window.location.href = "buy.html";
});
