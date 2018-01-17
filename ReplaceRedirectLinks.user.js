// ==UserScript==
// @name         Replace Redirect Links
// @namespace    ReplaceRedirectLinks
// @version      0.2
// @description  Replace Redirect Links.
// @author       mittya
// @match        https://*.zhihu.com/*
// @match        https://*.juejin.im/*
// @match        https://*.jianshu.com/*
// @run-at       document-end
// ==/UserScript==

(function() {
  'use strict';

  const replaceLinks  = function(url, rel) {
    let reglist = [
      /https?:\/\/link.zhihu.com\/\?target=/,
      /https?:\/\/link.juejin.im\/\?target=/,
      /https?:\/\/link.jianshu.com\/\?t=/
    ];
    let links = document.querySelectorAll('a[rel="' + rel + '"]');

    for (let i = 0; i < links.length; i++) {
      if (links[i].href.indexOf(url) >= 0) {
        for (let j = 0; j < reglist.length; j++) {
          links[i].href = decodeURIComponent(links[i].href).replace(reglist[j], '');
        }
      }
    }
  };


  /* 知乎 */
  if (window.location.href.indexOf('zhihu.com') >= 0) {
    replaceLinks('link.zhihu.com/?target=', 'nofollow noreferrer');
  }


  /* 掘金 */
  if (window.location.href.indexOf('juejin.im') >= 0) {
    // 由于掘金页面重新加载造成脚本失效，所以延时两秒执行。
    setTimeout(function() {
      replaceLinks('link.juejin.im/?target=', 'nofollow noopener noreferrer');
    }, 2000);
  }


  /* 简书 */
  if (window.location.href.indexOf('jianshu.com') >= 0) {
    replaceLinks('link.jianshu.com/?t=', 'nofollow');
  }

})();
