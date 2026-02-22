# A1:2021 | Insecure Direct Object Reference (2) | Cycubix Docs

#### Authenticate First, Abuse Authorization Later <a href="#authenticate_first_abuse_authorization_later" id="authenticate_first_abuse_authorization_later"></a>

Many access control issues are susceptible to attack from an authenticated-but-unauthorized user.&#x20;

So, let’s start by legitimately authenticating. Then, we will look for ways to bypass or abuse Authorization.

The id and password for the account in this case are 'tom' and 'cat' (It is an insecure app, right?).

After authenticating, proceed to the next screen.

<figure><img src="../../../../../.gitbook/assets/IDOR log in.png" alt=""><figcaption></figcaption></figure>
