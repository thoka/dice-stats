import{N as i,z as f,ah as v,x as u,ai as p,aj as h,P as d,F as o,E,D as T}from"./C9yqO1Qa.js";function g(n){var t=document.createElement("template");return t.innerHTML=n,t.content}function r(n,t){var e=u;e.nodes_start===null&&(e.nodes_start=n,e.nodes_end=t)}function N(n,t){var e=(t&p)!==0,_=(t&h)!==0,a,c=!n.startsWith("<!>");return()=>{if(d)return r(o,null),o;a===void 0&&(a=g(c?n:"<!>"+n),e||(a=f(a)));var s=_||v?document.importNode(a,!0):a.cloneNode(!0);if(e){var m=f(s),l=s.lastChild;r(m,l)}else r(s,s);return s}}function w(n=""){if(!d){var t=i(n+"");return r(t,t),t}var e=o;return e.nodeType!==3&&(e.before(e=i()),T(e)),r(e,e),e}function M(){if(d)return r(o,null),o;var n=document.createDocumentFragment(),t=document.createComment(""),e=i();return n.append(t,e),r(t,e),n}function P(n,t){if(d){u.nodes_end=o,E();return}n!==null&&n.before(t)}const x="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(x);export{P as a,r as b,M as c,w as d,N as t};
