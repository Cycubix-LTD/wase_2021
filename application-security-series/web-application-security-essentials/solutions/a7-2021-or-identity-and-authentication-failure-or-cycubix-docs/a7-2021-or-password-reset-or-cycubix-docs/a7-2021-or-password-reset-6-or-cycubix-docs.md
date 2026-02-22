# A7:2021 | Password Reset (6) | Cycubix Docs

### Creating the password reset link <a href="#creating_the_password_reset_link" id="creating_the_password_reset_link"></a>

When creating a password reset link you need to make sure:

* It is a unique link with a random token
* It can only be used once
* The link is only valid for a limited amount of time.

Sending a link with a random token means an attacker cannot start a simple DOS attack to your website by starting to block users. The link should not be usable more than once which makes it impossible to change the password again. The time out is necessary to restrict the attack window, having a link opens up a lot of possibilities for the attacker.

### Assignment <a href="#assignment" id="assignment"></a>

Try to reset the password of Tom ([tom@webgoat-cloud.org](mailto:tom@webgoat-cloud.org)) to your own choice and login as Tom with that password. Note: it is not possible to use OWASP ZAP for this lesson, also browsers might not work, command line tools like `curl` and the like will be more successful for this attack.

Tom always resets his password immediately after receiving the email with the link.

<figure><img src="../../../../../.gitbook/assets/password reset link.png" alt=""><figcaption></figcaption></figure>

**Solution**

* Hints: Try to send a password reset link to your own account at {user}@webgoat.org, you can read this e-mail in WebWolf. Look at the link, can you think how the server creates this link?. Tom clicks all the links he receives in his mailbox, you can use the landing page in WebWolf to get the reset link...The link points to localhost:8080/PasswordReset/.... can you change the host to localhost:9090?. Intercept the request and change the host header. For intercepting the request you have to use a proxy.&#x20;
* Troubleshooting: Check the [HTTP-Proxies Lesson](https://localhost:8080/WebGoat/start.mvc#lesson/HttpProxies.lesson) in the general category if you're unfamiliar with using proxies. **Important:** There seem to be problems when modifying the request header with [ZAP](https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project). We recommend to use [Burp](https://portswigger.net/) instead.
* Go ahead and send to WebWolf a request of forgot password.
* Analyze the response and the link created:&#x20;

<figure><img src="../../../../../.gitbook/assets/link created.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../../../.gitbook/assets/link created 2.png" alt=""><figcaption></figcaption></figure>

* This is the URL for the linkto reset the password: [http://localhost:8080/WebGoat/PasswordReset/reset/reset-password/b7517641-02ee-4e9f-8594-085b2e07a91d](http://localhost:8080/WebGoat/PasswordReset/reset/reset-password/b7517641-02ee-4e9f-8594-085b2e07a91d)
* Turn on the interceptor iun BurpSuite. Then submit the reset password request for Tom's emails.&#x20;
* Identify the POST request and send it to the repeater. Change the Host to localhost:9090 (WebWolf). Click send and examine the answer.&#x20;

<figure><img src="../../../../../.gitbook/assets/email not send to Tom.png" alt=""><figcaption></figcaption></figure>

* As you can see the password reset says that an email was sent to tom@webgoat-cloud.org, but we will intercept that message. For the WebGoat server the request has been sent to Tom.&#x20;
* Go into WebWolf and see the captured request (don't forget to turn off the Interceptor). You should see and url .../resetpassword. Copy the path, and go to the link that was provided in the initial password reset sent to WebWolf emails.&#x20;
* Paste the path in the url address, adding the host name: [http://localhost:8080/WebGoat](http://localhost:8080/WebGoat).&#x20;
* Enter the password in the session in WebGoat.&#x20;

