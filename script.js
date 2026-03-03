const signupForm = document.getElementById("signup-form");
const signinForm = document.getElementById("signin-form");
const signupBox = document.getElementById("signup-box");
const signinBox = document.getElementById("signin-box");
const toggleBtn = document.getElementById("toggle-btn");
const toast = document.getElementById("toast");

let showSignup = true;

/* Toast */
function showToast(message) {
    toast.innerText = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

/* Sign Up */
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("User registered successfully 🎉");
});

/* Sign In */
signinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Account logged in successfully ✅");
});

/* Mobile Toggle */
toggleBtn.addEventListener("click", () => {
    showSignup = !showSignup;

    if (showSignup) {
        signupBox.style.display = "block";
        signinBox.style.display = "none";
    } else {
        signupBox.style.display = "none";
        signinBox.style.display = "block";
    }
});