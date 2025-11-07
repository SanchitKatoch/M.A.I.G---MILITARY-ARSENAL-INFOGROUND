window.onload = function(){
	 if (localStorage.getItem("loggedIn") !== "true") {
    	window.location.href = "./login/log.html";
  	}
}

// Logout function
document.getElementById("Logbutn").addEventListener("click", () => {
  localStorage.removeItem("maig_logged_in");
  window.location.href = "./login/log.html";
});

function toggleContent(index) {
  const contents = document.querySelectorAll('.content');
  const current = contents[index];
  const isVisible = current.style.display === 'block';
  
  // Hide all content sections first
  contents.forEach(c => c.style.display = 'none');
  
  // Toggle current one
  if (!isVisible) {
    current.style.display = 'block';
  }
}
