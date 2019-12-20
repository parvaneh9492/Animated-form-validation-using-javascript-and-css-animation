  var username = document.forms["myForm"]["username"];
  var email = document.forms["myForm"]["email"];
  var password = document.forms["myForm"]["password"];
  var confirmPassword = document.forms["myForm"]["confirmpassword"];

  var name_error = document.getElementById("name_error");
  var email_error = document.getElementById("email_error");
  var password_error = document.getElementById("password_error");

  username.addEventListener("blur", nameVerify, true);
  email.addEventListener("blur", emailVerify, true);
  password.addEventListener("blur", passwordVerify, true);

  // validation function
  function validate() {
    if (username.value == "") {
      name_error.style.color = "#e74c3c";
      document.getElementById("username-register").style.border =
        "1px solid #c0392b";
      name_error.textContent = "Username is required";
      username.focus();
      return false;
    }

    // validate username
    if (username.value.length < 4) {
      name_error.style.color = "#e74c3c";
      document.getElementById("username-register").style.border =
        "1px solid #c0392b";
      name_error.textContent = "Username must be at least 4 characters";
      username.focus();
      return false;
    }

    // validate email
    if (email.value == "") {
      email_error.style.color = "#e74c3c";
      document.getElementById("email-register").style.border =
        "1px solid #c0392b";
      email_error.textContent = "Email is required";
      email.focus();
      return false;
    }

    if (email.value != ('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/')) {
      email_error.style.color = "#e74c3c";
      document.getElementById("email-register").style.border =
        "1px solid #c0392b";
      email_error.textContent = "You have entered an invalid email address!";
      email.focus();
      return false;
    }

    // validate password
    if (password.value == "") {
      password_error.style.color = "#e74c3c";
      document.getElementById("password-register").style.border =
        "1px solid #c0392b";
      password_error.textContent = "Password is required";
      password.focus();
      return false;
    }

    // check if the two passwords match
    if (password.value != confirmPassword.value) {
      password_error.style.color = "#e74c3c";
      document.getElementById("confirmpassword-register").style.border =
        "1px solid #c0392b";
      password_error.innerHTML = "The two passwords do not match";
      return false;
    }
  }

  // event handler functions
  function nameVerify() {
    if (username.value != "") {
      document.getElementById("username-register").style.border = "1px solid #ccc";
      name_error.innerHTML = "";
      return true;
    }
  }

  function emailVerify() {
    if (email.value != "") {
      document.getElementById("email-register").style.border = "1px solid #ccc";
      email_error.innerHTML = "";
      return true;
    }
  }

  function passwordVerify() {
    if (password.value != "") {
      document.getElementById("password-register").style.border = "1px solid #ccc";
      password_error.innerHTML = "";
      return true;
    }
    if (password.value === confirmPassword.value) {
      document.getElementById("confirmpassword-register").style.border = "1px solid #ccc";
      password_error.innerHTML = "";
      return true;
    }
  }