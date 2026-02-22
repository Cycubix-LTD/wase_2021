# A3:2021 | SQL Injection Mitigation (10) | Cycubix Docs

### Input validation alone is not enough!! <a href="#input_validation_alone_is_not_enough" id="input_validation_alone_is_not_enough"></a>

So the last attempt to validate if the query did not contain any spaces failed, the development team went further into the direction of only performing input validation, can you find out where it went wrong this time?

Read about the lesson goal in SQL Injection Advanced (3).&#x20;

<figure><img src="../../../../../.gitbook/assets/imput validation correct.png" alt=""><figcaption></figcaption></figure>

#### Solution

* Hints: Are the same that the ones in the previous exercises.&#x20;
* In the previous exercise we subtitute spaces with comments.&#x20;
* From the hints we know that WebGoat uses [HiperSQL](https://hsqldb.org/) as a relational database system.&#x20;
* We can use a nested or obfuscated SQL keywords technique to bypass non-recursive validation.&#x20;
* The solution is to nest a SELECT in a Select by typing SELSELECTECT. We can also use frfromom instead of 'from', and HSQLDB comment instead of white space.&#x20;

The query would be: a';/**/seselectlect/**/\*/**/frfromom/**/user\_system\_data;--

<figure><img src="../../../../../.gitbook/assets/sqlmitigation 10.png" alt=""><figcaption></figcaption></figure>

