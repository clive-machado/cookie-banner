# Cookie Banner 

<h3>1. How to quickly Install ?</h3>

<p>- Insert the following Link tag in your main .html page head section.</p>

```html
<link rel="stylesheet" href="cookie-banner.css">
```

<p>- Insert the following script tag in your main .html page just above the closing body tag.</p>

```html
<script src="cookie-banner.js"></script>
```
<p>- You can call CookieBanner.init() function via attaching a script in the your main .html page.</p>

```html
<script>
  CookieBanner.init({}, function(onButtonClickResponse){
    console.log("Updated cookie value : ", onButtonClickResponse);
  });
</script>
```

<p>- You should now be able to see the cookie banner when you load up your page with all the default config it already has.</p>
