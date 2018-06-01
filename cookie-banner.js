'use strict';

/* Exposed Variable */
var cookieValue;

var CookieBanner = (function(){

  /* Private Variables */
  var btnActions        = ['accept', 'reject', 'settings'];
  var configTypeValues  = ['banner', 'tab'];
  var _defaultConfig = {
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
      "checkbox"    : true,
      "title"       : "Your Privacy", 
      "template"    : "<p>When you visit any web site, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalised web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.</p>",
      "enable"      : true,
      "show_cookies": false,
      "cookies"     : [{
        "key"     : "_authExample",
        "name"    : "This is an Example Cookie"
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
        "key"     : "_authExample",
        "name"    : "This is an Example Cookie"
      }] 
  },{   
      "type"        : "tab",
      "id"          : "modal-tab-performance", 
      "class"       : "csm-tab-performance",
      "position"    : 3, 
      "checkbox"    : true, 
      "title"       : "Performance & Analytics Cookies", 
      "template"    : "<p>These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.</p></br><p>All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.</p>",
      "enable"      : true,
      "show_cookies": true,
      "cookies"     : [{
        "key"     : "_authExample",
        "name"    : "This is an Example Cookie"
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
        "key"     : "_authExample",
        "name"    : "This is an Example Cookie"
      }]
  },{   
      "type"        : "tab",
      "id"          : "modal-tab-targeting",
      "class"       : "csm-tab-targeting",
      "position"    : 5,
      "checkbox"    : true,  
      "title"       : "Targeting Cookies", 
      "template"    : "<p>These cookies may be set by us or our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisings on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.</p>",
      "enable"      : true, 
      "show-cookies": true,
      "cookies"     : [{
        "key"     : "_authExample",
        "name"    : "This is an Example Cookie"
      }]
  }],
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
    }],
    "cookie_name"  : {
      "name"    : "CookieBannerConsent",
      "expires" : 1,
    },
  }; 
  var userConsent  = {};
  var mergedConfig      = JSON.parse(JSON.stringify(_defaultConfig));

  /* User provided Callback */
  var _userCallback;
  
  /* Private utility Functions */
  var _util = {
    /* Dear Maintainer, please arrange functions in alphabetical order makes it easier to find. */
    
    // G //
    getCookieValueByName :function(name){
      var cookieName = name + "=";
      var cookieArray = decodeURIComponent(document.cookie).split(';');
      for(var i = 0; i <cookieArray.length; i++) {
        var cookieKey = cookieArray[i];
        while (cookieKey.charAt(0) == ' ') {
          cookieKey = cookieKey.substring(1);
        }
        if (cookieKey.indexOf(cookieName) == 0) {
          return cookieKey.split('=')[1];
        }
      }
      return "";
    },
    // I //
    isArrayEmpty  :function(data){
      return data && Array.isArray(data) && data.length ? false : true
    },
    insert  : {
      /// B ///
      btnInConfig             :function(data){
        mergedConfig.button.map(function(btnObject, index){
          if(btnObject.action === data.action && btnObject.type === data.type){
            mergedConfig.button.splice(index, 1, Object.assign(btnObject, data));
          }
        });
      },
      /// C ///
      contentInConfig         :function(data){
        mergedConfig.content.map(function(contentObject, index){
          if(contentObject.id === data.id && contentObject.type === data.type){
            mergedConfig.content.splice(index, 1, Object.assign(contentObject, data));
          };
        });
      }
    },
    // T // 
    toggleBanner : function(mergedConfig, btnAction){
      if(_util.validate.toHideBanner(mergedConfig.cookie_name.name) || btnAction === 'reject'){
        document.getElementById("cookie-banner-container").style.display = "none";
      }else{
        document.getElementById("cookie-banner-container").style.display = "block";        
      };
    },
    // V //
    validate : {
      /// B ///
      buttonConfig                :function(resOptions){
        return resOptions && !_util.isArrayEmpty(resOptions.button) ? true : false;
      },
      btnActionValue(resOptions){
        return btnActions.indexOf(resOptions.action) > -1 ? true : false;
      },
      /// C ///
      contentConfig               :function(resOptions){
        return resOptions && !_util.isArrayEmpty(resOptions.content) ? true : false;
      },
      cookieConfig                :function(resOptions){
        return resOptions && resOptions.cookie_name && resOptions.cookie_name.name && resOptions.cookie_name.expires ? true : false;
      },
      configTypeValue             :function(resOptions){
        return configTypeValues.indexOf(resOptions.type) > -1 ? true : false;
      },
      contentByType               :function(resOptions){
        return resOptions.type === 'banner' ? resOptions.id && resOptions.template ? true : false : resOptions.id && resOptions.template && resOptions.position && resOptions.title && typeof resOptions.enable != 'undefined' && resOptions.cookies && this.contentByCookies(resOptions) && this.forContentCookiesConfig(resOptions) ? true : false;
      },
      contentByCookies            :function(resOptions){
        return resOptions && !_util.isArrayEmpty(resOptions.cookies) ? true : false;
      },
      /// F ///
      forEachBtnConfig            :function(resOptions){
        return Object.keys(resOptions).length && resOptions.action && resOptions.type && this.btnActionValue(resOptions) && this.configTypeValue(resOptions) ? true : false;
      },
      forEachContentConfig        :function(resOptions){
        return Object.keys(resOptions).length && resOptions.type && this.configTypeValue(resOptions) && this.contentByType(resOptions) ? true : false;
      },
      forEachContentCookiesConfig :function(resOptions){
        return Object.keys(resOptions).length && resOptions.key && resOptions.name ? true : false;        
      },
      forContentConfig            :function(resOptions){
        return resOptions.content.every(function(contentObject){
          return _util.validate.forEachContentConfig(contentObject);
        });
      },
      forButtonConfig             :function(resOptions){
        return resOptions.button.every(function(buttonObject){
          return _util.validate.forEachBtnConfig(buttonObject);
        });
      },
      forContentCookiesConfig     :function(resOptions){
        return resOptions.cookies.every(function(cookieObject){
          return _util.validate.forEachContentCookiesConfig(cookieObject);
        });
      },
      /// I ///
      ifCookieNameSet             :function(resOptions){
        return _util.getCookieValueByName(resOptions) ? true :false;
      },
      /// S ///
      settingsConfig              :function(resOptions){
        return this.buttonConfig(resOptions) && this.contentConfig(resOptions) && this.cookieConfig(resOptions) && this.forContentConfig(resOptions) && this.forButtonConfig(resOptions) ? true : false;
      },
      /// T ///
      toHideBanner :function(cookieName){
        return _util.getCookieValueByName(cookieName) ? JSON.parse(_util.getCookieValueByName(cookieName)).action === 'accept' ? true : false : false;
      }
    },
  };

  /* exposed proxy functions */
  var _proxy = {
    /* Dear Maintainer, please arrange functions in alphabetical order makes it easier to find. */
    
    // D //
    DOMevent              :{
      buttons :function(btnSettings){
        _clickAction.saveConsent(btnSettings);
      }
    },
    // U //
    updateCookieName          :function(resOptions){
      var newResOptions = { "cookie_name" : resOptions };
      resOptions && Object.keys(resOptions).length && _util.validate.cookieConfig(newResOptions) && Object.assign(mergedConfig, newResOptions);
    },
    updateEachButtonType      :function(resOptions){
      var newResOptions = { "new_button_object" : resOptions, "merged_config" : mergedConfig };
      if(newResOptions.new_button_object && _util.validate.forEachBtnConfig(newResOptions.new_button_object)){
        _util.insert.btnInConfig(resOptions);
      };
    },
    updateEachContentType     :function(resOptions){
      var newResOptions = { "new_content_object" : resOptions, "merged_config" : mergedConfig };
      if(newResOptions.new_content_object && _util.validate.forEachContentConfig(newResOptions.new_content_object)){
        _util.insert.contentInConfig(resOptions);
      };
    },
    updateButtonType          :function(resOptions){
      resOptions.map(function(buttonObject){
        _proxy.updateEachButtonType(buttonObject);
      });
    },
    updateContentType         :function(resOptions){
      resOptions.map(function(contentObject){
        _proxy.updateEachContentType(contentObject);
      });
    },
    updateSettingsConfig      :function(resOptions){
      var newResOptions = { "new_object" : resOptions, "merged_config" : mergedConfig };
      if(newResOptions.new_object.content && _util.validate.contentConfig(newResOptions.new_object)){
        this.updateContentType(newResOptions.new_object.content);         
      }
      if(newResOptions.new_object.button && _util.validate.buttonConfig(newResOptions.new_object)){
        this.updateButtonType(newResOptions.new_object.button);
      }
      if(newResOptions.new_object.cookie_name && _util.validate.cookieConfig(newResOptions.new_object)){
        this.updateCookieName(newResOptions.new_object.cookie_name);        
      }
    }
  };

  /* Private Functions */
  var _build = {
    /* Dear Maintainer, please arrange functions in alphabetical order makes it easier to find. */

    // B //
    bannerLayout            :function(config){
      _append.element({
        "element_tag" : "div",
        "element_id"  : "cookie-banner-container",
        "parent_tag"  : "body"
      });
      this.bannerTextWrapper(config);
      this.bannerButtonWrapper(config);
      this.bannerContent(config);
      this.bannerButtons(config);
    },
    bannerTextWrapper       :function(config){
      _append.element({
        "element_tag"   : "div",
        "element_id"    : "banner-text-wrapper",
        "element_class" : "cbc-text-wrapper",
        "parent_id"     : "cookie-banner-container"
      });
    },
    bannerButtonWrapper     :function(config){
      _append.element({
        "element_tag"   : "div",
        "element_id"    : "banner-button-wrapper",
        "element_class" : "cbc-button-wrapper",
        "parent_id"     : "cookie-banner-container"
      });
    },
    bannerContent           :function(config){
      config.content.map(function(contentObj, index){
        contentObj.type === "banner" && _append.element({
          "element_tag"    : "div",
          "element_id"     : contentObj.id,
          "element_class"  : contentObj.class,
          "parent_id"      : "banner-text-wrapper",
          "template"       : contentObj.template
        });
      });
    },
    bannerButtons           :function(config){
      config.button.map(function(btnObj, index){
        var clickSettings = JSON.stringify({ 
          "type"          : btnObj.type, 
          "action"        : btnObj.action, 
          "id"            : btnObj.id
        });
        btnObj.type === "banner" && btnObj.enable && _append.element({
          "element_tag"   : "button",
          "element_id"    : btnObj.id,
          "element_class" : btnObj.class,
          "element_click" : 'CookieBanner.DOMclickAction.buttons('+ clickSettings +')', //Pass an Array in a later release
          "parent_id"     : "banner-button-wrapper",
          "template"      : btnObj.title
        });
      });
    },
    // M //
    modalLayout             :function(config){
      _append.element({
        "element_tag"   : "div",
        "element_id"    : "modal-settings-wrapper",
        "element_class" : "cookie-settings-modal",
        "parent_tag"    : "body"
      });
      this.modalHeader(config);
      this.modalBody(config);
      this.modalFooter(config);
      this.modalHeaderText(config);
      this.modalHeaderButton(config);
      this.modalTabButtonWrapper(config);
      this.modalTabContentWrapper(config);
      this.modalTabButtons(config);
      this.modalTabContents(config);      
      this.modalFooterButtons(config);
      //Close Modal every reload
      _clickAction.closeModal({ "id" : "modal-settings-wrapper", "action" : "close" });
    },
    modalHeader             :function(config){
      _append.element({
        "element_tag"   : "div",
        "element_id"    : "modal-header",
        "element_class" : "csm-header",
        "parent_id"     : "modal-settings-wrapper"
      });
    },
    modalBody               :function(config){
      _append.element({
        "element_tag"   : "div",
        "element_id"    : "modal-body",
        "element_class" : "csm-body",
        "parent_id"     : "modal-settings-wrapper"
      });
    },
    modalFooter             :function(config){
      _append.element({
        "element_tag"   : "div",
        "element_id"    : "modal-footer",
        "element_class" : "csm-footer",
        "parent_id"     : "modal-settings-wrapper"
      });
    },
    modalHeaderText         :function(config){
      _append.element({
        "element_tag"   : "div",
        "element_id"    : "modal-header-text",
        "parent_id"     : "modal-header",
        "element_class" : "csm-header-text",
        "template"      : "<p>Privacy Preference Centre</p>",
      });
    },
    modalHeaderButton       :function(config){
      _append.element({
        "element_tag"   : "button",
        "element_id"    : "modal-button-close",
        "element_class" : "csm-button-close",
        "element_click" : 'CookieBanner.DOMclickAction.buttons({ "id" : "modal-settings-wrapper", "action" : "close" })', //Pass an Array in a later release
        "parent_id"     : "modal-header",
        "template"      : "X"
      });
    },
    modalTabButtonWrapper   :function(config){
      _append.element({
        "element_tag"   : "div",
        "element_id"    : "tab-button-wrapper",
        "element_class" : "csm-button-wrapper",
        "parent_id"     : "modal-body"
      });
    },
    modalTabContentWrapper  :function(config){
      _append.element({
        "element_tag"   : "div",
        "element_id"    : "tab-content-wrapper",
        "element_class" : "csm-content-wrapper",
        "parent_id"     : "modal-body"
      });
    },
    modalTabButtons         :function(config){
      config.content.sort(function(a, b){
        return a.position - b.position;
      })
      .map(function(contentObj, index){
        contentObj.type === "tab" && contentObj.enable && _append.element({
          "element_tag"   : "button",
          "element_id"    : contentObj.id + "-button",
          "element_class" : contentObj.class,
          "element_click" : 'CookieBanner.DOMclickAction.buttons('+ JSON.stringify({ "id" : contentObj.id, "action" : "switch" }) + ')',
          "parent_id"     : "tab-button-wrapper",
          "template"      : contentObj.title
        });
      });
    },
    modalTabContents        :function(config){
      config.content.map(function(contentObj, index){
        if(contentObj.type === "tab" && contentObj.enable){
          _append.element({
            "element_tag"    : "div",
            "element_id"     : contentObj.id,
            "element_class"  : contentObj.class,
            "parent_id"      : "tab-content-wrapper",
            "template"       : "<div id=" + JSON.stringify(contentObj.id + '-content') +">"+contentObj.template+"</div>"
          });
          contentObj.checkbox && _append.element({
            "element_tag"     : "input",
            "element_id"      : contentObj.id + '-input',
            "element_type"    : "checkbox",
            "element_onchange": "CookieBanner.DOMclickAction.buttons(" + JSON.stringify({ "id" : contentObj.id, "action" : "check_input" }) + ")",
            "parent_id"       : contentObj.id,
          });
          if(contentObj.show_cookies) { 
            _append.element({
              "element_tag"    : "div",
              "element_id"     : contentObj.id + '-cookie-used',
              "parent_id"      : contentObj.id,
              "template"       : "<span class='cookies-used-header'>Cookies Used</span><ul id="+ JSON.stringify(contentObj.id + "-cu-ul-wrapper") +"></ul>"
            });
            contentObj.cookies.map(function(cookieObj){
              _append.element({
                "element_tag"    : "li",
                "element_id"     : contentObj.id + '-cu-lists',
                "parent_id"      : contentObj.id + '-cu-ul-wrapper',
                "template"       : cookieObj.name
              });
            });
          }
        }
      });
    },
    modalFooterButtons      :function(config){
      config.button.map(function(btnObj, index){
        var clickSettings = JSON.stringify({ 
          "type"          : btnObj.type, 
          "action"        : btnObj.action,
          "id"            : btnObj.id,
          "user_consent"  : userConsent
        });
        btnObj.type === "tab" && btnObj.enable && _append.element({
          "element_tag"   : "button",
          "element_id"    : btnObj.id,
          "element_class" : btnObj.class,
          "element_click" : 'CookieBanner.DOMclickAction.buttons('+ clickSettings +')', //Pass an Array in a later release
          "parent_id"     : "modal-footer",
          "template"      : btnObj.title
        });
      });
    },
  };
  var _append = {
    /* Dear Maintainer, please arrange functions in alphabetical order makes it easier to find. */

    // E //
    element :function(resOptions){
      if(resOptions && Object.keys(resOptions).length && (resOptions.parent_tag || resOptions.parent_id) && resOptions.element_id && resOptions.element_tag){
        var parent = resOptions.parent_tag ? document.getElementsByTagName(resOptions.parent_tag)["0"] && document.getElementsByTagName(resOptions.parent_tag)["0"] : document.getElementById(resOptions.parent_id);
        var newElement = document.createElement(resOptions.element_tag);
        newElement.setAttribute('id', resOptions.element_id);
        resOptions.element_class && newElement.setAttribute('class', resOptions.element_class);
        resOptions.element_click && newElement.setAttribute('onclick', resOptions.element_click);
        resOptions.element_type && newElement.setAttribute('type', resOptions.element_type);
        resOptions.element_onchange && newElement.setAttribute('onchange', resOptions.element_onchange);             
        newElement.innerHTML = resOptions.template ? resOptions.template : "";
        parent && parent.appendChild(newElement);
      }
    }
  };
  var _clickAction = {
    /* Dear Maintainer, please arrange functions in alphabetical order makes it easier to find. */

    // C //
    closeModal  :function(eventSettings){
      if(eventSettings && eventSettings.id){
        document.getElementById(eventSettings.id).style.display = "none";    
      }
    },
    // O //
    openModal   :function(eventSettings){
      if(eventSettings && eventSettings.id){
        document.getElementById(eventSettings.id).style.display = "block";
        this.switchModalTabs({ "id" : "modal-tab-privacy", "action" : "switch" });
      }
      _clickAction.setAllUserConsent(mergedConfig);      
    },
    // S //
    switchModalTabs :function(eventSettings){
      mergedConfig.content.map(function(contentObj){
        if(contentObj.type === 'tab' && contentObj.id !== eventSettings.id && contentObj.enable){
          document.getElementById(contentObj.id).style.display = "none";
          document.getElementById(contentObj.id + '-button').className = document.getElementById(contentObj.id + '-button').className.replace(" active-button", "");
          document.getElementById(contentObj.id).className = document.getElementById(contentObj.id).className.replace(" active-tab", "");
        }
      });
      document.getElementById(eventSettings.id).style.display = "block";
      document.getElementById(eventSettings.id + '-button').className += " active-button";
      document.getElementById(eventSettings.id).className += " active-tab";
    },
    saveConsent :function(eventSettings){
      if(eventSettings && eventSettings.type && (eventSettings.type === 'banner' || eventSettings.type === 'tab') && eventSettings.action && (eventSettings.action === 'accept' || eventSettings.action === 'reject')){
        cookieValue         = JSON.stringify({ "action" : eventSettings.action, "user_consent": userConsent});
        var date            = new Date();
        var daysToSetCookie = mergedConfig.cookie_name.expires;
        date.setTime(date.getTime() + (daysToSetCookie * 24 * 60 * 60 * 1000));
        document.cookie = mergedConfig.cookie_name.name + "=" + cookieValue + "; expires=" + date.toGMTString();
        if(eventSettings.type === 'tab' && eventSettings.action === 'accept'){
          this.closeModal({ "id" : "modal-settings-wrapper", "action" : "close" });          
        }
        _userCallback(JSON.parse(cookieValue));
      }
      if(eventSettings && eventSettings.type && eventSettings.type === 'banner' && eventSettings.action && eventSettings.action === 'settings'){
        this.openModal({ "id" : "modal-settings-wrapper", "action" : eventSettings.action });
      }
      if(eventSettings && eventSettings.id && eventSettings.action === "close"){
        this.closeModal({ "id" : "modal-settings-wrapper", "action" : "close" });
      }
      if(eventSettings && eventSettings.action && eventSettings.action === "switch"){
        this.switchModalTabs(eventSettings);
      }
      if(eventSettings && eventSettings.action && eventSettings.action === "check_input"){
        this.setUserConsent(eventSettings);
      }
      
      _util.toggleBanner(mergedConfig, eventSettings.action);      
    },
    setUserConsent  :function(eventSettings){
      if(eventSettings && eventSettings.id){     
        userConsent[eventSettings.id] = document.getElementById(eventSettings.id + '-input').checked;
      }
    },
    setInputChecked :function(cookieConsent){
      for (var userCookieConsent in cookieConsent.user_consent){
        userConsent[userCookieConsent] = document.getElementById(userCookieConsent + '-input').checked = cookieConsent.user_consent[userCookieConsent];
      }
    },
    setAllUserConsent :function(mergedConfig){
      if(_util.validate.ifCookieNameSet(mergedConfig.cookie_name.name)){
        JSON.parse(_util.getCookieValueByName(mergedConfig.cookie_name.name)).user_consent && this.setInputChecked(JSON.parse(_util.getCookieValueByName(mergedConfig.cookie_name.name)));
      }else{
        mergedConfig.content.map(function(contentObj){
          if(contentObj.type && contentObj.type === "tab" && contentObj.checkbox && contentObj.enable)
            userConsent[contentObj.id] = document.getElementById(contentObj.id + '-input').checked = true;
        });
      }
    },
  }

  /**
   * Inititalize the DOM on first load
   */
  function _init(){
    if(mergedConfig.content && mergedConfig.button && mergedConfig.cookie_name && _util.validate.settingsConfig(mergedConfig)){
      //Add cookieValue globally if it exists.
      cookieValue = _util.validate.ifCookieNameSet(mergedConfig.cookie_name.name) ? JSON.parse(_util.getCookieValueByName(mergedConfig.cookie_name.name)) : undefined;
      // Build DOM
      _build.bannerLayout(mergedConfig);
      _build.modalLayout(mergedConfig);
      _util.toggleBanner(mergedConfig);
      console.log("Initialized Cookie-Banner");
    };
  };

  /* Set of functions exposed to the users */
  return {

    DOMclickAction   : {
      // B //
      buttons :function(btnSettings){
        _proxy.DOMevent.buttons(btnSettings);
      }
    },
    // I //
    init             :function(settings, callback){
      _proxy.updateSettingsConfig(settings);
      _init();
      _userCallback = callback;
    },
    // S //
    setCookieName    :function(reqOptions){
      _proxy.updateCookieName(reqOptions);
      _init();
    },
    setButton        :function(reqOptions){
      _proxy.updateEachButtonType(reqOptions);
      _init();
    },
    setContent       :function(reqOptions){
      _proxy.updateEachContentType(reqOptions);
      _init();
    },
    setImage         :function(){
      //Coming Soon
    }
  };

})();
