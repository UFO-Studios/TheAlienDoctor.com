/*
 Quicksand 1.2.2

Reorder and filter items with a nice shuffling animation.

Copyright (c) 2010 Jacek Galanciak (razorjack.net) and agilope.com
Big thanks for Piotr Petrus (riddle.pl) for deep code review and wonderful docs & demos.

Dual licensed under the MIT and GPL version 2 licenses.
http://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt
http://github.com/jquery/jquery/blob/master/GPL-LICENSE.txt

Project site: http://razorjack.net/quicksand
Github site: http://github.com/razorjack/quicksand

*/
(function(b){b.fn.quicksand=function(E,v,A){var a={duration:750,easing:"swing",attribute:"data-id",adjustHeight:"auto",useScaling:!0,enhancement:function(h){},selector:"> *",dx:0,dy:0};b.extend(a,v);if(b.browser.msie||"undefined"==typeof b.fn.scale)a.useScaling=!1;var t;"function"==typeof v?t=v:typeof("function"==A)&&(t=A);return this.each(function(h){var p,k=[],n=b(E).clone(),g=b(this);h=b(this).css("height");var B=!1,C=b(g).offset(),w=[],q=b(this).find(a.selector);if(b.browser.msie&&7>b.browser.version.substr(0,
    1))g.html("").append(n);else{var D=0,F=function(){D||(D=1,$toDelete=g.find("> *"),g.prepend(l.find("> *")),$toDelete.remove(),B&&g.css("height",x),a.enhancement(g),"function"==typeof t&&t.call(this))},e=g.offsetParent(),c=e.offset();"relative"==e.css("position")?"body"!=e.get(0).nodeName.toLowerCase()&&(c.top+=parseFloat(e.css("border-top-width"))||0,c.left+=parseFloat(e.css("border-left-width"))||0):(c.top-=parseFloat(e.css("border-top-width"))||0,c.left-=parseFloat(e.css("border-left-width"))||
    0,c.top-=parseFloat(e.css("margin-top"))||0,c.left-=parseFloat(e.css("margin-left"))||0);isNaN(c.left)&&(c.left=0);isNaN(c.top)&&(c.top=0);c.left-=a.dx;c.top-=a.dy;g.css("height",b(this).height());q.each(function(m){w[m]=b(this).offset()});b(this).stop();var y=0,z=0;q.each(function(m){b(this).stop();var f=b(this).get(0);"absolute"==f.style.position?(y=-a.dx,z=-a.dy):(y=a.dx,z=a.dy);f.style.position="absolute";f.style.margin="0";f.style.top=w[m].top-parseFloat(f.style.marginTop)-c.top+z+"px";f.style.left=
    w[m].left-parseFloat(f.style.marginLeft)-c.left+y+"px"});var l=b(g).clone();e=l.get(0);e.innerHTML="";e.setAttribute("id","");e.style.height="auto";e.style.width=g.width()+"px";l.append(n);l.insertBefore(g);l.css("opacity",0);e.style.zIndex=-1;e.style.margin="0";e.style.position="absolute";e.style.top=C.top-c.top+"px";e.style.left=C.left-c.left+"px";if("dynamic"===a.adjustHeight)g.animate({height:l.height()},a.duration,a.easing);else if("auto"===a.adjustHeight){var x=l.height();parseFloat(h)<parseFloat(x)?
    g.css("height",x):B=!0}q.each(function(m){var f=[];"function"==typeof a.attribute?(p=a.attribute(b(this)),n.each(function(){if(a.attribute(this)==p)return f=b(this),!1})):f=n.filter("["+a.attribute+"="+b(this).attr(a.attribute)+"]");f.length?a.useScaling?k.push({element:b(this),animation:{top:f.offset().top-c.top,left:f.offset().left-c.left,opacity:1,scale:"1.0"}}):k.push({element:b(this),animation:{top:f.offset().top-c.top,left:f.offset().left-c.left,opacity:1}}):a.useScaling?k.push({element:b(this),
    animation:{opacity:"0.0",scale:"0.0"}}):k.push({element:b(this),animation:{opacity:"0.0"}})});n.each(function(m){var f=[],r=[];"function"==typeof a.attribute?(p=a.attribute(b(this)),q.each(function(){if(a.attribute(this)==p)return f=b(this),!1}),n.each(function(){if(a.attribute(this)==p)return r=b(this),!1})):(f=q.filter("["+a.attribute+"="+b(this).attr(a.attribute)+"]"),r=n.filter("["+a.attribute+"="+b(this).attr(a.attribute)+"]"));if(0===f.length){m=a.useScaling?{opacity:"1.0",scale:"1.0"}:{opacity:"1.0"};
    d=r.clone();var u=d.get(0);u.style.position="absolute";u.style.margin="0";u.style.top=r.offset().top-c.top+"px";u.style.left=r.offset().left-c.left+"px";d.css("opacity",0);a.useScaling&&d.css("transform","scale(0.0)");d.appendTo(g);k.push({element:b(d),animation:m})}});l.remove();a.enhancement(g);for(h=0;h<k.length;h++)k[h].element.animate(k[h].animation,a.duration,a.easing,F)}})}})(jQuery);