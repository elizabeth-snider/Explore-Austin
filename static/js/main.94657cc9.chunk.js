(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{113:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(22),c=n.n(r),a=(n(113),n(23)),s=n(24),l=n(26),u=n(25),h=(n(74),n(46)),j=(n(75),n(47)),d=n.n(j),p=(n(119),n(161),n(86)),b=n(61),O=n(3),f=n(39),y=n(2),m=n(6),x={position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:99,backgroundColor:"rgba(0,0,0,0.2)"},v={width:"60%",height:"70%",minHeight:"400px",position:"fixed",top:"50%",left:"50%",bottom:"50%",right:"50%",marginTop:"-300px",marginLeft:"-32%",backgroundColor:"#fafafa",borderRadius:"15px",zIndex:"100",padding:"40px",boxShadow:"10px",fontFamily:"Courier New, monospace",fontWeight:"520"},g={cursor:"pointer",position:"absolute",fontSize:"300%",right:"10px",top:"0"},k=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)(h.AwesomeButton,{onPress:function(){return e.simpleDialog.show()},type:"primary",children:"date nights \ud83c\udf39"}),Object(m.jsx)(d.a,{hideOnOverlayClicked:!0,ref:function(t){return e.simpleDialog=t},dialogStyles:v,overlayStyles:x,closeButtonStyle:g,title:"date night locations \ud83c\udf39",children:Object(m.jsx)(A,{keyword:"date",type:"restaurant"})})]})}}]),n}(i.a.Component),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)(h.AwesomeButton,{onPress:function(){return e.simpleDialog.show()},type:"primary",children:"outdoor activities \u2600\ufe0f"}),Object(m.jsx)(d.a,{hideOnOverlayClicked:!0,ref:function(t){return e.simpleDialog=t},dialogStyles:v,overlayStyles:x,closeButtonStyle:g,title:"outdoor activities locations \u2600\ufe0f",children:Object(m.jsx)(A,{keyword:"outdoor activities",type:"none"})})]})}}]),n}(i.a.Component),S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)(h.AwesomeButton,{onPress:function(){return e.simpleDialog.show()},type:"primary",children:"coffee & tea \u2615"}),Object(m.jsx)(d.a,{hideOnOverlayClicked:!0,ref:function(t){return e.simpleDialog=t},dialogStyles:v,overlayStyles:x,closeButtonStyle:g,title:"coffee & tea locations \u2615",children:Object(m.jsx)(A,{keyword:"coffee and tea",type:"none"})})]})}}]),n}(i.a.Component),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)(h.AwesomeButton,{onPress:function(){return e.simpleDialog.show()},type:"primary",children:"brunch \ud83e\udd50"}),Object(m.jsx)(d.a,{hideOnOverlayClicked:!0,ref:function(t){return e.simpleDialog=t},dialogStyles:v,overlayStyles:x,closeButtonStyle:g,title:"brunch locations \ud83e\udd50",children:Object(m.jsx)(A,{keyword:"brunch",type:"restaurant"})})]})}}]),n}(i.a.Component),A=(n(141),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).state={list:[],photos:[]},o}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.search()}},{key:"search",value:function(){var e=this,t="&type="+this.props.type,n="&keyword="+this.props.keyword;fetch("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=30.267,-97.733&radius=2000"+t+n+"&key=AIzaSyA0u0GkazihaJoi_N6YAT5v-kv61OaXkjA",{headers:new Headers({"Access-Control-Allow-Origin":"*"})}).then((function(e){return e.json()})).then((function(t){return e.setState({list:t})})).catch((function(e){return console.log(e)}))}},{key:"fetchPhoto",value:function(e){var t=this;fetch("https://maps.googleapis.com/maps/api/place/photo?"+("photo_reference="+e)+"&maxheight=200&maxwidth=200&key=AIzaSyA0u0GkazihaJoi_N6YAT5v-kv61OaXkjA").then((function(e){return t.setState({photo:e})}))}},{key:"render",value:function(){return console.log(this.state.list.results),Object(m.jsx)(p.a,{children:Object(m.jsx)(b.a,{style:B.container,contentContainerStyle:B.children,numColumns:1,data:this.state.list.results,keyExtractor:function(e){return e.place_id},renderItem:function(e){var t=e.item;return Object(m.jsx)(O.a,{children:Object(m.jsx)(f.a,{style:{fontFamily:"Courier New, monospace",fontWeight:"bold",fontSize:"120%",color:"#2a6787"},children:t.name})})}})})}}]),n}(i.a.Component)),B=y.a.create({container:{display:"flex",height:"100%"},children:{justifyContent:"space-between",alignItems:"center"}}),D=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(I,{}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)(k,{}),Object(m.jsx)(w,{}),Object(m.jsx)(S,{}),Object(m.jsx)(C,{})]}),Object(m.jsx)("div",{className:"bottomText",children:Object(m.jsx)("p",{children:" ~ all locations are in austin, texas \ud83d\udccd ~ "})}),Object(m.jsx)("div",{className:"api",children:Object(m.jsx)("p",{children:" - updated using the Google Places API - "})})]})}}]),n}(i.a.Component);function I(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"text",children:Object(m.jsx)("p",{children:"welcome"})}),Object(m.jsx)("div",{className:"smallerText",children:Object(m.jsx)("p",{children:" choose a category! "})})]})}var N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,163)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),o(e),i(e),r(e),c(e)}))};c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root")),N()},74:function(e,t,n){}},[[160,1,2]]]);
//# sourceMappingURL=main.94657cc9.chunk.js.map