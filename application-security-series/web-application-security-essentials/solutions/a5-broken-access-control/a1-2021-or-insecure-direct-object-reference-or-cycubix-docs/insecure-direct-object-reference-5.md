# A1:2021 | Insecure Direct Object Reference (5) | Cycubix Docs

**Playing with the Patterns**

**1) View Another Profile**

View someone else’s profile by using the alternate path you already used to view your own profile. Use the 'View Profile' button and intercept/modify the request to view another profile. Alternatively, you may also just be able to use a manual GET request with your browser.

![](<../../../../../.gitbook/assets/Screenshot 2020-04-28 at 16.35.21.png>)

Before finding the solution, it is crucial to highlight that this lesson's solution is connected to the solutions for IDOR 1, 2, 3, and 4. If you are resuming this exercise after some time, please refresh the results of the previous lessons to ensure continuity.

* Perform actions within the IDOR lesson to generate HTTP requests. For example, viewing a user profile that includes a user ID in the URL.
* We can use ZAP, Burp or developer tools to capture these requests and note the structure of the URLs and parameters.
* We need to find the user ID. For this we can either send the request to the FUZZER (equal to the Intruder in Burp Suite), or predict the value through the browser.&#x20;

**a) Predicting the Value through the browser**

* Open a new tab within the automated controlled browser. Type the following path "[https://localhost:8080/WebGoat/IDOR/profile/2342384](https://localhost:8080/WebGoat/IDOR/profile/2342384)".&#x20;

You will see the following result

<figure><img src="../../../../../.gitbook/assets/profile selection.png" alt=""><figcaption></figcaption></figure>

* Now, try with different numbers. For example profile/2342385/2342386/2342387/2342388.&#x20;

<figure><img src="../../../../../.gitbook/assets/lesson completed IDOR true.png" alt=""><figcaption></figcaption></figure>

We can see that the correct profile corresponds to 2342388.&#x20;

**b) Predicting the value through ZAP Fuzzer**

* Go into the capture request corresponding to userID 2342384. Right click on it and select "Attack/Fuzz".&#x20;

<figure><img src="../../../../../.gitbook/assets/image (29).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../../../.gitbook/assets/fuzzer 1.png" alt=""><figcaption></figcaption></figure>

* Highlight the userID and then select "Add" to select the Payload. Click again Add and select the option Numberzz. You can now select the range of numbers you want to look at, for example for 2342380 to 2342390. You can generate a preview and then select Add.&#x20;
* Start the Fuzzer. Select the payload you want to look at and Open the Request Editor (equivalent to the Repeater on Burp Suite). Click on "SEND" and see the Response.&#x20;

<figure><img src="../../../../../.gitbook/assets/fuzzer result.png" alt=""><figcaption></figcaption></figure>

**c) Predicting the value with BURP.**&#x20;

* Turn on the interceptor in Burp Suite.&#x20;
* Press view profile in WebGoat.&#x20;
* See the request on BurpSuite HTTP History.&#x20;

<figure><img src="../../../../../.gitbook/assets/intercept profiles.png" alt=""><figcaption></figcaption></figure>

* Send the request to Intruder.&#x20;

Press "clear" on the top right button. Change the URL to "/WebGoat/IDOR/profile/userId", and add "userId" in the Payload. "userId" should be replaced with the one just queried.

<figure><img src="../../../../../.gitbook/assets/clear payloads and log USER ID.png" alt=""><figcaption></figcaption></figure>

* Open payloads tab and sumbit a range of numbers for "userId".&#x20;

<figure><img src="../../../../../.gitbook/assets/payloads numbers to find someone else ID.png" alt=""><figcaption></figcaption></figure>

* &#x20;Start the attack. Find the correct response for "UserId".&#x20;

<figure><img src="../../../../../.gitbook/assets/IDOR someone else ID found.png" alt=""><figcaption></figcaption></figure>

**2) Edit Another Profile**

* Older apps may follow different patterns, but RESTful apps (which is what’s going on here) often just change methods (and include a body or not) to perform different functions.
* Use that knowledge to take the same base request, change its method, path and body (payload) to modify another user’s (Buffalo Bill’s) profile. &#x20;
* Change the role to something lower (since higher privilege roles and users are ususally lower numbers). Also change the user’s color to 'red'.

**Solution with ZAP**

* Go to the section WEBGOAT/IDOR Edit another profile and hit the View Profile Button.&#x20;
* Find the request on ZAP and send it to the manual Request Editor.&#x20;

<figure><img src="../../../../../.gitbook/assets/edit profile IDOR.png" alt=""><figcaption></figcaption></figure>

* Change the Method from GET to PUT. Then place edit the userID placing 2342388.&#x20;
*   Change content type for the following:&#x20;

    ```
    application/json; charset=UTF-8
    ```
* In Content lenght put 47 and the following content:&#x20;

<figure><img src="../../../../../.gitbook/assets/edit profile IDOR 2.png" alt=""><figcaption></figcaption></figure>

* Click send and you should see the following Response:&#x20;

<figure><img src="../../../../../.gitbook/assets/Response EDIT Profile IDOR 4.png" alt=""><figcaption></figcaption></figure>

**Solution with BURP**

* The default request here won't work at all, so you will need to manually craft the request or tamper it with a proxy. To edit the other user's profile, you will use the same Url you did to view the other user's profile.
* In order to change the request, send to the Repeater Buffalo Bill's payload. Then proceed to change the request manually. Change GET for PUT and content type change it to "application/json".&#x20;

<figure><img src="../../../../../.gitbook/assets/changing profile.png" alt=""><figcaption></figcaption></figure>

In the last line, change the request by adding the following parameters "role: 0, color: red, size: large, name: Buffalo Bill, userId: 234238".&#x20;

Why did we change GET for PUT? Which are the RESTful methods used for "update" or "edit"?:&#x20;

* **GET:** Retrieve a resource or a collection of resources.
* **POST:** Create a new resource.
* **PUT:** Update an existing resource or create a resource if it does not exist.
* **DELETE:** Remove a resource.

