function validateForm() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
  
    // Validate name field
    if (name === "") {
      alert("Name field is required");
      return false;
    }
  
    // Validate email field
    if (email === "") {
      alert("Email field is required");
      return false;
    } else {
      var email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email_regex.test(email)) {
        alert("Invalid email address");
        return false;
      }
    }
  
    // Validate password fields
    if (password === "" || confirm_password === "") {
      alert("Password fields are required");
      return false;
    } else if (password !== confirm_password) {
      alert("Passwords do not match");
      return false;
    }
  
    // Submit the form if all validations pass
    alert("Sign up successful!");
    return true;
  }