// ==UserScript==
// @name         Fav at top
// @namespace    http://tampermonkey.net/
// @version      2023-12-21
// @description  try to take over the world!
// @author       You
// @match        https://gelbooru.com/index.php?*id=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gelbooru.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("Gelbooru Fav at top of tag list");
    setTimeout( function() {
        console.log("Gelbooru Fav at top of tag list : timeout");
        let urlParams = new URLSearchParams(window.location.search);
        let a = document.createElement("div");
        a.onclick = function() {post_vote(urlParams.get("id") , 'up'); addFav(urlParams.get("id") ); return false;};
        a.innerHTML = "♥FAV♥";
        a.style = "font-weight: bold; cursor: pointer; font-size: large; color: red !important; text-align: center;";
        document.getElementById("tag-list").prepend(a);
    }, 500);
})();
