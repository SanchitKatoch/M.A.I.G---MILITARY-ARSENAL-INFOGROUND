document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (!username || !password || !confirmPassword) {
    alert("All fields are required.");
    return;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  let user = {
    username: username,
    password: password
  };

  localStorage.setItem("maig_user", JSON.stringify(user));

  alert("Signup successful! Please login now.");
  window.location.href = "../login/log.html";
});
