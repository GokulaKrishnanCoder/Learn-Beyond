function validateForm() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var institute = document.getElementById("institute").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Name Validation
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }

  // Age Validation
  if (age == "" || isNaN(age) || age < 1) {
    alert("Please enter a valid age");
    return false;
  }

  // Gender Validation
  if (gender == "") {
    alert("Please enter your gender");
    return false;
  }

  // Institute Validation
  if (institute == "") {
    alert("Institute name must be filled out");
    return false;
  }

  // Email Validation
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  // Password Validation
  if (password == "") {
    alert("Password cannot be empty");
    return false;
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }

   localStorage.setItem("username", name);

   
   window.location.href = "index.html";
  return true;
}
