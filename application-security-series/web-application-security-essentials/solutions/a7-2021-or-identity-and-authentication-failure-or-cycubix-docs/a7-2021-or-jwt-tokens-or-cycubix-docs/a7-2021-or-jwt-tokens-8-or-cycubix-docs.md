# A7: 2021 | JWT Tokens (8) | Cycubix Docs

### Code review <a href="#code_review" id="code_review"></a>

Now let’s look at a code review and try to think on an attack with the `alg: none`, so we use the following token:

```
eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlciI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.
```

which after decoding becomes:

```
{
  "alg" : "none",
  "typ" : "JWT"
},
{
  "admin" : true,
  "iat" : 1516239022,
  "sub" : "1234567890",
  "user" : "John Doe"
}
```

```
try {
   Jwt jwt = Jwts.parser().setSigningKey(JWT_PASSWORD).parseClaimsJws(accessToken);
   Claims claims = (Claims) jwt.getBody();
   String user = (String) claims.get("user");
   boolean isAdmin = Boolean.valueOf((String) claims.get("admin"));
   if (isAdmin) {
     removeAllUsers();
   } else {
     log.error("You are not an admin user");
   }
} catch (JwtException e) {
  throw new InvalidTokenException(e);
}
```

<pre><code><strong>try {
</strong>   Jwt jwt = Jwts.parser().setSigningKey(JWT_PASSWORD).parse(accessToken);
   Claims claims = (Claims) jwt.getBody();
   String user = (String) claims.get("user");
   boolean isAdmin = Boolean.valueOf((String) claims.get("admin"));
   if (isAdmin) {
     removeAllUsers();
   } else {
     log.error("You are not an admin user");
   }
} catch (JwtException e) {
  throw new InvalidTokenException(e);
}
</code></pre>

Can you spot the weakness?

_What is the result of the first code snippet?_&#x20;

**Solution 1: Throws an exception in line 12.**&#x20;

Solution 2: Invoke the method removeALLUSERS at line 7.&#x20;

Solution 3: logs and error in line 9.&#x20;

_What is the result of the second code snippet?_

Solution 1: Throws and exception in line 12.&#x20;

**Solution 2: Invoke the method removeALLUSERS at line 7.**&#x20;

Solution 3: logs and error in line 9.

