import{V as T,W as $,X as G,Y as m,Z as K,g as h,_ as c,$ as y,a0 as D,F as V,a1 as z,a2 as H,C as W,m as Y,N as X,i as J,E as Q,a3 as k,a4 as p,M as ee,L as M,a5 as B,j as C,a6 as U,o as ae,a7 as re,a8 as ne,f as j,a9 as te,aa as ie,ab as fe,ac as se,b as F,ad as ue,ae as le,l as _e,af as ve,ag as de,ah as ce}from"./CM38LwsY.js";function E(i,_=null,P){if(typeof i!="object"||i===null||T in i)return i;const v=H(i);if(v!==$&&v!==G)return i;var t=new Map,l=W(i),o=m(0);l&&t.set("length",m(i.length));var g;return new Proxy(i,{defineProperty(f,e,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&z();var n=t.get(e);return n===void 0?(n=m(a.value),t.set(e,n)):y(n,E(a.value,g)),!0},deleteProperty(f,e){var a=t.get(e);if(a===void 0)e in f&&t.set(e,m(c));else{if(l&&typeof e=="string"){var n=t.get("length"),r=Number(e);Number.isInteger(r)&&r<n.v&&y(n,r)}y(a,c),Z(o)}return!0},get(f,e,a){var d;if(e===T)return i;var n=t.get(e),r=e in f;if(n===void 0&&(!r||(d=D(f,e))!=null&&d.writable)&&(n=m(E(r?f[e]:c,g)),t.set(e,n)),n!==void 0){var s=h(n);return s===c?void 0:s}return Reflect.get(f,e,a)},getOwnPropertyDescriptor(f,e){var a=Reflect.getOwnPropertyDescriptor(f,e);if(a&&"value"in a){var n=t.get(e);n&&(a.value=h(n))}else if(a===void 0){var r=t.get(e),s=r==null?void 0:r.v;if(r!==void 0&&s!==c)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return a},has(f,e){var s;if(e===T)return!0;var a=t.get(e),n=a!==void 0&&a.v!==c||Reflect.has(f,e);if(a!==void 0||V!==null&&(!n||(s=D(f,e))!=null&&s.writable)){a===void 0&&(a=m(n?E(f[e],g):c),t.set(e,a));var r=h(a);if(r===c)return!1}return n},set(f,e,a,n){var R;var r=t.get(e),s=e in f;if(l&&e==="length")for(var d=a;d<r.v;d+=1){var I=t.get(d+"");I!==void 0?y(I,c):d in f&&(I=m(c),t.set(d+"",I))}r===void 0?(!s||(R=D(f,e))!=null&&R.writable)&&(r=m(void 0),y(r,E(a,g)),t.set(e,r)):(s=r.v!==c,y(r,E(a,g)));var b=Reflect.getOwnPropertyDescriptor(f,e);if(b!=null&&b.set&&b.set.call(n,a),!s){if(l&&typeof e=="string"){var w=t.get("length"),A=Number(e);Number.isInteger(A)&&A>=w.v&&y(w,A+1)}Z(o)}return!0},ownKeys(f){h(o);var e=Reflect.ownKeys(f).filter(r=>{var s=t.get(r);return s===void 0||s.v!==c});for(var[a,n]of t)n.v!==c&&!(a in f)&&e.push(a);return e},setPrototypeOf(){K()}})}function Z(i,_=1){y(i,i.v+_)}function ge(i,_,P=!1){Y&&X();var v=i,t=null,l=null,o=c,g=P?Q:0,f=!1;const e=(n,r=!0)=>{f=!0,a(r,n)},a=(n,r)=>{if(o===(o=n))return;let s=!1;if(Y){const d=v.data===k;!!o===d&&(v=p(),ee(v),M(!1),s=!0)}o?(t?B(t):r&&(t=C(()=>r(v))),l&&U(l,()=>{l=null})):(l?B(l):r&&(l=C(()=>r(v))),t&&U(t,()=>{t=null})),s&&M(!0)};J(()=>{f=!1,_(e),f||a(null,null)},g),Y&&(v=ae)}let O=!1;function oe(i){var _=O;try{return O=!1,[i(),O]}finally{O=_}}function ye(i,_,P,v){var q;var t=(P&de)!==0,l=!_e||(P&ve)!==0,o=(P&ue)!==0,g=(P&ce)!==0,f=!1,e;o?[e,f]=oe(()=>i[_]):e=i[_];var a=T in i||le in i,n=o&&(((q=D(i,_))==null?void 0:q.set)??(a&&_ in i&&(u=>i[_]=u)))||void 0,r=v,s=!0,d=!1,I=()=>(d=!0,s&&(s=!1,g?r=F(v):r=v),r);e===void 0&&v!==void 0&&(n&&l&&re(),e=I(),n&&n(e));var b;if(l)b=()=>{var u=i[_];return u===void 0?I():(s=!0,d=!1,u)};else{var w=(t?j:te)(()=>i[_]);w.f|=ne,b=()=>{var u=h(w);return u!==void 0&&(r=void 0),u===void 0?r:u}}if(!(P&ie))return b;if(n){var A=i.$$legacy;return function(u,S){return arguments.length>0?((!l||!S||A||f)&&n(S?b():u),u):b()}}var R=!1,L=se(e),N=j(()=>{var u=b(),S=h(L);return R?(R=!1,S):L.v=u});return t||(N.equals=fe),function(u,S){if(arguments.length>0){const x=S?h(N):l&&o?E(u):u;return N.equals(x)||(R=!0,y(L,x),d&&r!==void 0&&(r=x),F(()=>h(N))),u}return h(N)}}export{E as a,ge as i,ye as p};
