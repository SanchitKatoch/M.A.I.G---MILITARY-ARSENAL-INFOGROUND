document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value;

  // Fetch stored user from localStorage
  let storedUser = JSON.parse(localStorage.getItem("maig_user"));

  if (!storedUser) {
    alert("No user found. Please sign up first!");
    window.location.href = "sig.html";
    return;
  }

  // Match username and password
  if (username === storedUser.username && password === storedUser.password) {
    localStorage.setItem("loggedIn", "true");
    alert("Login successful!");
    window.location.href = "../index.html";
  } else {
    alert("Invalid username or password!");
  }
});
