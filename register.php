<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Form Validation</title>
  <link rel="stylesheet" href="style.css">
  <script src="form.js"></script>
</head>

<body>

  <div class="register-page">

    <div class="title-register-wrapper">
      <h1>Welcome to Butterfly Design</h1>
    </div>

    <div class="butterfly-container">
      <div class="butterfly">
        <div class="butter-body butter-part"></div>
        <div class="left-wing butter-part"></div>
        <div class="right-wing butter-part"></div>
      </div>
    </div>


    <form name="myForm" id="myForm" action="#" class="register-form" method="POST" onsubmit="return validate()">
      <label name="username">Username</label>
      <input type="text" name="username" id="username-register" placeholder="Username" />
      <div id="name_error"></div>

      <label name="password">Password</label>
      <input type="password" name="password" id="password-register" placeholder="Password" />
      <div id="password_error"></div>

      <label name="confirmpassword">Confirm Password</label>
      <input type="password" name="confirmpassword" id="confirmpassword-register" placeholder="Confirm Password" />
      <div id="password_error"></div>

      <label name="email">E-Mail</label>
      <input type="text" name="email" id="email-register" placeholder="E-Mail" />
      <div id="email_error"></div>

      <button name="submit" type="submit" class="register-btn">Sign up</button><br><br><br>

      <span style="margin-left: 90px; color: #444;">I have already an account.<a class="signin-in-register" href="#"> Sign in</a></span>
    </form>

  </div>


</body>
</html>

