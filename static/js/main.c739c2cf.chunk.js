(this["webpackJsonpaccountant-helper"]=this["webpackJsonpaccountant-helper"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/print.aed53281.svg"},function(e,t,n){e.exports=n.p+"static/media/copy.8648c684.svg"},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),c=n.n(l),o=(n(14),n(1)),u=n(2),i=n(4),s=n(3),p=(n(15),n(16),function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("h1",{className:"header"},"Accountant helper")}}]),n}(a.Component)),m=(n(17),n(7)),h=n.n(m),v=n(8),f=n.n(v),d=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleFillerChange=function(e){a.setState({valueFiller:e.target.value})},a.handleCounterChange=function(e){a.setState({valueCounter:e.target.value})},a.state={valueFiller:"",valueCounter:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"input"},r.a.createElement("input",{placeholder:"$ - for counter",value:this.state.valueFiller,onChange:this.handleFillerChange}),r.a.createElement("input",{placeholder:"How many to print?",value:this.state.valueCounter,onChange:this.handleCounterChange}),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{className:"btn print",onClick:function(){return e.props.onTextFill({filler:e.state.valueFiller,counter:e.state.valueCounter})}},r.a.createElement("img",{src:h.a,alt:"print button"}),"Print"),r.a.createElement("button",{className:"btn copy",onClick:function(){return e.props.onCopy()}},r.a.createElement("img",{src:f.a,alt:"copy button"}),"Copy"))))}}]),n}(a.Component),b=(n(18),function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"textarea"},this.props.children.map((function(e){return e})))}}]),n}(a.Component)),C=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={textToPrint:[],rawText:""},e.handleTextFilling=function(t){for(var n=t.filler,a=t.counter,l=[],c="",o=1;o<=a;o++){var u="".concat(n,"\n").replace("$",o);c+=u,l[o-1]=r.a.createElement("p",{key:o},u)}e.setState({textToPrint:l}),e.setState({rawText:c})},e.handleCopy=function(){var t=document.createElement("textarea");t.style="position: absolute; left: -1000px; top: -1000px; font-size: 8px;",t.value=e.state.rawText,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement("main",null,r.a.createElement(d,{onTextFill:this.handleTextFilling,onCopy:this.handleCopy}),r.a.createElement(b,null,this.state.textToPrint)))}}]),n}(a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.c739c2cf.chunk.js.map