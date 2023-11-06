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
                $message = $_GET["message"];
                $name = $_GET["name"];
                $lastname = $_GET["lastname"];
                $male = $_GET["male"];
                $woman = $_GET["woman"];
                $email = $_GET["email"];
                $country = $_GET["country"];
                $subject = $_GET["subject"];

                echo '<pre>';
                print_r($_GET);
                echo '<pre>';
            }  
            returnInfos();
        ?>
        <main>
            <form method = "GET">
                <label for="name">First Name: <input type="text" name="name" class="name" required></label>
                <label for="lastname">Last Name: <input type="text" name="lastname" required></label>
                <div class="gender">
                    <label for="male">Male: <input type="radio" name="male"></label>
                    <label for="woman">Woman: <input type="radio" name="woman"></label>    
                </div>
                <label for="email">Email: <input type="email" name="email" required></label>
                <label for="country">Country: <input type="text" name="country" required></label>
                <label for="subject">Subject: 
                    <select name="subject" id="">
                        <option value="problem shipping">Problem Shipping</option>
                        <option value="bug">Bug</option>
                        <option value="other" selected>Other</option>
                    </select>
                </label>
                <label for="message">Message: <textarea name="message" required></textarea></label>
                <input type="submit" name="submit" value="Submit" class="submit">
            </form>
        </main>
    </body>
</html>