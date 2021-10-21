(()=>{"use strict";function e(e,t,r,n,i,a,o){try{var u=e[a](o),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,i)}function t(t){return function(){var r=this,n=arguments;return new Promise((function(i,a){var o=t.apply(r,n);function u(t){e(o,i,a,u,c,"next",t)}function c(t){e(o,i,a,u,c,"throw",t)}u(void 0)}))}}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var n=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),null==t||!t.nodeType)throw new Error("The first parameter must be a NodeElement");this.node=t,this._init()}var n,i,a,o,u;return n=e,i=[{key:"_init",value:function(){var e=this;this.node.addEventListener("click",(function(t){return e._addVariantToWishlist(t)}))}},{key:"_addVariantToWishlist",value:(u=t(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,this._getWishlistVariantUri();case 3:r=e.sent,this._redirectToWishlist(r);case 5:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)})},{key:"_getWishlistVariantUri",value:(o=t(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.node.closest("form"),(r=new FormData(t)).append(this.node.name,""),e.next=6,fetch(t.action,{method:"POST",body:r});case 6:return n=e.sent,e.next=9,n.text();case 9:return e.abrupt("return",e.sent);case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])}))),function(){return o.apply(this,arguments)})},{key:"_redirectToWishlist",value:function(e){location.href=e}}],i&&r(n.prototype,i),a&&r(n,a),e}();function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),null==t||!t.nodeType)throw new Error("The first parameter must be a NodeElement");this.item=document.querySelector(t.dataset.bbTarget),this.nodePrice=t,this.pricing=JSON.parse(t.dataset.bbPricing||""),this.selectors=this.item.querySelectorAll("select[data-name]"),this.selectedVariant={}}var t,r,n;return t=e,(r=[{key:"init",value:function(){var e=this;this.selectors.forEach((function(t){e._updateSelectedVariant(t),e.selectedVariant[t.dataset.name]=t.value,t.addEventListener("change",e._onChangeSelector.bind(e))})),this.nodePrice.removeAttribute("data-bb-pricing"),this._updatePrice()}},{key:"_onChangeSelector",value:function(e){this._updateSelectedVariant(e.currentTarget)}},{key:"_updateSelectedVariant",value:function(e){this.selectedVariant[e.dataset.name]=e.value,this._updatePrice()}},{key:"_updatePrice",value:function(){var e=this,t=this.pricing.find((function(t){return r=t,n=e.selectedVariant,Object.keys(n).every((function(e){return r.hasOwnProperty(e)&&r[e]===n[e]}));var r,n}));this.nodePrice.innerHTML=t.value}}])&&i(t.prototype,r),n&&i(t,n),e}();function o(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}o(document.querySelectorAll('[data-bb-toggle="wishlist-variant"]')).map((function(e){return new n(e)})),o(document.querySelectorAll('[data-bb-toggle="wishlist-variant-price"]')).map((function(e){return new a(e).init()}))})();