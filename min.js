/*! (c) Andrea Giammarchi - ISC */
!function(E,k,D){"use strict";if(1==E.importNode.length&&!k.get("ungap-li")){var H="extends";try{var e={extends:"li"},t=HTMLLIElement,n=function(){return Reflect.construct(t,[],n)};if(n.prototype=D.create(t.prototype),k.define("ungap-li",n,e),!/is="ungap-li"/.test((new n).outerHTML))throw e}catch(e){!function(){var u="attributeChangedCallback",n="connectedCallback",r="disconnectedCallback",e=Element.prototype,l=D.assign,t=D.create,o=D.defineProperties,a=D.getOwnPropertyDescriptor,s=D.setPrototypeOf,c=k.define,i=k.get,f=k.upgrade,v=k.whenDefined,d=t(null),p=new WeakMap,g={childList:!0,subtree:!0};new MutationObserver(m).observe(E,g),P(Document.prototype,"importNode"),P(Node.prototype,"cloneNode"),o(k,{define:{value:function(e,t,n){if(e=e.toLowerCase(),n&&H in n){d[e]=l({},n,{Class:t});for(var r=n[H]+'[is="'+e+'"]',o=E.querySelectorAll(r),a=0,i=o.length;a<i;a++)A(o[a])}else c.apply(k,arguments)}},get:{value:function(e){return e in d?d[e].Class:i.call(k,e)}},upgrade:{value:function(e){var t=T(e);!t||e instanceof t.Class?f.call(k,e):N(e,t)}},whenDefined:{value:function(e){return e in d?Promise.resolve():v.call(k,e)}}});var h=E.createElement;o(E,{createElement:{value:function(e,t){var n=h.call(E,e);return t&&"is"in t&&(n.setAttribute("is",t.is),k.upgrade(n)),n}}});var b=a(e,"attachShadow").value,y=a(e,"innerHTML");function m(e){for(var t=0,n=e.length;t<n;t++){for(var r=e[t],o=r.addedNodes,a=r.removedNodes,i=0,l=o.length;i<l;i++)A(o[i]);for(i=0,l=a.length;i<l;i++)C(a[i])}}function w(e){for(var t=0,n=e.length;t<n;t++){var r=e[t],o=r.attributeName,a=r.oldValue,i=r.target,l=i.getAttribute(o);u in i&&(a!=l||null!=l)&&i[u](o,a,i.getAttribute(o),null)}}function C(e){var t;1===e.nodeType&&((t=T(e))&&e instanceof t.Class&&r in e&&p.get(e)!==r&&(p.set(e,r),Promise.resolve(e).then(M)),O(e,C))}function T(e){var t=e.getAttribute("is");return t&&(t=t.toLowerCase())in d?d[t]:null}function L(e){e[n]()}function M(e){e[r]()}function N(e,t){var n=t.Class,r=n.observedAttributes||[];if(s(e,n.prototype),r.length){new MutationObserver(w).observe(e,{attributes:!0,attributeFilter:r,attributeOldValue:!0});for(var o=[],a=0,i=r.length;a<i;a++)o.push({attributeName:r[a],oldValue:null,target:e});w(o)}}function A(e){var t;1===e.nodeType&&((t=T(e))&&(e instanceof t.Class||N(e,t),n in e&&e.isConnected&&p.get(e)!==n&&(p.set(e,n),Promise.resolve(e).then(L))),O(e,A))}function O(e,t){for(var n=e.querySelectorAll("[is]"),r=0,o=n.length;r<o;r++)t(n[r])}function P(e,t){var n=e[t],r={};r[t]={value:function(){var e=n.apply(this,arguments);return 1===e.nodeType?O(e,A):11===e.nodeType&&O(e.content,A),e}},o(e,r)}o(e,{attachShadow:{value:function(){var e=b.apply(this,arguments);return new MutationObserver(m).observe(e,g),e}},innerHTML:{get:y.get,set:function(e){y.set.call(this,e),/\bis=("|')?[a-z0-9_-]+\1/i.test(e)&&O(11===this.nodeType?this.content:this,A)}}})}()}}}(document,customElements,Object);