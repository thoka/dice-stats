import{t as L,a as k}from"../chunks/Dt4d9UH8.js";import{i as ne}from"../chunks/BUagHfr0.js";import{U as me,i as ge,M as z,m as T,H as be,N as we,g as x,a9 as xe,a3 as ye,a4 as ae,L as F,o as O,O as Ae,a5 as oe,j as fe,a6 as Ee,ar as J,S as ve,F as re,as as te,ac as Ie,Y as se,at as K,au as Te,R as Ce,av as ke,k as He,aw as P,ax as Le,J as Me,C as Ne,ay as ue,an as Re,az as Be,a2 as Se,aA as De,s as de,y as S,w as H,x as E,t as R,p as ce,v as _e,aB as X,aC as Oe}from"../chunks/CM38LwsY.js";import{s as G}from"../chunks/CJqi4Gmf.js";import"../chunks/DeDxa3Vw.js";import{p as N,i as We}from"../chunks/DtPSp3XK.js";function Y(t,e){return e}function Ye(t,e,a,n){for(var i=[],o=e.length,d=0;d<o;d++)Te(e[d].e,i,!0);var _=o>0&&i.length===0&&a!==null;if(_){var m=a.parentNode;Ce(m),m.append(a),n.clear(),C(t,e[0].prev,e[o-1].next)}ke(i,()=>{for(var g=0;g<o;g++){var f=e[g];_||(n.delete(f.k),C(t,f.prev,f.next)),He(f.e,!_)}})}function q(t,e,a,n,i,o=null){var d=t,_={flags:e,items:new Map,first:null},m=(e&ue)!==0;if(m){var g=t;d=T?z(be(g)):g.appendChild(me())}T&&we();var f=null,u=!1,l=xe(()=>{var v=a();return Ne(v)?v:v==null?[]:ve(v)});ge(()=>{var v=x(l),r=v.length;if(u&&r===0)return;u=r===0;let y=!1;if(T){var w=d.data===ye;w!==(r===0)&&(d=ae(),z(d),F(!1),y=!0)}if(T){for(var p=null,b,h=0;h<r;h++){if(O.nodeType===8&&O.data===Ae){d=O,y=!0,F(!1);break}var s=v[h],c=n(s,h);b=he(O,_,p,null,s,c,h,i,e,a),_.items.set(c,b),p=b}r>0&&z(ae())}T||qe(v,_,d,i,e,n,a),o!==null&&(r===0?f?oe(f):f=fe(()=>o(d)):f!==null&&Ee(f,()=>{f=null})),y&&F(!0),x(l)}),T&&(d=O)}function qe(t,e,a,n,i,o,d){var Q,Z,$,j;var _=(i&Be)!==0,m=(i&(P|K))!==0,g=t.length,f=e.items,u=e.first,l=u,v,r=null,y,w=[],p=[],b,h,s,c;if(_)for(c=0;c<g;c+=1)b=t[c],h=o(b,c),s=f.get(h),s!==void 0&&((Q=s.a)==null||Q.measure(),(y??(y=new Set)).add(s));for(c=0;c<g;c+=1){if(b=t[c],h=o(b,c),s=f.get(h),s===void 0){var U=l?l.e.nodes_start:a;r=he(U,e,r,r===null?e.first:r.next,b,h,c,n,i,d),f.set(h,r),w=[],p=[],l=r.next;continue}if(m&&Ge(s,b,c,i),s.e.f&J&&(oe(s.e),_&&((Z=s.a)==null||Z.unfix(),(y??(y=new Set)).delete(s))),s!==l){if(v!==void 0&&v.has(s)){if(w.length<p.length){var I=p[0],A;r=I.prev;var B=w[0],D=w[w.length-1];for(A=0;A<w.length;A+=1)le(w[A],I,a);for(A=0;A<p.length;A+=1)v.delete(p[A]);C(e,B.prev,D.next),C(e,r,B),C(e,D,I),l=I,r=D,c-=1,w=[],p=[]}else v.delete(s),le(s,l,a),C(e,s.prev,s.next),C(e,s,r===null?e.first:r.next),C(e,r,s),r=s;continue}for(w=[],p=[];l!==null&&l.k!==h;)l.e.f&J||(v??(v=new Set)).add(l),p.push(l),l=l.next;if(l===null)continue;s=l}w.push(s),r=s,l=s.next}if(l!==null||v!==void 0){for(var M=v===void 0?[]:ve(v);l!==null;)l.e.f&J||M.push(l),l=l.next;var V=M.length;if(V>0){var pe=i&ue&&g===0?a:null;if(_){for(c=0;c<V;c+=1)($=M[c].a)==null||$.measure();for(c=0;c<V;c+=1)(j=M[c].a)==null||j.fix()}Ye(e,M,pe,f)}}_&&Re(()=>{var ee;if(y!==void 0)for(s of y)(ee=s.a)==null||ee.apply()}),re.first=e.first&&e.first.e,re.last=r&&r.e}function Ge(t,e,a,n){n&P&&te(t.v,e),n&K?te(t.i,a):t.i=a}function he(t,e,a,n,i,o,d,_,m,g){var f=(m&P)!==0,u=(m&Le)===0,l=f?u?Ie(i):se(i):i,v=m&K?se(d):d,r={i:v,v:l,k:o,a:null,e:null,prev:a,next:n};try{return r.e=fe(()=>_(t,l,v,g),T),r.e.prev=a&&a.e,r.e.next=n&&n.e,a===null?e.first=r:(a.next=r,a.e.next=r.e),n!==null&&(n.prev=r,n.e.prev=r.e),r}finally{}}function le(t,e,a){for(var n=t.next?t.next.e.nodes_start:a,i=e?e.e.nodes_start:a,o=t.e.nodes_start;o!==n;){var d=Me(o);i.before(o),o=d}}function C(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function W(t,e,a,n){var i=t.__attributes??(t.__attributes={});T&&(i[e]=t.getAttribute(e)),i[e]!==(i[e]=a)&&("__styles"in t&&(t.__styles={}),a==null?t.removeAttribute(e):typeof a!="string"&&Ue(t).includes(e)?t[e]=a:t.setAttribute(e,a))}var ie=new Map;function Ue(t){var e=ie.get(t.nodeName);if(e)return e;ie.set(t.nodeName,e=[]);for(var a,n=t,i=Element.prototype;i!==n;){a=De(n);for(var o in a)a[o].set&&e.push(o);n=Se(n)}return e}var Ve=L('<div class="label svelte-1y5do2d"> </div>'),ze=L('<div class="cell svelte-1y5do2d"></div>'),Fe=L('<div class="label svelte-1y5do2d"> </div> <!>',1),Je=L('<div class="matrix-container svelte-1y5do2d"><div class="label svelte-1y5do2d"></div> <!> <!></div>');function Xe(t,e){de(e,!1);let a=N(e,"data",24,()=>[[]]),n=N(e,"rowLabels",24,()=>[]),i=N(e,"colLabels",24,()=>[]),o=N(e,"rowHeights",24,()=>[]),d=N(e,"colWidths",24,()=>[]);ne();var _=Je(),m=S(H(_),2);q(m,1,i,Y,(f,u,l)=>{var v=Ve(),r=H(v,!0);E(v),R(()=>{W(v,"style",`width: ${d()[l]||"auto"}`),G(r,x(u))}),k(f,v)});var g=S(m,2);q(g,1,a,Y,(f,u,l)=>{var v=Fe(),r=ce(v),y=H(r,!0);E(r);var w=S(r,2);q(w,1,()=>x(u),Y,(p,b,h)=>{var s=ze();R(()=>W(s,"style",`background-color: ${x(b)??""}; width: ${d()[h]||"auto"}; height: ${o()[l]||"auto"}`)),k(p,s)}),R(()=>{W(r,"style",`height: ${o()[l]||"auto"}`),G(y,n()[l]||"")}),k(f,v)}),E(_),R(()=>W(_,"style",`--cols: ${a()[0].length??""}; --rows: ${a().length??""};`)),k(t,_),_e()}var Ke=L("<b> </b><br> ",1),Pe=L('<bar class="svelte-1etukjd"><!></bar>'),Qe=L('<main><!> <bars style="width:100%; display:flex;" class="svelte-1etukjd"></bars></main>');function Ze(t,e){de(e,!1);let a=N(e,"A",24,()=>({})),n=N(e,"B",24,()=>({})),i=a().sides.split(""),o=n().sides.split(""),d=[],_=[],m=[],g=[],f=[],u=Oe([0,0,0]);for(let p=0;p<i.length;p++){let b=[];d.push(i[p]),_.push("30px"),g.push(o[p]),m.push("30px");for(let h=0;h<o.length;h++)i[p]>o[h]?(b.push(a().color),X(u,x(u)[0]++)):i[p]<o[h]?(b.push(n().color),X(u,x(u)[2]++)):(b.push("white"),X(u,x(u)[1]++));f.push(b)}let l=x(u)[0]+x(u)[1]+x(u)[2],v=x(u).map(p=>Math.round(p/l*1e3)/10);ne();var r=Qe(),y=H(r);Xe(y,{data:f,rowLabels:d,colLabels:g,rowHeights:_,colWidths:m});var w=S(y,2);q(w,5,()=>x(u),Y,(p,b,h)=>{var s=Pe(),c=H(s);{var U=I=>{var A=Ke(),B=ce(A),D=H(B,!0);E(B);var M=S(B,2);R(()=>{G(D,x(b)),G(M,`(${v[h]??""}%)`)}),k(I,A)};We(c,I=>{x(b)>0&&I(U)})}E(s),R(()=>W(s,"style",`background:${(h==0?a().color:h==1?"white":n().color)??""}; width:${v[h]??""}%;`)),k(p,s)}),E(w),E(r),k(t,r),_e()}var $e=L('<main class="svelte-1h86ym0"><h1> </h1> <div class="grid svelte-1h86ym0"></div></main>');function la(t){let e={name:"Grime",dices:[{name:"Rot",sides:"444449",color:"red"},{name:"Gelb",sides:"333388",color:"yellow"},{name:"Magenta",sides:"116666",color:"magenta"},{name:"Blau",sides:"222777",color:"blue"},{name:"Olive",sides:"055555",color:"green"}]},a=m=>{let g=[];for(let f=0;f<m.length;f++)for(let u=f+1;u<m.length;u++)g.push([m[f],m[u]]);return g},n=e;var i=$e(),o=H(i),d=H(o);E(o);var _=S(o,2);q(_,5,()=>a(n.dices),Y,(m,g)=>{let f=()=>x(g)[0],u=()=>x(g)[1];Ze(m,{get A(){return f()},get B(){return u()}})}),E(_),E(i),R(()=>G(d,`Intransitive Würfel (${n.name})`)),k(t,i)}export{la as component};
