import{s as x,f as d,a as y,l as h,g as $,y as v,c as w,h as C,m as u,d as i,j as P,i as m,A as g}from"../chunks/scheduler.9094476f.js";import{S as b,i as M,b as T,d as k,m as A,a as B,t as D,e as I}from"../chunks/index.940a7c1d.js";import{A as S}from"../chunks/A.0e9b5d3a.js";function j(c){let t;return{c(){t=h("my IMDB ratings for the moment")},l(a){t=u(a,"my IMDB ratings for the moment")},m(a,o){m(a,t,o)},d(a){a&&i(t)}}}function q(c){let t,a="Movies Tier List",o,n,p,r,f,l;return r=new S({props:{href:"https://www.imdb.com/user/ur54522962/ratings?sort=your_rating,desc",$$slots:{default:[j]},$$scope:{ctx:c}}}),{c(){t=d("h1"),t.textContent=a,o=y(),n=d("p"),p=h(`This tier list is not implemented yet! Please check\r
  `),T(r.$$.fragment),f=h("."),this.h()},l(e){t=$(e,"H1",{class:!0,"data-svelte-h":!0}),v(t)!=="svelte-wedxnn"&&(t.textContent=a),o=w(e),n=$(e,"P",{});var s=C(n);p=u(s,`This tier list is not implemented yet! Please check\r
  `),k(r.$$.fragment,s),f=u(s,"."),s.forEach(i),this.h()},h(){P(t,"class","text-2xl font-bold mt-8")},m(e,s){m(e,t,s),m(e,o,s),m(e,n,s),g(n,p),A(r,n,null),g(n,f),l=!0},p(e,[s]){const _={};s&1&&(_.$$scope={dirty:s,ctx:e}),r.$set(_)},i(e){l||(B(r.$$.fragment,e),l=!0)},o(e){D(r.$$.fragment,e),l=!1},d(e){e&&(i(t),i(o),i(n)),I(r)}}}class z extends b{constructor(t){super(),M(this,t,null,q,x,{})}}export{z as component};
