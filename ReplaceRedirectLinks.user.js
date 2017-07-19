// ==UserScript==
// @name         Replace Redirect Links
// @namespace    ReplaceRedirectLinks
// @version      0.1
// @description  Replace Redirect Links.
// @author       mittya
// @match        https://*.zhihu.com/*
// @match        https://*.juejin.im/*
// @run-at       document-end
// ==/UserScript==

(function() {
  'use strict';

  /*
    知乎
   */
  if (window.location.href.indexOf('zhihu.com') >= 0) {
    var replaceLinks = function() {
      var links = document.querySelectorAll('a[rel="nofollow noreferrer"]');

      for (var i = 0; i < links.length; i++) {
        if (links[i].href.indexOf('link.zhihu.com/?target=') >= 0) {
          links[i].href = decodeURIComponent(links[i].href).replace(/https?:\/\/link.zhihu.com\/\?target=/, '');
        }
      }
    };

    replaceLinks();

    document.addEventListener('click', replaceLinks);
  }


  /*
    掘金
   */
  if (window.location.href.indexOf('juejin.im') >= 0) {
    setTimeout(function() {
      var links = document.querySelectorAll('a[rel="nofollow noopener noreferrer"]');

      for (var i = 0; i < links.length; i++) {
        if (links[i].href.indexOf('link.juejin.im/?target=') >= 0) {
          links[i].href = decodeURIComponent(links[i].href).replace(/https?:\/\/link.juejin.im\/\?target=/, '');
        }
      }
    }, 2000);
  }
})();
