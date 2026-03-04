const signupBox = document.getElementById("signup-box");
const signinBox = document.getElementById("signin-box");
const navSignup = document.getElementById("nav-signup");
const navSignin = document.getElementById("nav-signin");
const goSignup = document.getElementById("go-signup");
const goSignin = document.getElementById("go-signin");
const signupForm = document.getElementById("signup-form");
const signinForm = document.getElementById("signin-form");
const toast = document.getElementById("toast");


function showToast(message) {
    toast.innerText = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

function showSignUp() {
    signupBox.style.display = "flex";
    signinBox.style.display = "none";
}

function showSignIn() {
    signupBox.style.display = "none";
    signinBox.style.display = "flex";
}

navSignup.addEventListener("click", showSignUp);
navSignin.addEventListener("click", showSignIn);

goSignup.addEventListener("click", showSignUp);
goSignin.addEventListener("click", showSignIn);

/* Form Submit */
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("User registered successfully 🎉");
});

signinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Account logged in successfully ✅");
});