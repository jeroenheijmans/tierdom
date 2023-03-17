import{j as oe}from"./singletons.65506701.js";import{S as ve,i as _e,s as pe,D as ke,k as f,l as d,m as _,h as c,p as i,b as ee,E as Ee,F as we,G as Ie,g as ue,d as de,M as Le,a as U,r as A,c as y,u as q,J as n,K as ge,v as R,w as Ge,f as He,N as je,O as Ce,P as Oe,Q as Re,R as Je,I as ie,n as ze,T as Ke}from"./index.20552f1a.js";oe.disable_scroll_handling;const nl=oe.goto;oe.invalidate;oe.invalidateAll;oe.preload_data;oe.preload_code;oe.before_navigate;oe.after_navigate;function Qe(a){let e,t,r;const l=a[2].default,s=ke(l,a,a[1],null);return{c(){e=f("div"),s&&s.c(),this.h()},l(o){e=d(o,"DIV",{class:!0});var v=_(e);s&&s.l(v),v.forEach(c),this.h()},h(){i(e,"class",t=`border border-slate-700 bg-slate-900 p-4 ${a[0]}`)},m(o,v){ee(o,e,v),s&&s.m(e,null),r=!0},p(o,[v]){s&&s.p&&(!r||v&2)&&Ee(s,l,o,o[1],r?Ie(l,o[1],v,null):we(o[1]),null),(!r||v&1&&t!==(t=`border border-slate-700 bg-slate-900 p-4 ${o[0]}`))&&i(e,"class",t)},i(o){r||(ue(s,o),r=!0)},o(o){de(s,o),r=!1},d(o){o&&c(e),s&&s.d(o)}}}function We(a,e,t){let{$$slots:r={},$$scope:l}=e,{clazz:s=""}=e;return a.$$set=o=>{"clazz"in o&&t(0,s=o.clazz),"$$scope"in o&&t(1,l=o.$$scope)},[s,l,r]}class cl extends ve{constructor(e){super(),_e(this,e,We,Qe,pe,{clazz:0})}}function Be(a,{delay:e=0,duration:t=400,easing:r=Le}={}){const l=+getComputedStyle(a).opacity;return{delay:e,duration:t,easing:r,css:s=>`opacity: ${s*l}`}}function Fe(a){let e,t;const r=a[5].default,l=ke(r,a,a[4],null);return{c(){e=f("span"),l&&l.c(),this.h()},l(s){e=d(s,"SPAN",{class:!0});var o=_(e);l&&l.l(o),o.forEach(c),this.h()},h(){i(e,"class","bg-slate-600 px-2 py-1")},m(s,o){ee(s,e,o),l&&l.m(e,null),t=!0},p(s,o){l&&l.p&&(!t||o&16)&&Ee(l,r,s,s[4],t?Ie(r,s[4],o,null):we(s[4]),null)},i(s){t||(ue(l,s),t=!0)},o(s){de(l,s),t=!1},d(s){s&&c(e),l&&l.d(s)}}}function Ne(a){let e,t,r;return{c(){e=f("img"),this.h()},l(l){e=d(l,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){i(e,"class","h-24"),ie(e.src,t=a[0].artUrlSquare)||i(e,"src",t),i(e,"alt",r=`Box art for ${a[0].title}`)},m(l,s){ee(l,e,s)},p(l,s){s&1&&!ie(e.src,t=l[0].artUrlSquare)&&i(e,"src",t),s&1&&r!==(r=`Box art for ${l[0].title}`)&&i(e,"alt",r)},d(l){l&&c(e)}}}function Me(a){let e,t;return{c(){e=f("img"),this.h()},l(r){e=d(r,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ie(e.src,t=a[0].iconUrl)||i(e,"src",t),i(e,"alt","controller for game system"),i(e,"class","invert h-24")},m(r,l){ee(r,e,l)},p(r,l){l&1&&!ie(e.src,t=r[0].iconUrl)&&i(e,"src",t)},d(r){r&&c(e)}}}function Xe(a){let e,t,r,l,s,o,v,h,$,b=a[0].title+"",z,g,u,p,C=a[2][a[0].tierLevel]+"",M,O,V=a[0].tierLevel+"",H,J,W,K,k,D=a[0].rating+"",T,B,x,j,S=a[0].mainProp+"",I,ne,N,m,w=a[0].description+"",ce,X,Q,le,fe,se,te,me,ae,Y,$e,Ve,P=a[3].default&&Fe(a),L=a[0].hasArt&&Ne(a),G=!!a[0].iconUrl&&Me(a);return{c(){e=f("div"),t=f("div"),r=U(),l=f("div"),s=f("div"),o=f("button"),v=A("x"),h=U(),$=f("h3"),z=A(b),g=U(),u=f("p"),p=f("span"),M=A(C),O=U(),H=A(V),J=A("-tier"),K=U(),k=f("span"),T=A(D),B=A("/100"),x=U(),j=f("span"),I=A(S),ne=U(),P&&P.c(),N=U(),m=f("div"),ce=A(w),X=U(),Q=f("div"),L&&L.c(),le=U(),G&&G.c(),fe=U(),se=f("div"),te=f("div"),this.h()},l(E){e=d(E,"DIV",{class:!0});var F=_(e);t=d(F,"DIV",{class:!0}),_(t).forEach(c),r=y(F),l=d(F,"DIV",{class:!0});var Se=_(l);s=d(Se,"DIV",{class:!0});var Z=_(s);o=d(Z,"BUTTON",{"aria-label":!0,class:!0});var Pe=_(o);v=q(Pe,"x"),Pe.forEach(c),h=y(Z),$=d(Z,"H3",{class:!0});var Ue=_($);z=q(Ue,b),Ue.forEach(c),g=y(Z),u=d(Z,"P",{class:!0});var re=_(u);p=d(re,"SPAN",{class:!0});var he=_(p);M=q(he,C),O=y(he),H=q(he,V),J=q(he,"-tier"),he.forEach(c),K=y(re),k=d(re,"SPAN",{class:!0});var De=_(k);T=q(De,D),B=q(De,"/100"),De.forEach(c),x=y(re),j=d(re,"SPAN",{class:!0});var ye=_(j);I=q(ye,S),ye.forEach(c),ne=y(re),P&&P.l(re),re.forEach(c),N=y(Z),m=d(Z,"DIV",{class:!0});var Ae=_(m);ce=q(Ae,w),Ae.forEach(c),X=y(Z),Q=d(Z,"DIV",{class:!0});var be=_(Q);L&&L.l(be),le=y(be),G&&G.l(be),be.forEach(c),fe=y(Z),se=d(Z,"DIV",{class:!0});var qe=_(se);te=d(qe,"DIV",{class:!0,style:!0}),_(te).forEach(c),qe.forEach(c),Z.forEach(c),Se.forEach(c),F.forEach(c),this.h()},h(){i(t,"class","fixed top-0 left-0 h-screen w-screen bg-black/50"),i(o,"aria-label","Close"),i(o,"class","absolute top-0 right-0 py-2 px-4 m-2 rounded bg-black/10 hover:bg-black/20"),i($,"class","text-3xl font-bold"),i(p,"class",W=`bg-slate-600 px-2 py-1 text-${a[0].tierLevel}-tier`),i(k,"class","bg-slate-600 px-2 py-1 "),i(j,"class","bg-slate-600 px-2 py-1 uppercase"),i(u,"class","mt-2 font-bold flex flex-wrap gap-1"),i(m,"class","my-4"),i(Q,"class","flex flex-wrap gap-2"),i(te,"class","h-full"),i(te,"style",me=`width: ${a[0].rating}%; background-color: ${a[0].ratingColor}`),i(se,"class","h-[4px] mt-4 bg-slate-400 opacity-70"),i(s,"class","p-2 md:px-8 md:py-4 m-2 border border-slate-900 rounded bg-slate-700 drop-shadow-[2px_4px_8px_rgba(0,0,0,0.5)]"),i(l,"class","m-auto w-[800px]"),i(e,"class","fixed top-0 left-0 h-screen w-screen z-50 flex backdrop-blur-sm")},m(E,F){ee(E,e,F),n(e,t),n(e,r),n(e,l),n(l,s),n(s,o),n(o,v),n(s,h),n(s,$),n($,z),n(s,g),n(s,u),n(u,p),n(p,M),n(p,O),n(p,H),n(p,J),n(u,K),n(u,k),n(k,T),n(k,B),n(u,x),n(u,j),n(j,I),n(u,ne),P&&P.m(u,null),n(s,N),n(s,m),n(m,ce),n(s,X),n(s,Q),L&&L.m(Q,null),n(Q,le),G&&G.m(Q,null),n(s,fe),n(s,se),n(se,te),Y=!0,$e||(Ve=[ge(t,"keydown",a[6]),ge(t,"click",a[7]),ge(o,"click",a[8])],$e=!0)},p(E,[F]){(!Y||F&1)&&b!==(b=E[0].title+"")&&R(z,b),(!Y||F&1)&&C!==(C=E[2][E[0].tierLevel]+"")&&R(M,C),(!Y||F&1)&&V!==(V=E[0].tierLevel+"")&&R(H,V),(!Y||F&1&&W!==(W=`bg-slate-600 px-2 py-1 text-${E[0].tierLevel}-tier`))&&i(p,"class",W),(!Y||F&1)&&D!==(D=E[0].rating+"")&&R(T,D),(!Y||F&1)&&S!==(S=E[0].mainProp+"")&&R(I,S),E[3].default?P?(P.p(E,F),F&8&&ue(P,1)):(P=Fe(E),P.c(),ue(P,1),P.m(u,null)):P&&(Ge(),de(P,1,1,()=>{P=null}),He()),(!Y||F&1)&&w!==(w=E[0].description+"")&&R(ce,w),E[0].hasArt?L?L.p(E,F):(L=Ne(E),L.c(),L.m(Q,le)):L&&(L.d(1),L=null),E[0].iconUrl?G?G.p(E,F):(G=Me(E),G.c(),G.m(Q,null)):G&&(G.d(1),G=null),(!Y||F&1&&me!==(me=`width: ${E[0].rating}%; background-color: ${E[0].ratingColor}`))&&i(te,"style",me)},i(E){Y||(ue(P),je(()=>{ae||(ae=Ce(e,Be,{duration:150},!0)),ae.run(1)}),Y=!0)},o(E){de(P),ae||(ae=Ce(e,Be,{duration:150},!1)),ae.run(0),Y=!1},d(E){E&&c(e),P&&P.d(),L&&L.d(),G&&G.d(),E&&ae&&ae.end(),$e=!1,Oe(Ve)}}}function Ye(a,e,t){let{$$slots:r={},$$scope:l}=e;const s=Re(r),o=Je();let{item:v}=e;const h={S:"🤩",A:"😁",B:"😊",C:"🙂",D:"😑",E:"😠",F:"🤮"},$=()=>o("dismiss"),b=()=>o("dismiss"),z=()=>o("dismiss");return a.$$set=g=>{"item"in g&&t(0,v=g.item),"$$scope"in g&&t(4,l=g.$$scope)},[v,o,h,s,l,r,$,b,z]}class ul extends ve{constructor(e){super(),_e(this,e,Ye,Xe,pe,{item:0})}}function Ze(a){let e,t;return{c(){e=f("div"),t=A("x"),this.h()},l(r){e=d(r,"DIV",{class:!0});var l=_(e);t=q(l,"x"),l.forEach(c),this.h()},h(){i(e,"class","w-full h-full bg-white/5 text-black flex justify-center items-center font-bold")},m(r,l){ee(r,e,l),n(e,t)},p:ze,d(r){r&&c(e)}}}function xe(a){let e,t,r;return{c(){e=f("img"),this.h()},l(l){e=d(l,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){i(e,"class","w-full"),ie(e.src,t=a[0].artUrlSquare)||i(e,"src",t),i(e,"alt",r=`Box art for ${a[0].title}`)},m(l,s){ee(l,e,s)},p(l,s){s&1&&!ie(e.src,t=l[0].artUrlSquare)&&i(e,"src",t),s&1&&r!==(r=`Box art for ${l[0].title}`)&&i(e,"alt",r)},d(l){l&&c(e)}}}function Te(a){let e,t,r;return{c(){e=f("div"),t=f("img"),this.h()},l(l){e=d(l,"DIV",{class:!0});var s=_(e);t=d(s,"IMG",{src:!0,alt:!0,class:!0}),s.forEach(c),this.h()},h(){ie(t.src,r=a[0].iconUrl)||i(t,"src",r),i(t,"alt","controller for game system"),i(t,"class","invert max-w-[140px] md:max-w-[140px] max-h-[76px] md:max-h-[92px]"),i(e,"class","float-right p-1 md:p-2 shrink-0 opacity-75")},m(l,s){ee(l,e,s),n(e,t)},p(l,s){s&1&&!ie(t.src,r=l[0].iconUrl)&&i(t,"src",r)},d(l){l&&c(e)}}}function el(a){let e,t,r,l,s,o,v=a[0].title+"",h,$,b,z=a[0].rating+"",g,u,p,C=a[0].mainProp+"",M,O,V,H=a[0].description+"",J,W,K,k,D,T,B;function x(m,w){return m[0].hasArt?xe:Ze}let j=x(a),S=j(a),I=!!a[0].iconUrl&&Te(a);const ne=a[4].default,N=ke(ne,a,a[3],null);return{c(){e=f("div"),t=f("div"),S.c(),r=U(),l=f("div"),I&&I.c(),s=U(),o=f("h3"),h=A(v),$=U(),b=f("h2"),g=A(z),u=A("/100, "),p=f("span"),M=A(C),N&&N.c(),O=U(),V=f("p"),J=A(H),W=U(),K=f("div"),k=f("div"),this.h()},l(m){e=d(m,"DIV",{class:!0});var w=_(e);t=d(w,"DIV",{class:!0});var ce=_(t);S.l(ce),ce.forEach(c),r=y(w),l=d(w,"DIV",{class:!0});var X=_(l);I&&I.l(X),s=y(X),o=d(X,"H3",{class:!0});var Q=_(o);h=q(Q,v),Q.forEach(c),$=y(X),b=d(X,"H2",{class:!0});var le=_(b);g=q(le,z),u=q(le,"/100, "),p=d(le,"SPAN",{class:!0});var fe=_(p);M=q(fe,C),fe.forEach(c),N&&N.l(le),le.forEach(c),O=y(X),V=d(X,"P",{class:!0});var se=_(V);J=q(se,H),se.forEach(c),X.forEach(c),W=y(w),K=d(w,"DIV",{class:!0});var te=_(K);k=d(te,"DIV",{class:!0,style:!0}),_(k).forEach(c),te.forEach(c),w.forEach(c),this.h()},h(){i(t,"class","aspect-square h-24 md:h-32 border-r-2 -mb-2 border-b-2 border-black"),i(o,"class","text-xl font-bold text-slate-100 text-shadow px-2"),i(p,"class","uppercase"),i(b,"class","font-bold text-slate-100 text-shadow px-2"),i(V,"class","p-2 pb-4"),i(l,"class","w-full"),i(k,"class","h-full"),i(k,"style",D=`width: ${a[0].rating}%; background-color: ${a[0].ratingColor}`),i(K,"class","h-[2px] w-full absolute bottom-0 bg-slate-400 opacity-70 transition-all group-hover:h-[8px] group-hover:opacity-80"),i(e,"class",T=`flex w-full border-2 border-black bg-transparent overflow-hidden group relative ${a[1]}`)},m(m,w){ee(m,e,w),n(e,t),S.m(t,null),n(e,r),n(e,l),I&&I.m(l,null),n(l,s),n(l,o),n(o,h),n(l,$),n(l,b),n(b,g),n(b,u),n(b,p),n(p,M),N&&N.m(b,null),n(l,O),n(l,V),n(V,J),n(e,W),n(e,K),n(K,k),B=!0},p(m,[w]){j===(j=x(m))&&S?S.p(m,w):(S.d(1),S=j(m),S&&(S.c(),S.m(t,null))),m[0].iconUrl?I?I.p(m,w):(I=Te(m),I.c(),I.m(l,s)):I&&(I.d(1),I=null),(!B||w&1)&&v!==(v=m[0].title+"")&&R(h,v),(!B||w&1)&&z!==(z=m[0].rating+"")&&R(g,z),(!B||w&1)&&C!==(C=m[0].mainProp+"")&&R(M,C),N&&N.p&&(!B||w&8)&&Ee(N,ne,m,m[3],B?Ie(ne,m[3],w,null):we(m[3]),null),(!B||w&1)&&H!==(H=m[0].description+"")&&R(J,H),(!B||w&1&&D!==(D=`width: ${m[0].rating}%; background-color: ${m[0].ratingColor}`))&&i(k,"style",D),(!B||w&2&&T!==(T=`flex w-full border-2 border-black bg-transparent overflow-hidden group relative ${m[1]}`))&&i(e,"class",T)},i(m){B||(ue(N,m),B=!0)},o(m){de(N,m),B=!1},d(m){m&&c(e),S.d(),I&&I.d(),N&&N.d(m)}}}function ll(a,e,t){let{$$slots:r={},$$scope:l}=e,{item:s}=e,{clazz:o=""}=e;const v="linear-gradient(rgba(20, 20, 30, 0.7), rgba(20, 20, 30, 0.7))";return a.$$set=h=>{"item"in h&&t(0,s=h.item),"clazz"in h&&t(1,o=h.clazz),"$$scope"in h&&t(3,l=h.$$scope)},[s,o,v,l,r]}class fl extends ve{constructor(e){super(),_e(this,e,ll,el,pe,{item:0,clazz:1,gradient:2})}get gradient(){return this.$$.ctx[2]}}function tl(a){let e,t,r,l=a[0].title+"",s,o,v,h,$=a[0].rating+"",b,z,g,u,p=a[0].mainProp+"",C,M,O,V,H,J,W,K;return{c(){e=f("button"),t=f("div"),r=f("h3"),s=A(l),o=U(),v=f("div"),h=f("div"),b=A($),z=A("/100"),g=U(),u=f("span"),C=A(p),M=U(),O=f("div"),V=f("div"),this.h()},l(k){e=d(k,"BUTTON",{class:!0,title:!0});var D=_(e);t=d(D,"DIV",{class:!0,style:!0});var T=_(t);r=d(T,"H3",{class:!0});var B=_(r);s=q(B,l),B.forEach(c),o=y(T),v=d(T,"DIV",{class:!0});var x=_(v);h=d(x,"DIV",{class:!0});var j=_(h);b=q(j,$),z=q(j,"/100"),j.forEach(c),g=y(x),u=d(x,"SPAN",{class:!0});var S=_(u);C=q(S,p),S.forEach(c),x.forEach(c),M=y(T),O=d(T,"DIV",{class:!0});var I=_(O);V=d(I,"DIV",{class:!0,style:!0}),_(V).forEach(c),I.forEach(c),T.forEach(c),D.forEach(c),this.h()},h(){i(r,"class","p-1 pt-0 pr-8 transition-all md:group-hover:pr-0 md:group-hover:text-2xl md:text-xl font-bold text-slate-100 text-shadow "),i(h,"class","mx-1"),i(u,"class","ml-auto mr-2"),i(v,"class","flex items-end mt-auto transition-all md:group-hover:opacity-100 md:group-hover:text-xl font-bold text-slate-200 opacity-60 uppercase "),i(V,"class","h-full"),i(V,"style",H=`width: ${a[0].rating}%; background-color: ${a[0].ratingColor}`),i(O,"class","relative m-1 h-[4px] bg-slate-400 opacity-70 transition-all md:group-hover:h-[16px] md:group-hover:opacity-80 "),i(t,"class","group flex flex-col border-2 border-black bg-slate-600/50 bg-center bg-cover cursor-pointer relative h-full w-full text-left "),i(t,"style",a[2]),i(e,"class",J=`aspect-square w-[50%] md:w-[25%] lg:w-[20%] xl:w-[16.6666667%] 2xl:w-[12.5%] ${a[1]}`),i(e,"title","Click for more details...")},m(k,D){ee(k,e,D),n(e,t),n(t,r),n(r,s),n(t,o),n(t,v),n(v,h),n(h,b),n(h,z),n(v,g),n(v,u),n(u,C),n(t,M),n(t,O),n(O,V),W||(K=ge(e,"click",a[4]),W=!0)},p(k,[D]){D&1&&l!==(l=k[0].title+"")&&R(s,l),D&1&&$!==($=k[0].rating+"")&&R(b,$),D&1&&p!==(p=k[0].mainProp+"")&&R(C,p),D&1&&H!==(H=`width: ${k[0].rating}%; background-color: ${k[0].ratingColor}`)&&i(V,"style",H),D&4&&i(t,"style",k[2]),D&2&&J!==(J=`aspect-square w-[50%] md:w-[25%] lg:w-[20%] xl:w-[16.6666667%] 2xl:w-[12.5%] ${k[1]}`)&&i(e,"class",J)},i:ze,o:ze,d(k){k&&c(e),W=!1,K()}}}function sl(a,e,t){let r,{item:l}=e,{clazz:s=""}=e;const o="linear-gradient(rgba(20, 20, 30, 0.6), rgba(20, 20, 30, 0.6))";function v(h){Ke.call(this,a,h)}return a.$$set=h=>{"item"in h&&t(0,l=h.item),"clazz"in h&&t(1,s=h.clazz)},a.$$.update=()=>{a.$$.dirty&1&&t(2,r=l.hasArt?`background-image: ${o}, url('${l.artUrlSquare}');`:`background-image: ${o};`)},[l,s,r,o,v]}class dl extends ve{constructor(e){super(),_e(this,e,sl,tl,pe,{item:0,clazz:1,gradient:3})}get gradient(){return this.$$.ctx[3]}}function al(a){let e,t,r=a[0].level+"",l,s,o,v,h,$,b;const z=a[2].default,g=ke(z,a,a[1],null);return{c(){e=f("div"),t=f("div"),l=A(r),v=U(),h=f("div"),g&&g.c(),this.h()},l(u){e=d(u,"DIV",{class:!0});var p=_(e);t=d(p,"DIV",{class:!0,title:!0});var C=_(t);l=q(C,r),C.forEach(c),v=y(p),h=d(p,"DIV",{class:!0});var M=_(h);g&&g.l(M),M.forEach(c),p.forEach(c),this.h()},h(){i(t,"class",s=`
      basis-8 md:basis-16 pr-2 shrink-0
      grid place-items-center
      bg-${a[0].level}-tier font-bold uppercase text-4xl text-slate-900/90
    `),i(t,"title",o=a[0].description),i(h,"class","flex flex-wrap gap-0 p-0 w-full"),i(e,"class",$=`
    flex min-h-[4rem]
    bg-neutral-800/50 border-4 border-${a[0].level}-tier
  `)},m(u,p){ee(u,e,p),n(e,t),n(t,l),n(e,v),n(e,h),g&&g.m(h,null),b=!0},p(u,[p]){(!b||p&1)&&r!==(r=u[0].level+"")&&R(l,r),(!b||p&1&&s!==(s=`
      basis-8 md:basis-16 pr-2 shrink-0
      grid place-items-center
      bg-${u[0].level}-tier font-bold uppercase text-4xl text-slate-900/90
    `))&&i(t,"class",s),(!b||p&1&&o!==(o=u[0].description))&&i(t,"title",o),g&&g.p&&(!b||p&2)&&Ee(g,z,u,u[1],b?Ie(z,u[1],p,null):we(u[1]),null),(!b||p&1&&$!==($=`
    flex min-h-[4rem]
    bg-neutral-800/50 border-4 border-${u[0].level}-tier
  `))&&i(e,"class",$)},i(u){b||(ue(g,u),b=!0)},o(u){de(g,u),b=!1},d(u){u&&c(e),g&&g.d(u)}}}function rl(a,e,t){let{$$slots:r={},$$scope:l}=e,{tier:s}=e;return a.$$set=o=>{"tier"in o&&t(0,s=o.tier),"$$scope"in o&&t(1,l=o.$$scope)},[s,l,r]}class hl extends ve{constructor(e){super(),_e(this,e,rl,al,pe,{tier:0})}}export{cl as I,hl as T,ul as a,dl as b,fl as c,nl as g};
