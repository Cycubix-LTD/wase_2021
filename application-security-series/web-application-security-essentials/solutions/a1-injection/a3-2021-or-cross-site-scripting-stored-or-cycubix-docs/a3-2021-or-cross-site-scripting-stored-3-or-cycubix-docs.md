# A3:2021 | Cross Site Scripting Stored (3) | Cycubix Docs

**See the comments below.**

Add a comment with a JavaScript payload. Again …​ you want to call the _webgoat.customjs.phoneHome_ function.

As an attacker (offensive security), keep in mind that most apps will not have such a straightforwardly named compromise. Also, you may have to find a way to load your JavaScript dynamically to achieve the goal of extracting data fully.

<figure><img src="../../../../../.gitbook/assets/john doe add comments.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../../../.gitbook/assets/webgoat john doe.png" alt=""><figcaption></figcaption></figure>

**Solution**

* Following the instructions we need to add a comment with a JavaScript payload, calling the  _webgoat.customjs.phoneHome._&#x20;
* Let's go ahead and type the following script on comments:&#x20;

_\<script>webgoat.customjs.phoneHome()\</script>_

* Your comment should be posted like this:

<figure><img src="../../../../../.gitbook/assets/comments script.png" alt=""><figcaption></figcaption></figure>

* Open the developer tools and go to console. You should see a message like this:&#x20;

phone home said {"lessonCompleted":true,"feedback":"Congratulations. You have successfully completed the assignment.","output":"phoneHome Response is -2007049551","assignment":"DOMCrossSiteScripting","attemptWasMade":true}

Notice that in the WebGoat page it clears that "that each subsequent call to the _phoneHome_ method will change that value. You may need to ensure you have the most recent one.".&#x20;

* Once you have your value submit it in the answer box:&#x20;

<figure><img src="../../../../../.gitbook/assets/xss stored ok.png" alt=""><figcaption></figcaption></figure>

**Troubleshooting**

* If you get an error "Failed to load resource: the server responded with a status of 404 (Not Found)", there might be a typing mistake in the script submitted on comnents.&#x20;
* Do not forget any symbol or Upper Case, according to the path provided in the exercise.&#x20;
