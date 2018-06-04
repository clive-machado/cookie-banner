/**
 * You can uncomment the functions below to look at how the library works.
 */

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

/** Sets Custom Cookie Name */
CookieBanner.setCookieName({  
  "name"    : "BackendCookieConsent",
  "expires" : 2,
});

/* Sets Custom Button Name */
CookieBanner.setButton({
  "type"        : "banner",
  "title"       : "<span><i class='fa fa-angle-right' aria-hidden='true'></i><span> Cookie Settings</span></span>",
  "action"      : "settings",
  "id"          : "banner-button-settings",
  "class"       : "cbc-button-settings btn-banner",
  "enable"      : false
});
CookieBanner.setButton({
  "type"        : "banner",
  "title"       : "<span><i class='fa fa-check' aria-hidden='true'></i><span> Accept All Cookies</span></span>",
  "action"      : "accept",
  "id"          : "banner-button-accept",
  "class"       : "cbc-button-accept btn-banner",
  "enable"      : true
});

/** Sets Custom Cookie Name */
CookieBanner.setContent({
  "type"        : "banner",
  "id"          : "banner-text-content",
  "class"       : "cbc-text-content",
  "template"    : "<p>Built.io uses cookies to improve your experience and analyze site usage. Read <a href='https://www.built.io/privacy-policy' target='_blank'> Cookie Policy</a>.</p>",
});

CookieBanner.init({}, function(data){
  console.log("On button click :", data);
});