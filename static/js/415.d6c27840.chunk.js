"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{1454:function(n,t,e){e.d(t,{a:function(){return s}});var r,i=e(8966),o=e(168),a=e(6088).Z.div(r||(r=(0,o.Z)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 1;\n    background-color: #00000080;\n    transition: opacity 250ms, visibility 250ms;\n    z-index: 100;\n"]))),c=e(184),s=function(){return(0,c.jsx)(a,{children:(0,c.jsx)(i.Z1,{height:"100",width:"100",color:"#369daf",wrapperStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})}},2780:function(n,t,e){e.d(t,{e:function(){return w}});var r,i,o,a,c,s=e(2606),u=e(7689),l=e(168),f=e(6088),d=e(1087),p=f.Z.div(r||(r=(0,l.Z)(["\n    position: relative;\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    & img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n"]))),h=(0,f.Z)(d.rU)(i||(i=(0,l.Z)(["\n    display: block;\n    flex-grow: 1;\n"]))),m=f.Z.div(o||(o=(0,l.Z)(["\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 50%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    gap: 20px;\n    padding: 20px;\n    background-color: #000000e8;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n        opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    ","\n"])),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"transform: translateY(0); opacity: 1;":"transform: translateY(100%); opacity: 0;"),v=f.Z.h2(a||(a=(0,l.Z)(["\n    line-height: 1.5;\n    text-align: center;\n    color: ",";\n    font-size: ",";\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes.medium})),g=f.Z.p(c||(c=(0,l.Z)(["\n    padding: 4px 10px;\n    background-color: ",";\n    border-radius: 12px;\n    color: ",";\n    font-size: ",";\n    font-weight: 700;\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.fontSizes.small})),x=e(4757),b=e(184),w=function(n){var t=n.movies,e=(0,u.TH)(),r=function(n){return n.map((function(n){var t=n.id,e=n.title,r=n.original_title,i=n.name,o=n.original_name,a=n.poster_path;return{id:t,movie_title:i||e||o||r,poster:a?"https://image.tmdb.org/t/p/w500/"+a:x}}))}(t);return(0,b.jsx)(s.rj,{children:r.map((function(n){var t,r=n.id,i=n.movie_title,o=n.poster;return(0,b.jsx)(s.P4,{children:(0,b.jsx)(h,{to:null!==(t="/movies/".concat(r))&&void 0!==t?t:"/page-404",state:{from:e},children:(0,b.jsxs)(p,{children:[(0,b.jsx)("img",{src:o,alt:i}),(0,b.jsxs)(m,{className:"js-overlay",children:[(0,b.jsx)(v,{children:i}),(0,b.jsx)(g,{children:"\u0421lick for details"})]})]})})},r)}))})}},5415:function(n,t,e){e.r(t);var r=e(9439),i=e(2606),o=e(1454),a=e(2780),c=e(2791),s=e(4390),u=e(184);t.default=function(){var n=(0,c.useState)(!1),t=(0,r.Z)(n,2),e=t[0],l=t[1],f=(0,c.useState)([]),d=(0,r.Z)(f,2),p=d[0],h=d[1];return(0,c.useRef)(""),(0,c.useEffect)((function(){l(!0),(0,s.iL)().then((function(n){h(n.results)})).finally((function(){l(!1)}))}),[]),(0,u.jsxs)(i.W2,{children:[e&&(0,u.jsx)(o.a,{}),(0,u.jsx)(i.eA,{children:"Trending today"}),(0,u.jsx)(a.e,{movies:p})]})}},4390:function(n,t,e){e.d(t,{HF:function(){return l},iL:function(){return s},uG:function(){return u}});var r=e(5861),i=e(4687),o=e.n(i),a=e(1243);a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="49f12b338a85dcd14c7e661f8eadc77e",s=function(){var n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("trending/movie/day?api_key=".concat(c));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("search/movie?api_key=".concat(c,"&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t,e){var r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(t).concat(e,"?api_key=").concat(c));case 2:return r=n.sent,i=r.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()},4757:function(n,t,e){n.exports=e.p+"static/media/no-poster.33ea28eed030003a405e.jpg"}}]);
//# sourceMappingURL=415.d6c27840.chunk.js.map