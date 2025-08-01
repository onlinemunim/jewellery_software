/*
 * jQuery Easing v1.3 - https://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright � 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing,
        {
           def: 'easeOutQuad',
           swing: function(x, t, b, c, d) {
              //alert(jQuery.easing.default);
              return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
           },
           easeInQuad: function(x, t, b, c, d) {
              return c * (t /= d) * t + b;
           },
           easeOutQuad: function(x, t, b, c, d) {
              return -c * (t /= d) * (t - 2) + b;
           },
           easeInOutQuad: function(x, t, b, c, d) {
              if ((t /= d / 2) < 1)
                 return c / 2 * t * t + b;
              return -c / 2 * ((--t) * (t - 2) - 1) + b;
           },
           easeInCubic: function(x, t, b, c, d) {
              return c * (t /= d) * t * t + b;
           },
           easeOutCubic: function(x, t, b, c, d) {
              return c * ((t = t / d - 1) * t * t + 1) + b;
           },
           easeInOutCubic: function(x, t, b, c, d) {
              if ((t /= d / 2) < 1)
                 return c / 2 * t * t * t + b;
              return c / 2 * ((t -= 2) * t * t + 2) + b;
           },
           easeInQuart: function(x, t, b, c, d) {
              return c * (t /= d) * t * t * t + b;
           },
           easeOutQuart: function(x, t, b, c, d) {
              return -c * ((t = t / d - 1) * t * t * t - 1) + b;
           },
           easeInOutQuart: function(x, t, b, c, d) {
              if ((t /= d / 2) < 1)
                 return c / 2 * t * t * t * t + b;
              return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
           },
           easeInQuint: function(x, t, b, c, d) {
              return c * (t /= d) * t * t * t * t + b;
           },
           easeOutQuint: function(x, t, b, c, d) {
              return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
           },
           easeInOutQuint: function(x, t, b, c, d) {
              if ((t /= d / 2) < 1)
                 return c / 2 * t * t * t * t * t + b;
              return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
           },
           easeInSine: function(x, t, b, c, d) {
              return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
           },
           easeOutSine: function(x, t, b, c, d) {
              return c * Math.sin(t / d * (Math.PI / 2)) + b;
           },
           easeInOutSine: function(x, t, b, c, d) {
              return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
           },
           easeInExpo: function(x, t, b, c, d) {
              return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
           },
           easeOutExpo: function(x, t, b, c, d) {
              return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
           },
           easeInOutExpo: function(x, t, b, c, d) {
              if (t == 0)
                 return b;
              if (t == d)
                 return b + c;
              if ((t /= d / 2) < 1)
                 return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
              return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
           },
           easeInCirc: function(x, t, b, c, d) {
              return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
           },
           easeOutCirc: function(x, t, b, c, d) {
              return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
           },
           easeInOutCirc: function(x, t, b, c, d) {
              if ((t /= d / 2) < 1)
                 return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
              return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
           },
           easeInElastic: function(x, t, b, c, d) {
              var s = 1.70158;
              var p = 0;
              var a = c;
              if (t == 0)
                 return b;
              if ((t /= d) == 1)
                 return b + c;
              if (!p)
                 p = d * .3;
              if (a < Math.abs(c)) {
                 a = c;
                 var s = p / 4;
              }
              else
                 var s = p / (2 * Math.PI) * Math.asin(c / a);
              return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
           },
           easeOutElastic: function(x, t, b, c, d) {
              var s = 1.70158;
              var p = 0;
              var a = c;
              if (t == 0)
                 return b;
              if ((t /= d) == 1)
                 return b + c;
              if (!p)
                 p = d * .3;
              if (a < Math.abs(c)) {
                 a = c;
                 var s = p / 4;
              }
              else
                 var s = p / (2 * Math.PI) * Math.asin(c / a);
              return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
           },
           easeInOutElastic: function(x, t, b, c, d) {
              var s = 1.70158;
              var p = 0;
              var a = c;
              if (t == 0)
                 return b;
              if ((t /= d / 2) == 2)
                 return b + c;
              if (!p)
                 p = d * (.3 * 1.5);
              if (a < Math.abs(c)) {
                 a = c;
                 var s = p / 4;
              }
              else
                 var s = p / (2 * Math.PI) * Math.asin(c / a);
              if (t < 1)
                 return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
              return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
           },
           easeInBack: function(x, t, b, c, d, s) {
              if (s == undefined)
                 s = 1.70158;
              return c * (t /= d) * t * ((s + 1) * t - s) + b;
           },
           easeOutBack: function(x, t, b, c, d, s) {
              if (s == undefined)
                 s = 1.70158;
              return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
           },
           easeInOutBack: function(x, t, b, c, d, s) {
              if (s == undefined)
                 s = 1.70158;
              if ((t /= d / 2) < 1)
                 return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
              return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
           },
           easeInBounce: function(x, t, b, c, d) {
              return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
           },
           easeOutBounce: function(x, t, b, c, d) {
              if ((t /= d) < (1 / 2.75)) {
                 return c * (7.5625 * t * t) + b;
              } else if (t < (2 / 2.75)) {
                 return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
              } else if (t < (2.5 / 2.75)) {
                 return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
              } else {
                 return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
              }
           },
           easeInOutBounce: function(x, t, b, c, d) {
              if (t < d / 2)
                 return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
              return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
           }
        });

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright � 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */




/*global jQuery */
/*!
 * FitVids 1.0
 *
 * Copyright 2011, Chris Coyier - https://css-tricks.com + Dave Rupert - https://daverupert.com
 * Credit to Thierry Koblentz - https://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - https://sam.zoy.org/wtfpl/
 *
 * Date: Thu Sept 01 18:00:00 2011 -0500
 */

(function(a) {
   "use strict";
   a.fn.fitVids = function(b) {
      var c = {customSelector: null}, d = document.createElement("div"), e = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
      return d.className = "fit-vids-style", d.innerHTML = "&shy;<style> .fluid-width-video-wrapper { width: 100%; position: relative; padding: 0; } .fluid-width-video-wrapper iframe, .fluid-width-video-wrapper object, .fluid-width-video-wrapper embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; } </style>", e.parentNode.insertBefore(d, e), b && a.extend(c, b), this.each(function() {
         var b = ["iframe[src*='player.vimeo.com']", "iframe[src*='www.youtube.com']", "iframe[src*='www.youtube-nocookie.com']", "iframe[src*='www.kickstarter.com']", "object", "embed"];
         c.customSelector && b.push(c.customSelector);
         var d = a(this).find(b.join(","));
         d.each(function() {
            var b = a(this);
            if (!("embed" === this.tagName.toLowerCase() && b.parent("object").length || b.parent(".fluid-width-video-wrapper").length)) {
               var c = "object" === this.tagName.toLowerCase() || b.attr("height") && !isNaN(parseInt(b.attr("height"), 10)) ? parseInt(b.attr("height"), 10) : b.height(), d = isNaN(parseInt(b.attr("width"), 10)) ? b.width() : parseInt(b.attr("width"), 10), e = c / d;
               if (!b.attr("id")) {
                  var f = "fitvid" + Math.floor(999999 * Math.random());
                  b.attr("id", f)
               }
               b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * e + "%"), b.removeAttr("height").removeAttr("width")
            }
         })
      })
   }
})(jQuery);




/*
 * jQuery Superfish Menu Plugin - v1.7.5
 * Copyright (c) 2014 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	https://www.opensource.org/licenses/mit-license.php
 *	https://www.gnu.org/licenses/gpl.html
 */

;
(function(e, s) {
   "use strict";
   var n = function() {
      var n = {bcClass: "sf-breadcrumb", menuClass: "sf-js-enabled", anchorClass: "sf-with-ul", menuArrowClass: "sf-arrows"}, o = function() {
         var n = /iPhone|iPad|iPod/i.test(navigator.userAgent);
         return n && e(s).load(function() {
            e("body").children().on("click", e.noop)
         }), n
      }(), t = function() {
         var e = document.documentElement.style;
         return"behavior"in e && "fill"in e && /iemobile/i.test(navigator.userAgent)
      }(), i = function() {
         return!!s.PointerEvent
      }(), r = function(e, s) {
         var o = n.menuClass;
         s.cssArrows && (o += " " + n.menuArrowClass), e.toggleClass(o)
      }, a = function(s, o) {
         return s.find("li." + o.pathClass).slice(0, o.pathLevels).addClass(o.hoverClass + " " + n.bcClass).filter(function() {
            return e(this).children(o.popUpSelector).hide().show().length
         }).removeClass(o.pathClass)
      }, l = function(e) {
         e.children("a").toggleClass(n.anchorClass)
      }, h = function(e) {
         var s = e.css("ms-touch-action"), n = e.css("touch-action");
         n = n || s, n = "pan-y" === n ? "auto" : "pan-y", e.css({"ms-touch-action": n, "touch-action": n})
      }, u = function(s, n) {
         var r = "li:has(" + n.popUpSelector + ")";
         e.fn.hoverIntent && !n.disableHI ? s.hoverIntent(c, f, r) : s.on("mouseenter.superfish", r, c).on("mouseleave.superfish", r, f);
         var a = "MSPointerDown.superfish";
         i && (a = "pointerdown.superfish"), o || (a += " touchend.superfish"), t && (a += " mousedown.superfish"), s.on("focusin.superfish", "li", c).on("focusout.superfish", "li", f).on(a, "a", n, p)
      }, p = function(s) {
         var n = e(this), o = n.siblings(s.data.popUpSelector);
         o.length > 0 && o.is(":hidden") && (n.one("click.superfish", !1), "MSPointerDown" === s.type || "pointerdown" === s.type ? n.trigger("focus") : e.proxy(c, n.parent("li"))())
      }, c = function() {
         var s = e(this), n = m(s);
         clearTimeout(n.sfTimer), s.siblings().superfish("hide").end().superfish("show")
      }, f = function() {
         var s = e(this), n = m(s);
         o ? e.proxy(d, s, n)() : (clearTimeout(n.sfTimer), n.sfTimer = setTimeout(e.proxy(d, s, n), n.delay))
      }, d = function(s) {
         s.retainPath = e.inArray(this[0], s.$path) > -1, this.superfish("hide"), this.parents("." + s.hoverClass).length || (s.onIdle.call(v(this)), s.$path.length && e.proxy(c, s.$path)())
      }, v = function(e) {
         return e.closest("." + n.menuClass)
      }, m = function(e) {
         return v(e).data("sf-options")
      };
      return{hide: function(s) {
            if (this.length) {
               var n = this, o = m(n);
               if (!o)
                  return this;
               var t = o.retainPath === !0 ? o.$path : "", i = n.find("li." + o.hoverClass).add(this).not(t).removeClass(o.hoverClass).children(o.popUpSelector), r = o.speedOut;
               s && (i.show(), r = 0), o.retainPath = !1, o.onBeforeHide.call(i), i.stop(!0, !0).animate(o.animationOut, r, function() {
                  var s = e(this);
                  o.onHide.call(s)
               })
            }
            return this
         }, show: function() {
            var e = m(this);
            if (!e)
               return this;
            var s = this.addClass(e.hoverClass), n = s.children(e.popUpSelector);
            return e.onBeforeShow.call(n), n.stop(!0, !0).animate(e.animation, e.speed, function() {
               e.onShow.call(n)
            }), this
         }, destroy: function() {
            return this.each(function() {
               var s, o = e(this), t = o.data("sf-options");
               return t ? (s = o.find(t.popUpSelector).parent("li"), clearTimeout(t.sfTimer), r(o, t), l(s), h(o), o.off(".superfish").off(".hoverIntent"), s.children(t.popUpSelector).attr("style", function(e, s) {
                  return s.replace(/display[^;]+;?/g, "")
               }), t.$path.removeClass(t.hoverClass + " " + n.bcClass).addClass(t.pathClass), o.find("." + t.hoverClass).removeClass(t.hoverClass), t.onDestroy.call(o), o.removeData("sf-options"), void 0) : !1
            })
         }, init: function(s) {
            return this.each(function() {
               var o = e(this);
               if (o.data("sf-options"))
                  return!1;
               var t = e.extend({}, e.fn.superfish.defaults, s), i = o.find(t.popUpSelector).parent("li");
               t.$path = a(o, t), o.data("sf-options", t), r(o, t), l(i), h(o), u(o, t), i.not("." + n.bcClass).superfish("hide", !0), t.onInit.call(this)
            })
         }}
   }();
   e.fn.superfish = function(s) {
      return n[s] ? n[s].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof s && s ? e.error("Method " + s + " does not exist on jQuery.fn.superfish") : n.init.apply(this, arguments)
   }, e.fn.superfish.defaults = {popUpSelector: "ul,.sf-mega", hoverClass: "sfHover", pathClass: "overrideThisToUse", pathLevels: 1, delay: 800, animation: {opacity: "show"}, animationOut: {opacity: "hide"}, speed: "normal", speedOut: "fast", cssArrows: !0, disableHI: !1, onInit: e.noop, onBeforeShow: e.noop, onShow: e.noop, onBeforeHide: e.noop, onHide: e.noop, onIdle: e.noop, onDestroy: e.noop}
})(jQuery, window);

(function($) {
   $.fn.hoverIntent = function(handlerIn, handlerOut, selector) {

      // default configuration values
      var cfg = {
         interval: 100,
         sensitivity: 7,
         timeout: 0
      };

      if (typeof handlerIn === "object") {
         cfg = $.extend(cfg, handlerIn);
      } else if ($.isFunction(handlerOut)) {
         cfg = $.extend(cfg, {over: handlerIn, out: handlerOut, selector: selector});
      } else {
         cfg = $.extend(cfg, {over: handlerIn, out: handlerIn, selector: handlerOut});
      }

      // instantiate variables
      // cX, cY = current X and Y position of mouse, updated by mousemove event
      // pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
      var cX, cY, pX, pY;

      // A private function for getting mouse position
      var track = function(ev) {
         cX = ev.pageX;
         cY = ev.pageY;
      };

      // A private function for comparing current and previous mouse position
      var compare = function(ev, ob) {
         ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
         // compare mouse positions to see if they've crossed the threshold
         if ((Math.abs(pX - cX) + Math.abs(pY - cY)) < cfg.sensitivity) {
            $(ob).off("mousemove.hoverIntent", track);
            // set hoverIntent state to true (so mouseOut can be called)
            ob.hoverIntent_s = 1;
            return cfg.over.apply(ob, [ev]);
         } else {
            // set previous coordinates for next time
            pX = cX;
            pY = cY;
            // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
            ob.hoverIntent_t = setTimeout(function() {
               compare(ev, ob);
            }, cfg.interval);
         }
      };

      // A private function for delaying the mouseOut function
      var delay = function(ev, ob) {
         ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
         ob.hoverIntent_s = 0;
         return cfg.out.apply(ob, [ev]);
      };

      // A private function for handling mouse 'hovering'
      var handleHover = function(e) {
         // copy objects to be passed into t (required for event object to be passed in IE)
         var ev = jQuery.extend({}, e);
         var ob = this;

         // cancel hoverIntent timer if it exists
         if (ob.hoverIntent_t) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
         }

         // if e.type == "mouseenter"
         if (e.type == "mouseenter") {
            // set "previous" X and Y position based on initial entry point
            pX = ev.pageX;
            pY = ev.pageY;
            // update "current" X and Y position based on mousemove
            $(ob).on("mousemove.hoverIntent", track);
            // start polling interval (self-calling timeout) to compare mouse coordinates over time
            if (ob.hoverIntent_s != 1) {
               ob.hoverIntent_t = setTimeout(function() {
                  compare(ev, ob);
               }, cfg.interval);
            }

            // else e.type == "mouseleave"
         } else {
            // unbind expensive mousemove event
            $(ob).off("mousemove.hoverIntent", track);
            // if hoverIntent state is true, then call the mouseOut function after the specified delay
            if (ob.hoverIntent_s == 1) {
               ob.hoverIntent_t = setTimeout(function() {
                  delay(ev, ob);
               }, cfg.timeout);
            }
         }
      };

      // listen for mouseenter and mouseleave
      return this.on({'mouseenter.hoverIntent': handleHover, 'mouseleave.hoverIntent': handleHover}, cfg.selector);
   };
})(jQuery);




/**
 *
 * Twitter Feed Fetcher
 *
 */


function sm_format_twitter(twitters) {
   var statusHTML = [];
   for (var i = 0; i < twitters.length; i++) {
      var username = twitters[i].user.screen_name;
      var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
         return '<a href="' + url + '" target="_blank">' + url + '</a>';
      }).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
         return  reply.charAt(0) + '<a href="https://twitter.com/' + reply.substring(1) + '" target="_blank">' + reply.substring(1) + '</a>';
      });
      statusHTML.push('<li><i class="icon-twitter"></i><span>' + status + '</span><small><a href="https://twitter.com/' + username + '/statuses/' + twitters[i].id_str + '" target="_blank">' + relative_time(twitters[i].created_at) + '</a></small></li>');
   }
   return statusHTML.join('');
}

function sm_format_twitter2(twitters) {
   var statusHTML = [];
   for (var i = 0; i < twitters.length; i++) {
      var username = twitters[i].user.screen_name;
      var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
         return '<a href="' + url + '" target="_blank">' + url + '</a>';
      }).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
         return  reply.charAt(0) + '<a href="https://twitter.com/' + reply.substring(1) + '" target="_blank">' + reply.substring(1) + '</a>';
      });
      statusHTML.push('<div class="slide"><span>' + status + '</span><small><a href="https://twitter.com/' + username + '/statuses/' + twitters[i].id_str + '" target="_blank">' + relative_time(twitters[i].created_at) + '</a></small></div>');
   }
   return statusHTML.join('');
}

function sm_format_twitter3(twitters) {
   var statusHTML = [];
   for (var i = 0; i < twitters.length; i++) {
      var username = twitters[i].user.screen_name;
      var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
         return '<a href="' + url + '" target="_blank">' + url + '</a>';
      }).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
         return  reply.charAt(0) + '<a href="https://twitter.com/' + reply.substring(1) + '" target="_blank">' + reply.substring(1) + '</a>';
      });
      statusHTML.push('<div class="slide"><div class="testi-content"><p>' + status + '</p><div class="testi-meta"><span><a href="https://twitter.com/' + username + '/statuses/' + twitters[i].id_str + '" target="_blank">' + relative_time(twitters[i].created_at) + '</a></span></div></div></div>');
   }
   return statusHTML.join('');
}

function relative_time(time_value) {
   var values = time_value.split(" ");
   time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
   var parsed_date = Date.parse(time_value);
   var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
   var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
   delta = delta + (relative_to.getTimezoneOffset() * 60);

   if (delta < 60) {
      return 'less than a minute ago';
   } else if (delta < 120) {
      return 'about a minute ago';
   } else if (delta < (60 * 60)) {
      return (parseInt(delta / 60)).toString() + ' minutes ago';
   } else if (delta < (120 * 60)) {
      return 'about an hour ago';
   } else if (delta < (24 * 60 * 60)) {
      return 'about ' + (parseInt(delta / 3600)).toString() + ' hours ago';
   } else if (delta < (48 * 60 * 60)) {
      return '1 day ago';
   } else {
      return (parseInt(delta / 86400)).toString() + ' days ago';
   }
}




/*! jRespond.js v 0.10 | Author: Jeremy Fields [jeremy.fields@viget.com], 2013 | License: MIT */
!function(a, b, c) {
   "object" == typeof module && module && "object" == typeof module.exports ? module.exports = c : (a[b] = c, "function" == typeof define && define.amd && define(b, [], function() {
      return c
   }))
}(this, "jRespond", function(a, b, c) {
   "use strict";
   return function(a) {
      var b = [], d = [], e = a, f = "", g = "", i = 0, j = 100, k = 500, l = k, m = function() {
         var a = 0;
         return a = "number" != typeof window.innerWidth ? 0 !== document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth : window.innerWidth
      }, n = function(a) {
         if (a.length === c)
            o(a);
         else
            for (var b = 0; b < a.length; b++)
               o(a[b])
      }, o = function(a) {
         var e = a.breakpoint, h = a.enter || c;
         b.push(a), d.push(!1), r(e) && (h !== c && h.call(null, {entering: f, exiting: g}), d[b.length - 1] = !0)
      }, p = function() {
         for (var a = [], e = [], h = 0; h < b.length; h++) {
            var i = b[h].breakpoint, j = b[h].enter || c, k = b[h].exit || c;
            "*" === i ? (j !== c && a.push(j), k !== c && e.push(k)) : r(i) ? (j === c || d[h] || a.push(j), d[h] = !0) : (k !== c && d[h] && e.push(k), d[h] = !1)
         }
         for (var l = {entering: f, exiting: g}, m = 0; m < e.length; m++)
            e[m].call(null, l);
         for (var n = 0; n < a.length; n++)
            a[n].call(null, l)
      }, q = function(a) {
         for (var b = !1, c = 0; c < e.length; c++)
            if (a >= e[c].enter && a <= e[c].exit) {
               b = !0;
               break
            }
         b && f !== e[c].label ? (g = f, f = e[c].label, p()) : b || "" === f || (f = "", p())
      }, r = function(a) {
         if ("object" == typeof a) {
            if (a.join().indexOf(f) >= 0)
               return!0
         } else {
            if ("*" === a)
               return!0;
            if ("string" == typeof a && f === a)
               return!0
         }
      }, s = function() {
         var a = m();
         a !== i ? (l = j, q(a)) : l = k, i = a, setTimeout(s, l)
      };
      return s(), {addFunc: function(a) {
            n(a)
         }, getBreakpoint: function() {
            return f
         }}
   }
}(this, this.document));





!function(t, e) {
   "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(t.jQuery)
}(this, function(t) {
   function e(t) {
      if (t in p.style)
         return t;
      for (var e = ["Moz", "Webkit", "O", "ms"], n = t.charAt(0).toUpperCase() + t.substr(1), i = 0; i < e.length; ++i) {
         var r = e[i] + n;
         if (r in p.style)
            return r
      }
   }
   function n() {
      return p.style[d.transform] = "", p.style[d.transform] = "rotateY(90deg)", "" !== p.style[d.transform]
   }
   function i(t) {
      return"string" == typeof t && this.parse(t), this
   }
   function r(t, e, n) {
      e === !0 ? t.queue(n) : e ? t.queue(e, n) : t.each(function() {
         n.call(this)
      })
   }
   function s(e) {
      var n = [];
      return t.each(e, function(e) {
         e = t.camelCase(e), e = t.transit.propertyMap[e] || t.cssProps[e] || e, e = u(e), d[e] && (e = u(d[e])), -1 === t.inArray(e, n) && n.push(e)
      }), n
   }
   function a(e, n, i, r) {
      var a = s(e);
      t.cssEase[i] && (i = t.cssEase[i]);
      var o = "" + f(n) + " " + i;
      parseInt(r, 10) > 0 && (o += " " + f(r));
      var u = [];
      return t.each(a, function(t, e) {
         u.push(e + " " + o)
      }), u.join(", ")
   }
   function o(e, n) {
      n || (t.cssNumber[e] = !0), t.transit.propertyMap[e] = d.transform, t.cssHooks[e] = {get: function(n) {
            var i = t(n).css("transit:transform");
            return i.get(e)
         }, set: function(n, i) {
            var r = t(n).css("transit:transform");
            r.setFromString(e, i), t(n).css({"transit:transform": r})
         }}
   }
   function u(t) {
      return t.replace(/([A-Z])/g, function(t) {
         return"-" + t.toLowerCase()
      })
   }
   function c(t, e) {
      return"string" != typeof t || t.match(/^[\-0-9\.]+$/) ? "" + t + e : t
   }
   function f(e) {
      var n = e;
      return"string" != typeof n || n.match(/^[\-0-9\.]+/) || (n = t.fx.speeds[n] || t.fx.speeds._default), c(n, "ms")
   }
   t.transit = {version: "0.9.12", propertyMap: {marginLeft: "margin", marginRight: "margin", marginBottom: "margin", marginTop: "margin", paddingLeft: "padding", paddingRight: "padding", paddingBottom: "padding", paddingTop: "padding"}, enabled: !0, useTransitionEnd: !1};
   var p = document.createElement("div"), d = {}, l = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
   d.transition = e("transition"), d.transitionDelay = e("transitionDelay"), d.transform = e("transform"), d.transformOrigin = e("transformOrigin"), d.filter = e("Filter"), d.transform3d = n();
   var h = {transition: "transitionend", MozTransition: "transitionend", OTransition: "oTransitionEnd", WebkitTransition: "webkitTransitionEnd", msTransition: "MSTransitionEnd"}, b = d.transitionEnd = h[d.transition] || null;
   for (var y in d)
      d.hasOwnProperty(y) && "undefined" == typeof t.support[y] && (t.support[y] = d[y]);
   return p = null, t.cssEase = {_default: "ease", "in": "ease-in", out: "ease-out", "in-out": "ease-in-out", snap: "cubic-bezier(0,1,.5,1)", easeInCubic: "cubic-bezier(.550,.055,.675,.190)", easeOutCubic: "cubic-bezier(.215,.61,.355,1)", easeInOutCubic: "cubic-bezier(.645,.045,.355,1)", easeInCirc: "cubic-bezier(.6,.04,.98,.335)", easeOutCirc: "cubic-bezier(.075,.82,.165,1)", easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)", easeInExpo: "cubic-bezier(.95,.05,.795,.035)", easeOutExpo: "cubic-bezier(.19,1,.22,1)", easeInOutExpo: "cubic-bezier(1,0,0,1)", easeInQuad: "cubic-bezier(.55,.085,.68,.53)", easeOutQuad: "cubic-bezier(.25,.46,.45,.94)", easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)", easeInQuart: "cubic-bezier(.895,.03,.685,.22)", easeOutQuart: "cubic-bezier(.165,.84,.44,1)", easeInOutQuart: "cubic-bezier(.77,0,.175,1)", easeInQuint: "cubic-bezier(.755,.05,.855,.06)", easeOutQuint: "cubic-bezier(.23,1,.32,1)", easeInOutQuint: "cubic-bezier(.86,0,.07,1)", easeInSine: "cubic-bezier(.47,0,.745,.715)", easeOutSine: "cubic-bezier(.39,.575,.565,1)", easeInOutSine: "cubic-bezier(.445,.05,.55,.95)", easeInBack: "cubic-bezier(.6,-.28,.735,.045)", easeOutBack: "cubic-bezier(.175, .885,.32,1.275)", easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"}, t.cssHooks["transit:transform"] = {get: function(e) {
         return t(e).data("transform") || new i
      }, set: function(e, n) {
         var r = n;
         r instanceof i || (r = new i(r)), e.style[d.transform] = "WebkitTransform" !== d.transform || l ? r.toString() : r.toString(!0), t(e).data("transform", r)
      }}, t.cssHooks.transform = {set: t.cssHooks["transit:transform"].set}, t.cssHooks.filter = {get: function(t) {
         return t.style[d.filter]
      }, set: function(t, e) {
         t.style[d.filter] = e
      }}, t.fn.jquery < "1.8" && (t.cssHooks.transformOrigin = {get: function(t) {
         return t.style[d.transformOrigin]
      }, set: function(t, e) {
         t.style[d.transformOrigin] = e
      }}, t.cssHooks.transition = {get: function(t) {
         return t.style[d.transition]
      }, set: function(t, e) {
         t.style[d.transition] = e
      }}), o("scale"), o("scaleX"), o("scaleY"), o("translate"), o("rotate"), o("rotateX"), o("rotateY"), o("rotate3d"), o("perspective"), o("skewX"), o("skewY"), o("x", !0), o("y", !0), i.prototype = {setFromString: function(t, e) {
         var n = "string" == typeof e ? e.split(",") : e.constructor === Array ? e : [e];
         n.unshift(t), i.prototype.set.apply(this, n)
      }, set: function(t) {
         var e = Array.prototype.slice.apply(arguments, [1]);
         this.setter[t] ? this.setter[t].apply(this, e) : this[t] = e.join(",")
      }, get: function(t) {
         return this.getter[t] ? this.getter[t].apply(this) : this[t] || 0
      }, setter: {rotate: function(t) {
            this.rotate = c(t, "deg")
         }, rotateX: function(t) {
            this.rotateX = c(t, "deg")
         }, rotateY: function(t) {
            this.rotateY = c(t, "deg")
         }, scale: function(t, e) {
            void 0 === e && (e = t), this.scale = t + "," + e
         }, skewX: function(t) {
            this.skewX = c(t, "deg")
         }, skewY: function(t) {
            this.skewY = c(t, "deg")
         }, perspective: function(t) {
            this.perspective = c(t, "px")
         }, x: function(t) {
            this.set("translate", t, null)
         }, y: function(t) {
            this.set("translate", null, t)
         }, translate: function(t, e) {
            void 0 === this._translateX && (this._translateX = 0), void 0 === this._translateY && (this._translateY = 0), null !== t && void 0 !== t && (this._translateX = c(t, "px")), null !== e && void 0 !== e && (this._translateY = c(e, "px")), this.translate = this._translateX + "," + this._translateY
         }}, getter: {x: function() {
            return this._translateX || 0
         }, y: function() {
            return this._translateY || 0
         }, scale: function() {
            var t = (this.scale || "1,1").split(",");
            return t[0] && (t[0] = parseFloat(t[0])), t[1] && (t[1] = parseFloat(t[1])), t[0] === t[1] ? t[0] : t
         }, rotate3d: function() {
            for (var t = (this.rotate3d || "0,0,0,0deg").split(","), e = 0; 3 >= e; ++e)
               t[e] && (t[e] = parseFloat(t[e]));
            return t[3] && (t[3] = c(t[3], "deg")), t
         }}, parse: function(t) {
         var e = this;
         t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(t, n, i) {
            e.setFromString(n, i)
         })
      }, toString: function(t) {
         var e = [];
         for (var n in this)
            if (this.hasOwnProperty(n)) {
               if (!d.transform3d && ("rotateX" === n || "rotateY" === n || "perspective" === n || "transformOrigin" === n))
                  continue;
               "_" !== n[0] && e.push(t && "scale" === n ? n + "3d(" + this[n] + ",1)" : t && "translate" === n ? n + "3d(" + this[n] + ",0)" : n + "(" + this[n] + ")")
            }
         return e.join(" ")
      }}, t.fn.transition = t.fn.transit = function(e, n, i, s) {
      var o = this, u = 0, c = !0, p = t.extend(!0, {}, e);
      "function" == typeof n && (s = n, n = void 0), "object" == typeof n && (i = n.easing, u = n.delay || 0, c = "undefined" == typeof n.queue ? !0 : n.queue, s = n.complete, n = n.duration), "function" == typeof i && (s = i, i = void 0), "undefined" != typeof p.easing && (i = p.easing, delete p.easing), "undefined" != typeof p.duration && (n = p.duration, delete p.duration), "undefined" != typeof p.complete && (s = p.complete, delete p.complete), "undefined" != typeof p.queue && (c = p.queue, delete p.queue), "undefined" != typeof p.delay && (u = p.delay, delete p.delay), "undefined" == typeof n && (n = t.fx.speeds._default), "undefined" == typeof i && (i = t.cssEase._default), n = f(n);
      var l = a(p, n, i, u), h = t.transit.enabled && d.transition, y = h ? parseInt(n, 10) + parseInt(u, 10) : 0;
      if (0 === y) {
         var g = function(t) {
            o.css(p), s && s.apply(o), t && t()
         };
         return r(o, c, g), o
      }
      var m = {}, v = function(e) {
         var n = !1, i = function() {
            n && o.unbind(b, i), y > 0 && o.each(function() {
               this.style[d.transition] = m[this] || null
            }), "function" == typeof s && s.apply(o), "function" == typeof e && e()
         };
         y > 0 && b && t.transit.useTransitionEnd ? (n = !0, o.bind(b, i)) : window.setTimeout(i, y), o.each(function() {
            y > 0 && (this.style[d.transition] = l), t(this).css(p)
         })
      }, z = function(t) {
         this.offsetWidth, v(t)
      };
      return r(o, c, z), this
   }, t.transit.getTransitionValue = a, t
});





// SmoothScroll v0.9.9
// Licensed under the terms of the MIT license.

// People involved
// - Balazs Galambosi: maintainer (CHANGELOG.txt)
// - Patrick Brunner (patrickb1991@gmail.com)
// - Michael Herf: ssc_pulse Algorithm
if (navigator.platform.toUpperCase().indexOf('MAC') === -1 && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini|BlackBerry)/) && jQuery(window).width() > 991) {
   function ssc_init() {
      if (!document.body)
         return;
      var e = document.body;
      var t = document.documentElement;
      var n = window.innerHeight;
      var r = e.scrollHeight;
      ssc_root = document.compatMode.indexOf("CSS") >= 0 ? t : e;
      ssc_activeElement = e;
      ssc_initdone = true;
      if (top != self) {
         ssc_frame = true
      } else if (r > n && (e.offsetHeight <= n || t.offsetHeight <= n)) {
         ssc_root.style.height = "auto";
         if (ssc_root.offsetHeight <= n) {
            var i = document.createElement("div");
            i.style.clear = "both";
            e.appendChild(i)
         }
      }
      if (!ssc_fixedback) {
         e.style.backgroundAttachment = "scroll";
         t.style.backgroundAttachment = "scroll"
      }
      if (ssc_keyboardsupport) {
         ssc_addEvent("keydown", ssc_keydown)
      }
   }
   function ssc_scrollArray(e, t, n, r) {
      r || (r = 1e3);
      ssc_directionCheck(t, n);
      ssc_que.push({x: t, y: n, lastX: t < 0 ? .99 : -.99, lastY: n < 0 ? .99 : -.99, start: +(new Date)});
      if (ssc_pending) {
         return
      }
      var i = function() {
         var s = +(new Date);
         var o = 0;
         var u = 0;
         for (var a = 0; a < ssc_que.length; a++) {
            var f = ssc_que[a];
            var l = s - f.start;
            var c = l >= ssc_animtime;
            var h = c ? 1 : l / ssc_animtime;
            if (ssc_pulseAlgorithm) {
               h = ssc_pulse(h)
            }
            var p = f.x * h - f.lastX >> 0;
            var d = f.y * h - f.lastY >> 0;
            o += p;
            u += d;
            f.lastX += p;
            f.lastY += d;
            if (c) {
               ssc_que.splice(a, 1);
               a--
            }
         }
         if (t) {
            var v = e.scrollLeft;
            e.scrollLeft += o;
            if (o && e.scrollLeft === v) {
               t = 0
            }
         }
         if (n) {
            var m = e.scrollTop;
            e.scrollTop += u;
            if (u && e.scrollTop === m) {
               n = 0
            }
         }
         if (!t && !n) {
            ssc_que = []
         }
         if (ssc_que.length) {
            setTimeout(i, r / ssc_framerate + 1)
         } else {
            ssc_pending = false
         }
      };
      setTimeout(i, 0);
      ssc_pending = true
   }
   function ssc_wheel(e) {
      if (!ssc_initdone) {
         ssc_init()
      }
      var t = e.target;
      var n = ssc_overflowingAncestor(t);
      if (!n || e.defaultPrevented || ssc_isNodeName(ssc_activeElement, "embed") || ssc_isNodeName(t, "embed") && /\.pdf/i.test(t.src)) {
         return true
      }
      var r = e.wheelDeltaX || 0;
      var i = e.wheelDeltaY || 0;
      if (!r && !i) {
         i = e.wheelDelta || 0
      }
      if (Math.abs(r) > 1.2) {
         r *= ssc_stepsize / 120
      }
      if (Math.abs(i) > 1.2) {
         i *= ssc_stepsize / 120
      }
      ssc_scrollArray(n, -r, -i);
      e.preventDefault()
   }
   function ssc_keydown(e) {
      var t = e.target;
      var n = e.ctrlKey || e.altKey || e.metaKey;
      if (/input|textarea|embed/i.test(t.nodeName) || t.isContentEditable || e.defaultPrevented || n) {
         return true
      }
      if (ssc_isNodeName(t, "button") && e.keyCode === ssc_key.spacebar) {
         return true
      }
      var r, i = 0, s = 0;
      var o = ssc_overflowingAncestor(ssc_activeElement);
      var u = o.clientHeight;
      if (o == document.body) {
         u = window.innerHeight
      }
      switch (e.keyCode) {
         case ssc_key.up:
            s = -ssc_arrowscroll;
            break;
         case ssc_key.down:
            s = ssc_arrowscroll;
            break;
         case ssc_key.spacebar:
            r = e.shiftKey ? 1 : -1;
            s = -r * u * .9;
            break;
         case ssc_key.pageup:
            s = -u * .9;
            break;
         case ssc_key.pagedown:
            s = u * .9;
            break;
         case ssc_key.home:
            s = -o.scrollTop;
            break;
         case ssc_key.end:
            var a = o.scrollHeight - o.scrollTop - u;
            s = a > 0 ? a + 10 : 0;
            break;
         case ssc_key.left:
            i = -ssc_arrowscroll;
            break;
         case ssc_key.right:
            i = ssc_arrowscroll;
            break;
         default:
            return true
      }
      ssc_scrollArray(o, i, s);
      e.preventDefault()
   }
   function ssc_mousedown(e) {
      ssc_activeElement = e.target
   }
   function ssc_setCache(e, t) {
      for (var n = e.length; n--; )
         ssc_cache[ssc_uniqueID(e[n])] = t;
      return t
   }
   function ssc_overflowingAncestor(e) {
      var t = [];
      var n = ssc_root.scrollHeight;
      do {
         var r = ssc_cache[ssc_uniqueID(e)];
         if (r) {
            return ssc_setCache(t, r)
         }
         t.push(e);
         if (n === e.scrollHeight) {
            if (!ssc_frame || ssc_root.clientHeight + 10 < n) {
               return ssc_setCache(t, document.body)
            }
         } else if (e.clientHeight + 10 < e.scrollHeight) {
            overflow = getComputedStyle(e, "").getPropertyValue("overflow");
            if (overflow === "scroll" || overflow === "auto") {
               return ssc_setCache(t, e)
            }
         }
      } while (e = e.parentNode)
   }
   function ssc_addEvent(e, t, n) {
      window.addEventListener(e, t, n || false)
   }
   function ssc_removeEvent(e, t, n) {
      window.removeEventListener(e, t, n || false)
   }
   function ssc_isNodeName(e, t) {
      return e.nodeName.toLowerCase() === t.toLowerCase()
   }
   function ssc_directionCheck(e, t) {
      e = e > 0 ? 1 : -1;
      t = t > 0 ? 1 : -1;
      if (ssc_direction.x !== e || ssc_direction.y !== t) {
         ssc_direction.x = e;
         ssc_direction.y = t;
         ssc_que = []
      }
   }
   function ssc_pulse_(e) {
      var t, n, r;
      e = e * ssc_pulseScale;
      if (e < 1) {
         t = e - (1 - Math.exp(-e))
      } else {
         n = Math.exp(-1);
         e -= 1;
         r = 1 - Math.exp(-e);
         t = n + r * (1 - n)
      }
      return t * ssc_pulseNormalize
   }
   function ssc_pulse(e) {
      if (e >= 1)
         return 1;
      if (e <= 0)
         return 0;
      if (ssc_pulseNormalize == 1) {
         ssc_pulseNormalize /= ssc_pulse_(1)
      }
      return ssc_pulse_(e)
   }
   var ssc_framerate = 150;
   var ssc_animtime = 500;
   var ssc_stepsize = 150;
   var ssc_pulseAlgorithm = true;
   var ssc_pulseScale = 6;
   var ssc_pulseNormalize = 1;
   var ssc_keyboardsupport = true;
   var ssc_arrowscroll = 50;
   var ssc_frame = false;
   var ssc_direction = {x: 0, y: 0};
   var ssc_initdone = false;
   var ssc_fixedback = true;
   var ssc_root = document.documentElement;
   var ssc_activeElement;
   var ssc_key = {left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36};
   var ssc_que = [];
   var ssc_pending = false;
   var ssc_cache = {};
   setInterval(function() {
      ssc_cache = {}
   }, 10 * 1e3);
   var ssc_uniqueID = function() {
      var e = 0;
      return function(t) {
         return t.ssc_uniqueID || (t.ssc_uniqueID = e++)
      }
   }();
   var ischrome = /chrome/.test(navigator.userAgent.toLowerCase());
   if (ischrome) {
      ssc_addEvent("mousedown", ssc_mousedown);
      ssc_addEvent("mousewheel", ssc_wheel);
      ssc_addEvent("load", ssc_init)
   }
}




!function(t) {
   var o = 0;
   t.fn.scrolled = function(a, n) {
      "function" == typeof a && (n = a, a = 300);
      var c = "scrollTimer" + o++;
      this.scroll(function() {
         var o = t(this), e = o.data(c);
         e && clearTimeout(e), e = setTimeout(function() {
            o.removeData(c), n.call(o[0])
         }, a), o.data(c, e)
      })
   }
}(jQuery);




/*
 * Copyright (C) 2009 Joel Sutherland
 * Licenced under the MIT license
 * https://www.newmediacampaigns.com/page/jquery-flickr-plugin
 *
 * Available tags for templates:
 * title, link, date_taken, description, published, author, author_id, tags, image*
 */
(function($) {
   $.fn.jflickrfeed = function(settings, callback) {
      settings = $.extend(true, {flickrbase: 'https://api.flickr.com/services/feeds/', feedapi: 'photos_public.gne', limit: 20, qstrings: {lang: 'en-us', format: 'json', jsoncallback: '?'}, cleanDescription: true, useTemplate: true, itemTemplate: '', itemCallback: function() {
         }}, settings);
      var url = settings.flickrbase + settings.feedapi + '?';
      var first = true;
      for (var key in settings.qstrings) {
         if (!first)
            url += '&';
         url += key + '=' + settings.qstrings[key];
         first = false;
      }
      return $(this).each(function() {
         var $container = $(this);
         var container = this;
         $.getJSON(url, function(data) {
            $.each(data.items, function(i, item) {
               if (i < settings.limit) {
                  if (settings.cleanDescription) {
                     var regex = /<p>(.*?)<\/p>/g;
                     var input = item.description;
                     if (regex.test(input)) {
                        item.description = input.match(regex)[2]
                        if (item.description != undefined)
                           item.description = item.description.replace('<p>', '').replace('</p>', '');
                     }
                  }
                  item['image_s'] = item.media.m.replace('_m', '_s');
                  item['image_t'] = item.media.m.replace('_m', '_t');
                  item['image_m'] = item.media.m.replace('_m', '_m');
                  item['image'] = item.media.m.replace('_m', '');
                  item['image_b'] = item.media.m.replace('_m', '_b');
                  delete item.media;
                  if (settings.useTemplate) {
                     var template = settings.itemTemplate;
                     for (var key in item) {
                        var rgx = new RegExp('{{' + key + '}}', 'g');
                        template = template.replace(rgx, item[key]);
                     }
                     $container.append(template)
                  }
                  settings.itemCallback.call(container, item);
               }
            });
            if ($.isFunction(callback)) {
               callback.call(container, data);
            }
         });
      });
   }
})(jQuery);




/*!
 * jQuery - Spectragram by Adrian Quevedo
 * https://adrianquevedo.com/  - https://lab.adrianquevedo.com/ - https://elnucleo.com.co/
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * You are free to use this plugin in commercial projects as long as the copyright header is left intact.
 *
 * This plugin uses the Instagram(tm) API and is not endorsed or certified by Instagram or Burbn, inc.
 * All Instagram(tm) logos and trademarks displayed on this plugin are property of Burbn, Inc.
 *
 * Date: Thu Jul 15 14:05:02 2012 -0500
 */

if (typeof Object.create !== 'function') {
   Object.create = function(obj) {
      function F() {
      }
      ;
      F.prototype = obj;
      return new F()
   }
}
(function($, window, document, undefined) {
   var Instagram = {init: function(options, elem) {
         var self = this;
         self.elem = elem;
         self.$elem = $(elem);
         self.api = 'https://api.instagram.com/v1', self.accessData = $.fn.spectragram.accessData, self.options = $.extend({}, $.fn.spectragram.options, options)
      }, getRecentMedia: function(userID) {
         var self = this, getData = '/users/' + userID + '/media/recent/?' + self.accessData.clientID + '&access_token=' + self.accessData.accessToken + '';
         self.fetch(getData).done(function(results) {
            self.display(results)
         })
      }, getUserFeed: function() {
         var self = this, getData = '/users/search?q=' + self.options.query + '&count=' + self.options.max + '&client_id=' + self.accessData.clientID + '';
         self.fetch(getData).done(function(results) {
            if (results.data.length) {
               self.getRecentMedia(results.data[0].id)
            } else {
               $.error('Spectagram.js - Error: the username ' + self.options.query + ' does not exist.')
            }
         })
      }, getPopular: function() {
         var self = this, getData = '/media/popular?client_id=' + self.accessData.clientID + '&access_token=' + self.accessData.accessToken + '';
         self.fetch(getData).done(function(results) {
            self.display(results)
         })
      }, getRecentTagged: function() {
         var self = this, getData = '/tags/' + self.options.query + '/media/recent?client_id=' + self.accessData.clientID + '&access_token=' + self.accessData.accessToken + '';
         self.fetch(getData).done(function(results) {
            if (results.data.length) {
               self.display(results)
            } else {
               $.error('Spectagram.js - Error: the tag ' + self.options.query + ' does not have results.')
            }
         })
      }, fetch: function(getData) {
         var self = this, getUrl = self.api + getData;
         return $.ajax({type: "GET", dataType: "jsonp", cache: false, url: getUrl})
      }, display: function(results) {
         var self = this, setSize = self.options.size, size, max = (self.options.max >= results.data.length) ? results.data.length : self.options.max;
         if (results.data.length === 0) {
            self.$elem.append($(self.options.wrapEachWith).append(self.options.notFoundMsg))
         } else {
            for (var i = 0; i < max; i++) {
               if (setSize == "small") {
                  size = results.data[i].images.thumbnail.url
               } else if (setSize == "medium") {
                  size = results.data[i].images.low_resolution.url
               } else {
                  size = results.data[i].images.standard_resolution.url
               }
               self.$elem.append("<a target='_blank' href='" + results.data[i].link + "'><img src='" + size + "'></img></a>")
            }
         }
      }};
   jQuery.fn.spectragram = function(method, options) {
      if (jQuery.fn.spectragram.accessData.clientID) {
         this.each(function() {
            var instagram = Object.create(Instagram);
            instagram.init(options, this);
            if (instagram[method]) {
               return instagram[method](this)
            } else {
               $.error('Method ' + method + ' does not exist on jQuery.spectragram')
            }
         })
      } else {
         $.error('You must define an accessToken and a clientID on jQuery.spectragram')
      }
   };
   jQuery.fn.spectragram.options = {max: 10, query: 'coffee', size: 'medium', wrapEachWith: '<li></li>'};
   jQuery.fn.spectragram.accessData = {accessToken: null, clientID: null}
})(jQuery, window, document);




/**
 * jQuery Plugin - Jribbble v@VERSION
 * A jQuery plugin to fetch shot and player data from the Dribbble API,
 * https://dribbble.com/api
 *
 * Copyright (c) 2011 Tyler Gaw
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *
 * Date: @DATE
 *
 */

(function($) {
   'use strict';

   // @return OBJ
   $.fn.jribbble = function() {

      // Make a request to the API
      // @param STRING url
      // @param FUNCTION callback
      // @param OBJ OPTIONAL options
      this.makeRequest = function(url, callback, options) {
         var successHandler = function(data) {
            if ($.isFunction(callback)) {
               callback(data);
            }
         },
                 // Catch any double '/' that may be caused by our pathname storage
                 cleanURL = url.replace('//', '/');

         $.ajax({
            data: options,
            dataType: 'jsonp',
            success: successHandler,
            type: 'GET',
            url: $.jribbble.baseUrl + cleanURL
         });
      };

      // Returning "this", allows this plugin to be chainable
      return this;
   };

   // Create a public object for jribbble
   $.jribbble = {};

   // Public Static Members
   // Can be set globally for all jquery.jribbble requests

   // @member STRING baseUrl - Will be prepended to all API requests
   $.jribbble.baseUrl = 'https://api.dribbble.com';

   // @member OBJ paths - Pathnames to resourses
   $.jribbble.paths = {
      shots: '/shots/',
      rebounds: '/rebounds/',
      following: '/following/',
      players: '/players/',
      followers: '/followers/',
      draftees: '/draftees/',
      comments: '/comments/',
      likes: '/likes/'
   };

   // Public Static Methods
   // These are available at any time, you do not have to
   // instantiate the jribbble plugin on an element to use

   // Retrieve the shot specified by shotId
   // @param INT shotId - The id of the shot you want.
   // @param FUNCTION callback - Function that will be called once the
   //                            request has successfully completed. The data
   //                            from the request will be passed to the callback
   $.jribbble.getShotById = function(shotId, callback) {
      var resource = $.jribbble.paths.shots + shotId;
      $.fn.jribbble().makeRequest(resource, callback);
   };

   // Retrieve the rebounds of a shot specified by shotId
   // @param INT shotId - The id of the shot you want rebounds for.
   // @param FUNCTION callback - Function that will be called once the
   //                            request has successfully completed. The data
   //                            from the request will be passed to the callback
   // @param OBJ OPTIONAL pagingOpts - { page: 1, per_page: 15 }
   //                                  @see https://dribbble.com/api#pagination
   $.jribbble.getReboundsOfShot = function(shotId, callback, pagingOpts) {
      var resource = $.jribbble.paths.shots + shotId + $.jribbble.paths.rebounds;
      $.fn.jribbble().makeRequest(resource, callback, pagingOpts);
   };

   // @param STRING listName - One of the following: 'debuts', 'everyone', 'popular'
   // @param FUNCTION callback  - Function that will be called once the
   //                             request has successfully completed. The data
   //                             from the request will be passed to the callback
   // @param OBJ OPTIONAL pagingOpts - { page: 1, per_page: 15 }
   //                                  @see https://dribbble.com/api#pagination
   $.jribbble.getShotsByList = function(listName, callback, pagingOpts) {
      var resource = $.jribbble.paths.shots + listName;
      $.fn.jribbble().makeRequest(resource, callback, pagingOpts);
   };

   // Retrieve the most recent shots for the player specified by playerId
   // @param STRING | INT playerId - Can be 'username' or 2318
   // @param FUNCTION callback - Function that will be called once the
   //                            request has successfully completed. The data
   //                            from the request will be passed to the callback.
   // @param OBJ OPTIONAL pagingOpts - { page: 1, per_page: 15 }
   //                                  @see https://dribbble.com/api#pagination
   $.jribbble.getShotsByPlayerId = function(playerId, callback, pagingOpts) {
      var resource = $.jribbble.paths.players + playerId + $.jribbble.paths.shots;
      $.fn.jribbble().makeRequest(resource, callback, pagingOpts);
   };

   // Retrieve the most recent shots published by those the player, specified by playerId, follows
   // @param STRING | INT playerId - Can be 'username' or 2318
   // @param FUNCTION callback - Function that will be called once the
   //                            request has successfully completed. The data
   //                            from the request will be passed to the callback.
   // @param OBJ OPTIONAL pagingOpts - { page: 1, per_page: 15 }
   //                                  @see https://dribbble.com/api#pagination
   $.jribbble.getShotsThatPlayerFollows = function(playerId, callback, pagingOpts) {
      var resource = $.jribbble.paths.players + playerId + $.jribbble.paths.shots + $.jribbble.paths.following;
      $.fn.jribbble().makeRequest(resource, callback, pagingOpts);
   };

   // Retrieve profile details for the player specified by playerId
   // @param STRING | INT playerId - Can be 'username' or 2318
   // @param FUNCTION callback - Function that will be called once the
   //                            request has successfully completed. The data
   //                            from the request will be passed to the callback.
   $.jribbble.getPlayerById = function(playerId, callback) {
      var resource = $.jribbble.paths.players + playerId;
      $.fn.jribbble().makeRequest(resource, callback);
   };

   // Retrieve followers of a player by the playerId
   // @param STRING | INT playerId - Can be 'username' or 2318
   // @param FUNCTION callback - Function that will be called once the
   //                            request has successfully completed. The data
   //                            from the request will be passed to the callback.
   $.jribbble.getPlayerFollowers = function(playerId, callback, pagingOpts) {
      var resource = $.jribbble.paths.players + playerId + $.jribbble.paths.followers;
      $.fn.jribbble().makeRequest(resource, callback, pagingOpts);
   };

   // Retrieve the list of players that are following playerId
   // @param STRING | INT playerId - Can be 'username' or 2318
   // @param FUNCTION callback - Function that will be called once the
   //                            request has successfully completed. The data
   //                            from the request will be passed to the callback.
   $.jribbble.getPlayerFollowing = function(playerId, callback, pagingOpts) {
      var resource = $.jribbble.paths.players + playerId + $.jribbble.paths.following;
      $.fn.jribbble().makeRequest(resource, callback, pagingOpts);
   };

   // Retrieve the list of players drafted by the playerId
   // @param STRING | INT playerId - Can be 'username' or 2318
   // @param FUNCTION callback - Function that will be called once the
   //                            request has successfully completed. The data
   //                            from the request will be passed to the callback.
   $.jribbble.getPlayerDraftees = function(playerId, callback, pagingOpts) {
      var resource = $.jribbble.paths.players + playerId + $.jribbble.paths.draftees;
      $.fn.jribbble().makeRequest(resource, callback, pagingOpts);
   };

   // Retrieve the set of comments for the shot specified by shotId
   // @param INT shotId - The id of the shot you want comments for.
   // @param FUNCTION callback - Function that will be called once the
   //                            request has successfully completed. The data
   //                            from the request will be passed to the callback.
   // @param OBJ OPTIONAL pagingOpts - { page: 1, per_page: 15 }
   //                                  @see https://dribbble.com/api#pagination
   $.jribbble.getCommentsOfShot = function(shotId, callback, pagingOpts) {
      var resource = $.jribbble.paths.shots + shotId + $.jribbble.paths.comments;
      $.fn.jribbble().makeRequest(resource, callback, pagingOpts);
   };

   // Retrieve the set of likes of the player specified by playerID
   // @param INT playerId - The id of the player whose likes you want
   // @param FUNCTION callback - Function that will be called once the
   //                            request has successfully completed. The data
   //                            from the request will be passed to the callback.
   // @param OBJ OPTIONAL pagingOpts - { page: 1, per_page: 15 }
   //                                  @see https://dribbble.com/api#pagination
   $.jribbble.getShotsThatPlayerLikes = function(playerId, callback, pagingOpts) {
      var resource = $.jribbble.paths.players + playerId + $.jribbble.paths.shots + $.jribbble.paths.likes;
      $.fn.jribbble().makeRequest(resource, callback, pagingOpts);
   };

}(jQuery));




// jquery.mb.YTPlayer v2.7.2

function onYouTubePlayerAPIReady() {
   ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}
var ytp = ytp || {};
!function(jQuery, ytp) {
   var nAgt = navigator.userAgent;
   if (!jQuery.browser) {
      jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.msie = !1, jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
      var nameOffset, verOffset, ix;
      if (-1 != (verOffset = nAgt.indexOf("Opera")))
         jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
      else if (-1 != (verOffset = nAgt.indexOf("MSIE")))
         jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
      else if (-1 != nAgt.indexOf("Trident")) {
         jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
         var start = nAgt.indexOf("rv:") + 3, end = start + 4;
         jQuery.browser.fullVersion = nAgt.substring(start, end)
      } else
         -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
      -1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion
   }
   jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, ytp.isDevice = jQuery.browser.mobile, jQuery.fn.CSSAnimate = function(e, r, t, a, o) {
      function n(e) {
         return e.replace(/([A-Z])/g, function(e) {
            return"-" + e.toLowerCase()
         })
      }
      function i(e, r) {
         return"string" != typeof e || e.match(/^[\-0-9\.]+$/) ? "" + e + r : e
      }
      return jQuery.support.CSStransition = function() {
         var e = (document.body || document.documentElement).style;
         return void 0 !== e.transition || void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.MsTransition || void 0 !== e.OTransition
      }(), this.each(function() {
         var l = this, s = jQuery(this);
         l.id = l.id || "CSSA_" + (new Date).getTime();
         var y = y || {type: "noEvent"};
         if (l.CSSAIsRunning && l.eventType == y.type)
            l.CSSqueue = function() {
               s.CSSAnimate(e, r, t, a, o)
            };
         else if (l.CSSqueue = null, l.eventType = y.type, 0 !== s.length && e) {
            if (l.CSSAIsRunning = !0, "function" == typeof r && (o = r, r = jQuery.fx.speeds._default), "function" == typeof t && (o = t, t = 0), "function" == typeof a && (o = a, a = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof r)
               for (var u in jQuery.fx.speeds) {
                  if (r == u) {
                     r = jQuery.fx.speeds[u];
                     break
                  }
                  r = jQuery.fx.speeds._default
               }
            if (r || (r = jQuery.fx.speeds._default), jQuery.support.CSStransition) {
               y = {"default": "ease", "in": "ease-in", out: "ease-out", "in-out": "ease-in-out", snap: "cubic-bezier(0,1,.5,1)", easeOutCubic: "cubic-bezier(.215,.61,.355,1)", easeInOutCubic: "cubic-bezier(.645,.045,.355,1)", easeInCirc: "cubic-bezier(.6,.04,.98,.335)", easeOutCirc: "cubic-bezier(.075,.82,.165,1)", easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)", easeInExpo: "cubic-bezier(.95,.05,.795,.035)", easeOutExpo: "cubic-bezier(.19,1,.22,1)", easeInOutExpo: "cubic-bezier(1,0,0,1)", easeInQuad: "cubic-bezier(.55,.085,.68,.53)", easeOutQuad: "cubic-bezier(.25,.46,.45,.94)", easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)", easeInQuart: "cubic-bezier(.895,.03,.685,.22)", easeOutQuart: "cubic-bezier(.165,.84,.44,1)", easeInOutQuart: "cubic-bezier(.77,0,.175,1)", easeInQuint: "cubic-bezier(.755,.05,.855,.06)", easeOutQuint: "cubic-bezier(.23,1,.32,1)", easeInOutQuint: "cubic-bezier(.86,0,.07,1)", easeInSine: "cubic-bezier(.47,0,.745,.715)", easeOutSine: "cubic-bezier(.39,.575,.565,1)", easeInOutSine: "cubic-bezier(.445,.05,.55,.95)", easeInBack: "cubic-bezier(.6,-.28,.735,.045)", easeOutBack: "cubic-bezier(.175, .885,.32,1.275)", easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"}, y[a] && (a = y[a]);
               var p = "", d = "transitionEnd";
               jQuery.browser.webkit ? (p = "-webkit-", d = "webkitTransitionEnd") : jQuery.browser.mozilla ? (p = "-moz-", d = "transitionend") : jQuery.browser.opera ? (p = "-o-", d = "otransitionend") : jQuery.browser.msie && (p = "-ms-", d = "msTransitionEnd"), y = [];
               for (c in e)
                  u = c, "transform" === u && (u = p + "transform", e[u] = e[c], delete e[c]), "filter" === u && (u = p + "filter", e[u] = e[c], delete e[c]), ("transform-origin" === u || "origin" === u) && (u = p + "transform-origin", e[u] = e[c], delete e[c]), "x" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " translateX(" + i(e[c], "px") + ")", delete e[c]), "y" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " translateY(" + i(e[c], "px") + ")", delete e[c]), "z" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " translateZ(" + i(e[c], "px") + ")", delete e[c]), "rotate" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " rotate(" + i(e[c], "deg") + ")", delete e[c]), "rotateX" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " rotateX(" + i(e[c], "deg") + ")", delete e[c]), "rotateY" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " rotateY(" + i(e[c], "deg") + ")", delete e[c]), "rotateZ" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " rotateZ(" + i(e[c], "deg") + ")", delete e[c]), "scale" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " scale(" + i(e[c], "") + ")", delete e[c]), "scaleX" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " scaleX(" + i(e[c], "") + ")", delete e[c]), "scaleY" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " scaleY(" + i(e[c], "") + ")", delete e[c]), "scaleZ" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " scaleZ(" + i(e[c], "") + ")", delete e[c]), "skew" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " skew(" + i(e[c], "deg") + ")", delete e[c]), "skewX" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " skewX(" + i(e[c], "deg") + ")", delete e[c]), "skewY" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " skewY(" + i(e[c], "deg") + ")", delete e[c]), "perspective" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " perspective(" + i(e[c], "px") + ")", delete e[c]), 0 > y.indexOf(u) && y.push(n(u));
               var c = y.join(","), T = function() {
                  s.off(d + "." + l.id), clearTimeout(l.timeout), s.css(p + "transition", ""), "function" == typeof o && o(s), l.called = !0, l.CSSAIsRunning = !1, "function" == typeof l.CSSqueue && (l.CSSqueue(), l.CSSqueue = null)
               }, P = {};
               jQuery.extend(P, e), P[p + "transition-property"] = c, P[p + "transition-duration"] = r + "ms", P[p + "transition-delay"] = t + "ms", P[p + "transition-style"] = "preserve-3d", P[p + "transition-timing-function"] = a, setTimeout(function() {
                  s.one(d + "." + l.id, T), s.css(P)
               }, 1), l.timeout = setTimeout(function() {
                  s.called || !o ? (s.called = !1, l.CSSAIsRunning = !1) : (s.css(p + "transition", ""), o(s), l.CSSAIsRunning = !1, "function" == typeof l.CSSqueue && (l.CSSqueue(), l.CSSqueue = null))
               }, r + t + 100)
            } else {
               for (var c in e)
                  "transform" === c && delete e[c], "filter" === c && delete e[c], "transform-origin" === c && delete e[c], "auto" === e[c] && delete e[c];
               o && "string" != typeof o || (o = "linear"), s.animate(e, r, o)
            }
         }
      })
   };
   var getYTPVideoID = function(e) {
      var r;
      return r = "https://youtu.be/" == e.substr(0, 16) ? e.replace("https://youtu.be/", "") : "https://youtu.be/" == e.substr(0, 17) ? e.replace("https://youtu.be/", "") : e.indexOf("http") > -1 ? e.match(/[\\?&]v=([^&#]*)/)[1] : e
   };
   jQuery.mbYTPlayer = {name: "jquery.mb.YTPlayer", version: "2.7.2", author: "Matteo Bicocchi", defaults: {containment: "body", ratio: "16/9", videoURL: null, startAt: 0, stopAt: 0, autoPlay: !0, vol: 100, addRaster: !1, opacity: 1, quality: "default", mute: !1, loop: !0, showControls: !0, showAnnotations: !1, showYTLogo: !0, stopMovieOnClick: !1, realfullscreen: !0, gaTrack: !0, onReady: function() {
         }, onStateChange: function() {
         }, onPlaybackQualityChange: function() {
         }, onError: function() {
         }}, controls: {play: "P", pause: "p", mute: "M", unmute: "A", onlyYT: "O", showSite: "R", ytLogo: "Y"}, rasterImg: "images/raster.png", rasterImgRetina: "images/raster@2x.png", locationProtocol: "https:", buildPlayer: function(options) {
         return this.each(function() {
            var YTPlayer = this, $YTPlayer = jQuery(YTPlayer);
            YTPlayer.loop = 0, YTPlayer.opt = {}, $YTPlayer.addClass("mb_YTVPlayer");
            var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
            "undefined" != typeof property && "undefined" != typeof property.vol && (property.vol = 0 == property.vol ? property.vol = 1 : property.vol), jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property);
            var canGoFullscreen = !(jQuery.browser.msie || jQuery.browser.opera || self.location.href != top.location.href);
            canGoFullscreen || (YTPlayer.opt.realfullscreen = !1), $YTPlayer.attr("id") || $YTPlayer.attr("id", "YTP_" + (new Date).getTime()), YTPlayer.opt.id = YTPlayer.id, YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0;
            var playerID = "mbYTP_" + YTPlayer.id, videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL) : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")) : !1;
            YTPlayer.videoID = videoID, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";
            var playerVars = {autoplay: 0, modestbranding: 1, controls: 0, showinfo: 0, rel: 0, enablejsapi: 1, version: 3, playerapiid: playerID, origin: "*", allowfullscreen: !0, wmode: "transparent", iv_load_policy: YTPlayer.opt.showAnnotations}, canPlayHTML5 = !1, v = document.createElement("video");
            v.canPlayType && (canPlayHTML5 = !0), canPlayHTML5 && jQuery.extend(playerVars, {html5: 1}), jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1);
            var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox"), overlay = jQuery("<div/>").css({position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}).addClass("YTPOverlay");
            if (YTPlayer.isSelf = "self" == YTPlayer.opt.containment, YTPlayer.opt.containment = jQuery("self" == YTPlayer.opt.containment ? this : YTPlayer.opt.containment), YTPlayer.isBackground = "body" == YTPlayer.opt.containment.get(0).tagName.toLowerCase(), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
               if (YTPlayer.opt.containment.is(jQuery(this)) ? YTPlayer.isPlayer = !0 : $YTPlayer.hide(), ytp.isDevice && YTPlayer.isBackground)
                  return void $YTPlayer.remove();
               if (YTPlayer.opt.addRaster) {
                  var classN = "dot" == YTPlayer.opt.addRaster ? "raster-dot" : "raster", retina = window.retina || window.devicePixelRatio > 1;
                  overlay.addClass(retina ? classN + " retina" : classN)
               } else
                  overlay.removeClass(function(e, r) {
                     var t = r.split(" "), a = [];
                     return jQuery.each(t, function(e, r) {
                        /raster-.*/.test(r) && a.push(r)
                     }), a.push("retina"), a.join(" ")
                  });
               var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
               if (wrapper.css({position: "absolute", zIndex: 0, minWidth: "100%", minHeight: "100%", left: 0, top: 0, overflow: "hidden", opacity: 0}), playerBox.css({position: "absolute", zIndex: 0, width: "100%", height: "100%", top: 0, left: 0, overflow: "hidden", opacity: this.opt.opacity}), wrapper.append(playerBox), YTPlayer.opt.containment.children().not("script, style").each(function() {
                  "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
               }), YTPlayer.isBackground ? (jQuery("body").css({position: "absolute", minWidth: "100%", minHeight: "100%", zIndex: 1, boxSizing: "border-box"}), wrapper.css({position: "fixed", top: 0, left: 0, zIndex: 0, webkitTransform: "translateZ(0)"}), $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({position: "relative"}), YTPlayer.opt.containment.prepend(wrapper), YTPlayer.wrapper = wrapper, playerBox.css({opacity: 1}), ytp.isDevice || (playerBox.after(overlay), YTPlayer.overlay = overlay), YTPlayer.isBackground || overlay.on("mouseenter", function() {
                  $YTPlayer.find(".mb_YTVPBar").addClass("visible")
               }).on("mouseleave", function() {
                  $YTPlayer.find(".mb_YTVPBar").removeClass("visible")
               }), ytp.YTAPIReady)
                  setTimeout(function() {
                     jQuery(document).trigger("YTAPIReady")
                  }, 100);
               else {
                  jQuery("#YTAPI").remove();
                  var tag = jQuery("<script></script>").attr({src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/player_api?v=" + jQuery.mbYTPlayer.version, id: "YTAPI"});
                  jQuery("head title").after(tag)
               }
               jQuery(document).on("YTAPIReady", function() {
                  YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && YTPlayer.opt.stopMovieOnClick && jQuery(document).off("mousedown.ytplayer").on("mousedown,.ytplayer", function(e) {
                     var r = jQuery(e.target);
                     (r.is("a") || r.parents().is("a")) && $YTPlayer.pauseYTP()
                  }), YTPlayer.isBackground && (ytp.backgroundIsInited = !0), YTPlayer.opt.autoPlay = "undefined" == typeof YTPlayer.opt.autoPlay ? YTPlayer.isBackground ? !0 : !1 : YTPlayer.opt.autoPlay, YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100, jQuery.mbYTPlayer.getDataFromFeed(YTPlayer.videoID, YTPlayer), jQuery(YTPlayer).on("YTPChanged", function() {
                     return YTPlayer.isInit ? void 0 : (YTPlayer.isInit = !0, ytp.isDevice && !YTPlayer.isBackground ? void new YT.Player(playerID, {videoId: YTPlayer.videoID.toString(), height: "100%", width: "100%", videoId:YTPlayer.videoID, events: {onReady: function(e) {
                              YTPlayer.player = e.target, playerBox.css({opacity: 1}), YTPlayer.wrapper.css({opacity: YTPlayer.opt.opacity}), $YTPlayer.optimizeDisplay()
                           }, onStateChange: function() {
                           }}}) : void new YT.Player(playerID, {videoId: YTPlayer.videoID.toString(), playerVars: playerVars, events: {onReady: function(e) {
                              if (YTPlayer.player = e.target, !YTPlayer.isReady) {
                                 YTPlayer.isReady = !0, YTPlayer.playerEl = YTPlayer.player.getIframe(), $YTPlayer.optimizeDisplay(), YTPlayer.videoID = videoID, jQuery(window).on("resize.YTP", function() {
                                    $YTPlayer.optimizeDisplay()
                                 }), YTPlayer.opt.showControls && jQuery(YTPlayer).buildYTPControls();
                                 var r = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
                                 YTPlayer.player.setVolume(0), jQuery(YTPlayer).muteYTPVolume(), jQuery.mbYTPlayer.checkForState(YTPlayer), YTPlayer.checkForStartAt = setInterval(function() {
                                    var e = YTPlayer.player.getVideoLoadedFraction() > r / YTPlayer.player.getDuration();
                                    YTPlayer.player.getDuration() > 0 && YTPlayer.player.getCurrentTime() >= r && e ? (clearInterval(YTPlayer.checkForStartAt), YTPlayer.player.setVolume(0), jQuery(YTPlayer).muteYTPVolume(), "function" == typeof YTPlayer.opt.onReady && YTPlayer.opt.onReady($YTPlayer), YTPlayer.opt.mute || jQuery(YTPlayer).unmuteYTPVolume(), jQuery.mbYTPlayer.checkForState(YTPlayer), YTPlayer.player.pauseVideo(), setTimeout(function() {
                                       YTPlayer.opt.autoPlay ? ($YTPlayer.playYTP(), $YTPlayer.css("background-image", "none")) : YTPlayer.player.pauseVideo(), YTPlayer.wrapper.CSSAnimate({opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity}, 2e3)
                                    }, 100)) : (YTPlayer.player.playVideo(), YTPlayer.player.seekTo(r, !0))
                                 }, jQuery.browser.chrome ? 1e3 : 1)
                              }
                           }, onStateChange: function(event) {
                              if ("function" == typeof event.target.getPlayerState) {
                                 var state = event.target.getPlayerState();
                                 "function" == typeof YTPlayer.opt.onStateChange && YTPlayer.opt.onStateChange($YTPlayer, state);
                                 var controls = jQuery("#controlBar_" + YTPlayer.id), data = YTPlayer.opt;
                                 if (0 == state) {
                                    if (YTPlayer.state == state)
                                       return;
                                    YTPlayer.state = state, YTPlayer.player.pauseVideo();
                                    var startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
                                    data.loop ? (YTPlayer.wrapper.css({opacity: 0}), $YTPlayer.playYTP(), YTPlayer.player.seekTo(startAt, !0)) : YTPlayer.isBackground || (YTPlayer.player.seekTo(startAt, !0), $YTPlayer.playYTP(), setTimeout(function() {
                                       $YTPlayer.pauseYTP()
                                    }, 10)), !data.loop && YTPlayer.isBackground ? YTPlayer.wrapper.CSSAnimate({opacity: 0}, 2e3) : data.loop && (YTPlayer.wrapper.css({opacity: 0}), YTPlayer.loop++), controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play), jQuery(YTPlayer).trigger("YTPEnd")
                                 }
                                 if (3 == state) {
                                    if (YTPlayer.state == state)
                                       return;
                                    YTPlayer.state = state, jQuery.browser.chrome || YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play), jQuery(YTPlayer).trigger("YTPBuffering")
                                 }
                                 if (-1 == state) {
                                    if (YTPlayer.state == state)
                                       return;
                                    YTPlayer.state = state, jQuery(YTPlayer).trigger("YTPUnstarted")
                                 }
                                 if (1 == state) {
                                    if (YTPlayer.state == state)
                                       return;
                                    YTPlayer.state = state, jQuery.browser.chrome || YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.pause), jQuery(YTPlayer).trigger("YTPStart"), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.title || YTPlayer.videoID.toString()]), "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.title || YTPlayer.videoID.toString())
                                 }
                                 if (2 == state) {
                                    if (YTPlayer.state == state)
                                       return;
                                    YTPlayer.state = state, controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play), jQuery(YTPlayer).trigger("YTPPause")
                                 }
                              }
                           }, onPlaybackQualityChange: function() {
                              "function" == typeof YTPlayer.opt.onPlaybackQualityChange && YTPlayer.opt.onPlaybackQualityChange($YTPlayer)
                           }, onError: function(e) {
                              150 == e.data && (console.log("Embedding this video is restricted by Youtube."), YTPlayer.isPlayList && jQuery(YTPlayer).playNext()), 2 == e.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(), "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, e)
                           }}}))
                  }))
               })
            }
         })
      }, getDataFromFeed: function(e, r) {
         r.videoID = e, jQuery.browser.msie ? ("auto" == r.opt.ratio ? r.opt.ratio = "16/9" : r.opt.ratio, r.hasData || (r.hasData = !0, setTimeout(function() {
            jQuery(r).trigger("YTPChanged")
         }, 100))) : (jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//gdata.youtube.com/feeds/api/videos/" + e + "?v=2&alt=jsonc", function(e) {
            r.dataReceived = !0;
            var t = e.data;
            if (r.title = t.title, r.videoData = t, "auto" == r.opt.ratio && (r.opt.ratio = t.aspectRatio && "widescreen" === t.aspectRatio ? "16/9" : "4/3"), !r.hasData && (r.hasData = !0, r.isPlayer)) {
               var a = r.videoData.thumbnail.hqDefault;
               r.opt.containment.css({background: "rgba(0,0,0,0.5) url(" + a + ") center center", backgroundSize: "cover"})
            }
            jQuery(r).trigger("YTPChanged")
         }), setTimeout(function() {
            r.dataReceived || r.hasData || (r.hasData = !0, jQuery(r).trigger("YTPChanged"))
         }, 1500))
      }, getVideoID: function() {
         var e = this.get(0);
         return e.videoID || !1
      }, setVideoQuality: function(e) {
         var r = this.get(0);
         jQuery.browser.chrome || r.player.setPlaybackQuality(e)
      }, YTPlaylist: function(e, r, t) {
         var a = this.get(0);
         a.isPlayList = !0, r && (e = jQuery.shuffle(e)), a.videoID || (a.videos = e, a.videoCounter = 0, a.videoLength = e.length, jQuery(a).data("property", e[0]), jQuery(a).mb_YTPlayer()), "function" == typeof t && jQuery(a).on("YTPChanged", function() {
            t(a)
         }), jQuery(a).on("YTPEnd", function() {
            jQuery(a).playNext()
         })
      }, playNext: function() {
         var e = this.get(0);
         e.videoCounter++, e.videoCounter >= e.videoLength && (e.videoCounter = 0), jQuery(e.playerEl).css({opacity: 0}), jQuery(e).changeMovie(e.videos[e.videoCounter])
      }, playPrev: function() {
         var e = this.get(0);
         e.videoCounter--, e.videoCounter < 0 && (e.videoCounter = e.videoLength - 1), jQuery(e.playerEl).css({opacity: 0}), jQuery(e).changeMovie(e.videos[e.videoCounter])
      }, changeMovie: function(e) {
         var r = this.get(0);
         r.opt.startAt = 0, r.opt.stopAt = 0, r.opt.mute = !0, e && jQuery.extend(r.opt, e), r.videoID = getYTPVideoID(r.opt.videoURL), jQuery(r).pauseYTP();
         var t = jQuery.browser.msie ? 1e3 : 0;
         if (jQuery(r.playerEl).CSSAnimate({opacity: 0}, t), setTimeout(function() {
            var e = jQuery.browser.chrome ? "default" : r.opt.quality;
            jQuery(r).getPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + r.videoID), 1, e), jQuery(r).playYTP(), jQuery(r).one("YTPStart", function() {
               r.wrapper.CSSAnimate({opacity: r.isAlone ? 1 : r.opt.opacity}, 1e3), jQuery(r.playerEl).CSSAnimate({opacity: 1}, t), r.opt.startAt && r.player.seekTo(r.opt.startAt), jQuery.mbYTPlayer.checkForState(r), r.opt.autoPlay || jQuery(r).pauseYTP()
            }), r.opt.mute ? jQuery(r).muteYTPVolume() : jQuery(r).unmuteYTPVolume()
         }, t), r.opt.addRaster) {
            var a = window.retina || window.devicePixelRatio > 1;
            r.overlay.addClass(a ? "raster retina" : "raster")
         } else
            r.overlay.removeClass("raster"), r.overlay.removeClass("retina");
         jQuery("#controlBar_" + r.id).remove(), r.opt.showControls && jQuery(r).buildYTPControls(), jQuery.mbYTPlayer.getDataFromFeed(r.videoID, r), jQuery(r).optimizeDisplay()
      }, getPlayer: function() {
         return jQuery(this).get(0).player
      }, playerDestroy: function() {
         var e = this.get(0);
         ytp.YTAPIReady = !1, ytp.backgroundIsInited = !1, e.isInit = !1, e.videoID = null;
         var r = e.wrapper;
         r.remove(), jQuery("#controlBar_" + e.id).remove()
      }, fullscreen: function(real) {
         function RunPrefixMethod(e, r) {
            for (var t, a, o = ["webkit", "moz", "ms", "o", ""], n = 0; n < o.length && !e[t]; ) {
               if (t = r, "" == o[n] && (t = t.substr(0, 1).toLowerCase() + t.substr(1)), t = o[n] + t, a = typeof e[t], "undefined" != a)
                  return o = [o[n]], "function" == a ? e[t]() : e[t];
               n++
            }
         }
         function launchFullscreen(e) {
            RunPrefixMethod(e, "RequestFullScreen")
         }
         function cancelFullscreen() {
            (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
         }
         var YTPlayer = this.get(0);
         "undefined" == typeof real && (real = YTPlayer.opt.realfullscreen), real = eval(real);
         var controls = jQuery("#controlBar_" + YTPlayer.id), fullScreenBtn = controls.find(".mb_OnlyYT"), videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
         if (real) {
            var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
            jQuery(document).off(fullscreenchange).on(fullscreenchange, function() {
               var e = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
               e ? (jQuery(YTPlayer).setVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).setVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("fullscreen"), videoWrapper.CSSAnimate({opacity: YTPlayer.opt.opacity}, 500), videoWrapper.css({zIndex: 0}), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
            })
         }
         if (YTPlayer.isAlone)
            real ? cancelFullscreen() : (videoWrapper.CSSAnimate({opacity: YTPlayer.opt.opacity}, 500), videoWrapper.css({zIndex: 0})), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1;
         else {
            if (real) {
               var playerState = YTPlayer.player.getPlayerState();
               videoWrapper.css({opacity: 0}), videoWrapper.addClass("fullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function() {
                  videoWrapper.CSSAnimate({opacity: 1}, 1e3), YTPlayer.wrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
               }, 500)
            } else
               videoWrapper.css({zIndex: 1e4}).CSSAnimate({opacity: 1}, 1e3);
            fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0
         }
      }, playYTP: function() {
         var e = this.get(0);
         if ("undefined" != typeof e.player) {
            var r = jQuery("#controlBar_" + e.id), t = r.find(".mb_YTVPPlaypause");
            t.html(jQuery.mbYTPlayer.controls.pause), e.player.playVideo(), e.wrapper.CSSAnimate({opacity: e.isAlone ? 1 : e.opt.opacity}, 2e3), jQuery(e).on("YTPStart", function() {
               jQuery(e).css("background-image", "none")
            })
         }
      }, toggleLoops: function() {
         var e = this.get(0), r = e.opt;
         1 == r.loop ? r.loop = 0 : (r.startAt ? e.player.seekTo(r.startAt) : e.player.playVideo(), r.loop = 1)
      }, stopYTP: function() {
         var e = this.get(0), r = jQuery("#controlBar_" + e.id), t = r.find(".mb_YTVPPlaypause");
         t.html(jQuery.mbYTPlayer.controls.play), e.player.stopVideo()
      }, pauseYTP: function() {
         var e = this.get(0), r = (e.opt, jQuery("#controlBar_" + e.id)), t = r.find(".mb_YTVPPlaypause");
         t.html(jQuery.mbYTPlayer.controls.play), e.player.pauseVideo()
      }, seekToYTP: function(e) {
         var r = this.get(0);
         r.player.seekTo(e, !0)
      }, setYTPVolume: function(e) {
         var r = this.get(0);
         e || r.opt.vol || 0 != r.player.getVolume() ? !e && r.player.getVolume() > 0 || e && r.player.getVolume() == e ? jQuery(r).muteYTPVolume() : r.opt.vol = e : jQuery(r).unmuteYTPVolume(), r.player.setVolume(r.opt.vol)
      }, muteYTPVolume: function() {
         var e = this.get(0);
         e.player.mute(), e.player.setVolume(0);
         var r = jQuery("#controlBar_" + e.id), t = r.find(".mb_YTVPMuteUnmute");
         t.html(jQuery.mbYTPlayer.controls.unmute), jQuery(e).addClass("isMuted"), jQuery(e).trigger("YTPMuted")
      }, unmuteYTPVolume: function() {
         var e = this.get(0);
         e.player.unMute(), e.player.setVolume(e.opt.vol);
         var r = jQuery("#controlBar_" + e.id), t = r.find(".mb_YTVPMuteUnmute");
         t.html(jQuery.mbYTPlayer.controls.mute), jQuery(e).removeClass("isMuted"), jQuery(e).trigger("YTPUnmuted")
      }, manageYTPProgress: function() {
         var e = this.get(0), r = jQuery("#controlBar_" + e.id), t = r.find(".mb_YTVPProgress"), a = r.find(".mb_YTVPLoaded"), o = r.find(".mb_YTVTime"), n = t.outerWidth(), i = Math.floor(e.player.getCurrentTime()), l = Math.floor(e.player.getDuration()), s = i * n / l, y = 0, u = 100 * e.player.getVideoLoadedFraction();
         return a.css({left: y, width: u + "%"}), o.css({left: 0, width: s}), {totalTime: l, currentTime: i}
      }, buildYTPControls: function() {
         var YTPlayer = this.get(0), data = YTPlayer.opt;
         if (data.showYTLogo = data.showYTLogo || data.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
            var controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTVPBar").css({whiteSpace: "noWrap", position: YTPlayer.isBackground ? "fixed" : "absolute", zIndex: YTPlayer.isBackground ? 1e4 : 1e3}).hide(), buttonBar = jQuery("<div/>").addClass("buttonBar"), playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTVPPlaypause ytpicon").click(function() {
               1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).pauseYTP() : jQuery(YTPlayer).playYTP()
            }), MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTVPMuteUnmute ytpicon").click(function() {
               0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).unmuteYTPVolume() : jQuery(YTPlayer).muteYTPVolume()
            }), idx = jQuery("<span/>").addClass("mb_YTVPTime"), vURL = data.videoURL ? data.videoURL : "";
            vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);
            var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTVPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
               window.open(vURL, "viewOnYT")
            }), onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function() {
               jQuery(YTPlayer).fullscreen(data.realfullscreen)
            }), progressBar = jQuery("<div/>").addClass("mb_YTVPProgress").css("position", "absolute").click(function(e) {
               timeBar.css({width: e.clientX - timeBar.offset().left}), YTPlayer.timeW = e.clientX - timeBar.offset().left, controlBar.find(".mb_YTVPLoaded").css({width: 0});
               var r = Math.floor(YTPlayer.player.getDuration());
               YTPlayer.goto = timeBar.outerWidth() * r / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), !0), controlBar.find(".mb_YTVPLoaded").css({width: 0})
            }), loadedBar = jQuery("<div/>").addClass("mb_YTVPLoaded").css("position", "absolute"), timeBar = jQuery("<div/>").addClass("mb_YTVTime").css("position", "absolute");
            progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(idx), data.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(controlBar) : (controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(controlBar)), controlBar.fadeIn()
         }
      }, checkForState: function(e) {
         var r = e.opt.showControls ? 10 : 1e3;
         clearInterval(e.getState), e.getState = setInterval(function() {
            var r = jQuery(e).manageYTPProgress(), t = jQuery(e), a = jQuery("#controlBar_" + e.id), o = e.opt, n = e.opt.startAt ? e.opt.startAt : 1, i = e.opt.stopAt > e.opt.startAt ? e.opt.stopAt : 0;
            if (i = i < e.player.getDuration() ? i : 0, 0 == e.player.getVolume() ? t.addClass("isMuted") : t.removeClass("isMuted"), e.opt.showControls && a.find(".mb_YTVPTime").html(r.totalTime ? jQuery.mbYTPlayer.formatTime(r.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(r.totalTime) : "-- : -- / -- : --"), document.hasFocus() ? document.hasFocus() && !e.hasFocus && (e.hasFocus = !0, t.playYTP()) : (e.hasFocus = !1, t.pauseYTP()), 1 == e.player.getPlayerState() && (parseFloat(e.player.getDuration() - 3) < e.player.getCurrentTime() || i > 0 && parseFloat(e.player.getCurrentTime()) > i)) {
               if (e.isEnded)
                  return;
               if (e.isEnded = !0, setTimeout(function() {
                  e.isEnded = !1
               }, 2e3), e.isPlayList)
                  return clearInterval(e.getState), void jQuery(e).trigger("YTPEnd");
               o.loop ? e.player.seekTo(n, !0) : (e.player.pauseVideo(), e.wrapper.CSSAnimate({opacity: 0}, 1e3, function() {
                  if (jQuery(e).trigger("YTPEnd"), e.player.seekTo(n, !0), !e.isBackground) {
                     var r = e.videoData.thumbnail.hqDefault;
                     jQuery(e).css({background: "rgba(0,0,0,0.5) url(" + r + ") center center", backgroundSize: "cover"})
                  }
               }))
            }
         }, r)
      }, formatTime: function(e) {
         var r = Math.floor(e / 60), t = Math.floor(e - 60 * r);
         return(9 >= r ? "0" + r : r) + " : " + (9 >= t ? "0" + t : t)
      }}, jQuery.fn.toggleVolume = function() {
      var e = this.get(0);
      if (e)
         return e.player.isMuted() ? (jQuery(e).unmuteYTPVolume(), !0) : (jQuery(e).muteYTPVolume(), !1)
   }, jQuery.fn.optimizeDisplay = function() {
      var e = this.get(0), r = e.opt, t = jQuery(e.playerEl), a = {}, o = e.wrapper;
      a.width = o.outerWidth(), a.height = o.outerHeight();
      var n = 24, i = 100, l = {};
      l.width = a.width + a.width * n / 100, l.height = Math.ceil("16/9" == r.ratio ? 9 * a.width / 16 : 3 * a.width / 4), l.marginTop = -((l.height - a.height) / 2), l.marginLeft = -(a.width * (n / 2) / 100), l.height < a.height && (l.height = a.height + a.height * n / 100, l.width = Math.floor("16/9" == r.ratio ? 16 * a.height / 9 : 4 * a.height / 3), l.marginTop = -(a.height * (n / 2) / 100), l.marginLeft = -((l.width - a.width) / 2)), l.width += i, l.height += i, l.marginTop -= i / 2, l.marginLeft -= i / 2, t.css({width: l.width, height: l.height, marginTop: l.marginTop, marginLeft: l.marginLeft})
   }, jQuery.shuffle = function(e) {
      for (var r = e.slice(), t = r.length, a = t; a--; ) {
         var o = parseInt(Math.random() * t), n = r[a];
         r[a] = r[o], r[o] = n
      }
      return r
   }, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.YTPlaylist, jQuery.fn.playNext = jQuery.mbYTPlayer.playNext, jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildYTPControls, jQuery.fn.playYTP = jQuery.mbYTPlayer.playYTP, jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.stopYTP = jQuery.mbYTPlayer.stopYTP, jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pauseYTP, jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekToYTP, jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.muteYTPVolume, jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmuteYTPVolume, jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setYTPVolume, jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageYTPProgress
}(jQuery, ytp);




/*
 Easy pie chart is a jquery plugin to display simple animated pie charts for only one value
 
 Dual licensed under the MIT (https://www.opensource.org/licenses/mit-license.php)
 and GPL (https://www.opensource.org/licenses/gpl-license.php) licenses.
 
 Built on top of the jQuery library (https://jquery.com)
 
 @source: https://github.com/rendro/easy-pie-chart/
 @autor: Robert Fleischmann
 @version: 1.2.5
 
 Inspired by: https://dribbble.com/shots/631074-Simple-Pie-Charts-II?list=popular&offset=210
 Thanks to Philip Thrasher for the jquery plugin boilerplate for coffee script
 */

(function(e) {
   e.easyPieChart = function(t, n) {
      var r, i, s, o, u, a, f, l, c = this;
      this.el = t;
      this.$el = e(t);
      this.$el.data("easyPieChart", this);
      this.init = function() {
         var t, r;
         c.options = e.extend({}, e.easyPieChart.defaultOptions, n);
         t = parseInt(c.$el.data("percent"), 10);
         c.percentage = 0;
         c.canvas = e("<canvas width='" + c.options.size + "' height='" + c.options.size + "'></canvas>").get(0);
         c.$el.append(c.canvas);
         if (typeof G_vmlCanvasManager !== "undefined" && G_vmlCanvasManager !== null) {
            G_vmlCanvasManager.initElement(c.canvas)
         }
         c.ctx = c.canvas.getContext("2d");
         if (window.devicePixelRatio > 1) {
            r = window.devicePixelRatio;
            e(c.canvas).css({width: c.options.size, height: c.options.size});
            c.canvas.width *= r;
            c.canvas.height *= r;
            c.ctx.scale(r, r)
         }
         c.ctx.translate(c.options.size / 2, c.options.size / 2);
         c.ctx.rotate(c.options.rotate * Math.PI / 180);
         c.$el.addClass("easyPieChart");
         c.$el.css({width: c.options.size, height: c.options.size, lineHeight: "" + c.options.size + "px"});
         c.update(t);
         return c
      };
      this.update = function(e) {
         e = parseFloat(e) || 0;
         if (c.options.animate === false) {
            s(e)
         } else {
            if (c.options.delay) {
               i(c.percentage, 0);
               setTimeout(function() {
                  return i(c.percentage, e)
               }, c.options.delay)
            } else {
               i(c.percentage, e)
            }
         }
         return c
      };
      f = function() {
         var e, t, n;
         c.ctx.fillStyle = c.options.scaleColor;
         c.ctx.lineWidth = 1;
         n = [];
         for (e = t = 0; t <= 24; e = ++t) {
            n.push(r(e))
         }
         return n
      };
      r = function(e) {
         var t;
         t = e % 6 === 0 ? 0 : c.options.size * .017;
         c.ctx.save();
         c.ctx.rotate(e * Math.PI / 12);
         c.ctx.fillRect(c.options.size / 2 - t, 0, -c.options.size * .05 + t, 1);
         c.ctx.restore()
      };
      l = function() {
         var e;
         e = c.options.size / 2 - c.options.lineWidth / 2;
         if (c.options.scaleColor !== false) {
            e -= c.options.size * .08
         }
         c.ctx.beginPath();
         c.ctx.arc(0, 0, e, 0, Math.PI * 2, true);
         c.ctx.closePath();
         c.ctx.strokeStyle = c.options.trackColor;
         c.ctx.lineWidth = c.options.lineWidth;
         c.ctx.stroke()
      };
      a = function() {
         if (c.options.scaleColor !== false) {
            f()
         }
         if (c.options.trackColor !== false) {
            l()
         }
      };
      s = function(t) {
         var n;
         a();
         c.ctx.strokeStyle = e.isFunction(c.options.barColor) ? c.options.barColor(t) : c.options.barColor;
         c.ctx.lineCap = c.options.lineCap;
         c.ctx.lineWidth = c.options.lineWidth;
         n = c.options.size / 2 - c.options.lineWidth / 2;
         if (c.options.scaleColor !== false) {
            n -= c.options.size * .08
         }
         c.ctx.save();
         c.ctx.rotate(-Math.PI / 2);
         c.ctx.beginPath();
         c.ctx.arc(0, 0, n, 0, Math.PI * 2 * t / 100, false);
         c.ctx.stroke();
         c.ctx.restore()
      };
      u = function() {
         return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
            return window.setTimeout(e, 1e3 / 60)
         }
      }();
      i = function(e, t) {
         var n, r;
         c.options.onStart.call(c);
         c.percentage = t;
         Date.now || (Date.now = function() {
            return+(new Date)
         });
         r = Date.now();
         n = function() {
            var i, f;
            f = Math.min(Date.now() - r, c.options.animate);
            c.ctx.clearRect(-c.options.size / 2, -c.options.size / 2, c.options.size, c.options.size);
            a.call(c);
            i = [o(f, e, t - e, c.options.animate)];
            c.options.onStep.call(c, i);
            s.call(c, i);
            if (f >= c.options.animate) {
               return c.options.onStop.call(c, i, t)
            } else {
               return u(n)
            }
         };
         u(n)
      };
      o = function(e, t, n, r) {
         var i, s;
         i = function(e) {
            return Math.pow(e, 2)
         };
         s = function(e) {
            if (e < 1) {
               return i(e)
            } else {
               return 2 - i(e / 2 * -2 + 2)
            }
         };
         e /= r / 2;
         return n / 2 * s(e) + t
      };
      return this.init()
   };
   e.easyPieChart.defaultOptions = {barColor: "#ef1e25", trackColor: "#f2f2f2", scaleColor: "#dfe0e0", lineCap: "round", rotate: 0, size: 110, lineWidth: 3, animate: false, delay: false, onStart: e.noop, onStop: e.noop, onStep: e.noop};
   e.fn.easyPieChart = function(t) {
      return e.each(this, function(n, r) {
         var i, s;
         i = e(r);
         if (!i.data("easyPieChart")) {
            s = e.extend({}, t, i.data());
            return i.data("easyPieChart", new e.easyPieChart(r, s))
         }
      })
   };
   return void 0
})(jQuery);




/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * https://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (https://www.opensource.org/licenses/mit-license.php)
 */
(function(e) {
   e.fn.appear = function(t, n) {
      var r = e.extend({data: undefined, one: true, accX: 0, accY: 0}, n);
      return this.each(function() {
         var n = e(this);
         n.appeared = false;
         if (!t) {
            n.trigger("appear", r.data);
            return
         }
         var i = e(window);
         var s = function() {
            if (!n.is(":visible")) {
               n.appeared = false;
               return
            }
            var e = i.scrollLeft();
            var t = i.scrollTop();
            var s = n.offset();
            var o = s.left;
            var u = s.top;
            var a = r.accX;
            var f = r.accY;
            var l = n.height();
            var c = i.height();
            var h = n.width();
            var p = i.width();
            if (u + l + f >= t && u <= t + c + f && o + h + a >= e && o <= e + p + a) {
               if (!n.appeared)
                  n.trigger("appear", r.data)
            } else {
               n.appeared = false
            }
         };
         var o = function() {
            n.appeared = true;
            if (r.one) {
               i.unbind("scroll", s);
               var o = e.inArray(s, e.fn.appear.checks);
               if (o >= 0)
                  e.fn.appear.checks.splice(o, 1)
            }
            t.apply(this, arguments)
         };
         if (r.one)
            n.one("appear", r.data, o);
         else
            n.bind("appear", r.data, o);
         i.scroll(s);
         e.fn.appear.checks.push(s);
         s()
      })
   };
   e.extend(e.fn.appear, {checks: [], timeout: null, checkAll: function() {
         var t = e.fn.appear.checks.length;
         if (t > 0)
            while (t--)
               e.fn.appear.checks[t]()
      }, run: function() {
         if (e.fn.appear.timeout)
            clearTimeout(e.fn.appear.timeout);
         e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
      }});
   e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(t, n) {
      var r = e.fn[n];
      if (r) {
         e.fn[n] = function() {
            var t = r.apply(this, arguments);
            e.fn.appear.run();
            return t
         }
      }
   })
})(jQuery);




/*!
 * animsition v3.4.1
 * https://blivesta.github.io/animsition/
 * Licensed under MIT
 * Author : blivesta
 * https://blivesta.com/
 */
!function(n) {
   "use strict";
   var a = "animsition", i = {init: function(t) {
         t = n.extend({inClass: "fade-in", outClass: "fade-out", inDuration: 1500, outDuration: 800, linkElement: ".animsition-link", loading: !0, loadingParentElement: "body", loadingClass: "animsition-loading", loadingHtml: '<div class="css3-spinner-bounce1"></div><div class="css3-spinner-bounce2"></div><div class="css3-spinner-bounce3"></div>', unSupportCss: ["animation-duration", "-webkit-animation-duration", "-o-animation-duration"], overlay: !1, overlayClass: "animsition-overlay-slide", overlayParentElement: "body"}, t);
         var o = i.supportCheck.call(this, t);
         if (!o)
            return"console"in window || (window.console = {}, window.console.log = function(n) {
               return n
            }), console.log("Animsition does not support this browser."), i.destroy.call(this);
         var e = i.optionCheck.call(this, t);
         return e && i.addOverlay.call(this, t), t.loading && i.addLoading.call(this, t), this.each(function() {
            var o = this, e = n(this), s = n(window), l = e.data(a);
            l || (t = n.extend({}, t), e.data(a, {options: t}), s.on("load." + a + " pageshow." + a, function() {
               i.pageIn.call(o)
            }), s.on("unload." + a, function() {
            }), n(t.linkElement).on("click." + a, function(a) {
               a.preventDefault();
               var t = n(this);
               i.pageOut.call(o, t)
            }))
         })
      }, addOverlay: function(a) {
         n(a.overlayParentElement).prepend('<div class="' + a.overlayClass + '"></div>')
      }, addLoading: function(a) {
         n(a.loadingParentElement).append('<div class="' + a.loadingClass + '">' + a.loadingHtml + "</div>")
      }, removeLoading: function() {
         var i = n(this), t = i.data(a).options, o = n(t.loadingParentElement).children("." + t.loadingClass);
         o.fadeOut().remove()
      }, supportCheck: function(a) {
         var i = n(this), t = a.unSupportCss, o = t.length, e = !1;
         0 === o && (e = !0);
         for (var s = 0; o > s; s++)
            if ("string" == typeof i.css(t[s])) {
               e = !0;
               break
            }
         return e
      }, optionCheck: function(a) {
         var i, t = n(this);
         return i = a.overlay || t.data("animsition-overlay") ? !0 : !1
      }, animationCheck: function(i, t, o) {
         var e = n(this), s = e.data(a).options, l = typeof i, r = !t && "number" === l, c = t && "string" === l && i.length > 0;
         return r || c ? i = i : t && o ? i = s.inClass : !t && o ? i = s.inDuration : t && !o ? i = s.outClass : t || o || (i = s.outDuration), i
      }, pageIn: function() {
         var t = this, o = n(this), e = o.data(a).options, s = o.data("animsition-in-duration"), l = o.data("animsition-in"), r = i.animationCheck.call(t, s, !1, !0), c = i.animationCheck.call(t, l, !0, !0), d = i.optionCheck.call(t, e);
         e.loading && i.removeLoading.call(t), d ? i.pageInOverlay.call(t, c, r) : i.pageInBasic.call(t, c, r)
      }, pageInBasic: function(a, i) {
         var t = n(this);
         t.css({"animation-duration": i / 1e3 + "s"}).addClass(a).animateCallback(function() {
            t.removeClass(a).css({opacity: 1})
         })
      }, pageInOverlay: function(i, t) {
         var o = n(this), e = o.data(a).options;
         o.css({opacity: 1}), n(e.overlayParentElement).children("." + e.overlayClass).css({"animation-duration": t / 1e3 + "s"}).addClass(i)
      }, pageOut: function(t) {
         var o = this, e = n(this), s = e.data(a).options, l = t.data("animsition-out"), r = e.data("animsition-out"), c = t.data("animsition-out-duration"), d = e.data("animsition-out-duration"), u = l ? l : r, m = c ? c : d, h = i.animationCheck.call(o, u, !0, !1), p = i.animationCheck.call(o, m, !1, !1), v = i.optionCheck.call(o, s), f = t.attr("href");
         v ? i.pageOutOverlay.call(o, h, p, f) : i.pageOutBasic.call(o, h, p, f)
      }, pageOutBasic: function(a, i, t) {
         var o = n(this);
         o.css({"animation-duration": i / 1e3 + "s"}).addClass(a).animateCallback(function() {
            location.href = t
         })
      }, pageOutOverlay: function(t, o, e) {
         var s = this, l = n(this), r = l.data(a).options, c = l.data("animsition-in"), d = i.animationCheck.call(s, c, !0, !0);
         n(r.overlayParentElement).children("." + r.overlayClass).css({"animation-duration": o / 1e3 + "s"}).removeClass(d).addClass(t).animateCallback(function() {
            l.css({opacity: 0}), location.href = e
         })
      }, destroy: function() {
         return this.each(function() {
            var i = n(this);
            n(window).unbind("." + a), i.css({opacity: 1}).removeData(a)
         })
      }};
   n.fn.animateCallback = function(a) {
      var i = "animationend webkitAnimationEnd mozAnimationEnd oAnimationEnd MSAnimationEnd";
      return this.each(function() {
         n(this).bind(i, function() {
            return n(this).unbind(i), a.call(this)
         })
      })
   }, n.fn.animsition = function(t) {
      return i[t] ? i[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void n.error("Method " + t + " does not exist on jQuery." + a) : i.init.apply(this, arguments)
   }
}(jQuery);




/*! Stellar.js v0.6.2 | Copyright 2013, Mark Dalgleish | https://markdalgleish.com/projects/stellar.js | https://markdalgleish.mit-license.org */
(function(e, t, n, r) {
   function d(t, n) {
      this.element = t, this.options = e.extend({}, s, n), this._defaults = s, this._name = i, this.init()
   }
   var i = "stellar", s = {scrollProperty: "scroll", positionProperty: "position", horizontalScrolling: !0, verticalScrolling: !0, horizontalOffset: 0, verticalOffset: 0, responsive: !1, parallaxBackgrounds: !0, parallaxElements: !0, hideDistantElements: !0, hideElement: function(e) {
         e.hide()
      }, showElement: function(e) {
         e.show()
      }}, o = {scroll: {getLeft: function(e) {
            return e.scrollLeft()
         }, setLeft: function(e, t) {
            e.scrollLeft(t)
         }, getTop: function(e) {
            return e.scrollTop()
         }, setTop: function(e, t) {
            e.scrollTop(t)
         }}, position: {getLeft: function(e) {
            return parseInt(e.css("left"), 10) * -1
         }, getTop: function(e) {
            return parseInt(e.css("top"), 10) * -1
         }}, margin: {getLeft: function(e) {
            return parseInt(e.css("margin-left"), 10) * -1
         }, getTop: function(e) {
            return parseInt(e.css("margin-top"), 10) * -1
         }}, transform: {getLeft: function(e) {
            var t = getComputedStyle(e[0])[f];
            return t !== "none" ? parseInt(t.match(/(-?[0-9]+)/g)[4], 10) * -1 : 0
         }, getTop: function(e) {
            var t = getComputedStyle(e[0])[f];
            return t !== "none" ? parseInt(t.match(/(-?[0-9]+)/g)[5], 10) * -1 : 0
         }}}, u = {position: {setLeft: function(e, t) {
            e.css("left", t)
         }, setTop: function(e, t) {
            e.css("top", t)
         }}, transform: {setPosition: function(e, t, n, r, i) {
            e[0].style[f] = "translate3d(" + (t - n) + "px, " + (r - i) + "px, 0)"
         }}}, a = function() {
      var t = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/, n = e("script")[0].style, r = "", i;
      for (i in n)
         if (t.test(i)) {
            r = i.match(t)[0];
            break
         }
      return"WebkitOpacity"in n && (r = "Webkit"), "KhtmlOpacity"in n && (r = "Khtml"), function(e) {
         return r + (r.length > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e)
      }
   }(), f = a("transform"), l = e("<div />", {style: "background:#fff"}).css("background-position-x") !== r, c = l ? function(e, t, n) {
      e.css({"background-position-x": t, "background-position-y": n})
   } : function(e, t, n) {
      e.css("background-position", t + " " + n)
   }, h = l ? function(e) {
      return[e.css("background-position-x"), e.css("background-position-y")]
   } : function(e) {
      return e.css("background-position").split(" ")
   }, p = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
      setTimeout(e, 1e3 / 60)
   };
   d.prototype = {init: function() {
         this.options.name = i + "_" + Math.floor(Math.random() * 1e9), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({firstLoad: !0}), this.options.scrollProperty === "scroll" ? this._handleScrollEvent() : this._startAnimationLoop()
      }, _defineElements: function() {
         this.element === n.body && (this.element = t), this.$scrollElement = e(this.element), this.$element = this.element === t ? e("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== r ? e(this.options.viewportElement) : this.$scrollElement[0] === t || this.options.scrollProperty === "scroll" ? this.$scrollElement : this.$scrollElement.parent()
      }, _defineGetters: function() {
         var e = this, t = o[e.options.scrollProperty];
         this._getScrollLeft = function() {
            return t.getLeft(e.$scrollElement)
         }, this._getScrollTop = function() {
            return t.getTop(e.$scrollElement)
         }
      }, _defineSetters: function() {
         var t = this, n = o[t.options.scrollProperty], r = u[t.options.positionProperty], i = n.setLeft, s = n.setTop;
         this._setScrollLeft = typeof i == "function" ? function(e) {
            i(t.$scrollElement, e)
         } : e.noop, this._setScrollTop = typeof s == "function" ? function(e) {
            s(t.$scrollElement, e)
         } : e.noop, this._setPosition = r.setPosition || function(e, n, i, s, o) {
            t.options.horizontalScrolling && r.setLeft(e, n, i), t.options.verticalScrolling && r.setTop(e, s, o)
         }
      }, _handleWindowLoadAndResize: function() {
         var n = this, r = e(t);
         n.options.responsive && r.bind("load." + this.name, function() {
            n.refresh()
         }), r.bind("resize." + this.name, function() {
            n._detectViewport(), n.options.responsive && n.refresh()
         })
      }, refresh: function(n) {
         var r = this, i = r._getScrollLeft(), s = r._getScrollTop();
         (!n || !n.firstLoad) && this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), n && n.firstLoad && /WebKit/.test(navigator.userAgent) && e(t).load(function() {
            var e = r._getScrollLeft(), t = r._getScrollTop();
            r._setScrollLeft(e + 1), r._setScrollTop(t + 1), r._setScrollLeft(e), r._setScrollTop(t)
         }), this._setScrollLeft(i), this._setScrollTop(s)
      }, _detectViewport: function() {
         var e = this.$viewportElement.offset(), t = e !== null && e !== r;
         this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = t ? e.top : 0, this.viewportOffsetLeft = t ? e.left : 0
      }, _findParticles: function() {
         var t = this, n = this._getScrollLeft(), i = this._getScrollTop();
         if (this.particles !== r)
            for (var s = this.particles.length - 1; s >= 0; s--)
               this.particles[s].$element.data("stellar-elementIsActive", r);
         this.particles = [];
         if (!this.options.parallaxElements)
            return;
         this.$element.find("[data-stellar-ratio]").each(function(n) {
            var i = e(this), s, o, u, a, f, l, c, h, p, d = 0, v = 0, m = 0, g = 0;
            if (!i.data("stellar-elementIsActive"))
               i.data("stellar-elementIsActive", this);
            else if (i.data("stellar-elementIsActive") !== this)
               return;
            t.options.showElement(i), i.data("stellar-startingLeft") ? (i.css("left", i.data("stellar-startingLeft")), i.css("top", i.data("stellar-startingTop"))) : (i.data("stellar-startingLeft", i.css("left")), i.data("stellar-startingTop", i.css("top"))), u = i.position().left, a = i.position().top, f = i.css("margin-left") === "auto" ? 0 : parseInt(i.css("margin-left"), 10), l = i.css("margin-top") === "auto" ? 0 : parseInt(i.css("margin-top"), 10), h = i.offset().left - f, p = i.offset().top - l, i.parents().each(function() {
               var t = e(this);
               if (t.data("stellar-offset-parent") === !0)
                  return d = m, v = g, c = t, !1;
               m += t.position().left, g += t.position().top
            }), s = i.data("stellar-horizontal-offset") !== r ? i.data("stellar-horizontal-offset") : c !== r && c.data("stellar-horizontal-offset") !== r ? c.data("stellar-horizontal-offset") : t.horizontalOffset, o = i.data("stellar-vertical-offset") !== r ? i.data("stellar-vertical-offset") : c !== r && c.data("stellar-vertical-offset") !== r ? c.data("stellar-vertical-offset") : t.verticalOffset, t.particles.push({$element: i, $offsetParent: c, isFixed: i.css("position") === "fixed", horizontalOffset: s, verticalOffset: o, startingPositionLeft: u, startingPositionTop: a, startingOffsetLeft: h, startingOffsetTop: p, parentOffsetLeft: d, parentOffsetTop: v, stellarRatio: i.data("stellar-ratio") !== r ? i.data("stellar-ratio") : 1, width: i.outerWidth(!0), height: i.outerHeight(!0), isHidden: !1})
         })
      }, _findBackgrounds: function() {
         var t = this, n = this._getScrollLeft(), i = this._getScrollTop(), s;
         this.backgrounds = [];
         if (!this.options.parallaxBackgrounds)
            return;
         s = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (s = s.add(this.$element)), s.each(function() {
            var s = e(this), o = h(s), u, a, f, l, p, d, v, m, g, y = 0, b = 0, w = 0, E = 0;
            if (!s.data("stellar-backgroundIsActive"))
               s.data("stellar-backgroundIsActive", this);
            else if (s.data("stellar-backgroundIsActive") !== this)
               return;
            s.data("stellar-backgroundStartingLeft") ? c(s, s.data("stellar-backgroundStartingLeft"), s.data("stellar-backgroundStartingTop")) : (s.data("stellar-backgroundStartingLeft", o[0]), s.data("stellar-backgroundStartingTop", o[1])), p = s.css("margin-left") === "auto" ? 0 : parseInt(s.css("margin-left"), 10), d = s.css("margin-top") === "auto" ? 0 : parseInt(s.css("margin-top"), 10), v = s.offset().left - p - n, m = s.offset().top - d - i, s.parents().each(function() {
               var t = e(this);
               if (t.data("stellar-offset-parent") === !0)
                  return y = w, b = E, g = t, !1;
               w += t.position().left, E += t.position().top
            }), u = s.data("stellar-horizontal-offset") !== r ? s.data("stellar-horizontal-offset") : g !== r && g.data("stellar-horizontal-offset") !== r ? g.data("stellar-horizontal-offset") : t.horizontalOffset, a = s.data("stellar-vertical-offset") !== r ? s.data("stellar-vertical-offset") : g !== r && g.data("stellar-vertical-offset") !== r ? g.data("stellar-vertical-offset") : t.verticalOffset, t.backgrounds.push({$element: s, $offsetParent: g, isFixed: s.css("background-attachment") === "fixed", horizontalOffset: u, verticalOffset: a, startingValueLeft: o[0], startingValueTop: o[1], startingBackgroundPositionLeft: isNaN(parseInt(o[0], 10)) ? 0 : parseInt(o[0], 10), startingBackgroundPositionTop: isNaN(parseInt(o[1], 10)) ? 0 : parseInt(o[1], 10), startingPositionLeft: s.position().left, startingPositionTop: s.position().top, startingOffsetLeft: v, startingOffsetTop: m, parentOffsetLeft: y, parentOffsetTop: b, stellarRatio: s.data("stellar-background-ratio") === r ? 1 : s.data("stellar-background-ratio")})
         })
      }, _reset: function() {
         var e, t, n, r, i;
         for (i = this.particles.length - 1; i >= 0; i--)
            e = this.particles[i], t = e.$element.data("stellar-startingLeft"), n = e.$element.data("stellar-startingTop"), this._setPosition(e.$element, t, t, n, n), this.options.showElement(e.$element), e.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
         for (i = this.backgrounds.length - 1; i >= 0; i--)
            r = this.backgrounds[i], r.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), c(r.$element, r.startingValueLeft, r.startingValueTop)
      }, destroy: function() {
         this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = e.noop, e(t).unbind("load." + this.name).unbind("resize." + this.name)
      }, _setOffsets: function() {
         var n = this, r = e(t);
         r.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), typeof this.options.horizontalOffset == "function" ? (this.horizontalOffset = this.options.horizontalOffset(), r.bind("resize.horizontal-" + this.name, function() {
            n.horizontalOffset = n.options.horizontalOffset()
         })) : this.horizontalOffset = this.options.horizontalOffset, typeof this.options.verticalOffset == "function" ? (this.verticalOffset = this.options.verticalOffset(), r.bind("resize.vertical-" + this.name, function() {
            n.verticalOffset = n.options.verticalOffset()
         })) : this.verticalOffset = this.options.verticalOffset
      }, _repositionElements: function() {
         var e = this._getScrollLeft(), t = this._getScrollTop(), n, r, i, s, o, u, a, f = !0, l = !0, h, p, d, v, m;
         if (this.currentScrollLeft === e && this.currentScrollTop === t && this.currentWidth === this.viewportWidth && this.currentHeight === this.viewportHeight)
            return;
         this.currentScrollLeft = e, this.currentScrollTop = t, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight;
         for (m = this.particles.length - 1; m >= 0; m--)
            i = this.particles[m], s = i.isFixed ? 1 : 0, this.options.horizontalScrolling ? (h = (e + i.horizontalOffset + this.viewportOffsetLeft + i.startingPositionLeft - i.startingOffsetLeft + i.parentOffsetLeft) * -(i.stellarRatio + s - 1) + i.startingPositionLeft, d = h - i.startingPositionLeft + i.startingOffsetLeft) : (h = i.startingPositionLeft, d = i.startingOffsetLeft), this.options.verticalScrolling ? (p = (t + i.verticalOffset + this.viewportOffsetTop + i.startingPositionTop - i.startingOffsetTop + i.parentOffsetTop) * -(i.stellarRatio + s - 1) + i.startingPositionTop, v = p - i.startingPositionTop + i.startingOffsetTop) : (p = i.startingPositionTop, v = i.startingOffsetTop), this.options.hideDistantElements && (l = !this.options.horizontalScrolling || d + i.width > (i.isFixed ? 0 : e) && d < (i.isFixed ? 0 : e) + this.viewportWidth + this.viewportOffsetLeft, f = !this.options.verticalScrolling || v + i.height > (i.isFixed ? 0 : t) && v < (i.isFixed ? 0 : t) + this.viewportHeight + this.viewportOffsetTop), l && f ? (i.isHidden && (this.options.showElement(i.$element), i.isHidden = !1), this._setPosition(i.$element, h, i.startingPositionLeft, p, i.startingPositionTop)) : i.isHidden || (this.options.hideElement(i.$element), i.isHidden = !0);
         for (m = this.backgrounds.length - 1; m >= 0; m--)
            o = this.backgrounds[m], s = o.isFixed ? 0 : 1, u = this.options.horizontalScrolling ? (e + o.horizontalOffset - this.viewportOffsetLeft - o.startingOffsetLeft + o.parentOffsetLeft - o.startingBackgroundPositionLeft) * (s - o.stellarRatio) + "px" : o.startingValueLeft, a = this.options.verticalScrolling ? (t + o.verticalOffset - this.viewportOffsetTop - o.startingOffsetTop + o.parentOffsetTop - o.startingBackgroundPositionTop) * (s - o.stellarRatio) + "px" : o.startingValueTop, c(o.$element, u, a)
      }, _handleScrollEvent: function() {
         var e = this, t = !1, n = function() {
            e._repositionElements(), t = !1
         }, r = function() {
            t || (p(n), t = !0)
         };
         this.$scrollElement.bind("scroll." + this.name, r), r()
      }, _startAnimationLoop: function() {
         var e = this;
         this._animationLoop = function() {
            p(e._animationLoop), e._repositionElements()
         }, this._animationLoop()
      }}, e.fn[i] = function(t) {
      var n = arguments;
      if (t === r || typeof t == "object")
         return this.each(function() {
            e.data(this, "plugin_" + i) || e.data(this, "plugin_" + i, new d(this, t))
         });
      if (typeof t == "string" && t[0] !== "_" && t !== "init")
         return this.each(function() {
            var r = e.data(this, "plugin_" + i);
            r instanceof d && typeof r[t] == "function" && r[t].apply(r, Array.prototype.slice.call(n, 1)), t === "destroy" && e.data(this, "plugin_" + i, null)
         })
   }, e[i] = function(n) {
      var r = e(t);
      return r.stellar.apply(r, Array.prototype.slice.call(arguments, 0))
   }, e[i].scrollProperty = o, e[i].positionProperty = u, t.Stellar = d
})(jQuery, this, document);




/** Abstract base class for collection plugins.
 Written by Keith Wood (kbwood{at}iinet.com.au) December 2013.
 Licensed under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license. */
(function() {
   var j = false;
   window.JQClass = function() {
   };
   JQClass.classes = {};
   JQClass.extend = function extender(f) {
      var g = this.prototype;
      j = true;
      var h = new this();
      j = false;
      for (var i in f) {
         h[i] = typeof f[i] == 'function' && typeof g[i] == 'function' ? (function(d, e) {
            return function() {
               var b = this._super;
               this._super = function(a) {
                  return g[d].apply(this, a)
               };
               var c = e.apply(this, arguments);
               this._super = b;
               return c
            }
         })(i, f[i]) : f[i]
      }
      function JQClass() {
         if (!j && this._init) {
            this._init.apply(this, arguments)
         }
      }
      JQClass.prototype = h;
      JQClass.prototype.constructor = JQClass;
      JQClass.extend = extender;
      return JQClass
   }
})();
(function($) {
   JQClass.classes.JQPlugin = JQClass.extend({name: 'plugin', defaultOptions: {}, regionalOptions: {}, _getters: [], _getMarker: function() {
         return'is-' + this.name
      }, _init: function() {
         $.extend(this.defaultOptions, (this.regionalOptions && this.regionalOptions['']) || {});
         var c = camelCase(this.name);
         $[c] = this;
         $.fn[c] = function(a) {
            var b = Array.prototype.slice.call(arguments, 1);
            if ($[c]._isNotChained(a, b)) {
               return $[c][a].apply($[c], [this[0]].concat(b))
            }
            return this.each(function() {
               if (typeof a === 'string') {
                  if (a[0] === '_' || !$[c][a]) {
                     throw'Unknown method: ' + a;
                  }
                  $[c][a].apply($[c], [this].concat(b))
               } else {
                  $[c]._attach(this, a)
               }
            })
         }
      }, setDefaults: function(a) {
         $.extend(this.defaultOptions, a || {})
      }, _isNotChained: function(a, b) {
         if (a === 'option' && (b.length === 0 || (b.length === 1 && typeof b[0] === 'string'))) {
            return true
         }
         return $.inArray(a, this._getters) > -1
      }, _attach: function(a, b) {
         a = $(a);
         if (a.hasClass(this._getMarker())) {
            return
         }
         a.addClass(this._getMarker());
         b = $.extend({}, this.defaultOptions, this._getMetadata(a), b || {});
         var c = $.extend({name: this.name, elem: a, options: b}, this._instSettings(a, b));
         a.data(this.name, c);
         this._postAttach(a, c);
         this.option(a, b)
      }, _instSettings: function(a, b) {
         return{}
      }, _postAttach: function(a, b) {
      }, _getMetadata: function(d) {
         try {
            var f = d.data(this.name.toLowerCase()) || '';
            f = f.replace(/'/g, '"');
            f = f.replace(/([a-zA-Z0-9]+):/g, function(a, b, i) {
               var c = f.substring(0, i).match(/"/g);
               return(!c || c.length % 2 === 0 ? '"' + b + '":' : b + ':')
            });
            f = $.parseJSON('{' + f + '}');
            for (var g in f) {
               var h = f[g];
               if (typeof h === 'string' && h.match(/^new Date\((.*)\)$/)) {
                  f[g] = eval(h)
               }
            }
            return f
         } catch (e) {
            return{}
         }
      }, _getInst: function(a) {
         return $(a).data(this.name) || {}
      }, option: function(a, b, c) {
         a = $(a);
         var d = a.data(this.name);
         if (!b || (typeof b === 'string' && c == null)) {
            var e = (d || {}).options;
            return(e && b ? e[b] : e)
         }
         if (!a.hasClass(this._getMarker())) {
            return
         }
         var e = b || {};
         if (typeof b === 'string') {
            e = {};
            e[b] = c
         }
         this._optionsChanged(a, d, e);
         $.extend(d.options, e)
      }, _optionsChanged: function(a, b, c) {
      }, destroy: function(a) {
         a = $(a);
         if (!a.hasClass(this._getMarker())) {
            return
         }
         this._preDestroy(a, this._getInst(a));
         a.removeData(this.name).removeClass(this._getMarker())
      }, _preDestroy: function(a, b) {
      }});
   function camelCase(c) {
      return c.replace(/-([a-z])/g, function(a, b) {
         return b.toUpperCase()
      })
   }
   $.JQPlugin = {createPlugin: function(a, b) {
         if (typeof a === 'object') {
            b = a;
            a = 'JQPlugin'
         }
         a = camelCase(a);
         var c = camelCase(b.name);
         JQClass.classes[c] = JQClass.classes[a].extend(b);
         new JQClass.classes[c]()
      }}
})(jQuery);


/* https://keith-wood.name/countdown.html
 Countdown for jQuery v2.0.0.
 Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
 Available under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license.
 Please attribute the author if you use it. */
(function($) {
   var w = 'countdown';
   var Y = 0;
   var O = 1;
   var W = 2;
   var D = 3;
   var H = 4;
   var M = 5;
   var S = 6;
   $.JQPlugin.createPlugin({name: w, defaultOptions: {until: null, since: null, timezone: null, serverSync: null, format: 'dHMS', layout: '', compact: false, padZeroes: false, significant: 0, description: '', expiryUrl: '', expiryText: '', alwaysExpire: false, onExpiry: null, onTick: null, tickInterval: 1}, regionalOptions: {'': {labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'], labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'], compactLabels: ['y', 'm', 'w', 'd'], whichLabels: null, digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], timeSeparator: ':', isRTL: false}}, _getters: ['getTimes'], _rtlClass: w + '-rtl', _sectionClass: w + '-section', _amountClass: w + '-amount', _periodClass: w + '-period', _rowClass: w + '-row', _holdingClass: w + '-holding', _showClass: w + '-show', _descrClass: w + '-descr', _timerElems: [], _init: function() {
         var c = this;
         this._super();
         this._serverSyncs = [];
         var d = (typeof Date.now == 'function' ? Date.now : function() {
            return new Date().getTime()
         });
         var e = (window.performance && typeof window.performance.now == 'function');
         function timerCallBack(a) {
            var b = (a < 1e12 ? (e ? (performance.now() + performance.timing.navigationStart) : d()) : a || d());
            if (b - g >= 1000) {
               c._updateElems();
               g = b
            }
            f(timerCallBack)
         }
         var f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;
         var g = 0;
         if (!f || $.noRequestAnimationFrame) {
            $.noRequestAnimationFrame = null;
            setInterval(function() {
               c._updateElems()
            }, 980)
         } else {
            g = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || d();
            f(timerCallBack)
         }
      }, UTCDate: function(a, b, c, e, f, g, h, i) {
         if (typeof b == 'object' && b.constructor == Date) {
            i = b.getMilliseconds();
            h = b.getSeconds();
            g = b.getMinutes();
            f = b.getHours();
            e = b.getDate();
            c = b.getMonth();
            b = b.getFullYear()
         }
         var d = new Date();
         d.setUTCFullYear(b);
         d.setUTCDate(1);
         d.setUTCMonth(c || 0);
         d.setUTCDate(e || 1);
         d.setUTCHours(f || 0);
         d.setUTCMinutes((g || 0) - (Math.abs(a) < 30 ? a * 60 : a));
         d.setUTCSeconds(h || 0);
         d.setUTCMilliseconds(i || 0);
         return d
      }, periodsToSeconds: function(a) {
         return a[0] * 31557600 + a[1] * 2629800 + a[2] * 604800 + a[3] * 86400 + a[4] * 3600 + a[5] * 60 + a[6]
      }, _instSettings: function(a, b) {
         return{_periods: [0, 0, 0, 0, 0, 0, 0]}
      }, _addElem: function(a) {
         if (!this._hasElem(a)) {
            this._timerElems.push(a)
         }
      }, _hasElem: function(a) {
         return($.inArray(a, this._timerElems) > -1)
      }, _removeElem: function(b) {
         this._timerElems = $.map(this._timerElems, function(a) {
            return(a == b ? null : a)
         })
      }, _updateElems: function() {
         for (var i = this._timerElems.length - 1; i >= 0; i--) {
            this._updateCountdown(this._timerElems[i])
         }
      }, _optionsChanged: function(a, b, c) {
         if (c.layout) {
            c.layout = c.layout.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
         }
         this._resetExtraLabels(b.options, c);
         var d = (b.options.timezone != c.timezone);
         $.extend(b.options, c);
         this._adjustSettings(a, b, c.until != null || c.since != null || d);
         var e = new Date();
         if ((b._since && b._since < e) || (b._until && b._until > e)) {
            this._addElem(a[0])
         }
         this._updateCountdown(a, b)
      }, _updateCountdown: function(a, b) {
         a = a.jquery ? a : $(a);
         b = b || a.data(this.name);
         if (!b) {
            return
         }
         a.html(this._generateHTML(b)).toggleClass(this._rtlClass, b.options.isRTL);
         if ($.isFunction(b.options.onTick)) {
            var c = b._hold != 'lap' ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date());
            if (b.options.tickInterval == 1 || this.periodsToSeconds(c) % b.options.tickInterval == 0) {
               b.options.onTick.apply(a[0], [c])
            }
         }
         var d = b._hold != 'pause' && (b._since ? b._now.getTime() < b._since.getTime() : b._now.getTime() >= b._until.getTime());
         if (d && !b._expiring) {
            b._expiring = true;
            if (this._hasElem(a[0]) || b.options.alwaysExpire) {
               this._removeElem(a[0]);
               if ($.isFunction(b.options.onExpiry)) {
                  b.options.onExpiry.apply(a[0], [])
               }
               if (b.options.expiryText) {
                  var e = b.options.layout;
                  b.options.layout = b.options.expiryText;
                  this._updateCountdown(a[0], b);
                  b.options.layout = e
               }
               if (b.options.expiryUrl) {
                  window.location = b.options.expiryUrl
               }
            }
            b._expiring = false
         } else if (b._hold == 'pause') {
            this._removeElem(a[0])
         }
      }, _resetExtraLabels: function(a, b) {
         var c = false;
         for (var n in b) {
            if (n != 'whichLabels' && n.match(/[Ll]abels/)) {
               c = true;
               break
            }
         }
         if (c) {
            for (var n in a) {
               if (n.match(/[Ll]abels[02-9]|compactLabels1/)) {
                  a[n] = null
               }
            }
         }
      }, _adjustSettings: function(a, b, c) {
         var d;
         var e = 0;
         var f = null;
         for (var i = 0; i < this._serverSyncs.length; i++) {
            if (this._serverSyncs[i][0] == b.options.serverSync) {
               f = this._serverSyncs[i][1];
               break
            }
         }
         if (f != null) {
            e = (b.options.serverSync ? f : 0);
            d = new Date()
         } else {
            var g = ($.isFunction(b.options.serverSync) ? b.options.serverSync.apply(a[0], []) : null);
            d = new Date();
            e = (g ? d.getTime() - g.getTime() : 0);
            this._serverSyncs.push([b.options.serverSync, e])
         }
         var h = b.options.timezone;
         h = (h == null ? -d.getTimezoneOffset() : h);
         if (c || (!c && b._until == null && b._since == null)) {
            b._since = b.options.since;
            if (b._since != null) {
               b._since = this.UTCDate(h, this._determineTime(b._since, null));
               if (b._since && e) {
                  b._since.setMilliseconds(b._since.getMilliseconds() + e)
               }
            }
            b._until = this.UTCDate(h, this._determineTime(b.options.until, d));
            if (e) {
               b._until.setMilliseconds(b._until.getMilliseconds() + e)
            }
         }
         b._show = this._determineShow(b)
      }, _preDestroy: function(a, b) {
         this._removeElem(a[0]);
         a.empty()
      }, pause: function(a) {
         this._hold(a, 'pause')
      }, lap: function(a) {
         this._hold(a, 'lap')
      }, resume: function(a) {
         this._hold(a, null)
      }, toggle: function(a) {
         var b = $.data(a, this.name) || {};
         this[!b._hold ? 'pause' : 'resume'](a)
      }, toggleLap: function(a) {
         var b = $.data(a, this.name) || {};
         this[!b._hold ? 'lap' : 'resume'](a)
      }, _hold: function(a, b) {
         var c = $.data(a, this.name);
         if (c) {
            if (c._hold == 'pause' && !b) {
               c._periods = c._savePeriods;
               var d = (c._since ? '-' : '+');
               c[c._since ? '_since' : '_until'] = this._determineTime(d + c._periods[0] + 'y' + d + c._periods[1] + 'o' + d + c._periods[2] + 'w' + d + c._periods[3] + 'd' + d + c._periods[4] + 'h' + d + c._periods[5] + 'm' + d + c._periods[6] + 's');
               this._addElem(a)
            }
            c._hold = b;
            c._savePeriods = (b == 'pause' ? c._periods : null);
            $.data(a, this.name, c);
            this._updateCountdown(a, c)
         }
      }, getTimes: function(a) {
         var b = $.data(a, this.name);
         return(!b ? null : (b._hold == 'pause' ? b._savePeriods : (!b._hold ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date()))))
      }, _determineTime: function(k, l) {
         var m = this;
         var n = function(a) {
            var b = new Date();
            b.setTime(b.getTime() + a * 1000);
            return b
         };
         var o = function(a) {
            a = a.toLowerCase();
            var b = new Date();
            var c = b.getFullYear();
            var d = b.getMonth();
            var e = b.getDate();
            var f = b.getHours();
            var g = b.getMinutes();
            var h = b.getSeconds();
            var i = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;
            var j = i.exec(a);
            while (j) {
               switch (j[2] || 's') {
                  case's':
                     h += parseInt(j[1], 10);
                     break;
                  case'm':
                     g += parseInt(j[1], 10);
                     break;
                  case'h':
                     f += parseInt(j[1], 10);
                     break;
                  case'd':
                     e += parseInt(j[1], 10);
                     break;
                  case'w':
                     e += parseInt(j[1], 10) * 7;
                     break;
                  case'o':
                     d += parseInt(j[1], 10);
                     e = Math.min(e, m._getDaysInMonth(c, d));
                     break;
                  case'y':
                     c += parseInt(j[1], 10);
                     e = Math.min(e, m._getDaysInMonth(c, d));
                     break
               }
               j = i.exec(a)
            }
            return new Date(c, d, e, f, g, h, 0)
         };
         var p = (k == null ? l : (typeof k == 'string' ? o(k) : (typeof k == 'number' ? n(k) : k)));
         if (p)
            p.setMilliseconds(0);
         return p
      }, _getDaysInMonth: function(a, b) {
         return 32 - new Date(a, b, 32).getDate()
      }, _normalLabels: function(a) {
         return a
      }, _generateHTML: function(c) {
         var d = this;
         c._periods = (c._hold ? c._periods : this._calculatePeriods(c, c._show, c.options.significant, new Date()));
         var e = false;
         var f = 0;
         var g = c.options.significant;
         var h = $.extend({}, c._show);
         for (var i = Y; i <= S; i++) {
            e |= (c._show[i] == '?' && c._periods[i] > 0);
            h[i] = (c._show[i] == '?' && !e ? null : c._show[i]);
            f += (h[i] ? 1 : 0);
            g -= (c._periods[i] > 0 ? 1 : 0)
         }
         var j = [false, false, false, false, false, false, false];
         for (var i = S; i >= Y; i--) {
            if (c._show[i]) {
               if (c._periods[i]) {
                  j[i] = true
               } else {
                  j[i] = g > 0;
                  g--
               }
            }
         }
         var k = (c.options.compact ? c.options.compactLabels : c.options.labels);
         var l = c.options.whichLabels || this._normalLabels;
         var m = function(a) {
            var b = c.options['compactLabels' + l(c._periods[a])];
            return(h[a] ? d._translateDigits(c, c._periods[a]) + (b ? b[a] : k[a]) + ' ' : '')
         };
         var n = (c.options.padZeroes ? 2 : 1);
         var o = function(a) {
            var b = c.options['labels' + l(c._periods[a])];
            return((!c.options.significant && h[a]) || (c.options.significant && j[a]) ? '<span class="' + d._sectionClass + '">' + '<span class="' + d._amountClass + '">' + d._minDigits(c, c._periods[a], n) + '</span>' + '<span class="' + d._periodClass + '">' + (b ? b[a] : k[a]) + '</span></span>' : '')
         };
         return(c.options.layout ? this._buildLayout(c, h, c.options.layout, c.options.compact, c.options.significant, j) : ((c.options.compact ? '<span class="' + this._rowClass + ' ' + this._amountClass + (c._hold ? ' ' + this._holdingClass : '') + '">' + m(Y) + m(O) + m(W) + m(D) + (h[H] ? this._minDigits(c, c._periods[H], 2) : '') + (h[M] ? (h[H] ? c.options.timeSeparator : '') + this._minDigits(c, c._periods[M], 2) : '') + (h[S] ? (h[H] || h[M] ? c.options.timeSeparator : '') + this._minDigits(c, c._periods[S], 2) : '') : '<span class="' + this._rowClass + ' ' + this._showClass + (c.options.significant || f) + (c._hold ? ' ' + this._holdingClass : '') + '">' + o(Y) + o(O) + o(W) + o(D) + o(H) + o(M) + o(S)) + '</span>' + (c.options.description ? '<span class="' + this._rowClass + ' ' + this._descrClass + '">' + c.options.description + '</span>' : '')))
      }, _buildLayout: function(c, d, e, f, g, h) {
         var j = c.options[f ? 'compactLabels' : 'labels'];
         var k = c.options.whichLabels || this._normalLabels;
         var l = function(a) {
            return(c.options[(f ? 'compactLabels' : 'labels') + k(c._periods[a])] || j)[a]
         };
         var m = function(a, b) {
            return c.options.digits[Math.floor(a / b) % 10]
         };
         var o = {desc: c.options.description, sep: c.options.timeSeparator, yl: l(Y), yn: this._minDigits(c, c._periods[Y], 1), ynn: this._minDigits(c, c._periods[Y], 2), ynnn: this._minDigits(c, c._periods[Y], 3), y1: m(c._periods[Y], 1), y10: m(c._periods[Y], 10), y100: m(c._periods[Y], 100), y1000: m(c._periods[Y], 1000), ol: l(O), on: this._minDigits(c, c._periods[O], 1), onn: this._minDigits(c, c._periods[O], 2), onnn: this._minDigits(c, c._periods[O], 3), o1: m(c._periods[O], 1), o10: m(c._periods[O], 10), o100: m(c._periods[O], 100), o1000: m(c._periods[O], 1000), wl: l(W), wn: this._minDigits(c, c._periods[W], 1), wnn: this._minDigits(c, c._periods[W], 2), wnnn: this._minDigits(c, c._periods[W], 3), w1: m(c._periods[W], 1), w10: m(c._periods[W], 10), w100: m(c._periods[W], 100), w1000: m(c._periods[W], 1000), dl: l(D), dn: this._minDigits(c, c._periods[D], 1), dnn: this._minDigits(c, c._periods[D], 2), dnnn: this._minDigits(c, c._periods[D], 3), d1: m(c._periods[D], 1), d10: m(c._periods[D], 10), d100: m(c._periods[D], 100), d1000: m(c._periods[D], 1000), hl: l(H), hn: this._minDigits(c, c._periods[H], 1), hnn: this._minDigits(c, c._periods[H], 2), hnnn: this._minDigits(c, c._periods[H], 3), h1: m(c._periods[H], 1), h10: m(c._periods[H], 10), h100: m(c._periods[H], 100), h1000: m(c._periods[H], 1000), ml: l(M), mn: this._minDigits(c, c._periods[M], 1), mnn: this._minDigits(c, c._periods[M], 2), mnnn: this._minDigits(c, c._periods[M], 3), m1: m(c._periods[M], 1), m10: m(c._periods[M], 10), m100: m(c._periods[M], 100), m1000: m(c._periods[M], 1000), sl: l(S), sn: this._minDigits(c, c._periods[S], 1), snn: this._minDigits(c, c._periods[S], 2), snnn: this._minDigits(c, c._periods[S], 3), s1: m(c._periods[S], 1), s10: m(c._periods[S], 10), s100: m(c._periods[S], 100), s1000: m(c._periods[S], 1000)};
         var p = e;
         for (var i = Y; i <= S; i++) {
            var q = 'yowdhms'.charAt(i);
            var r = new RegExp('\\{' + q + '<\\}([\\s\\S]*)\\{' + q + '>\\}', 'g');
            p = p.replace(r, ((!g && d[i]) || (g && h[i]) ? '$1' : ''))
         }
         $.each(o, function(n, v) {
            var a = new RegExp('\\{' + n + '\\}', 'g');
            p = p.replace(a, v)
         });
         return p
      }, _minDigits: function(a, b, c) {
         b = '' + b;
         if (b.length >= c) {
            return this._translateDigits(a, b)
         }
         b = '0000000000' + b;
         return this._translateDigits(a, b.substr(b.length - c))
      }, _translateDigits: function(b, c) {
         return('' + c).replace(/[0-9]/g, function(a) {
            return b.options.digits[a]
         })
      }, _determineShow: function(a) {
         var b = a.options.format;
         var c = [];
         c[Y] = (b.match('y') ? '?' : (b.match('Y') ? '!' : null));
         c[O] = (b.match('o') ? '?' : (b.match('O') ? '!' : null));
         c[W] = (b.match('w') ? '?' : (b.match('W') ? '!' : null));
         c[D] = (b.match('d') ? '?' : (b.match('D') ? '!' : null));
         c[H] = (b.match('h') ? '?' : (b.match('H') ? '!' : null));
         c[M] = (b.match('m') ? '?' : (b.match('M') ? '!' : null));
         c[S] = (b.match('s') ? '?' : (b.match('S') ? '!' : null));
         return c
      }, _calculatePeriods: function(c, d, e, f) {
         c._now = f;
         c._now.setMilliseconds(0);
         var g = new Date(c._now.getTime());
         if (c._since) {
            if (f.getTime() < c._since.getTime()) {
               c._now = f = g
            } else {
               f = c._since
            }
         } else {
            g.setTime(c._until.getTime());
            if (f.getTime() > c._until.getTime()) {
               c._now = f = g
            }
         }
         var h = [0, 0, 0, 0, 0, 0, 0];
         if (d[Y] || d[O]) {
            var i = this._getDaysInMonth(f.getFullYear(), f.getMonth());
            var j = this._getDaysInMonth(g.getFullYear(), g.getMonth());
            var k = (g.getDate() == f.getDate() || (g.getDate() >= Math.min(i, j) && f.getDate() >= Math.min(i, j)));
            var l = function(a) {
               return(a.getHours() * 60 + a.getMinutes()) * 60 + a.getSeconds()
            };
            var m = Math.max(0, (g.getFullYear() - f.getFullYear()) * 12 + g.getMonth() - f.getMonth() + ((g.getDate() < f.getDate() && !k) || (k && l(g) < l(f)) ? -1 : 0));
            h[Y] = (d[Y] ? Math.floor(m / 12) : 0);
            h[O] = (d[O] ? m - h[Y] * 12 : 0);
            f = new Date(f.getTime());
            var n = (f.getDate() == i);
            var o = this._getDaysInMonth(f.getFullYear() + h[Y], f.getMonth() + h[O]);
            if (f.getDate() > o) {
               f.setDate(o)
            }
            f.setFullYear(f.getFullYear() + h[Y]);
            f.setMonth(f.getMonth() + h[O]);
            if (n) {
               f.setDate(o)
            }
         }
         var p = Math.floor((g.getTime() - f.getTime()) / 1000);
         var q = function(a, b) {
            h[a] = (d[a] ? Math.floor(p / b) : 0);
            p -= h[a] * b
         };
         q(W, 604800);
         q(D, 86400);
         q(H, 3600);
         q(M, 60);
         q(S, 1);
         if (p > 0 && !c._since) {
            var r = [1, 12, 4.3482, 7, 24, 60, 60];
            var s = S;
            var t = 1;
            for (var u = S; u >= Y; u--) {
               if (d[u]) {
                  if (h[s] >= t) {
                     h[s] = 0;
                     p = 1
                  }
                  if (p > 0) {
                     h[u]++;
                     p = 0;
                     s = u;
                     t = 1
                  }
               }
               t *= r[u]
            }
         }
         if (e) {
            for (var u = Y; u <= S; u++) {
               if (e && h[u]) {
                  e--
               } else if (!e) {
                  h[u] = 0
               }
            }
         }
         return h
      }})
})(jQuery);



/* https://github.com/mhuggins/jquery-countTo
 CountTo */
(function(e) {
   function t(e, t) {
      return e.toFixed(t.decimals)
   }
   e.fn.countTo = function(t) {
      t = t || {};
      return e(this).each(function() {
         function l() {
            a += i;
            u++;
            c(a);
            if (typeof n.onUpdate == "function") {
               n.onUpdate.call(s, a)
            }
            if (u >= r) {
               o.removeData("countTo");
               clearInterval(f.interval);
               a = n.to;
               if (typeof n.onComplete == "function") {
                  n.onComplete.call(s, a)
               }
            }
         }
         function c(e) {
            var t = n.formatter.call(s, e, n);
            o.text(t)
         }
         var n = e.extend({}, e.fn.countTo.defaults, {from: e(this).data("from"), to: e(this).data("to"), speed: e(this).data("speed"), refreshInterval: e(this).data("refresh-interval"), decimals: e(this).data("decimals")}, t);
         var r = Math.ceil(n.speed / n.refreshInterval), i = (n.to - n.from) / r;
         var s = this, o = e(this), u = 0, a = n.from, f = o.data("countTo") || {};
         o.data("countTo", f);
         if (f.interval) {
            clearInterval(f.interval)
         }
         f.interval = setInterval(l, n.refreshInterval);
         c(a)
      })
   };
   e.fn.countTo.defaults = {from: 0, to: 0, speed: 1e3, refreshInterval: 100, decimals: 0, formatter: t, onUpdate: null, onComplete: null}
})(jQuery);




/* Own Carousel 2.0.0.beta.2.4 */
!function(a, b, c, d) {
   function e(b, c) {
      this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function(a, b) {
         this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this)
      }, this)), a.each(e.Pipe, a.proxy(function(b, c) {
         this._pipe.push({filter: c.filter, run: a.proxy(c.run, this)})
      }, this)), this.setup(), this.initialize()
   }
   function f(a) {
      if (a.touches !== d)
         return{x: a.touches[0].pageX, y: a.touches[0].pageY};
      if (a.touches === d) {
         if (a.pageX !== d)
            return{x: a.pageX, y: a.pageY};
         if (a.pageX === d)
            return{x: a.clientX, y: a.clientY}
      }
   }
   function g(a) {
      var b, d, e = c.createElement("div"), f = a;
      for (b in f)
         if (d = f[b], "undefined" != typeof e.style[d])
            return e = null, [d, b];
      return[!1]
   }
   function h() {
      return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
   }
   function i() {
      return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
   }
   function j() {
      return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
   }
   function k() {
      return"ontouchstart"in b || !!navigator.msMaxTouchPoints
   }
   function l() {
      return b.navigator.msPointerEnabled
   }
   var m, n, o;
   m = {start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, offsetX: 0, offsetY: 0, distance: null, startTime: 0, endTime: 0, updatedX: 0, targetEl: null}, n = {isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1}, o = {_onDragStart: null, _onDragMove: null, _onDragEnd: null, _transitionEnd: null, _resizer: null, _responsiveCall: null, _goToLoop: null, _checkVisibile: null}, e.Defaults = {items: 3, loop: !1, center: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, responsiveClass: !1, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", themeClass: "owl-theme", baseClass: "owl-carousel", itemClass: "owl-item", centerClass: "center", activeClass: "active"}, e.Width = {Default: "default", Inner: "inner", Outer: "outer"}, e.Plugins = {}, e.Pipe = [{filter: ["width", "items", "settings"], run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
         }}, {filter: ["items", "settings"], run: function() {
            var a = this._clones, b = this.$stage.children(".cloned");
            (b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
         }}, {filter: ["items", "settings"], run: function() {
            var a, b, c = this._clones, d = this._items, e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0;
            for (a = 0, b = Math.abs(e / 2); b > a; a++)
               e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")))
         }}, {filter: ["width", "items", "settings"], run: function() {
            var a, b, c, d = this.settings.rtl ? 1 : -1, e = (this.width() / this.settings.items).toFixed(3), f = 0;
            for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++)
               a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f)
         }}, {filter: ["width", "items", "settings"], run: function() {
            var b, c, d = (this.width() / this.settings.items).toFixed(3), e = {width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding, "padding-left": this.settings.stagePadding || "", "padding-right": this.settings.stagePadding || ""};
            if (this.$stage.css(e), e = {width: this.settings.autoWidth ? "auto" : d - this.settings.margin}, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function(a) {
               return a > 1
            }).length > 0)
               for (b = 0, c = this._coordinates.length; c > b; b++)
                  e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e);
            else
               this.$stage.children().css(e)
         }}, {filter: ["width", "items", "settings"], run: function(a) {
            a.current && this.reset(this.$stage.children().index(a.current))
         }}, {filter: ["position"], run: function() {
            this.animate(this.coordinates(this._current))
         }}, {filter: ["width", "position", "items", "settings"], run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
            for (c = 0, d = this._coordinates.length; d > c; c++)
               a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
         }}], e.prototype.initialize = function() {
      if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
         var b, c, e;
         if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e)
            return this.preloadAutoWidthImages(b), !1
      }
      this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
   }, e.prototype.setup = function() {
      var b = this.viewport(), c = this.options.responsive, d = -1, e = null;
      c ? (a.each(c, function(a) {
         b >= a && a > d && (d = Number(a))
      }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function(a, b) {
         return b.replace(/\b owl-responsive-\S+/g, "")
      }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", {property: {name: "settings", value: e}}), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {property: {name: "settings", value: this.settings}}))
   }, e.prototype.optionsLogic = function() {
      this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
   }, e.prototype.prepare = function(b) {
      var c = this.trigger("prepare", {content: b});
      return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", {content: c.data}), c.data
   }, e.prototype.update = function() {
      for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
         return this[a]
      }, this._invalidated), e = {}; c > b; )
         (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
      this._invalidated = {}
   }, e.prototype.width = function(a) {
      switch (a = a || e.Width.Default) {
         case e.Width.Inner:
         case e.Width.Outer:
            return this._width;
         default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
         }
   }, e.prototype.refresh = function() {
      if (0 === this._items.length)
         return!1;
      (new Date).getTime();
      this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed")
   }, e.prototype.eventsCall = function() {
      this.e._onDragStart = a.proxy(function(a) {
         this.onDragStart(a)
      }, this), this.e._onDragMove = a.proxy(function(a) {
         this.onDragMove(a)
      }, this), this.e._onDragEnd = a.proxy(function(a) {
         this.onDragEnd(a)
      }, this), this.e._onResize = a.proxy(function(a) {
         this.onResize(a)
      }, this), this.e._transitionEnd = a.proxy(function(a) {
         this.transitionEnd(a)
      }, this), this.e._preventClick = a.proxy(function(a) {
         this.preventClick(a)
      }, this)
   }, e.prototype.onThrottledResize = function() {
      b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
   }, e.prototype.onResize = function() {
      return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
   }, e.prototype.eventsRouter = function(a) {
      var b = a.type;
      "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a)
   }, e.prototype.internalEvents = function() {
      var c = (k(), l());
      this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function(a) {
         this.eventsRouter(a)
      }, this)), this.$stage.on("dragstart", function() {
         return!1
      }), this.$stage.get(0).onselectstart = function() {
         return!1
      }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function(a) {
         this.eventsRouter(a)
      }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this))
   }, e.prototype.onDragStart = function(d) {
      var e, g, h, i;
      if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch)
         return!1;
      if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d)
         i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0;
      else if (this.state.inMotion && !this.support3d)
         return this.state.inMotion = !1, !1;
      this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function(a) {
         this.eventsRouter(a)
      }, this))
   }, e.prototype.onDragMove = function(a) {
      var c, e, g, h, i, j;
      this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
   }, e.prototype.onDragEnd = function(b) {
      var d, e, f;
      if (this.state.isTouch) {
         if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0)
            return this.state.inMotion = !1, !1;
         this.drag.endTime = (new Date).getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents")
      }
   }, e.prototype.removeClick = function(c) {
      this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function() {
         a(c).off("click.preventClick")
      }, 300)
   }, e.prototype.preventClick = function(b) {
      b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick")
   }, e.prototype.getTransformProperty = function() {
      var a, c;
      return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12]
   }, e.prototype.closest = function(b) {
      var c = -1, d = 30, e = this.width(), f = this.coordinates();
      return this.settings.freeDrag || a.each(f, a.proxy(function(a, g) {
         return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c
      }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c
   }, e.prototype.animate = function(b) {
      this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({transform: "translate3d(" + b + "px,0px, 0px)", transition: this.speed() / 1e3 + "s"}) : this.state.isTouch ? this.$stage.css({left: b + "px"}) : this.$stage.animate({left: b}, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function() {
         this.state.inMotion && this.transitionEnd()
      }, this))
   }, e.prototype.current = function(a) {
      if (a === d)
         return this._current;
      if (0 === this._items.length)
         return d;
      if (a = this.normalize(a), this._current !== a) {
         var b = this.trigger("change", {property: {name: "position", value: a}});
         b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {property: {name: "position", value: this._current}})
      }
      return this._current
   }, e.prototype.invalidate = function(a) {
      this._invalidated[a] = !0
   }, e.prototype.reset = function(a) {
      a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
   }, e.prototype.normalize = function(b, c) {
      var e = c ? this._items.length : this._items.length + this._clones.length;
      return!a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b))
   }, e.prototype.relative = function(a) {
      return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0)
   }, e.prototype.maximum = function(a) {
      var b, c, d, e = 0, f = this.settings;
      if (a)
         return this._items.length - 1;
      if (!f.loop && f.center)
         b = this._items.length - 1;
      else if (f.loop || f.center)
         if (f.loop || f.center)
            b = this._items.length + f.items;
         else {
            if (!f.autoWidth && !f.merge)
               throw"Can not detect maximum absolute position.";
            for (revert = f.rtl?1: - 1, c = this.$stage.width() - this.$element.width(); (d = this.coordinates(e)) && !(d * revert >= c); )
               b = ++e
         }
      else
         b = this._items.length - f.items;
      return b
   }, e.prototype.minimum = function(a) {
      return a ? 0 : this._clones.length / 2
   }, e.prototype.items = function(a) {
      return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
   }, e.prototype.mergers = function(a) {
      return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
   }, e.prototype.clones = function(b) {
      var c = this._clones.length / 2, e = c + this._items.length, f = function(a) {
         return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
      };
      return b === d ? a.map(this._clones, function(a, b) {
         return f(b)
      }) : a.map(this._clones, function(a, c) {
         return a === b ? f(c) : null
      })
   }, e.prototype.speed = function(a) {
      return a !== d && (this._speed = a), this._speed
   }, e.prototype.coordinates = function(b) {
      var c = null;
      return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
         return this.coordinates(b)
      }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c)
   }, e.prototype.duration = function(a, b, c) {
      return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
   }, e.prototype.to = function(c, d) {
      if (this.settings.loop) {
         var e = c - this.relative(this.current()), f = this.current(), g = this.current(), h = this.current() + e, i = 0 > g - h ? !0 : !1, j = this._clones.length + this._items.length;
         h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function() {
            this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update()
         }, this), 30)
      } else
         this.speed(this.duration(this.current(), c, d)), this.current(c), this.update()
   }, e.prototype.next = function(a) {
      a = a || !1, this.to(this.relative(this.current()) + 1, a)
   }, e.prototype.prev = function(a) {
      a = a || !1, this.to(this.relative(this.current()) - 1, a)
   }, e.prototype.transitionEnd = function(a) {
      return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
   }, e.prototype.viewport = function() {
      var d;
      if (this.options.responsiveBaseElement !== b)
         d = a(this.options.responsiveBaseElement).width();
      else if (b.innerWidth)
         d = b.innerWidth;
      else {
         if (!c.documentElement || !c.documentElement.clientWidth)
            throw"Can not detect viewport width.";
         d = c.documentElement.clientWidth
      }
      return d
   }, e.prototype.replace = function(b) {
      this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
         return 1 === this.nodeType
      }).each(a.proxy(function(a, b) {
         b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
      }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
   }, e.prototype.add = function(a, b) {
      b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", {content: a, position: b}), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {content: a, position: b})
   }, e.prototype.remove = function(a) {
      a = this.normalize(a, !0), a !== d && (this.trigger("remove", {content: this._items[a], position: a}), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {content: null, position: a}))
   }, e.prototype.addTriggerableEvents = function() {
      var b = a.proxy(function(b, c) {
         return a.proxy(function(a) {
            a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c]))
         }, this)
      }, this);
      a.each({next: this.next, prev: this.prev, to: this.to, destroy: this.destroy, refresh: this.refresh, replace: this.replace, add: this.add, remove: this.remove}, a.proxy(function(a, c) {
         this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"))
      }, this))
   }, e.prototype.watchVisibility = function() {
      function c(a) {
         return a.offsetWidth > 0 && a.offsetHeight > 0
      }
      function d() {
         c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile))
      }
      c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
   }, e.prototype.preloadAutoWidthImages = function(b) {
      var c, d, e, f;
      c = 0, d = this, b.each(function(g, h) {
         e = a(h), f = new Image, f.onload = function() {
            c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize())
         }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")
      })
   }, e.prototype.destroy = function() {
      this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
      for (var d in this._plugins)
         this._plugins[d].destroy();
      (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {
      }, this.$stage.off("dragstart", function() {
         return!1
      })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
   }, e.prototype.op = function(a, b, c) {
      var d = this.settings.rtl;
      switch (b) {
         case"<":
            return d ? a > c : c > a;
         case">":
            return d ? c > a : a > c;
         case">=":
            return d ? c >= a : a >= c;
         case"<=":
            return d ? a >= c : c >= a
         }
   }, e.prototype.on = function(a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
   }, e.prototype.off = function(a, b, c, d) {
      a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
   }, e.prototype.trigger = function(b, c, d) {
      var e = {item: {count: this._items.length, index: this.current()}}, f = a.camelCase(a.grep(["on", b, d], function(a) {
         return a
      }).join("-").toLowerCase()), g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({relatedTarget: this}, e, c));
      return this._supress[b] || (a.each(this._plugins, function(a, b) {
         b.onTrigger && b.onTrigger(g)
      }), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g
   }, e.prototype.suppress = function(b) {
      a.each(b, a.proxy(function(a, b) {
         this._supress[b] = !0
      }, this))
   }, e.prototype.release = function(b) {
      a.each(b, a.proxy(function(a, b) {
         delete this._supress[b]
      }, this))
   }, e.prototype.browserSupport = function() {
      if (this.support3d = j(), this.support3d) {
         this.transformVendor = i();
         var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
         this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
      }
      this.state.orientation = b.orientation
   }, a.fn.owlCarousel = function(b) {
      return this.each(function() {
         a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b))
      })
   }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document), function(a, b) {
   var c = function(b) {
      this._core = b, this._loaded = [], this._handlers = {"initialized.owl.carousel change.owl.carousel": a.proxy(function(b) {
            if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
               for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function(a, b) {
                  this.load(b)
               }, this); e++ < d; )
                  this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h)
         }, this)}, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers)
   };
   c.Defaults = {lazyLoad: !1}, c.prototype.load = function(c) {
      var d = this._core.$stage.children().eq(c), e = d && d.find(".owl-lazy");
      !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
         var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
         this._core.trigger("load", {element: f, url: g}, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
            f.css("opacity", 1), this._core.trigger("loaded", {element: f, url: g}, "lazy")
         }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() {
            f.css({"background-image": "url(" + g + ")", opacity: "1"}), this._core.trigger("loaded", {element: f, url: g}, "lazy")
         }, this), e.src = g)
      }, this)), this._loaded.push(d.get(0)))
   }, c.prototype.destroy = function() {
      var a, b;
      for (a in this.handlers)
         this._core.$element.off(a, this.handlers[a]);
      for (b in Object.getOwnPropertyNames(this))
         "function" != typeof this[b] && (this[b] = null)
   }, a.fn.owlCarousel.Constructor.Plugins.Lazy = c
}(window.Zepto || window.jQuery, window, document), function(a) {
   var b = function(c) {
      this._core = c, this._handlers = {"initialized.owl.carousel": a.proxy(function() {
            this._core.settings.autoHeight && this.update()
         }, this), "changed.owl.carousel": a.proxy(function(a) {
            this._core.settings.autoHeight && "position" == a.property.name && this.update()
         }, this), "loaded.owl.lazy": a.proxy(function(a) {
            this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
         }, this)}, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers)
   };
   b.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, b.prototype.update = function() {
      this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
   }, b.prototype.destroy = function() {
      var a, b;
      for (a in this._handlers)
         this._core.$element.off(a, this._handlers[a]);
      for (b in Object.getOwnPropertyNames(this))
         "function" != typeof this[b] && (this[b] = null)
   }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b
}(window.Zepto || window.jQuery, window, document), function(a, b, c) {
   var d = function(b) {
      this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {"resize.owl.carousel": a.proxy(function(a) {
            this._core.settings.video && !this.isInFullScreen() && a.preventDefault()
         }, this), "refresh.owl.carousel changed.owl.carousel": a.proxy(function() {
            this._playing && this.stop()
         }, this), "prepared.owl.carousel": a.proxy(function(b) {
            var c = a(b.content).find(".owl-video");
            c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
         }, this)}, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
         this.play(a)
      }, this))
   };
   d.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, d.prototype.fetch = function(a, b) {
      var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube", d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"), e = a.attr("data-width") || this._core.settings.videoWidth, f = a.attr("data-height") || this._core.settings.videoHeight, g = a.attr("href");
      if (!g)
         throw new Error("Missing video URL.");
      if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1)
         c = "youtube";
      else {
         if (!(d[3].indexOf("vimeo") > -1))
            throw new Error("Video URL not supported.");
         c = "vimeo"
      }
      d = d[6], this._videos[g] = {type: c, id: d, width: e, height: f}, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
   }, d.prototype.thumbnail = function(b, c) {
      var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "", h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function(a) {
         e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
      };
      return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "https://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({type: "GET", url: "https://vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a) {
            f = a[0].thumbnail_large, l(f)
         }}))
   }, d.prototype.stop = function() {
      this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
   }, d.prototype.play = function(b) {
      this._core.trigger("play", null, "video"), this._playing && this.stop();
      var c, d, e = a(b.target || b.srcElement), f = e.closest("." + this._core.settings.itemClass), g = this._videos[f.attr("data-video")], h = g.width || "100%", i = g.height || this._core.$stage.height();
      "youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="https://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="https://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d)
   }, d.prototype.isInFullScreen = function() {
      var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
      return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation, !1) : !0
   }, d.prototype.destroy = function() {
      var a, b;
      this._core.$element.off("click.owl.video");
      for (a in this._handlers)
         this._core.$element.off(a, this._handlers[a]);
      for (b in Object.getOwnPropertyNames(this))
         "function" != typeof this[b] && (this[b] = null)
   }, a.fn.owlCarousel.Constructor.Plugins.Video = d
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
   var e = function(b) {
      this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {"change.owl.carousel": a.proxy(function(a) {
            "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
         }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
            this.swapping = "translated" == a.type
         }, this), "translate.owl.carousel": a.proxy(function() {
            this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
         }, this)}, this.core.$element.on(this.handlers)
   };
   e.Defaults = {animateOut: !1, animateIn: !1}, e.prototype.swap = function() {
      if (1 === this.core.settings.items && this.core.support3d) {
         this.core.speed(0);
         var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut;
         this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({left: b + "px"}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c))
      }
   }, e.prototype.clear = function(b) {
      a(b.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
   }, e.prototype.destroy = function() {
      var a, b;
      for (a in this.handlers)
         this.core.$element.off(a, this.handlers[a]);
      for (b in Object.getOwnPropertyNames(this))
         "function" != typeof this[b] && (this[b] = null)
   }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document), function(a, b, c) {
   var d = function(b) {
      this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = {"translated.owl.carousel refreshed.owl.carousel": a.proxy(function() {
            this.autoplay()
         }, this), "play.owl.autoplay": a.proxy(function(a, b, c) {
            this.play(b, c)
         }, this), "stop.owl.autoplay": a.proxy(function() {
            this.stop()
         }, this), "mouseover.owl.autoplay": a.proxy(function() {
            this.core.settings.autoplayHoverPause && this.pause()
         }, this), "mouseleave.owl.autoplay": a.proxy(function() {
            this.core.settings.autoplayHoverPause && this.autoplay()
         }, this)}, this.core.$element.on(this.handlers)
   };
   d.Defaults = {autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1}, d.prototype.autoplay = function() {
      this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function() {
         this.play()
      }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval)
   }, d.prototype.play = function() {
      return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
   }, d.prototype.stop = function() {
      b.clearInterval(this.interval)
   }, d.prototype.pause = function() {
      b.clearInterval(this.interval)
   }, d.prototype.destroy = function() {
      var a, c;
      b.clearInterval(this.interval);
      for (a in this.handlers)
         this.core.$element.off(a, this.handlers[a]);
      for (c in Object.getOwnPropertyNames(this))
         "function" != typeof this[c] && (this[c] = null)
   }, a.fn.owlCarousel.Constructor.Plugins.autoplay = d
}(window.Zepto || window.jQuery, window, document), function(a) {
   "use strict";
   var b = function(c) {
      this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {next: this._core.next, prev: this._core.prev, to: this._core.to}, this._handlers = {"prepared.owl.carousel": a.proxy(function(b) {
            this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
         }, this), "add.owl.carousel": a.proxy(function(b) {
            this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
         }, this), "remove.owl.carousel prepared.owl.carousel": a.proxy(function(a) {
            this._core.settings.dotsData && this._templates.splice(a.position, 1)
         }, this), "change.owl.carousel": a.proxy(function(a) {
            if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
               var b = this._core.current(), c = this._core.maximum(), d = this._core.minimum();
               a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value
            }
         }, this), "changed.owl.carousel": a.proxy(function(a) {
            "position" == a.property.name && this.draw()
         }, this), "refreshed.owl.carousel": a.proxy(function() {
            this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
         }, this)}, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers)
   };
   b.Defaults = {nav: !1, navRewind: !0, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotData: !1, dotsSpeed: !1, dotsContainer: !1, controlsClass: "owl-controls"}, b.prototype.initialize = function() {
      var b, c, d = this._core.settings;
      d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function(b) {
         var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
         b.preventDefault(), this.to(c, d.dotsSpeed)
      }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function() {
         this.prev(d.navSpeed)
      }, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function() {
         this.next(d.navSpeed)
      }, this));
      for (c in this._overrides)
         this._core[c] = a.proxy(this[c], this)
   }, b.prototype.destroy = function() {
      var a, b, c, d;
      for (a in this._handlers)
         this.$element.off(a, this._handlers[a]);
      for (b in this._controls)
         this._controls[b].remove();
      for (d in this.overides)
         this._core[d] = this._overrides[d];
      for (c in Object.getOwnPropertyNames(this))
         "function" != typeof this[c] && (this[c] = null)
   }, b.prototype.update = function() {
      var a, b, c, d = this._core.settings, e = this._core.clones().length / 2, f = e + this._core.items().length, g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
      if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy)
         for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)
            (b >= g || 0 === b) && (this._pages.push({start: a - e, end: a - e + g - 1}), b = 0, ++c), b += this._core.mergers(this._core.relative(a))
   }, b.prototype.draw = function() {
      var b, c, d = "", e = this._core.settings, f = (this._core.$stage.children(), this._core.relative(this._core.current()));
      if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) {
         if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) {
            for (c = 0; c < this._controls.$indicators.children().length; c++)
               d += this._templates[this._core.relative(c)];
            this._controls.$indicators.html(d)
         } else
            b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
         this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active")
      }
      this._controls.$indicators.toggle(e.dots)
   }, b.prototype.onTrigger = function(b) {
      var c = this._core.settings;
      b.page = {index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items)}
   }, b.prototype.current = function() {
      var b = this._core.relative(this._core.current());
      return a.grep(this._pages, function(a) {
         return a.start <= b && a.end >= b
      }).pop()
   }, b.prototype.getPosition = function(b) {
      var c, d, e = this._core.settings;
      return"page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
   }, b.prototype.next = function(b) {
      a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
   }, b.prototype.prev = function(b) {
      a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
   }, b.prototype.to = function(b, c, d) {
      var e;
      d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
   }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b
}(window.Zepto || window.jQuery, window, document), function(a, b) {
   "use strict";
   var c = function(d) {
      this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = {"initialized.owl.carousel": a.proxy(function() {
            "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
         }, this), "prepared.owl.carousel": a.proxy(function(b) {
            var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
            this._hashes[c] = b.content
         }, this)}, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function() {
         var a = b.location.hash.substring(1), c = this._core.$stage.children(), d = this._hashes[a] && c.index(this._hashes[a]) || 0;
         return a ? void this._core.to(d, !1, !0) : !1
      }, this))
   };
   c.Defaults = {URLhashListener: !1}, c.prototype.destroy = function() {
      var c, d;
      a(b).off("hashchange.owl.navigation");
      for (c in this._handlers)
         this._core.$element.off(c, this._handlers[c]);
      for (d in Object.getOwnPropertyNames(this))
         "function" != typeof this[d] && (this[d] = null)
   }, a.fn.owlCarousel.Constructor.Plugins.Hash = c
}(window.Zepto || window.jQuery, window, document);




/*! Morphext - v2.3.2 - 2014-10-10 */
!function(a) {
   "use strict";
   function b(b, c) {
      this.element = a(b), this.settings = a.extend({}, d, c), this._defaults = d, this._init()
   }
   var c = "Morphext", d = {animation: "bounceIn", separator: ",", speed: 2e3, complete: a.noop};
   b.prototype = {_init: function() {
         var b = this;
         this.phrases = [], a.each(this.element.text().split(this.settings.separator), function(a, c) {
            b.phrases.push(c.trim())
         }), this.index = -1, this.animate(), this.start()
      }, animate: function() {
         this.index + 1 === this.phrases.length && (this.index = -1), ++this.index, this.element[0].innerHTML = '<span class="animated ' + this.settings.animation + '">' + this.phrases[this.index] + "</span>", a.isFunction(this.settings.complete) && this.settings.complete.call(this)
      }, start: function() {
         var a = this;
         this._interval = setInterval(function() {
            a.animate()
         }, this.settings.speed)
      }, stop: function() {
         this._interval = clearInterval(this._interval)
      }}, a.fn[c] = function(d) {
      return this.each(function() {
         a.data(this, "plugin_" + c) || a.data(this, "plugin_" + c, new b(this, d))
      })
   }
}(jQuery);




/*!
 * Isotope PACKAGED v2.1.0
 * Filter & sort magical layouts
 * https://isotope.metafizzy.co
 */

(function(t) {
   function e() {
   }
   function i(t) {
      function i(e) {
         e.prototype.option || (e.prototype.option = function(e) {
            t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
         })
      }
      function n(e, i) {
         t.fn[e] = function(n) {
            if ("string" == typeof n) {
               for (var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
                  var p = this[a], h = t.data(p, e);
                  if (h)
                     if (t.isFunction(h[n]) && "_" !== n.charAt(0)) {
                        var f = h[n].apply(h, s);
                        if (void 0 !== f)
                           return f
                     } else
                        r("no such method '" + n + "' for " + e + " instance");
                  else
                     r("cannot call methods on " + e + " prior to initialization; " + "attempted to call '" + n + "'")
               }
               return this
            }
            return this.each(function() {
               var o = t.data(this, e);
               o ? (o.option(n), o._init()) : (o = new i(this, n), t.data(this, e, o))
            })
         }
      }
      if (t) {
         var r = "undefined" == typeof console ? e : function(t) {
            console.error(t)
         };
         return t.bridget = function(t, e) {
            i(e), n(t, e)
         }, t.bridget
      }
   }
   var o = Array.prototype.slice;
   "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : "object" == typeof exports ? i(require("jquery")) : i(t.jQuery)
})(window), function(t) {
   function e(e) {
      var i = t.event;
      return i.target = i.target || i.srcElement || e, i
   }
   var i = document.documentElement, o = function() {
   };
   i.addEventListener ? o = function(t, e, i) {
      t.addEventListener(e, i, !1)
   } : i.attachEvent && (o = function(t, i, o) {
      t[i + o] = o.handleEvent ? function() {
         var i = e(t);
         o.handleEvent.call(o, i)
      } : function() {
         var i = e(t);
         o.call(t, i)
      }, t.attachEvent("on" + i, t[i + o])
   });
   var n = function() {
   };
   i.removeEventListener ? n = function(t, e, i) {
      t.removeEventListener(e, i, !1)
   } : i.detachEvent && (n = function(t, e, i) {
      t.detachEvent("on" + e, t[e + i]);
      try {
         delete t[e + i]
      } catch (o) {
         t[e + i] = void 0
      }
   });
   var r = {bind: o, unbind: n};
   "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(this), function(t) {
   function e(t) {
      "function" == typeof t && (e.isReady ? t() : s.push(t))
   }
   function i(t) {
      var i = "readystatechange" === t.type && "complete" !== r.readyState;
      e.isReady || i || o()
   }
   function o() {
      e.isReady = !0;
      for (var t = 0, i = s.length; i > t; t++) {
         var o = s[t];
         o()
      }
   }
   function n(n) {
      return"complete" === r.readyState ? o() : (n.bind(r, "DOMContentLoaded", i), n.bind(r, "readystatechange", i), n.bind(t, "load", i)), e
   }
   var r = t.document, s = [];
   e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], n) : "object" == typeof exports ? module.exports = n(require("eventie")) : t.docReady = n(t.eventie)
}(window), function() {
   function t() {
   }
   function e(t, e) {
      for (var i = t.length; i--; )
         if (t[i].listener === e)
            return i;
      return-1
   }
   function i(t) {
      return function() {
         return this[t].apply(this, arguments)
      }
   }
   var o = t.prototype, n = this, r = n.EventEmitter;
   o.getListeners = function(t) {
      var e, i, o = this._getEvents();
      if (t instanceof RegExp) {
         e = {};
         for (i in o)
            o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i])
      } else
         e = o[t] || (o[t] = []);
      return e
   }, o.flattenListeners = function(t) {
      var e, i = [];
      for (e = 0; t.length > e; e += 1)
         i.push(t[e].listener);
      return i
   }, o.getListenersAsObject = function(t) {
      var e, i = this.getListeners(t);
      return i instanceof Array && (e = {}, e[t] = i), e || i
   }, o.addListener = function(t, i) {
      var o, n = this.getListenersAsObject(t), r = "object" == typeof i;
      for (o in n)
         n.hasOwnProperty(o) && -1 === e(n[o], i) && n[o].push(r ? i : {listener: i, once: !1});
      return this
   }, o.on = i("addListener"), o.addOnceListener = function(t, e) {
      return this.addListener(t, {listener: e, once: !0})
   }, o.once = i("addOnceListener"), o.defineEvent = function(t) {
      return this.getListeners(t), this
   }, o.defineEvents = function(t) {
      for (var e = 0; t.length > e; e += 1)
         this.defineEvent(t[e]);
      return this
   }, o.removeListener = function(t, i) {
      var o, n, r = this.getListenersAsObject(t);
      for (n in r)
         r.hasOwnProperty(n) && (o = e(r[n], i), -1 !== o && r[n].splice(o, 1));
      return this
   }, o.off = i("removeListener"), o.addListeners = function(t, e) {
      return this.manipulateListeners(!1, t, e)
   }, o.removeListeners = function(t, e) {
      return this.manipulateListeners(!0, t, e)
   }, o.manipulateListeners = function(t, e, i) {
      var o, n, r = t ? this.removeListener : this.addListener, s = t ? this.removeListeners : this.addListeners;
      if ("object" != typeof e || e instanceof RegExp)
         for (o = i.length; o--; )
            r.call(this, e, i[o]);
      else
         for (o in e)
            e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n));
      return this
   }, o.removeEvent = function(t) {
      var e, i = typeof t, o = this._getEvents();
      if ("string" === i)
         delete o[t];
      else if (t instanceof RegExp)
         for (e in o)
            o.hasOwnProperty(e) && t.test(e) && delete o[e];
      else
         delete this._events;
      return this
   }, o.removeAllListeners = i("removeEvent"), o.emitEvent = function(t, e) {
      var i, o, n, r, s = this.getListenersAsObject(t);
      for (n in s)
         if (s.hasOwnProperty(n))
            for (o = s[n].length; o--; )
               i = s[n][o], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
      return this
   }, o.trigger = i("emitEvent"), o.emit = function(t) {
      var e = Array.prototype.slice.call(arguments, 1);
      return this.emitEvent(t, e)
   }, o.setOnceReturnValue = function(t) {
      return this._onceReturnValue = t, this
   }, o._getOnceReturnValue = function() {
      return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
   }, o._getEvents = function() {
      return this._events || (this._events = {})
   }, t.noConflict = function() {
      return n.EventEmitter = r, t
   }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
      return t
   }) : "object" == typeof module && module.exports ? module.exports = t : n.EventEmitter = t
}.call(this), function(t) {
   function e(t) {
      if (t) {
         if ("string" == typeof o[t])
            return t;
         t = t.charAt(0).toUpperCase() + t.slice(1);
         for (var e, n = 0, r = i.length; r > n; n++)
            if (e = i[n] + t, "string" == typeof o[e])
               return e
      }
   }
   var i = "Webkit Moz ms Ms O".split(" "), o = document.documentElement.style;
   "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
      return e
   }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window), function(t) {
   function e(t) {
      var e = parseFloat(t), i = -1 === t.indexOf("%") && !isNaN(e);
      return i && e
   }
   function i() {
   }
   function o() {
      for (var t = {width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0}, e = 0, i = s.length; i > e; e++) {
         var o = s[e];
         t[o] = 0
      }
      return t
   }
   function n(i) {
      function n() {
         if (!d) {
            d = !0;
            var o = t.getComputedStyle;
            if (p = function() {
               var t = o ? function(t) {
                  return o(t, null)
               } : function(t) {
                  return t.currentStyle
               };
               return function(e) {
                  var i = t(e);
                  return i || r("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? " + "See https://bit.ly/getsizebug1"), i
               }
            }(), h = i("boxSizing")) {
               var n = document.createElement("div");
               n.style.width = "200px", n.style.padding = "1px 2px 3px 4px", n.style.borderStyle = "solid", n.style.borderWidth = "1px 2px 3px 4px", n.style[h] = "border-box";
               var s = document.body || document.documentElement;
               s.appendChild(n);
               var a = p(n);
               f = 200 === e(a.width), s.removeChild(n)
            }
         }
      }
      function a(t) {
         if (n(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
            var i = p(t);
            if ("none" === i.display)
               return o();
            var r = {};
            r.width = t.offsetWidth, r.height = t.offsetHeight;
            for (var a = r.isBorderBox = !(!h || !i[h] || "border-box" !== i[h]), d = 0, l = s.length; l > d; d++) {
               var c = s[d], y = i[c];
               y = u(t, y);
               var m = parseFloat(y);
               r[c] = isNaN(m) ? 0 : m
            }
            var g = r.paddingLeft + r.paddingRight, v = r.paddingTop + r.paddingBottom, _ = r.marginLeft + r.marginRight, I = r.marginTop + r.marginBottom, L = r.borderLeftWidth + r.borderRightWidth, z = r.borderTopWidth + r.borderBottomWidth, b = a && f, x = e(i.width);
            x !== !1 && (r.width = x + (b ? 0 : g + L));
            var S = e(i.height);
            return S !== !1 && (r.height = S + (b ? 0 : v + z)), r.innerWidth = r.width - (g + L), r.innerHeight = r.height - (v + z), r.outerWidth = r.width + _, r.outerHeight = r.height + I, r
         }
      }
      function u(e, i) {
         if (t.getComputedStyle || -1 === i.indexOf("%"))
            return i;
         var o = e.style, n = o.left, r = e.runtimeStyle, s = r && r.left;
         return s && (r.left = e.currentStyle.left), o.left = i, i = o.pixelLeft, o.left = n, s && (r.left = s), i
      }
      var p, h, f, d = !1;
      return a
   }
   var r = "undefined" == typeof console ? i : function(t) {
      console.error(t)
   }, s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
   "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("desandro-get-style-property")) : t.getSize = n(t.getStyleProperty)
}(window), function(t) {
   function e(t, e) {
      return t[s](e)
   }
   function i(t) {
      if (!t.parentNode) {
         var e = document.createDocumentFragment();
         e.appendChild(t)
      }
   }
   function o(t, e) {
      i(t);
      for (var o = t.parentNode.querySelectorAll(e), n = 0, r = o.length; r > n; n++)
         if (o[n] === t)
            return!0;
      return!1
   }
   function n(t, o) {
      return i(t), e(t, o)
   }
   var r, s = function() {
      if (t.matchesSelector)
         return"matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0, o = e.length; o > i; i++) {
         var n = e[i], r = n + "MatchesSelector";
         if (t[r])
            return r
      }
   }();
   if (s) {
      var a = document.createElement("div"), u = e(a, "div");
      r = u ? e : n
   } else
      r = o;
   "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
      return r
   }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
}(Element.prototype), function(t) {
   function e(t, e) {
      for (var i in e)
         t[i] = e[i];
      return t
   }
   function i(t) {
      for (var e in t)
         return!1;
      return e = null, !0
   }
   function o(t) {
      return t.replace(/([A-Z])/g, function(t) {
         return"-" + t.toLowerCase()
      })
   }
   function n(t, n, r) {
      function a(t, e) {
         t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
      }
      var u = r("transition"), p = r("transform"), h = u && p, f = !!r("perspective"), d = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend"}[u], l = ["transform", "transition", "transitionDuration", "transitionProperty"], c = function() {
         for (var t = {}, e = 0, i = l.length; i > e; e++) {
            var o = l[e], n = r(o);
            n && n !== o && (t[o] = n)
         }
         return t
      }();
      e(a.prototype, t.prototype), a.prototype._create = function() {
         this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
      }, a.prototype.handleEvent = function(t) {
         var e = "on" + t.type;
         this[e] && this[e](t)
      }, a.prototype.getSize = function() {
         this.size = n(this.element)
      }, a.prototype.css = function(t) {
         var e = this.element.style;
         for (var i in t) {
            var o = c[i] || i;
            e[o] = t[i]
         }
      }, a.prototype.getPosition = function() {
         var t = s(this.element), e = this.layout.options, i = e.isOriginLeft, o = e.isOriginTop, n = parseInt(t[i ? "left" : "right"], 10), r = parseInt(t[o ? "top" : "bottom"], 10);
         n = isNaN(n) ? 0 : n, r = isNaN(r) ? 0 : r;
         var a = this.layout.size;
         n -= i ? a.paddingLeft : a.paddingRight, r -= o ? a.paddingTop : a.paddingBottom, this.position.x = n, this.position.y = r
      }, a.prototype.layoutPosition = function() {
         var t = this.layout.size, e = this.layout.options, i = {};
         e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""), e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this])
      };
      var y = f ? function(t, e) {
         return"translate3d(" + t + "px, " + e + "px, 0)"
      } : function(t, e) {
         return"translate(" + t + "px, " + e + "px)"
      };
      a.prototype._transitionTo = function(t, e) {
         this.getPosition();
         var i = this.position.x, o = this.position.y, n = parseInt(t, 10), r = parseInt(e, 10), s = n === this.position.x && r === this.position.y;
         if (this.setPosition(t, e), s && !this.isTransitioning)
            return this.layoutPosition(), void 0;
         var a = t - i, u = e - o, p = {}, h = this.layout.options;
         a = h.isOriginLeft ? a : -a, u = h.isOriginTop ? u : -u, p.transform = y(a, u), this.transition({to: p, onTransitionEnd: {transform: this.layoutPosition}, isCleaning: !0})
      }, a.prototype.goTo = function(t, e) {
         this.setPosition(t, e), this.layoutPosition()
      }, a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function(t, e) {
         this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
      }, a.prototype._nonTransition = function(t) {
         this.css(t.to), t.isCleaning && this._removeStyles(t.to);
         for (var e in t.onTransitionEnd)
            t.onTransitionEnd[e].call(this)
      }, a.prototype._transition = function(t) {
         if (!parseFloat(this.layout.options.transitionDuration))
            return this._nonTransition(t), void 0;
         var e = this._transn;
         for (var i in t.onTransitionEnd)
            e.onEnd[i] = t.onTransitionEnd[i];
         for (i in t.to)
            e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
         if (t.from) {
            this.css(t.from);
            var o = this.element.offsetHeight;
            o = null
         }
         this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
      };
      var m = p && o(p) + ",opacity";
      a.prototype.enableTransition = function() {
         this.isTransitioning || (this.css({transitionProperty: m, transitionDuration: this.layout.options.transitionDuration}), this.element.addEventListener(d, this, !1))
      }, a.prototype.transition = a.prototype[u ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function(t) {
         this.ontransitionend(t)
      }, a.prototype.onotransitionend = function(t) {
         this.ontransitionend(t)
      };
      var g = {"-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform"};
      a.prototype.ontransitionend = function(t) {
         if (t.target === this.element) {
            var e = this._transn, o = g[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
               var n = e.onEnd[o];
               n.call(this), delete e.onEnd[o]
            }
            this.emitEvent("transitionEnd", [this])
         }
      }, a.prototype.disableTransition = function() {
         this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), this.isTransitioning = !1
      }, a.prototype._removeStyles = function(t) {
         var e = {};
         for (var i in t)
            e[i] = "";
         this.css(e)
      };
      var v = {transitionProperty: "", transitionDuration: ""};
      return a.prototype.removeTransitionStyles = function() {
         this.css(v)
      }, a.prototype.removeElem = function() {
         this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
      }, a.prototype.remove = function() {
         if (!u || !parseFloat(this.layout.options.transitionDuration))
            return this.removeElem(), void 0;
         var t = this;
         this.on("transitionEnd", function() {
            return t.removeElem(), !0
         }), this.hide()
      }, a.prototype.reveal = function() {
         delete this.isHidden, this.css({display: ""});
         var t = this.layout.options;
         this.transition({from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0})
      }, a.prototype.hide = function() {
         this.isHidden = !0, this.css({display: ""});
         var t = this.layout.options;
         this.transition({from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: {opacity: function() {
                  this.isHidden && this.css({display: "none"})
               }}})
      }, a.prototype.destroy = function() {
         this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
      }, a
   }
   var r = t.getComputedStyle, s = r ? function(t) {
      return r(t, null)
   } : function(t) {
      return t.currentStyle
   };
   "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property")) : (t.Outlayer = {}, t.Outlayer.Item = n(t.EventEmitter, t.getSize, t.getStyleProperty))
}(window), function(t) {
   function e(t, e) {
      for (var i in e)
         t[i] = e[i];
      return t
   }
   function i(t) {
      return"[object Array]" === f.call(t)
   }
   function o(t) {
      var e = [];
      if (i(t))
         e = t;
      else if (t && "number" == typeof t.length)
         for (var o = 0, n = t.length; n > o; o++)
            e.push(t[o]);
      else
         e.push(t);
      return e
   }
   function n(t, e) {
      var i = l(e, t);
      -1 !== i && e.splice(i, 1)
   }
   function r(t) {
      return t.replace(/(.)([A-Z])/g, function(t, e, i) {
         return e + "-" + i
      }).toLowerCase()
   }
   function s(i, s, f, l, c, y) {
      function m(t, i) {
         if ("string" == typeof t && (t = a.querySelector(t)), !t || !d(t))
            return u && u.error("Bad " + this.constructor.namespace + " element: " + t), void 0;
         this.element = t, this.options = e({}, this.constructor.defaults), this.option(i);
         var o = ++g;
         this.element.outlayerGUID = o, v[o] = this, this._create(), this.options.isInitLayout && this.layout()
      }
      var g = 0, v = {};
      return m.namespace = "outlayer", m.Item = y, m.defaults = {containerStyle: {position: "relative"}, isInitLayout: !0, isOriginLeft: !0, isOriginTop: !0, isResizeBound: !0, isResizingContainer: !0, transitionDuration: "0.4s", hiddenStyle: {opacity: 0, transform: "scale(0.001)"}, visibleStyle: {opacity: 1, transform: "scale(1)"}}, e(m.prototype, f.prototype), m.prototype.option = function(t) {
         e(this.options, t)
      }, m.prototype._create = function() {
         this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
      }, m.prototype.reloadItems = function() {
         this.items = this._itemize(this.element.children)
      }, m.prototype._itemize = function(t) {
         for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; r > n; n++) {
            var s = e[n], a = new i(s, this);
            o.push(a)
         }
         return o
      }, m.prototype._filterFindItemElements = function(t) {
         t = o(t);
         for (var e = this.options.itemSelector, i = [], n = 0, r = t.length; r > n; n++) {
            var s = t[n];
            if (d(s))
               if (e) {
                  c(s, e) && i.push(s);
                  for (var a = s.querySelectorAll(e), u = 0, p = a.length; p > u; u++)
                     i.push(a[u])
               } else
                  i.push(s)
         }
         return i
      }, m.prototype.getItemElements = function() {
         for (var t = [], e = 0, i = this.items.length; i > e; e++)
            t.push(this.items[e].element);
         return t
      }, m.prototype.layout = function() {
         this._resetLayout(), this._manageStamps();
         var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
         this.layoutItems(this.items, t), this._isLayoutInited = !0
      }, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function() {
         this.getSize()
      }, m.prototype.getSize = function() {
         this.size = l(this.element)
      }, m.prototype._getMeasurement = function(t, e) {
         var i, o = this.options[t];
         o ? ("string" == typeof o ? i = this.element.querySelector(o) : d(o) && (i = o), this[t] = i ? l(i)[e] : o) : this[t] = 0
      }, m.prototype.layoutItems = function(t, e) {
         t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
      }, m.prototype._getItemsForLayout = function(t) {
         for (var e = [], i = 0, o = t.length; o > i; i++) {
            var n = t[i];
            n.isIgnored || e.push(n)
         }
         return e
      }, m.prototype._layoutItems = function(t, e) {
         function i() {
            o.emitEvent("layoutComplete", [o, t])
         }
         var o = this;
         if (!t || !t.length)
            return i(), void 0;
         this._itemsOn(t, "layout", i);
         for (var n = [], r = 0, s = t.length; s > r; r++) {
            var a = t[r], u = this._getItemLayoutPosition(a);
            u.item = a, u.isInstant = e || a.isLayoutInstant, n.push(u)
         }
         this._processLayoutQueue(n)
      }, m.prototype._getItemLayoutPosition = function() {
         return{x: 0, y: 0}
      }, m.prototype._processLayoutQueue = function(t) {
         for (var e = 0, i = t.length; i > e; e++) {
            var o = t[e];
            this._positionItem(o.item, o.x, o.y, o.isInstant)
         }
      }, m.prototype._positionItem = function(t, e, i, o) {
         o ? t.goTo(e, i) : t.moveTo(e, i)
      }, m.prototype._postLayout = function() {
         this.resizeContainer()
      }, m.prototype.resizeContainer = function() {
         if (this.options.isResizingContainer) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
         }
      }, m.prototype._getContainerSize = h, m.prototype._setContainerMeasure = function(t, e) {
         if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
         }
      }, m.prototype._itemsOn = function(t, e, i) {
         function o() {
            return n++, n === r && i.call(s), !0
         }
         for (var n = 0, r = t.length, s = this, a = 0, u = t.length; u > a; a++) {
            var p = t[a];
            p.on(e, o)
         }
      }, m.prototype.ignore = function(t) {
         var e = this.getItem(t);
         e && (e.isIgnored = !0)
      }, m.prototype.unignore = function(t) {
         var e = this.getItem(t);
         e && delete e.isIgnored
      }, m.prototype.stamp = function(t) {
         if (t = this._find(t)) {
            this.stamps = this.stamps.concat(t);
            for (var e = 0, i = t.length; i > e; e++) {
               var o = t[e];
               this.ignore(o)
            }
         }
      }, m.prototype.unstamp = function(t) {
         if (t = this._find(t))
            for (var e = 0, i = t.length; i > e; e++) {
               var o = t[e];
               n(o, this.stamps), this.unignore(o)
            }
      }, m.prototype._find = function(t) {
         return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o(t)) : void 0
      }, m.prototype._manageStamps = function() {
         if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var t = 0, e = this.stamps.length; e > t; t++) {
               var i = this.stamps[t];
               this._manageStamp(i)
            }
         }
      }, m.prototype._getBoundingRect = function() {
         var t = this.element.getBoundingClientRect(), e = this.size;
         this._boundingRect = {left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)}
      }, m.prototype._manageStamp = h, m.prototype._getElementOffset = function(t) {
         var e = t.getBoundingClientRect(), i = this._boundingRect, o = l(t), n = {left: e.left - i.left - o.marginLeft, top: e.top - i.top - o.marginTop, right: i.right - e.right - o.marginRight, bottom: i.bottom - e.bottom - o.marginBottom};
         return n
      }, m.prototype.handleEvent = function(t) {
         var e = "on" + t.type;
         this[e] && this[e](t)
      }, m.prototype.bindResize = function() {
         this.isResizeBound || (i.bind(t, "resize", this), this.isResizeBound = !0)
      }, m.prototype.unbindResize = function() {
         this.isResizeBound && i.unbind(t, "resize", this), this.isResizeBound = !1
      }, m.prototype.onresize = function() {
         function t() {
            e.resize(), delete e.resizeTimeout
         }
         this.resizeTimeout && clearTimeout(this.resizeTimeout);
         var e = this;
         this.resizeTimeout = setTimeout(t, 100)
      }, m.prototype.resize = function() {
         this.isResizeBound && this.needsResizeLayout() && this.layout()
      }, m.prototype.needsResizeLayout = function() {
         var t = l(this.element), e = this.size && t;
         return e && t.innerWidth !== this.size.innerWidth
      }, m.prototype.addItems = function(t) {
         var e = this._itemize(t);
         return e.length && (this.items = this.items.concat(e)), e
      }, m.prototype.appended = function(t) {
         var e = this.addItems(t);
         e.length && (this.layoutItems(e, !0), this.reveal(e))
      }, m.prototype.prepended = function(t) {
         var e = this._itemize(t);
         if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
         }
      }, m.prototype.reveal = function(t) {
         var e = t && t.length;
         if (e)
            for (var i = 0; e > i; i++) {
               var o = t[i];
               o.reveal()
            }
      }, m.prototype.hide = function(t) {
         var e = t && t.length;
         if (e)
            for (var i = 0; e > i; i++) {
               var o = t[i];
               o.hide()
            }
      }, m.prototype.getItem = function(t) {
         for (var e = 0, i = this.items.length; i > e; e++) {
            var o = this.items[e];
            if (o.element === t)
               return o
         }
      }, m.prototype.getItems = function(t) {
         if (t && t.length) {
            for (var e = [], i = 0, o = t.length; o > i; i++) {
               var n = t[i], r = this.getItem(n);
               r && e.push(r)
            }
            return e
         }
      }, m.prototype.remove = function(t) {
         t = o(t);
         var e = this.getItems(t);
         if (e && e.length) {
            this._itemsOn(e, "remove", function() {
               this.emitEvent("removeComplete", [this, e])
            });
            for (var i = 0, r = e.length; r > i; i++) {
               var s = e[i];
               s.remove(), n(s, this.items)
            }
         }
      }, m.prototype.destroy = function() {
         var t = this.element.style;
         t.height = "", t.position = "", t.width = "";
         for (var e = 0, i = this.items.length; i > e; e++) {
            var o = this.items[e];
            o.destroy()
         }
         this.unbindResize();
         var n = this.element.outlayerGUID;
         delete v[n], delete this.element.outlayerGUID, p && p.removeData(this.element, this.constructor.namespace)
      }, m.data = function(t) {
         var e = t && t.outlayerGUID;
         return e && v[e]
      }, m.create = function(t, i) {
         function o() {
            m.apply(this, arguments)
         }
         return Object.create ? o.prototype = Object.create(m.prototype) : e(o.prototype, m.prototype), o.prototype.constructor = o, o.defaults = e({}, m.defaults), e(o.defaults, i), o.prototype.settings = {}, o.namespace = t, o.data = m.data, o.Item = function() {
            y.apply(this, arguments)
         }, o.Item.prototype = new y, s(function() {
            for (var e = r(t), i = a.querySelectorAll(".js-" + e), n = "data-" + e + "-options", s = 0, h = i.length; h > s; s++) {
               var f, d = i[s], l = d.getAttribute(n);
               try {
                  f = l && JSON.parse(l)
               } catch (c) {
                  u && u.error("Error parsing " + n + " on " + d.nodeName.toLowerCase() + (d.id ? "#" + d.id : "") + ": " + c);
                  continue
               }
               var y = new o(d, f);
               p && p.data(d, t, y)
            }
         }), p && p.bridget && p.bridget(t, o), o
      }, m.Item = y, m
   }
   var a = t.document, u = t.console, p = t.jQuery, h = function() {
   }, f = Object.prototype.toString, d = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
      return t instanceof HTMLElement
   } : function(t) {
      return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
   }, l = Array.prototype.indexOf ? function(t, e) {
      return t.indexOf(e)
   } : function(t, e) {
      for (var i = 0, o = t.length; o > i; i++)
         if (t[i] === e)
            return i;
      return-1
   };
   "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : "object" == typeof exports ? module.exports = s(require("eventie"), require("doc-ready"), require("wolfy87-eventemitter"), require("get-size"), require("desandro-matches-selector"), require("./item")) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
}(window), function(t) {
   function e(t) {
      function e() {
         t.Item.apply(this, arguments)
      }
      e.prototype = new t.Item, e.prototype._create = function() {
         this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
      }, e.prototype.updateSortData = function() {
         if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData, e = this.layout._sorters;
            for (var i in t) {
               var o = e[i];
               this.sortData[i] = o(this.element, this)
            }
         }
      };
      var i = e.prototype.destroy;
      return e.prototype.destroy = function() {
         i.apply(this, arguments), this.css({display: ""})
      }, e
   }
   "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window), function(t) {
   function e(t, e) {
      function i(t) {
         this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
      }
      return function() {
         function t(t) {
            return function() {
               return e.prototype[t].apply(this.isotope, arguments)
            }
         }
         for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) {
            var s = o[n];
            i.prototype[s] = t(s)
         }
      }(), i.prototype.needsVerticalResizeLayout = function() {
         var e = t(this.isotope.element), i = this.isotope.size && e;
         return i && e.innerHeight !== this.isotope.size.innerHeight
      }, i.prototype._getMeasurement = function() {
         this.isotope._getMeasurement.apply(this, arguments)
      }, i.prototype.getColumnWidth = function() {
         this.getSegmentSize("column", "Width")
      }, i.prototype.getRowHeight = function() {
         this.getSegmentSize("row", "Height")
      }, i.prototype.getSegmentSize = function(t, e) {
         var i = t + e, o = "outer" + e;
         if (this._getMeasurement(i, o), !this[i]) {
            var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + e]
         }
      }, i.prototype.getFirstItemSize = function() {
         var e = this.isotope.filteredItems[0];
         return e && e.element && t(e.element)
      }, i.prototype.layout = function() {
         this.isotope.layout.apply(this.isotope, arguments)
      }, i.prototype.getSize = function() {
         this.isotope.getSize(), this.size = this.isotope.size
      }, i.modes = {}, i.create = function(t, e) {
         function o() {
            i.apply(this, arguments)
         }
         return o.prototype = new i, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
      }, i
   }
   "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window), function(t) {
   function e(t, e) {
      var o = t.create("masonry");
      return o.prototype._resetLayout = function() {
         this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
         var t = this.cols;
         for (this.colYs = []; t--; )
            this.colYs.push(0);
         this.maxY = 0
      }, o.prototype.measureColumns = function() {
         if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0], i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
         }
         this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
      }, o.prototype.getContainerWidth = function() {
         var t = this.options.isFitWidth ? this.element.parentNode : this.element, i = e(t);
         this.containerWidth = i && i.innerWidth
      }, o.prototype._getItemLayoutPosition = function(t) {
         t.getSize();
         var e = t.size.outerWidth % this.columnWidth, o = e && 1 > e ? "round" : "ceil", n = Math[o](t.size.outerWidth / this.columnWidth);
         n = Math.min(n, this.cols);
         for (var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i(r, s), u = {x: this.columnWidth * a, y: s}, p = s + t.size.outerHeight, h = this.cols + 1 - r.length, f = 0; h > f; f++)
            this.colYs[a + f] = p;
         return u
      }, o.prototype._getColGroup = function(t) {
         if (2 > t)
            return this.colYs;
         for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
            var n = this.colYs.slice(o, o + t);
            e[o] = Math.max.apply(Math, n)
         }
         return e
      }, o.prototype._manageStamp = function(t) {
         var i = e(t), o = this._getElementOffset(t), n = this.options.isOriginLeft ? o.left : o.right, r = n + i.outerWidth, s = Math.floor(n / this.columnWidth);
         s = Math.max(0, s);
         var a = Math.floor(r / this.columnWidth);
         a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
         for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++)
            this.colYs[p] = Math.max(u, this.colYs[p])
      }, o.prototype._getContainerSize = function() {
         this.maxY = Math.max.apply(Math, this.colYs);
         var t = {height: this.maxY};
         return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
      }, o.prototype._getContainerFitWidth = function() {
         for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
            t++;
         return(this.cols - t) * this.columnWidth - this.gutter
      }, o.prototype.needsResizeLayout = function() {
         var t = this.containerWidth;
         return this.getContainerWidth(), t !== this.containerWidth
      }, o
   }
   var i = Array.prototype.indexOf ? function(t, e) {
      return t.indexOf(e)
   } : function(t, e) {
      for (var i = 0, o = t.length; o > i; i++) {
         var n = t[i];
         if (n === e)
            return i
      }
      return-1
   };
   "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window), function(t) {
   function e(t, e) {
      for (var i in e)
         t[i] = e[i];
      return t
   }
   function i(t, i) {
      var o = t.create("masonry"), n = o.prototype._getElementOffset, r = o.prototype.layout, s = o.prototype._getMeasurement;
      e(o.prototype, i.prototype), o.prototype._getElementOffset = n, o.prototype.layout = r, o.prototype._getMeasurement = s;
      var a = o.prototype.measureColumns;
      o.prototype.measureColumns = function() {
         this.items = this.isotope.filteredItems, a.call(this)
      };
      var u = o.prototype._manageStamp;
      return o.prototype._manageStamp = function() {
         this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, u.apply(this, arguments)
      }, o
   }
   "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], i) : "object" == typeof exports ? module.exports = i(require("../layout-mode"), require("masonry-layout")) : i(t.Isotope.LayoutMode, t.Masonry)
}(window), function(t) {
   function e(t) {
      var e = t.create("fitRows");
      return e.prototype._resetLayout = function() {
         this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
      }, e.prototype._getItemLayoutPosition = function(t) {
         t.getSize();
         var e = t.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter;
         0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
         var o = {x: this.x, y: this.y};
         return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
      }, e.prototype._getContainerSize = function() {
         return{height: this.maxY}
      }, e
   }
   "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window), function(t) {
   function e(t) {
      var e = t.create("vertical", {horizontalAlignment: 0});
      return e.prototype._resetLayout = function() {
         this.y = 0
      }, e.prototype._getItemLayoutPosition = function(t) {
         t.getSize();
         var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
         return this.y += t.size.outerHeight, {x: e, y: i}
      }, e.prototype._getContainerSize = function() {
         return{height: this.y}
      }, e
   }
   "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window), function(t) {
   function e(t, e) {
      for (var i in e)
         t[i] = e[i];
      return t
   }
   function i(t) {
      return"[object Array]" === h.call(t)
   }
   function o(t) {
      var e = [];
      if (i(t))
         e = t;
      else if (t && "number" == typeof t.length)
         for (var o = 0, n = t.length; n > o; o++)
            e.push(t[o]);
      else
         e.push(t);
      return e
   }
   function n(t, e) {
      var i = f(e, t);
      -1 !== i && e.splice(i, 1)
   }
   function r(t, i, r, u, h) {
      function f(t, e) {
         return function(i, o) {
            for (var n = 0, r = t.length; r > n; n++) {
               var s = t[n], a = i.sortData[s], u = o.sortData[s];
               if (a > u || u > a) {
                  var p = void 0 !== e[s] ? e[s] : e, h = p ? 1 : -1;
                  return(a > u ? 1 : -1) * h
               }
            }
            return 0
         }
      }
      var d = t.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
      d.Item = u, d.LayoutMode = h, d.prototype._create = function() {
         this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
         for (var e in h.modes)
            this._initLayoutMode(e)
      }, d.prototype.reloadItems = function() {
         this.itemGUID = 0, t.prototype.reloadItems.call(this)
      }, d.prototype._itemize = function() {
         for (var e = t.prototype._itemize.apply(this, arguments), i = 0, o = e.length; o > i; i++) {
            var n = e[i];
            n.id = this.itemGUID++
         }
         return this._updateItemsSortData(e), e
      }, d.prototype._initLayoutMode = function(t) {
         var i = h.modes[t], o = this.options[t] || {};
         this.options[t] = i.options ? e(i.options, o) : o, this.modes[t] = new i(this)
      }, d.prototype.layout = function() {
         return!this._isLayoutInited && this.options.isInitLayout ? (this.arrange(), void 0) : (this._layout(), void 0)
      }, d.prototype._layout = function() {
         var t = this._getIsInstant();
         this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
      }, d.prototype.arrange = function(t) {
         this.option(t), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
      }, d.prototype._init = d.prototype.arrange, d.prototype._getIsInstant = function() {
         var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
         return this._isInstant = t, t
      }, d.prototype._filter = function(t) {
         function e() {
            f.reveal(n), f.hide(r)
         }
         var i = this.options.filter;
         i = i || "*";
         for (var o = [], n = [], r = [], s = this._getFilterTest(i), a = 0, u = t.length; u > a; a++) {
            var p = t[a];
            if (!p.isIgnored) {
               var h = s(p);
               h && o.push(p), h && p.isHidden ? n.push(p) : h || p.isHidden || r.push(p)
            }
         }
         var f = this;
         return this._isInstant ? this._noTransition(e) : e(), o
      }, d.prototype._getFilterTest = function(t) {
         return s && this.options.isJQueryFiltering ? function(e) {
            return s(e.element).is(t)
         } : "function" == typeof t ? function(e) {
            return t(e.element)
         } : function(e) {
            return r(e.element, t)
         }
      }, d.prototype.updateSortData = function(t) {
         var e;
         t ? (t = o(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
      }, d.prototype._getSorters = function() {
         var t = this.options.getSortData;
         for (var e in t) {
            var i = t[e];
            this._sorters[e] = l(i)
         }
      }, d.prototype._updateItemsSortData = function(t) {
         for (var e = t && t.length, i = 0; e && e > i; i++) {
            var o = t[i];
            o.updateSortData()
         }
      };
      var l = function() {
         function t(t) {
            if ("string" != typeof t)
               return t;
            var i = a(t).split(" "), o = i[0], n = o.match(/^\[(.+)\]$/), r = n && n[1], s = e(r, o), u = d.sortDataParsers[i[1]];
            return t = u ? function(t) {
               return t && u(s(t))
            } : function(t) {
               return t && s(t)
            }
         }
         function e(t, e) {
            var i;
            return i = t ? function(e) {
               return e.getAttribute(t)
            } : function(t) {
               var i = t.querySelector(e);
               return i && p(i)
            }
         }
         return t
      }();
      d.sortDataParsers = {parseInt: function(t) {
            return parseInt(t, 10)
         }, parseFloat: function(t) {
            return parseFloat(t)
         }}, d.prototype._sort = function() {
         var t = this.options.sortBy;
         if (t) {
            var e = [].concat.apply(t, this.sortHistory), i = f(e, this.options.sortAscending);
            this.filteredItems.sort(i), t !== this.sortHistory[0] && this.sortHistory.unshift(t)
         }
      }, d.prototype._mode = function() {
         var t = this.options.layoutMode, e = this.modes[t];
         if (!e)
            throw Error("No layout mode: " + t);
         return e.options = this.options[t], e
      }, d.prototype._resetLayout = function() {
         t.prototype._resetLayout.call(this), this._mode()._resetLayout()
      }, d.prototype._getItemLayoutPosition = function(t) {
         return this._mode()._getItemLayoutPosition(t)
      }, d.prototype._manageStamp = function(t) {
         this._mode()._manageStamp(t)
      }, d.prototype._getContainerSize = function() {
         return this._mode()._getContainerSize()
      }, d.prototype.needsResizeLayout = function() {
         return this._mode().needsResizeLayout()
      }, d.prototype.appended = function(t) {
         var e = this.addItems(t);
         if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
         }
      }, d.prototype.prepended = function(t) {
         var e = this._itemize(t);
         if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps();
            var o = this._filterRevealAdded(e);
            this.layoutItems(i), this.filteredItems = o.concat(this.filteredItems)
         }
      }, d.prototype._filterRevealAdded = function(t) {
         var e = this._noTransition(function() {
            return this._filter(t)
         });
         return this.layoutItems(e, !0), this.reveal(e), t
      }, d.prototype.insert = function(t) {
         var e = this.addItems(t);
         if (e.length) {
            var i, o, n = e.length;
            for (i = 0; n > i; i++)
               o = e[i], this.element.appendChild(o.element);
            var r = this._filter(e);
            for (this._noTransition(function() {
               this.hide(r)
            }), i = 0; n > i; i++)
               e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; n > i; i++)
               delete e[i].isLayoutInstant;
            this.reveal(r)
         }
      };
      var c = d.prototype.remove;
      return d.prototype.remove = function(t) {
         t = o(t);
         var e = this.getItems(t);
         if (c.call(this, t), e && e.length)
            for (var i = 0, r = e.length; r > i; i++) {
               var s = e[i];
               n(s, this.filteredItems)
            }
      }, d.prototype.shuffle = function() {
         for (var t = 0, e = this.items.length; e > t; t++) {
            var i = this.items[t];
            i.sortData.random = Math.random()
         }
         this.options.sortBy = "random", this._sort(), this._layout()
      }, d.prototype._noTransition = function(t) {
         var e = this.options.transitionDuration;
         this.options.transitionDuration = 0;
         var i = t.call(this);
         return this.options.transitionDuration = e, i
      }, d.prototype.getFilteredItemElements = function() {
         for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++)
            t.push(this.filteredItems[e].element);
         return t
      }, d
   }
   var s = t.jQuery, a = String.prototype.trim ? function(t) {
      return t.trim()
   } : function(t) {
      return t.replace(/^\s+|\s+$/g, "")
   }, u = document.documentElement, p = u.textContent ? function(t) {
      return t.textContent
   } : function(t) {
      return t.innerText
   }, h = Object.prototype.toString, f = Array.prototype.indexOf ? function(t, e) {
      return t.indexOf(e)
   } : function(t, e) {
      for (var i = 0, o = t.length; o > i; i++)
         if (t[i] === e)
            return i;
      return-1
   };
   "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : "object" == typeof exports ? module.exports = r(require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
}(window);




/*
 * Swiper 2.7.5
 * Mobile touch slider and framework with hardware accelerated transitions
 *
 * https://www.idangero.us/sliders/swiper/
 *
 * Copyright 2010-2017, Vladimir Kharlampidi
 * The iDangero.us
 * https://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Released on: January 4, 2017
 */
var Swiper = function(a, b) {
   "use strict";
   function c(a, b) {
      return document.querySelectorAll ? (b || document).querySelectorAll(a) : jQuery(a, b)
   }
   function d(a) {
      return"[object Array]" === Object.prototype.toString.apply(a) ? !0 : !1
   }
   function e() {
      var a = G - J;
      return b.freeMode && (a = G - J), b.slidesPerView > D.slides.length && !b.centeredSlides && (a = 0), 0 > a && (a = 0), a
   }
   function f() {
      function a(a) {
         var c, d, e = function() {
            "undefined" != typeof D && null !== D && (void 0 !== D.imagesLoaded && D.imagesLoaded++, D.imagesLoaded === D.imagesToLoad.length && (D.reInit(), b.onImagesReady && D.fireCallback(b.onImagesReady, D)))
         };
         a.complete ? e() : (d = a.currentSrc || a.getAttribute("src"), d ? (c = new Image, c.onload = e, c.onerror = e, c.src = d) : e())
      }
      var d = D.h.addEventListener, e = "wrapper" === b.eventTarget ? D.wrapper : D.container;
      if (D.browser.ie10 || D.browser.ie11 ? (d(e, D.touchEvents.touchStart, p), d(document, D.touchEvents.touchMove, q), d(document, D.touchEvents.touchEnd, r)) : (D.support.touch && (d(e, "touchstart", p), d(e, "touchmove", q), d(e, "touchend", r)), b.simulateTouch && (d(e, "mousedown", p), d(document, "mousemove", q), d(document, "mouseup", r))), b.autoResize && d(window, "resize", D.resizeFix), g(), D._wheelEvent = !1, b.mousewheelControl) {
         if (void 0 !== document.onmousewheel && (D._wheelEvent = "mousewheel"), !D._wheelEvent)
            try {
               new WheelEvent("wheel"), D._wheelEvent = "wheel"
            } catch (f) {
            }
         D._wheelEvent || (D._wheelEvent = "DOMMouseScroll"), D._wheelEvent && d(D.container, D._wheelEvent, j)
      }
      if (b.keyboardControl && d(document, "keydown", i), b.updateOnImagesReady) {
         D.imagesToLoad = c("img", D.container);
         for (var h = 0; h < D.imagesToLoad.length; h++)
            a(D.imagesToLoad[h])
      }
   }
   function g() {
      var a, d = D.h.addEventListener;
      if (b.preventLinks) {
         var e = c("a", D.container);
         for (a = 0; a < e.length; a++)
            d(e[a], "click", n)
      }
      if (b.releaseFormElements) {
         var f = c("input, textarea, select", D.container);
         for (a = 0; a < f.length; a++)
            d(f[a], D.touchEvents.touchStart, o, !0), D.support.touch && b.simulateTouch && d(f[a], "mousedown", o, !0)
      }
      if (b.onSlideClick)
         for (a = 0; a < D.slides.length; a++)
            d(D.slides[a], "click", k);
      if (b.onSlideTouch)
         for (a = 0; a < D.slides.length; a++)
            d(D.slides[a], D.touchEvents.touchStart, l)
   }
   function h() {
      var a, d = D.h.removeEventListener;
      if (b.onSlideClick)
         for (a = 0; a < D.slides.length; a++)
            d(D.slides[a], "click", k);
      if (b.onSlideTouch)
         for (a = 0; a < D.slides.length; a++)
            d(D.slides[a], D.touchEvents.touchStart, l);
      if (b.releaseFormElements) {
         var e = c("input, textarea, select", D.container);
         for (a = 0; a < e.length; a++)
            d(e[a], D.touchEvents.touchStart, o, !0), D.support.touch && b.simulateTouch && d(e[a], "mousedown", o, !0)
      }
      if (b.preventLinks) {
         var f = c("a", D.container);
         for (a = 0; a < f.length; a++)
            d(f[a], "click", n)
      }
   }
   function i(a) {
      var b = a.keyCode || a.charCode;
      if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey)) {
         if (37 === b || 39 === b || 38 === b || 40 === b) {
            for (var c = !1, d = D.h.getOffset(D.container), e = D.h.windowScroll().left, f = D.h.windowScroll().top, g = D.h.windowWidth(), h = D.h.windowHeight(), i = [[d.left, d.top], [d.left + D.width, d.top], [d.left, d.top + D.height], [d.left + D.width, d.top + D.height]], j = 0; j < i.length; j++) {
               var k = i[j];
               k[0] >= e && k[0] <= e + g && k[1] >= f && k[1] <= f + h && (c = !0)
            }
            if (!c)
               return
         }
         N ? ((37 === b || 39 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 39 === b && D.swipeNext(), 37 === b && D.swipePrev()) : ((38 === b || 40 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === b && D.swipeNext(), 38 === b && D.swipePrev())
      }
   }
   function j(a) {
      var c = D._wheelEvent, d = 0;
      if (a.detail)
         d = -a.detail;
      else if ("mousewheel" === c)
         if (b.mousewheelControlForceToAxis)
            if (N) {
               if (!(Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY)))
                  return;
               d = a.wheelDeltaX
            } else {
               if (!(Math.abs(a.wheelDeltaY) > Math.abs(a.wheelDeltaX)))
                  return;
               d = a.wheelDeltaY
            }
         else
            d = a.wheelDelta;
      else if ("DOMMouseScroll" === c)
         d = -a.detail;
      else if ("wheel" === c)
         if (b.mousewheelControlForceToAxis)
            if (N) {
               if (!(Math.abs(a.deltaX) > Math.abs(a.deltaY)))
                  return;
               d = -a.deltaX
            } else {
               if (!(Math.abs(a.deltaY) > Math.abs(a.deltaX)))
                  return;
               d = -a.deltaY
            }
         else
            d = Math.abs(a.deltaX) > Math.abs(a.deltaY) ? -a.deltaX : -a.deltaY;
      if (b.freeMode) {
         var f = D.getWrapperTranslate() + d;
         if (f > 0 && (f = 0), f < -e() && (f = -e()), D.setWrapperTransition(0), D.setWrapperTranslate(f), D.updateActiveSlide(f), 0 === f || f === -e())
            return
      } else
         (new Date).getTime() - V > 60 && (0 > d ? D.swipeNext() : D.swipePrev()), V = (new Date).getTime();
      return b.autoplay && D.stopAutoplay(!0), a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
   }
   function k(a) {
      D.allowSlideClick && (m(a), D.fireCallback(b.onSlideClick, D, a))
   }
   function l(a) {
      m(a), D.fireCallback(b.onSlideTouch, D, a)
   }
   function m(a) {
      if (a.currentTarget)
         D.clickedSlide = a.currentTarget;
      else {
         var c = a.srcElement;
         do {
            if (c.className.indexOf(b.slideClass) > -1)
               break;
            c = c.parentNode
         } while (c);
         D.clickedSlide = c
      }
      D.clickedSlideIndex = D.slides.indexOf(D.clickedSlide), D.clickedSlideLoopIndex = D.clickedSlideIndex - (D.loopedSlides || 0)
   }
   function n(a) {
      return D.allowLinks ? void 0 : (a.preventDefault ? a.preventDefault() : a.returnValue = !1, b.preventLinksPropagation && "stopPropagation"in a && a.stopPropagation(), !1)
   }
   function o(a) {
      return a.stopPropagation ? a.stopPropagation() : a.returnValue = !1, !1
   }
   function p(a) {
      if (b.preventLinks && (D.allowLinks = !0), D.isTouched || b.onlyExternal)
         return!1;
      var c = a.target || a.srcElement;
      document.activeElement && document.activeElement !== document.body && document.activeElement !== c && document.activeElement.blur();
      var d = "input select textarea".split(" ");
      if (b.noSwiping && c && t(c))
         return!1;
      if (_ = !1, D.isTouched = !0, $ = "touchstart" === a.type, !$ && "which"in a && 3 === a.which)
         return D.isTouched = !1, !1;
      if (!$ || 1 === a.targetTouches.length) {
         D.callPlugins("onTouchStartBegin"), !$ && !D.isAndroid && d.indexOf(c.tagName.toLowerCase()) < 0 && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
         var e = $ ? a.targetTouches[0].pageX : a.pageX || a.clientX, f = $ ? a.targetTouches[0].pageY : a.pageY || a.clientY;
         D.touches.startX = D.touches.currentX = e, D.touches.startY = D.touches.currentY = f, D.touches.start = D.touches.current = N ? e : f, D.setWrapperTransition(0), D.positions.start = D.positions.current = D.getWrapperTranslate(), D.setWrapperTranslate(D.positions.start), D.times.start = (new Date).getTime(), I = void 0, b.moveStartThreshold > 0 && (X = !1), b.onTouchStart && D.fireCallback(b.onTouchStart, D, a), D.callPlugins("onTouchStartEnd")
      }
   }
   function q(a) {
      if (D.isTouched && !b.onlyExternal && (!$ || "mousemove" !== a.type)) {
         var c = $ ? a.targetTouches[0].pageX : a.pageX || a.clientX, d = $ ? a.targetTouches[0].pageY : a.pageY || a.clientY;
         if ("undefined" == typeof I && N && (I = !!(I || Math.abs(d - D.touches.startY) > Math.abs(c - D.touches.startX))), "undefined" != typeof I || N || (I = !!(I || Math.abs(d - D.touches.startY) < Math.abs(c - D.touches.startX))), I)
            return void(D.isTouched = !1);
         if (N) {
            if (!b.swipeToNext && c < D.touches.startX || !b.swipeToPrev && c > D.touches.startX)
               return
         } else if (!b.swipeToNext && d < D.touches.startY || !b.swipeToPrev && d > D.touches.startY)
            return;
         if (a.assignedToSwiper)
            return void(D.isTouched = !1);
         if (a.assignedToSwiper = !0, b.preventLinks && (D.allowLinks = !1), b.onSlideClick && (D.allowSlideClick = !1), b.autoplay && D.stopAutoplay(!0), !$ || 1 === a.touches.length) {
            if (D.isMoved || (D.callPlugins("onTouchMoveStart"), b.loop && (D.fixLoop(), D.positions.start = D.getWrapperTranslate()), b.onTouchMoveStart && D.fireCallback(b.onTouchMoveStart, D)), D.isMoved = !0, a.preventDefault ? a.preventDefault() : a.returnValue = !1, D.touches.current = N ? c : d, D.positions.current = (D.touches.current - D.touches.start) * b.touchRatio + D.positions.start, D.positions.current > 0 && b.onResistanceBefore && D.fireCallback(b.onResistanceBefore, D, D.positions.current), D.positions.current < -e() && b.onResistanceAfter && D.fireCallback(b.onResistanceAfter, D, Math.abs(D.positions.current + e())), b.resistance && "100%" !== b.resistance) {
               var f;
               if (D.positions.current > 0 && (f = 1 - D.positions.current / J / 2, D.positions.current = .5 > f ? J / 2 : D.positions.current * f), D.positions.current < -e()) {
                  var g = (D.touches.current - D.touches.start) * b.touchRatio + (e() + D.positions.start);
                  f = (J + g) / J;
                  var h = D.positions.current - g * (1 - f) / 2, i = -e() - J / 2;
                  D.positions.current = i > h || 0 >= f ? i : h
               }
            }
            if (b.resistance && "100%" === b.resistance && (D.positions.current > 0 && (!b.freeMode || b.freeModeFluid) && (D.positions.current = 0), D.positions.current < -e() && (!b.freeMode || b.freeModeFluid) && (D.positions.current = -e())), !b.followFinger)
               return;
            if (b.moveStartThreshold)
               if (Math.abs(D.touches.current - D.touches.start) > b.moveStartThreshold || X) {
                  if (!X)
                     return X = !0, void(D.touches.start = D.touches.current);
                  D.setWrapperTranslate(D.positions.current)
               } else
                  D.positions.current = D.positions.start;
            else
               D.setWrapperTranslate(D.positions.current);
            return(b.freeMode || b.watchActiveIndex) && D.updateActiveSlide(D.positions.current), b.grabCursor && (D.container.style.cursor = "move", D.container.style.cursor = "grabbing", D.container.style.cursor = "-moz-grabbin", D.container.style.cursor = "-webkit-grabbing"), Y || (Y = D.touches.current), Z || (Z = (new Date).getTime()), D.velocity = (D.touches.current - Y) / ((new Date).getTime() - Z) / 2, Math.abs(D.touches.current - Y) < 2 && (D.velocity = 0), Y = D.touches.current, Z = (new Date).getTime(), D.callPlugins("onTouchMoveEnd"), b.onTouchMove && D.fireCallback(b.onTouchMove, D, a), !1
         }
      }
   }
   function r(a) {
      if (I && D.swipeReset(), !b.onlyExternal && D.isTouched) {
         D.isTouched = !1, b.grabCursor && (D.container.style.cursor = "move", D.container.style.cursor = "grab", D.container.style.cursor = "-moz-grab", D.container.style.cursor = "-webkit-grab"), D.positions.current || 0 === D.positions.current || (D.positions.current = D.positions.start), b.followFinger && D.setWrapperTranslate(D.positions.current), D.times.end = (new Date).getTime(), D.touches.diff = D.touches.current - D.touches.start, D.touches.abs = Math.abs(D.touches.diff), D.positions.diff = D.positions.current - D.positions.start, D.positions.abs = Math.abs(D.positions.diff);
         var c = D.positions.diff, d = D.positions.abs, f = D.times.end - D.times.start;
         5 > d && 300 > f && D.allowLinks === !1 && (b.freeMode || 0 === d || D.swipeReset(), b.preventLinks && (D.allowLinks = !0), b.onSlideClick && (D.allowSlideClick = !0)), setTimeout(function() {
            "undefined" != typeof D && null !== D && (b.preventLinks && (D.allowLinks = !0), b.onSlideClick && (D.allowSlideClick = !0))
         }, 100);
         var g = e();
         if (!D.isMoved && b.freeMode)
            return D.isMoved = !1, b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd");
         if (!D.isMoved || D.positions.current > 0 || D.positions.current < -g)
            return D.swipeReset(), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd");
         if (D.isMoved = !1, b.freeMode) {
            if (b.freeModeFluid) {
               var h, i = 1e3 * b.momentumRatio, j = D.velocity * i, k = D.positions.current + j, l = !1, m = 20 * Math.abs(D.velocity) * b.momentumBounceRatio;
               -g > k && (b.momentumBounce && D.support.transitions ? (-m > k + g && (k = -g - m), h = -g, l = !0, _ = !0) : k = -g), k > 0 && (b.momentumBounce && D.support.transitions ? (k > m && (k = m), h = 0, l = !0, _ = !0) : k = 0), 0 !== D.velocity && (i = Math.abs((k - D.positions.current) / D.velocity)), D.setWrapperTranslate(k), D.setWrapperTransition(i), b.momentumBounce && l && D.wrapperTransitionEnd(function() {
                  _ && (b.onMomentumBounce && D.fireCallback(b.onMomentumBounce, D), D.callPlugins("onMomentumBounce"), D.setWrapperTranslate(h), D.setWrapperTransition(300))
               }), D.updateActiveSlide(k)
            }
            return(!b.freeModeFluid || f >= 300) && D.updateActiveSlide(D.positions.current), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd")
         }
         H = 0 > c ? "toNext" : "toPrev", "toNext" === H && 300 >= f && (30 > d || !b.shortSwipes ? D.swipeReset() : D.swipeNext(!0, !0)), "toPrev" === H && 300 >= f && (30 > d || !b.shortSwipes ? D.swipeReset() : D.swipePrev(!0, !0));
         var n = 0;
         if ("auto" === b.slidesPerView) {
            for (var o, p = Math.abs(D.getWrapperTranslate()), q = 0, r = 0; r < D.slides.length; r++)
               if (o = N ? D.slides[r].getWidth(!0, b.roundLengths) : D.slides[r].getHeight(!0, b.roundLengths), q += o, q > p) {
                  n = o;
                  break
               }
            n > J && (n = J)
         } else
            n = F * b.slidesPerView;
         "toNext" === H && f > 300 && (d >= n * b.longSwipesRatio ? D.swipeNext(!0, !0) : D.swipeReset()), "toPrev" === H && f > 300 && (d >= n * b.longSwipesRatio ? D.swipePrev(!0, !0) : D.swipeReset()), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), D.callPlugins("onTouchEnd")
      }
   }
   function s(a, b) {
      return a && a.getAttribute("class") && a.getAttribute("class").indexOf(b) > -1
   }
   function t(a) {
      var c = !1;
      do
         s(a, b.noSwipingClass) && (c = !0), a = a.parentElement;
      while (!c && a.parentElement && !s(a, b.wrapperClass));
      return!c && s(a, b.wrapperClass) && s(a, b.noSwipingClass) && (c = !0), c
   }
   function u(a, b) {
      var c, d = document.createElement("div");
      return d.innerHTML = b, c = d.firstChild, c.className += " " + a, c.outerHTML
   }
   function v(a, c, d) {
      function e() {
         var f = +new Date, l = f - g;
         h += i * l / (1e3 / 60), k = "toNext" === j ? h > a : a > h, k ? (D.setWrapperTranslate(Math.ceil(h)), D._DOMAnimating = !0, window.setTimeout(function() {
            e()
         }, 1e3 / 60)) : (b.onSlideChangeEnd && ("to" === c ? d.runCallbacks === !0 && D.fireCallback(b.onSlideChangeEnd, D, j) : D.fireCallback(b.onSlideChangeEnd, D, j)), D.setWrapperTranslate(a), D._DOMAnimating = !1)
      }
      var f = "to" === c && d.speed >= 0 ? d.speed : b.speed, g = +new Date;
      if (D.support.transitions || !b.DOMAnimation)
         D.setWrapperTranslate(a), D.setWrapperTransition(f);
      else {
         var h = D.getWrapperTranslate(), i = Math.ceil((a - h) / f * (1e3 / 60)), j = h > a ? "toNext" : "toPrev", k = "toNext" === j ? h > a : a > h;
         if (D._DOMAnimating)
            return;
         e()
      }
      D.updateActiveSlide(a), b.onSlideNext && "next" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlideNext, D, a), b.onSlidePrev && "prev" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlidePrev, D, a), b.onSlideReset && "reset" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlideReset, D, a), "next" !== c && "prev" !== c && "to" !== c || d.runCallbacks !== !0 || w(c)
   }
   function w(a) {
      if (D.callPlugins("onSlideChangeStart"), b.onSlideChangeStart)
         if (b.queueStartCallbacks && D.support.transitions) {
            if (D._queueStartCallbacks)
               return;
            D._queueStartCallbacks = !0, D.fireCallback(b.onSlideChangeStart, D, a), D.wrapperTransitionEnd(function() {
               D._queueStartCallbacks = !1
            })
         } else
            D.fireCallback(b.onSlideChangeStart, D, a);
      if (b.onSlideChangeEnd)
         if (D.support.transitions)
            if (b.queueEndCallbacks) {
               if (D._queueEndCallbacks)
                  return;
               D._queueEndCallbacks = !0, D.wrapperTransitionEnd(function(c) {
                  D.fireCallback(b.onSlideChangeEnd, c, a)
               })
            } else
               D.wrapperTransitionEnd(function(c) {
                  D.fireCallback(b.onSlideChangeEnd, c, a)
               });
         else
            b.DOMAnimation || setTimeout(function() {
               D.fireCallback(b.onSlideChangeEnd, D, a)
            }, 10)
   }
   function x() {
      var a = D.paginationButtons;
      if (a)
         for (var b = 0; b < a.length; b++)
            D.h.removeEventListener(a[b], "click", z)
   }
   function y() {
      var a = D.paginationButtons;
      if (a)
         for (var b = 0; b < a.length; b++)
            D.h.addEventListener(a[b], "click", z)
   }
   function z(a) {
      for (var c, d = a.target || a.srcElement, e = D.paginationButtons, f = 0; f < e.length; f++)
         d === e[f] && (c = f);
      b.autoplay && D.stopAutoplay(!0), D.swipeTo(c)
   }
   function A() {
      ab = setTimeout(function() {
         b.loop ? (D.fixLoop(), D.swipeNext(!0, !0)) : D.swipeNext(!0, !0) || (b.autoplayStopOnLast ? (clearTimeout(ab), ab = void 0) : D.swipeTo(0)), D.wrapperTransitionEnd(function() {
            "undefined" != typeof ab && A()
         })
      }, b.autoplay)
   }
   function B() {
      D.calcSlides(), b.loader.slides.length > 0 && 0 === D.slides.length && D.loadSlides(), b.loop && D.createLoop(), D.init(), f(), b.pagination && D.createPagination(!0), b.loop || b.initialSlide > 0 ? D.swipeTo(b.initialSlide, 0, !1) : D.updateActiveSlide(0), b.autoplay && D.startAutoplay(), D.centerIndex = D.activeIndex, b.onSwiperCreated && D.fireCallback(b.onSwiperCreated, D), D.callPlugins("onSwiperCreated")
   }
   if (!document.body.outerHTML && document.body.__defineGetter__ && HTMLElement) {
      var C = HTMLElement.prototype;
      C.__defineGetter__ && C.__defineGetter__("outerHTML", function() {
         return(new XMLSerializer).serializeToString(this)
      })
   }
   if (window.getComputedStyle || (window.getComputedStyle = function(a) {
      return this.el = a, this.getPropertyValue = function(b) {
         var c = /(\-([a-z]){1})/g;
         return"float" === b && (b = "styleFloat"), c.test(b) && (b = b.replace(c, function() {
            return arguments[2].toUpperCase()
         })), a.currentStyle[b] ? a.currentStyle[b] : null
      }, this
   }), Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
      for (var c = b || 0, d = this.length; d > c; c++)
         if (this[c] === a)
            return c;
      return-1
   }), (document.querySelectorAll || window.jQuery) && "undefined" != typeof a && (a.nodeType || 0 !== c(a).length)) {
      var D = this;
      D.touches = {start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, diff: 0, abs: 0}, D.positions = {start: 0, abs: 0, diff: 0, current: 0}, D.times = {start: 0, end: 0}, D.id = (new Date).getTime(), D.container = a.nodeType ? a : c(a)[0], D.isTouched = !1, D.isMoved = !1, D.activeIndex = 0, D.centerIndex = 0, D.activeLoaderIndex = 0, D.activeLoopIndex = 0, D.previousIndex = null, D.velocity = 0, D.snapGrid = [], D.slidesGrid = [], D.imagesToLoad = [], D.imagesLoaded = 0, D.wrapperLeft = 0, D.wrapperRight = 0, D.wrapperTop = 0, D.wrapperBottom = 0, D.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") >= 0;
      var E, F, G, H, I, J, K = {eventTarget: "wrapper", mode: "horizontal", touchRatio: 1, speed: 300, freeMode: !1, freeModeFluid: !1, momentumRatio: 1, momentumBounce: !0, momentumBounceRatio: 1, slidesPerView: 1, slidesPerGroup: 1, slidesPerViewFit: !0, simulateTouch: !0, followFinger: !0, shortSwipes: !0, longSwipesRatio: .5, moveStartThreshold: !1, onlyExternal: !1, createPagination: !0, pagination: !1, paginationElement: "span", paginationClickable: !1, paginationAsRange: !0, resistance: !0, scrollContainer: !1, preventLinks: !0, preventLinksPropagation: !1, noSwiping: !1, noSwipingClass: "swiper-no-swiping", initialSlide: 0, keyboardControl: !1, mousewheelControl: !1, mousewheelControlForceToAxis: !1, useCSS3Transforms: !0, autoplay: !1, autoplayDisableOnInteraction: !0, autoplayStopOnLast: !1, loop: !1, loopAdditionalSlides: 0, roundLengths: !1, calculateHeight: !1, cssWidthAndHeight: !1, updateOnImagesReady: !0, releaseFormElements: !0, watchActiveIndex: !1, visibilityFullFit: !1, offsetPxBefore: 0, offsetPxAfter: 0, offsetSlidesBefore: 0, offsetSlidesAfter: 0, centeredSlides: !1, queueStartCallbacks: !1, queueEndCallbacks: !1, autoResize: !0, resizeReInit: !1, DOMAnimation: !0, loader: {slides: [], slidesHTMLType: "inner", surroundGroups: 1, logic: "reload", loadAllSlides: !1}, swipeToPrev: !0, swipeToNext: !0, slideElement: "div", slideClass: "swiper-slide", slideActiveClass: "swiper-slide-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", wrapperClass: "swiper-wrapper", paginationElementClass: "swiper-pagination-switch", paginationActiveClass: "swiper-active-switch", paginationVisibleClass: "swiper-visible-switch"};
      b = b || {};
      for (var L in K)
         if (L in b && "object" == typeof b[L])
            for (var M in K[L])
               M in b[L] || (b[L][M] = K[L][M]);
         else
            L in b || (b[L] = K[L]);
      D.params = b, b.scrollContainer && (b.freeMode = !0, b.freeModeFluid = !0), b.loop && (b.resistance = "100%");
      var N = "horizontal" === b.mode, O = ["mousedown", "mousemove", "mouseup"];
      D.browser.ie10 && (O = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), D.browser.ie11 && (O = ["pointerdown", "pointermove", "pointerup"]), D.touchEvents = {touchStart: D.support.touch || !b.simulateTouch ? "touchstart" : O[0], touchMove: D.support.touch || !b.simulateTouch ? "touchmove" : O[1], touchEnd: D.support.touch || !b.simulateTouch ? "touchend" : O[2]};
      for (var P = D.container.childNodes.length - 1; P >= 0; P--)
         if (D.container.childNodes[P].className)
            for (var Q = D.container.childNodes[P].className.split(/\s+/), R = 0; R < Q.length; R++)
               Q[R] === b.wrapperClass && (E = D.container.childNodes[P]);
      D.wrapper = E, D._extendSwiperSlide = function(a) {
         return a.append = function() {
            return b.loop ? a.insertAfter(D.slides.length - D.loopedSlides) : (D.wrapper.appendChild(a), D.reInit()), a
         }, a.prepend = function() {
            return b.loop ? (D.wrapper.insertBefore(a, D.slides[D.loopedSlides]), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : D.wrapper.insertBefore(a, D.wrapper.firstChild), D.reInit(), a
         }, a.insertAfter = function(c) {
            if ("undefined" == typeof c)
               return!1;
            var d;
            return b.loop ? (d = D.slides[c + 1 + D.loopedSlides], d ? D.wrapper.insertBefore(a, d) : D.wrapper.appendChild(a), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : (d = D.slides[c + 1], D.wrapper.insertBefore(a, d)), D.reInit(), a
         }, a.clone = function() {
            return D._extendSwiperSlide(a.cloneNode(!0))
         }, a.remove = function() {
            D.wrapper.removeChild(a), D.reInit()
         }, a.html = function(b) {
            return"undefined" == typeof b ? a.innerHTML : (a.innerHTML = b, a)
         }, a.index = function() {
            for (var b, c = D.slides.length - 1; c >= 0; c--)
               a === D.slides[c] && (b = c);
            return b
         }, a.isActive = function() {
            return a.index() === D.activeIndex ? !0 : !1
         }, a.swiperSlideDataStorage || (a.swiperSlideDataStorage = {}), a.getData = function(b) {
            return a.swiperSlideDataStorage[b]
         }, a.setData = function(b, c) {
            return a.swiperSlideDataStorage[b] = c, a
         }, a.data = function(b, c) {
            return"undefined" == typeof c ? a.getAttribute("data-" + b) : (a.setAttribute("data-" + b, c), a)
         }, a.getWidth = function(b, c) {
            return D.h.getWidth(a, b, c)
         }, a.getHeight = function(b, c) {
            return D.h.getHeight(a, b, c)
         }, a.getOffset = function() {
            return D.h.getOffset(a)
         }, a
      }, D.calcSlides = function(a) {
         var c = D.slides ? D.slides.length : !1;
         D.slides = [], D.displaySlides = [];
         for (var d = 0; d < D.wrapper.childNodes.length; d++)
            if (D.wrapper.childNodes[d].className)
               for (var e = D.wrapper.childNodes[d].className, f = e.split(/\s+/), i = 0; i < f.length; i++)
                  f[i] === b.slideClass && D.slides.push(D.wrapper.childNodes[d]);
         for (d = D.slides.length - 1; d >= 0; d--)
            D._extendSwiperSlide(D.slides[d]);
         c !== !1 && (c !== D.slides.length || a) && (h(), g(), D.updateActiveSlide(), D.params.pagination && D.createPagination(), D.callPlugins("numberOfSlidesChanged"))
      }, D.createSlide = function(a, c, d) {
         c = c || D.params.slideClass, d = d || b.slideElement;
         var e = document.createElement(d);
         return e.innerHTML = a || "", e.className = c, D._extendSwiperSlide(e)
      }, D.appendSlide = function(a, b, c) {
         return a ? a.nodeType ? D._extendSwiperSlide(a).append() : D.createSlide(a, b, c).append() : void 0
      }, D.prependSlide = function(a, b, c) {
         return a ? a.nodeType ? D._extendSwiperSlide(a).prepend() : D.createSlide(a, b, c).prepend() : void 0
      }, D.insertSlideAfter = function(a, b, c, d) {
         return"undefined" == typeof a ? !1 : b.nodeType ? D._extendSwiperSlide(b).insertAfter(a) : D.createSlide(b, c, d).insertAfter(a)
      }, D.removeSlide = function(a) {
         if (D.slides[a]) {
            if (b.loop) {
               if (!D.slides[a + D.loopedSlides])
                  return!1;
               D.slides[a + D.loopedSlides].remove(), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()
            } else
               D.slides[a].remove();
            return!0
         }
         return!1
      }, D.removeLastSlide = function() {
         return D.slides.length > 0 ? (b.loop ? (D.slides[D.slides.length - 1 - D.loopedSlides].remove(), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : D.slides[D.slides.length - 1].remove(), !0) : !1
      }, D.removeAllSlides = function() {
         for (var a = D.slides.length, b = D.slides.length - 1; b >= 0; b--)
            D.slides[b].remove(), b === a - 1 && D.setWrapperTranslate(0)
      }, D.getSlide = function(a) {
         return D.slides[a]
      }, D.getLastSlide = function() {
         return D.slides[D.slides.length - 1]
      }, D.getFirstSlide = function() {
         return D.slides[0]
      }, D.activeSlide = function() {
         return D.slides[D.activeIndex]
      }, D.fireCallback = function() {
         var a = arguments[0];
         if ("[object Array]" === Object.prototype.toString.call(a))
            for (var c = 0; c < a.length; c++)
               "function" == typeof a[c] && a[c](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
         else
            "[object String]" === Object.prototype.toString.call(a) ? b["on" + a] && D.fireCallback(b["on" + a], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) : a(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
      }, D.addCallback = function(a, b) {
         var c, e = this;
         return e.params["on" + a] ? d(this.params["on" + a]) ? this.params["on" + a].push(b) : "function" == typeof this.params["on" + a] ? (c = this.params["on" + a], this.params["on" + a] = [], this.params["on" + a].push(c), this.params["on" + a].push(b)) : void 0 : (this.params["on" + a] = [], this.params["on" + a].push(b))
      }, D.removeCallbacks = function(a) {
         D.params["on" + a] && (D.params["on" + a] = null)
      };
      var S = [];
      for (var T in D.plugins)
         if (b[T]) {
            var U = D.plugins[T](D, b[T]);
            U && S.push(U)
         }
      D.callPlugins = function(a, b) {
         b || (b = {});
         for (var c = 0; c < S.length; c++)
            a in S[c] && S[c][a](b)
      }, !D.browser.ie10 && !D.browser.ie11 || b.onlyExternal || D.wrapper.classList.add("swiper-wp8-" + (N ? "horizontal" : "vertical")), b.freeMode && (D.container.className += " swiper-free-mode"), D.initialized = !1, D.init = function(a, c) {
         var d = D.h.getWidth(D.container, !1, b.roundLengths), e = D.h.getHeight(D.container, !1, b.roundLengths);
         if (d !== D.width || e !== D.height || a) {
            D.width = d, D.height = e;
            var f, g, h, i, j, k, l;
            J = N ? d : e;
            var m = D.wrapper;
            if (a && D.calcSlides(c), "auto" === b.slidesPerView) {
               var n = 0, o = 0;
               b.slidesOffset > 0 && (m.style.paddingLeft = "", m.style.paddingRight = "", m.style.paddingTop = "", m.style.paddingBottom = ""), m.style.width = "", m.style.height = "", b.offsetPxBefore > 0 && (N ? D.wrapperLeft = b.offsetPxBefore : D.wrapperTop = b.offsetPxBefore), b.offsetPxAfter > 0 && (N ? D.wrapperRight = b.offsetPxAfter : D.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (N ? (D.wrapperLeft = (J - this.slides[0].getWidth(!0, b.roundLengths)) / 2, D.wrapperRight = (J - D.slides[D.slides.length - 1].getWidth(!0, b.roundLengths)) / 2) : (D.wrapperTop = (J - D.slides[0].getHeight(!0, b.roundLengths)) / 2, D.wrapperBottom = (J - D.slides[D.slides.length - 1].getHeight(!0, b.roundLengths)) / 2)), N ? (D.wrapperLeft >= 0 && (m.style.paddingLeft = D.wrapperLeft + "px"), D.wrapperRight >= 0 && (m.style.paddingRight = D.wrapperRight + "px")) : (D.wrapperTop >= 0 && (m.style.paddingTop = D.wrapperTop + "px"), D.wrapperBottom >= 0 && (m.style.paddingBottom = D.wrapperBottom + "px")), k = 0;
               var p = 0;
               for (D.snapGrid = [], D.slidesGrid = [], h = 0, l = 0; l < D.slides.length; l++) {
                  f = D.slides[l].getWidth(!0, b.roundLengths), g = D.slides[l].getHeight(!0, b.roundLengths), b.calculateHeight && (h = Math.max(h, g));
                  var q = N ? f : g;
                  if (b.centeredSlides) {
                     var r = l === D.slides.length - 1 ? 0 : D.slides[l + 1].getWidth(!0, b.roundLengths), s = l === D.slides.length - 1 ? 0 : D.slides[l + 1].getHeight(!0, b.roundLengths), t = N ? r : s;
                     if (q > J) {
                        if (b.slidesPerViewFit)
                           D.snapGrid.push(k + D.wrapperLeft), D.snapGrid.push(k + q - J + D.wrapperLeft);
                        else
                           for (var u = 0; u <= Math.floor(q / (J + D.wrapperLeft)); u++)
                              D.snapGrid.push(0 === u ? k + D.wrapperLeft : k + D.wrapperLeft + J * u);
                        D.slidesGrid.push(k + D.wrapperLeft)
                     } else
                        D.snapGrid.push(p), D.slidesGrid.push(p);
                     p += q / 2 + t / 2
                  } else {
                     if (q > J)
                        if (b.slidesPerViewFit)
                           D.snapGrid.push(k), D.snapGrid.push(k + q - J);
                        else if (0 !== J)
                           for (var v = 0; v <= Math.floor(q / J); v++)
                              D.snapGrid.push(k + J * v);
                        else
                           D.snapGrid.push(k);
                     else
                        D.snapGrid.push(k);
                     D.slidesGrid.push(k)
                  }
                  k += q, n += f, o += g
               }
               b.calculateHeight && (D.height = h), N ? (G = n + D.wrapperRight + D.wrapperLeft, b.cssWidthAndHeight && "height" !== b.cssWidthAndHeight || (m.style.width = n + "px"), b.cssWidthAndHeight && "width" !== b.cssWidthAndHeight || (m.style.height = D.height + "px")) : (b.cssWidthAndHeight && "height" !== b.cssWidthAndHeight || (m.style.width = D.width + "px"), b.cssWidthAndHeight && "width" !== b.cssWidthAndHeight || (m.style.height = o + "px"), G = o + D.wrapperTop + D.wrapperBottom)
            } else if (b.scrollContainer)
               m.style.width = "", m.style.height = "", i = D.slides[0].getWidth(!0, b.roundLengths), j = D.slides[0].getHeight(!0, b.roundLengths), G = N ? i : j, m.style.width = i + "px", m.style.height = j + "px", F = N ? i : j;
            else {
               if (b.calculateHeight) {
                  for (h = 0, j = 0, N || (D.container.style.height = ""), m.style.height = "", l = 0; l < D.slides.length; l++)
                     D.slides[l].style.height = "", h = Math.max(D.slides[l].getHeight(!0), h), N || (j += D.slides[l].getHeight(!0));
                  g = h, D.height = g, N ? j = g : (J = g, D.container.style.height = J + "px")
               } else
                  g = N ? D.height : D.height / b.slidesPerView, b.roundLengths && (g = Math.ceil(g)), j = N ? D.height : D.slides.length * g;
               for (f = N?D.width / b.slidesPerView:D.width, b.roundLengths && (f = Math.ceil(f)), i = N?D.slides.length * f:D.width, F = N?f:g, b.offsetSlidesBefore > 0 && (N?D.wrapperLeft = F * b.offsetSlidesBefore:D.wrapperTop = F * b.offsetSlidesBefore), b.offsetSlidesAfter > 0 && (N?D.wrapperRight = F * b.offsetSlidesAfter:D.wrapperBottom = F * b.offsetSlidesAfter), b.offsetPxBefore > 0 && (N?D.wrapperLeft = b.offsetPxBefore:D.wrapperTop = b.offsetPxBefore), b.offsetPxAfter > 0 && (N?D.wrapperRight = b.offsetPxAfter:D.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (N?(D.wrapperLeft = (J - F) / 2, D.wrapperRight = (J - F) / 2):(D.wrapperTop = (J - F) / 2, D.wrapperBottom = (J - F) / 2)), N?(D.wrapperLeft > 0 && (m.style.paddingLeft = D.wrapperLeft + "px"), D.wrapperRight > 0 && (m.style.paddingRight = D.wrapperRight + "px")):(D.wrapperTop > 0 && (m.style.paddingTop = D.wrapperTop + "px"), D.wrapperBottom > 0 && (m.style.paddingBottom = D.wrapperBottom + "px")), G = N?i + D.wrapperRight + D.wrapperLeft:j + D.wrapperTop + D.wrapperBottom, parseFloat(i) > 0 && (!b.cssWidthAndHeight || "height" === b.cssWidthAndHeight) && (m.style.width = i + "px"), parseFloat(j) > 0 && (!b.cssWidthAndHeight || "width" === b.cssWidthAndHeight) && (m.style.height = j + "px"), k = 0, D.snapGrid = [], D.slidesGrid = [], l = 0; l < D.slides.length; l++)
                  D.snapGrid.push(k), D.slidesGrid.push(k), k += F, parseFloat(f) > 0 && (!b.cssWidthAndHeight || "height" === b.cssWidthAndHeight) && (D.slides[l].style.width = f + "px"), parseFloat(g) > 0 && (!b.cssWidthAndHeight || "width" === b.cssWidthAndHeight) && (D.slides[l].style.height = g + "px")
            }
            D.initialized ? (D.callPlugins("onInit"), b.onInit && D.fireCallback(b.onInit, D)) : (D.callPlugins("onFirstInit"), b.onFirstInit && D.fireCallback(b.onFirstInit, D)), D.initialized = !0
         }
      }, D.reInit = function(a) {
         D.init(!0, a)
      }, D.resizeFix = function(a) {
         D.callPlugins("beforeResizeFix"), D.init(b.resizeReInit || a), b.freeMode ? D.getWrapperTranslate() < -e() && (D.setWrapperTransition(0), D.setWrapperTranslate(-e())) : (D.swipeTo(b.loop ? D.activeLoopIndex : D.activeIndex, 0, !1), b.autoplay && (D.support.transitions && "undefined" != typeof ab ? "undefined" != typeof ab && (clearTimeout(ab), ab = void 0, D.startAutoplay()) : "undefined" != typeof bb && (clearInterval(bb), bb = void 0, D.startAutoplay()))), D.callPlugins("afterResizeFix")
      }, D.destroy = function(a) {
         var c = D.h.removeEventListener, d = "wrapper" === b.eventTarget ? D.wrapper : D.container;
         if (D.browser.ie10 || D.browser.ie11 ? (c(d, D.touchEvents.touchStart, p), c(document, D.touchEvents.touchMove, q), c(document, D.touchEvents.touchEnd, r)) : (D.support.touch && (c(d, "touchstart", p), c(d, "touchmove", q), c(d, "touchend", r)), b.simulateTouch && (c(d, "mousedown", p), c(document, "mousemove", q), c(document, "mouseup", r))), b.autoResize && c(window, "resize", D.resizeFix), h(), b.paginationClickable && x(), b.mousewheelControl && D._wheelEvent && c(D.container, D._wheelEvent, j), b.keyboardControl && c(document, "keydown", i), b.autoplay && D.stopAutoplay(), a) {
            D.wrapper.removeAttribute("style");
            for (var e = 0; e < D.slides.length; e++)
               D.slides[e].removeAttribute("style")
         }
         D.callPlugins("onDestroy"), window.jQuery && window.jQuery(D.container).data("swiper") && window.jQuery(D.container).removeData("swiper"), window.Zepto && window.Zepto(D.container).data("swiper") && window.Zepto(D.container).removeData("swiper"), D = null
      }, D.disableKeyboardControl = function() {
         b.keyboardControl = !1, D.h.removeEventListener(document, "keydown", i)
      }, D.enableKeyboardControl = function() {
         b.keyboardControl = !0, D.h.addEventListener(document, "keydown", i)
      };
      var V = (new Date).getTime();
      if (D.disableMousewheelControl = function() {
         return D._wheelEvent ? (b.mousewheelControl = !1, D.h.removeEventListener(D.container, D._wheelEvent, j), !0) : !1
      }, D.enableMousewheelControl = function() {
         return D._wheelEvent ? (b.mousewheelControl = !0, D.h.addEventListener(D.container, D._wheelEvent, j), !0) : !1
      }, b.grabCursor) {
         var W = D.container.style;
         W.cursor = "move", W.cursor = "grab", W.cursor = "-moz-grab", W.cursor = "-webkit-grab"
      }
      D.allowSlideClick = !0, D.allowLinks = !0;
      var X, Y, Z, $ = !1, _ = !0;
      D.swipeNext = function(a, c) {
         "undefined" == typeof a && (a = !0), !c && b.loop && D.fixLoop(), !c && b.autoplay && D.stopAutoplay(!0), D.callPlugins("onSwipeNext");
         var d = D.getWrapperTranslate().toFixed(2), f = d;
         if ("auto" === b.slidesPerView) {
            for (var g = 0; g < D.snapGrid.length; g++)
               if (-d >= D.snapGrid[g].toFixed(2) && -d < D.snapGrid[g + 1].toFixed(2)) {
                  f = -D.snapGrid[g + 1];
                  break
               }
         } else {
            var h = F * b.slidesPerGroup;
            f = -(Math.floor(Math.abs(d) / Math.floor(h)) * h + h)
         }
         return f < -e() && (f = -e()), f === d ? !1 : (v(f, "next", {runCallbacks: a}), !0)
      }, D.swipePrev = function(a, c) {
         "undefined" == typeof a && (a = !0), !c && b.loop && D.fixLoop(), !c && b.autoplay && D.stopAutoplay(!0), D.callPlugins("onSwipePrev");
         var d, e = Math.ceil(D.getWrapperTranslate());
         if ("auto" === b.slidesPerView) {
            d = 0;
            for (var f = 1; f < D.snapGrid.length; f++) {
               if (-e === D.snapGrid[f]) {
                  d = -D.snapGrid[f - 1];
                  break
               }
               if (-e > D.snapGrid[f] && -e < D.snapGrid[f + 1]) {
                  d = -D.snapGrid[f];
                  break
               }
            }
         } else {
            var g = F * b.slidesPerGroup;
            d = -(Math.ceil(-e / g) - 1) * g
         }
         return d > 0 && (d = 0), d === e ? !1 : (v(d, "prev", {runCallbacks: a}), !0)
      }, D.swipeReset = function(a) {
         "undefined" == typeof a && (a = !0), D.callPlugins("onSwipeReset");
         {
            var c, d = D.getWrapperTranslate(), f = F * b.slidesPerGroup;
            -e()
         }
         if ("auto" === b.slidesPerView) {
            c = 0;
            for (var g = 0; g < D.snapGrid.length; g++) {
               if (-d === D.snapGrid[g])
                  return;
               if (-d >= D.snapGrid[g] && -d < D.snapGrid[g + 1]) {
                  c = D.positions.diff > 0 ? -D.snapGrid[g + 1] : -D.snapGrid[g];
                  break
               }
            }
            -d >= D.snapGrid[D.snapGrid.length - 1] && (c = -D.snapGrid[D.snapGrid.length - 1]), d <= -e() && (c = -e())
         } else
            c = 0 > d ? Math.round(d / f) * f : 0, d <= -e() && (c = -e());
         return b.scrollContainer && (c = 0 > d ? d : 0), c < -e() && (c = -e()), b.scrollContainer && J > F && (c = 0), c === d ? !1 : (v(c, "reset", {runCallbacks: a}), !0)
      }, D.swipeTo = function(a, c, d) {
         a = parseInt(a, 10), D.callPlugins("onSwipeTo", {index: a, speed: c}), b.loop && (a += D.loopedSlides);
         var f = D.getWrapperTranslate();
         if (!(a > D.slides.length - 1 || 0 > a)) {
            var g;
            return g = "auto" === b.slidesPerView ? -D.slidesGrid[a] : -a * F, g < -e() && (g = -e()), g === f ? !1 : ("undefined" == typeof d && (d = !0), v(g, "to", {index: a, speed: c, runCallbacks: d}), !0)
         }
      }, D._queueStartCallbacks = !1, D._queueEndCallbacks = !1, D.updateActiveSlide = function(a) {
         if (D.initialized && 0 !== D.slides.length) {
            D.previousIndex = D.activeIndex, "undefined" == typeof a && (a = D.getWrapperTranslate()), a > 0 && (a = 0);
            var c;
            if ("auto" === b.slidesPerView) {
               if (D.activeIndex = D.slidesGrid.indexOf(-a), D.activeIndex < 0) {
                  for (c = 0; c < D.slidesGrid.length - 1 && !( - a > D.slidesGrid[c] && - a < D.slidesGrid[c + 1]); c++)
                     ;
                  var d = Math.abs(D.slidesGrid[c] + a), e = Math.abs(D.slidesGrid[c + 1] + a);
                  D.activeIndex = e >= d ? c : c + 1
               }
            } else
               D.activeIndex = Math[b.visibilityFullFit ? "ceil" : "round"](-a / F);
            if (D.activeIndex === D.slides.length && (D.activeIndex = D.slides.length - 1), D.activeIndex < 0 && (D.activeIndex = 0), D.slides[D.activeIndex]) {
               if (D.calcVisibleSlides(a), D.support.classList) {
                  var f;
                  for (c = 0; c < D.slides.length; c++)
                     f = D.slides[c], f.classList.remove(b.slideActiveClass), D.visibleSlides.indexOf(f) >= 0 ? f.classList.add(b.slideVisibleClass) : f.classList.remove(b.slideVisibleClass);
                  D.slides[D.activeIndex].classList.add(b.slideActiveClass)
               } else {
                  var g = new RegExp("\\s*" + b.slideActiveClass), h = new RegExp("\\s*" + b.slideVisibleClass);
                  for (c = 0; c < D.slides.length; c++)
                     D.slides[c].className = D.slides[c].className.replace(g, "").replace(h, ""), D.visibleSlides.indexOf(D.slides[c]) >= 0 && (D.slides[c].className += " " + b.slideVisibleClass);
                  D.slides[D.activeIndex].className += " " + b.slideActiveClass
               }
               if (b.loop) {
                  var i = D.loopedSlides;
                  D.activeLoopIndex = D.activeIndex - i, D.activeLoopIndex >= D.slides.length - 2 * i && (D.activeLoopIndex = D.slides.length - 2 * i - D.activeLoopIndex), D.activeLoopIndex < 0 && (D.activeLoopIndex = D.slides.length - 2 * i + D.activeLoopIndex), D.activeLoopIndex < 0 && (D.activeLoopIndex = 0)
               } else
                  D.activeLoopIndex = D.activeIndex;
               b.pagination && D.updatePagination(a)
            }
         }
      }, D.createPagination = function(a) {
         if (b.paginationClickable && D.paginationButtons && x(), D.paginationContainer = b.pagination.nodeType ? b.pagination : c(b.pagination)[0], b.createPagination) {
            var d = "", e = D.slides.length, f = e;
            b.loop && (f -= 2 * D.loopedSlides);
            for (var g = 0; f > g; g++)
               d += "<" + b.paginationElement + ' class="' + b.paginationElementClass + '"></' + b.paginationElement + ">";
            D.paginationContainer.innerHTML = d
         }
         D.paginationButtons = c("." + b.paginationElementClass, D.paginationContainer), a || D.updatePagination(), D.callPlugins("onCreatePagination"), b.paginationClickable && y()
      }, D.updatePagination = function(a) {
         if (b.pagination && !(D.slides.length < 1)) {
            var d = c("." + b.paginationActiveClass, D.paginationContainer);
            if (d) {
               var e = D.paginationButtons;
               if (0 !== e.length) {
                  for (var f = 0; f < e.length; f++)
                     e[f].className = b.paginationElementClass;
                  var g = b.loop ? D.loopedSlides : 0;
                  if (b.paginationAsRange) {
                     D.visibleSlides || D.calcVisibleSlides(a);
                     var h, i = [];
                     for (h = 0; h < D.visibleSlides.length; h++) {
                        var j = D.slides.indexOf(D.visibleSlides[h]) - g;
                        b.loop && 0 > j && (j = D.slides.length - 2 * D.loopedSlides + j), b.loop && j >= D.slides.length - 2 * D.loopedSlides && (j = D.slides.length - 2 * D.loopedSlides - j, j = Math.abs(j)), i.push(j)
                     }
                     for (h = 0; h < i.length; h++)
                        e[i[h]] && (e[i[h]].className += " " + b.paginationVisibleClass);
                     b.loop ? void 0 !== e[D.activeLoopIndex] && (e[D.activeLoopIndex].className += " " + b.paginationActiveClass) : e[D.activeIndex] && (e[D.activeIndex].className += " " + b.paginationActiveClass)
                  } else
                     b.loop ? e[D.activeLoopIndex] && (e[D.activeLoopIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass) : e[D.activeIndex] && (e[D.activeIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass)
               }
            }
         }
      }, D.calcVisibleSlides = function(a) {
         var c = [], d = 0, e = 0, f = 0;
         N && D.wrapperLeft > 0 && (a += D.wrapperLeft), !N && D.wrapperTop > 0 && (a += D.wrapperTop);
         for (var g = 0; g < D.slides.length; g++) {
            d += e, e = "auto" === b.slidesPerView ? N ? D.h.getWidth(D.slides[g], !0, b.roundLengths) : D.h.getHeight(D.slides[g], !0, b.roundLengths) : F, f = d + e;
            var h = !1;
            b.visibilityFullFit ? (d >= -a && -a + J >= f && (h = !0), -a >= d && f >= -a + J && (h = !0)) : (f > -a && -a + J >= f && (h = !0), d >= -a && -a + J > d && (h = !0), -a > d && f > -a + J && (h = !0)), h && c.push(D.slides[g])
         }
         0 === c.length && (c = [D.slides[D.activeIndex]]), D.visibleSlides = c
      };
      var ab, bb;
      D.startAutoplay = function() {
         if (D.support.transitions) {
            if ("undefined" != typeof ab)
               return!1;
            if (!b.autoplay)
               return;
            D.callPlugins("onAutoplayStart"), b.onAutoplayStart && D.fireCallback(b.onAutoplayStart, D), A()
         } else {
            if ("undefined" != typeof bb)
               return!1;
            if (!b.autoplay)
               return;
            D.callPlugins("onAutoplayStart"), b.onAutoplayStart && D.fireCallback(b.onAutoplayStart, D), bb = setInterval(function() {
               b.loop ? (D.fixLoop(), D.swipeNext(!0, !0)) : D.swipeNext(!0, !0) || (b.autoplayStopOnLast ? (clearInterval(bb), bb = void 0) : D.swipeTo(0))
            }, b.autoplay)
         }
      }, D.stopAutoplay = function(a) {
         if (D.support.transitions) {
            if (!ab)
               return;
            ab && clearTimeout(ab), ab = void 0, a && !b.autoplayDisableOnInteraction && D.wrapperTransitionEnd(function() {
               A()
            }), D.callPlugins("onAutoplayStop"), b.onAutoplayStop && D.fireCallback(b.onAutoplayStop, D)
         } else
            bb && clearInterval(bb), bb = void 0, D.callPlugins("onAutoplayStop"), b.onAutoplayStop && D.fireCallback(b.onAutoplayStop, D)
      }, D.loopCreated = !1, D.removeLoopedSlides = function() {
         if (D.loopCreated)
            for (var a = 0; a < D.slides.length; a++)
               D.slides[a].getData("looped") === !0 && D.wrapper.removeChild(D.slides[a])
      }, D.createLoop = function() {
         if (0 !== D.slides.length) {
            D.loopedSlides = "auto" === b.slidesPerView ? b.loopedSlides || 1 : b.slidesPerView + b.loopAdditionalSlides, D.loopedSlides > D.slides.length && (D.loopedSlides = D.slides.length);
            var a, c = "", d = "", e = "", f = D.slides.length, g = Math.floor(D.loopedSlides / f), h = D.loopedSlides % f;
            for (a = 0; g * f > a; a++) {
               var i = a;
               if (a >= f) {
                  var j = Math.floor(a / f);
                  i = a - f * j
               }
               e += D.slides[i].outerHTML
            }
            for (a = 0; h > a; a++)
               d += u(b.slideDuplicateClass, D.slides[a].outerHTML);
            for (a = f - h; f > a; a++)
               c += u(b.slideDuplicateClass, D.slides[a].outerHTML);
            var k = c + e + E.innerHTML + e + d;
            for (E.innerHTML = k, D.loopCreated = !0, D.calcSlides(), a = 0; a < D.slides.length; a++)
               (a < D.loopedSlides || a >= D.slides.length - D.loopedSlides) && D.slides[a].setData("looped", !0);
            D.callPlugins("onCreateLoop")
         }
      }, D.fixLoop = function() {
         var a;
         D.activeIndex < D.loopedSlides ? (a = D.slides.length - 3 * D.loopedSlides + D.activeIndex, D.swipeTo(a, 0, !1)) : ("auto" === b.slidesPerView && D.activeIndex >= 2 * D.loopedSlides || D.activeIndex > D.slides.length - 2 * b.slidesPerView) && (a = -D.slides.length + D.activeIndex + D.loopedSlides, D.swipeTo(a, 0, !1))
      }, D.loadSlides = function() {
         var a = "";
         D.activeLoaderIndex = 0;
         for (var c = b.loader.slides, d = b.loader.loadAllSlides ? c.length : b.slidesPerView * (1 + b.loader.surroundGroups), e = 0; d > e; e++)
            a += "outer" === b.loader.slidesHTMLType ? c[e] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + e + '">' + c[e] + "</" + b.slideElement + ">";
         D.wrapper.innerHTML = a, D.calcSlides(!0), b.loader.loadAllSlides || D.wrapperTransitionEnd(D.reloadSlides, !0)
      }, D.reloadSlides = function() {
         var a = b.loader.slides, c = parseInt(D.activeSlide().data("swiperindex"), 10);
         if (!(0 > c || c > a.length - 1)) {
            D.activeLoaderIndex = c;
            var d = Math.max(0, c - b.slidesPerView * b.loader.surroundGroups), e = Math.min(c + b.slidesPerView * (1 + b.loader.surroundGroups) - 1, a.length - 1);
            if (c > 0) {
               var f = -F * (c - d);
               D.setWrapperTranslate(f), D.setWrapperTransition(0)
            }
            var g;
            if ("reload" === b.loader.logic) {
               D.wrapper.innerHTML = "";
               var h = "";
               for (g = d; e >= g; g++)
                  h += "outer" === b.loader.slidesHTMLType ? a[g] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + g + '">' + a[g] + "</" + b.slideElement + ">";
               D.wrapper.innerHTML = h
            } else {
               var i = 1e3, j = 0;
               for (g = 0; g < D.slides.length; g++) {
                  var k = D.slides[g].data("swiperindex");
                  d > k || k > e ? D.wrapper.removeChild(D.slides[g]) : (i = Math.min(k, i), j = Math.max(k, j))
               }
               for (g = d; e >= g; g++) {
                  var l;
                  i > g && (l = document.createElement(b.slideElement), l.className = b.slideClass, l.setAttribute("data-swiperindex", g), l.innerHTML = a[g], D.wrapper.insertBefore(l, D.wrapper.firstChild)), g > j && (l = document.createElement(b.slideElement), l.className = b.slideClass, l.setAttribute("data-swiperindex", g), l.innerHTML = a[g], D.wrapper.appendChild(l))
               }
            }
            D.reInit(!0)
         }
      }, B()
   }
};
Swiper.prototype = {plugins: {}, wrapperTransitionEnd: function(a, b) {
      "use strict";
      function c(h) {
         if (h.target === f && (a(e), e.params.queueEndCallbacks && (e._queueEndCallbacks = !1), !b))
            for (d = 0; d < g.length; d++)
               e.h.removeEventListener(f, g[d], c)
      }
      var d, e = this, f = e.wrapper, g = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
      if (a)
         for (d = 0; d < g.length; d++)
            e.h.addEventListener(f, g[d], c)
   }, getWrapperTranslate: function(a) {
      "use strict";
      var b, c, d, e, f = this.wrapper;
      return"undefined" == typeof a && (a = "horizontal" === this.params.mode ? "x" : "y"), this.support.transforms && this.params.useCSS3Transforms ? (d = window.getComputedStyle(f, null), window.WebKitCSSMatrix ? e = new WebKitCSSMatrix("none" === d.webkitTransform ? "" : d.webkitTransform) : (e = d.MozTransform || d.OTransform || d.MsTransform || d.msTransform || d.transform || d.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), b = e.toString().split(",")), "x" === a && (c = window.WebKitCSSMatrix ? e.m41 : parseFloat(16 === b.length ? b[12] : b[4])), "y" === a && (c = window.WebKitCSSMatrix ? e.m42 : parseFloat(16 === b.length ? b[13] : b[5]))) : ("x" === a && (c = parseFloat(f.style.left, 10) || 0), "y" === a && (c = parseFloat(f.style.top, 10) || 0)), c || 0
   }, setWrapperTranslate: function(a, b, c) {
      "use strict";
      var d, e = this.wrapper.style, f = {x: 0, y: 0, z: 0};
      3 === arguments.length ? (f.x = a, f.y = b, f.z = c) : ("undefined" == typeof b && (b = "horizontal" === this.params.mode ? "x" : "y"), f[b] = a), this.support.transforms && this.params.useCSS3Transforms ? (d = this.support.transforms3d ? "translate3d(" + f.x + "px, " + f.y + "px, " + f.z + "px)" : "translate(" + f.x + "px, " + f.y + "px)", e.webkitTransform = e.MsTransform = e.msTransform = e.MozTransform = e.OTransform = e.transform = d) : (e.left = f.x + "px", e.top = f.y + "px"), this.callPlugins("onSetWrapperTransform", f), this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, f)
   }, setWrapperTransition: function(a) {
      "use strict";
      var b = this.wrapper.style;
      b.webkitTransitionDuration = b.MsTransitionDuration = b.msTransitionDuration = b.MozTransitionDuration = b.OTransitionDuration = b.transitionDuration = a / 1e3 + "s", this.callPlugins("onSetWrapperTransition", {duration: a}), this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, a)
   }, h: {getWidth: function(a, b, c) {
         "use strict";
         var d = window.getComputedStyle(a, null).getPropertyValue("width"), e = parseFloat(d);
         return(isNaN(e) || d.indexOf("%") > 0 || 0 > e) && (e = a.offsetWidth - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))), b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))), c ? Math.ceil(e) : e
      }, getHeight: function(a, b, c) {
         "use strict";
         if (b)
            return a.offsetHeight;
         var d = window.getComputedStyle(a, null).getPropertyValue("height"), e = parseFloat(d);
         return(isNaN(e) || d.indexOf("%") > 0 || 0 > e) && (e = a.offsetHeight - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))), b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))), c ? Math.ceil(e) : e
      }, getOffset: function(a) {
         "use strict";
         var b = a.getBoundingClientRect(), c = document.body, d = a.clientTop || c.clientTop || 0, e = a.clientLeft || c.clientLeft || 0, f = window.pageYOffset || a.scrollTop, g = window.pageXOffset || a.scrollLeft;
         return document.documentElement && !window.pageYOffset && (f = document.documentElement.scrollTop, g = document.documentElement.scrollLeft), {top: b.top + f - d, left: b.left + g - e}
      }, windowWidth: function() {
         "use strict";
         return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0
      }, windowHeight: function() {
         "use strict";
         return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0
      }, windowScroll: function() {
         "use strict";
         return"undefined" != typeof pageYOffset ? {left: window.pageXOffset, top: window.pageYOffset} : document.documentElement ? {left: document.documentElement.scrollLeft, top: document.documentElement.scrollTop} : void 0
      }, addEventListener: function(a, b, c, d) {
         "use strict";
         "undefined" == typeof d && (d = !1), a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
      }, removeEventListener: function(a, b, c, d) {
         "use strict";
         "undefined" == typeof d && (d = !1), a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
      }}, setTransform: function(a, b) {
      "use strict";
      var c = a.style;
      c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = b
   }, setTranslate: function(a, b) {
      "use strict";
      var c = a.style, d = {x: b.x || 0, y: b.y || 0, z: b.z || 0}, e = this.support.transforms3d ? "translate3d(" + d.x + "px," + d.y + "px," + d.z + "px)" : "translate(" + d.x + "px," + d.y + "px)";
      c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = e, this.support.transforms || (c.left = d.x + "px", c.top = d.y + "px")
   }, setTransition: function(a, b) {
      "use strict";
      var c = a.style;
      c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = b + "ms"
   }, support: {touch: window.Modernizr && Modernizr.touch === !0 || function() {
         "use strict";
         return!!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch)
      }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
         "use strict";
         var a = document.createElement("div").style;
         return"webkitPerspective"in a || "MozPerspective"in a || "OPerspective"in a || "MsPerspective"in a || "perspective"in a
      }(), transforms: window.Modernizr && Modernizr.csstransforms === !0 || function() {
         "use strict";
         var a = document.createElement("div").style;
         return"transform"in a || "WebkitTransform"in a || "MozTransform"in a || "msTransform"in a || "MsTransform"in a || "OTransform"in a
      }(), transitions: window.Modernizr && Modernizr.csstransitions === !0 || function() {
         "use strict";
         var a = document.createElement("div").style;
         return"transition"in a || "WebkitTransition"in a || "MozTransition"in a || "msTransition"in a || "MsTransition"in a || "OTransition"in a
      }(), classList: function() {
         "use strict";
         var a = document.createElement("div");
         return"classList"in a
      }()}, browser: {ie8: function() {
         "use strict";
         var a = -1;
         if ("Microsoft Internet Explorer" === navigator.appName) {
            var b = navigator.userAgent, c = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
            null !== c.exec(b) && (a = parseFloat(RegExp.$1))
         }
         return-1 !== a && 9 > a
      }(), ie10: window.navigator.msPointerEnabled, ie11: window.navigator.pointerEnabled}}, (window.jQuery || window.Zepto) && !function(a) {
   "use strict";
   a.fn.swiper = function(b) {
      var c;
      return this.each(function(d) {
         var e = a(this), f = new Swiper(e[0], b);
         d || (c = f), e.data("swiper", f)
      }), c
   }
}(window.jQuery || window.Zepto), "undefined" != typeof module && (module.exports = Swiper), "function" == typeof define && define.amd && define([], function() {
   "use strict";
   return Swiper
});




/*
 * jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010
 * https://benalman.com/projects/jquery-bbq-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * https://benalman.com/about/license/
 */
(function($, r) {
   var h, n = Array.prototype.slice, t = decodeURIComponent, a = $.param, j, c, m, y, b = $.bbq = $.bbq || {}, s, x, k, e = $.event.special, d = "hashchange", B = "querystring", F = "fragment", z = "elemUrlAttr", l = "href", w = "src", p = /^.*\?|#.*$/g, u, H, g, i, C, E = {};
   function G(I) {
      return typeof I === "string"
   }
   function D(J) {
      var I = n.call(arguments, 1);
      return function() {
         return J.apply(this, I.concat(n.call(arguments)))
      }
   }
   function o(I) {
      return I.replace(H, "$2")
   }
   function q(I) {
      return I.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, "$1")
   }
   function f(K, P, I, L, J) {
      var R, O, N, Q, M;
      if (L !== h) {
         N = I.match(K ? H : /^([^#?]*)\??([^#]*)(#?.*)/);
         M = N[3] || "";
         if (J === 2 && G(L)) {
            O = L.replace(K ? u : p, "")
         } else {
            Q = m(N[2]);
            L = G(L) ? m[K ? F : B](L) : L;
            O = J === 2 ? L : J === 1 ? $.extend({}, L, Q) : $.extend({}, Q, L);
            O = j(O);
            if (K) {
               O = O.replace(g, t)
            }
         }
         R = N[1] + (K ? C : O || !N[1] ? "?" : "") + O + M
      } else {
         R = P(I !== h ? I : location.href)
      }
      return R
   }
   a[B] = D(f, 0, q);
   a[F] = c = D(f, 1, o);
   a.sorted = j = function(J, K) {
      var I = [], L = {};
      $.each(a(J, K).split("&"), function(P, M) {
         var O = M.replace(/(?:%5B|=).*$/, ""), N = L[O];
         if (!N) {
            N = L[O] = [];
            I.push(O)
         }
         N.push(M)
      });
      return $.map(I.sort(), function(M) {
         return L[M]
      }).join("&")
   };
   c.noEscape = function(J) {
      J = J || "";
      var I = $.map(J.split(""), encodeURIComponent);
      g = new RegExp(I.join("|"), "g")
   };
   c.noEscape(",/");
   c.ajaxCrawlable = function(I) {
      if (I !== h) {
         if (I) {
            u = /^.*(?:#!|#)/;
            H = /^([^#]*)(?:#!|#)?(.*)$/;
            C = "#!"
         } else {
            u = /^.*#/;
            H = /^([^#]*)#?(.*)$/;
            C = "#"
         }
         i = !!I
      }
      return i
   };
   c.ajaxCrawlable(0);
   $.deparam = m = function(L, I) {
      var K = {}, J = {"true": !0, "false": !1, "null": null};
      $.each(L.replace(/\+/g, " ").split("&"), function(O, T) {
         var N = T.split("="), S = t(N[0]), M, R = K, P = 0, U = S.split("]["), Q = U.length - 1;
         if (/\[/.test(U[0]) && /\]$/.test(U[Q])) {
            U[Q] = U[Q].replace(/\]$/, "");
            U = U.shift().split("[").concat(U);
            Q = U.length - 1
         } else {
            Q = 0
         }
         if (N.length === 2) {
            M = t(N[1]);
            if (I) {
               M = M && !isNaN(M) ? +M : M === "undefined" ? h : J[M] !== h ? J[M] : M
            }
            if (Q) {
               for (; P <= Q; P++) {
                  S = U[P] === "" ? R.length : U[P];
                  R = R[S] = P < Q ? R[S] || (U[P + 1] && isNaN(U[P + 1]) ? {} : []) : M
               }
            } else {
               if ($.isArray(K[S])) {
                  K[S].push(M)
               } else {
                  if (K[S] !== h) {
                     K[S] = [K[S], M]
                  } else {
                     K[S] = M
                  }
               }
            }
         } else {
            if (S) {
               K[S] = I ? h : ""
            }
         }
      });
      return K
   };
   function A(K, I, J) {
      if (I === h || typeof I === "boolean") {
         J = I;
         I = a[K ? F : B]()
      } else {
         I = G(I) ? I.replace(K ? u : p, "") : I
      }
      return m(I, J)
   }
   m[B] = D(A, 0);
   m[F] = y = D(A, 1);
   $[z] || ($[z] = function(I) {
      return $.extend(E, I)
   })({a: l, base: l, iframe: w, img: w, input: w, form: "action", link: l, script: w});
   k = $[z];
   function v(L, J, K, I) {
      if (!G(K) && typeof K !== "object") {
         I = K;
         K = J;
         J = h
      }
      return this.each(function() {
         var O = $(this), M = J || k()[(this.nodeName || "").toLowerCase()] || "", N = M && O.attr(M) || "";
         O.attr(M, a[L](N, K, I))
      })
   }
   $.fn[B] = D(v, B);
   $.fn[F] = D(v, F);
   b.pushState = s = function(L, I) {
      if (G(L) && /^#/.test(L) && I === h) {
         I = 2
      }
      var K = L !== h, J = c(location.href, K ? L : {}, K ? I : 2);
      location.href = J
   };
   b.getState = x = function(I, J) {
      return I === h || typeof I === "boolean" ? y(I) : y(J)[I]
   };
   b.removeState = function(I) {
      var J = {};
      if (I !== h) {
         J = x();
         $.each($.isArray(I) ? I : arguments, function(L, K) {
            delete J[K]
         })
      }
      s(J, 2)
   };
   e[d] = $.extend(e[d], {add: function(I) {
         var K;
         function J(M) {
            var L = M[F] = c();
            M.getState = function(N, O) {
               return N === h || typeof N === "boolean" ? m(L, N) : m(L, O)[N]
            };
            K.apply(this, arguments)
         }
         if ($.isFunction(I)) {
            K = I;
            return J
         } else {
            K = I.handler;
            I.handler = J
         }
      }})
})(jQuery, this);
/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * https://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * https://benalman.com/about/license/
 */
(function(e, t, n) {
   "$:nomunge";
   function f(e) {
      e = e || location.href;
      return"#" + e.replace(/^[^#]*#?(.*)$/, "$1")
   }
   var r = "hashchange", i = document, s, o = e.event.special, u = i.documentMode, a = "on" + r in t && (u === n || u > 7);
   e.fn[r] = function(e) {
      return e ? this.bind(r, e) : this.trigger(r)
   };
   e.fn[r].delay = 50;
   o[r] = e.extend(o[r], {setup: function() {
         if (a) {
            return false
         }
         e(s.start)
      }, teardown: function() {
         if (a) {
            return false
         }
         e(s.stop)
      }});
   s = function() {
      function p() {
         var n = f(), i = h(u);
         if (n !== u) {
            c(u = n, i);
            e(t).trigger(r)
         } else if (i !== u) {
            location.href = location.href.replace(/#.*/, "") + i
         }
         o = setTimeout(p, e.fn[r].delay)
      }
      var s = {}, o, u = f(), l = function(e) {
         return e
      }, c = l, h = l;
      s.start = function() {
         o || p()
      };
      s.stop = function() {
         o && clearTimeout(o);
         o = n
      };
      navigator.appName === "Microsoft Internet Explorer" && !a && function() {
         var t, n;
         s.start = function() {
            if (!t) {
               n = e.fn[r].src;
               n = n && n + f();
               t = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                  n || c(f());
                  p()
               }).attr("src", n || "javascript:0").insertAfter("body")[0].contentWindow;
               i.onpropertychange = function() {
                  try {
                     if (event.propertyName === "title") {
                        t.document.title = i.title
                     }
                  } catch (e) {
                  }
               }
            }
         };
         s.stop = l;
         h = function() {
            return f(t.location.href)
         };
         c = function(n, s) {
            var o = t.document, u = e.fn[r].domain;
            if (n !== s) {
               o.title = i.title;
               o.open();
               u && o.write('<script>document.domain="' + u + '"</script>');
               o.close();
               t.location.hash = n
            }
         }
      }();
      return s
   }()
})(jQuery, this);




// Toastr v2.1.0
(function(e) {
   e(["jquery"], function(e) {
      return function() {
         function u(e, t, n) {
            return w({type: i.error, iconClass: E().iconClasses.error, message: e, optionsOverride: n, title: t})
         }
         function a(n, r) {
            if (!n) {
               n = E()
            }
            t = e("#" + n.containerId);
            if (t.length) {
               return t
            }
            if (r) {
               t = g(n)
            }
            return t
         }
         function f(e, t, n) {
            return w({type: i.info, iconClass: E().iconClasses.info, message: e, optionsOverride: n, title: t})
         }
         function l(e) {
            n = e
         }
         function c(e, t, n) {
            return w({type: i.success, iconClass: E().iconClasses.success, message: e, optionsOverride: n, title: t})
         }
         function h(e, t, n) {
            return w({type: i.warning, iconClass: E().iconClasses.warning, message: e, optionsOverride: n, title: t})
         }
         function p(e) {
            var n = E();
            if (!t) {
               a(n)
            }
            if (!m(e, n)) {
               v(n)
            }
         }
         function d(n) {
            var r = E();
            if (!t) {
               a(r)
            }
            if (n && e(":focus", n).length === 0) {
               S(n);
               return
            }
            if (t.children().length) {
               t.remove()
            }
         }
         function v(n) {
            var r = t.children();
            for (var i = r.length - 1; i >= 0; i--) {
               m(e(r[i]), n)
            }
         }
         function m(t, n) {
            if (t && e(":focus", t).length === 0) {
               t[n.hideMethod]({duration: n.hideDuration, easing: n.hideEasing, complete: function() {
                     S(t)
                  }});
               return true
            }
            return false
         }
         function g(n) {
            t = e("<div/>").attr("id", n.containerId).addClass(n.positionClass).attr("aria-live", "polite").attr("role", "alert");
            t.appendTo(e(n.target));
            return t
         }
         function y() {
            return{tapToDismiss: true, toastClass: "toast", containerId: "toast-container", debug: false, showMethod: "fadeIn", showDuration: 300, showEasing: "swing", onShown: undefined, hideMethod: "fadeOut", hideDuration: 1e3, hideEasing: "swing", onHidden: undefined, extendedTimeOut: 1e3, iconClasses: {error: "toast-error", info: "toast-info", success: "toast-success", warning: "toast-warning"}, iconClass: "toast-info", positionClass: "toast-top-right", timeOut: 5e3, titleClass: "toast-title", messageClass: "toast-message", target: "body", closeHtml: "<button>&times;</button>", newestOnTop: true, preventDuplicates: false}
         }
         function b(e) {
            if (!n) {
               return
            }
            n(e)
         }
         function w(n) {
            function d(t) {
               if (e(":focus", f).length && !t) {
                  return
               }
               return f[i.hideMethod]({duration: i.hideDuration, easing: i.hideEasing, complete: function() {
                     S(f);
                     if (i.onHidden && p.state !== "hidden") {
                        i.onHidden()
                     }
                     p.state = "hidden";
                     p.endTime = new Date;
                     b(p)
                  }})
            }
            function v() {
               if (i.timeOut > 0 || i.extendedTimeOut > 0) {
                  u = setTimeout(d, i.extendedTimeOut)
               }
            }
            function m() {
               clearTimeout(u);
               f.stop(true, true)[i.showMethod]({duration: i.showDuration, easing: i.showEasing})
            }
            var i = E(), s = n.iconClass || i.iconClass;
            if (i.preventDuplicates) {
               if (n.message === o) {
                  return
               } else {
                  o = n.message
               }
            }
            if (typeof n.optionsOverride !== "undefined") {
               i = e.extend(i, n.optionsOverride);
               s = n.optionsOverride.iconClass || s
            }
            r++;
            t = a(i, true);
            var u = null, f = e("<div/>"), l = e("<div/>"), c = e("<div/>"), h = e(i.closeHtml), p = {toastId: r, state: "visible", startTime: new Date, options: i, map: n};
            if (n.iconClass) {
               f.addClass(i.toastClass).addClass(s)
            }
            if (n.title) {
               l.append(n.title).addClass(i.titleClass);
               f.append(l)
            }
            if (n.message) {
               c.append(n.message).addClass(i.messageClass);
               f.append(c)
            }
            if (i.closeButton) {
               h.addClass("toast-close-button").attr("role", "button");
               f.prepend(h)
            }
            f.hide();
            if (i.newestOnTop) {
               t.prepend(f)
            } else {
               t.append(f)
            }
            f[i.showMethod]({duration: i.showDuration, easing: i.showEasing, complete: i.onShown});
            if (i.timeOut > 0) {
               u = setTimeout(d, i.timeOut)
            }
            f.hover(m, v);
            if (!i.onclick && i.tapToDismiss) {
               f.click(d)
            }
            if (i.closeButton && h) {
               h.click(function(e) {
                  if (e.stopPropagation) {
                     e.stopPropagation()
                  } else if (e.cancelBubble !== undefined && e.cancelBubble !== true) {
                     e.cancelBubble = true
                  }
                  d(true)
               })
            }
            if (i.onclick) {
               f.click(function() {
                  i.onclick();
                  d()
               })
            }
            b(p);
            if (i.debug && console) {
               console.log(p)
            }
            return f
         }
         function E() {
            return e.extend({}, y(), s.options)
         }
         function S(e) {
            if (!t) {
               t = a()
            }
            if (e.is(":visible")) {
               return
            }
            e.remove();
            e = null;
            if (t.children().length === 0) {
               t.remove()
            }
         }
         var t;
         var n;
         var r = 0;
         var i = {error: "error", info: "info", success: "success", warning: "warning"};
         var s = {clear: p, remove: d, error: u, getContainer: a, info: f, options: {}, subscribe: l, success: c, version: "2.1.0", warning: h};
         var o;
         return s
      }()
   })
})(typeof define === "function" && define.amd ? define : function(e, t) {
   if (typeof module !== "undefined" && module.exports) {
      module.exports = t(require("jquery"))
   } else {
      window["toastr"] = t(window["jQuery"])
   }
});




/*!
 * Chart.js
 * https://chartjs.org/
 * Version: 1.0.1
 *
 * Copyright 2017 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */
(function() {
   "use strict";
   var t = this, i = t.Chart, e = function(t) {
      this.canvas = t.canvas, this.ctx = t;
      this.width = t.canvas.width, this.height = t.canvas.height;
      return this.aspectRatio = this.width / this.height, s.retinaScale(this), this
   };
   e.defaults = {global: {animation: !0, animationSteps: 60, animationEasing: "easeOutQuart", showScale: !0, scaleOverride: !1, scaleSteps: null, scaleStepWidth: null, scaleStartValue: null, scaleLineColor: "rgba(0,0,0,.1)", scaleLineWidth: 1, scaleShowLabels: !0, scaleLabel: "<%=value%>", scaleIntegersOnly: !0, scaleBeginAtZero: !1, scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", scaleFontSize: 12, scaleFontStyle: "normal", scaleFontColor: "#666", responsive: !1, maintainAspectRatio: !0, showTooltips: !0, customTooltips: !1, tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"], tooltipFillColor: "rgba(0,0,0,0.8)", tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", tooltipFontSize: 14, tooltipFontStyle: "normal", tooltipFontColor: "#fff", tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", tooltipTitleFontSize: 14, tooltipTitleFontStyle: "bold", tooltipTitleFontColor: "#fff", tooltipYPadding: 6, tooltipXPadding: 6, tooltipCaretSize: 8, tooltipCornerRadius: 6, tooltipXOffset: 10, tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>", multiTooltipTemplate: "<%= value %>", multiTooltipKeyBackground: "#fff", onAnimationProgress: function() {
         }, onAnimationComplete: function() {
         }}}, e.types = {};
   var s = e.helpers = {}, n = s.each = function(t, i, e) {
      var s = Array.prototype.slice.call(arguments, 3);
      if (t)
         if (t.length === +t.length) {
            var n;
            for (n = 0; n < t.length; n++)
               i.apply(e, [t[n], n].concat(s))
         } else
            for (var o in t)
               i.apply(e, [t[o], o].concat(s))
   }, o = s.clone = function(t) {
      var i = {};
      return n(t, function(e, s) {
         t.hasOwnProperty(s) && (i[s] = e)
      }), i
   }, a = s.extend = function(t) {
      return n(Array.prototype.slice.call(arguments, 1), function(i) {
         n(i, function(e, s) {
            i.hasOwnProperty(s) && (t[s] = e)
         })
      }), t
   }, h = s.merge = function() {
      var t = Array.prototype.slice.call(arguments, 0);
      return t.unshift({}), a.apply(null, t)
   }, l = s.indexOf = function(t, i) {
      if (Array.prototype.indexOf)
         return t.indexOf(i);
      for (var e = 0; e < t.length; e++)
         if (t[e] === i)
            return e;
      return-1
   }, r = (s.where = function(t, i) {
      var e = [];
      return s.each(t, function(t) {
         i(t) && e.push(t)
      }), e
   }, s.findNextWhere = function(t, i, e) {
      e || (e = -1);
      for (var s = e + 1; s < t.length; s++) {
         var n = t[s];
         if (i(n))
            return n
      }
   }, s.findPreviousWhere = function(t, i, e) {
      e || (e = t.length);
      for (var s = e - 1; s >= 0; s--) {
         var n = t[s];
         if (i(n))
            return n
      }
   }, s.inherits = function(t) {
      var i = this, e = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
         return i.apply(this, arguments)
      }, s = function() {
         this.constructor = e
      };
      return s.prototype = i.prototype, e.prototype = new s, e.extend = r, t && a(e.prototype, t), e.__super__ = i.prototype, e
   }), c = s.noop = function() {
   }, u = s.uid = function() {
      var t = 0;
      return function() {
         return"chart-" + t++
      }
   }(), d = s.warn = function(t) {
      window.console && "function" == typeof window.console.warn && console.warn(t)
   }, p = s.amd = "function" == typeof define && define.amd, f = s.isNumber = function(t) {
      return!isNaN(parseFloat(t)) && isFinite(t)
   }, g = s.max = function(t) {
      return Math.max.apply(Math, t)
   }, m = s.min = function(t) {
      return Math.min.apply(Math, t)
   }, v = (s.cap = function(t, i, e) {
      if (f(i)) {
         if (t > i)
            return i
      } else if (f(e) && e > t)
         return e;
      return t
   }, s.getDecimalPlaces = function(t) {
      return t % 1 !== 0 && f(t) ? t.toString().split(".")[1].length : 0
   }), S = s.radians = function(t) {
      return t * (Math.PI / 180)
   }, x = (s.getAngleFromPoint = function(t, i) {
      var e = i.x - t.x, s = i.y - t.y, n = Math.sqrt(e * e + s * s), o = 2 * Math.PI + Math.atan2(s, e);
      return 0 > e && 0 > s && (o += 2 * Math.PI), {angle: o, distance: n}
   }, s.aliasPixel = function(t) {
      return t % 2 === 0 ? 0 : .5
   }), y = (s.splineCurve = function(t, i, e, s) {
      var n = Math.sqrt(Math.pow(i.x - t.x, 2) + Math.pow(i.y - t.y, 2)), o = Math.sqrt(Math.pow(e.x - i.x, 2) + Math.pow(e.y - i.y, 2)), a = s * n / (n + o), h = s * o / (n + o);
      return{inner: {x: i.x - a * (e.x - t.x), y: i.y - a * (e.y - t.y)}, outer: {x: i.x + h * (e.x - t.x), y: i.y + h * (e.y - t.y)}}
   }, s.calculateOrderOfMagnitude = function(t) {
      return Math.floor(Math.log(t) / Math.LN10)
   }), C = (s.calculateScaleRange = function(t, i, e, s, n) {
      var o = 2, a = Math.floor(i / (1.5 * e)), h = o >= a, l = g(t), r = m(t);
      l === r && (l += .5, r >= .5 && !s ? r -= .5 : l += .5);
      for (var c = Math.abs(l - r), u = y(c), d = Math.ceil(l / (1 * Math.pow(10, u))) * Math.pow(10, u), p = s ? 0 : Math.floor(r / (1 * Math.pow(10, u))) * Math.pow(10, u), f = d - p, v = Math.pow(10, u), S = Math.round(f / v); (S > a || a > 2 * S) && !h; )
         if (S > a)
            v *= 2, S = Math.round(f / v), S % 1 !== 0 && (h = !0);
         else if (n && u >= 0) {
            if (v / 2 % 1 !== 0)
               break;
            v /= 2, S = Math.round(f / v)
         } else
            v /= 2, S = Math.round(f / v);
      return h && (S = o, v = f / S), {steps: S, stepValue: v, min: p, max: p + S * v}
   }, s.template = function(t, i) {
      function e(t, i) {
         var e = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : s[t] = s[t];
         return i ? e(i) : e
      }
      if (t instanceof Function)
         return t(i);
      var s = {};
      return e(t, i)
   }), w = (s.generateLabels = function(t, i, e, s) {
      var o = new Array(i);
      return labelTemplateString && n(o, function(i, n) {
         o[n] = C(t, {value: e + s * (n + 1)})
      }), o
   }, s.easingEffects = {linear: function(t) {
         return t
      }, easeInQuad: function(t) {
         return t * t
      }, easeOutQuad: function(t) {
         return-1 * t * (t - 2)
      }, easeInOutQuad: function(t) {
         return(t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1)
      }, easeInCubic: function(t) {
         return t * t * t
      }, easeOutCubic: function(t) {
         return 1 * ((t = t / 1 - 1) * t * t + 1)
      }, easeInOutCubic: function(t) {
         return(t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
      }, easeInQuart: function(t) {
         return t * t * t * t
      }, easeOutQuart: function(t) {
         return-1 * ((t = t / 1 - 1) * t * t * t - 1)
      }, easeInOutQuart: function(t) {
         return(t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)
      }, easeInQuint: function(t) {
         return 1 * (t /= 1) * t * t * t * t
      }, easeOutQuint: function(t) {
         return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
      }, easeInOutQuint: function(t) {
         return(t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
      }, easeInSine: function(t) {
         return-1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
      }, easeOutSine: function(t) {
         return 1 * Math.sin(t / 1 * (Math.PI / 2))
      }, easeInOutSine: function(t) {
         return-0.5 * (Math.cos(Math.PI * t / 1) - 1)
      }, easeInExpo: function(t) {
         return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
      }, easeOutExpo: function(t) {
         return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
      }, easeInOutExpo: function(t) {
         return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
      }, easeInCirc: function(t) {
         return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
      }, easeOutCirc: function(t) {
         return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
      }, easeInOutCirc: function(t) {
         return(t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
      }, easeInElastic: function(t) {
         var i = 1.70158, e = 0, s = 1;
         return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (e || (e = .3), s < Math.abs(1) ? (s = 1, i = e / 4) : i = e / (2 * Math.PI) * Math.asin(1 / s), -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - i) * Math.PI / e)))
      }, easeOutElastic: function(t) {
         var i = 1.70158, e = 0, s = 1;
         return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (e || (e = .3), s < Math.abs(1) ? (s = 1, i = e / 4) : i = e / (2 * Math.PI) * Math.asin(1 / s), s * Math.pow(2, -10 * t) * Math.sin(2 * (1 * t - i) * Math.PI / e) + 1)
      }, easeInOutElastic: function(t) {
         var i = 1.70158, e = 0, s = 1;
         return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (e || (e = .3 * 1.5), s < Math.abs(1) ? (s = 1, i = e / 4) : i = e / (2 * Math.PI) * Math.asin(1 / s), 1 > t ? -.5 * s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - i) * Math.PI / e) : s * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (1 * t - i) * Math.PI / e) * .5 + 1)
      }, easeInBack: function(t) {
         var i = 1.70158;
         return 1 * (t /= 1) * t * ((i + 1) * t - i)
      }, easeOutBack: function(t) {
         var i = 1.70158;
         return 1 * ((t = t / 1 - 1) * t * ((i + 1) * t + i) + 1)
      }, easeInOutBack: function(t) {
         var i = 1.70158;
         return(t /= .5) < 1 ? .5 * t * t * (((i *= 1.525) + 1) * t - i) : .5 * ((t -= 2) * t * (((i *= 1.525) + 1) * t + i) + 2)
      }, easeInBounce: function(t) {
         return 1 - w.easeOutBounce(1 - t)
      }, easeOutBounce: function(t) {
         return(t /= 1) < 1 / 2.75 ? 7.5625 * t * t : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
      }, easeInOutBounce: function(t) {
         return.5 > t ? .5 * w.easeInBounce(2 * t) : .5 * w.easeOutBounce(2 * t - 1) + .5
      }}), b = s.requestAnimFrame = function() {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
         return window.setTimeout(t, 1e3 / 60)
      }
   }(), P = (s.cancelAnimFrame = function() {
      return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
         return window.clearTimeout(t, 1e3 / 60)
      }
   }(), s.animationLoop = function(t, i, e, s, n, o) {
      var a = 0, h = w[e] || w.linear, l = function() {
         a++;
         var e = a / i, r = h(e);
         t.call(o, r, e, a), s.call(o, r, e), i > a ? o.animationFrame = b(l) : n.apply(o)
      };
      b(l)
   }, s.getRelativePosition = function(t) {
      var i, e, s = t.originalEvent || t, n = t.currentTarget || t.srcElement, o = n.getBoundingClientRect();
      return s.touches ? (i = s.touches[0].clientX - o.left, e = s.touches[0].clientY - o.top) : (i = s.clientX - o.left, e = s.clientY - o.top), {x: i, y: e}
   }, s.addEvent = function(t, i, e) {
      t.addEventListener ? t.addEventListener(i, e) : t.attachEvent ? t.attachEvent("on" + i, e) : t["on" + i] = e
   }), L = s.removeEvent = function(t, i, e) {
      t.removeEventListener ? t.removeEventListener(i, e, !1) : t.detachEvent ? t.detachEvent("on" + i, e) : t["on" + i] = c
   }, k = (s.bindEvents = function(t, i, e) {
      t.events || (t.events = {}), n(i, function(i) {
         t.events[i] = function() {
            e.apply(t, arguments)
         }, P(t.chart.canvas, i, t.events[i])
      })
   }, s.unbindEvents = function(t, i) {
      n(i, function(i, e) {
         L(t.chart.canvas, e, i)
      })
   }), F = s.getMaximumWidth = function(t) {
      var i = t.parentNode;
      return i.clientWidth
   }, R = s.getMaximumHeight = function(t) {
      var i = t.parentNode;
      return i.clientHeight
   }, T = (s.getMaximumSize = s.getMaximumWidth, s.retinaScale = function(t) {
      var i = t.ctx, e = t.canvas.width, s = t.canvas.height;
      window.devicePixelRatio && (i.canvas.style.width = e + "px", i.canvas.style.height = s + "px", i.canvas.height = s * window.devicePixelRatio, i.canvas.width = e * window.devicePixelRatio, i.scale(window.devicePixelRatio, window.devicePixelRatio))
   }), A = s.clear = function(t) {
      t.ctx.clearRect(0, 0, t.width, t.height)
   }, M = s.fontString = function(t, i, e) {
      return i + " " + t + "px " + e
   }, W = s.longestText = function(t, i, e) {
      t.font = i;
      var s = 0;
      return n(e, function(i) {
         var e = t.measureText(i).width;
         s = e > s ? e : s
      }), s
   }, z = s.drawRoundedRectangle = function(t, i, e, s, n, o) {
      t.beginPath(), t.moveTo(i + o, e), t.lineTo(i + s - o, e), t.quadraticCurveTo(i + s, e, i + s, e + o), t.lineTo(i + s, e + n - o), t.quadraticCurveTo(i + s, e + n, i + s - o, e + n), t.lineTo(i + o, e + n), t.quadraticCurveTo(i, e + n, i, e + n - o), t.lineTo(i, e + o), t.quadraticCurveTo(i, e, i + o, e), t.closePath()
   };
   e.instances = {}, e.Type = function(t, i, s) {
      this.options = i, this.chart = s, this.id = u(), e.instances[this.id] = this, i.responsive && this.resize(), this.initialize.call(this, t)
   }, a(e.Type.prototype, {initialize: function() {
         return this
      }, clear: function() {
         return A(this.chart), this
      }, stop: function() {
         return s.cancelAnimFrame.call(t, this.animationFrame), this
      }, resize: function(t) {
         this.stop();
         var i = this.chart.canvas, e = F(this.chart.canvas), s = this.options.maintainAspectRatio ? e / this.chart.aspectRatio : R(this.chart.canvas);
         return i.width = this.chart.width = e, i.height = this.chart.height = s, T(this.chart), "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)), this
      }, reflow: c, render: function(t) {
         return t && this.reflow(), this.options.animation && !t ? s.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), this.options.onAnimationComplete.call(this)), this
      }, generateLegend: function() {
         return C(this.options.legendTemplate, this)
      }, destroy: function() {
         this.clear(), k(this, this.events);
         var t = this.chart.canvas;
         t.width = this.chart.width, t.height = this.chart.height, t.style.removeProperty ? (t.style.removeProperty("width"), t.style.removeProperty("height")) : (t.style.removeAttribute("width"), t.style.removeAttribute("height")), delete e.instances[this.id]
      }, showTooltip: function(t, i) {
         "undefined" == typeof this.activeElements && (this.activeElements = []);
         var o = function(t) {
            var i = !1;
            return t.length !== this.activeElements.length ? i = !0 : (n(t, function(t, e) {
               t !== this.activeElements[e] && (i = !0)
            }, this), i)
         }.call(this, t);
         if (o || i) {
            if (this.activeElements = t, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), t.length > 0)
               if (this.datasets && this.datasets.length > 1) {
                  for (var a, h, r = this.datasets.length - 1; r >= 0 && (a = this.datasets[r].points || this.datasets[r].bars || this.datasets[r].segments, h = l(a, t[0]), - 1 === h); r--)
                     ;
                  var c = [], u = [], d = function() {
                     var t, i, e, n, o, a = [], l = [], r = [];
                     return s.each(this.datasets, function(i) {
                        t = i.points || i.bars || i.segments, t[h] && t[h].hasValue() && a.push(t[h])
                     }), s.each(a, function(t) {
                        l.push(t.x), r.push(t.y), c.push(s.template(this.options.multiTooltipTemplate, t)), u.push({fill: t._saved.fillColor || t.fillColor, stroke: t._saved.strokeColor || t.strokeColor})
                     }, this), o = m(r), e = g(r), n = m(l), i = g(l), {x: n > this.chart.width / 2 ? n : i, y: (o + e) / 2}
                  }.call(this, h);
                  new e.MultiTooltip({x: d.x, y: d.y, xPadding: this.options.tooltipXPadding, yPadding: this.options.tooltipYPadding, xOffset: this.options.tooltipXOffset, fillColor: this.options.tooltipFillColor, textColor: this.options.tooltipFontColor, fontFamily: this.options.tooltipFontFamily, fontStyle: this.options.tooltipFontStyle, fontSize: this.options.tooltipFontSize, titleTextColor: this.options.tooltipTitleFontColor, titleFontFamily: this.options.tooltipTitleFontFamily, titleFontStyle: this.options.tooltipTitleFontStyle, titleFontSize: this.options.tooltipTitleFontSize, cornerRadius: this.options.tooltipCornerRadius, labels: c, legendColors: u, legendColorBackground: this.options.multiTooltipKeyBackground, title: t[0].label, chart: this.chart, ctx: this.chart.ctx, custom: this.options.customTooltips}).draw()
               } else
                  n(t, function(t) {
                     var i = t.tooltipPosition();
                     new e.Tooltip({x: Math.round(i.x), y: Math.round(i.y), xPadding: this.options.tooltipXPadding, yPadding: this.options.tooltipYPadding, fillColor: this.options.tooltipFillColor, textColor: this.options.tooltipFontColor, fontFamily: this.options.tooltipFontFamily, fontStyle: this.options.tooltipFontStyle, fontSize: this.options.tooltipFontSize, caretHeight: this.options.tooltipCaretSize, cornerRadius: this.options.tooltipCornerRadius, text: C(this.options.tooltipTemplate, t), chart: this.chart, custom: this.options.customTooltips}).draw()
                  }, this);
            return this
         }
      }, toBase64Image: function() {
         return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
      }}), e.Type.extend = function(t) {
      var i = this, s = function() {
         return i.apply(this, arguments)
      };
      if (s.prototype = o(i.prototype), a(s.prototype, t), s.extend = e.Type.extend, t.name || i.prototype.name) {
         var n = t.name || i.prototype.name, l = e.defaults[i.prototype.name] ? o(e.defaults[i.prototype.name]) : {};
         e.defaults[n] = a(l, t.defaults), e.types[n] = s, e.prototype[n] = function(t, i) {
            var o = h(e.defaults.global, e.defaults[n], i || {});
            return new s(t, o, this)
         }
      } else
         d("Name not provided for this chart, so it hasn't been registered");
      return i
   }, e.Element = function(t) {
      a(this, t), this.initialize.apply(this, arguments), this.save()
   }, a(e.Element.prototype, {initialize: function() {
      }, restore: function(t) {
         return t ? n(t, function(t) {
            this[t] = this._saved[t]
         }, this) : a(this, this._saved), this
      }, save: function() {
         return this._saved = o(this), delete this._saved._saved, this
      }, update: function(t) {
         return n(t, function(t, i) {
            this._saved[i] = this[i], this[i] = t
         }, this), this
      }, transition: function(t, i) {
         return n(t, function(t, e) {
            this[e] = (t - this._saved[e]) * i + this._saved[e]
         }, this), this
      }, tooltipPosition: function() {
         return{x: this.x, y: this.y}
      }, hasValue: function() {
         return f(this.value)
      }}), e.Element.extend = r, e.Point = e.Element.extend({display: !0, inRange: function(t, i) {
         var e = this.hitDetectionRadius + this.radius;
         return Math.pow(t - this.x, 2) + Math.pow(i - this.y, 2) < Math.pow(e, 2)
      }, draw: function() {
         if (this.display) {
            var t = this.ctx;
            t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.stroke()
         }
      }}), e.Arc = e.Element.extend({inRange: function(t, i) {
         var e = s.getAngleFromPoint(this, {x: t, y: i}), n = e.angle >= this.startAngle && e.angle <= this.endAngle, o = e.distance >= this.innerRadius && e.distance <= this.outerRadius;
         return n && o
      }, tooltipPosition: function() {
         var t = this.startAngle + (this.endAngle - this.startAngle) / 2, i = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
         return{x: this.x + Math.cos(t) * i, y: this.y + Math.sin(t) * i}
      }, draw: function(t) {
         var i = this.ctx;
         i.beginPath(), i.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle), i.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0), i.closePath(), i.strokeStyle = this.strokeColor, i.lineWidth = this.strokeWidth, i.fillStyle = this.fillColor, i.fill(), i.lineJoin = "bevel", this.showStroke && i.stroke()
      }}), e.Rectangle = e.Element.extend({draw: function() {
         var t = this.ctx, i = this.width / 2, e = this.x - i, s = this.x + i, n = this.base - (this.base - this.y), o = this.strokeWidth / 2;
         this.showStroke && (e += o, s -= o, n += o), t.beginPath(), t.fillStyle = this.fillColor, t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(e, this.base), t.lineTo(e, n), t.lineTo(s, n), t.lineTo(s, this.base), t.fill(), this.showStroke && t.stroke()
      }, height: function() {
         return this.base - this.y
      }, inRange: function(t, i) {
         return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && i >= this.y && i <= this.base
      }}), e.Tooltip = e.Element.extend({draw: function() {
         var t = this.chart.ctx;
         t.font = M(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
         var i = this.caretPadding = 2, e = t.measureText(this.text).width + 2 * this.xPadding, s = this.fontSize + 2 * this.yPadding, n = s + this.caretHeight + i;
         this.x + e / 2 > this.chart.width ? this.xAlign = "left" : this.x - e / 2 < 0 && (this.xAlign = "right"), this.y - n < 0 && (this.yAlign = "below");
         var o = this.x - e / 2, a = this.y - n;
         if (t.fillStyle = this.fillColor, this.custom)
            this.custom(this);
         else {
            switch (this.yAlign) {
               case"above":
                  t.beginPath(), t.moveTo(this.x, this.y - i), t.lineTo(this.x + this.caretHeight, this.y - (i + this.caretHeight)), t.lineTo(this.x - this.caretHeight, this.y - (i + this.caretHeight)), t.closePath(), t.fill();
                  break;
               case"below":
                  a = this.y + i + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + i), t.lineTo(this.x + this.caretHeight, this.y + i + this.caretHeight), t.lineTo(this.x - this.caretHeight, this.y + i + this.caretHeight), t.closePath(), t.fill()
            }
            switch (this.xAlign) {
               case"left":
                  o = this.x - e + (this.cornerRadius + this.caretHeight);
                  break;
               case"right":
                  o = this.x - (this.cornerRadius + this.caretHeight)
            }
            z(t, o, a, e, s, this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.text, o + e / 2, a + s / 2)
         }
      }}), e.MultiTooltip = e.Element.extend({initialize: function() {
         this.font = M(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = M(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize, this.ctx.font = this.titleFont;
         var t = this.ctx.measureText(this.title).width, i = W(this.ctx, this.font, this.labels) + this.fontSize + 3, e = g([i, t]);
         this.width = e + 2 * this.xPadding;
         var s = this.height / 2;
         this.y - s < 0 ? this.y = s : this.y + s > this.chart.height && (this.y = this.chart.height - s), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
      }, getLineHeight: function(t) {
         var i = this.y - this.height / 2 + this.yPadding, e = t - 1;
         return 0 === t ? i + this.titleFontSize / 2 : i + (1.5 * this.fontSize * e + this.fontSize / 2) + 1.5 * this.titleFontSize
      }, draw: function() {
         if (this.custom)
            this.custom(this);
         else {
            z(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
            var t = this.ctx;
            t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), t.font = this.font, s.each(this.labels, function(i, e) {
               t.fillStyle = this.textColor, t.fillText(i, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(e + 1)), t.fillStyle = this.legendColorBackground, t.fillRect(this.x + this.xPadding, this.getLineHeight(e + 1) - this.fontSize / 2, this.fontSize, this.fontSize), t.fillStyle = this.legendColors[e].fill, t.fillRect(this.x + this.xPadding, this.getLineHeight(e + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
            }, this)
         }
      }}), e.Scale = e.Element.extend({initialize: function() {
         this.fit()
      }, buildYLabels: function() {
         this.yLabels = [];
         for (var t = v(this.stepValue), i = 0; i <= this.steps; i++)
            this.yLabels.push(C(this.templateString, {value: (this.min + i * this.stepValue).toFixed(t)}));
         this.yLabelWidth = this.display && this.showLabels ? W(this.ctx, this.font, this.yLabels) : 0
      }, addXLabel: function(t) {
         this.xLabels.push(t), this.valuesCount++, this.fit()
      }, removeXLabel: function() {
         this.xLabels.shift(), this.valuesCount--, this.fit()
      }, fit: function() {
         this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
         var t, i = this.endPoint - this.startPoint;
         for (this.calculateYRange(i), this.buildYLabels(), this.calculateXLabelRotation(); i > this.endPoint - this.startPoint; )
            i = this.endPoint - this.startPoint, t = this.yLabelWidth, this.calculateYRange(i), this.buildYLabels(), t < this.yLabelWidth && this.calculateXLabelRotation()
      }, calculateXLabelRotation: function() {
         this.ctx.font = this.font;
         var t, i, e = this.ctx.measureText(this.xLabels[0]).width, s = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
         if (this.xScalePaddingRight = s / 2 + 3, this.xScalePaddingLeft = e / 2 > this.yLabelWidth + 10 ? e / 2 : this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
            var n, o = W(this.ctx, this.font, this.xLabels);
            this.xLabelWidth = o;
            for (var a = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > a && 0 === this.xLabelRotation || this.xLabelWidth > a && this.xLabelRotation <= 90 && this.xLabelRotation > 0; )
               n = Math.cos(S(this.xLabelRotation)), t = n * e, i = n * s, t + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = t + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = n * o;
            this.xLabelRotation > 0 && (this.endPoint -= Math.sin(S(this.xLabelRotation)) * o + 3)
         } else
            this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
      }, calculateYRange: c, drawingArea: function() {
         return this.startPoint - this.endPoint
      }, calculateY: function(t) {
         var i = this.drawingArea() / (this.min - this.max);
         return this.endPoint - i * (t - this.min)
      }, calculateX: function(t) {
         var i = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)), e = i / (this.valuesCount - (this.offsetGridLines ? 0 : 1)), s = e * t + this.xScalePaddingLeft;
         return this.offsetGridLines && (s += e / 2), Math.round(s)
      }, update: function(t) {
         s.extend(this, t), this.fit()
      }, draw: function() {
         var t = this.ctx, i = (this.endPoint - this.startPoint) / this.steps, e = Math.round(this.xScalePaddingLeft);
         this.display && (t.fillStyle = this.textColor, t.font = this.font, n(this.yLabels, function(n, o) {
            var a = this.endPoint - i * o, h = Math.round(a), l = this.showHorizontalLines;
            t.textAlign = "right", t.textBaseline = "middle", this.showLabels && t.fillText(n, e - 10, a), 0 !== o || l || (l = !0), l && t.beginPath(), o > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), h += s.aliasPixel(t.lineWidth), l && (t.moveTo(e, h), t.lineTo(this.width, h), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(e - 5, h), t.lineTo(e, h), t.stroke(), t.closePath()
         }, this), n(this.xLabels, function(i, e) {
            var s = this.calculateX(e) + x(this.lineWidth), n = this.calculateX(e - (this.offsetGridLines ? .5 : 0)) + x(this.lineWidth), o = this.xLabelRotation > 0, a = this.showVerticalLines;
            0 !== e || a || (a = !0), a && t.beginPath(), e > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), a && (t.moveTo(n, this.endPoint), t.lineTo(n, this.startPoint - 3), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(n, this.endPoint), t.lineTo(n, this.endPoint + 5), t.stroke(), t.closePath(), t.save(), t.translate(s, o ? this.endPoint + 12 : this.endPoint + 8), t.rotate(-1 * S(this.xLabelRotation)), t.font = this.font, t.textAlign = o ? "right" : "center", t.textBaseline = o ? "middle" : "top", t.fillText(i, 0, 0), t.restore()
         }, this))
      }}), e.RadialScale = e.Element.extend({initialize: function() {
         this.size = m([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
      }, calculateCenterOffset: function(t) {
         var i = this.drawingArea / (this.max - this.min);
         return(t - this.min) * i
      }, update: function() {
         this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels()
      }, buildYLabels: function() {
         this.yLabels = [];
         for (var t = v(this.stepValue), i = 0; i <= this.steps; i++)
            this.yLabels.push(C(this.templateString, {value: (this.min + i * this.stepValue).toFixed(t)}))
      }, getCircumference: function() {
         return 2 * Math.PI / this.valuesCount
      }, setScaleSize: function() {
         var t, i, e, s, n, o, a, h, l, r, c, u, d = m([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]), p = this.width, g = 0;
         for (this.ctx.font = M(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), i = 0; i < this.valuesCount; i++)
            t = this.getPointPosition(i, d), e = this.ctx.measureText(C(this.templateString, {value: this.labels[i]})).width + 5, 0 === i || i === this.valuesCount / 2 ? (s = e / 2, t.x + s > p && (p = t.x + s, n = i), t.x - s < g && (g = t.x - s, a = i)) : i < this.valuesCount / 2 ? t.x + e > p && (p = t.x + e, n = i) : i > this.valuesCount / 2 && t.x - e < g && (g = t.x - e, a = i);
         l = g, r = Math.ceil(p - this.width), o = this.getIndexAngle(n), h = this.getIndexAngle(a), c = r / Math.sin(o + Math.PI / 2), u = l / Math.sin(h + Math.PI / 2), c = f(c) ? c : 0, u = f(u) ? u : 0, this.drawingArea = d - (u + c) / 2, this.setCenterPoint(u, c)
      }, setCenterPoint: function(t, i) {
         var e = this.width - i - this.drawingArea, s = t + this.drawingArea;
         this.xCenter = (s + e) / 2, this.yCenter = this.height / 2
      }, getIndexAngle: function(t) {
         var i = 2 * Math.PI / this.valuesCount;
         return t * i - Math.PI / 2
      }, getPointPosition: function(t, i) {
         var e = this.getIndexAngle(t);
         return{x: Math.cos(e) * i + this.xCenter, y: Math.sin(e) * i + this.yCenter}
      }, draw: function() {
         if (this.display) {
            var t = this.ctx;
            if (n(this.yLabels, function(i, e) {
               if (e > 0) {
                  var s, n = e * (this.drawingArea / this.steps), o = this.yCenter - n;
                  if (this.lineWidth > 0)
                     if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, this.lineArc)
                        t.beginPath(), t.arc(this.xCenter, this.yCenter, n, 0, 2 * Math.PI), t.closePath(), t.stroke();
                     else {
                        t.beginPath();
                        for (var a = 0; a < this.valuesCount; a++)
                           s = this.getPointPosition(a, this.calculateCenterOffset(this.min + e * this.stepValue)), 0 === a ? t.moveTo(s.x, s.y) : t.lineTo(s.x, s.y);
                        t.closePath(), t.stroke()
                     }
                  if (this.showLabels) {
                     if (t.font = M(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                        var h = t.measureText(i).width;
                        t.fillStyle = this.backdropColor, t.fillRect(this.xCenter - h / 2 - this.backdropPaddingX, o - this.fontSize / 2 - this.backdropPaddingY, h + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                     }
                     t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, t.fillText(i, this.xCenter, o)
                  }
               }
            }, this), !this.lineArc) {
               t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;
               for (var i = this.valuesCount - 1; i >= 0; i--) {
                  if (this.angleLineWidth > 0) {
                     var e = this.getPointPosition(i, this.calculateCenterOffset(this.max));
                     t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(e.x, e.y), t.stroke(), t.closePath()
                  }
                  var s = this.getPointPosition(i, this.calculateCenterOffset(this.max) + 5);
                  t.font = M(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), t.fillStyle = this.pointLabelFontColor;
                  var o = this.labels.length, a = this.labels.length / 2, h = a / 2, l = h > i || i > o - h, r = i === h || i === o - h;
                  t.textAlign = 0 === i ? "center" : i === a ? "center" : a > i ? "left" : "right", t.textBaseline = r ? "middle" : l ? "bottom" : "top", t.fillText(this.labels[i], s.x, s.y)
               }
            }
         }
      }}), s.addEvent(window, "resize", function() {
      var t;
      return function() {
         clearTimeout(t), t = setTimeout(function() {
            n(e.instances, function(t) {
               t.options.responsive && t.resize(t.render, !0)
            })
         }, 50)
      }
   }()), p ? define(function() {
      return e
   }) : "object" == typeof module && module.exports && (module.exports = e), t.Chart = e, e.noConflict = function() {
      return t.Chart = i, e
   }
}).call(this), function() {
   "use strict";
   var t = this, i = t.Chart, e = i.helpers, s = {scaleBeginAtZero: !0, scaleShowGridLines: !0, scaleGridLineColor: "rgba(0,0,0,.05)", scaleGridLineWidth: 1, scaleShowHorizontalLines: !0, scaleShowVerticalLines: !0, barShowStroke: !0, barStrokeWidth: 2, barValueSpacing: 5, barDatasetSpacing: 1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'};
   i.Type.extend({name: "Bar", defaults: s, initialize: function(t) {
         var s = this.options;
         this.ScaleClass = i.Scale.extend({offsetGridLines: !0, calculateBarX: function(t, i, e) {
               var n = this.calculateBaseWidth(), o = this.calculateX(e) - n / 2, a = this.calculateBarWidth(t);
               return o + a * i + i * s.barDatasetSpacing + a / 2
            }, calculateBaseWidth: function() {
               return this.calculateX(1) - this.calculateX(0) - 2 * s.barValueSpacing
            }, calculateBarWidth: function(t) {
               var i = this.calculateBaseWidth() - (t - 1) * s.barDatasetSpacing;
               return i / t
            }}), this.datasets = [], this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
            var i = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
            this.eachBars(function(t) {
               t.restore(["fillColor", "strokeColor"])
            }), e.each(i, function(t) {
               t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
            }), this.showTooltip(i)
         }), this.BarClass = i.Rectangle.extend({strokeWidth: this.options.barStrokeWidth, showStroke: this.options.barShowStroke, ctx: this.chart.ctx}), e.each(t.datasets, function(i) {
            var s = {label: i.label || null, fillColor: i.fillColor, strokeColor: i.strokeColor, bars: []};
            this.datasets.push(s), e.each(i.data, function(e, n) {
               s.bars.push(new this.BarClass({value: e, label: t.labels[n], datasetLabel: i.label, strokeColor: i.strokeColor, fillColor: i.fillColor, highlightFill: i.highlightFill || i.fillColor, highlightStroke: i.highlightStroke || i.strokeColor}))
            }, this)
         }, this), this.buildScale(t.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function(t, i, s) {
            e.extend(t, {width: this.scale.calculateBarWidth(this.datasets.length), x: this.scale.calculateBarX(this.datasets.length, s, i), y: this.scale.endPoint}), t.save()
         }, this), this.render()
      }, update: function() {
         this.scale.update(), e.each(this.activeElements, function(t) {
            t.restore(["fillColor", "strokeColor"])
         }), this.eachBars(function(t) {
            t.save()
         }), this.render()
      }, eachBars: function(t) {
         e.each(this.datasets, function(i, s) {
            e.each(i.bars, t, this, s)
         }, this)
      }, getBarsAtEvent: function(t) {
         for (var i, s = [], n = e.getRelativePosition(t), o = function(t) {
            s.push(t.bars[i])
         }, a = 0; a < this.datasets.length; a++)
            for (i = 0; i < this.datasets[a].bars.length; i++)
               if (this.datasets[a].bars[i].inRange(n.x, n.y))
                  return e.each(this.datasets, o), s;
         return s
      }, buildScale: function(t) {
         var i = this, s = function() {
            var t = [];
            return i.eachBars(function(i) {
               t.push(i.value)
            }), t
         }, n = {templateString: this.options.scaleLabel, height: this.chart.height, width: this.chart.width, ctx: this.chart.ctx, textColor: this.options.scaleFontColor, fontSize: this.options.scaleFontSize, fontStyle: this.options.scaleFontStyle, fontFamily: this.options.scaleFontFamily, valuesCount: t.length, beginAtZero: this.options.scaleBeginAtZero, integersOnly: this.options.scaleIntegersOnly, calculateYRange: function(t) {
               var i = e.calculateScaleRange(s(), t, this.fontSize, this.beginAtZero, this.integersOnly);
               e.extend(this, i)
            }, xLabels: t, font: e.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily), lineWidth: this.options.scaleLineWidth, lineColor: this.options.scaleLineColor, showHorizontalLines: this.options.scaleShowHorizontalLines, showVerticalLines: this.options.scaleShowVerticalLines, gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0, gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)", padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0, showLabels: this.options.scaleShowLabels, display: this.options.showScale};
         this.options.scaleOverride && e.extend(n, {calculateYRange: e.noop, steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth}), this.scale = new this.ScaleClass(n)
      }, addData: function(t, i) {
         e.each(t, function(t, e) {
            this.datasets[e].bars.push(new this.BarClass({value: t, label: i, x: this.scale.calculateBarX(this.datasets.length, e, this.scale.valuesCount + 1), y: this.scale.endPoint, width: this.scale.calculateBarWidth(this.datasets.length), base: this.scale.endPoint, strokeColor: this.datasets[e].strokeColor, fillColor: this.datasets[e].fillColor}))
         }, this), this.scale.addXLabel(i), this.update()
      }, removeData: function() {
         this.scale.removeXLabel(), e.each(this.datasets, function(t) {
            t.bars.shift()
         }, this), this.update()
      }, reflow: function() {
         e.extend(this.BarClass.prototype, {y: this.scale.endPoint, base: this.scale.endPoint});
         var t = e.extend({height: this.chart.height, width: this.chart.width});
         this.scale.update(t)
      }, draw: function(t) {
         var i = t || 1;
         this.clear();
         this.chart.ctx;
         this.scale.draw(i), e.each(this.datasets, function(t, s) {
            e.each(t.bars, function(t, e) {
               t.hasValue() && (t.base = this.scale.endPoint, t.transition({x: this.scale.calculateBarX(this.datasets.length, s, e), y: this.scale.calculateY(t.value), width: this.scale.calculateBarWidth(this.datasets.length)}, i).draw())
            }, this)
         }, this)
      }})
}.call(this), function() {
   "use strict";
   var t = this, i = t.Chart, e = i.helpers, s = {segmentShowStroke: !0, segmentStrokeColor: "#fff", segmentStrokeWidth: 2, percentageInnerCutout: 50, animationSteps: 100, animationEasing: "easeOutBounce", animateRotate: !0, animateScale: !1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'};
   i.Type.extend({name: "Doughnut", defaults: s, initialize: function(t) {
         this.segments = [], this.outerRadius = (e.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = i.Arc.extend({ctx: this.chart.ctx, x: this.chart.width / 2, y: this.chart.height / 2}), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
            var i = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
            e.each(this.segments, function(t) {
               t.restore(["fillColor"])
            }), e.each(i, function(t) {
               t.fillColor = t.highlightColor
            }), this.showTooltip(i)
         }), this.calculateTotal(t), e.each(t, function(t, i) {
            this.addData(t, i, !0)
         }, this), this.render()
      }, getSegmentsAtEvent: function(t) {
         var i = [], s = e.getRelativePosition(t);
         return e.each(this.segments, function(t) {
            t.inRange(s.x, s.y) && i.push(t)
         }, this), i
      }, addData: function(t, i, e) {
         var s = i || this.segments.length;
         this.segments.splice(s, 0, new this.SegmentArc({value: t.value, outerRadius: this.options.animateScale ? 0 : this.outerRadius, innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout, fillColor: t.color, highlightColor: t.highlight || t.color, showStroke: this.options.segmentShowStroke, strokeWidth: this.options.segmentStrokeWidth, strokeColor: this.options.segmentStrokeColor, startAngle: 1.5 * Math.PI, circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value), label: t.label})), e || (this.reflow(), this.update())
      }, calculateCircumference: function(t) {
         return 2 * Math.PI * (t / this.total)
      }, calculateTotal: function(t) {
         this.total = 0, e.each(t, function(t) {
            this.total += t.value
         }, this)
      }, update: function() {
         this.calculateTotal(this.segments), e.each(this.activeElements, function(t) {
            t.restore(["fillColor"])
         }), e.each(this.segments, function(t) {
            t.save()
         }), this.render()
      }, removeData: function(t) {
         var i = e.isNumber(t) ? t : this.segments.length - 1;
         this.segments.splice(i, 1), this.reflow(), this.update()
      }, reflow: function() {
         e.extend(this.SegmentArc.prototype, {x: this.chart.width / 2, y: this.chart.height / 2}), this.outerRadius = (e.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, e.each(this.segments, function(t) {
            t.update({outerRadius: this.outerRadius, innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout})
         }, this)
      }, draw: function(t) {
         var i = t ? t : 1;
         this.clear(), e.each(this.segments, function(t, e) {
            t.transition({circumference: this.calculateCircumference(t.value), outerRadius: this.outerRadius, innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout}, i), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === e && (t.startAngle = 1.5 * Math.PI), e < this.segments.length - 1 && (this.segments[e + 1].startAngle = t.endAngle)
         }, this)
      }}), i.types.Doughnut.extend({name: "Pie", defaults: e.merge(s, {percentageInnerCutout: 0})})
}.call(this), function() {
   "use strict";
   var t = this, i = t.Chart, e = i.helpers, s = {scaleShowGridLines: !0, scaleGridLineColor: "rgba(0,0,0,.05)", scaleGridLineWidth: 1, scaleShowHorizontalLines: !0, scaleShowVerticalLines: !0, bezierCurve: !0, bezierCurveTension: .4, pointDot: !0, pointDotRadius: 4, pointDotStrokeWidth: 1, pointHitDetectionRadius: 20, datasetStroke: !0, datasetStrokeWidth: 2, datasetFill: !0, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'};
   i.Type.extend({name: "Line", defaults: s, initialize: function(t) {
         this.PointClass = i.Point.extend({strokeWidth: this.options.pointDotStrokeWidth, radius: this.options.pointDotRadius, display: this.options.pointDot, hitDetectionRadius: this.options.pointHitDetectionRadius, ctx: this.chart.ctx, inRange: function(t) {
               return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
            }}), this.datasets = [], this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
            var i = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
            this.eachPoints(function(t) {
               t.restore(["fillColor", "strokeColor"])
            }), e.each(i, function(t) {
               t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
            }), this.showTooltip(i)
         }), e.each(t.datasets, function(i) {
            var s = {label: i.label || null, fillColor: i.fillColor, strokeColor: i.strokeColor, pointColor: i.pointColor, pointStrokeColor: i.pointStrokeColor, points: []};
            this.datasets.push(s), e.each(i.data, function(e, n) {
               s.points.push(new this.PointClass({value: e, label: t.labels[n], datasetLabel: i.label, strokeColor: i.pointStrokeColor, fillColor: i.pointColor, highlightFill: i.pointHighlightFill || i.pointColor, highlightStroke: i.pointHighlightStroke || i.pointStrokeColor}))
            }, this), this.buildScale(t.labels), this.eachPoints(function(t, i) {
               e.extend(t, {x: this.scale.calculateX(i), y: this.scale.endPoint}), t.save()
            }, this)
         }, this), this.render()
      }, update: function() {
         this.scale.update(), e.each(this.activeElements, function(t) {
            t.restore(["fillColor", "strokeColor"])
         }), this.eachPoints(function(t) {
            t.save()
         }), this.render()
      }, eachPoints: function(t) {
         e.each(this.datasets, function(i) {
            e.each(i.points, t, this)
         }, this)
      }, getPointsAtEvent: function(t) {
         var i = [], s = e.getRelativePosition(t);
         return e.each(this.datasets, function(t) {
            e.each(t.points, function(t) {
               t.inRange(s.x, s.y) && i.push(t)
            })
         }, this), i
      }, buildScale: function(t) {
         var s = this, n = function() {
            var t = [];
            return s.eachPoints(function(i) {
               t.push(i.value)
            }), t
         }, o = {templateString: this.options.scaleLabel, height: this.chart.height, width: this.chart.width, ctx: this.chart.ctx, textColor: this.options.scaleFontColor, fontSize: this.options.scaleFontSize, fontStyle: this.options.scaleFontStyle, fontFamily: this.options.scaleFontFamily, valuesCount: t.length, beginAtZero: this.options.scaleBeginAtZero, integersOnly: this.options.scaleIntegersOnly, calculateYRange: function(t) {
               var i = e.calculateScaleRange(n(), t, this.fontSize, this.beginAtZero, this.integersOnly);
               e.extend(this, i)
            }, xLabels: t, font: e.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily), lineWidth: this.options.scaleLineWidth, lineColor: this.options.scaleLineColor, showHorizontalLines: this.options.scaleShowHorizontalLines, showVerticalLines: this.options.scaleShowVerticalLines, gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0, gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)", padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth, showLabels: this.options.scaleShowLabels, display: this.options.showScale};
         this.options.scaleOverride && e.extend(o, {calculateYRange: e.noop, steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth}), this.scale = new i.Scale(o)
      }, addData: function(t, i) {
         e.each(t, function(t, e) {
            this.datasets[e].points.push(new this.PointClass({value: t, label: i, x: this.scale.calculateX(this.scale.valuesCount + 1), y: this.scale.endPoint, strokeColor: this.datasets[e].pointStrokeColor, fillColor: this.datasets[e].pointColor}))
         }, this), this.scale.addXLabel(i), this.update()
      }, removeData: function() {
         this.scale.removeXLabel(), e.each(this.datasets, function(t) {
            t.points.shift()
         }, this), this.update()
      }, reflow: function() {
         var t = e.extend({height: this.chart.height, width: this.chart.width});
         this.scale.update(t)
      }, draw: function(t) {
         var i = t || 1;
         this.clear();
         var s = this.chart.ctx, n = function(t) {
            return null !== t.value
         }, o = function(t, i, s) {
            return e.findNextWhere(i, n, s) || t
         }, a = function(t, i, s) {
            return e.findPreviousWhere(i, n, s) || t
         };
         this.scale.draw(i), e.each(this.datasets, function(t) {
            var h = e.where(t.points, n);
            e.each(t.points, function(t, e) {
               t.hasValue() && t.transition({y: this.scale.calculateY(t.value), x: this.scale.calculateX(e)}, i)
            }, this), this.options.bezierCurve && e.each(h, function(t, i) {
               var s = i > 0 && i < h.length - 1 ? this.options.bezierCurveTension : 0;
               t.controlPoints = e.splineCurve(a(t, h, i), t, o(t, h, i), s), t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint), t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint)
            }, this), s.lineWidth = this.options.datasetStrokeWidth, s.strokeStyle = t.strokeColor, s.beginPath(), e.each(h, function(t, i) {
               if (0 === i)
                  s.moveTo(t.x, t.y);
               else if (this.options.bezierCurve) {
                  var e = a(t, h, i);
                  s.bezierCurveTo(e.controlPoints.outer.x, e.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y)
               } else
                  s.lineTo(t.x, t.y)
            }, this), s.stroke(), this.options.datasetFill && h.length > 0 && (s.lineTo(h[h.length - 1].x, this.scale.endPoint), s.lineTo(h[0].x, this.scale.endPoint), s.fillStyle = t.fillColor, s.closePath(), s.fill()), e.each(h, function(t) {
               t.draw()
            })
         }, this)
      }})
}.call(this), function() {
   "use strict";
   var t = this, i = t.Chart, e = i.helpers, s = {scaleShowLabelBackdrop: !0, scaleBackdropColor: "rgba(255,255,255,0.75)", scaleBeginAtZero: !0, scaleBackdropPaddingY: 2, scaleBackdropPaddingX: 2, scaleShowLine: !0, segmentShowStroke: !0, segmentStrokeColor: "#fff", segmentStrokeWidth: 2, animationSteps: 100, animationEasing: "easeOutBounce", animateRotate: !0, animateScale: !1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'};
   i.Type.extend({name: "PolarArea", defaults: s, initialize: function(t) {
         this.segments = [], this.SegmentArc = i.Arc.extend({showStroke: this.options.segmentShowStroke, strokeWidth: this.options.segmentStrokeWidth, strokeColor: this.options.segmentStrokeColor, ctx: this.chart.ctx, innerRadius: 0, x: this.chart.width / 2, y: this.chart.height / 2}), this.scale = new i.RadialScale({display: this.options.showScale, fontStyle: this.options.scaleFontStyle, fontSize: this.options.scaleFontSize, fontFamily: this.options.scaleFontFamily, fontColor: this.options.scaleFontColor, showLabels: this.options.scaleShowLabels, showLabelBackdrop: this.options.scaleShowLabelBackdrop, backdropColor: this.options.scaleBackdropColor, backdropPaddingY: this.options.scaleBackdropPaddingY, backdropPaddingX: this.options.scaleBackdropPaddingX, lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0, lineColor: this.options.scaleLineColor, lineArc: !0, width: this.chart.width, height: this.chart.height, xCenter: this.chart.width / 2, yCenter: this.chart.height / 2, ctx: this.chart.ctx, templateString: this.options.scaleLabel, valuesCount: t.length}), this.updateScaleRange(t), this.scale.update(), e.each(t, function(t, i) {
            this.addData(t, i, !0)
         }, this), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
            var i = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
            e.each(this.segments, function(t) {
               t.restore(["fillColor"])
            }), e.each(i, function(t) {
               t.fillColor = t.highlightColor
            }), this.showTooltip(i)
         }), this.render()
      }, getSegmentsAtEvent: function(t) {
         var i = [], s = e.getRelativePosition(t);
         return e.each(this.segments, function(t) {
            t.inRange(s.x, s.y) && i.push(t)
         }, this), i
      }, addData: function(t, i, e) {
         var s = i || this.segments.length;
         this.segments.splice(s, 0, new this.SegmentArc({fillColor: t.color, highlightColor: t.highlight || t.color, label: t.label, value: t.value, outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value), circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(), startAngle: 1.5 * Math.PI})), e || (this.reflow(), this.update())
      }, removeData: function(t) {
         var i = e.isNumber(t) ? t : this.segments.length - 1;
         this.segments.splice(i, 1), this.reflow(), this.update()
      }, calculateTotal: function(t) {
         this.total = 0, e.each(t, function(t) {
            this.total += t.value
         }, this), this.scale.valuesCount = this.segments.length
      }, updateScaleRange: function(t) {
         var i = [];
         e.each(t, function(t) {
            i.push(t.value)
         });
         var s = this.options.scaleOverride ? {steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth} : e.calculateScaleRange(i, e.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
         e.extend(this.scale, s, {size: e.min([this.chart.width, this.chart.height]), xCenter: this.chart.width / 2, yCenter: this.chart.height / 2})
      }, update: function() {
         this.calculateTotal(this.segments), e.each(this.segments, function(t) {
            t.save()
         }), this.render()
      }, reflow: function() {
         e.extend(this.SegmentArc.prototype, {x: this.chart.width / 2, y: this.chart.height / 2}), this.updateScaleRange(this.segments), this.scale.update(), e.extend(this.scale, {xCenter: this.chart.width / 2, yCenter: this.chart.height / 2}), e.each(this.segments, function(t) {
            t.update({outerRadius: this.scale.calculateCenterOffset(t.value)})
         }, this)
      }, draw: function(t) {
         var i = t || 1;
         this.clear(), e.each(this.segments, function(t, e) {
            t.transition({circumference: this.scale.getCircumference(), outerRadius: this.scale.calculateCenterOffset(t.value)}, i), t.endAngle = t.startAngle + t.circumference, 0 === e && (t.startAngle = 1.5 * Math.PI), e < this.segments.length - 1 && (this.segments[e + 1].startAngle = t.endAngle), t.draw()
         }, this), this.scale.draw()
      }})
}.call(this), function() {
   "use strict";
   var t = this, i = t.Chart, e = i.helpers;
   i.Type.extend({name: "Radar", defaults: {scaleShowLine: !0, angleShowLineOut: !0, scaleShowLabels: !1, scaleBeginAtZero: !0, angleLineColor: "rgba(0,0,0,.1)", angleLineWidth: 1, pointLabelFontFamily: "'Arial'", pointLabelFontStyle: "normal", pointLabelFontSize: 10, pointLabelFontColor: "#666", pointDot: !0, pointDotRadius: 3, pointDotStrokeWidth: 1, pointHitDetectionRadius: 20, datasetStroke: !0, datasetStrokeWidth: 2, datasetFill: !0, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'}, initialize: function(t) {
         this.PointClass = i.Point.extend({strokeWidth: this.options.pointDotStrokeWidth, radius: this.options.pointDotRadius, display: this.options.pointDot, hitDetectionRadius: this.options.pointHitDetectionRadius, ctx: this.chart.ctx}), this.datasets = [], this.buildScale(t), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
            var i = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
            this.eachPoints(function(t) {
               t.restore(["fillColor", "strokeColor"])
            }), e.each(i, function(t) {
               t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
            }), this.showTooltip(i)
         }), e.each(t.datasets, function(i) {
            var s = {label: i.label || null, fillColor: i.fillColor, strokeColor: i.strokeColor, pointColor: i.pointColor, pointStrokeColor: i.pointStrokeColor, points: []};
            this.datasets.push(s), e.each(i.data, function(e, n) {
               var o;
               this.scale.animation || (o = this.scale.getPointPosition(n, this.scale.calculateCenterOffset(e))), s.points.push(new this.PointClass({value: e, label: t.labels[n], datasetLabel: i.label, x: this.options.animation ? this.scale.xCenter : o.x, y: this.options.animation ? this.scale.yCenter : o.y, strokeColor: i.pointStrokeColor, fillColor: i.pointColor, highlightFill: i.pointHighlightFill || i.pointColor, highlightStroke: i.pointHighlightStroke || i.pointStrokeColor}))
            }, this)
         }, this), this.render()
      }, eachPoints: function(t) {
         e.each(this.datasets, function(i) {
            e.each(i.points, t, this)
         }, this)
      }, getPointsAtEvent: function(t) {
         var i = e.getRelativePosition(t), s = e.getAngleFromPoint({x: this.scale.xCenter, y: this.scale.yCenter}, i), n = 2 * Math.PI / this.scale.valuesCount, o = Math.round((s.angle - 1.5 * Math.PI) / n), a = [];
         return(o >= this.scale.valuesCount || 0 > o) && (o = 0), s.distance <= this.scale.drawingArea && e.each(this.datasets, function(t) {
            a.push(t.points[o])
         }), a
      }, buildScale: function(t) {
         this.scale = new i.RadialScale({display: this.options.showScale, fontStyle: this.options.scaleFontStyle, fontSize: this.options.scaleFontSize, fontFamily: this.options.scaleFontFamily, fontColor: this.options.scaleFontColor, showLabels: this.options.scaleShowLabels, showLabelBackdrop: this.options.scaleShowLabelBackdrop, backdropColor: this.options.scaleBackdropColor, backdropPaddingY: this.options.scaleBackdropPaddingY, backdropPaddingX: this.options.scaleBackdropPaddingX, lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0, lineColor: this.options.scaleLineColor, angleLineColor: this.options.angleLineColor, angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0, pointLabelFontColor: this.options.pointLabelFontColor, pointLabelFontSize: this.options.pointLabelFontSize, pointLabelFontFamily: this.options.pointLabelFontFamily, pointLabelFontStyle: this.options.pointLabelFontStyle, height: this.chart.height, width: this.chart.width, xCenter: this.chart.width / 2, yCenter: this.chart.height / 2, ctx: this.chart.ctx, templateString: this.options.scaleLabel, labels: t.labels, valuesCount: t.datasets[0].data.length}), this.scale.setScaleSize(), this.updateScaleRange(t.datasets), this.scale.buildYLabels()
      }, updateScaleRange: function(t) {
         var i = function() {
            var i = [];
            return e.each(t, function(t) {
               t.data ? i = i.concat(t.data) : e.each(t.points, function(t) {
                  i.push(t.value)
               })
            }), i
         }(), s = this.options.scaleOverride ? {steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth} : e.calculateScaleRange(i, e.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
         e.extend(this.scale, s)
      }, addData: function(t, i) {
         this.scale.valuesCount++, e.each(t, function(t, e) {
            var s = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));
            this.datasets[e].points.push(new this.PointClass({value: t, label: i, x: s.x, y: s.y, strokeColor: this.datasets[e].pointStrokeColor, fillColor: this.datasets[e].pointColor}))
         }, this), this.scale.labels.push(i), this.reflow(), this.update()
      }, removeData: function() {
         this.scale.valuesCount--, this.scale.labels.shift(), e.each(this.datasets, function(t) {
            t.points.shift()
         }, this), this.reflow(), this.update()
      }, update: function() {
         this.eachPoints(function(t) {
            t.save()
         }), this.reflow(), this.render()
      }, reflow: function() {
         e.extend(this.scale, {width: this.chart.width, height: this.chart.height, size: e.min([this.chart.width, this.chart.height]), xCenter: this.chart.width / 2, yCenter: this.chart.height / 2}), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
      }, draw: function(t) {
         var i = t || 1, s = this.chart.ctx;
         this.clear(), this.scale.draw(), e.each(this.datasets, function(t) {
            e.each(t.points, function(t, e) {
               t.hasValue() && t.transition(this.scale.getPointPosition(e, this.scale.calculateCenterOffset(t.value)), i)
            }, this), s.lineWidth = this.options.datasetStrokeWidth, s.strokeStyle = t.strokeColor, s.beginPath(), e.each(t.points, function(t, i) {
               0 === i ? s.moveTo(t.x, t.y) : s.lineTo(t.x, t.y)
            }, this), s.closePath(), s.stroke(), s.fillStyle = t.fillColor, s.fill(), e.each(t.points, function(t) {
               t.hasValue() && t.draw()
            })
         }, this)
      }})
}.call(this);
window.Modernizr = function(e, t, n) {
   function r(e) {
      p.cssText = e
   }
   function i(e, t) {
      return r(prefixes.join(e + ";") + (t || ""))
   }
   function s(e, t) {
      return typeof e === t
   }
   function o(e, t) {
      return!!~("" + e).indexOf(t)
   }
   function u(e, t, r) {
      for (var i in e) {
         var o = t[e[i]];
         if (o !== n)
            return r === !1 ? e[i] : s(o, "function") ? o.bind(r || t) : o
      }
      return!1
   }
   var a = "2.6.2", f = {}, l = t.documentElement, c = "modernizr", h = t.createElement(c), p = h.style, d, v = {}.toString, m = {}, g = {}, y = {}, b = [], w = b.slice, E, S = {}.hasOwnProperty, x;
   !s(S, "undefined") && !s(S.call, "undefined") ? x = function(e, t) {
      return S.call(e, t)
   } : x = function(e, t) {
      return t in e && s(e.constructor.prototype[t], "undefined")
   }, Function.prototype.bind || (Function.prototype.bind = function(e) {
      var t = this;
      if (typeof t != "function")
         throw new TypeError;
      var n = w.call(arguments, 1), r = function() {
         if (this instanceof r) {
            var i = function() {
            };
            i.prototype = t.prototype;
            var s = new i, o = t.apply(s, n.concat(w.call(arguments)));
            return Object(o) === o ? o : s
         }
         return t.apply(e, n.concat(w.call(arguments)))
      };
      return r
   }), m.canvas = function() {
      var e = t.createElement("canvas");
      return!!e.getContext && !!e.getContext("2d")
   };
   for (var T in m)
      x(m, T) && (E = T.toLowerCase(), f[E] = m[T](), b.push((f[E] ? "" : "no-") + E));
   return f.addTest = function(e, t) {
      if (typeof e == "object")
         for (var r in e)
            x(e, r) && f.addTest(r, e[r]);
      else {
         e = e.toLowerCase();
         if (f[e] !== n)
            return f;
         t = typeof t == "function" ? t() : t, typeof enableClasses != "undefined" && enableClasses && (l.className += " " + (t ? "" : "no-") + e), f[e] = t
      }
      return f
   }, r(""), h = d = null, function(e, t) {
      function n(e, t) {
         var n = e.createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement;
         return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
      }
      function r() {
         var e = g.elements;
         return typeof e == "string" ? e.split(" ") : e
      }
      function i(e) {
         var t = v[e[p]];
         return t || (t = {}, d++, e[p] = d, v[d] = t), t
      }
      function s(e, n, r) {
         n || (n = t);
         if (m)
            return n.createElement(e);
         r || (r = i(n));
         var s;
         return r.cache[e] ? s = r.cache[e].cloneNode() : c.test(e) ? s = (r.cache[e] = r.createElem(e)).cloneNode() : s = r.createElem(e), s.canHaveChildren && !l.test(e) ? r.frag.appendChild(s) : s
      }
      function o(e, n) {
         e || (e = t);
         if (m)
            return e.createDocumentFragment();
         n = n || i(e);
         var s = n.frag.cloneNode(), o = 0, u = r(), a = u.length;
         for (; o < a; o++)
            s.createElement(u[o]);
         return s
      }
      function u(e, t) {
         t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
            return g.shivMethods ? s(n, e, t) : t.createElem(n)
         }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/\w+/g, function(e) {
            return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
         }) + ");return n}")(g, t.frag)
      }
      function a(e) {
         e || (e = t);
         var r = i(e);
         return g.shivCSS && !h && !r.hasCSS && (r.hasCSS = !!n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), m || u(e, r), e
      }
      var f = e.html5 || {}, l = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, c = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, h, p = "_html5shiv", d = 0, v = {}, m;
      (function() {
         try {
            var e = t.createElement("a");
            e.innerHTML = "<xyz></xyz>", h = "hidden"in e, m = e.childNodes.length == 1 || function() {
               t.createElement("a");
               var e = t.createDocumentFragment();
               return typeof e.cloneNode == "undefined" || typeof e.createDocumentFragment == "undefined" || typeof e.createElement == "undefined"
            }()
         } catch (n) {
            h = !0, m = !0
         }
      })();
      var g = {elements: f.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video", shivCSS: f.shivCSS !== !1, supportsUnknownElements: m, shivMethods: f.shivMethods !== !1, type: "default", shivDocument: a, createElement: s, createDocumentFragment: o};
      e.html5 = g, a(t)
   }(this, t), f._version = a, f
}(this, this.document), function(e, t, n) {
   function r(e) {
      return"[object Function]" == d.call(e)
   }
   function i(e) {
      return"string" == typeof e
   }
   function s() {
   }
   function o(e) {
      return!e || "loaded" == e || "complete" == e || "uninitialized" == e
   }
   function u() {
      var e = v.shift();
      m = 1, e ? e.t ? h(function() {
         ("c" == e.t ? k.injectCss : k.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
      }, 0) : (e(), u()) : m = 0
   }
   function a(e, n, r, i, s, a, f) {
      function l(t) {
         if (!d && o(c.readyState) && (w.r = d = 1, !m && u(), c.onload = c.onreadystatechange = null, t)) {
            "img" != e && h(function() {
               b.removeChild(c)
            }, 50);
            for (var r in T[n])
               T[n].hasOwnProperty(r) && T[n][r].onload()
         }
      }
      var f = f || k.errorTimeout, c = t.createElement(e), d = 0, g = 0, w = {t: r, s: n, e: s, a: a, x: f};
      1 === T[n] && (g = 1, T[n] = []), "object" == e ? c.data = n : (c.src = n, c.type = e), c.width = c.height = "0", c.onerror = c.onload = c.onreadystatechange = function() {
         l.call(this, g)
      }, v.splice(i, 0, w), "img" != e && (g || 2 === T[n] ? (b.insertBefore(c, y ? null : p), h(l, f)) : T[n].push(c))
   }
   function f(e, t, n, r, s) {
      return m = 0, t = t || "j", i(e) ? a("c" == t ? E : w, e, t, this.i++, n, r, s) : (v.splice(this.i++, 0, e), 1 == v.length && u()), this
   }
   function l() {
      var e = k;
      return e.loader = {load: f, i: 0}, e
   }
   var c = t.documentElement, h = e.setTimeout, p = t.getElementsByTagName("script")[0], d = {}.toString, v = [], m = 0, g = "MozAppearance"in c.style, y = g && !!t.createRange().compareNode, b = y ? c : p.parentNode, c = e.opera && "[object Opera]" == d.call(e.opera), c = !!t.attachEvent && !c, w = g ? "object" : c ? "script" : "img", E = c ? "script" : w, S = Array.isArray || function(e) {
      return"[object Array]" == d.call(e)
   }, x = [], T = {}, N = {timeout: function(e, t) {
         return t.length && (e.timeout = t[0]), e
      }}, C, k;
   k = function(e) {
      function t(e) {
         var e = e.split("!"), t = x.length, n = e.pop(), r = e.length, n = {url: n, origUrl: n, prefixes: e}, i, s, o;
         for (s = 0; s < r; s++)
            o = e[s].split("="), (i = N[o.shift()]) && (n = i(n, o));
         for (s = 0; s < t; s++)
            n = x[s](n);
         return n
      }
      function o(e, i, s, o, u) {
         var a = t(e), f = a.autoCallback;
         a.url.split(".").pop().split("?").shift(), a.bypass || (i && (i = r(i) ? i : i[e] || i[o] || i[e.split("/").pop().split("?")[0]]), a.instead ? a.instead(e, i, s, o, u) : (T[a.url] ? a.noexec = !0 : T[a.url] = 1, s.load(a.url, a.forceCSS || !a.forceJS && "css" == a.url.split(".").pop().split("?").shift() ? "c" : n, a.noexec, a.attrs, a.timeout), (r(i) || r(f)) && s.load(function() {
            l(), i && i(a.origUrl, u, o), f && f(a.origUrl, u, o), T[a.url] = 2
         })))
      }
      function u(e, t) {
         function n(e, n) {
            if (e) {
               if (i(e))
                  n || (f = function() {
                     var e = [].slice.call(arguments);
                     l.apply(this, e), c()
                  }), o(e, f, t, 0, u);
               else if (Object(e) === e)
                  for (p in h = function() {
                     var t = 0, n;
                     for (n in e)
                        e.hasOwnProperty(n) && t++;
                     return t
                  }(), e)
                     e.hasOwnProperty(p) && (!n && !--h && (r(f) ? f = function() {
                        var e = [].slice.call(arguments);
                        l.apply(this, e), c()
                     } : f[p] = function(e) {
                        return function() {
                           var t = [].slice.call(arguments);
                           e && e.apply(this, t), c()
                        }
                     }(l[p])), o(e[p], f, t, p, u))
            } else
               !n && c()
         }
         var u = !!e.test, a = e.load || e.both, f = e.callback || s, l = f, c = e.complete || s, h, p;
         n(u ? e.yep : e.nope, !!a), a && n(a)
      }
      var a, f, c = this.yepnope.loader;
      if (i(e))
         o(e, 0, c, 0);
      else if (S(e))
         for (a = 0; a < e.length; a++)
            f = e[a], i(f) ? o(f, 0, c, 0) : S(f) ? k(f) : Object(f) === f && u(f, c);
      else
         Object(e) === e && u(e, c)
   }, k.addPrefix = function(e, t) {
      N[e] = t
   }, k.addFilter = function(e) {
      x.push(e)
   }, k.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", C = function() {
      t.removeEventListener("DOMContentLoaded", C, 0), t.readyState = "complete"
   }, 0)), e.yepnope = l(), e.yepnope.executeStack = u, e.yepnope.injectJs = function(e, n, r, i, a, f) {
      var l = t.createElement("script"), c, d, i = i || k.errorTimeout;
      l.src = e;
      for (d in r)
         l.setAttribute(d, r[d]);
      n = f ? u : n || s, l.onreadystatechange = l.onload = function() {
         !c && o(l.readyState) && (c = 1, n(), l.onload = l.onreadystatechange = null)
      }, h(function() {
         c || (c = 1, n(1))
      }, i), a ? l.onload() : p.parentNode.insertBefore(l, p)
   }, e.yepnope.injectCss = function(e, n, r, i, o, a) {
      var i = t.createElement("link"), f, n = a ? u : n || s;
      i.href = e, i.rel = "stylesheet", i.type = "text/css";
      for (f in r)
         i.setAttribute(f, r[f]);
      o || (p.parentNode.insertBefore(i, p), h(n, 0))
   }
}(this, document), Modernizr.load = function() {
   yepnope.apply(window, [].slice.call(arguments, 0))
};




/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: https://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function(e) {
   "use strict";
   "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function(e) {
   "use strict";
   function t(t) {
      var r = t.data;
      t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r))
   }
   function r(t) {
      var r = t.target, a = e(r);
      if (!a.is("[type=submit],[type=image]")) {
         var n = a.closest("[type=submit]");
         if (0 === n.length)
            return;
         r = n[0]
      }
      var i = this;
      if (i.clk = r, "image" == r.type)
         if (void 0 !== t.offsetX)
            i.clk_x = t.offsetX, i.clk_y = t.offsetY;
         else if ("function" == typeof e.fn.offset) {
            var o = a.offset();
            i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top
         } else
            i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
      setTimeout(function() {
         i.clk = i.clk_x = i.clk_y = null
      }, 100)
   }
   function a() {
      if (e.fn.ajaxSubmit.debug) {
         var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
         window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
      }
   }
   var n = {};
   n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
   var i = !!e.fn.prop;
   e.fn.attr2 = function() {
      if (!i)
         return this.attr.apply(this, arguments);
      var e = this.prop.apply(this, arguments);
      return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
   }, e.fn.ajaxSubmit = function(t) {
      function r(r) {
         var a, n, i = e.param(r, t.traditional).split("&"), o = i.length, s = [];
         for (a = 0; o > a; a++)
            i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
         return s
      }
      function o(a) {
         for (var n = new FormData, i = 0; i < a.length; i++)
            n.append(a[i].name, a[i].value);
         if (t.extraData) {
            var o = r(t.extraData);
            for (i = 0; i < o.length; i++)
               o[i] && n.append(o[i][0], o[i][1])
         }
         t.data = null;
         var s = e.extend(!0, {}, e.ajaxSettings, t, {contentType: !1, processData: !1, cache: !1, type: u || "POST"});
         t.uploadProgress && (s.xhr = function() {
            var r = e.ajaxSettings.xhr();
            return r.upload && r.upload.addEventListener("progress", function(e) {
               var r = 0, a = e.loaded || e.position, n = e.total;
               e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r)
            }, !1), r
         }), s.data = null;
         var c = s.beforeSend;
         return s.beforeSend = function(e, r) {
            r.data = t.formData ? t.formData : n, c && c.call(this, e, r)
         }, e.ajax(s)
      }
      function s(r) {
         function n(e) {
            var t = null;
            try {
               e.contentWindow && (t = e.contentWindow.document)
            } catch (r) {
               a("cannot get iframe.contentWindow document: " + r)
            }
            if (t)
               return t;
            try {
               t = e.contentDocument ? e.contentDocument : e.document
            } catch (r) {
               a("cannot get iframe.contentDocument: " + r), t = e.document
            }
            return t
         }
         function o() {
            function t() {
               try {
                  var e = n(g).readyState;
                  a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
               } catch (r) {
                  a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0
               }
            }
            var r = f.attr2("target"), i = f.attr2("action"), o = "multipart/form-data", c = f.attr("enctype") || f.attr("encoding") || o;
            w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({encoding: "multipart/form-data", enctype: "multipart/form-data"}), m.timeout && (j = setTimeout(function() {
               T = !0, s(D)
            }, m.timeout));
            var l = [];
            try {
               if (m.extraData)
                  for (var d in m.extraData)
                     m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);
               m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);
               try {
                  w.submit()
               } catch (h) {
                  var x = document.createElement("form").submit;
                  x.apply(w)
               }
            } finally {
               w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove()
            }
         }
         function s(t) {
            if (!x.aborted && !F) {
               if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x)
                  return x.abort("timeout"), void S.reject(x, "timeout");
               if (t == k && x)
                  return x.abort("server abort"), void S.reject(x, "error", "server abort");
               if (M && M.location.href != m.iframeSrc || T) {
                  g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                  var r, i = "success";
                  try {
                     if (T)
                        throw"timeout";
                     var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                     if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O)
                        return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
                     var u = M.body ? M.body : M.documentElement;
                     x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function(e) {
                        var t = {"content-type": m.dataType};
                        return t[e.toLowerCase()]
                     }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
                     var c = (m.dataType || "").toLowerCase(), l = /(json|script|text)/.test(c);
                     if (l || m.textarea) {
                        var f = M.getElementsByTagName("textarea")[0];
                        if (f)
                           x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText;
                        else if (l) {
                           var p = M.getElementsByTagName("pre")[0], h = M.getElementsByTagName("body")[0];
                           p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                        }
                     } else
                        "xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
                     try {
                        E = _(x, c, m)
                     } catch (y) {
                        i = "parsererror", x.error = r = y || i
                     }
                  } catch (y) {
                     a("error caught: ", y), i = "error", x.error = r = y || i
                  }
                  x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function() {
                     m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null
                  }, 100)
               }
            }
         }
         var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0], S = e.Deferred();
         if (S.abort = function(e) {
            x.abort(e)
         }, r)
            for (l = 0; l < h.length; l++)
               c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled");
         if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({position: "absolute", top: "-1000px", left: "-1000px"})), g = v[0], x = {aborted: 0, responseText: null, responseXML: null, status: 0, statusText: "n/a", getAllResponseHeaders: function() {
            }, getResponseHeader: function() {
            }, setRequestHeader: function() {
            }, abort: function(t) {
               var r = "timeout" === t ? "timeout" : "aborted";
               a("aborting upload... " + r), this.aborted = 1;
               try {
                  g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
               } catch (n) {
               }
               v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r)
            }}, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1)
            return m.global && e.active--, S.reject(), S;
         if (x.aborted)
            return S.reject(), S;
         y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y)));
         var D = 1, k = 2, A = e("meta[name=csrf-token]").attr("content"), L = e("meta[name=csrf-param]").attr("content");
         L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10);
         var E, M, F, O = 50, X = e.parseXML || function(e, t) {
            return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
         }, C = e.parseJSON || function(e) {
            return window.eval("(" + e + ")")
         }, _ = function(t, r, a) {
            var n = t.getResponseHeader("content-type") || "", i = "xml" === r || !r && n.indexOf("xml") >= 0, o = i ? t.responseXML : t.responseText;
            return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o
         };
         return S
      }
      if (!this.length)
         return a("ajaxSubmit: skipping submit process - no element selected"), this;
      var u, c, l, f = this;
      "function" == typeof t ? t = {success: t} : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {url: l, success: e.ajaxSettings.success, type: u || e.ajaxSettings.type, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"}, t);
      var m = {};
      if (this.trigger("form-pre-serialize", [this, t, m]), m.veto)
         return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
      if (t.beforeSerialize && t.beforeSerialize(this, t) === !1)
         return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
      var d = t.traditional;
      void 0 === d && (d = e.ajaxSettings.traditional);
      var p, h = [], v = this.formToArray(t.semantic, h);
      if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1)
         return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
      if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto)
         return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
      var g = e.param(v, d);
      p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
      var x = [];
      if (t.resetForm && x.push(function() {
         f.resetForm()
      }), t.clearForm && x.push(function() {
         f.clearForm(t.includeHidden)
      }), !t.dataType && t.target) {
         var y = t.success || function() {
         };
         x.push(function(r) {
            var a = t.replaceTarget ? "replaceWith" : "html";
            e(t.target)[a](r).each(y, arguments)
         })
      } else
         t.success && x.push(t.success);
      if (t.success = function(e, r, a) {
         for (var n = t.context || this, i = 0, o = x.length; o > i; i++)
            x[i].apply(n, [e, r, a || f, f])
      }, t.error) {
         var b = t.error;
         t.error = function(e, r, a) {
            var n = t.context || this;
            b.apply(n, [e, r, a, f])
         }
      }
      if (t.complete) {
         var T = t.complete;
         t.complete = function(e, r) {
            var a = t.context || this;
            T.apply(a, [e, r, f])
         }
      }
      var j = e("input[type=file]:enabled", this).filter(function() {
         return"" !== e(this).val()
      }), w = j.length > 0, S = "multipart/form-data", D = f.attr("enctype") == S || f.attr("encoding") == S, k = n.fileapi && n.formdata;
      a("fileAPI :" + k);
      var A, L = (w || D) && !k;
      t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() {
         A = s(v)
      }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);
      for (var E = 0; E < h.length; E++)
         h[E] = null;
      return this.trigger("form-submit-notify", [this, t]), this
   }, e.fn.ajaxForm = function(n) {
      if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
         var i = {s: this.selector, c: this.context};
         return!e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function() {
            e(i.s, i.c).ajaxForm(n)
         }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
      }
      return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r)
   }, e.fn.ajaxFormUnbind = function() {
      return this.unbind("submit.form-plugin click.form-plugin")
   }, e.fn.formToArray = function(t, r) {
      var a = [];
      if (0 === this.length)
         return a;
      var i, o = this[0], s = this.attr("id"), u = t ? o.getElementsByTagName("*") : o.elements;
      if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length)
         return a;
      var c, l, f, m, d, p, h;
      for (c = 0, p = u.length; p > c; c++)
         if (d = u[c], f = d.name, f && !d.disabled)
            if (t && o.clk && "image" == d.type)
               o.clk == d && (a.push({name: f, value: e(d).val(), type: d.type}), a.push({name: f + ".x", value: o.clk_x}, {name: f + ".y", value: o.clk_y}));
            else if (m = e.fieldValue(d, !0), m && m.constructor == Array)
               for (r && r.push(d), l = 0, h = m.length; h > l; l++)
                  a.push({name: f, value: m[l]});
            else if (n.fileapi && "file" == d.type) {
               r && r.push(d);
               var v = d.files;
               if (v.length)
                  for (l = 0; l < v.length; l++)
                     a.push({name: f, value: v[l], type: d.type});
               else
                  a.push({name: f, value: "", type: d.type})
            } else
               null !== m && "undefined" != typeof m && (r && r.push(d), a.push({name: f, value: m, type: d.type, required: d.required}));
      if (!t && o.clk) {
         var g = e(o.clk), x = g[0];
         f = x.name, f && !x.disabled && "image" == x.type && (a.push({name: f, value: g.val()}), a.push({name: f + ".x", value: o.clk_x}, {name: f + ".y", value: o.clk_y}))
      }
      return a
   }, e.fn.formSerialize = function(t) {
      return e.param(this.formToArray(t))
   }, e.fn.fieldSerialize = function(t) {
      var r = [];
      return this.each(function() {
         var a = this.name;
         if (a) {
            var n = e.fieldValue(this, t);
            if (n && n.constructor == Array)
               for (var i = 0, o = n.length; o > i; i++)
                  r.push({name: a, value: n[i]});
            else
               null !== n && "undefined" != typeof n && r.push({name: this.name, value: n})
         }
      }), e.param(r)
   }, e.fn.fieldValue = function(t) {
      for (var r = [], a = 0, n = this.length; n > a; a++) {
         var i = this[a], o = e.fieldValue(i, t);
         null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
      }
      return r
   }, e.fieldValue = function(t, r) {
      var a = t.name, n = t.type, i = t.tagName.toLowerCase();
      if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex))
         return null;
      if ("select" == i) {
         var o = t.selectedIndex;
         if (0 > o)
            return null;
         for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
            var m = u[f];
            if (m.selected) {
               var d = m.value;
               if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c)
                  return d;
               s.push(d)
            }
         }
         return s
      }
      return e(t).val()
   }, e.fn.clearForm = function(t) {
      return this.each(function() {
         e("input,select,textarea", this).clearFields(t)
      })
   }, e.fn.clearFields = e.fn.clearInputs = function(t) {
      var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
      return this.each(function() {
         var a = this.type, n = this.tagName.toLowerCase();
         r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
      })
   }, e.fn.resetForm = function() {
      return this.each(function() {
         ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
      })
   }, e.fn.enable = function(e) {
      return void 0 === e && (e = !0), this.each(function() {
         this.disabled = !e
      })
   }, e.fn.selected = function(t) {
      return void 0 === t && (t = !0), this.each(function() {
         var r = this.type;
         if ("checkbox" == r || "radio" == r)
            this.checked = t;
         else if ("option" == this.tagName.toLowerCase()) {
            var a = e(this).parent("select");
            t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t
         }
      })
   }, e.fn.ajaxSubmit.debug = !1
});




/*! Magnific Popup - v1.0.0 - 2017-01-03
 * https://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2017 Dmitry Semenov; */
!function(a) {
   "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
   var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function() {
   }, u = !!window.jQuery, v = a(window), w = function(a, c) {
      b.ev.on(o + a + p, c)
   }, x = function(b, c, d, e) {
      var f = document.createElement("div");
      return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
   }, y = function(c, d) {
      b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
   }, z = function(c) {
      return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
   }, A = function() {
      a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
   }, B = function() {
      var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition)
         return!0;
      for (; b.length; )
         if (b.pop() + "Transition"in a)
            return!0;
      return!1
   };
   t.prototype = {constructor: t, init: function() {
         var c = navigator.appVersion;
         b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !== c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
      }, open: function(c) {
         var e;
         if (c.isObj === !1) {
            b.items = c.items.toArray(), b.index = 0;
            var g, h = c.items;
            for (e = 0; e < h.length; e++)
               if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                  b.index = e;
                  break
               }
         } else
            b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
         if (b.isOpen)
            return void b.updateItemHTML();
         b.types = [], f = "", b.ev = c.mainEl && c.mainEl.length ? c.mainEl.eq(0) : d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
            b.close()
         }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
            b._checkIfClose(a.target) && b.close()
         }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
         var i = a.magnificPopup.modules;
         for (e = 0; e < i.length; e++) {
            var j = i[e];
            j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
         }
         y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
            c.close_replaceWith = z(d.type)
         }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.wrap.css(b.fixedContentPos ? {overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY} : {top: v.scrollTop(), position: "absolute"}), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({height: d.height(), position: "absolute"}), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
            27 === a.keyCode && b.close()
         }), v.on("resize" + p, function() {
            b.updateSize()
         }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
         var k = b.wH = v.height(), n = {};
         if (b.fixedContentPos && b._hasScrollBar(k)) {
            var o = b._getScrollbarSize();
            o && (n.marginRight = o)
         }
         b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
         var r = b.st.mainClass;
         return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
            b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
         }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
      }, close: function() {
         b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
            b._close()
         }, b.st.removalDelay)) : b._close())
      }, _close: function() {
         y(h);
         var c = r + " " + q + " ";
         if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
            var e = {marginRight: ""};
            b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
         }
         d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
      }, updateSize: function(a) {
         if (b.isIOS) {
            var c = document.documentElement.clientWidth / window.innerWidth, d = window.innerHeight * c;
            b.wrap.css("height", d), b.wH = d
         } else
            b.wH = a || v.height();
         b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
      }, updateItemHTML: function() {
         var c = b.items[b.index];
         b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
         var d = c.type;
         if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
            var f = b.st[d] ? b.st[d].markup : !1;
            y("FirstMarkupParse", f), b.currTemplate[d] = f ? a(f) : !0
         }
         e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
         var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
         b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
      }, appendContent: function(a, c) {
         b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
      }, parseEl: function(c) {
         var d, e = b.items[c];
         if (e.tagName ? e = {el: a(e)} : (d = e.type, e = {data: e, src: e.src}), e.el) {
            for (var f = b.types, g = 0; g < f.length; g++)
               if (e.el.hasClass("mfp-" + f[g])) {
                  d = f[g];
                  break
               }
            e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
         }
         return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
      }, addGroup: function(a, c) {
         var d = function(d) {
            d.mfpEl = this, b._openClick(d, a, c)
         };
         c || (c = {});
         var e = "click.magnificPopup";
         c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
      }, _openClick: function(c, d, e) {
         var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
         if (f || 2 !== c.which && !c.ctrlKey && !c.metaKey) {
            var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
            if (g)
               if (a.isFunction(g)) {
                  if (!g.call(b))
                     return!0
               } else if (v.width() < g)
                  return!0;
            c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
         }
      }, updateStatus: function(a, d) {
         if (b.preloader) {
            c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
            var e = {status: a, text: d};
            y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
               a.stopImmediatePropagation()
            }), b.container.addClass("mfp-s-" + a), c = a
         }
      }, _checkIfClose: function(c) {
         if (!a(c).hasClass(s)) {
            var d = b.st.closeOnContentClick, e = b.st.closeOnBgClick;
            if (d && e)
               return!0;
            if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0])
               return!0;
            if (c === b.content[0] || a.contains(b.content[0], c)) {
               if (d)
                  return!0
            } else if (e && a.contains(document, c))
               return!0;
            return!1
         }
      }, _addClassToMFP: function(a) {
         b.bgOverlay.addClass(a), b.wrap.addClass(a)
      }, _removeClassFromMFP: function(a) {
         this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
      }, _hasScrollBar: function(a) {
         return(b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
      }, _setFocus: function() {
         (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
      }, _onFocusIn: function(c) {
         return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
      }, _parseMarkup: function(b, c, d) {
         var e;
         d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(a, c) {
            if (void 0 === c || c === !1)
               return!0;
            if (e = a.split("_"), e.length > 1) {
               var d = b.find(p + "-" + e[0]);
               if (d.length > 0) {
                  var f = e[1];
                  "replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
               }
            } else
               b.find(p + "-" + a).html(c)
         })
      }, _getScrollbarSize: function() {
         if (void 0 === b.scrollbarSize) {
            var a = document.createElement("div");
            a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
         }
         return b.scrollbarSize
      }}, a.magnificPopup = {instance: null, proto: t.prototype, modules: [], open: function(b, c) {
         return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
      }, close: function() {
         return a.magnificPopup.instance && a.magnificPopup.instance.close()
      }, registerModule: function(b, c) {
         c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
      }, defaults: {disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>', tClose: "Close (Esc)", tLoading: "Loading..."}}, a.fn.magnificPopup = function(c) {
      A();
      var d = a(this);
      if ("string" == typeof c)
         if ("open" === c) {
            var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0;
            f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({mfpEl: e}, d, f)
         } else
            b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else
         c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
      return d
   };
   var C, D, E, F = "inline", G = function() {
      E && (D.after(E.addClass(C)).detach(), E = null)
   };
   a.magnificPopup.registerModule(F, {options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"}, proto: {initInline: function() {
            b.types.push(F), w(h + "." + F, function() {
               G()
            })
         }, getInline: function(c, d) {
            if (G(), c.src) {
               var e = b.st.inline, f = a(c.src);
               if (f.length) {
                  var g = f[0].parentNode;
                  g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
               } else
                  b.updateStatus("error", e.tNotFound), f = a("<div>");
               return c.inlineElement = f, f
            }
            return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
         }}});
   var H, I = "ajax", J = function() {
      H && a(document.body).removeClass(H)
   }, K = function() {
      J(), b.req && b.req.abort()
   };
   a.magnificPopup.registerModule(I, {options: {settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.'}, proto: {initAjax: function() {
            b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
         }, getAjax: function(c) {
            H && a(document.body).addClass(H), b.updateStatus("loading");
            var d = a.extend({url: c.src, success: function(d, e, f) {
                  var g = {data: d, xhr: f};
                  y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
                     b.wrap.addClass(q)
                  }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
               }, error: function() {
                  J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
               }}, b.st.ajax.settings);
            return b.req = a.ajax(d), ""
         }}});
   var L, M = function(c) {
      if (c.data && void 0 !== c.data.title)
         return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
         if (a.isFunction(d))
            return d.call(b, c);
         if (c.el)
            return c.el.attr(d) || ""
      }
      return""
   };
   a.magnificPopup.registerModule("image", {options: {markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.'}, proto: {initImage: function() {
            var c = b.st.image, d = ".image";
            b.types.push("image"), w(m + d, function() {
               "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
            }), w(h + d, function() {
               c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
            }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
         }, resizeImage: function() {
            var a = b.currItem;
            if (a && a.img && b.st.image.verticalFit) {
               var c = 0;
               b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
            }
         }, _onImageHasSize: function(a) {
            a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
         }, findImageSize: function(a) {
            var c = 0, d = a.img[0], e = function(f) {
               L && clearInterval(L), L = setInterval(function() {
                  return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
               }, f)
            };
            e(1)
         }, getImage: function(c, d) {
            var e = 0, f = function() {
               c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
            }, g = function() {
               c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
            }, h = b.st.image, i = d.find(".mfp-img");
            if (i.length) {
               var j = document.createElement("img");
               j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
            }
            return b._parseMarkup(d, {title: M(c), img_replaceWith: c.img}, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
         }}});
   var N, O = function() {
      return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
   };
   a.magnificPopup.registerModule("zoom", {options: {enabled: !1, easing: "ease-in-out", duration: 300, opener: function(a) {
            return a.is("img") ? a : a.find("img")
         }}, proto: {initZoom: function() {
            var a, c = b.st.zoom, d = ".zoom";
            if (c.enabled && b.supportsTransition) {
               var e, f, g = c.duration, j = function(a) {
                  var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d = "all " + c.duration / 1e3 + "s " + c.easing, e = {position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden"}, f = "transition";
                  return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
               }, k = function() {
                  b.content.css("visibility", "visible")
               };
               w("BuildControls" + d, function() {
                  if (b._allowZoom()) {
                     if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a)
                        return void k();
                     f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                        f.css(b._getOffset(!0)), e = setTimeout(function() {
                           k(), setTimeout(function() {
                              f.remove(), a = f = null, y("ZoomAnimationEnded")
                           }, 16)
                        }, g)
                     }, 16)
                  }
               }), w(i + d, function() {
                  if (b._allowZoom()) {
                     if (clearTimeout(e), b.st.removalDelay = g, !a) {
                        if (a = b._getItemToZoom(), !a)
                           return;
                        f = j(a)
                     }
                     f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                        f.css(b._getOffset())
                     }, 16)
                  }
               }), w(h + d, function() {
                  b._allowZoom() && (k(), f && f.remove(), a = null)
               })
            }
         }, _allowZoom: function() {
            return"image" === b.currItem.type
         }, _getItemToZoom: function() {
            return b.currItem.hasSize ? b.currItem.img : !1
         }, _getOffset: function(c) {
            var d;
            d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
            var e = d.offset(), f = parseInt(d.css("padding-top"), 10), g = parseInt(d.css("padding-bottom"), 10);
            e.top -= a(window).scrollTop() - f;
            var h = {width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f};
            return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
         }}});
   var P = "iframe", Q = "//about:blank", R = function(a) {
      if (b.currTemplate[P]) {
         var c = b.currTemplate[P].find("iframe");
         c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
      }
   };
   a.magnificPopup.registerModule(P, {options: {markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: {youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"}, vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"}, gmaps: {index: "//maps.google.", src: "%id%&output=embed"}}}, proto: {initIframe: function() {
            b.types.push(P), w("BeforeChange", function(a, b, c) {
               b !== c && (b === P ? R() : c === P && R(!0))
            }), w(h + "." + P, function() {
               R()
            })
         }, getIframe: function(c, d) {
            var e = c.src, f = b.st.iframe;
            a.each(f.patterns, function() {
               return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
            });
            var g = {};
            return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
         }}});
   var S = function(a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a
   }, T = function(a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
   };
   a.magnificPopup.registerModule("gallery", {options: {enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%"}, proto: {initGallery: function() {
            var c = b.st.gallery, e = ".mfp-gallery", g = Boolean(a.fn.mfpFastClick);
            return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
               c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                  return b.items.length > 1 ? (b.next(), !1) : void 0
               }), d.on("keydown" + e, function(a) {
                  37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
               })
            }), w("UpdateStatus" + e, function(a, c) {
               c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
            }), w(l + e, function(a, d, e, f) {
               var g = b.items.length;
               e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
            }), w("BuildControls" + e, function() {
               if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup, e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s), f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s), h = g ? "mfpFastClick" : "click";
                  e[h](function() {
                     b.prev()
                  }), f[h](function() {
                     b.next()
                  }), b.isIE7 && (x("b", e[0], !1, !0), x("a", e[0], !1, !0), x("b", f[0], !1, !0), x("a", f[0], !1, !0)), b.container.append(e.add(f))
               }
            }), w(n + e, function() {
               b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                  b.preloadNearbyImages(), b._preloadTimeout = null
               }, 16)
            }), void w(h + e, function() {
               d.off(e), b.wrap.off("click" + e), b.arrowLeft && g && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null
            })) : !1
         }, next: function() {
            b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
         }, prev: function() {
            b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
         }, goTo: function(a) {
            b.direction = a >= b.index, b.index = a, b.updateItemHTML()
         }, preloadNearbyImages: function() {
            var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length);
            for (a = 1; a <= (b.direction?e:d); a++)
               b._preloadItem(b.index + a);
            for (a = 1; a <= (b.direction?d:e); a++)
               b._preloadItem(b.index - a)
         }, _preloadItem: function(c) {
            if (c = S(c), !b.items[c].preloaded) {
               var d = b.items[c];
               d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                  d.hasSize = !0
               }).on("error.mfploader", function() {
                  d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
               }).attr("src", d.src)), d.preloaded = !0
            }
         }}});
   var U = "retina";
   a.magnificPopup.registerModule(U, {options: {replaceSrc: function(a) {
            return a.src.replace(/\.\w+$/, function(a) {
               return"@2x" + a
            })
         }, ratio: 1}, proto: {initRetina: function() {
            if (window.devicePixelRatio > 1) {
               var a = b.st.retina, c = a.ratio;
               c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
                  b.img.css({"max-width": b.img[0].naturalWidth / c, width: "100%"})
               }), w("ElementParse." + U, function(b, d) {
                  d.src = a.replaceSrc(d, c)
               }))
            }
         }}}), function() {
      var b = 1e3, c = "ontouchstart"in window, d = function() {
         v.off("touchmove" + f + " touchend" + f)
      }, e = "mfpFastClick", f = "." + e;
      a.fn.mfpFastClick = function(e) {
         return a(this).each(function() {
            var g, h = a(this);
            if (c) {
               var i, j, k, l, m, n;
               h.on("touchstart" + f, function(a) {
                  l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, v.on("touchmove" + f, function(a) {
                     m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0, d())
                  }).on("touchend" + f, function(a) {
                     d(), l || n > 1 || (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function() {
                        g = !1
                     }, b), e())
                  })
               })
            }
            h.on("click" + f, function() {
               g || e()
            })
         })
      }, a.fn.destroyMfpFastClick = function() {
         a(this).off("touchstart" + f + " click" + f), c && v.off("touchmove" + f + " touchend" + f)
      }
   }(), A()
});




/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!function(e) {
   e.flexslider = function(t, a) {
      var n = e(t);
      n.vars = e.extend({}, e.flexslider.defaults, a);
      var i, s = n.vars.namespace, r = window.navigator && window.navigator.msPointerEnabled && window.MSGesture, o = ("ontouchstart"in window || r || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch, l = "click touchend MSPointerUp keyup", c = "", d = "vertical" === n.vars.direction, u = n.vars.reverse, v = n.vars.itemWidth > 0, p = "fade" === n.vars.animation, m = "" !== n.vars.asNavFor, f = {}, g = !0;
      e.data(t, "flexslider", n), f = {init: function() {
            n.animating = !1, n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt : 0, 10), isNaN(n.currentSlide) && (n.currentSlide = 0), n.animatingTo = n.currentSlide, n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last, n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")), n.slides = e(n.vars.selector, n), n.container = e(n.containerSelector, n), n.count = n.slides.length, n.syncExists = e(n.vars.sync).length > 0, "slide" === n.vars.animation && (n.vars.animation = "swing"), n.prop = d ? "top" : "marginLeft", n.args = {}, n.manualPause = !1, n.stopped = !1, n.started = !1, n.startTimeout = null, n.transitions = !n.vars.video && !p && n.vars.useCSS && function() {
               var e = document.createElement("div"), t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
               for (var a in t)
                  if (void 0 !== e.style[t[a]])
                     return n.pfx = t[a].replace("Perspective", "").toLowerCase(), n.prop = "-" + n.pfx + "-transform", !0;
               return!1
            }(), n.ensureAnimationEnd = "", "" !== n.vars.controlsContainer && (n.controlsContainer = e(n.vars.controlsContainer).length > 0 && e(n.vars.controlsContainer)), "" !== n.vars.manualControls && (n.manualControls = e(n.vars.manualControls).length > 0 && e(n.vars.manualControls)), n.vars.randomize && (n.slides.sort(function() {
               return Math.round(Math.random()) - .5
            }), n.container.empty().append(n.slides)), n.doMath(), n.setup("init"), n.vars.controlNav && f.controlNav.setup(), n.vars.directionNav && f.directionNav.setup(), n.vars.keyboard && (1 === e(n.containerSelector).length || n.vars.multipleKeyboard) && e(document).bind("keyup", function(e) {
               var t = e.keyCode;
               if (!n.animating && (39 === t || 37 === t)) {
                  var a = 39 === t ? n.getTarget("next") : 37 === t ? n.getTarget("prev") : !1;
                  n.flexAnimate(a, n.vars.pauseOnAction)
               }
            }), n.vars.mousewheel && n.bind("mousewheel", function(e, t) {
               e.preventDefault();
               var a = n.getTarget(0 > t ? "next" : "prev");
               n.flexAnimate(a, n.vars.pauseOnAction)
            }), n.vars.pausePlay && f.pausePlay.setup(), n.vars.slideshow && n.vars.pauseInvisible && f.pauseInvisible.init(), n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function() {
               n.manualPlay || n.manualPause || n.pause()
            }, function() {
               n.manualPause || n.manualPlay || n.stopped || n.play()
            }), n.vars.pauseInvisible && f.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())), m && f.asNav.setup(), o && n.vars.touch && f.touch(), (!p || p && n.vars.smoothHeight) && e(window).bind("resize orientationchange focus", f.resize), n.find("img").attr("draggable", "false"), setTimeout(function() {
               n.vars.start(n)
            }, 200)
         }, asNav: {setup: function() {
               n.asNav = !0, n.animatingTo = Math.floor(n.currentSlide / n.move), n.currentItem = n.currentSlide, n.slides.removeClass(s + "active-slide").eq(n.currentItem).addClass(s + "active-slide"), r ? (t._slider = n, n.slides.each(function() {
                  var t = this;
                  t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", function(e) {
                     e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
                  }, !1), t.addEventListener("MSGestureTap", function(t) {
                     t.preventDefault();
                     var a = e(this), i = a.index();
                     e(n.vars.asNavFor).data("flexslider").animating || a.hasClass("active") || (n.direction = n.currentItem < i ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction, !1, !0, !0))
                  })
               })) : n.slides.on(l, function(t) {
                  t.preventDefault();
                  var a = e(this), i = a.index(), r = a.offset().left - e(n).scrollLeft();
                  0 >= r && a.hasClass(s + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : e(n.vars.asNavFor).data("flexslider").animating || a.hasClass(s + "active-slide") || (n.direction = n.currentItem < i ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction, !1, !0, !0))
               })
            }}, controlNav: {setup: function() {
               n.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging()
            }, setupPaging: function() {
               var t, a, i = "thumbnails" === n.vars.controlNav ? "control-thumbs" : "control-paging", r = 1;
               if (n.controlNavScaffold = e('<ol class="' + s + "control-nav " + s + i + '"></ol>'), n.pagingCount > 1)
                  for (var o = 0; o < n.pagingCount; o++) {
                     if (a = n.slides.eq(o), t = "thumbnails" === n.vars.controlNav ? '<img src="' + a.attr("data-thumb") + '"/>' : "<a>" + r + "</a>", "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
                        var d = a.attr("data-thumbcaption");
                        "" != d && void 0 != d && (t += '<span class="' + s + 'caption">' + d + "</span>")
                     }
                     n.controlNavScaffold.append('<li data-animate="zoomIn" data-delay="' + 200 * o + '">' + t + "</li>"), r++
                  }
               n.controlsContainer ? e(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold), f.controlNav.set(), f.controlNav.active(), n.controlNavScaffold.delegate("a, img", l, function(t) {
                  if (t.preventDefault(), "" === c || c === t.type) {
                     var a = e(this), i = n.controlNav.index(a);
                     a.hasClass(s + "active") || (n.direction = i > n.currentSlide ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction))
                  }
                  "" === c && (c = t.type), f.setToClearWatchedEvent()
               })
            }, setupManual: function() {
               n.controlNav = n.manualControls, f.controlNav.active(), n.controlNav.bind(l, function(t) {
                  if (t.preventDefault(), "" === c || c === t.type) {
                     var a = e(this), i = n.controlNav.index(a);
                     a.hasClass(s + "active") || (n.direction = i > n.currentSlide ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction))
                  }
                  "" === c && (c = t.type), f.setToClearWatchedEvent()
               })
            }, set: function() {
               var t = "thumbnails" === n.vars.controlNav ? "img" : "a";
               n.controlNav = e("." + s + "control-nav li " + t, n.controlsContainer ? n.controlsContainer : n)
            }, active: function() {
               n.controlNav.removeClass(s + "active").eq(n.animatingTo).addClass(s + "active")
            }, update: function(t, a) {
               n.pagingCount > 1 && "add" === t ? n.controlNavScaffold.append(e("<li><a>" + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(a).closest("li").remove(), f.controlNav.set(), n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(a, t) : f.controlNav.active()
            }}, directionNav: {setup: function() {
               var t = e('<ul class="' + s + 'direction-nav"><li><a class="' + s + 'prev" href="#">' + n.vars.prevText + '</a></li><li><a class="' + s + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
               n.controlsContainer ? (e(n.controlsContainer).append(t), n.directionNav = e("." + s + "direction-nav li a", n.controlsContainer)) : (n.append(t), n.directionNav = e("." + s + "direction-nav li a", n)), f.directionNav.update(), n.directionNav.bind(l, function(t) {
                  t.preventDefault();
                  var a;
                  ("" === c || c === t.type) && (a = n.getTarget(e(this).hasClass(s + "next") ? "next" : "prev"), n.flexAnimate(a, n.vars.pauseOnAction)), "" === c && (c = t.type), f.setToClearWatchedEvent()
               })
            }, update: function() {
               var e = s + "disabled";
               1 === n.pagingCount ? n.directionNav.addClass(e).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(e).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(e).filter("." + s + "prev").addClass(e).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(e).filter("." + s + "next").addClass(e).attr("tabindex", "-1") : n.directionNav.removeClass(e).removeAttr("tabindex")
            }}, pausePlay: {setup: function() {
               var t = e('<div class="' + s + 'pauseplay"><a></a></div>');
               n.controlsContainer ? (n.controlsContainer.append(t), n.pausePlay = e("." + s + "pauseplay a", n.controlsContainer)) : (n.append(t), n.pausePlay = e("." + s + "pauseplay a", n)), f.pausePlay.update(n.vars.slideshow ? s + "pause" : s + "play"), n.pausePlay.bind(l, function(t) {
                  t.preventDefault(), ("" === c || c === t.type) && (e(this).hasClass(s + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())), "" === c && (c = t.type), f.setToClearWatchedEvent()
               })
            }, update: function(e) {
               "play" === e ? n.pausePlay.removeClass(s + "pause").addClass(s + "play").html(n.vars.playText) : n.pausePlay.removeClass(s + "play").addClass(s + "pause").html(n.vars.pauseText)
            }}, touch: function() {
            function e(e) {
               n.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (n.pause(), g = d ? n.h : n.w, S = Number(new Date), x = e.touches[0].pageX, b = e.touches[0].pageY, f = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * g : (n.currentSlide + n.cloneOffset) * g, c = d ? b : x, m = d ? x : b, t.addEventListener("touchmove", a, !1), t.addEventListener("touchend", i, !1))
            }
            function a(e) {
               x = e.touches[0].pageX, b = e.touches[0].pageY, h = d ? c - b : c - x, y = d ? Math.abs(h) < Math.abs(x - m) : Math.abs(h) < Math.abs(b - m);
               var t = 500;
               (!y || Number(new Date) - S > t) && (e.preventDefault(), !p && n.transitions && (n.vars.animationLoop || (h /= 0 === n.currentSlide && 0 > h || n.currentSlide === n.last && h > 0 ? Math.abs(h) / g + 2 : 1), n.setProps(f + h, "setTouch")))
            }
            function i() {
               if (t.removeEventListener("touchmove", a, !1), n.animatingTo === n.currentSlide && !y && null !== h) {
                  var e = u ? -h : h, s = n.getTarget(e > 0 ? "next" : "prev");
                  n.canAdvance(s) && (Number(new Date) - S < 550 && Math.abs(e) > 50 || Math.abs(e) > g / 2) ? n.flexAnimate(s, n.vars.pauseOnAction) : p || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
               }
               t.removeEventListener("touchend", i, !1), c = null, m = null, h = null, f = null
            }
            function s(e) {
               e.stopPropagation(), n.animating ? e.preventDefault() : (n.pause(), t._gesture.addPointer(e.pointerId), w = 0, g = d ? n.h : n.w, S = Number(new Date), f = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * g : (n.currentSlide + n.cloneOffset) * g)
            }
            function o(e) {
               e.stopPropagation();
               var a = e.target._slider;
               if (a) {
                  var n = -e.translationX, i = -e.translationY;
                  return w += d ? i : n, h = w, y = d ? Math.abs(w) < Math.abs(-n) : Math.abs(w) < Math.abs(-i), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                     t._gesture.stop()
                  }) : void((!y || Number(new Date) - S > 500) && (e.preventDefault(), !p && a.transitions && (a.vars.animationLoop || (h = w / (0 === a.currentSlide && 0 > w || a.currentSlide === a.last && w > 0 ? Math.abs(w) / g + 2 : 1)), a.setProps(f + h, "setTouch"))))
               }
            }
            function l(e) {
               e.stopPropagation();
               var t = e.target._slider;
               if (t) {
                  if (t.animatingTo === t.currentSlide && !y && null !== h) {
                     var a = u ? -h : h, n = t.getTarget(a > 0 ? "next" : "prev");
                     t.canAdvance(n) && (Number(new Date) - S < 550 && Math.abs(a) > 50 || Math.abs(a) > g / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : p || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
                  }
                  c = null, m = null, h = null, f = null, w = 0
               }
            }
            var c, m, f, g, h, S, y = !1, x = 0, b = 0, w = 0;
            r ? (t.style.msTouchAction = "none", t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", s, !1), t._slider = n, t.addEventListener("MSGestureChange", o, !1), t.addEventListener("MSGestureEnd", l, !1)) : t.addEventListener("touchstart", e, !1)
         }, resize: function() {
            !n.animating && n.is(":visible") && (v || n.doMath(), p ? f.smoothHeight() : v ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : d ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && f.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")))
         }, smoothHeight: function(e) {
            if (!d || p) {
               var t = p ? n : n.viewport;
               e ? t.animate({height: n.slides.eq(n.animatingTo).height()}, e) : t.height(n.slides.eq(n.animatingTo).height())
            }
         }, sync: function(t) {
            var a = e(n.vars.sync).data("flexslider"), i = n.animatingTo;
            switch (t) {
               case"animate":
                  a.flexAnimate(i, n.vars.pauseOnAction, !1, !0);
                  break;
               case"play":
                  a.playing || a.asNav || a.play();
                  break;
               case"pause":
                  a.pause()
               }
         }, uniqueID: function(t) {
            return t.filter("[id]").add(t.find("[id]")).each(function() {
               var t = e(this);
               t.attr("id", t.attr("id") + "_clone")
            }), t
         }, pauseInvisible: {visProp: null, init: function() {
               var e = ["webkit", "moz", "ms", "o"];
               if ("hidden"in document)
                  return"hidden";
               for (var t = 0; t < e.length; t++)
                  e[t] + "Hidden"in document && (f.pauseInvisible.visProp = e[t] + "Hidden");
               if (f.pauseInvisible.visProp) {
                  var a = f.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
                  document.addEventListener(a, function() {
                     f.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play()
                  })
               }
            }, isHidden: function() {
               return document[f.pauseInvisible.visProp] || !1
            }}, setToClearWatchedEvent: function() {
            clearTimeout(i), i = setTimeout(function() {
               c = ""
            }, 3e3)
         }}, n.flexAnimate = function(t, a, i, r, l) {
         if (n.vars.animationLoop || t === n.currentSlide || (n.direction = t > n.currentSlide ? "next" : "prev"), m && 1 === n.pagingCount && (n.direction = n.currentItem < t ? "next" : "prev"), !n.animating && (n.canAdvance(t, l) || i) && n.is(":visible")) {
            if (m && r) {
               var c = e(n.vars.asNavFor).data("flexslider");
               if (n.atEnd = 0 === t || t === n.count - 1, c.flexAnimate(t, !0, !1, !0, l), n.direction = n.currentItem < t ? "next" : "prev", c.direction = n.direction, Math.ceil((t + 1) / n.visible) - 1 === n.currentSlide || 0 === t)
                  return n.currentItem = t, n.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), !1;
               n.currentItem = t, n.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), t = Math.floor(t / n.visible)
            }
            if (n.animating = !0, n.animatingTo = t, a && n.pause(), n.vars.before(n), n.syncExists && !l && f.sync("animate"), n.vars.controlNav && f.controlNav.active(), v || n.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), n.atEnd = 0 === t || t === n.last, n.vars.directionNav && f.directionNav.update(), t === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), p)
               o ? (n.slides.eq(n.currentSlide).css({opacity: 0, zIndex: 1}), n.slides.eq(t).css({opacity: 1, zIndex: 2}), n.wrapup(y)) : (n.slides.eq(n.currentSlide).css({zIndex: 1}).animate({opacity: 0}, n.vars.animationSpeed, n.vars.easing), n.slides.eq(t).css({zIndex: 2}).animate({opacity: 1}, n.vars.animationSpeed, n.vars.easing, n.wrapup));
            else {
               var g, h, S, y = d ? n.slides.filter(":first").height() : n.computedW;
               v ? (g = n.vars.itemMargin, S = (n.itemW + g) * n.move * n.animatingTo, h = S > n.limit && 1 !== n.visible ? n.limit : S) : h = 0 === n.currentSlide && t === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? u ? (n.count + n.cloneOffset) * y : 0 : n.currentSlide === n.last && 0 === t && n.vars.animationLoop && "prev" !== n.direction ? u ? 0 : (n.count + 1) * y : u ? (n.count - 1 - t + n.cloneOffset) * y : (t + n.cloneOffset) * y, n.setProps(h, "", n.vars.animationSpeed), n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend", function() {
                  clearTimeout(n.ensureAnimationEnd), n.wrapup(y)
               }), clearTimeout(n.ensureAnimationEnd), n.ensureAnimationEnd = setTimeout(function() {
                  n.wrapup(y)
               }, n.vars.animationSpeed + 100)) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing, function() {
                  n.wrapup(y)
               })
            }
            n.vars.smoothHeight && f.smoothHeight(n.vars.animationSpeed)
         }
      }, n.wrapup = function(e) {
         p || v || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(e, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(e, "jumpStart")), n.animating = !1, n.currentSlide = n.animatingTo, n.vars.after(n)
      }, n.animateSlides = function() {
         !n.animating && g && n.flexAnimate(n.getTarget("next"))
      }, n.pause = function() {
         clearInterval(n.animatedSlides), n.animatedSlides = null, n.playing = !1, n.vars.pausePlay && f.pausePlay.update("play"), n.syncExists && f.sync("pause")
      }, n.play = function() {
         n.playing && clearInterval(n.animatedSlides), n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed), n.started = n.playing = !0, n.vars.pausePlay && f.pausePlay.update("pause"), n.syncExists && f.sync("play")
      }, n.stop = function() {
         n.pause(), n.stopped = !0
      }, n.canAdvance = function(e, t) {
         var a = m ? n.pagingCount - 1 : n.last;
         return t ? !0 : m && n.currentItem === n.count - 1 && 0 === e && "prev" === n.direction ? !0 : m && 0 === n.currentItem && e === n.pagingCount - 1 && "next" !== n.direction ? !1 : e !== n.currentSlide || m ? n.vars.animationLoop ? !0 : n.atEnd && 0 === n.currentSlide && e === a && "next" !== n.direction ? !1 : n.atEnd && n.currentSlide === a && 0 === e && "next" === n.direction ? !1 : !0 : !1
      }, n.getTarget = function(e) {
         return n.direction = e, "next" === e ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last : n.currentSlide - 1
      }, n.setProps = function(e, t, a) {
         var i = function() {
            var a = e ? e : (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo, i = function() {
               if (v)
                  return"setTouch" === t ? e : u && n.animatingTo === n.last ? 0 : u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : n.animatingTo === n.last ? n.limit : a;
               switch (t) {
                  case"setTotal":
                     return u ? (n.count - 1 - n.currentSlide + n.cloneOffset) * e : (n.currentSlide + n.cloneOffset) * e;
                  case"setTouch":
                     return u ? e : e;
                  case"jumpEnd":
                     return u ? e : n.count * e;
                  case"jumpStart":
                     return u ? n.count * e : e;
                  default:
                     return e
                  }
            }();
            return-1 * i + "px"
         }();
         n.transitions && (i = d ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)", a = void 0 !== a ? a / 1e3 + "s" : "0s", n.container.css("-" + n.pfx + "-transition-duration", a), n.container.css("transition-duration", a)), n.args[n.prop] = i, (n.transitions || void 0 === a) && n.container.css(n.args), n.container.css("transform", i)
      }, n.setup = function(t) {
         if (p)
            n.slides.css({width: "100%", "float": "left", marginRight: "-100%", position: "relative"}), "init" === t && (o ? n.slides.css({opacity: 0, display: "block", webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease", zIndex: 1}).eq(n.currentSlide).css({opacity: 1, zIndex: 2}) : 0 == n.vars.fadeFirstSlide ? n.slides.css({opacity: 0, display: "block", zIndex: 1}).eq(n.currentSlide).css({zIndex: 2}).css({opacity: 1}) : n.slides.css({opacity: 0, display: "block", zIndex: 1}).eq(n.currentSlide).css({zIndex: 2}).animate({opacity: 1}, n.vars.animationSpeed, n.vars.easing)), n.vars.smoothHeight && f.smoothHeight();
         else {
            var a, i;
            "init" === t && (n.viewport = e('<div class="' + s + 'viewport"></div>').css({overflow: "hidden", position: "relative"}).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, u && (i = e.makeArray(n.slides).reverse(), n.slides = e(i), n.container.empty().append(n.slides))), n.vars.animationLoop && !v && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== t && n.container.find(".clone").remove(), n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), n.newSlides = e(n.vars.selector, n), a = u ? n.count - 1 - n.currentSlide + n.cloneOffset : n.currentSlide + n.cloneOffset, d && !v ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
               n.newSlides.css({display: "block"}), n.doMath(), n.viewport.height(n.h), n.setProps(a * n.h, "init")
            }, "init" === t ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(a * n.computedW, "init"), setTimeout(function() {
               n.doMath(), n.newSlides.css({width: n.computedW, "float": "left", display: "block"}), n.vars.smoothHeight && f.smoothHeight()
            }, "init" === t ? 100 : 0))
         }
         v || n.slides.removeClass(s + "active-slide").eq(n.currentSlide).addClass(s + "active-slide"), n.vars.init(n)
      }, n.doMath = function() {
         var e = n.slides.first(), t = n.vars.itemMargin, a = n.vars.minItems, i = n.vars.maxItems;
         n.w = void 0 === n.viewport ? n.width() : n.viewport.width(), n.h = e.height(), n.boxPadding = e.outerWidth() - e.width(), v ? (n.itemT = n.vars.itemWidth + t, n.minW = a ? a * n.itemT : n.w, n.maxW = i ? i * n.itemT - t : n.w, n.itemW = n.minW > n.w ? (n.w - t * (a - 1)) / a : n.maxW < n.w ? (n.w - t * (i - 1)) / i : n.vars.itemWidth > n.w ? n.w : n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move : n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + t * (n.count - 1) : (n.itemW + t) * n.count - n.w - t) : (n.itemW = n.w, n.pagingCount = n.count, n.last = n.count - 1), n.computedW = n.itemW - n.boxPadding
      }, n.update = function(e, t) {
         n.doMath(), v || (e < n.currentSlide ? n.currentSlide += 1 : e <= n.currentSlide && 0 !== e && (n.currentSlide -= 1), n.animatingTo = n.currentSlide), n.vars.controlNav && !n.manualControls && ("add" === t && !v || n.pagingCount > n.controlNav.length ? f.controlNav.update("add") : ("remove" === t && !v || n.pagingCount < n.controlNav.length) && (v && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), f.controlNav.update("remove", n.last))), n.vars.directionNav && f.directionNav.update()
      }, n.addSlide = function(t, a) {
         var i = e(t);
         n.count += 1, n.last = n.count - 1, d && u ? void 0 !== a ? n.slides.eq(n.count - a).after(i) : n.container.prepend(i) : void 0 !== a ? n.slides.eq(a).before(i) : n.container.append(i), n.update(a, "add"), n.slides = e(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.added(n)
      }, n.removeSlide = function(t) {
         var a = isNaN(t) ? n.slides.index(e(t)) : t;
         n.count -= 1, n.last = n.count - 1, isNaN(t) ? e(t, n.slides).remove() : d && u ? n.slides.eq(n.last).remove() : n.slides.eq(t).remove(), n.doMath(), n.update(a, "remove"), n.slides = e(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.removed(n)
      }, f.init()
   }, e(window).blur(function() {
      focused = !1
   }).focus(function() {
      focused = !0
   }), e.flexslider.defaults = {namespace: "flex-", selector: ".slides > li", animation: "fade", easing: "swing", direction: "horizontal", reverse: !1, animationLoop: !0, smoothHeight: !1, startAt: 0, slideshow: !0, slideshowSpeed: 7e3, animationSpeed: 600, initDelay: 0, randomize: !1, fadeFirstSlide: !0, thumbCaptions: !1, pauseOnAction: !0, pauseOnHover: !1, pauseInvisible: !0, useCSS: !0, touch: !0, video: !1, controlNav: !0, directionNav: !0, prevText: "Previous", nextText: "Next", keyboard: !0, multipleKeyboard: !1, mousewheel: !1, pausePlay: !1, pauseText: "Pause", playText: "Play", controlsContainer: "", manualControls: "", sync: "", asNavFor: "", itemWidth: 0, itemMargin: 0, minItems: 1, maxItems: 0, move: 0, allowOneSlide: !0, start: function() {
      }, before: function() {
      }, after: function() {
      }, end: function() {
      }, added: function() {
      }, removed: function() {
      }, init: function() {
      }}, e.fn.flexslider = function(t) {
      if (void 0 === t && (t = {}), "object" == typeof t)
         return this.each(function() {
            var a = e(this), n = t.selector ? t.selector : ".slides > li", i = a.find(n);
            1 === i.length && t.allowOneSlide === !0 || 0 === i.length ? (i.fadeIn(400), t.start && t.start(a)) : void 0 === a.data("flexslider") && new e.flexslider(this, t)
         });
      var a = e(this).data("flexslider");
      switch (t) {
         case"play":
            a.play();
            break;
         case"pause":
            a.pause();
            break;
         case"stop":
            a.stop();
            break;
         case"next":
            a.flexAnimate(a.getTarget("next"), !0);
            break;
         case"prev":
         case"previous":
            a.flexAnimate(a.getTarget("prev"), !0);
            break;
         default:
            "number" == typeof t && a.flexAnimate(t, !0)
         }
   }
}(jQuery);




// jQuery Paginate v0.4
;
(function($) {
   $.fn.pajinate = function(options) {
      var current_page = "current_page";
      var items_per_page = "items_per_page";
      var meta;
      var defaults = {item_container_id: ".content", items_per_page: 10, nav_panel_id: ".page_navigation", nav_info_id: ".info_text", num_page_links_to_display: 20, start_page: 0, wrap_around: false, nav_label_first: "First", nav_label_prev: "Prev", nav_label_next: "Next", nav_label_last: "Last", nav_order: ["first", "prev", "num", "next", "last"], nav_label_info: "Showing {0}-{1} of {2} results", show_first_last: true, abort_on_small_lists: false, jquery_ui: false, jquery_ui_active: "ui-state-highlight", jquery_ui_default: "ui-state-default", jquery_ui_disabled: "ui-state-disabled"};
      var options = $.extend(defaults, options);
      var $item_container;
      var $page_container;
      var $items;
      var $nav_panels;
      var total_page_no_links;
      var jquery_ui_default_class = options.jquery_ui ? options.jquery_ui_default : "";
      var jquery_ui_active_class = options.jquery_ui ? options.jquery_ui_active : "";
      var jquery_ui_disabled_class = options.jquery_ui ? options.jquery_ui_disabled : "";
      return this.each(function() {
         $page_container = $(this);
         $item_container = $(this).find(options.item_container_id);
         $items = $page_container.find(options.item_container_id).children();
         if (options.abort_on_small_lists && options.items_per_page >= $items.size()) {
            return $page_container
         }
         meta = $page_container;
         meta.data(current_page, 0);
         meta.data(items_per_page, options.items_per_page);
         var total_items = $item_container.children().size();
         var number_of_pages = Math.ceil(total_items / options.items_per_page);
         var more = '<li class="disabled ellipse more"><span>...</span></li>';
         var less = '<li class="disabled ellipse less"><span>...</span></li>';
         var first = !options.show_first_last ? "" : '<li class="first_link ' + jquery_ui_default_class + '"><a href="#">' + options.nav_label_first + "</a></li>";
         var last = !options.show_first_last ? "" : '<li class="last_link ' + jquery_ui_default_class + '"><a href="#">' + options.nav_label_last + "</a></li>";
         var navigation_html = "";
         for (var i = 0; i < options.nav_order.length; i++) {
            switch (options.nav_order[i]) {
               case"first":
                  navigation_html += first;
                  break;
               case"last":
                  navigation_html += last;
                  break;
               case"next":
                  navigation_html += '<li class="next_link ' + jquery_ui_default_class + '"><a href="#">' + options.nav_label_next + "</a></li>";
                  break;
               case"prev":
                  navigation_html += '<li class="previous_link ' + jquery_ui_default_class + '"><a href="#">' + options.nav_label_prev + "</a></li>";
                  break;
               case"num":
                  navigation_html += less;
                  var current_link = 0;
                  while (number_of_pages > current_link) {
                     navigation_html += '<li class="page_link ' + jquery_ui_default_class + '" longdesc="' + current_link + '"><a href="#">' + (current_link + 1) + "</a></li>";
                     current_link++
                  }
                  navigation_html += more;
                  break;
               default:
                  break
               }
         }
         $nav_panels = $page_container.find(options.nav_panel_id);
         $nav_panels.html(navigation_html).each(function() {
            $(this).find(".page_link:first").addClass("first");
            $(this).find(".page_link:last").addClass("last")
         });
         $nav_panels.children(".ellipse").hide();
         $nav_panels.find(".previous_link").next().next().addClass("active " + jquery_ui_active_class);
         $items.hide();
         $items.slice(0, meta.data(items_per_page)).show();
         total_page_no_links = $page_container.find(options.nav_panel_id + ":first").children(".page_link").size();
         options.num_page_links_to_display = Math.min(options.num_page_links_to_display, total_page_no_links);
         $nav_panels.children(".page_link").hide();
         $nav_panels.each(function() {
            $(this).children(".page_link").slice(0, options.num_page_links_to_display).show()
         });
         $page_container.find(".first_link").click(function(e) {
            e.preventDefault();
            movePageNumbersRight($(this), 0);
            gotopage(0)
         });
         $page_container.find(".last_link").click(function(e) {
            e.preventDefault();
            var lastPage = total_page_no_links - 1;
            movePageNumbersLeft($(this), lastPage);
            gotopage(lastPage)
         });
         $page_container.find(".previous_link").click(function(e) {
            e.preventDefault();
            showPrevPage($(this))
         });
         $page_container.find(".next_link").click(function(e) {
            e.preventDefault();
            showNextPage($(this))
         });
         $page_container.find(".page_link").click(function(e) {
            e.preventDefault();
            gotopage($(this).attr("longdesc"))
         });
         gotopage(parseInt(options.start_page));
         toggleMoreLess();
         if (!options.wrap_around) {
            tagNextPrev()
         }
      });
      function showPrevPage(e) {
         new_page = parseInt(meta.data(current_page)) - 1;
         if ($(e).siblings(".active").prev(".page_link").length == true) {
            movePageNumbersRight(e, new_page);
            gotopage(new_page)
         } else {
            if (options.wrap_around) {
               gotopage(total_page_no_links - 1)
            }
         }
      }
      function showNextPage(e) {
         new_page = parseInt(meta.data(current_page)) + 1;
         if ($(e).siblings(".active").next(".page_link").length == true) {
            movePageNumbersLeft(e, new_page);
            gotopage(new_page)
         } else {
            if (options.wrap_around) {
               gotopage(0)
            }
         }
      }
      function gotopage(page_num) {
         page_num = parseInt(page_num, 10);
         var ipp = parseInt(meta.data(items_per_page));
         start_from = page_num * ipp;
         end_on = start_from + ipp;
         var items = $items.hide().slice(start_from, end_on);
         items.fadeIn(700);
         $page_container.find(options.nav_panel_id).children(".page_link[longdesc=" + page_num + "]").addClass("active " + jquery_ui_active_class).siblings(".active").removeClass("active " + jquery_ui_active_class);
         meta.data(current_page, page_num);
         var $current_page = parseInt(meta.data(current_page) + 1);
         var total_items = $item_container.children().size();
         var $number_of_pages = Math.ceil(total_items / options.items_per_page);
         $page_container.find(options.nav_info_id).html(options.nav_label_info.replace("{0}", start_from + 1).replace("{1}", start_from + items.length).replace("{2}", $items.length).replace("{3}", $current_page).replace("{4}", $number_of_pages));
         toggleMoreLess();
         tagNextPrev();
         if (typeof(options.onPageDisplayed) !== "undefined") {
            options.onPageDisplayed.call(this, page_num + 1)
         }
      }
      function movePageNumbersLeft(e, new_p) {
         var new_page = new_p;
         var $current_active_link = $(e).siblings(".active");
         if ($current_active_link.siblings(".page_link[longdesc=" + new_page + "]").css("display") == "none") {
            $nav_panels.each(function() {
               $(this).children(".page_link").hide().slice(parseInt(new_page - options.num_page_links_to_display + 1), new_page + 1).show()
            })
         }
      }
      function movePageNumbersRight(e, new_p) {
         var new_page = new_p;
         var $current_active_link = $(e).siblings(".active");
         if ($current_active_link.siblings(".page_link[longdesc=" + new_page + "]").css("display") == "none") {
            $nav_panels.each(function() {
               $(this).children(".page_link").hide().slice(new_page, new_page + parseInt(options.num_page_links_to_display)).show()
            })
         }
      }
      function toggleMoreLess() {
      }
      function tagNextPrev() {
         if ($nav_panels.children(".last").hasClass("active")) {
            $nav_panels.children(".next_link").add(".last_link").addClass("no_more " + jquery_ui_disabled_class)
         } else {
            $nav_panels.children(".next_link").add(".last_link").removeClass("no_more " + jquery_ui_disabled_class)
         }
         if ($nav_panels.children(".first").hasClass("active")) {
            $nav_panels.children(".previous_link").add(".first_link").addClass("no_more " + jquery_ui_disabled_class)
         } else {
            $nav_panels.children(".previous_link").add(".first_link").removeClass("no_more " + jquery_ui_disabled_class)
         }
      }}
})(jQuery);



/*!
 --------------------------------
 Infinite Scroll
 --------------------------------
 + https://github.com/paulirish/infinite-scroll
 + version 2.0.2
 + Copyright 2011/12 Paul Irish & Luke Shumard
 + Licensed under the MIT license
 
 + Documentation: https://infinite-scroll.com/
 */
(function(e, t, n) {
   "use strict";
   t.infinitescroll = function(n, r, i) {
      this.element = t(i);
      if (!this._create(n, r)) {
         this.failed = true
      }
   };
   t.infinitescroll.defaults = {loading: {finished: n, finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>", img: "", msg: null, msgText: "<em>Loading the next set of posts...</em>", selector: null, speed: "fast", start: n}, state: {isDuringAjax: false, isInvalidPage: false, isDestroyed: false, isDone: false, isPaused: false, isBeyondMaxPage: false, currPage: 1}, debug: false, behavior: n, binder: t(e), nextSelector: "div.navigation a:first", navSelector: "div.navigation", contentSelector: null, extraScrollPx: 150, itemSelector: "div.post", animate: false, pathParse: n, dataType: "html", appendCallback: true, bufferPx: 40, errorCallback: function() {
      }, infid: 0, pixelsFromNavToBottom: n, path: n, prefill: false, maxPage: n};
   t.infinitescroll.prototype = {_binding: function(t) {
         var r = this, i = r.options;
         i.v = "2.0b2.120520";
         if (!!i.behavior && this["_binding_" + i.behavior] !== n) {
            this["_binding_" + i.behavior].call(this);
            return
         }
         if (t !== "bind" && t !== "unbind") {
            this._debug("Binding value  " + t + " not valid");
            return false
         }
         if (t === "unbind") {
            this.options.binder.unbind("smartscroll.infscr." + r.options.infid)
         } else {
            this.options.binder[t]("smartscroll.infscr." + r.options.infid, function() {
               r.scroll()
            })
         }
         this._debug("Binding", t)
      }, _create: function(i, s) {
         var o = t.extend(true, {}, t.infinitescroll.defaults, i);
         this.options = o;
         var u = t(e);
         var a = this;
         if (!a._validate(i)) {
            return false
         }
         var f = t(o.nextSelector).attr("href");
         if (!f) {
            this._debug("Navigation selector not found");
            return false
         }
         o.path = o.path || this._determinepath(f);
         o.contentSelector = o.contentSelector || this.element;
         o.loading.selector = o.loading.selector || o.contentSelector;
         o.loading.msg = o.loading.msg || t('<div id="infscr-loading"><img alt="Loading..." src="' + o.loading.img + '" /><div>' + o.loading.msgText + "</div></div>");
         (new Image).src = o.loading.img;
         if (o.pixelsFromNavToBottom === n) {
            o.pixelsFromNavToBottom = t(document).height() - t(o.navSelector).offset().top;
            this._debug("pixelsFromNavToBottom: " + o.pixelsFromNavToBottom)
         }
         var l = this;
         o.loading.start = o.loading.start || function() {
            t(o.navSelector).hide();
            o.loading.msg.appendTo(o.loading.selector).show(o.loading.speed, t.proxy(function() {
               this.beginAjax(o)
            }, l))
         };
         o.loading.finished = o.loading.finished || function() {
            if (!o.state.isBeyondMaxPage)
               o.loading.msg.fadeOut(o.loading.speed)
         };
         o.callback = function(e, r, i) {
            if (!!o.behavior && e["_callback_" + o.behavior] !== n) {
               e["_callback_" + o.behavior].call(t(o.contentSelector)[0], r, i)
            }
            if (s) {
               s.call(t(o.contentSelector)[0], r, o, i)
            }
            if (o.prefill) {
               u.bind("resize.infinite-scroll", e._prefill)
            }
         };
         if (i.debug) {
            if (Function.prototype.bind && (typeof console === "object" || typeof console === "function") && typeof console.log === "object") {
               ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function(e) {
                  console[e] = this.call(console[e], console)
               }, Function.prototype.bind)
            }
         }
         this._setup();
         if (o.prefill) {
            this._prefill()
         }
         return true
      }, _prefill: function() {
         function s() {
            return r.options.contentSelector.height() <= i.height()
         }
         var r = this;
         var i = t(e);
         this._prefill = function() {
            if (s()) {
               r.scroll()
            }
            i.bind("resize.infinite-scroll", function() {
               if (s()) {
                  i.unbind("resize.infinite-scroll");
                  r.scroll()
               }
            })
         };
         this._prefill()
      }, _debug: function() {
         if (true !== this.options.debug) {
            return
         }
         if (typeof console !== "undefined" && typeof console.log === "function") {
            if (Array.prototype.slice.call(arguments).length === 1 && typeof Array.prototype.slice.call(arguments)[0] === "string") {
               console.log(Array.prototype.slice.call(arguments).toString())
            } else {
               console.log(Array.prototype.slice.call(arguments))
            }
         } else if (!Function.prototype.bind && typeof console !== "undefined" && typeof console.log === "object") {
            Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments))
         }
      }, _determinepath: function(t) {
         var r = this.options;
         if (!!r.behavior && this["_determinepath_" + r.behavior] !== n) {
            return this["_determinepath_" + r.behavior].call(this, t)
         }
         if (!!r.pathParse) {
            this._debug("pathParse manual");
            return r.pathParse(t, this.options.state.currPage + 1)
         } else if (t.match(/^(.*?)\b2\b(.*?$)/)) {
            t = t.match(/^(.*?)\b2\b(.*?$)/).slice(1)
         } else if (t.match(/^(.*?)2(.*?$)/)) {
            if (t.match(/^(.*?page=)2(\/.*|$)/)) {
               t = t.match(/^(.*?page=)2(\/.*|$)/).slice(1);
               return t
            }
            t = t.match(/^(.*?)2(.*?$)/).slice(1)
         } else {
            if (t.match(/^(.*?page=)1(\/.*|$)/)) {
               t = t.match(/^(.*?page=)1(\/.*|$)/).slice(1);
               return t
            } else {
               this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");
               r.state.isInvalidPage = true
            }
         }
         this._debug("determinePath", t);
         return t
      }, _error: function(t) {
         var r = this.options;
         if (!!r.behavior && this["_error_" + r.behavior] !== n) {
            this["_error_" + r.behavior].call(this, t);
            return
         }
         if (t !== "destroy" && t !== "end") {
            t = "unknown"
         }
         this._debug("Error", t);
         if (t === "end" || r.state.isBeyondMaxPage) {
            this._showdonemsg()
         }
         r.state.isDone = true;
         r.state.currPage = 1;
         r.state.isPaused = false;
         r.state.isBeyondMaxPage = false;
         this._binding("unbind")
      }, _loadcallback: function(i, s, o) {
         var u = this.options, a = this.options.callback, f = u.state.isDone ? "done" : !u.appendCallback ? "no-append" : "append", l;
         if (!!u.behavior && this["_loadcallback_" + u.behavior] !== n) {
            this["_loadcallback_" + u.behavior].call(this, i, s);
            return
         }
         switch (f) {
            case"done":
               this._showdonemsg();
               return false;
            case"no-append":
               if (u.dataType === "html") {
                  s = "<div>" + s + "</div>";
                  s = t(s).find(u.itemSelector)
               }
               break;
            case"append":
               var c = i.children();
               if (c.length === 0) {
                  return this._error("end")
               }
               l = document.createDocumentFragment();
               while (i[0].firstChild) {
                  l.appendChild(i[0].firstChild)
               }
               this._debug("contentSelector", t(u.contentSelector)[0]);
               t(u.contentSelector)[0].appendChild(l);
               s = c.get();
               break
         }
         u.loading.finished.call(t(u.contentSelector)[0], u);
         if (u.animate) {
            var h = t(e).scrollTop() + t(u.loading.msg).height() + u.extraScrollPx + "px";
            t("html,body").animate({scrollTop: h}, 800, function() {
               u.state.isDuringAjax = false
            })
         }
         if (!u.animate) {
            u.state.isDuringAjax = false
         }
         a(this, s, o);
         if (u.prefill) {
            this._prefill()
         }
      }, _nearbottom: function() {
         var i = this.options, s = 0 + t(document).height() - i.binder.scrollTop() - t(e).height();
         if (!!i.behavior && this["_nearbottom_" + i.behavior] !== n) {
            return this["_nearbottom_" + i.behavior].call(this)
         }
         this._debug("math:", s, i.pixelsFromNavToBottom);
         return s - i.bufferPx < i.pixelsFromNavToBottom
      }, _pausing: function(t) {
         var r = this.options;
         if (!!r.behavior && this["_pausing_" + r.behavior] !== n) {
            this["_pausing_" + r.behavior].call(this, t);
            return
         }
         if (t !== "pause" && t !== "resume" && t !== null) {
            this._debug("Invalid argument. Toggling pause value instead")
         }
         t = t && (t === "pause" || t === "resume") ? t : "toggle";
         switch (t) {
            case"pause":
               r.state.isPaused = true;
               break;
            case"resume":
               r.state.isPaused = false;
               break;
            case"toggle":
               r.state.isPaused = !r.state.isPaused;
               break
         }
         this._debug("Paused", r.state.isPaused);
         return false
      }, _setup: function() {
         var t = this.options;
         if (!!t.behavior && this["_setup_" + t.behavior] !== n) {
            this["_setup_" + t.behavior].call(this);
            return
         }
         this._binding("bind");
         return false
      }, _showdonemsg: function() {
         var r = this.options;
         if (!!r.behavior && this["_showdonemsg_" + r.behavior] !== n) {
            this["_showdonemsg_" + r.behavior].call(this);
            return
         }
         r.loading.msg.find("img").hide().parent().find("div").html(r.loading.finishedMsg).animate({opacity: 1}, 2e3, function() {
            t(this).parent().fadeOut(r.loading.speed)
         });
         r.errorCallback.call(t(r.contentSelector)[0], "done")
      }, _validate: function(n) {
         for (var r in n) {
            if (r.indexOf && r.indexOf("Selector") > -1 && t(n[r]).length === 0) {
               this._debug("Your " + r + " found no elements.");
               return false
            }
         }
         return true
      }, bind: function() {
         this._binding("bind")
      }, destroy: function() {
         this.options.state.isDestroyed = true;
         this.options.loading.finished();
         return this._error("destroy")
      }, pause: function() {
         this._pausing("pause")
      }, resume: function() {
         this._pausing("resume")
      }, beginAjax: function(r) {
         var i = this, s = r.path, o, u, a, f;
         r.state.currPage++;
         if (r.maxPage != n && r.state.currPage > r.maxPage) {
            r.state.isBeyondMaxPage = true;
            this.destroy();
            return
         }
         o = t(r.contentSelector).is("table, tbody") ? t("<tbody/>") : t("<div/>");
         u = typeof s === "function" ? s(r.state.currPage) : s.join(r.state.currPage);
         i._debug("heading into ajax", u);
         a = r.dataType === "html" || r.dataType === "json" ? r.dataType : "html+callback";
         if (r.appendCallback && r.dataType === "html") {
            a += "+callback"
         }
         switch (a) {
            case"html+callback":
               i._debug("Using HTML via .load() method");
               o.load(u + " " + r.itemSelector, n, function(t) {
                  i._loadcallback(o, t, u)
               });
               break;
            case"html":
               i._debug("Using " + a.toUpperCase() + " via $.ajax() method");
               t.ajax({url: u, dataType: r.dataType, complete: function(t, n) {
                     f = typeof t.isResolved !== "undefined" ? t.isResolved() : n === "success" || n === "notmodified";
                     if (f) {
                        i._loadcallback(o, t.responseText, u)
                     } else {
                        i._error("end")
                     }
                  }});
               break;
            case"json":
               i._debug("Using " + a.toUpperCase() + " via $.ajax() method");
               t.ajax({dataType: "json", type: "GET", url: u, success: function(e, t, s) {
                     f = typeof s.isResolved !== "undefined" ? s.isResolved() : t === "success" || t === "notmodified";
                     if (r.appendCallback) {
                        if (r.template !== n) {
                           var a = r.template(e);
                           o.append(a);
                           if (f) {
                              i._loadcallback(o, a)
                           } else {
                              i._error("end")
                           }
                        } else {
                           i._debug("template must be defined.");
                           i._error("end")
                        }
                     } else {
                        if (f) {
                           i._loadcallback(o, e, u)
                        } else {
                           i._error("end")
                        }
                     }
                  }, error: function() {
                     i._debug("JSON ajax request failed.");
                     i._error("end")
                  }});
               break
            }
      }, retrieve: function(r) {
         r = r || null;
         var i = this, s = i.options;
         if (!!s.behavior && this["retrieve_" + s.behavior] !== n) {
            this["retrieve_" + s.behavior].call(this, r);
            return
         }
         if (s.state.isDestroyed) {
            this._debug("Instance is destroyed");
            return false
         }
         s.state.isDuringAjax = true;
         s.loading.start.call(t(s.contentSelector)[0], s)
      }, scroll: function() {
         var t = this.options, r = t.state;
         if (!!t.behavior && this["scroll_" + t.behavior] !== n) {
            this["scroll_" + t.behavior].call(this);
            return
         }
         if (r.isDuringAjax || r.isInvalidPage || r.isDone || r.isDestroyed || r.isPaused) {
            return
         }
         if (!this._nearbottom()) {
            return
         }
         this.retrieve()
      }, toggle: function() {
         this._pausing()
      }, unbind: function() {
         this._binding("unbind")
      }, update: function(n) {
         if (t.isPlainObject(n)) {
            this.options = t.extend(true, this.options, n)
         }
      }};
   t.fn.infinitescroll = function(n, r) {
      var i = typeof n;
      switch (i) {
         case"string":
            var s = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
               var e = t.data(this, "infinitescroll");
               if (!e) {
                  return false
               }
               if (!t.isFunction(e[n]) || n.charAt(0) === "_") {
                  return false
               }
               e[n].apply(e, s)
            });
            break;
         case"object":
            this.each(function() {
               var e = t.data(this, "infinitescroll");
               if (e) {
                  e.update(n)
               } else {
                  e = new t.infinitescroll(n, r, this);
                  if (!e.failed) {
                     t.data(this, "infinitescroll", e)
                  }
               }
            });
            break
      }
      return this
   };
   var r = t.event, i;
   r.special.smartscroll = {setup: function() {
         t(this).bind("scroll", r.special.smartscroll.handler)
      }, teardown: function() {
         t(this).unbind("scroll", r.special.smartscroll.handler)
      }, handler: function(e, n) {
         var r = this, s = arguments;
         e.type = "smartscroll";
         if (i) {
            clearTimeout(i)
         }
         i = setTimeout(function() {
            t(r).trigger("smartscroll", s)
         }, n === "execAsap" ? 0 : 100)
      }};
   t.fn.smartscroll = function(e) {
      return e ? this.bind("smartscroll", e) : this.trigger("smartscroll", ["execAsap"])
   }
})(window, jQuery);




/*! jQuery UI - v1.10.3 - 2013-10-16
 * https://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.tabs.js, jquery.ui.effect.js, jquery.ui.effect-fade.js
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */

(function(e, t) {
   function i(t, i) {
      var s, a, o, r = t.nodeName.toLowerCase();
      return"area" === r ? (s = t.parentNode, a = s.name, t.href && a && "map" === s.nodeName.toLowerCase() ? (o = e("img[usemap=#" + a + "]")[0], !!o && n(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || i : i) && n(t)
   }
   function n(t) {
      return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
         return"hidden" === e.css(this, "visibility")
      }).length
   }
   var s = 0, a = /^ui-id-\d+$/;
   e.ui = e.ui || {}, e.extend(e.ui, {version: "1.10.3", keyCode: {BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38}}), e.fn.extend({focus: function(t) {
         return function(i, n) {
            return"number" == typeof i ? this.each(function() {
               var t = this;
               setTimeout(function() {
                  e(t).focus(), n && n.call(t)
               }, i)
            }) : t.apply(this, arguments)
         }
      }(e.fn.focus), scrollParent: function() {
         var t;
         return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
            return/(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
         }).eq(0) : this.parents().filter(function() {
            return/(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
         }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
      }, zIndex: function(i) {
         if (i !== t)
            return this.css("zIndex", i);
         if (this.length)
            for (var n, s, a = e(this[0]); a.length && a[0] !== document; ) {
               if (n = a.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(a.css("zIndex"), 10), !isNaN(s) && 0 !== s))
                  return s;
               a = a.parent()
            }
         return 0
      }, uniqueId: function() {
         return this.each(function() {
            this.id || (this.id = "ui-id-" + ++s)
         })
      }, removeUniqueId: function() {
         return this.each(function() {
            a.test(this.id) && e(this).removeAttr("id")
         })
      }}), e.extend(e.expr[":"], {data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
         return function(i) {
            return!!e.data(i, t)
         }
      }) : function(t, i, n) {
         return!!e.data(t, n[3])
      }, focusable: function(t) {
         return i(t, !isNaN(e.attr(t, "tabindex")))
      }, tabbable: function(t) {
         var n = e.attr(t, "tabindex"), s = isNaN(n);
         return(s || n >= 0) && i(t, !s)
      }}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(i, n) {
      function s(t, i, n, s) {
         return e.each(a, function() {
            i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
         }), i
      }
      var a = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"], o = n.toLowerCase(), r = {innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight};
      e.fn["inner" + n] = function(i) {
         return i === t ? r["inner" + n].call(this) : this.each(function() {
            e(this).css(o, s(this, i) + "px")
         })
      }, e.fn["outer" + n] = function(t, i) {
         return"number" != typeof t ? r["outer" + n].call(this, t) : this.each(function() {
            e(this).css(o, s(this, t, !0, i) + "px")
         })
      }
   }), e.fn.addBack || (e.fn.addBack = function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
   }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
      return function(i) {
         return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
      }
   }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart"in document.createElement("div"), e.fn.extend({disableSelection: function() {
         return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
            e.preventDefault()
         })
      }, enableSelection: function() {
         return this.unbind(".ui-disableSelection")
      }}), e.extend(e.ui, {plugin: {add: function(t, i, n) {
            var s, a = e.ui[t].prototype;
            for (s in n)
               a.plugins[s] = a.plugins[s] || [], a.plugins[s].push([i, n[s]])
         }, call: function(e, t, i) {
            var n, s = e.plugins[t];
            if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
               for (n = 0; s.length > n; n++)
                  e.options[s[n][0]] && s[n][1].apply(e.element, i)
         }}, hasScroll: function(t, i) {
         if ("hidden" === e(t).css("overflow"))
            return!1;
         var n = i && "left" === i ? "scrollLeft" : "scrollTop", s = !1;
         return t[n] > 0 ? !0 : (t[n] = 1, s = t[n] > 0, t[n] = 0, s)
      }})
})(jQuery);
(function(t, e) {
   var i = 0, s = Array.prototype.slice, n = t.cleanData;
   t.cleanData = function(e) {
      for (var i, s = 0; null != (i = e[s]); s++)
         try {
            t(i).triggerHandler("remove")
         } catch (o) {
         }
      n(e)
   }, t.widget = function(i, s, n) {
      var o, a, r, h, l = {}, c = i.split(".")[0];
      i = i.split(".")[1], o = c + "-" + i, n || (n = s, s = t.Widget), t.expr[":"][o.toLowerCase()] = function(e) {
         return!!t.data(e, o)
      }, t[c] = t[c] || {}, a = t[c][i], r = t[c][i] = function(t, i) {
         return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new r(t, i)
      }, t.extend(r, a, {version: n.version, _proto: t.extend({}, n), _childConstructors: []}), h = new s, h.options = t.widget.extend({}, h.options), t.each(n, function(i, n) {
         return t.isFunction(n) ? (l[i] = function() {
            var t = function() {
               return s.prototype[i].apply(this, arguments)
            }, e = function(t) {
               return s.prototype[i].apply(this, t)
            };
            return function() {
               var i, s = this._super, o = this._superApply;
               return this._super = t, this._superApply = e, i = n.apply(this, arguments), this._super = s, this._superApply = o, i
            }
         }(), e) : (l[i] = n, e)
      }), r.prototype = t.widget.extend(h, {widgetEventPrefix: a ? h.widgetEventPrefix : i}, l, {constructor: r, namespace: c, widgetName: i, widgetFullName: o}), a ? (t.each(a._childConstructors, function(e, i) {
         var s = i.prototype;
         t.widget(s.namespace + "." + s.widgetName, r, i._proto)
      }), delete a._childConstructors) : s._childConstructors.push(r), t.widget.bridge(i, r)
   }, t.widget.extend = function(i) {
      for (var n, o, a = s.call(arguments, 1), r = 0, h = a.length; h > r; r++)
         for (n in a[r])
            o = a[r][n], a[r].hasOwnProperty(n) && o !== e && (i[n] = t.isPlainObject(o) ? t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], o) : t.widget.extend({}, o) : o);
      return i
   }, t.widget.bridge = function(i, n) {
      var o = n.prototype.widgetFullName || i;
      t.fn[i] = function(a) {
         var r = "string" == typeof a, h = s.call(arguments, 1), l = this;
         return a = !r && h.length ? t.widget.extend.apply(null, [a].concat(h)) : a, r ? this.each(function() {
            var s, n = t.data(this, o);
            return n ? t.isFunction(n[a]) && "_" !== a.charAt(0) ? (s = n[a].apply(n, h), s !== n && s !== e ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : e) : t.error("no such method '" + a + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + a + "'")
         }) : this.each(function() {
            var e = t.data(this, o);
            e ? e.option(a || {})._init() : t.data(this, o, new n(a, this))
         }), l
      }
   }, t.Widget = function() {
   }, t.Widget._childConstructors = [], t.Widget.prototype = {widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: {disabled: !1, create: null}, _createWidget: function(e, s) {
         s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {remove: function(t) {
               t.target === s && this.destroy()
            }}), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
      }, _getCreateOptions: t.noop, _getCreateEventData: t.noop, _create: t.noop, _init: t.noop, destroy: function() {
         this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
      }, _destroy: t.noop, widget: function() {
         return this.element
      }, option: function(i, s) {
         var n, o, a, r = i;
         if (0 === arguments.length)
            return t.widget.extend({}, this.options);
         if ("string" == typeof i)
            if (r = {}, n = i.split("."), i = n.shift(), n.length) {
               for (o = r[i] = t.widget.extend({}, this.options[i]), a = 0; n.length - 1 > a; a++)
                  o[n[a]] = o[n[a]] || {}, o = o[n[a]];
               if (i = n.pop(), s === e)
                  return o[i] === e ? null : o[i];
               o[i] = s
            } else {
               if (s === e)
                  return this.options[i] === e ? null : this.options[i];
               r[i] = s
            }
         return this._setOptions(r), this
      }, _setOptions: function(t) {
         var e;
         for (e in t)
            this._setOption(e, t[e]);
         return this
      }, _setOption: function(t, e) {
         return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
      }, enable: function() {
         return this._setOption("disabled", !1)
      }, disable: function() {
         return this._setOption("disabled", !0)
      }, _on: function(i, s, n) {
         var o, a = this;
         "boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = o = t(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, o = this.widget()), t.each(n, function(n, r) {
            function h() {
               return i || a.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : e
            }
            "string" != typeof r && (h.guid = r.guid = r.guid || h.guid || t.guid++);
            var l = n.match(/^(\w+)\s*(.*)$/), c = l[1] + a.eventNamespace, u = l[2];
            u ? o.delegate(u, c, h) : s.bind(c, h)
         })
      }, _off: function(t, e) {
         e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
      }, _delay: function(t, e) {
         function i() {
            return("string" == typeof t ? s[t] : t).apply(s, arguments)
         }
         var s = this;
         return setTimeout(i, e || 0)
      }, _hoverable: function(e) {
         this.hoverable = this.hoverable.add(e), this._on(e, {mouseenter: function(e) {
               t(e.currentTarget).addClass("ui-state-hover")
            }, mouseleave: function(e) {
               t(e.currentTarget).removeClass("ui-state-hover")
            }})
      }, _focusable: function(e) {
         this.focusable = this.focusable.add(e), this._on(e, {focusin: function(e) {
               t(e.currentTarget).addClass("ui-state-focus")
            }, focusout: function(e) {
               t(e.currentTarget).removeClass("ui-state-focus")
            }})
      }, _trigger: function(e, i, s) {
         var n, o, a = this.options[e];
         if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
            for (n in o)
               n in i || (i[n] = o[n]);
         return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
      }}, t.each({show: "fadeIn", hide: "fadeOut"}, function(e, i) {
      t.Widget.prototype["_" + e] = function(s, n, o) {
         "string" == typeof n && (n = {effect: n});
         var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
         n = n || {}, "number" == typeof n && (n = {duration: n}), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
            t(this)[e](), o && o.call(s[0]), i()
         })
      }
   })
})(jQuery);
(function(t) {
   var e = !1;
   t(document).mouseup(function() {
      e = !1
   }), t.widget("ui.mouse", {version: "1.10.3", options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0}, _mouseInit: function() {
         var e = this;
         this.element.bind("mousedown." + this.widgetName, function(t) {
            return e._mouseDown(t)
         }).bind("click." + this.widgetName, function(i) {
            return!0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
         }), this.started = !1
      }, _mouseDestroy: function() {
         this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
      }, _mouseDown: function(i) {
         if (!e) {
            this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
            var s = this, n = 1 === i.which, a = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
            return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
               s.mouseDelayMet = !0
            }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
               return s._mouseMove(t)
            }, this._mouseUpDelegate = function(t) {
               return s._mouseUp(t)
            }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
         }
      }, _mouseMove: function(e) {
         return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
      }, _mouseUp: function(e) {
         return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
      }, _mouseDistanceMet: function(t) {
         return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
      }, _mouseDelayMet: function() {
         return this.mouseDelayMet
      }, _mouseStart: function() {
      }, _mouseDrag: function() {
      }, _mouseStop: function() {
      }, _mouseCapture: function() {
         return!0
      }})
})(jQuery);
(function(t, e) {
   function i(t, e, i) {
      return[parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
   }
   function s(e, i) {
      return parseInt(t.css(e, i), 10) || 0
   }
   function n(e) {
      var i = e[0];
      return 9 === i.nodeType ? {width: e.width(), height: e.height(), offset: {top: 0, left: 0}} : t.isWindow(i) ? {width: e.width(), height: e.height(), offset: {top: e.scrollTop(), left: e.scrollLeft()}} : i.preventDefault ? {width: 0, height: 0, offset: {top: i.pageY, left: i.pageX}} : {width: e.outerWidth(), height: e.outerHeight(), offset: e.offset()}
   }
   t.ui = t.ui || {};
   var a, o = Math.max, r = Math.abs, l = Math.round, h = /left|center|right/, c = /top|center|bottom/, u = /[\+\-]\d+(\.[\d]+)?%?/, d = /^\w+/, p = /%$/, f = t.fn.position;
   t.position = {scrollbarWidth: function() {
         if (a !== e)
            return a;
         var i, s, n = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = n.children()[0];
         return t("body").append(n), i = o.offsetWidth, n.css("overflow", "scroll"), s = o.offsetWidth, i === s && (s = n[0].clientWidth), n.remove(), a = i - s
      }, getScrollInfo: function(e) {
         var i = e.isWindow ? "" : e.element.css("overflow-x"), s = e.isWindow ? "" : e.element.css("overflow-y"), n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth, a = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
         return{width: a ? t.position.scrollbarWidth() : 0, height: n ? t.position.scrollbarWidth() : 0}
      }, getWithinInfo: function(e) {
         var i = t(e || window), s = t.isWindow(i[0]);
         return{element: i, isWindow: s, offset: i.offset() || {left: 0, top: 0}, scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: s ? i.width() : i.outerWidth(), height: s ? i.height() : i.outerHeight()}
      }}, t.fn.position = function(e) {
      if (!e || !e.of)
         return f.apply(this, arguments);
      e = t.extend({}, e);
      var a, p, g, m, v, _, b = t(e.of), y = t.position.getWithinInfo(e.within), k = t.position.getScrollInfo(y), w = (e.collision || "flip").split(" "), D = {};
      return _ = n(b), b[0].preventDefault && (e.at = "left top"), p = _.width, g = _.height, m = _.offset, v = t.extend({}, m), t.each(["my", "at"], function() {
         var t, i, s = (e[this] || "").split(" ");
         1 === s.length && (s = h.test(s[0]) ? s.concat(["center"]) : c.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = h.test(s[0]) ? s[0] : "center", s[1] = c.test(s[1]) ? s[1] : "center", t = u.exec(s[0]), i = u.exec(s[1]), D[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]
      }), 1 === w.length && (w[1] = w[0]), "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1] ? v.top += g : "center" === e.at[1] && (v.top += g / 2), a = i(D.at, p, g), v.left += a[0], v.top += a[1], this.each(function() {
         var n, h, c = t(this), u = c.outerWidth(), d = c.outerHeight(), f = s(this, "marginLeft"), _ = s(this, "marginTop"), x = u + f + s(this, "marginRight") + k.width, C = d + _ + s(this, "marginBottom") + k.height, M = t.extend({}, v), T = i(D.my, c.outerWidth(), c.outerHeight());
         "right" === e.my[0] ? M.left -= u : "center" === e.my[0] && (M.left -= u / 2), "bottom" === e.my[1] ? M.top -= d : "center" === e.my[1] && (M.top -= d / 2), M.left += T[0], M.top += T[1], t.support.offsetFractions || (M.left = l(M.left), M.top = l(M.top)), n = {marginLeft: f, marginTop: _}, t.each(["left", "top"], function(i, s) {
            t.ui.position[w[i]] && t.ui.position[w[i]][s](M, {targetWidth: p, targetHeight: g, elemWidth: u, elemHeight: d, collisionPosition: n, collisionWidth: x, collisionHeight: C, offset: [a[0] + T[0], a[1] + T[1]], my: e.my, at: e.at, within: y, elem: c})
         }), e.using && (h = function(t) {
            var i = m.left - M.left, s = i + p - u, n = m.top - M.top, a = n + g - d, l = {target: {element: b, left: m.left, top: m.top, width: p, height: g}, element: {element: c, left: M.left, top: M.top, width: u, height: d}, horizontal: 0 > s ? "left" : i > 0 ? "right" : "center", vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle"};
            u > p && p > r(i + s) && (l.horizontal = "center"), d > g && g > r(n + a) && (l.vertical = "middle"), l.important = o(r(i), r(s)) > o(r(n), r(a)) ? "horizontal" : "vertical", e.using.call(this, t, l)
         }), c.offset(t.extend(M, {using: h}))
      })
   }, t.ui.position = {fit: {left: function(t, e) {
            var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width, r = t.left - e.collisionPosition.marginLeft, l = n - r, h = r + e.collisionWidth - a - n;
            e.collisionWidth > a ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - a - n, t.left += l - i) : t.left = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionWidth : n : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - r, t.left)
         }, top: function(t, e) {
            var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = e.within.height, r = t.top - e.collisionPosition.marginTop, l = n - r, h = r + e.collisionHeight - a - n;
            e.collisionHeight > a ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - a - n, t.top += l - i) : t.top = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionHeight : n : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - r, t.top)
         }}, flip: {left: function(t, e) {
            var i, s, n = e.within, a = n.offset.left + n.scrollLeft, o = n.width, l = n.isWindow ? n.scrollLeft : n.offset.left, h = t.left - e.collisionPosition.marginLeft, c = h - l, u = h + e.collisionWidth - o - l, d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
            0 > c ? (i = t.left + d + p + f + e.collisionWidth - o - a, (0 > i || r(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - l, (s > 0 || u > r(s)) && (t.left += d + p + f))
         }, top: function(t, e) {
            var i, s, n = e.within, a = n.offset.top + n.scrollTop, o = n.height, l = n.isWindow ? n.scrollTop : n.offset.top, h = t.top - e.collisionPosition.marginTop, c = h - l, u = h + e.collisionHeight - o - l, d = "top" === e.my[1], p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, g = -2 * e.offset[1];
            0 > c ? (s = t.top + p + f + g + e.collisionHeight - o - a, t.top + p + f + g > c && (0 > s || r(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, t.top + p + f + g > u && (i > 0 || u > r(i)) && (t.top += p + f + g))
         }}, flipfit: {left: function() {
            t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
         }, top: function() {
            t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
         }}}, function() {
      var e, i, s, n, a, o = document.getElementsByTagName("body")[0], r = document.createElement("div");
      e = document.createElement(o ? "div" : "body"), s = {visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none"}, o && t.extend(s, {position: "absolute", left: "-1000px", top: "-1000px"});
      for (a in s)
         e.style[a] = s[a];
      e.appendChild(r), i = o || document.documentElement, i.insertBefore(e, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", n = t(r).offset().left, t.support.offsetFractions = n > 10 && 11 > n, e.innerHTML = "", i.removeChild(e)
   }()
})(jQuery);
(function(t, e) {
   function i() {
      return++n
   }
   function s(t) {
      return t.hash.length > 1 && decodeURIComponent(t.href.replace(a, "")) === decodeURIComponent(location.href.replace(a, ""))
   }
   var n = 0, a = /#.*$/;
   t.widget("ui.tabs", {version: "1.10.3", delay: 300, options: {active: null, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null}, _create: function() {
         var e = this, i = this.options;
         this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(e) {
            t(this).is(".ui-state-disabled") && e.preventDefault()
         }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
            t(this).closest("li").is(".ui-state-disabled") && this.blur()
         }), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
            return e.tabs.index(t)
         }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
      }, _initialActive: function() {
         var i = this.options.active, s = this.options.collapsible, n = location.hash.substring(1);
         return null === i && (n && this.tabs.each(function(s, a) {
            return t(a).attr("aria-controls") === n ? (i = s, !1) : e
         }), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = this.tabs.length ? 0 : !1)), i !== !1 && (i = this.tabs.index(this.tabs.eq(i)), -1 === i && (i = s ? !1 : 0)), !s && i === !1 && this.anchors.length && (i = 0), i
      }, _getCreateEventData: function() {
         return{tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t()}
      }, _tabKeydown: function(i) {
         var s = t(this.document[0].activeElement).closest("li"), n = this.tabs.index(s), a = !0;
         if (!this._handlePageNav(i)) {
            switch (i.keyCode) {
               case t.ui.keyCode.RIGHT:
               case t.ui.keyCode.DOWN:
                  n++;
                  break;
               case t.ui.keyCode.UP:
               case t.ui.keyCode.LEFT:
                  a = !1, n--;
                  break;
               case t.ui.keyCode.END:
                  n = this.anchors.length - 1;
                  break;
               case t.ui.keyCode.HOME:
                  n = 0;
                  break;
               case t.ui.keyCode.SPACE:
                  return i.preventDefault(), clearTimeout(this.activating), this._activate(n), e;
               case t.ui.keyCode.ENTER:
                  return i.preventDefault(), clearTimeout(this.activating), this._activate(n === this.options.active ? !1 : n), e;
               default:
                  return
            }
            i.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, a), i.ctrlKey || (s.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function() {
               this.option("active", n)
            }, this.delay))
         }
      }, _panelKeydown: function(e) {
         this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
      }, _handlePageNav: function(i) {
         return i.altKey && i.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : e
      }, _findNextTab: function(e, i) {
         function s() {
            return e > n && (e = 0), 0 > e && (e = n), e
         }
         for (var n = this.tabs.length - 1; - 1 !== t.inArray(s(), this.options.disabled); )
            e = i ? e + 1 : e - 1;
         return e
      }, _focusNextTab: function(t, e) {
         return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
      }, _setOption: function(t, i) {
         return"active" === t ? (this._activate(i), e) : "disabled" === t ? (this._setupDisabled(i), e) : (this._super(t, i), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", i), i || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(i), "heightStyle" === t && this._setupHeightStyle(i), e)
      }, _tabId: function(t) {
         return t.attr("aria-controls") || "ui-tabs-" + i()
      }, _sanitizeSelector: function(t) {
         return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
      }, refresh: function() {
         var e = this.options, i = this.tablist.children(":has(a[href])");
         e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
            return i.index(t)
         }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
      }, _refresh: function() {
         this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({"aria-selected": "false", tabIndex: -1}), this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded": "false", "aria-hidden": "true"}), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected": "true", tabIndex: 0}), this._getPanelForTab(this.active).show().attr({"aria-expanded": "true", "aria-hidden": "false"})) : this.tabs.eq(0).attr("tabIndex", 0)
      }, _processTabs: function() {
         var e = this;
         this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role: "tab", tabIndex: -1}), this.anchors = this.tabs.map(function() {
            return t("a", this)[0]
         }).addClass("ui-tabs-anchor").attr({role: "presentation", tabIndex: -1}), this.panels = t(), this.anchors.each(function(i, n) {
            var a, o, r, h = t(n).uniqueId().attr("id"), l = t(n).closest("li"), c = l.attr("aria-controls");
            s(n) ? (a = n.hash, o = e.element.find(e._sanitizeSelector(a))) : (r = e._tabId(l), a = "#" + r, o = e.element.find(a), o.length || (o = e._createPanel(r), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), c && l.data("ui-tabs-aria-controls", c), l.attr({"aria-controls": a.substring(1), "aria-labelledby": h}), o.attr("aria-labelledby", h)
         }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
      }, _getList: function() {
         return this.element.find("ol,ul").eq(0)
      }, _createPanel: function(e) {
         return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
      }, _setupDisabled: function(e) {
         t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
         for (var i, s = 0; i = this.tabs[s]; s++)
            e === !0 || -1 !== t.inArray(s, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
         this.options.disabled = e
      }, _setupEvents: function(e) {
         var i = {click: function(t) {
               t.preventDefault()
            }};
         e && t.each(e.split(" "), function(t, e) {
            i[e] = "_eventHandler"
         }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs)
      }, _setupHeightStyle: function(e) {
         var i, s = this.element.parent();
         "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
            var e = t(this), s = e.css("position");
            "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
         }), this.element.children().not(this.panels).each(function() {
            i -= t(this).outerHeight(!0)
         }), this.panels.each(function() {
            t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
         }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
            i = Math.max(i, t(this).height("").height())
         }).height(i))
      }, _eventHandler: function(e) {
         var i = this.options, s = this.active, n = t(e.currentTarget), a = n.closest("li"), o = a[0] === s[0], r = o && i.collapsible, h = r ? t() : this._getPanelForTab(a), l = s.length ? this._getPanelForTab(s) : t(), c = {oldTab: s, oldPanel: l, newTab: r ? t() : a, newPanel: h};
         e.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(a), this.active = o ? t() : a, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(a), e), this._toggle(e, c))
      }, _toggle: function(e, i) {
         function s() {
            a.running = !1, a._trigger("activate", e, i)
         }
         function n() {
            i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s())
         }
         var a = this, o = i.newPanel, r = i.oldPanel;
         this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
            i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
         }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr({"aria-expanded": "false", "aria-hidden": "true"}), i.oldTab.attr("aria-selected", "false"), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function() {
            return 0 === t(this).attr("tabIndex")
         }).attr("tabIndex", -1), o.attr({"aria-expanded": "true", "aria-hidden": "false"}), i.newTab.attr({"aria-selected": "true", tabIndex: 0})
      }, _activate: function(e) {
         var i, s = this._findActive(e);
         s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({target: i, currentTarget: i, preventDefault: t.noop}))
      }, _findActive: function(e) {
         return e === !1 ? t() : this.tabs.eq(e)
      }, _getIndex: function(t) {
         return"string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
      }, _destroy: function() {
         this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
            t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
         }), this.tabs.each(function() {
            var e = t(this), i = e.data("ui-tabs-aria-controls");
            i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
         }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
      }, enable: function(i) {
         var s = this.options.disabled;
         s !== !1 && (i === e ? s = !1 : (i = this._getIndex(i), s = t.isArray(s) ? t.map(s, function(t) {
            return t !== i ? t : null
         }) : t.map(this.tabs, function(t, e) {
            return e !== i ? e : null
         })), this._setupDisabled(s))
      }, disable: function(i) {
         var s = this.options.disabled;
         if (s !== !0) {
            if (i === e)
               s = !0;
            else {
               if (i = this._getIndex(i), -1 !== t.inArray(i, s))
                  return;
               s = t.isArray(s) ? t.merge([i], s).sort() : [i]
            }
            this._setupDisabled(s)
         }
      }, load: function(e, i) {
         e = this._getIndex(e);
         var n = this, a = this.tabs.eq(e), o = a.find(".ui-tabs-anchor"), r = this._getPanelForTab(a), h = {tab: a, panel: r};
         s(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, h)), this.xhr && "canceled" !== this.xhr.statusText && (a.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.success(function(t) {
            setTimeout(function() {
               r.html(t), n._trigger("load", i, h)
            }, 1)
         }).complete(function(t, e) {
            setTimeout(function() {
               "abort" === e && n.panels.stop(!1, !0), a.removeClass("ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
            }, 1)
         })))
      }, _ajaxSettings: function(e, i, s) {
         var n = this;
         return{url: e.attr("href"), beforeSend: function(e, a) {
               return n._trigger("beforeLoad", i, t.extend({jqXHR: e, ajaxSettings: a}, s))
            }}
      }, _getPanelForTab: function(e) {
         var i = t(e).attr("aria-controls");
         return this.element.find(this._sanitizeSelector("#" + i))
      }})
})(jQuery);
(function(t, e) {
   var i = "ui-effects-";
   t.effects = {effect: {}}, function(t, e) {
      function i(t, e, i) {
         var s = u[e.type] || {};
         return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
      }
      function s(i) {
         var s = h(), n = s._rgba = [];
         return i = i.toLowerCase(), f(l, function(t, a) {
            var o, r = a.re.exec(i), l = r && a.parse(r), h = a.space || "rgba";
            return l ? (o = s[h](l), s[c[h].cache] = o[c[h].cache], n = s._rgba = o._rgba, !1) : e
         }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, a.transparent), s) : a[i]
      }
      function n(t, e, i) {
         return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
      }
      var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", r = /^([\-+])=\s*(\d+\.?\d*)/, l = [{re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(t) {
               return[t[1], t[2], t[3], t[4]]
            }}, {re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(t) {
               return[2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
            }}, {re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function(t) {
               return[parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
            }}, {re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function(t) {
               return[parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
            }}, {re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function(t) {
               return[t[1], t[2] / 100, t[3] / 100, t[4]]
            }}], h = t.Color = function(e, i, s, n) {
         return new t.Color.fn.parse(e, i, s, n)
      }, c = {rgba: {props: {red: {idx: 0, type: "byte"}, green: {idx: 1, type: "byte"}, blue: {idx: 2, type: "byte"}}}, hsla: {props: {hue: {idx: 0, type: "degrees"}, saturation: {idx: 1, type: "percent"}, lightness: {idx: 2, type: "percent"}}}}, u = {"byte": {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, d = h.support = {}, p = t("<p>")[0], f = t.each;
      p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function(t, e) {
         e.cache = "_" + t, e.props.alpha = {idx: 3, type: "percent", def: 1}
      }), h.fn = t.extend(h.prototype, {parse: function(n, o, r, l) {
            if (n === e)
               return this._rgba = [null, null, null, null], this;
            (n.jquery || n.nodeType) && (n = t(n).css(o), o = e);
            var u = this, d = t.type(n), p = this._rgba = [];
            return o !== e && (n = [n, o, r, l], d = "array"), "string" === d ? this.parse(s(n) || a._default) : "array" === d ? (f(c.rgba.props, function(t, e) {
               p[e.idx] = i(n[e.idx], e)
            }), this) : "object" === d ? (n instanceof h ? f(c, function(t, e) {
               n[e.cache] && (u[e.cache] = n[e.cache].slice())
            }) : f(c, function(e, s) {
               var a = s.cache;
               f(s.props, function(t, e) {
                  if (!u[a] && s.to) {
                     if ("alpha" === t || null == n[t])
                        return;
                     u[a] = s.to(u._rgba)
                  }
                  u[a][e.idx] = i(n[t], e, !0)
               }), u[a] && 0 > t.inArray(null, u[a].slice(0, 3)) && (u[a][3] = 1, s.from && (u._rgba = s.from(u[a])))
            }), this) : e
         }, is: function(t) {
            var i = h(t), s = !0, n = this;
            return f(c, function(t, a) {
               var o, r = i[a.cache];
               return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function(t, i) {
                  return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : e
               })), s
            }), s
         }, _space: function() {
            var t = [], e = this;
            return f(c, function(i, s) {
               e[s.cache] && t.push(i)
            }), t.pop()
         }, transition: function(t, e) {
            var s = h(t), n = s._space(), a = c[n], o = 0 === this.alpha() ? h("transparent") : this, r = o[a.cache] || a.to(o._rgba), l = r.slice();
            return s = s[a.cache], f(a.props, function(t, n) {
               var a = n.idx, o = r[a], h = s[a], c = u[n.type] || {};
               null !== h && (null === o ? l[a] = h : (c.mod && (h - o > c.mod / 2 ? o += c.mod : o - h > c.mod / 2 && (o -= c.mod)), l[a] = i((h - o) * e + o, n)))
            }), this[n](l)
         }, blend: function(e) {
            if (1 === this._rgba[3])
               return this;
            var i = this._rgba.slice(), s = i.pop(), n = h(e)._rgba;
            return h(t.map(i, function(t, e) {
               return(1 - s) * n[e] + s * t
            }))
         }, toRgbaString: function() {
            var e = "rgba(", i = t.map(this._rgba, function(t, e) {
               return null == t ? e > 2 ? 1 : 0 : t
            });
            return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
         }, toHslaString: function() {
            var e = "hsla(", i = t.map(this.hsla(), function(t, e) {
               return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
            });
            return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
         }, toHexString: function(e) {
            var i = this._rgba.slice(), s = i.pop();
            return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) {
               return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
            }).join("")
         }, toString: function() {
            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
         }}), h.fn.parse.prototype = h.fn, c.hsla.to = function(t) {
         if (null == t[0] || null == t[1] || null == t[2])
            return[null, null, null, t[3]];
         var e, i, s = t[0] / 255, n = t[1] / 255, a = t[2] / 255, o = t[3], r = Math.max(s, n, a), l = Math.min(s, n, a), h = r - l, c = r + l, u = .5 * c;
         return e = l === r ? 0 : s === r ? 60 * (n - a) / h + 360 : n === r ? 60 * (a - s) / h + 120 : 60 * (s - n) / h + 240, i = 0 === h ? 0 : .5 >= u ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == o ? 1 : o]
      }, c.hsla.from = function(t) {
         if (null == t[0] || null == t[1] || null == t[2])
            return[null, null, null, t[3]];
         var e = t[0] / 360, i = t[1], s = t[2], a = t[3], o = .5 >= s ? s * (1 + i) : s + i - s * i, r = 2 * s - o;
         return[Math.round(255 * n(r, o, e + 1 / 3)), Math.round(255 * n(r, o, e)), Math.round(255 * n(r, o, e - 1 / 3)), a]
      }, f(c, function(s, n) {
         var a = n.props, o = n.cache, l = n.to, c = n.from;
         h.fn[s] = function(s) {
            if (l && !this[o] && (this[o] = l(this._rgba)), s === e)
               return this[o].slice();
            var n, r = t.type(s), u = "array" === r || "object" === r ? s : arguments, d = this[o].slice();
            return f(a, function(t, e) {
               var s = u["object" === r ? t : e.idx];
               null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
            }), c ? (n = h(c(d)), n[o] = d, n) : h(d)
         }, f(a, function(e, i) {
            h.fn[e] || (h.fn[e] = function(n) {
               var a, o = t.type(n), l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s, h = this[l](), c = h[i.idx];
               return"undefined" === o ? c : ("function" === o && (n = n.call(this, c), o = t.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), h[i.idx] = n, this[l](h)))
            })
         })
      }), h.hook = function(e) {
         var i = e.split(" ");
         f(i, function(e, i) {
            t.cssHooks[i] = {set: function(e, n) {
                  var a, o, r = "";
                  if ("transparent" !== n && ("string" !== t.type(n) || (a = s(n)))) {
                     if (n = h(a || n), !d.rgba && 1 !== n._rgba[3]) {
                        for (o = "backgroundColor" === i?e.parentNode:e; ("" === r || "transparent" === r) && o && o.style; )
                           try {
                              r = t.css(o, "backgroundColor"), o = o.parentNode
                           } catch (l) {
                           }
                        n = n.blend(r && "transparent" !== r ? r : "_default")
                     }
                     n = n.toRgbaString()
                  }
                  try {
                     e.style[i] = n
                  } catch (l) {
                  }
               }}, t.fx.step[i] = function(e) {
               e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
            }
         })
      }, h.hook(o), t.cssHooks.borderColor = {expand: function(t) {
            var e = {};
            return f(["Top", "Right", "Bottom", "Left"], function(i, s) {
               e["border" + s + "Color"] = t
            }), e
         }}, a = t.Color.names = {aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff"}
   }(jQuery), function() {
      function i(e) {
         var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, a = {};
         if (n && n.length && n[0] && n[n[0]])
            for (s = n.length; s--; )
               i = n[s], "string" == typeof n[i] && (a[t.camelCase(i)] = n[i]);
         else
            for (i in n)
               "string" == typeof n[i] && (a[i] = n[i]);
         return a
      }
      function s(e, i) {
         var s, n, o = {};
         for (s in i)
            n = i[s], e[s] !== n && (a[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (o[s] = n));
         return o
      }
      var n = ["add", "remove", "toggle"], a = {border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1};
      t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
         t.fx.step[i] = function(t) {
            ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
         }
      }), t.fn.addBack || (t.fn.addBack = function(t) {
         return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
      }), t.effects.animateClass = function(e, a, o, r) {
         var l = t.speed(a, o, r);
         return this.queue(function() {
            var a, o = t(this), r = o.attr("class") || "", h = l.children ? o.find("*").addBack() : o;
            h = h.map(function() {
               var e = t(this);
               return{el: e, start: i(this)}
            }), a = function() {
               t.each(n, function(t, i) {
                  e[i] && o[i + "Class"](e[i])
               })
            }, a(), h = h.map(function() {
               return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this
            }), o.attr("class", r), h = h.map(function() {
               var e = this, i = t.Deferred(), s = t.extend({}, l, {queue: !1, complete: function() {
                     i.resolve(e)
                  }});
               return this.el.animate(this.diff, s), i.promise()
            }), t.when.apply(t, h.get()).done(function() {
               a(), t.each(arguments, function() {
                  var e = this.el;
                  t.each(this.diff, function(t) {
                     e.css(t, "")
                  })
               }), l.complete.call(o[0])
            })
         })
      }, t.fn.extend({addClass: function(e) {
            return function(i, s, n, a) {
               return s ? t.effects.animateClass.call(this, {add: i}, s, n, a) : e.apply(this, arguments)
            }
         }(t.fn.addClass), removeClass: function(e) {
            return function(i, s, n, a) {
               return arguments.length > 1 ? t.effects.animateClass.call(this, {remove: i}, s, n, a) : e.apply(this, arguments)
            }
         }(t.fn.removeClass), toggleClass: function(i) {
            return function(s, n, a, o, r) {
               return"boolean" == typeof n || n === e ? a ? t.effects.animateClass.call(this, n ? {add: s} : {remove: s}, a, o, r) : i.apply(this, arguments) : t.effects.animateClass.call(this, {toggle: s}, n, a, o)
            }
         }(t.fn.toggleClass), switchClass: function(e, i, s, n, a) {
            return t.effects.animateClass.call(this, {add: i, remove: e}, s, n, a)
         }})
   }(), function() {
      function s(e, i, s, n) {
         return t.isPlainObject(e) && (i = e, e = e.effect), e = {effect: e}, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
      }
      function n(e) {
         return!e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
      }
      t.extend(t.effects, {version: "1.10.3", save: function(t, e) {
            for (var s = 0; e.length > s; s++)
               null !== e[s] && t.data(i + e[s], t[0].style[e[s]])
         }, restore: function(t, s) {
            var n, a;
            for (a = 0; s.length > a; a++)
               null !== s[a] && (n = t.data(i + s[a]), n === e && (n = ""), t.css(s[a], n))
         }, setMode: function(t, e) {
            return"toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
         }, getBaseline: function(t, e) {
            var i, s;
            switch (t[0]) {
               case"top":
                  i = 0;
                  break;
               case"middle":
                  i = .5;
                  break;
               case"bottom":
                  i = 1;
                  break;
               default:
                  i = t[0] / e.height
            }
            switch (t[1]) {
               case"left":
                  s = 0;
                  break;
               case"center":
                  s = .5;
                  break;
               case"right":
                  s = 1;
                  break;
               default:
                  s = t[1] / e.width
            }
            return{x: s, y: i}
         }, createWrapper: function(e) {
            if (e.parent().is(".ui-effects-wrapper"))
               return e.parent();
            var i = {width: e.outerWidth(!0), height: e.outerHeight(!0), "float": e.css("float")}, s = t("<div></div>").addClass("ui-effects-wrapper").css({fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0}), n = {width: e.width(), height: e.height()}, a = document.activeElement;
            try {
               a.id
            } catch (o) {
               a = document.body
            }
            return e.wrap(s), (e[0] === a || t.contains(e[0], a)) && t(a).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({position: "relative"}), e.css({position: "relative"})) : (t.extend(i, {position: e.css("position"), zIndex: e.css("z-index")}), t.each(["top", "left", "bottom", "right"], function(t, s) {
               i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
            }), e.css({position: "relative", top: 0, left: 0, right: "auto", bottom: "auto"})), e.css(n), s.css(i).show()
         }, removeWrapper: function(e) {
            var i = document.activeElement;
            return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
         }, setTransition: function(e, i, s, n) {
            return n = n || {}, t.each(i, function(t, i) {
               var a = e.cssUnit(i);
               a[0] > 0 && (n[i] = a[0] * s + a[1])
            }), n
         }}), t.fn.extend({effect: function() {
            function e(e) {
               function s() {
                  t.isFunction(a) && a.call(n[0]), t.isFunction(e) && e()
               }
               var n = t(this), a = i.complete, r = i.mode;
               (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), s()) : o.call(n[0], i, s)
            }
            var i = s.apply(this, arguments), n = i.mode, a = i.queue, o = t.effects.effect[i.effect];
            return t.fx.off || !o ? n ? this[n](i.duration, i.complete) : this.each(function() {
               i.complete && i.complete.call(this)
            }) : a === !1 ? this.each(e) : this.queue(a || "fx", e)
         }, show: function(t) {
            return function(e) {
               if (n(e))
                  return t.apply(this, arguments);
               var i = s.apply(this, arguments);
               return i.mode = "show", this.effect.call(this, i)
            }
         }(t.fn.show), hide: function(t) {
            return function(e) {
               if (n(e))
                  return t.apply(this, arguments);
               var i = s.apply(this, arguments);
               return i.mode = "hide", this.effect.call(this, i)
            }
         }(t.fn.hide), toggle: function(t) {
            return function(e) {
               if (n(e) || "boolean" == typeof e)
                  return t.apply(this, arguments);
               var i = s.apply(this, arguments);
               return i.mode = "toggle", this.effect.call(this, i)
            }
         }(t.fn.toggle), cssUnit: function(e) {
            var i = this.css(e), s = [];
            return t.each(["em", "px", "%", "pt"], function(t, e) {
               i.indexOf(e) > 0 && (s = [parseFloat(i), e])
            }), s
         }})
   }(), function() {
      var e = {};
      t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
         e[i] = function(e) {
            return Math.pow(e, t + 2)
         }
      }), t.extend(e, {Sine: function(t) {
            return 1 - Math.cos(t * Math.PI / 2)
         }, Circ: function(t) {
            return 1 - Math.sqrt(1 - t * t)
         }, Elastic: function(t) {
            return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
         }, Back: function(t) {
            return t * t * (3 * t - 2)
         }, Bounce: function(t) {
            for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t; )
               ;
            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
         }}), t.each(e, function(e, i) {
         t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
            return 1 - i(1 - t)
         }, t.easing["easeInOut" + e] = function(t) {
            return.5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
         }
      })
   }()
})(jQuery);
(function(t) {
   t.effects.effect.fade = function(e, i) {
      var s = t(this), n = t.effects.setMode(s, e.mode || "toggle");
      s.animate({opacity: n}, {queue: !1, duration: e.duration, easing: e.easing, complete: i})
   }
})(jQuery);




/*!
 * Bootstrap v3.3.2 (https://getbootstrap.com)
 * Copyright 2011-2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery)
   throw new Error("Bootstrap's JavaScript requires jQuery");
+function(t) {
   "use strict";
   var e = t.fn.jquery.split(" ")[0].split(".");
   if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1)
      throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), +function(t) {
   "use strict";
   function e(e) {
      return this.each(function() {
         var i = t(this), s = i.data("bs.alert");
         s || i.data("bs.alert", s = new o(this)), "string" == typeof e && s[e].call(i)
      })
   }
   var i = '[data-dismiss="alert"]', o = function(e) {
      t(e).on("click", i, this.close)
   };
   o.VERSION = "3.3.2", o.TRANSITION_DURATION = 150, o.prototype.close = function(e) {
      function i() {
         a.detach().trigger("closed.bs.alert").remove()
      }
      var s = t(this), n = s.attr("data-target");
      n || (n = s.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, ""));
      var a = t(n);
      e && e.preventDefault(), a.length || (a = s.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i())
   };
   var s = t.fn.alert;
   t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function() {
      return t.fn.alert = s, this
   }, t(document).on("click.bs.alert.data-api", i, o.prototype.close)
}(jQuery), +function(t) {
   "use strict";
   function e(e) {
      return this.each(function() {
         var o = t(this), s = o.data("bs.button"), n = "object" == typeof e && e;
         s || o.data("bs.button", s = new i(this, n)), "toggle" == e ? s.toggle() : e && s.setState(e)
      })
   }
   var i = function(e, o) {
      this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1
   };
   i.VERSION = "3.3.2", i.DEFAULTS = {loadingText: "loading..."}, i.prototype.setState = function(e) {
      var i = "disabled", o = this.$element, s = o.is("input") ? "val" : "html", n = o.data();
      e += "Text", null == n.resetText && o.data("resetText", o[s]()), setTimeout(t.proxy(function() {
         o[s](null == n[e] ? this.options[e] : n[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i))
      }, this), 0)
   }, i.prototype.toggle = function() {
      var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
      if (e.length) {
         var i = this.$element.find("input");
         "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
      } else
         this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
      t && this.$element.toggleClass("active")
   };
   var o = t.fn.button;
   t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
      return t.fn.button = o, this
   }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
      var o = t(i.target);
      o.hasClass("btn") || (o = o.closest(".btn")), e.call(o, "toggle"), i.preventDefault()
   }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
      t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
   })
}(jQuery), +function(t) {
   "use strict";
   function e(e) {
      return this.each(function() {
         var o = t(this), s = o.data("bs.carousel"), n = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e), a = "string" == typeof e ? e : n.slide;
         s || o.data("bs.carousel", s = new i(this, n)), "number" == typeof e ? s.to(e) : a ? s[a]() : n.interval && s.pause().cycle()
      })
   }
   var i = function(e, i) {
      this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
   };
   i.VERSION = "3.3.2", i.TRANSITION_DURATION = 600, i.DEFAULTS = {interval: 5e3, pause: "hover", wrap: !0, keyboard: !0}, i.prototype.keydown = function(t) {
      if (!/input|textarea/i.test(t.target.tagName)) {
         switch (t.which) {
            case 37:
               this.prev();
               break;
            case 39:
               this.next();
               break;
            default:
               return
         }
         t.preventDefault()
      }
   }, i.prototype.cycle = function(e) {
      return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
   }, i.prototype.getItemIndex = function(t) {
      return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
   }, i.prototype.getItemForDirection = function(t, e) {
      var i = this.getItemIndex(e), o = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
      if (o && !this.options.wrap)
         return e;
      var s = "prev" == t ? -1 : 1, n = (i + s) % this.$items.length;
      return this.$items.eq(n)
   }, i.prototype.to = function(t) {
      var e = this, i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
      return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
         e.to(t)
      }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
   }, i.prototype.pause = function(e) {
      return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
   }, i.prototype.next = function() {
      return this.sliding ? void 0 : this.slide("next")
   }, i.prototype.prev = function() {
      return this.sliding ? void 0 : this.slide("prev")
   }, i.prototype.slide = function(e, o) {
      var s = this.$element.find(".item.active"), n = o || this.getItemForDirection(e, s), a = this.interval, r = "next" == e ? "left" : "right", l = this;
      if (n.hasClass("active"))
         return this.sliding = !1;
      var h = n[0], d = t.Event("slide.bs.carousel", {relatedTarget: h, direction: r});
      if (this.$element.trigger(d), !d.isDefaultPrevented()) {
         if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            var p = t(this.$indicators.children()[this.getItemIndex(n)]);
            p && p.addClass("active")
         }
         var c = t.Event("slid.bs.carousel", {relatedTarget: h, direction: r});
         return t.support.transition && this.$element.hasClass("slide") ? (n.addClass(e), n[0].offsetWidth, s.addClass(r), n.addClass(r), s.one("bsTransitionEnd", function() {
            n.removeClass([e, r].join(" ")).addClass("active"), s.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
               l.$element.trigger(c)
            }, 0)
         }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (s.removeClass("active"), n.addClass("active"), this.sliding = !1, this.$element.trigger(c)), a && this.cycle(), this
      }
   };
   var o = t.fn.carousel;
   t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
      return t.fn.carousel = o, this
   };
   var s = function(i) {
      var o, s = t(this), n = t(s.attr("data-target") || (o = s.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
      if (n.hasClass("carousel")) {
         var a = t.extend({}, n.data(), s.data()), r = s.attr("data-slide-to");
         r && (a.interval = !1), e.call(n, a), r && n.data("bs.carousel").to(r), i.preventDefault()
      }
   };
   t(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s), t(window).on("load", function() {
      t('[data-ride="carousel"]').each(function() {
         var i = t(this);
         e.call(i, i.data())
      })
   })
}(jQuery), +function(t) {
   "use strict";
   function e(e) {
      e && 3 === e.which || (t(s).remove(), t(n).each(function() {
         var o = t(this), s = i(o), n = {relatedTarget: this};
         s.hasClass("open") && (s.trigger(e = t.Event("hide.bs.dropdown", n)), e.isDefaultPrevented() || (o.attr("aria-expanded", "false"), s.removeClass("open").trigger("hidden.bs.dropdown", n)))
      }))
   }
   function i(e) {
      var i = e.attr("data-target");
      i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
      var o = i && t(i);
      return o && o.length ? o : e.parent()
   }
   function o(e) {
      return this.each(function() {
         var i = t(this), o = i.data("bs.dropdown");
         o || i.data("bs.dropdown", o = new a(this)), "string" == typeof e && o[e].call(i)
      })
   }
   var s = ".dropdown-backdrop", n = '[data-toggle="dropdown"]', a = function(e) {
      t(e).on("click.bs.dropdown", this.toggle)
   };
   a.VERSION = "3.3.2", a.prototype.toggle = function(o) {
      var s = t(this);
      if (!s.is(".disabled, :disabled")) {
         var n = i(s), a = n.hasClass("open");
         if (e(), !a) {
            "ontouchstart"in document.documentElement && !n.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
            var r = {relatedTarget: this};
            if (n.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented())
               return;
            s.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger("shown.bs.dropdown", r)
         }
         return!1
      }
   }, a.prototype.keydown = function(e) {
      if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
         var o = t(this);
         if (e.preventDefault(), e.stopPropagation(), !o.is(".disabled, :disabled")) {
            var s = i(o), a = s.hasClass("open");
            if (!a && 27 != e.which || a && 27 == e.which)
               return 27 == e.which && s.find(n).trigger("focus"), o.trigger("click");
            var r = " li:not(.divider):visible a", l = s.find('[role="menu"]' + r + ', [role="listbox"]' + r);
            if (l.length) {
               var h = l.index(e.target);
               38 == e.which && h > 0 && h--, 40 == e.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
            }
         }
      }
   };
   var r = t.fn.dropdown;
   t.fn.dropdown = o, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function() {
      return t.fn.dropdown = r, this
   }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
      t.stopPropagation()
   }).on("click.bs.dropdown.data-api", n, a.prototype.toggle).on("keydown.bs.dropdown.data-api", n, a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', a.prototype.keydown)
}(jQuery), +function(t) {
   "use strict";
   function e(e, o) {
      return this.each(function() {
         var s = t(this), n = s.data("bs.modal"), a = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
         n || s.data("bs.modal", n = new i(this, a)), "string" == typeof e ? n[e](o) : a.show && n.show(o)
      })
   }
   var i = function(e, i) {
      this.options = i, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
         this.$element.trigger("loaded.bs.modal")
      }, this))
   };
   i.VERSION = "3.3.2", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {backdrop: !0, keyboard: !0, show: !0}, i.prototype.toggle = function(t) {
      return this.isShown ? this.hide() : this.show(t)
   }, i.prototype.show = function(e) {
      var o = this, s = t.Event("show.bs.modal", {relatedTarget: e});
      this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
         var s = t.support.transition && o.$element.hasClass("fade");
         o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.options.backdrop && o.adjustBackdrop(), o.adjustDialog(), s && o.$element[0].offsetWidth, o.$element.addClass("in").attr("aria-hidden", !1), o.enforceFocus();
         var n = t.Event("shown.bs.modal", {relatedTarget: e});
         s ? o.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
            o.$element.trigger("focus").trigger(n)
         }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(n)
      }))
   }, i.prototype.hide = function(e) {
      e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
   }, i.prototype.enforceFocus = function() {
      t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
         this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
      }, this))
   }, i.prototype.escape = function() {
      this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
         27 == t.which && this.hide()
      }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
   }, i.prototype.resize = function() {
      this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
   }, i.prototype.hideModal = function() {
      var t = this;
      this.$element.hide(), this.backdrop(function() {
         t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
      })
   }, i.prototype.removeBackdrop = function() {
      this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
   }, i.prototype.backdrop = function(e) {
      var o = this, s = this.$element.hasClass("fade") ? "fade" : "";
      if (this.isShown && this.options.backdrop) {
         var n = t.support.transition && s;
         if (this.$backdrop = t('<div class="modal-backdrop ' + s + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", t.proxy(function(t) {
            t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
         }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)
            return;
         n ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
      } else if (!this.isShown && this.$backdrop) {
         this.$backdrop.removeClass("in");
         var a = function() {
            o.removeBackdrop(), e && e()
         };
         t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
      } else
         e && e()
   }, i.prototype.handleUpdate = function() {
      this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
   }, i.prototype.adjustBackdrop = function() {
      this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
   }, i.prototype.adjustDialog = function() {
      var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
      this.$element.css({paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""})
   }, i.prototype.resetAdjustments = function() {
      this.$element.css({paddingLeft: "", paddingRight: ""})
   }, i.prototype.checkScrollbar = function() {
      this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
   }, i.prototype.setScrollbar = function() {
      var t = parseInt(this.$body.css("padding-right") || 0, 10);
      this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
   }, i.prototype.resetScrollbar = function() {
      this.$body.css("padding-right", "")
   }, i.prototype.measureScrollbar = function() {
      var t = document.createElement("div");
      t.className = "modal-scrollbar-measure", this.$body.append(t);
      var e = t.offsetWidth - t.clientWidth;
      return this.$body[0].removeChild(t), e
   };
   var o = t.fn.modal;
   t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
      return t.fn.modal = o, this
   }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
      var o = t(this), s = o.attr("href"), n = t(o.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")), a = n.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(s) && s}, n.data(), o.data());
      o.is("a") && i.preventDefault(), n.one("show.bs.modal", function(t) {
         t.isDefaultPrevented() || n.one("hidden.bs.modal", function() {
            o.is(":visible") && o.trigger("focus")
         })
      }), e.call(n, a, this)
   })
}(jQuery), +function(t) {
   "use strict";
   function e(e) {
      return this.each(function() {
         var o = t(this), s = o.data("bs.tooltip"), n = "object" == typeof e && e;
         (s || "destroy" != e) && (s || o.data("bs.tooltip", s = new i(this, n)), "string" == typeof e && s[e]())
      })
   }
   var i = function(t, e) {
      this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
   };
   i.VERSION = "3.3.2", i.TRANSITION_DURATION = 150, i.DEFAULTS = {animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: {selector: "body", padding: 0}}, i.prototype.init = function(e, i, o) {
      this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
      for (var s = this.options.trigger.split(" "), n = s.length; n--; ) {
         var a = s[n];
         if ("click" == a)
            this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
         else if ("manual" != a) {
            var r = "hover" == a ? "mouseenter" : "focusin", l = "hover" == a ? "mouseleave" : "focusout";
            this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
         }
      }
      this.options.selector ? this._options = t.extend({}, this.options, {trigger: "manual", selector: ""}) : this.fixTitle()
   }, i.prototype.getDefaults = function() {
      return i.DEFAULTS
   }, i.prototype.getOptions = function(e) {
      return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {show: e.delay, hide: e.delay}), e
   }, i.prototype.getDelegateOptions = function() {
      var e = {}, i = this.getDefaults();
      return this._options && t.each(this._options, function(t, o) {
         i[t] != o && (e[t] = o)
      }), e
   }, i.prototype.enter = function(e) {
      var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
      return i && i.$tip && i.$tip.is(":visible") ? void(i.hoverState = "in") : (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
         "in" == i.hoverState && i.show()
      }, i.options.delay.show)) : i.show())
   }, i.prototype.leave = function(e) {
      var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
      return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
         "out" == i.hoverState && i.hide()
      }, i.options.delay.hide)) : i.hide()
   }, i.prototype.show = function() {
      var e = t.Event("show.bs." + this.type);
      if (this.hasContent() && this.enabled) {
         this.$element.trigger(e);
         var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
         if (e.isDefaultPrevented() || !o)
            return;
         var s = this, n = this.tip(), a = this.getUID(this.type);
         this.setContent(), n.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && n.addClass("fade");
         var r = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement, l = /\s?auto?\s?/i, h = l.test(r);
         h && (r = r.replace(l, "") || "top"), n.detach().css({top: 0, left: 0, display: "block"}).addClass(r).data("bs." + this.type, this), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element);
         var d = this.getPosition(), p = n[0].offsetWidth, c = n[0].offsetHeight;
         if (h) {
            var f = r, u = this.options.container ? t(this.options.container) : this.$element.parent(), g = this.getPosition(u);
            r = "bottom" == r && d.bottom + c > g.bottom ? "top" : "top" == r && d.top - c < g.top ? "bottom" : "right" == r && d.right + p > g.width ? "left" : "left" == r && d.left - p < g.left ? "right" : r, n.removeClass(f).addClass(r)
         }
         var v = this.getCalculatedOffset(r, d, p, c);
         this.applyPlacement(v, r);
         var m = function() {
            var t = s.hoverState;
            s.$element.trigger("shown.bs." + s.type), s.hoverState = null, "out" == t && s.leave(s)
         };
         t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m()
      }
   }, i.prototype.applyPlacement = function(e, i) {
      var o = this.tip(), s = o[0].offsetWidth, n = o[0].offsetHeight, a = parseInt(o.css("margin-top"), 10), r = parseInt(o.css("margin-left"), 10);
      isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top = e.top + a, e.left = e.left + r, t.offset.setOffset(o[0], t.extend({using: function(t) {
            o.css({top: Math.round(t.top), left: Math.round(t.left)})
         }}, e), 0), o.addClass("in");
      var l = o[0].offsetWidth, h = o[0].offsetHeight;
      "top" == i && h != n && (e.top = e.top + n - h);
      var d = this.getViewportAdjustedDelta(i, e, l, h);
      d.left ? e.left += d.left : e.top += d.top;
      var p = /top|bottom/.test(i), c = p ? 2 * d.left - s + l : 2 * d.top - n + h, f = p ? "offsetWidth" : "offsetHeight";
      o.offset(e), this.replaceArrow(c, o[0][f], p)
   }, i.prototype.replaceArrow = function(t, e, i) {
      this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
   }, i.prototype.setContent = function() {
      var t = this.tip(), e = this.getTitle();
      t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
   }, i.prototype.hide = function(e) {
      function o() {
         "in" != s.hoverState && n.detach(), s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type), e && e()
      }
      var s = this, n = this.tip(), a = t.Event("hide.bs." + this.type);
      return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (n.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = null, this)
   }, i.prototype.fixTitle = function() {
      var t = this.$element;
      (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
   }, i.prototype.hasContent = function() {
      return this.getTitle()
   }, i.prototype.getPosition = function(e) {
      e = e || this.$element;
      var i = e[0], o = "BODY" == i.tagName, s = i.getBoundingClientRect();
      null == s.width && (s = t.extend({}, s, {width: s.right - s.left, height: s.bottom - s.top}));
      var n = o ? {top: 0, left: 0} : e.offset(), a = {scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()}, r = o ? {width: t(window).width(), height: t(window).height()} : null;
      return t.extend({}, s, a, r, n)
   }, i.prototype.getCalculatedOffset = function(t, e, i, o) {
      return"bottom" == t ? {top: e.top + e.height, left: e.left + e.width / 2 - i / 2} : "top" == t ? {top: e.top - o, left: e.left + e.width / 2 - i / 2} : "left" == t ? {top: e.top + e.height / 2 - o / 2, left: e.left - i} : {top: e.top + e.height / 2 - o / 2, left: e.left + e.width}
   }, i.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
      var s = {top: 0, left: 0};
      if (!this.$viewport)
         return s;
      var n = this.options.viewport && this.options.viewport.padding || 0, a = this.getPosition(this.$viewport);
      if (/right|left/.test(t)) {
         var r = e.top - n - a.scroll, l = e.top + n - a.scroll + o;
         r < a.top ? s.top = a.top - r : l > a.top + a.height && (s.top = a.top + a.height - l)
      } else {
         var h = e.left - n, d = e.left + n + i;
         h < a.left ? s.left = a.left - h : d > a.width && (s.left = a.left + a.width - d)
      }
      return s
   }, i.prototype.getTitle = function() {
      var t, e = this.$element, i = this.options;
      return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
   }, i.prototype.getUID = function(t) {
      do
         t += ~~(1e6 * Math.random());
      while (document.getElementById(t));
      return t
   }, i.prototype.tip = function() {
      return this.$tip = this.$tip || t(this.options.template)
   }, i.prototype.arrow = function() {
      return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
   }, i.prototype.enable = function() {
      this.enabled = !0
   }, i.prototype.disable = function() {
      this.enabled = !1
   }, i.prototype.toggleEnabled = function() {
      this.enabled = !this.enabled
   }, i.prototype.toggle = function(e) {
      var i = this;
      e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
   }, i.prototype.destroy = function() {
      var t = this;
      clearTimeout(this.timeout), this.hide(function() {
         t.$element.off("." + t.type).removeData("bs." + t.type)
      })
   };
   var o = t.fn.tooltip;
   t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
      return t.fn.tooltip = o, this
   }
}(jQuery), +function(t) {
   "use strict";
   function e(e) {
      return this.each(function() {
         var o = t(this), s = o.data("bs.popover"), n = "object" == typeof e && e;
         (s || "destroy" != e) && (s || o.data("bs.popover", s = new i(this, n)), "string" == typeof e && s[e]())
      })
   }
   var i = function(t, e) {
      this.init("popover", t, e)
   };
   if (!t.fn.tooltip)
      throw new Error("Popover requires tooltip.js");
   i.VERSION = "3.3.2", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
      return i.DEFAULTS
   }, i.prototype.setContent = function() {
      var t = this.tip(), e = this.getTitle(), i = this.getContent();
      t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
   }, i.prototype.hasContent = function() {
      return this.getTitle() || this.getContent()
   }, i.prototype.getContent = function() {
      var t = this.$element, e = this.options;
      return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
   }, i.prototype.arrow = function() {
      return this.$arrow = this.$arrow || this.tip().find(".arrow")
   }, i.prototype.tip = function() {
      return this.$tip || (this.$tip = t(this.options.template)), this.$tip
   };
   var o = t.fn.popover;
   t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
      return t.fn.popover = o, this
   }
}(jQuery), +function(t) {
   "use strict";
   function e(e) {
      return this.each(function() {
         var o = t(this), s = o.data("bs.tab");
         s || o.data("bs.tab", s = new i(this)), "string" == typeof e && s[e]()
      })
   }
   var i = function(e) {
      this.element = t(e)
   };
   i.VERSION = "3.3.2", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
      var e = this.element, i = e.closest("ul:not(.dropdown-menu)"), o = e.data("target");
      if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
         var s = i.find(".active:last a"), n = t.Event("hide.bs.tab", {relatedTarget: e[0]}), a = t.Event("show.bs.tab", {relatedTarget: s[0]});
         if (s.trigger(n), e.trigger(a), !a.isDefaultPrevented() && !n.isDefaultPrevented()) {
            var r = t(o);
            this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() {
               s.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({type: "shown.bs.tab", relatedTarget: s[0]})
            })
         }
      }
   }, i.prototype.activate = function(e, o, s) {
      function n() {
         a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), s && s()
      }
      var a = o.find("> .active"), r = s && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);
      a.length && r ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), a.removeClass("in")
   };
   var o = t.fn.tab;
   t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
      return t.fn.tab = o, this
   };
   var s = function(i) {
      i.preventDefault(), e.call(t(this), "show")
   };
   t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s)
}(jQuery), +function(t) {
   "use strict";
   function e(e) {
      return this.each(function() {
         var o = t(this), s = o.data("bs.affix"), n = "object" == typeof e && e;
         s || o.data("bs.affix", s = new i(this, n)), "string" == typeof e && s[e]()
      })
   }
   var i = function(e, o) {
      this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
   };
   i.VERSION = "3.3.2", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {offset: 0, target: window}, i.prototype.getState = function(t, e, i, o) {
      var s = this.$target.scrollTop(), n = this.$element.offset(), a = this.$target.height();
      if (null != i && "top" == this.affixed)
         return i > s ? "top" : !1;
      if ("bottom" == this.affixed)
         return null != i ? s + this.unpin <= n.top ? !1 : "bottom" : t - o >= s + a ? !1 : "bottom";
      var r = null == this.affixed, l = r ? s : n.top, h = r ? a : e;
      return null != i && i >= s ? "top" : null != o && l + h >= t - o ? "bottom" : !1
   }, i.prototype.getPinnedOffset = function() {
      if (this.pinnedOffset)
         return this.pinnedOffset;
      this.$element.removeClass(i.RESET).addClass("affix");
      var t = this.$target.scrollTop(), e = this.$element.offset();
      return this.pinnedOffset = e.top - t
   }, i.prototype.checkPositionWithEventLoop = function() {
      setTimeout(t.proxy(this.checkPosition, this), 1)
   }, i.prototype.checkPosition = function() {
      if (this.$element.is(":visible")) {
         var e = this.$element.height(), o = this.options.offset, s = o.top, n = o.bottom, a = t("body").height();
         "object" != typeof o && (n = s = o), "function" == typeof s && (s = o.top(this.$element)), "function" == typeof n && (n = o.bottom(this.$element));
         var r = this.getState(a, e, s, n);
         if (this.affixed != r) {
            null != this.unpin && this.$element.css("top", "");
            var l = "affix" + (r ? "-" + r : ""), h = t.Event(l + ".bs.affix");
            if (this.$element.trigger(h), h.isDefaultPrevented())
               return;
            this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
         }
         "bottom" == r && this.$element.offset({top: a - e - n})
      }
   };
   var o = t.fn.affix;
   t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
      return t.fn.affix = o, this
   }, t(window).on("load", function() {
      t('[data-spy="affix"]').each(function() {
         var i = t(this), o = i.data();
         o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
      })
   })
}(jQuery), +function(t) {
   "use strict";
   function e(e) {
      var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
      return t(o)
   }
   function i(e) {
      return this.each(function() {
         var i = t(this), s = i.data("bs.collapse"), n = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
         !s && n.toggle && "show" == e && (n.toggle = !1), s || i.data("bs.collapse", s = new o(this, n)), "string" == typeof e && s[e]()
      })
   }
   var o = function(e, i) {
      this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t(this.options.trigger).filter('[href="#' + e.id + '"], [data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
   };
   o.VERSION = "3.3.2", o.TRANSITION_DURATION = 350, o.DEFAULTS = {toggle: !0, trigger: '[data-toggle="collapse"]'}, o.prototype.dimension = function() {
      var t = this.$element.hasClass("width");
      return t ? "width" : "height"
   }, o.prototype.show = function() {
      if (!this.transitioning && !this.$element.hasClass("in")) {
         var e, s = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
         if (!(s && s.length && (e = s.data("bs.collapse"), e && e.transitioning))) {
            var n = t.Event("show.bs.collapse");
            if (this.$element.trigger(n), !n.isDefaultPrevented()) {
               s && s.length && (i.call(s, "hide"), e || s.data("bs.collapse", null));
               var a = this.dimension();
               this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
               var r = function() {
                  this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
               };
               if (!t.support.transition)
                  return r.call(this);
               var l = t.camelCase(["scroll", a].join("-"));
               this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])
            }
         }
      }
   }, o.prototype.hide = function() {
      if (!this.transitioning && this.$element.hasClass("in")) {
         var e = t.Event("hide.bs.collapse");
         if (this.$element.trigger(e), !e.isDefaultPrevented()) {
            var i = this.dimension();
            this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
            var s = function() {
               this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
            };
            return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : s.call(this)
         }
      }
   }, o.prototype.toggle = function() {
      this[this.$element.hasClass("in") ? "hide" : "show"]()
   }, o.prototype.getParent = function() {
      return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, o) {
         var s = t(o);
         this.addAriaAndCollapsedClass(e(s), s)
      }, this)).end()
   }, o.prototype.addAriaAndCollapsedClass = function(t, e) {
      var i = t.hasClass("in");
      t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
   };
   var s = t.fn.collapse;
   t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function() {
      return t.fn.collapse = s, this
   }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(o) {
      var s = t(this);
      s.attr("data-target") || o.preventDefault();
      var n = e(s), a = n.data("bs.collapse"), r = a ? "toggle" : t.extend({}, s.data(), {trigger: this});
      i.call(n, r)
   })
}(jQuery), +function(t) {
   "use strict";
   function e(i, o) {
      var s = t.proxy(this.process, this);
      this.$body = t("body"), this.$scrollElement = t(t(i).is("body") ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", s), this.refresh(), this.process()
   }
   function i(i) {
      return this.each(function() {
         var o = t(this), s = o.data("bs.scrollspy"), n = "object" == typeof i && i;
         s || o.data("bs.scrollspy", s = new e(this, n)), "string" == typeof i && s[i]()
      })
   }
   e.VERSION = "3.3.2", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function() {
      return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
   }, e.prototype.refresh = function() {
      var e = "offset", i = 0;
      t.isWindow(this.$scrollElement[0]) || (e = "position", i = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
      var o = this;
      this.$body.find(this.selector).map(function() {
         var o = t(this), s = o.data("target") || o.attr("href"), n = /^#./.test(s) && t(s);
         return n && n.length && n.is(":visible") && [[n[e]().top + i, s]] || null
      }).sort(function(t, e) {
         return t[0] - e[0]
      }).each(function() {
         o.offsets.push(this[0]), o.targets.push(this[1])
      })
   }, e.prototype.process = function() {
      var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(), o = this.options.offset + i - this.$scrollElement.height(), s = this.offsets, n = this.targets, a = this.activeTarget;
      if (this.scrollHeight != i && this.refresh(), e >= o)
         return a != (t = n[n.length - 1]) && this.activate(t);
      if (a && e < s[0])
         return this.activeTarget = null, this.clear();
      for (t = s.length; t--; )
         a != n[t] && e >= s[t] && (!s[t + 1] || e <= s[t + 1]) && this.activate(n[t])
   }, e.prototype.activate = function(e) {
      this.activeTarget = e, this.clear();
      var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', o = t(i).parents("li").addClass("active");
      o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
   }, e.prototype.clear = function() {
      t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
   };
   var o = t.fn.scrollspy;
   t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
      return t.fn.scrollspy = o, this
   }, t(window).on("load.bs.scrollspy.data-api", function() {
      t('[data-spy="scroll"]').each(function() {
         var e = t(this);
         i.call(e, e.data())
      })
   })
}(jQuery), +function(t) {
   "use strict";
   function e() {
      var t = document.createElement("bootstrap"), e = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend"};
      for (var i in e)
         if (void 0 !== t.style[i])
            return{end: e[i]};
      return!1
   }
   t.fn.emulateTransitionEnd = function(e) {
      var i = !1, o = this;
      t(this).one("bsTransitionEnd", function() {
         i = !0
      });
      var s = function() {
         i || t(o).trigger(t.support.transition.end)
      };
      return setTimeout(s, e), this
   }, t(function() {
      t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {bindType: t.support.transition.end, delegateType: t.support.transition.end, handle: function(e) {
            return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
         }})
   })
}(jQuery);




/*! jQuery Validation Plugin - v1.13.1 - 10/14/2014
 * https://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
!function(a) {
   "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
   a.extend(a.fn, {validate: function(b) {
         if (!this.length)
            return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
         var c = a.data(this[0], "validator");
         return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function(b) {
            c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0)
         }), this.submit(function(b) {
            function d() {
               var d, e;
               return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e ? e : !1) : !0
            }
            return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
         })), c)
      }, valid: function() {
         var b, c;
         return a(this[0]).is("form") ? b = this.validate().form() : (b = !0, c = a(this[0].form).validate(), this.each(function() {
            b = c.element(this) && b
         })), b
      }, removeAttrs: function(b) {
         var c = {}, d = this;
         return a.each(b.split(/\s/), function(a, b) {
            c[b] = d.attr(b), d.removeAttr(b)
         }), c
      }, rules: function(b, c) {
         var d, e, f, g, h, i, j = this[0];
         if (b)
            switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
               case"add":
                  a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                  break;
               case"remove":
                  return c ? (i = {}, a.each(c.split(/\s/), function(b, c) {
                     i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
                  }), i) : (delete e[j.name], f)
            }
         return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({required: h}, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {remote: h})), g
      }}), a.extend(a.expr[":"], {blank: function(b) {
         return!a.trim("" + a(b).val())
      }, filled: function(b) {
         return!!a.trim("" + a(b).val())
      }, unchecked: function(b) {
         return!a(b).prop("checked")
      }}), a.validator = function(b, c) {
      this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
   }, a.validator.format = function(b, c) {
      return 1 === arguments.length ? function() {
         var c = a.makeArray(arguments);
         return c.unshift(b), a.validator.format.apply(this, c)
      } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) {
         b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
            return c
         })
      }), b)
   }, a.extend(a.validator, {defaults: {messages: {}, groups: {}, rules: {}, errorClass: "error", validClass: "valid", errorElement: "label", focusCleanup: !1, focusInvalid: !0, errorContainer: a([]), errorLabelContainer: a([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function(a) {
            this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
         }, onfocusout: function(a) {
            this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
         }, onkeyup: function(a, b) {
            (9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a)
         }, onclick: function(a) {
            a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
         }, highlight: function(b, c, d) {
            "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
         }, unhighlight: function(b, c, d) {
            "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
         }}, setDefaults: function(b) {
         a.extend(a.validator.defaults, b)
      }, messages: {required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date ( ISO ).", number: "Please enter a valid number.", digits: "Please enter only digits.", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", maxlength: a.validator.format("Please enter no more than {0} characters."), minlength: a.validator.format("Please enter at least {0} characters."), rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."), range: a.validator.format("Please enter a value between {0} and {1}."), max: a.validator.format("Please enter a value less than or equal to {0}."), min: a.validator.format("Please enter a value greater than or equal to {0}.")}, autoCreateRanges: !1, prototype: {init: function() {
            function b(b) {
               var c = a.data(this[0].form, "validator"), d = "on" + b.type.replace(/^validate/, ""), e = c.settings;
               e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b)
            }
            this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
            var c, d = this.groups = {};
            a.each(this.settings.groups, function(b, c) {
               "string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) {
                  d[c] = b
               })
            }), c = this.settings.rules, a.each(c, function(b, d) {
               c[b] = a.validator.normalizeRule(d)
            }), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", b).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
         }, form: function() {
            return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
         }, checkForm: function() {
            this.prepareForm();
            for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++)
               this.check(b[a]);
            return this.valid()
         }, element: function(b) {
            var c = this.clean(b), d = this.validationTargetFor(c), e = !0;
            return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
         }, showErrors: function(b) {
            if (b) {
               a.extend(this.errorMap, b), this.errorList = [];
               for (var c in b)
                  this.errorList.push({message: b[c], element: this.findByName(c)[0]});
               this.successList = a.grep(this.successList, function(a) {
                  return!(a.name in b)
               })
            }
            this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
         }, resetForm: function() {
            a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
         }, numberOfInvalids: function() {
            return this.objectLength(this.invalid)
         }, objectLength: function(a) {
            var b, c = 0;
            for (b in a)
               c++;
            return c
         }, hideErrors: function() {
            this.hideThese(this.toHide)
         }, hideThese: function(a) {
            a.not(this.containers).text(""), this.addWrapper(a).hide()
         }, valid: function() {
            return 0 === this.size()
         }, size: function() {
            return this.errorList.length
         }, focusInvalid: function() {
            if (this.settings.focusInvalid)
               try {
                  a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
               } catch (b) {
               }
         }, findLastActive: function() {
            var b = this.lastActive;
            return b && 1 === a.grep(this.errorList, function(a) {
               return a.element.name === b.name
            }).length && b
         }, elements: function() {
            var b = this, c = {};
            return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function() {
               return!this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
            })
         }, clean: function(b) {
            return a(b)[0]
         }, errors: function() {
            var b = this.settings.errorClass.split(" ").join(".");
            return a(this.settings.errorElement + "." + b, this.errorContext)
         }, reset: function() {
            this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
         }, prepareForm: function() {
            this.reset(), this.toHide = this.errors().add(this.containers)
         }, prepareElement: function(a) {
            this.reset(), this.toHide = this.errorsFor(a)
         }, elementValue: function(b) {
            var c, d = a(b), e = b.type;
            return"radio" === e || "checkbox" === e ? a("input[name='" + b.name + "']:checked").val() : "number" === e && "undefined" != typeof b.validity ? b.validity.badInput ? !1 : d.val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
         }, check: function(b) {
            b = this.validationTargetFor(this.clean(b));
            var c, d, e, f = a(b).rules(), g = a.map(f, function(a, b) {
               return b
            }).length, h = !1, i = this.elementValue(b);
            for (d in f) {
               e = {method: d, parameters: f[d]};
               try {
                  if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
                     h = !0;
                     continue
                  }
                  if (h = !1, "pending" === c)
                     return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                  if (!c)
                     return this.formatAndAdd(b, e), !1
               } catch (j) {
                  throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j
               }
            }
            if (!h)
               return this.objectLength(f) && this.successList.push(b), !0
         }, customDataMessage: function(b, c) {
            return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
         }, customMessage: function(a, b) {
            var c = this.settings.messages[a];
            return c && (c.constructor === String ? c : c[b])
         }, findDefined: function() {
            for (var a = 0; a < arguments.length; a++)
               if (void 0 !== arguments[a])
                  return arguments[a];
            return void 0
         }, defaultMessage: function(b, c) {
            return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
         }, formatAndAdd: function(b, c) {
            var d = this.defaultMessage(b, c.method), e = /\$?\{(\d+)\}/g;
            "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({message: d, element: b, method: c.method}), this.errorMap[b.name] = d, this.submitted[b.name] = d
         }, addWrapper: function(a) {
            return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
         }, defaultShowErrors: function() {
            var a, b, c;
            for (a = 0; this.errorList[a]; a++)
               c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
            if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
               for (a = 0; this.successList[a]; a++)
                  this.showLabel(this.successList[a]);
            if (this.settings.unhighlight)
               for (a = 0, b = this.validElements(); b[a]; a++)
                  this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
            this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
         }, validElements: function() {
            return this.currentElements.not(this.invalidElements())
         }, invalidElements: function() {
            return a(this.errorList).map(function() {
               return this.element
            })
         }, showLabel: function(b, c) {
            var d, e, f, g = this.errorsFor(b), h = this.idOrName(b), i = a(b).attr("aria-describedby");
            g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""), d = g, this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id").replace(/(:|\.|\[|\])/g, "\\$1"), i ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f) : i = f, a(b).attr("aria-describedby", i), e = this.groups[b.name], e && a.each(this.groups, function(b, c) {
               c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id"))
            }))), !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)), this.toShow = this.toShow.add(g)
         }, errorsFor: function(b) {
            var c = this.idOrName(b), d = a(b).attr("aria-describedby"), e = "label[for='" + c + "'], label[for='" + c + "'] *";
            return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e)
         }, idOrName: function(a) {
            return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
         }, validationTargetFor: function(b) {
            return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
         }, checkable: function(a) {
            return/radio|checkbox/i.test(a.type)
         }, findByName: function(b) {
            return a(this.currentForm).find("[name='" + b + "']")
         }, getLength: function(b, c) {
            switch (c.nodeName.toLowerCase()) {
               case"select":
                  return a("option:selected", c).length;
               case"input":
                  if (this.checkable(c))
                     return this.findByName(c.name).filter(":checked").length
            }
            return b.length
         }, depend: function(a, b) {
            return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
         }, dependTypes: {"boolean": function(a) {
               return a
            }, string: function(b, c) {
               return!!a(b, c.form).length
            }, "function": function(a, b) {
               return a(b)
            }}, optional: function(b) {
            var c = this.elementValue(b);
            return!a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
         }, startRequest: function(a) {
            this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
         }, stopRequest: function(b, c) {
            this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
         }, previousValue: function(b) {
            return a.data(b, "previousValue") || a.data(b, "previousValue", {old: null, valid: !0, message: this.defaultMessage(b, "remote")})
         }}, classRuleSettings: {required: {required: !0}, email: {email: !0}, url: {url: !0}, date: {date: !0}, dateISO: {dateISO: !0}, number: {number: !0}, digits: {digits: !0}, creditcard: {creditcard: !0}}, addClassRules: function(b, c) {
         b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
      }, classRules: function(b) {
         var c = {}, d = a(b).attr("class");
         return d && a.each(d.split(" "), function() {
            this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
         }), c
      }, attributeRules: function(b) {
         var c, d, e = {}, f = a(b), g = b.getAttribute("type");
         for (c in a.validator.methods)
            "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), /min|max/.test(c) && (null === g || /number|range|text/.test(g)) && (d = Number(d)), d || 0 === d ? e[c] = d : g === c && "range" !== g && (e[c] = !0);
         return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
      }, dataRules: function(b) {
         var c, d, e = {}, f = a(b);
         for (c in a.validator.methods)
            d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), void 0 !== d && (e[c] = d);
         return e
      }, staticRules: function(b) {
         var c = {}, d = a.data(b.form, "validator");
         return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
      }, normalizeRules: function(b, c) {
         return a.each(b, function(d, e) {
            if (e === !1)
               return void delete b[d];
            if (e.param || e.depends) {
               var f = !0;
               switch (typeof e.depends) {
                  case"string":
                     f = !!a(e.depends, c.form).length;
                     break;
                  case"function":
                     f = e.depends.call(c, c)
               }
               f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
            }
         }), a.each(b, function(d, e) {
            b[d] = a.isFunction(e) ? e(c) : e
         }), a.each(["minlength", "maxlength"], function() {
            b[this] && (b[this] = Number(b[this]))
         }), a.each(["rangelength", "range"], function() {
            var c;
            b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
         }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
      }, normalizeRule: function(b) {
         if ("string" == typeof b) {
            var c = {};
            a.each(b.split(/\s/), function() {
               c[this] = !0
            }), b = c
         }
         return b
      }, addMethod: function(b, c, d) {
         a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
      }, methods: {required: function(b, c, d) {
            if (!this.depend(d, c))
               return"dependency-mismatch";
            if ("select" === c.nodeName.toLowerCase()) {
               var e = a(c).val();
               return e && e.length > 0
            }
            return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
         }, email: function(a, b) {
            return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
         }, url: function(a, b) {
            return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
         }, date: function(a, b) {
            return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
         }, dateISO: function(a, b) {
            return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
         }, number: function(a, b) {
            return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
         }, digits: function(a, b) {
            return this.optional(b) || /^\d+$/.test(a)
         }, creditcard: function(a, b) {
            if (this.optional(b))
               return"dependency-mismatch";
            if (/[^0-9 \-]+/.test(a))
               return!1;
            var c, d, e = 0, f = 0, g = !1;
            if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19)
               return!1;
            for (c = a.length - 1; c >= 0; c--)
               d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
            return e % 10 === 0
         }, minlength: function(b, c, d) {
            var e = a.isArray(b) ? b.length : this.getLength(b, c);
            return this.optional(c) || e >= d
         }, maxlength: function(b, c, d) {
            var e = a.isArray(b) ? b.length : this.getLength(b, c);
            return this.optional(c) || d >= e
         }, rangelength: function(b, c, d) {
            var e = a.isArray(b) ? b.length : this.getLength(b, c);
            return this.optional(c) || e >= d[0] && e <= d[1]
         }, min: function(a, b, c) {
            return this.optional(b) || a >= c
         }, max: function(a, b, c) {
            return this.optional(b) || c >= a
         }, range: function(a, b, c) {
            return this.optional(b) || a >= c[0] && a <= c[1]
         }, equalTo: function(b, c, d) {
            var e = a(d);
            return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
               a(c).valid()
            }), b === e.val()
         }, remote: function(b, c, d) {
            if (this.optional(c))
               return"dependency-mismatch";
            var e, f, g = this.previousValue(c);
            return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && {url: d} || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {url: d, mode: "abort", port: "validate" + c.name, dataType: "json", data: f, context: e.currentForm, success: function(d) {
                  var f, h, i, j = d === !0 || "true" === d;
                  e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j)
               }}, d)), "pending")
         }}}), a.format = function() {
      throw"$.format has been deprecated. Please use $.validator.format instead."
   };
   var b, c = {};
   a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
      var e = a.port;
      "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
   }) : (b = a.ajax, a.ajax = function(d) {
      var e = ("mode"in d ? d : a.ajaxSettings).mode, f = ("port"in d ? d : a.ajaxSettings).port;
      return"abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
   }), a.extend(a.fn, {validateDelegate: function(b, c, d) {
         return this.bind(c, function(c) {
            var e = a(c.target);
            return e.is(b) ? d.apply(e, arguments) : void 0
         })
      }})
});