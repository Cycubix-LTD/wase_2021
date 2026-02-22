# A9:2021 | Logging Security (4) | Cycubix Docs

#### Let’s try <a href="#lets_try" id="lets_try"></a>

* Some servers provide Administrator credentials at the boot-up of the server.
* The goal of this challenge is to find the secret in the application log of the WebGoat server to login as the Admin user.
* Note that we tried to "protect" it. Can you decode it?

<figure><img src="../../../../.gitbook/assets/decoding log in.png" alt=""><figcaption></figcaption></figure>

**Solution**

* Click on submit and open the developer tools. You will be able to identify the post request under the session "log-bleeding".&#x20;
* Now, open the terminal of your docker container, where you started your WebGoat session and look for the password for admin.&#x20;

<figure><img src="../../../../.gitbook/assets/log in bleeding.png" alt=""><figcaption></figcaption></figure>

* To to Burp or Zap decoder and decode the key into base64.&#x20;

<figure><img src="../../../../.gitbook/assets/base64 decode.png" alt=""><figcaption></figcaption></figure>

* Insert in the lesson the decoded key as a password and the user Admin (the response is case sensitive).&#x20;

<figure><img src="../../../../.gitbook/assets/base64 decode (1).png" alt=""><figcaption></figcaption></figure>
