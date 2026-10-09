const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const loginMessage = document.getElementById("loginMessage");

// Show or hide password
togglePassword.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";

  passwordInput.type = isHidden ? "text" : "password";
  togglePassword.textContent = isHidden ? "Hide" : "Show";
  togglePassword.setAttribute(
    "aria-label",
    isHidden ? "Hide password" : "Show password"
  );
});

// Handle login form submission
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    loginMessage.textContent = "Please fill in all fields.";
    loginMessage.style.color = "#dc2626";
    return;
  }

  // Demo only: no account is authenticated here.
  loginMessage.textContent =
    "Form validated. Connect an authentication service to log in.";
  loginMessage.style.color = "#15803d";
});