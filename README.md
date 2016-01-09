# kiwi-fetcher

Fetch new courses information running on IronWork.


# Add Credential to Project

Download iron.json and place it in the same directory as your worker

# Upload Your Worker

```
$ zip -r kiwi-fetcher.zip .
$ iron worker upload --zip kiwi-fetcher.zip --name kiwi_fetcher iron/node node index.js
```
