
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
  "class"       : "cbc-button-settings btn",
  "enable"      : true
});
CookieBanner.setButton({
  "type"        : "banner",
  "title"       : "<span><i class='fa fa-check' aria-hidden='true'></i><span> Accept All Cookies</span></span>",
  "action"      : "accept",
  "id"          : "banner-button-accept",
  "class"       : "cbc-button-accept btn",
  "enable"      : true
});
CookieBanner.setButton({
  "type"        : "banner",
  "title"       : "X",
  "action"      : "reject",     
  "id"          : "banner-button-reject",
  "class"       : "cbc-button-reject btn",
  "enable"      : true
});
CookieBanner.setButton({
  "type"        : "tab",
  "title"       : "<span><i class='fa fa-check' aria-hidden='true'></i><span> Save Settings</span></span>",
  "action"      : "accept",
  "id"          : "modal-button-accept",
  "class"       : "csm-button-accept btn",
  "enable"      : true
});

/** Sets Custom Banner Content */
CookieBanner.setContent({
  "type"        : "banner",
  "id"          : "banner-text-content",
  "class"       : "cbc-text-content",
  "template"    : "<p>We use cookies to improve your experience and analyze site usage. Read <a href='#' target='_blank'> Cookie Policy</a>.</p>"
});

CookieBanner.init({
  "content" : [{
      "type"        : "tab",
      "id"          : "modal-tab-privacy", 
      "class"       : "csm-tab-privacy",
      "position"    : 1,
      "checkbox"    : false,
      "title"       : "<span><i class='fa fa-info-circle' aria-hidden='true'></i></i><span> Your Privacy</span>", 
      "template"    : "<h3 id='modal-tab-privacy-title'>Your Privacy</h3><p class='csm-privacy-para'> When you visit any web site, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalised web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.</p>",
      "enable"      : true,
      "show_cookies": false,
      "cookies"     : [{
        "key"     : "validate",
        "name"    : "validate"
      }]
    },{
        "type"        : "tab",
        "id"          : "modal-tab-strict", 
        "class"       : "csm-tab-strict",
        "position"    : 2,
        "checkbox"    : false,
        "title"       : "Strictly Necessary Cookies",
        "template"    : "<h3 id='modal-tab-strict-title'>Strictly Necessary Cookies</h3><p class='csm-strict-para'> These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. Without these cookies, some parts of our site or the service being requested will be impossible to provide.</p>",
        "enable"      : true,
        "show_cookies": true,
        "cookies"     : [{
          "key"     : "BackendCookieConsent",
          "name"    : "Backend Cookie Consent"
        },{
          "key"     : "Authtoken",
          "name"    : "Authentication"
        }]
    },{
      "type"        : "tab",
      "id"          : "modal-tab-performance", 
      "class"       : "csm-tab-performance",
      "position"    : 3,
      "checkbox"    : true,
      "title"       : "Performance & Analytics Cookies",
      "template"    : "<h3 id='modal-tab-performance-title'>Performance & Analytics Cookies</h3><p class='csm-performance-para'> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.</p><p>All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.</p>",
      "enable"      : true,
      "show_cookies": true,
      "cookies"     : [{
        "key"     : "_ga",
        "name"    : "Google Analytics"
      },{
        "key"     : "_gid",
        "name"    : "Google Identification"
      }]
  },{
    "type"        : "tab",
    "id"          : "modal-tab-personalisation", 
    "class"       : "csm-tab-personalisation",
    "position"    : 4,
    "checkbox"    : false,
    "title"       : "Personalization Cookies",
    "template"    : "<h3 id='modal-tab-personalisation-title'>Personalization Cookies</h3><p class='csm-personalisation-para'> These cookies enable the website to provide enhanced functionality and personalization, including remembering user choices, preferred language or location. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.</p>",
    "enable"      : true,
    "show_cookies": false,
    "cookies"     : [{
      "key"     : "_ga",
      "name"    : "Google Analytics"
    },{
      "key"     : "_gid",
      "name"    : "Google Identification"
    }]
  },{
    "type"        : "tab",
    "id"          : "modal-tab-targeting", 
    "class"       : "csm-tab-targeting",
    "position"    : 5,
    "checkbox"    : false,
    "title"       : "Targeting Cookies",
    "template"    : "<h3 id='modal-tab-targeting-title'>Targeting Cookies</h3><p class='csm-targeting-para'> These cookies may be set by us or our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisings on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.</p>",
    "enable"      : true,
    "show_cookies": false,
    "cookies"     : [{
      "key"     : "_ga",
      "name"    : "Google Analytics"
    },{
      "key"     : "_gid",
      "name"    : "Google Identification"
    }]
  }]
}, function(data){
  console.log("On button Click :", data);
});