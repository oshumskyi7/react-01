(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[3],{292:function(t,e,s){"use strict";s.d(e,"a",(function(){return l}));var n=s(4),c=s(33),i=s(34),o=s(36),r=s(35),a=s(0),u=s.n(a),j=s(15),p=s(6),b=s(1),d=function(t){return{isAuth:t.auth.isAuth}},l=function(t){var e=function(e){Object(o.a)(a,e);var s=Object(r.a)(a);function a(){return Object(c.a)(this,a),s.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(b.jsx)(t,Object(n.a)({},this.props)):Object(b.jsx)(p.a,{to:"/login/"})}}]),a}(u.a.Component);return Object(j.b)(d)(e)}},294:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3DkMd"}},295:function(t,e,s){t.exports={item:"MyPosts_item__2DmcJ",postsBlock:"MyPosts_postsBlock__3skbR",posts:"MyPosts_posts__1Nw7k"}},296:function(t,e,s){t.exports={item:"Posts_item__1Qlc2"}},298:function(t,e,s){"use strict";s.r(e);var n=s(33),c=s(34),i=s(36),o=s(35),r=s(4),a=s(0),u=s.n(a),j=s(15),p=s(6),b=s(10),d=s(292),l=s(93),O=s(89),f=s(123),h=s(86),m=s(32),x=s(295),v=s.n(x),g=s(296),P=s.n(g),k=s(1),_=function(t){return Object(k.jsxs)("div",{className:P.a.item,children:[Object(k.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfyn0fO1gUKPA_CMtHQn_dDLsBVvOppdbKRQ&usqp=CAU"}),t.message,Object(k.jsx)("div",{children:Object(k.jsxs)("span",{children:[t.likesCount," like"]})})]})},S=Object(h.a)(10),y=Object(f.a)({form:"ProfileAddNewPostForm"})((function(t){return Object(k.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(k.jsx)("div",{children:Object(k.jsx)(O.a,{name:"newPostText",component:m.b,placeholder:"Post message",validate:[h.b,S]})}),Object(k.jsx)("div",{children:Object(k.jsx)("button",{children:"Add post"})})]})})),C=u.a.memo((function(t){console.log("RENDER");var e=t.posts.map((function(t){return Object(k.jsx)(_,{message:t.message,likesCount:t.likesCount})}));return Object(k.jsxs)("div",{className:v.a.postsBlock,children:[Object(k.jsx)("h3",{children:"My posts"}),Object(k.jsx)(y,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(k.jsx)("div",{className:v.a.posts,children:e})]})})),w=Object(j.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(l.a)(e))}}}))(C),A=s(48),B=s(294),M=s.n(B),N=(u.a.Component,s(24)),D=function(t){var e=Object(a.useState)(!1),s=Object(N.a)(e,2),n=s[0],c=s[1],i=Object(a.useState)(t.status),o=Object(N.a)(i,2),r=o[0],u=o[1];Object(a.useEffect)((function(){u(t.status)}),[t.status]);return Object(k.jsxs)("div",{children:[!n&&Object(k.jsx)("div",{children:Object(k.jsx)("span",{onDoubleClick:function(){c(!0)},children:t.status||"----"})}),n&&Object(k.jsx)("div",{children:Object(k.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.updateStatus(r)},value:r})})]})},R=function(t){var e=t.profile,s=t.status,n=t.updateStatus;return e?Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{children:Object(k.jsx)("img",{src:"https://cdn-images-1.medium.com/max/2000/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg",width:"900"})}),Object(k.jsxs)("div",{className:M.a.descriptionBlock,children:[Object(k.jsx)("img",{src:e.photos.large}),Object(k.jsx)(D,{status:s,updateStatus:n}),"discription"]})]}):Object(k.jsx)(A.a,{})},U=function(t){return Object(k.jsxs)("div",{children:[Object(k.jsx)(R,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(k.jsx)(w,{})]})},I=function(t){Object(i.a)(s,t);var e=Object(o.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.params.userId;t||(t=this.props.autorizedUserId),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(k.jsx)(U,Object(r.a)(Object(r.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(u.a.Component);e.default=Object(b.d)(Object(j.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:l.d,getStatus:l.c,updateStatus:l.e}),(function(t){return function(e){var s=Object(p.h)();return Object(k.jsx)(t,Object(r.a)(Object(r.a)({},e),{},{params:s}))}}),d.a)(I)}}]);
//# sourceMappingURL=3.d524b881.chunk.js.map