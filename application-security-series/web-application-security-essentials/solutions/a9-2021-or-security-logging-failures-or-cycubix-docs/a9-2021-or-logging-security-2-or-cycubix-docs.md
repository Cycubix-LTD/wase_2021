# A9:2021 | Logging Security (2) | Cycubix Docs

#### Let’s try <a href="#lets_try" id="lets_try"></a>

* The goal of this challenge is to make it look like username "admin" succeeded in logging in.
* The red area below shows what will be logged in the web server’s log file.
* Want to go beyond? Try to elevate your attack by adding a script to the log file.

#### Solution

* Lesson says we need to add a script to the log file. First submit the answer and enter into the POST request to evaluate the log-spoofing request.&#x20;
* Then try to generate a script in the username as admin. An example follows:

<figure><img src="../../../../.gitbook/assets/succeded login.png" alt=""><figcaption></figcaption></figure>

* You will see that the login succeded for admin but failed for username.&#x20;
* We can generate a script for the password, after the username script:.&#x20;

