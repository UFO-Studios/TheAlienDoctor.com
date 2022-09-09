/*!

JSZipUtils - A collection of cross-browser utilities to go along with JSZip.
<http://stuk.github.io/jszip-utils>

(c) 2014 Stuart Knightley, David Duponchel
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip-utils/master/LICENSE.markdown.

*/
!function(g){"object"==typeof exports?module.exports=g():"function"==typeof define&&define.amd?define(g):"undefined"!=typeof window?window.JSZipUtils=g():"undefined"!=typeof global?global.JSZipUtils=g():"undefined"!=typeof self&&(self.JSZipUtils=g())}(function(){return function l(h,f,m){function e(b,c){if(!f[b]){if(!h[b]){var d="function"==typeof require&&require;if(!c&&d)return d(b,!0);if(n)return n(b,!0);throw Error("Cannot find module '"+b+"'");}d=f[b]={exports:{}};h[b][0].call(d.exports,function(k){var p=
    h[b][1][k];return e(p?p:k)},d,d.exports,l,h,f,m)}return f[b].exports}for(var n="function"==typeof require&&require,a=0;a<m.length;a++)e(m[a]);return e}({1:[function(h,f,m){function l(){try{return new window.XMLHttpRequest}catch(a){}}var e={_getBinaryFromXHR:function(a){return a.response||a.responseText}},n=window.ActiveXObject?function(){var a;if(!(a=l()))a:{try{a=new window.ActiveXObject("Microsoft.XMLHTTP");break a}catch(b){}a=void 0}return a}:l;e.getBinaryContent=function(a,b){try{var c=n();c.open("GET",
    a,!0);"responseType"in c&&(c.responseType="arraybuffer");c.overrideMimeType&&c.overrideMimeType("text/plain; charset=x-user-defined");c.onreadystatechange=function(d){if(4===c.readyState)if(200===c.status||0===c.status){var k=d=null;try{d=e._getBinaryFromXHR(c)}catch(p){k=Error(p)}b(k,d)}else b(Error("Ajax error for "+a+" : "+this.status+" "+this.statusText),null)};c.send()}catch(d){b(Error(d),null)}};f.exports=e},{}]},{},[1])(1)});