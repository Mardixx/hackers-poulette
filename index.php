<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="stylesheet" href="./SASS/style.css" type="text/css">
    <script defer type="module" src="./JS/script.js"></script>
</head>
    <body>
        <header>
            <h1>Contact Support</h1>
        </header>
        <?php
            function returnInfos() {
                $message = htmlspecialchars($_POST["message"]);
                $name = htmlspecialchars($_POST["name"]);
                $lastname = htmlspecialchars($_POST["lastname"]);
                $gender = htmlspecialchars($_POST["genders"]);
                $email = htmlspecialchars($_POST["email"]);
                $country = htmlspecialchars($_POST["country"]);
                $subject = htmlspecialchars($_POST["subject"]);
                
                require './assets/mail.php';
            }  
            returnInfos();
        ?>
        <?php
            if (!empty($honeypot)) {
                echo "Hey don't spam me";
                return;
              } else {
                mail($to, $subject, $message, $header);
              }
        ?>
        <main>
        <script type="text/javascript">
            function noenter() {
            return !(window.event && window.event.keyCode == 13); }
        </script>
            <form method = "POST">
                <div class="nameDiv"><label for="name">First Name: <input type="text" name="name" class="name" onkeypress="return noenter()"></label></div>
                <div class="lnameDiv"><label for="lastname">Last Name: <input type="text" name="lastname" class="lname" onkeypress="return noenter()"></label></div>
                <div class="genderDiv">
                    <label for="genders" class="genderLabel">Gender:
                        <select name="genders" class="gender">
                                <option value="Male" name="male"selected>Male</option>
                                <option value="Female" name="female">Female</option>
                        </select>
                    </label>
                </div>
                <div class="emailDiv"><label for="email">Email: <input type="email" name="email" class="email" onkeypress="return noenter()"></label></div>
                <div class="countryDiv"><label for="country">Country: <input type="text" name="country" class="country" onkeypress="return noenter()"></label></div>
                <div class="subjectDiv">
                    <label for="subject" class="subjectLabel">Subject: 
                        <select name="subject" class="choices">
                            <option value="Problem Shipping">Problem Shipping</option>
                            <option value="Bug">Bug</option>
                            <option value="Other" selected>Other</option>
                        </select>
                    </label>
                </div>
                <div class="messageDiv">
                    <label for="message">Message: <textarea name="message" class="message" ></textarea></label>
                </div>
                <input type="submit" name="submit" value="Submit" class="submit">
            </form>
        </main>
    </body>
</html>