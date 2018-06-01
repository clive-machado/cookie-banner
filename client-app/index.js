// CookieBanner.init({
//   "content" :[{
//     "type"        : "banner",
//     "id"          : "banner-text-content",
//     "class"       : "cbc-text-content",
//     "template"    : "<p>Changed - We use cookies to improve your experience and analyze site usage. Read <a href='#' target='_blank'>Cookie Policy<a>.<p>"
//   },{   
//     "type"        : "tab",
//     "id"          : "modal-tab-privacy", 
//     "class"       : "csm-tab-privacy",
//     "position"    : 1,
//     "checkbox"    : false,
//     "title"       : "Your Privacy", 
//     "template"    : "<p> Changed - When you visit any web site, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalised web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.</p>",
//     "enable"      : true,
//     "show_cookies": false,
//     "cookies"     : [{
//       "key"     : "_authExample",
//       "name"    : "This is an Example Cookie"
//     }]
// },{   
//     "type"        : "tab",
//     "id"          : "modal-tab-strict", 
//     "class"       : "csm-tab-strict",
//     "position"    : 2, 
//     "checkbox"    : false,
//     "title"       : "Strictly Necessary Cookies",
//     "template"    : "<p>Changed - These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. Without these cookies, some parts of our site or the service being requested will be impossible to provide.</p>",
//     "enable"      : true,
//     "show_cookies": true,    
//     "cookies"     : [{
//       "key"     : "_authExample2",
//       "name"    : "This is an Example2 Cookie"
//     },{
//       "key"     : "_authExample3",
//       "name"    : "This is an Example3 Cookie"
//     },{
//       "key"     : "_authExample4",
//       "name"    : "This is an Example4 Cookie"
//     },{
//       "key"     : "_authExample5",
//       "name"    : "This is an Example5 Cookie"
//     }] 
// },{   
//     "type"        : "tab",
//     "id"          : "modal-tab-performance", 
//     "class"       : "csm-tab-performance",
//     "position"    : 3, 
//     "checkbox"    : true, 
//     "title"       : "Performance & Analytics Cookies", 
//     "template"    : "<p>Changed - These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.</p><p>All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.</p>",
//     "enable"      : true,
//     "show-cookies": true,
//     "cookies"     : [{
//       "key"     : "_authExample",
//       "name"    : "This is an Example Cookie"
//     }]
// },{   
//     "type"        : "tab",
//     "id"          : "modal-tab-personalisation",
//     "class"       : "csm-tab-personalisation",
//     "position"    : 4,
//     "checkbox"    : true, 
//     "title"       : "Personalization Cookies", 
//     "template"    : "<p>Changed - These cookies enable the website to provide enhanced functionality and personalization, including remembering user choices, preferred language or location. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.</p>",
//     "enable"      : true,
//     "show_cookies": true,
//     "cookies"     : [{
//       "key"     : "_authExample",
//       "name"    : "This is an Example Cookie"
//     },{
//       "key"     : "_authExample2",
//       "name"    : "This is an Example2 Cookie"
//     }]
// },{
//     "type"        : "tab",
//     "id"          : "modal-tab-targeting",
//     "class"       : "csm-tab-targeting",
//     "position"    : 5,
//     "checkbox"    : true,  
//     "title"       : "Targeting Cookies", 
//     "template"    : "<p>Changed - These cookies may be set by us or our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisings on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.</p>",
//     "enable"      : true, 
//     "show_cookies": true,
//     "cookies"     : [{
//       "key"     : "_authExample",
//       "name"    : "This is an Example Cookie"
//     },{
//       "key"     : "_authExample2",
//       "name"    : "This is an Example2 Cookie"
//     },{
//       "key"     : "_authExample3",
//       "name"    : "This is an Example3 Cookie"
//     }]
// }],
//     "button"      : [{
//       "type"        : "banner",
//       "title"       : "Changed - Accept All Cookies",
//       "action"      : "accept",     
//       "id"          : "banner-button-accept",
//       "class"       : "cbc-button-accept",
//       "enable"      : true
//     },{
//       "type"        : "banner",
//       "title"       : "X",
//       "action"      : "reject",     
//       "id"          : "banner-button-reject",
//       "class"       : "cbc-button-reject",
//       "enable"      : true
//     },{
//       "type"        : "banner",
//       "title"       : "Changed - Cookie Settings",
//       "action"      : "settings",     
//       "id"          : "banner-button-settings",
//       "class"       : "cbc-button-settings",
//       "enable"      : true
//     },{
//       "type"        : "tab",
//       "title"       : "Changed - Save Settings",
//       "action"      : "accept",     
//       "id"          : "modal-button-accept",
//       "class"       : "csm-button-accept",
//       "enable"      : true
//     }],
//     "cookie_name"  : {
//       "name"    : "Changed - CookieBannerConsent",
//       "expires" : 365,
//     },
//   }, function(data){
//     console.log("data", data);
// });


console.log("cookieValue", cookieValue );


CookieBanner.setCookieName({  
  "name"    : "updated -cookies",
  "expires" : 7, 
});

CookieBanner.setButton({
  "type"        : "banner",
  "title"       : "updated Accept All button",
  "action"      : "accept",   
  "id"          : "someID",
  "class"       : "",
  "enable"      : true
});

CookieBanner.setButton({
  "type"        : "tab",
  "title"       : "updated Accept All button",
  "action"      : "accept",   
  "id"          : "someID-taby",
  "class"       : "",
  "enable"      : true
});

// CookieBanner.setContent({
//   "type"        : "tab",
//   "id"          : "modal-tab-privacy", //unique identity
//   "class"       : "",
//   "position"    : 1, // only tab support
//   "checkbox"    : true, // only tab support 
//   "title"       : "updated - Strict Cookies", // only tab support
//   "template"    : "<p>These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. Without these cookies, some parts of our site or the service being requested will be impossible to provide.</p>",
//   "enable"      : true, //only tab support
//   "show_cookies": true, //only tab support
//   "cookies"     : [{
//     "key"     : "sad",
//     "name"    : "asfa"
//   },{
//     "key"     : "dum",
//     "name"    : "rimda"
//   },{
//     "key"     : "kum",
//     "name"    : "safvfvfsvsd"
//   }] // only tab support
// });

// CookieBanner.init({}, function(data){
//   console.log("cal back", data);
// });

// CookieBanner.setContent({
//   "type"        : "banner",
//   "id"          : "banner-text-content", //unique identity
//   "class"       : "cbc-text-content",
//   "template"    : "<p>We use cookies to personalize content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners in accordance with our Privacy Statement. You can manage your preferences in Cookie Settings. By using this website, you agree to the use of cookies.</p>",
// });