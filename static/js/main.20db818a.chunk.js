(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{3:function(e,t,a){e.exports={container:"login_container__1EntJ",wrapper:"login_wrapper__1fLTD",card:"login_card__TffNR",icons:"login_icons__ottPu",iconsGoogle:"login_iconsGoogle__1-0G2","icons-facebook":"login_icons-facebook__3_MnB","icons-apple":"login_icons-apple__2Mea2",linkText:"login_linkText__3YOJ8",title:"login_title__1m1mN",titleLarge:"login_titleLarge__2b9l_",titleSubs:"login_titleSubs__eG0rV",main:"login_main__2wFnB",form:"login_form__392C_",formGroup:"login_formGroup__UvQZN",inputField:"login_inputField__bs0Yx",inputSubmit:"login_inputSubmit__1GXdp",line:"login_line__3pQqV",lineBar:"login_lineBar__3FRVr",lineText:"login_lineText__5p7jv",methodItem:"login_methodItem__2Z0KJ",buttonAction:"login_buttonAction__3GLIt",errorMessage:"login_errorMessage__b_R8K",successMessage:"login_successMessage__3DBSb",loading:"login_loading__2QR9C"}},46:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),i=a.n(c),s=a(30),r=a.n(s),o=a(7),l=a(31),d=(a(38),a(47),l.a.initializeApp({apiKey:"AIzaSyC1YRxNqsndVyoRrtM2h6mH8cY4lJGv0bc",authDomain:"appflix-dev.firebaseapp.com",projectId:"appflix-dev",storageBucket:"appflix-dev.appspot.com",messagingSenderId:"1006827516110",appId:"1:1006827516110:web:862c7cbd67b1db6b9c609f",measurementId:"G-0X012NXVSM"})),u=d.firestore(),j=d.auth(),m=i.a.createContext(),b=function(){return Object(c.useContext)(m)},p=function(e){var t=e.children,a=Object(c.useState)(),i=Object(o.a)(a,2),s=i[0],r=i[1],l=Object(c.useState)(!0),d=Object(o.a)(l,2),u=d[0],b=d[1];Object(c.useEffect)((function(){return j.onAuthStateChanged((function(e){r(e),b(!1)}))}),[]);var p={currentUser:s,signup:function(e,t){return j.createUserWithEmailAndPassword(e,t)},login:function(e,t){return j.signInWithEmailAndPassword(e,t)},logout:function(){return j.signOut()},resetPassword:function(e){return j.sendPasswordResetEmail(e)}};return Object(n.jsx)(m.Provider,{value:p,children:!u&&t})},h=a(10),_=a(9),O=a(13),v=a.n(O),x=a(18),f=a(3),g=a.n(f),N=a.p+"static/media/spinner.8bd3b010.svg",w=function(){var e=b().login,t=Object(c.useRef)(),a=Object(c.useRef)(),i=Object(c.useState)(""),s=Object(o.a)(i,2),r=s[0],l=s[1],d=Object(c.useState)(!1),u=Object(o.a)(d,2),j=u[0],m=u[1],p=Object(_.g)(),O=function(){var n=Object(x.a)(v.a.mark((function n(c){return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),n.prev=1,l(""),m(!0),n.next=6,e(t.current.value,a.current.value);case 6:p.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),l(n.t0.message);case 12:m(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}();return j?Object(n.jsx)("div",{className:g.a.loading,children:Object(n.jsx)("img",{src:N,alt:"Loading..."})}):Object(n.jsx)("div",{children:Object(n.jsx)("main",{className:g.a.main,children:Object(n.jsx)("div",{className:g.a.wrapper,children:Object(n.jsxs)("div",{className:g.a.card,children:[Object(n.jsxs)("div",{className:g.a.title,children:[Object(n.jsx)("div",{hidden:!r,className:g.a.errorMessage,children:r}),Object(n.jsx)("h1",{className:"".concat(g.a.title," ").concat(g.a.titleLarge),children:"Login"}),Object(n.jsxs)("p",{className:"".concat(g.a.title," ").concat(g.a.titleSubs),children:["New user? ",Object(n.jsx)("span",{children:" "}),Object(n.jsx)("span",{children:Object(n.jsx)(h.b,{to:"/signup",className:g.a.linkText,children:"Create an account"})})]})]}),Object(n.jsxs)("form",{className:g.a.form,children:[Object(n.jsx)("div",{className:g.a.formGroup,children:Object(n.jsx)("input",{type:"email",name:"email",id:"email",className:g.a.inputField,ref:t,placeholder:"Email address"})}),Object(n.jsx)("div",{className:g.a.formGroup,children:Object(n.jsx)("input",{type:"password",name:"password",id:"password",className:g.a.inputField,placeholder:"Password",ref:a})}),Object(n.jsxs)("div",{className:g.a.formGroup,children:[Object(n.jsx)(h.b,{className:g.a.linkText,to:"/forgot-password",children:"Forgot Password"}),Object(n.jsx)(h.b,{className:g.a.inputSubmit,role:"button",to:"/",type:"submit",onClick:O,disabled:j,children:"Login"})]})]})]})})})})},y=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),i=Object(c.useRef)(),s=b().signup,r=Object(c.useState)(""),l=Object(o.a)(r,2),d=l[0],u=l[1],j=Object(c.useState)(!1),m=Object(o.a)(j,2),p=m[0],O=m[1],f=Object(_.g)(),w=function(){var t=Object(x.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a.current.value===i.current.value){t.next=3;break}return t.abrupt("return",u("Passwords do not match"));case 3:return t.prev=3,u(""),O(!0),t.next=8,s(e.current.value,a.current.value);case 8:f.push("/"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),u(t.t0.message);case 14:O(!1);case 15:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}();return p?Object(n.jsx)("div",{className:g.a.loading,children:Object(n.jsx)("img",{src:N,alt:"Loading..."})}):Object(n.jsx)("div",{children:Object(n.jsx)("main",{className:g.a.main,children:Object(n.jsx)("div",{className:g.a.wrapper,children:Object(n.jsxs)("div",{className:g.a.card,children:[Object(n.jsxs)("div",{className:g.a.title,children:[Object(n.jsx)("div",{hidden:!d,className:g.a.errorMessage,children:d}),Object(n.jsx)("h1",{className:"".concat(g.a.title," ").concat(g.a.titleLarge),children:"Sign Up"}),Object(n.jsxs)("p",{className:"".concat(g.a.title," ").concat(g.a.titleSubs),children:["Existing user?",Object(n.jsx)("span",{children:Object(n.jsxs)(h.b,{className:g.a.linkText,to:"/login",children:[Object(n.jsx)("span",{children:" "})," Log in"]})})]})]}),Object(n.jsxs)("form",{className:g.a.form,children:[Object(n.jsx)("div",{className:g.a.formGroup,children:Object(n.jsx)("input",{type:"email",name:"email",id:"email",className:g.a.inputField,placeholder:"Email address",ref:e})}),Object(n.jsx)("div",{className:g.a.formGroup,children:Object(n.jsx)("input",{type:"username",name:"username",id:"username",className:g.a.inputField,placeholder:"Username",ref:t})}),Object(n.jsx)("div",{className:g.a.formGroup,children:Object(n.jsx)("input",{type:"password",name:"password",id:"password",className:g.a.inputField,placeholder:"Password",ref:a})}),Object(n.jsx)("div",{className:g.a.formGroup,children:Object(n.jsx)("input",{type:"password",name:"password",id:"confirm-password",className:g.a.inputField,placeholder:"Confirm Password",ref:i})}),Object(n.jsxs)("div",{className:g.a.formGroup,children:[Object(n.jsx)("span",{children:" "}),Object(n.jsx)(h.b,{disabled:p,className:g.a.inputSubmit,role:"button",type:"submit",to:"/signup",onClick:w,children:"Sign up"})]})]})]})})})})},S=function(){var e=b().resetPassword,t=Object(c.useRef)(),a=Object(c.useState)(""),i=Object(o.a)(a,2),s=i[0],r=i[1],l=Object(c.useState)(!1),d=Object(o.a)(l,2),u=d[0],j=d[1],m=Object(c.useState)(""),p=Object(o.a)(m,2),_=p[0],O=p[1],f=function(){var a=Object(x.a)(v.a.mark((function a(n){return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,O(""),r(""),j(!0),a.next=7,e(t.current.value);case 7:O("Check your inbox for further instructions"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),r(a.t0.message);case 13:j(!1);case 14:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e){return a.apply(this,arguments)}}();return u?Object(n.jsx)("div",{className:g.a.loading,children:Object(n.jsx)("img",{src:N,alt:"Loading..."})}):Object(n.jsx)("div",{children:Object(n.jsx)("main",{className:g.a.main,children:Object(n.jsx)("div",{className:g.a.wrapper,children:Object(n.jsxs)("div",{className:g.a.card,children:[Object(n.jsxs)("div",{className:g.a.title,children:[Object(n.jsx)("h1",{className:"".concat(g.a.title," ").concat(g.a.titleLarge),children:"Recover Password"}),Object(n.jsx)("div",{hidden:!s,className:g.a.errorMessage,children:s}),Object(n.jsx)("div",{hidden:!_,className:g.a.successMessage,children:_})]}),Object(n.jsxs)("form",{className:g.a.form,children:[Object(n.jsx)("div",{className:g.a.formGroup,children:Object(n.jsx)("input",{type:"email",name:"email",id:"email",ref:t,className:g.a.inputField,placeholder:"Email address"})}),Object(n.jsxs)("div",{className:g.a.formGroup,children:[Object(n.jsx)(h.b,{className:g.a.linkText,role:"button",to:"/login",children:"Back to Login"}),Object(n.jsx)("button",{className:g.a.inputSubmit,onClick:f,disabled:_.length,children:"Reset Password"})]})]})]})})})})},k=a(5),T=a.n(k),B=function(){var e=Object(_.h)().state,t=e.id,a=e.media_type,i="".concat("https://api.themoviedb.org/3","/").concat(a,"/").concat(t,"?api_key=").concat("7cdca5db04040611abfe882c708d9610"),s=Object(c.useState)(""),r=Object(o.a)(s,2),l=r[0],d=r[1],u=function(){var e=Object(x.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,d(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){u()}),[]);var j=l.poster_path,m="".concat("https://image.tmdb.org/t/p/original","/").concat(j),b=l.original_title||l.original_name,p=l.status,h=l.runtime,O=l.number_of_seasons,f=l.number_of_episodes,g=h||f,N=h?" minutes":" episodes",w=h&&"".concat(Math.floor(h/60)," hour(s) ").concat(h%60," minutes")||"".concat(O," seasons"),y=l.genres&&l.genres.map((function(e){return e.name})).join(", "),S=l.release_date||l.first_air_date,k=l.release_date&&l.release_date.substring(0,4)||l.first_air_date&&l.first_air_date.substring(0,4),B=l.tagline,I=l.overview,L=parseInt(l.budget).toLocaleString(),F=parseInt(l.revenue).toLocaleString(),C="".concat(l.vote_average,"/10"),M=l.vote_count,R=l.production_companies&&l.production_companies.map((function(e){return e.name})).join(", "),E=l.production_countries&&l.production_countries.map((function(e){return e.name})).join(", "),P=l.networks&&l.networks.map((function(e){return e.name})).join(", ");return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:T.a.container,children:Object(n.jsx)("div",{id:T.a.results,children:Object(n.jsx)("div",{id:T.a.movie,children:Object(n.jsxs)("div",{className:T.a.movieDetailsContainer,children:[Object(n.jsx)("div",{className:"".concat(T.a.column," ").concat(T.a.columnMd," ").concat(T.a.movieInfo),children:Object(n.jsx)("img",{src:m,id:T.a.poster,alt:"Movie"})}),Object(n.jsxs)("div",{className:"".concat(T.a.column," ").concat(T.a.columnMd," "),children:[Object(n.jsxs)("h1",{id:T.a.title,children:[b,Object(n.jsxs)("span",{id:T.a.date,children:[" (",k,")"]})]}),Object(n.jsx)("div",{className:T.a.row,children:Object(n.jsx)("span",{className:T.a.badge,children:Object(n.jsx)("span",{id:T.a.status,children:p})})}),Object(n.jsxs)("div",{className:T.a.row,children:[w," | ",y," | ",S]}),Object(n.jsx)("h3",{id:T.a.tagline,children:B}),Object(n.jsx)("div",{id:T.a.overview,children:Object(n.jsx)("p",{id:T.a.synopsis,children:I})}),Object(n.jsxs)("div",{className:T.a.row,children:[Object(n.jsx)("h2",{children:"Company Credits"}),Object(n.jsx)("div",{id:T.a.companies,children:R})]}),Object(n.jsxs)("div",{className:T.a.row,children:[Object(n.jsx)("h2",{children:"Countries"}),Object(n.jsx)("div",{id:T.a.countries,children:E})]}),Object(n.jsx)("div",{className:T.a.row,children:"movie/"===a?Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Box Office"}),Object(n.jsxs)("div",{id:T.a.budget,children:[Object(n.jsx)("strong",{children:"Budget:"})," $",L]}),Object(n.jsxs)("div",{id:T.a.revenue,children:[Object(n.jsx)("strong",{children:"Revenue:"})," $",F]})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Networks"}),Object(n.jsx)("div",{id:T.a.budget,children:P})]})}),Object(n.jsxs)("div",{className:T.a.row,children:[Object(n.jsx)("div",{className:"".concat(T.a.column," ").concat(T.a.columnMd),children:Object(n.jsxs)("div",{className:T.a.ratings,children:[Object(n.jsx)("h2",{children:"Rating"}),Object(n.jsxs)("span",{id:T.a.rating,children:[C,Object(n.jsx)("span",{children:" ("}),M," Votes",Object(n.jsx)("span",{children:")"})]})]})}),Object(n.jsxs)("div",{className:"".concat(T.a.column," ").concat(T.a.columnMd),children:[Object(n.jsx)("h2",{children:"Runtime"}),Object(n.jsx)("div",{children:Object(n.jsxs)("div",{id:T.a.runtime,children:[g,N]})})]}),Object(n.jsxs)("div",{className:"".concat(T.a.column," ").concat(T.a.columnLg),children:[Object(n.jsx)("h2",{children:"Related"}),Object(n.jsx)("ul",{id:T.a.related})]})]})]})]})})})})})},I=a(6),L=a.n(I),F=function(e){var t=e.page,a=e.movieNameSetter;return"search"!==t?Object(n.jsx)("div",{className:L.a.searchBox,children:" "}):Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:L.a.searchBox,children:Object(n.jsx)("input",{type:"search",placeholder:"Search movies...",onChange:a})})})},C=a.p+"static/media/icona.779223e3.png",M=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],i=t[1],s=b(),r=s.currentUser,l=s.logout,d=Object(_.g)(),u=function(){var e=Object(x.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(""),e.prev=1,e.next=4,l();case 4:d.push("/login"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),i(e.t0),console.log(a);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:L.a.navBar,children:[Object(n.jsxs)("div",{className:L.a.navBarTop,children:[Object(n.jsx)("img",{className:L.a.icon,src:C,alt:""}),Object(n.jsx)("div",{className:L.a.username,children:Object(n.jsx)("strong",{children:r.email})}),Object(n.jsx)(h.b,{className:L.a.logout,role:"button",type:"submit",to:"/",onClick:u,hidden:r.isAnonymous,children:"Log Out"})]}),Object(n.jsxs)("div",{className:L.a.tabs,children:[Object(n.jsx)(h.c,{to:"/",exact:!0,activeClassName:L.a.active,children:"Search Movies"}),Object(n.jsx)(h.c,{to:"/favorites",activeClassName:L.a.active,children:"My Favorites"}),Object(n.jsx)(h.c,{to:"/watchlist",activeClassName:L.a.active,children:"My Watch List"}),Object(n.jsx)("span",{children:" "})]})]})},R=a(20),E=function(){var e=b().currentUser;return{watchListMoviesFirestoreRef:u.collection("WatchList").doc(e.uid).collection(e.uid),favoriteMoviesFirestoreRef:u.collection("Favorites").doc(e.uid).collection(e.uid)}},P=function(e){var t=e.title,a=e.description,i=e.poster_path,s=e.id,r=e.media_type,l=b().currentUser,d=Object(c.useState)([]),u=Object(o.a)(d,2),j=u[0],m=u[1],p=Object(c.useState)([]),_=Object(o.a)(p,2),O=_[0],v=_[1],x=E().watchListMoviesFirestoreRef,f=E().favoriteMoviesFirestoreRef;Object(c.useEffect)((function(){f.onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data().id)})),m(t)})),x.onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data().id)})),v(t)}))}),[]);var g={pathname:"/details/".concat(r,"/").concat(s),state:Object(R.a)({},e.movie)};return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:L.a.page,children:Object(n.jsx)("div",{className:L.a.container,children:Object(n.jsxs)("div",{className:L.a.content,children:[Object(n.jsx)(h.b,{to:g,children:Object(n.jsx)("div",{className:L.a.contentOverlay})}),Object(n.jsx)("img",{className:L.a.contentImage,src:"".concat("https://image.tmdb.org/t/p/original","/").concat(i),alt:"Poster"}),Object(n.jsxs)("div",{className:"".concat(L.a.contentDetails," ").concat(L.a.fadeInTop),children:[Object(n.jsxs)(h.b,{to:g,children:[Object(n.jsx)("h3",{children:t}),Object(n.jsx)("p",{children:a})]}),Object(n.jsxs)("div",{className:"".concat(L.a.toolTip," ").concat(L.a.likeButton),onClick:function(){f.add(Object(R.a)(Object(R.a)({},e.movie),{},{uid:l.uid,email:l.email})).then((function(){console.log('"'.concat(e.movie.name||e.movie.title,'" successfully added to Favorites'))})).catch((function(e){console.error("Error adding document: ",e)}))},hidden:j&&j.includes(s),children:["\u2764",Object(n.jsx)("span",{className:L.a.toolTipText,children:"Add to Favorites"})]}),Object(n.jsxs)("div",{className:"".concat(L.a.toolTip," ").concat(L.a.unlikeButton),onClick:function(){return function(e){var t=[],a=f.onSnapshot((function(n){n.forEach((function(a){a.data().id===e&&t.push([a.id,a.data().name||a.data().title,a.data().id,a.data().uid])}));var c=t[0],i=c[0];f.doc(i).delete().then((function(){console.log('"'.concat(c[1],'" successfully deleted from Favorites!'))})).catch((function(e){console.error("Error removing document: ",e)})),a()}))}(s)},hidden:!j||!j.includes(s),children:["x",Object(n.jsx)("span",{className:L.a.toolTipText,children:"Remove from Favorites"})]}),Object(n.jsxs)("div",{className:"".concat(L.a.toolTip," ").concat(L.a.addButton),onClick:function(){x.add(Object(R.a)(Object(R.a)({},e.movie),{},{uid:l.uid,email:l.email})).then((function(){console.log('"'.concat(e.movie.name||e.movie.title,'" successfully added to Watch List'))})).catch((function(e){console.error("Error adding document: ",e)}))},hidden:O&&O.includes(s),children:["+",Object(n.jsx)("span",{className:L.a.toolTipText,children:"Add to Watch List"})]}),Object(n.jsxs)("div",{className:"".concat(L.a.toolTip," ").concat(L.a.removeButton),onClick:function(){return function(e){var t=[],a=x.onSnapshot((function(n){n.forEach((function(a){a.data().id===e&&t.push([a.id,a.data().name||a.data().title,a.data().id,a.data().uid])}));var c=t[0],i=c[0];i&&(x.doc(i).delete().then((function(){console.log('"'.concat(c[1],'" successfully deleted from Watch List!'))})).catch((function(e){console.error("Error removing document: ",e)})),a())}))}(s)},hidden:!O||!O.includes(s),children:["-",Object(n.jsx)("span",{className:L.a.toolTipText,children:"Remove from Watch List"})]})]})]})})})})},G=function(e){var t=e.movies;return t.total_results>0?Object(n.jsx)("div",{children:t.results.map((function(e){return e.poster_path&&Object(n.jsx)(P,{movie:e,title:e.original_title||e.name,description:e.overview,poster_path:e.poster_path,media_type:e.media_type,id:e.id},e.id)}))}):null},D=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],i=t[1],s=Object(c.useState)(!0),r=Object(o.a)(s,2),l=r[0],d=r[1],u=E().watchListMoviesFirestoreRef;return Object(c.useEffect)((function(){u.onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),i(t),d(!1)}))}),[]),a.length<=0&&!l?Object(n.jsx)("div",{className:L.a.emptyPage,children:Object(n.jsx)("h1",{children:"Start adding your Watchlist movies here"})}):Object(n.jsx)("div",{children:a&&a.map((function(e){return Object(n.jsx)(P,{title:e.original_title||e.name,description:e.overview,poster_path:e.poster_path,movie:e,media_type:e.media_type,id:e.id},e.id)}))})},U=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],i=t[1],s=Object(c.useState)(!0),r=Object(o.a)(s,2),l=r[0],d=r[1],u=E().favoriteMoviesFirestoreRef;return Object(c.useEffect)((function(){u.onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),i(t),d(!1)}))}),[]),a.length<=0&&!l?Object(n.jsx)("div",{className:L.a.emptyPage,children:Object(n.jsx)("h1",{children:"Start adding your Favorite movies here"})}):Object(n.jsx)("div",{children:a&&a.map((function(e){return Object(n.jsx)(P,{title:e.original_title||e.name,description:e.overview,poster_path:e.poster_path,movie:e,media_type:e.media_type,id:e.id},e.id)}))})},A=function(e){var t=e.page,a=Object(c.useState)([]),i=Object(o.a)(a,2),s=i[0],r=i[1],l=Object(c.useState)(localStorage.getItem("query")),d=Object(o.a)(l,2),u=d[0],j=d[1],m=Object(c.useRef)(""),b="7cdca5db04040611abfe882c708d9610",p=u,h=function(){var e=Object(x.a)(v.a.mark((function e(){var t,a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="",t=""!==m.current?"".concat("https://api.themoviedb.org/3/search/multi","?api_key=").concat(b,"&query=").concat(p):"".concat("https://api.themoviedb.org/3/trending/all/day","?api_key=").concat(b),e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,r(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){h()}),[]),Object(c.useEffect)((function(){""!==m.current&&localStorage.setItem("query",m.current)})),Object(c.useEffect)((function(){h()}),[u]);return Object(n.jsxs)("div",{children:[Object(n.jsx)(M,{}),Object(n.jsx)(F,{page:t,movieNameSetter:function(e){m.current=e.target.value,j(e.target.value)}}),function(e){switch(e){case"search":return Object(n.jsx)(G,{movies:s});case"watchlist":return Object(n.jsx)(D,{movies:s});case"favorites":return Object(n.jsx)(U,{movies:s});default:return null}}(t)]})},V=function(e){for(var t=e.component,a=b(),c=a.currentUser,i=arguments.length,s=new Array(i>1?i-1:0),r=1;r<i;r++)s[r-1]=arguments[r];return Object(n.jsx)(_.b,Object(R.a)(Object(R.a)({},s),{},{render:function(e){return c?Object(n.jsx)(t,Object(R.a)({},e)):Object(n.jsx)(_.a,{to:"/login"})}}))};var W=function(){return localStorage.removeItem("query"),Object(n.jsx)(h.a,{children:Object(n.jsxs)(_.d,{children:[Object(n.jsx)(V,{path:"/",exact:!0,component:function(){return Object(n.jsx)(A,{page:"search"})}}),Object(n.jsx)(V,{path:"/watchlist",component:function(){return Object(n.jsx)(A,{page:"watchlist"})}}),Object(n.jsx)(V,{path:"/favorites",component:function(){return Object(n.jsx)(A,{page:"favorites"})}}),Object(n.jsx)(_.b,{path:"/login",component:w}),Object(n.jsx)(_.b,{path:"/signup",component:y}),Object(n.jsx)(_.b,{path:"/forgot-password",component:S}),Object(n.jsx)(V,{path:"/details/:mediaType/:id",component:function(){return Object(n.jsx)(B,{page:"details/:mediaType/:id"})}})]})})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(p,{children:Object(n.jsx)(W,{})})}),document.getElementById("root")),q()},5:function(e,t,a){e.exports={container:"details_container__2Naav",searchButton:"details_searchButton__2oeAa",searchIcon:"details_searchIcon__2qP1D",results:"details_results__2i73d",movie:"details_movie__33rFD",movieDetailsContainer:"details_movieDetailsContainer__BVvFR",row:"details_row__1KvcN",column:"details_column__H89iB",columnMd:"details_columnMd__3npyy",columnLg:"details_columnLg__1BDxv",badge:"details_badge__13bcU",date:"details_date__3lVHN",poster:"details_poster__2LVDb",tagline:"details_tagline__1yqI6",movieInfo:"details_movieInfo__3bzs8",genres:"details_genres__2UKpG",runtime:"details_runtime__fvu9P",rating:"details_rating__1kYBT",companies:"details_companies__3vhaq",related:"details_related__xy9Ff",status:"details_status__TSrj-"}},6:function(e,t,a){e.exports={"main-title":"main_main-title__3nLt_",container:"main_container__2LczM",title:"main_title__3-wd3",content:"main_content__1gqRr",contentOverlay:"main_contentOverlay__VeX57",contentImage:"main_contentImage__yYhU3",contentDetails:"main_contentDetails__eTeag","fadeIn-bottom":"main_fadeIn-bottom__3G7iV",fadeInTop:"main_fadeInTop__3uWah","fadeIn-left":"main_fadeIn-left__3Xgrd","fadeIn-right":"main_fadeIn-right__P2bQi",tabs:"main_tabs__1Ts6k",active:"main_active__2KUyx",searchBox:"main_searchBox__3IXXf",likeButton:"main_likeButton__25Eun",unlikeButton:"main_unlikeButton__32XUB",addButton:"main_addButton__3XoAZ",removeButton:"main_removeButton__6YU6d",toolTip:"main_toolTip__1jFut",toolTipText:"main_toolTipText__jBXlN",username:"main_username__LOCDN",logout:"main_logout__13SWx",navBarTop:"main_navBarTop__35tEw",emptyPage:"main_emptyPage__1hnoJ",loading:"main_loading__2igt9",message:"main_message__1xKn4",icon:"main_icon__3ylHV"}}},[[46,1,2]]]);
//# sourceMappingURL=main.20db818a.chunk.js.map