# General | HTTP Proxies (4) | Cycubix Docs

## Filter Requests

We will filter requests on the History Panel.&#x20;

In the main ZAP window, click on Filter; see the image below.

<figure><img src="../../../../.gitbook/assets/http proxies part 4.png" alt=""><figcaption></figcaption></figure>

Then in the `URL Inc Regex` box type:&#x20;

```
.*WebGoat.*
```

And in the `URL Exc Regex` box type:

```
.*lesson.*.mvc
```

Click 'Apply to close the window, and ZAP will now no longer show internal WebGoat requests.
