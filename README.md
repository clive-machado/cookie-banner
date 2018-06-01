# Cookie Banner 

<hr>

<h3>1. How to quickly Install ?</h3>

<p>- Insert the following Link tag in your main .html page head section.</p>

```html
<link rel="stylesheet" href="cookie-banner.css">
```

<p>- Insert the following script tag in your main .html page just above the closing body tag.</p>

```html
<script src="cookie-banner.js"></script>
```
<p>- You can call <code>CookieBanner.init()</code> function via attaching a script in the your main .html page.</p>

```html
<script>
  CookieBanner.init({}, function(onButtonClickResponse){
    console.log("Updated cookie value : ", onButtonClickResponse);
  });
</script>
```

<p>- You should now be able to see the cookie banner when you load up your page with all the default config it already uses.</p>

<hr>

<h3>2. How to initialize Cookie Banner ?</h3>

<p>- Use the following provided function to build the <b>Banner DOM</b> and <b>Modal DOM</b> </p>

```
CookieBanner.init({}, function(onButtonClickResponse){
  console.log("Updated cookie value : ", onButtonClickResponse);
});
```

<p>- The <code>init({}, callback)</code> function takes two arguments <code>settings</code> and <code>callback</code>.</p>

<p>- The second argumet is a simple <code>callback function</code> which will be triggered after the user either clicks on button action <code>accept/reject</code>.</p>
<p>- The callback response will contain the updated cookie value preference for the user.<p>

```
function(onButtonClickResponse){
  console.log("Updated cookie value : ", onButtonClickResponse);
}
```
<p>- Expected output :<p>

```
Updated cookie value : { "action" : "accept/reject", "user_consent"  : {} }
```

<p>- The first argument, <code>settings</code>, expects <code>typeof</code> object. If settings result in either <code>null/undefined/empty</code> the Cookie Banner will be using the default config.</p>

<p>- Following is the overall schema for settings</p>

```
{
  "content"       : [], /*Array of Objects*/
  "buton"         : [], /*Array of Objects*/
   "cookie_name"  : {
     "name"     : "CookieConsent", /* *Required Field */
     "expires"  : 2 /* Number In Days (Example : 1, 31, 365...) *Required Field */
   }
}
```
<p>- Any Required Fileds if either <code>null/undefined/empty</code> the particular object block will be replaced by the default config.<p>

<hr>

<h3>3. What is the default Cookie Banner config ?</h3>

<p>- Here is the default config for content</p>

```
{
    "content"      : [{
      "type"        : "banner",
      "id"          : "banner-text-content",
      "class"       : "cbc-text-content",
      "template"    : "<p>We use cookies to improve your experience and analyze site usage. Read <a href='#' target='_blank'>Cookie Policy<a>.<p>"
    },{   
      "type"        : "tab",
      "id"          : "modal-tab-privacy", 
      "class"       : "csm-tab-privacy",
      "position"    : 1,
      "checkbox"    : false,
      "title"       : "Your Privacy", 
      "template"    : "<p>A privacy policy is a statement or a legal document (in privacy law) that discloses some or all of the ways a party gathers, uses, discloses, and manages a customer or client's data. It fulfills a legal requirement to protect a customer or client's privacy. Personal information can be anything that can be used to identify an individual, not limited to the person's name, address, date of birth, marital status, contact information, ID issue and expiry date, financial records, credit information, medical history, where one travels, and intentions to acquire goods and services.</p>",
      "enable"      : true,
      "show_cookies": false,
      "cookies"     : [{
        "key"     : "dummy",
        "name"    : "dummy"
      }]
  },{   
      "type"        : "tab",
      "id"          : "modal-tab-strict", 
      "class"       : "csm-tab-strict",
      "position"    : 2, 
      "checkbox"    : true, 
      "title"       : "Strictly Necessary Cookies",
      "template"    : "<p>These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. Without these cookies, some parts of our site or the service being requested will be impossible to provide.</p>",
      "enable"      : true,
      "show_cookies": true,
      "cookies"     : [{
        "key"     : "dummy1",
        "name"    : "dummy1"
      },{
        "key"     : "dummy2",
        "name"    : "dummy2"
      },{
        "key"     : "dummy3",
        "name"    : "dummy3"
      }]
  },{   
      "type"        : "tab",
      "id"          : "modal-tab-performance", 
      "class"       : "csm-tab-performance",
      "position"    : 3, 
      "checkbox"    : true, 
      "title"       : "Performance & Analytics Cookies", 
      "template"    : "<p>These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.</p><p>All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.</p>",
      "enable"      : true,
      "show_cookies": true,
      "cookies"     : [{
        "key"     : "dummy1",
        "name"    : "dummy1"
      },{
        "key"     : "dummy2",
        "name"    : "dummy2"
      }]
  },{   
      "type"        : "tab",
      "id"          : "modal-tab-personalisation",
      "class"       : "csm-tab-personalisation",
      "position"    : 4,
      "checkbox"    : true, 
      "title"       : "Personalization Cookies", 
      "template"    : "<p>These cookies enable the website to provide enhanced functionality and personalization, including remembering user choices, preferred language or location. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.</p>",
      "enable"      : true,
      "show_cookies": true,
      "cookies"     : [{
        "key"     : "dummy1",
        "name"    : "dummy1"
      }]
  },{   
      "type"        : "tab",
      "id"          : "modal-tab-targetting",
      "class"       : "csm-tab-targetting",
      "position"    : 5,
      "checkbox"    : true,  
      "title"       : "Targeting Cookies", 
      "template"    : "<p>These cookies may be set by us or our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisings on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.</p>",
      "enable"      : true, 
      "show_cookies": true,
      "cookies"     : [{
        "key"     : "dummy1",
        "name"    : "dummy1"
      },{
        "key"     : "dummy2",
        "name"    : "dummy2"
      },{
        "key"     : "dummy3",
        "name"    : "dummy3"
      },{
        "key"     : "dummy4",
        "name"    : "dummy4"
      },{
        "key"     : "dummy5",
        "name"    : "dummy5"
      }]
  }]
}
```

<p>- The following is the default config for button </p>

```
{
  "button"      : [{
      "type"        : "banner",
      "title"       : "Accept All Cookies",
      "action"      : "accept",     
      "id"          : "banner-button-accept",
      "class"       : "cbc-button-accept",
      "enable"      : true
    },{
      "type"        : "banner",
      "title"       : "X",
      "action"      : "reject",     
      "id"          : "banner-button-reject",
      "class"       : "cbc-button-reject",
      "enable"      : true
    },{
      "type"        : "banner",
      "title"       : "Cookie Settings",
      "action"      : "settings",     
      "id"          : "banner-button-settings",
      "class"       : "cbc-button-settings",
      "enable"      : true
    },{
      "type"        : "tab",
      "title"       : "Save Settings",
      "action"      : "accept",     
      "id"          : "modal-button-accept",
      "class"       : "csm-button-accept",
      "enable"      : true
  }]
}
```
<p>- The following is default cconfig for cookie name</p>

```
{
  "cookie_name"  : {
    "name"    : "CookieBannerConsent",
    "expires" : 1,
  }
}
```

<hr>

<h3>4. How to set Custom button ?</h3>

```
CookieBanner.setButton({
  "type"        : "tab/banner", //Required Field
  "title"       : "",
  "action"      : "accept/reject/settings", //Required Field  
  "id"          : "",
  "class"       : "",
  "enable"      : boolean
});
```

<p>- Any Required Fileds if either <code>null/undefined/empty</code> the particular object block will be replaced by the default config.<p>

<p>- This function will be updating the previous button with same<code> type</code> and <code>action</code>.</p>

<hr>

<h3>5. How to Set Custom cookie name and expiry?</h3>

```
CookieBanner.setCookieName({
  "name"    : "", //Required Field
  "expires" : number /* Number In Days (Example : 1, 31, 365...) *Required Field */
});
```
<p>- Any Required Fileds if either <code>null/undefined/empty</code> the particular object block will be replaced by the default config.<p>

<hr>

<h3>6. How to provide custom Content ?</h3>

```
CookieBanner.setContent({
  "type"        : "tab/banner", //Required Field
  "id"          : "banner-text-content/modal-tab-privacy/modal-tab-strict/modal-tab-performance/modal-tab-personalisation/modal-tab-targeting", //unique identities //Required Field
  "class"       : "",
  "position"    : number, // only tab support
  "checkbox"    : boolean, // only tab support 
  "title"       : "", // only tab support
  "template"    : "", //Required Field
  "enable"      : boolean, // only tab support
  "show_cookies": boolean, // only tab support
  "cookies"     : [{
    "key"     : "", //Required Field
    "name"    : ""  //Required Field
  }] // only tab support
});
```
<p>- Any required fileds if either <code>null/undefined/empty</code> the particular object block will be replaced by the default config.<p>

<p>- Any "Only Tab support" fields need not be added if <code>type</code> is <code>banner</code>.<p>

<p>- The cookies array is displayed right below the content, the cookies array cannot be <code>null/undefined/empty</code> either set it <code>false</code> by setting key <code>show_cookies</code> to <code>false</code>.</p>


