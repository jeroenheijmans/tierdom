import{S as Se,i as Ee,s as Te,x as F,a as P,k as $,q as _,y as V,c as M,l as k,m as v,h as m,r as g,n as L,z as W,b as E,J as i,f as y,d as fe,t as S,A as J,M as ye,H as we,C as xe,g as ue,e as ge,u as Ne}from"../../../chunks/index-1e48f5d8.js";import{I as qe,T as Le,a as Pe,b as Me}from"../../../chunks/TierContainer-74465c7c.js";import{l as Re,L as He}from"../../../chunks/stores-bc6c6c8f.js";function be(c,t,r){const e=c.slice();return e[2]=t[r],e}function $e(c,t,r){const e=c.slice();return e[5]=t[r],e}function Be(c){let t,r;return{c(){t=$("p"),r=_(`Tiers indicate what books mean to me; how much I'd recommend reading them. Rating is the actual quality of a book (given its context and\r
    time period).`)},l(e){t=k(e,"P",{});var o=v(t);r=g(o,`Tiers indicate what books mean to me; how much I'd recommend reading them. Rating is the actual quality of a book (given its context and\r
    time period).`),o.forEach(m)},m(e,o){E(e,t,o),i(t,r)},p:xe,d(e){e&&m(t)}}}function Ge(c){let t,r;return t=new Pe({props:{item:c[5]}}),{c(){F(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,o){W(t,e,o),r=!0},p(e,o){const n={};o&1&&(n.item=e[5]),t.$set(n)},i(e){r||(y(t.$$.fragment,e),r=!0)},o(e){S(t.$$.fragment,e),r=!1},d(e){J(t,e)}}}function Oe(c){let t,r;return t=new Me({props:{item:c[5],$$slots:{default:[ze]},$$scope:{ctx:c}}}),{c(){F(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,o){W(t,e,o),r=!0},p(e,o){const n={};o&1&&(n.item=e[5]),o&257&&(n.$$scope={dirty:o,ctx:e}),t.$set(n)},i(e){r||(y(t.$$.fragment,e),r=!0)},o(e){S(t.$$.fragment,e),r=!1},d(e){J(t,e)}}}function ze(c){let t,r=c[5].isbn+"",e;return{c(){t=_(", ISBN "),e=_(r)},l(o){t=g(o,", ISBN "),e=g(o,r)},m(o,n){E(o,t,n),E(o,e,n)},p(o,n){n&1&&r!==(r=o[5].isbn+"")&&Ne(e,r)},d(o){o&&m(t),o&&m(e)}}}function ke(c){let t,r,e,o;const n=[Oe,Ge],l=[];function f(a,d){return a[1]===He.rectangle?0:1}return t=f(c),r=l[t]=n[t](c),{c(){r.c(),e=ge()},l(a){r.l(a),e=ge()},m(a,d){l[t].m(a,d),E(a,e,d),o=!0},p(a,d){let x=t;t=f(a),t===x?l[t].p(a,d):(ue(),S(l[x],1,1,()=>{l[x]=null}),fe(),r=l[t],r?r.p(a,d):(r=l[t]=n[t](a),r.c()),y(r,1),r.m(e.parentNode,e))},i(a){o||(y(r),o=!0)},o(a){S(r),o=!1},d(a){l[t].d(a),a&&m(e)}}}function Ae(c){let t,r,e=c[2].items,o=[];for(let l=0;l<e.length;l+=1)o[l]=ke($e(c,e,l));const n=l=>S(o[l],1,1,()=>{o[l]=null});return{c(){for(let l=0;l<o.length;l+=1)o[l].c();t=P()},l(l){for(let f=0;f<o.length;f+=1)o[f].l(l);t=M(l)},m(l,f){for(let a=0;a<o.length;a+=1)o[a].m(l,f);E(l,t,f),r=!0},p(l,f){if(f&3){e=l[2].items;let a;for(a=0;a<e.length;a+=1){const d=$e(l,e,a);o[a]?(o[a].p(d,f),y(o[a],1)):(o[a]=ke(d),o[a].c(),y(o[a],1),o[a].m(t.parentNode,t))}for(ue(),a=e.length;a<o.length;a+=1)n(a);fe()}},i(l){if(!r){for(let f=0;f<e.length;f+=1)y(o[f]);r=!0}},o(l){o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)S(o[f]);r=!1},d(l){ye(o,l),l&&m(t)}}}function ve(c){let t,r;return t=new Le({props:{tier:c[2],$$slots:{default:[Ae]},$$scope:{ctx:c}}}),{c(){F(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,o){W(t,e,o),r=!0},p(e,o){const n={};o&1&&(n.tier=e[2]),o&259&&(n.$$scope={dirty:o,ctx:e}),t.$set(n)},i(e){r||(y(t.$$.fragment,e),r=!0)},o(e){S(t.$$.fragment,e),r=!1},d(e){J(t,e)}}}function Ce(c){let t,r,e,o,n,l,f,a,d,x,H,j,K,Q,T,U,B,X,Y,Z,I,ee,G,te,oe,O,re,ne,le,w,ae,z,se,ie,A;t=new qe({props:{clazz:"my-4",$$slots:{default:[Be]},$$scope:{ctx:c}}});let N=c[0].tierList.tiers,u=[];for(let s=0;s<N.length;s+=1)u[s]=ve(be(c,N,s));const Ie=s=>S(u[s],1,1,()=>{u[s]=null});return{c(){F(t.$$.fragment),r=P(),e=$("div");for(let s=0;s<u.length;s+=1)u[s].c();o=P(),n=$("div"),l=$("h2"),f=_("Where's the rest!?"),a=P(),d=$("p"),x=_(`I've read many more books of course, but they're not on this list.\r
    First off, there's `),H=$("strong"),j=_("no fiction"),K=_(` on this tier list.\r
    I read very little of it, certainly not enough to have an interesting list of them.`),Q=P(),T=$("p"),U=_(`Second, the list only contains books that could be considered a "must read" by at least some people.\r
    So `),B=$("strong"),X=_("no super-specific books"),Y=_(' like "ASP.NET 4 Internals" or "HTML 3.2 in 24 Hours" on here either.'),Z=P(),I=$("p"),ee=_("Third, I don't like reading much (even though I do like to "),G=$("em"),te=_("have"),oe=_(` read).\r
    So I tend to research what the classics and recommended books are before diving in at all.\r
    Therefore `),O=$("strong"),re=_("no fringe books"),ne=_(" are likely to appear on my list."),le=P(),w=$("p"),ae=_(`Lastly, I can easily drop a book if I dislike it; and not waste any further time on it.\r
    So `),z=$("strong"),se=_("books I quickly stopped reading"),ie=_(" (so especially low rated books) don't appear on my tier list because I dropped them before giving them a good rating."),this.h()},l(s){V(t.$$.fragment,s),r=M(s),e=k(s,"DIV",{class:!0});var h=v(e);for(let ce=0;ce<u.length;ce+=1)u[ce].l(h);h.forEach(m),o=M(s),n=k(s,"DIV",{class:!0});var b=v(n);l=k(b,"H2",{class:!0});var p=v(l);f=g(p,"Where's the rest!?"),p.forEach(m),a=M(b),d=k(b,"P",{class:!0});var q=v(d);x=g(q,`I've read many more books of course, but they're not on this list.\r
    First off, there's `),H=k(q,"STRONG",{});var me=v(H);j=g(me,"no fiction"),me.forEach(m),K=g(q,` on this tier list.\r
    I read very little of it, certainly not enough to have an interesting list of them.`),q.forEach(m),Q=M(b),T=k(b,"P",{class:!0});var C=v(T);U=g(C,`Second, the list only contains books that could be considered a "must read" by at least some people.\r
    So `),B=k(C,"STRONG",{});var he=v(B);X=g(he,"no super-specific books"),he.forEach(m),Y=g(C,' like "ASP.NET 4 Internals" or "HTML 3.2 in 24 Hours" on here either.'),C.forEach(m),Z=M(b),I=k(b,"P",{class:!0});var R=v(I);ee=g(R,"Third, I don't like reading much (even though I do like to "),G=k(R,"EM",{});var de=v(G);te=g(de,"have"),de.forEach(m),oe=g(R,` read).\r
    So I tend to research what the classics and recommended books are before diving in at all.\r
    Therefore `),O=k(R,"STRONG",{});var pe=v(O);re=g(pe,"no fringe books"),pe.forEach(m),ne=g(R," are likely to appear on my list."),R.forEach(m),le=M(b),w=k(b,"P",{class:!0});var D=v(w);ae=g(D,`Lastly, I can easily drop a book if I dislike it; and not waste any further time on it.\r
    So `),z=k(D,"STRONG",{});var _e=v(z);se=g(_e,"books I quickly stopped reading"),_e.forEach(m),ie=g(D," (so especially low rated books) don't appear on my tier list because I dropped them before giving them a good rating."),D.forEach(m),b.forEach(m),this.h()},h(){L(e,"class","flex flex-col gap-1 bg-black/50 my-2"),L(l,"class","text-xl font-bold mt-4"),L(d,"class","mt-4"),L(T,"class","mt-4"),L(I,"class","mt-4"),L(w,"class","mt-4"),L(n,"class","max-w-4xl")},m(s,h){W(t,s,h),E(s,r,h),E(s,e,h);for(let b=0;b<u.length;b+=1)u[b].m(e,null);E(s,o,h),E(s,n,h),i(n,l),i(l,f),i(n,a),i(n,d),i(d,x),i(d,H),i(H,j),i(d,K),i(n,Q),i(n,T),i(T,U),i(T,B),i(B,X),i(T,Y),i(n,Z),i(n,I),i(I,ee),i(I,G),i(G,te),i(I,oe),i(I,O),i(O,re),i(I,ne),i(n,le),i(n,w),i(w,ae),i(w,z),i(z,se),i(w,ie),A=!0},p(s,[h]){const b={};if(h&256&&(b.$$scope={dirty:h,ctx:s}),t.$set(b),h&3){N=s[0].tierList.tiers;let p;for(p=0;p<N.length;p+=1){const q=be(s,N,p);u[p]?(u[p].p(q,h),y(u[p],1)):(u[p]=ve(q),u[p].c(),y(u[p],1),u[p].m(e,null))}for(ue(),p=N.length;p<u.length;p+=1)Ie(p);fe()}},i(s){if(!A){y(t.$$.fragment,s);for(let h=0;h<N.length;h+=1)y(u[h]);A=!0}},o(s){S(t.$$.fragment,s),u=u.filter(Boolean);for(let h=0;h<u.length;h+=1)S(u[h]);A=!1},d(s){J(t,s),s&&m(r),s&&m(e),ye(u,s),s&&m(o),s&&m(n)}}}function De(c,t,r){let e;we(c,Re,n=>r(1,e=n));let{data:o}=t;return c.$$set=n=>{"data"in n&&r(0,o=n.data)},[o,e]}class Je extends Se{constructor(t){super(),Ee(this,t,De,Ce,Te,{data:0})}}export{Je as default};
