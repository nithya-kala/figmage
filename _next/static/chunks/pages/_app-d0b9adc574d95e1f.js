(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4474:function(e,t,r){"use strict";r.d(t,{Z:function(){return oe}});var n=r(1526),o=Math.abs,a=String.fromCharCode,i=Object.assign;function c(e){return e.trim()}function s(e,t,r){return e.replace(t,r)}function u(e,t){return e.indexOf(t)}function l(e,t){return 0|e.charCodeAt(t)}function f(e,t,r){return e.slice(t,r)}function d(e){return e.length}function p(e){return e.length}function m(e,t){return t.push(e),e}var b=1,h=1,y=0,g=0,v=0,x="";function k(e,t,r,n,o,a,i){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:b,column:h,length:i,return:""}}function S(e,t){return i(k("",null,null,"",null,null,0),e,{length:-e.length},t)}function w(){return v=g>0?l(x,--g):0,h--,10===v&&(h=1,b--),v}function $(){return v=g<y?l(x,g++):0,h++,10===v&&(h=1,b++),v}function O(){return l(x,g)}function C(){return g}function j(e,t){return f(x,e,t)}function z(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function P(e){return b=h=1,y=d(x=e),g=0,[]}function A(e){return x="",e}function E(e){return c(j(g-1,N(91===e?e+2:40===e?e+1:e)))}function M(e){for(;(v=O())&&v<33;)$();return z(e)>2||z(v)>3?"":" "}function F(e,t){for(;--t&&$()&&!(v<48||v>102||v>57&&v<65||v>70&&v<97););return j(e,C()+(t<6&&32==O()&&32==$()))}function N(e){for(;$();)switch(v){case e:return g;case 34:case 39:34!==e&&39!==e&&N(v);break;case 40:41===e&&N(e);break;case 92:$()}return g}function _(e,t){for(;$()&&e+v!==57&&(e+v!==84||47!==O()););return"/*"+j(t,g-1)+"*"+a(47===e?e:$())}function R(e){for(;!z(O());)$();return j(e,g)}var T="-ms-",H="-moz-",G="-webkit-",I="comm",W="rule",D="decl",B="@keyframes";function L(e,t){for(var r="",n=p(e),o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function Z(e,t,r,n){switch(e.type){case"@import":case D:return e.return=e.return||e.value;case I:return"";case B:return e.return=e.value+"{"+L(e.children,n)+"}";case W:e.value=e.props.join(",")}return d(r=L(e.children,n))?e.return=e.value+"{"+r+"}":""}function U(e,t){switch(function(e,t){return(((t<<2^l(e,0))<<2^l(e,1))<<2^l(e,2))<<2^l(e,3)}(e,t)){case 5103:return G+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return G+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return G+e+H+e+T+e+e;case 6828:case 4268:return G+e+T+e+e;case 6165:return G+e+T+"flex-"+e+e;case 5187:return G+e+s(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return G+e+T+"flex-item-"+s(e,/flex-|-self/,"")+e;case 4675:return G+e+T+"flex-line-pack"+s(e,/align-content|flex-|-self/,"")+e;case 5548:return G+e+T+s(e,"shrink","negative")+e;case 5292:return G+e+T+s(e,"basis","preferred-size")+e;case 6060:return G+"box-"+s(e,"-grow","")+G+e+T+s(e,"grow","positive")+e;case 4554:return G+s(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return s(s(s(e,/(zoom-|grab)/,G+"$1"),/(image-set)/,G+"$1"),e,"")+e;case 5495:case 3959:return s(e,/(image-set\([^]*)/,G+"$1$`$1");case 4968:return s(s(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+G+e+e;case 4095:case 3583:case 4068:case 2532:return s(e,/(.+)-inline(.+)/,G+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(d(e)-1-t>6)switch(l(e,t+1)){case 109:if(45!==l(e,t+4))break;case 102:return s(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+H+(108==l(e,t+3)?"$3":"$2-$3"))+e;case 115:return~u(e,"stretch")?U(s(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==l(e,t+1))break;case 6444:switch(l(e,d(e)-3-(~u(e,"!important")&&10))){case 107:return s(e,":",":"+G)+e;case 101:return s(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+G+(45===l(e,14)?"inline-":"")+"box$3$1"+G+"$2$3$1"+T+"$2box$3")+e}break;case 5936:switch(l(e,t+11)){case 114:return G+e+T+s(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return G+e+T+s(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return G+e+T+s(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return G+e+T+e+e}return e}function Y(e){return A(q("",null,null,null,[""],e=P(e),0,[0],e))}function q(e,t,r,n,o,i,c,l,f){for(var p=0,b=0,h=c,y=0,g=0,v=0,x=1,k=1,S=1,j=0,z="",P=o,A=i,N=n,T=z;k;)switch(v=j,j=$()){case 40:if(108!=v&&58==T.charCodeAt(h-1)){-1!=u(T+=s(E(j),"&","&\f"),"&\f")&&(S=-1);break}case 34:case 39:case 91:T+=E(j);break;case 9:case 10:case 13:case 32:T+=M(v);break;case 92:T+=F(C()-1,7);continue;case 47:switch(O()){case 42:case 47:m(X(_($(),C()),t,r),f);break;default:T+="/"}break;case 123*x:l[p++]=d(T)*S;case 125*x:case 59:case 0:switch(j){case 0:case 125:k=0;case 59+b:g>0&&d(T)-h&&m(g>32?J(T+";",n,r,h-1):J(s(T," ","")+";",n,r,h-2),f);break;case 59:T+=";";default:if(m(N=V(T,t,r,p,b,o,l,z,P=[],A=[],h),i),123===j)if(0===b)q(T,t,N,N,P,i,h,l,A);else switch(y){case 100:case 109:case 115:q(e,N,N,n&&m(V(e,N,N,0,0,o,l,z,o,P=[],h),A),o,A,h,l,n?P:A);break;default:q(T,N,N,N,[""],A,0,l,A)}}p=b=g=0,x=S=1,z=T="",h=c;break;case 58:h=1+d(T),g=v;default:if(x<1)if(123==j)--x;else if(125==j&&0==x++&&125==w())continue;switch(T+=a(j),j*x){case 38:S=b>0?1:(T+="\f",-1);break;case 44:l[p++]=(d(T)-1)*S,S=1;break;case 64:45===O()&&(T+=E($())),y=O(),b=h=d(z=T+=R(C())),j++;break;case 45:45===v&&2==d(T)&&(x=0)}}return i}function V(e,t,r,n,a,i,u,l,d,m,b){for(var h=a-1,y=0===a?i:[""],g=p(y),v=0,x=0,S=0;v<n;++v)for(var w=0,$=f(e,h+1,h=o(x=u[v])),O=e;w<g;++w)(O=c(x>0?y[w]+" "+$:s($,/&\f/g,y[w])))&&(d[S++]=O);return k(e,t,r,0===a?W:l,d,m,b)}function X(e,t,r){return k(e,t,r,I,a(v),f(e,2,-2),0)}function J(e,t,r,n){return k(e,t,r,D,f(e,0,n),f(e,n+1,-1),n)}var K=function(e,t,r){for(var n=0,o=0;n=o,o=O(),38===n&&12===o&&(t[r]=1),!z(o);)$();return j(e,g)},Q=function(e,t){return A(function(e,t){var r=-1,n=44;do{switch(z(n)){case 0:38===n&&12===O()&&(t[r]=1),e[r]+=K(g-1,t,r);break;case 2:e[r]+=E(n);break;case 4:if(44===n){e[++r]=58===O()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=a(n)}}while(n=$());return e}(P(e),t))},ee=new WeakMap,te=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ee.get(r))&&!n){ee.set(e,!0);for(var o=[],a=Q(t,o),i=r.props,c=0,s=0;c<a.length;c++)for(var u=0;u<i.length;u++,s++)e.props[s]=o[c]?a[c].replace(/&\f/g,i[u]):i[u]+" "+a[c]}}},re=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},ne=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case D:e.return=U(e.value,e.length);break;case B:return L([S(e,{value:s(e.value,"@","@"+G)})],n);case W:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return L([S(e,{props:[s(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return L([S(e,{props:[s(t,/:(plac\w+)/,":-webkit-input-$1")]}),S(e,{props:[s(t,/:(plac\w+)/,":-moz-$1")]}),S(e,{props:[s(t,/:(plac\w+)/,T+"input-$1")]})],n)}return""}))}}],oe=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var o=e.stylisPlugins||ne;var a,i,c={},s=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)c[t[r]]=!0;s.push(e)}));var u,l,f=[Z,(l=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&l(e)})],d=function(e){var t=p(e);return function(r,n,o,a){for(var i="",c=0;c<t;c++)i+=e[c](r,n,o,a)||"";return i}}([te,re].concat(o,f));i=function(e,t,r,n){u=r,L(Y(e?e+"{"+t.styles+"}":t.styles),d),n&&(m.inserted[t.name]=!0)};var m={key:t,sheet:new n.m({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:c,registered:{},insert:i};return m.sheet.hydrate(s),m}},1055:function(e,t,r){"use strict";r.d(t,{xB:function(){return f},iv:function(){return d}});var n=r(7294),o=r(4474),a=r(2243),i=(0,n.createContext)("undefined"!==typeof HTMLElement?(0,o.Z)({key:"css"}):null);i.Provider;var c=function(e){return(0,n.forwardRef)((function(t,r){var o=(0,n.useContext)(i);return e(t,o,r)}))},s=(0,n.createContext)({});r(8679);var u=r(444),l=r(1526),f=c((function(e,t){var r=e.styles,o=(0,a.O)([r],void 0,(0,n.useContext)(s)),i=(0,n.useRef)();return(0,n.useLayoutEffect)((function(){var e=t.key+"-global",r=new l.m({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),n=!1,a=document.querySelector('style[data-emotion="'+e+" "+o.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==a&&(n=!0,a.setAttribute("data-emotion",e),r.hydrate([a])),i.current=[r,n],function(){r.flush()}}),[t]),(0,n.useLayoutEffect)((function(){var e=i.current,r=e[0];if(e[1])e[1]=!1;else{if(void 0!==o.next&&(0,u.M)(t,o.next,!0),r.tags.length){var n=r.tags[r.tags.length-1].nextElementSibling;r.before=n,r.flush()}t.insert("",o,r,!1)}}),[t,o.name]),null}));function d(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.O)(t)}},2243:function(e,t,r){"use strict";r.d(t,{O:function(){return m}});var n=function(e){for(var t,r=0,n=0,o=e.length;o>=4;++n,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(o){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},o={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var a=/[A-Z]|^ms/g,i=/_EMO_([^_]+?)_([^]*?)_EMO_/g,c=function(e){return 45===e.charCodeAt(1)},s=function(e){return null!=e&&"boolean"!==typeof e},u=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return c(e)?e:e.replace(a,"-$&").toLowerCase()})),l=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(i,(function(e,t,r){return d={name:t,styles:r,next:d},t}))}return 1===o[e]||c(e)||"number"!==typeof t||0===t?t:t+"px"};function f(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return d={name:r.name,styles:r.styles,next:d},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)d={name:n.name,styles:n.styles,next:d},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=f(e,t,r[o])+";";else for(var a in r){var i=r[a];if("object"!==typeof i)null!=t&&void 0!==t[i]?n+=a+"{"+t[i]+"}":s(i)&&(n+=u(a)+":"+l(a,i)+";");else if(!Array.isArray(i)||"string"!==typeof i[0]||null!=t&&void 0!==t[i[0]]){var c=f(e,t,i);switch(a){case"animation":case"animationName":n+=u(a)+":"+c+";";break;default:n+=a+"{"+c+"}"}}else for(var d=0;d<i.length;d++)s(i[d])&&(n+=u(a)+":"+l(a,i[d])+";")}return n}(e,t,r);case"function":if(void 0!==e){var o=d,a=r(e);return d=o,f(e,t,a)}}if(null==t)return r;var i=t[r];return void 0!==i?i:r}var d,p=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var m=function(e,t,r){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var o=!0,a="";d=void 0;var i=e[0];null==i||void 0===i.raw?(o=!1,a+=f(r,t,i)):a+=i[0];for(var c=1;c<e.length;c++)a+=f(r,t,e[c]),o&&(a+=i[c]);p.lastIndex=0;for(var s,u="";null!==(s=p.exec(a));)u+="-"+s[1];return{name:n(a)+u,styles:a,next:d}}},1526:function(e,t,r){"use strict";r.d(t,{m:function(){return n}});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}()},444:function(e,t,r){"use strict";r.d(t,{M:function(){return o},f:function(){return n}});function n(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var o=function(e,t,r){var n=e.key+"-"+t.name;if(!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles),void 0===e.inserted[t.name]){var o=t;do{e.insert(t===o?"."+n:"",o,e.sheet,!0);o=o.next}while(void 0!==o)}}},1648:function(e,t,r){"use strict";r.d(t,{Me:function(){return ae},Z3:function(){return oe},ly:function(){return ne},rZ:function(){return te},sr:function(){return re}});var n=r(7294);const o={dark:["#C1C2C5","#A6A7AB","#909296","#5c5f66","#373A40","#2C2E33","#25262b","#1A1B1E","#141517","#101113"],gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],red:["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],pink:["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],grape:["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],violet:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],indigo:["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],blue:["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],teal:["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],green:["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],lime:["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],yellow:["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],orange:["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]};function a(e){return(t,r,n=!0)=>{const o=e.colors[e.primaryColor];return t in e.colors?e.colors[t][r]:n?o[r]:t}}function i(e){let t="";for(let r=1;r<e.length-1;r+=1)t+=`${e[r]} ${r/(e.length-1)*100}%, `;return`${e[0]} 0%, ${t}${e[e.length-1]} 100%`}function c(e){return"number"===typeof e.size?e.size:e.sizes[e.size]||e.size||e.sizes.md}function s(e){return/^#?([0-9A-F]{3}){1,2}$/i.test(e)?function(e){let t=e.replace("#","");if(3===t.length){const e=t.split("");t=[e[0],e[0],e[1],e[1],e[2],e[2]].join("")}const r=parseInt(t,16);return{r:r>>16&255,g:r>>8&255,b:255&r,a:1}}(e):e.startsWith("rgb")?function(e){const[t,r,n,o]=e.replace(/[^0-9,.]/g,"").split(",").map(Number);return{r:t,g:r,b:n,a:o||1}}(e):{r:0,g:0,b:0,a:1}}function u(e,t){if("string"!==typeof e||t>1||t<0)return"rgba(0, 0, 0, 1)";const{r:r,g:n,b:o}=s(e);return`rgba(${r}, ${n}, ${o}, ${t})`}function l(e){return t=>"number"===typeof e.primaryShade?e.primaryShade:e.primaryShade[t||e.colorScheme]}const f="indigo",d="cyan",p=45;const m={fontStyles:function(e){return()=>({fontFamily:e.fontFamily||"sans-serif"})},themeColor:a,focusStyles:function(e){return()=>({WebkitTapHighlightColor:"transparent","&:focus":{outlineOffset:2,outline:"always"===e.focusRing||"auto"===e.focusRing?`2px solid ${e.colors[e.primaryColor]["dark"===e.colorScheme?7:5]}`:"none"},"&:focus:not(:focus-visible)":{outline:"auto"===e.focusRing||"never"===e.focusRing?"none":void 0}})},linearGradient:function(e,...t){return`linear-gradient(${e}deg, ${i(t)})`},radialGradient:function(...e){return`radial-gradient(circle, ${i(e)})`},smallerThan:function(e){return t=>`@media (max-width: ${c({size:t,sizes:e.breakpoints})}px)`},largerThan:function(e){return t=>`@media (min-width: ${c({size:t,sizes:e.breakpoints})+1}px)`},rgba:u,size:c,cover:function(e=0){return{position:"absolute",top:e,right:e,left:e,bottom:e}},darken:function(e,t){const{r:r,g:n,b:o,a:a}=s(e),i=1-t,c=e=>Math.round(e*i);return`rgba(${c(r)}, ${c(n)}, ${c(o)}, ${a})`},lighten:function(e,t){const{r:r,g:n,b:o,a:a}=s(e),i=e=>Math.round(e+(255-e)*t);return`rgba(${i(r)}, ${i(n)}, ${i(o)}, ${a})`},radius:function(e){return t=>{if("number"===typeof t)return t;const r="number"===typeof e.defaultRadius?e.defaultRadius:e.radius[e.defaultRadius]||e.defaultRadius;return e.radius[t]||t||r}},variant:function(e){const t=a(e),r=l(e);return({variant:n,color:o,gradient:a})=>{if("light"===n)return{border:"transparent",background:u(t(o,"dark"===e.colorScheme?8:0),"dark"===e.colorScheme?.35:1),color:"dark"===o?"dark"===e.colorScheme?e.colors.dark[0]:e.colors.dark[9]:t(o,"dark"===e.colorScheme?2:r("light")),hover:u(t(o,"dark"===e.colorScheme?7:1),"dark"===e.colorScheme?.45:.65)};if("default"===n)return{border:"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[4],background:"dark"===e.colorScheme?e.colors.dark[5]:e.white,color:"dark"===e.colorScheme?e.white:e.black,hover:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[0]};if("white"===n)return{border:"transparent",background:e.white,color:t(o,r()),hover:null};if("outline"===n)return{border:t(o,"dark"===e.colorScheme?4:r("light")),background:"transparent",color:t(o,"dark"===e.colorScheme?4:r("light")),hover:"dark"===e.colorScheme?u(t(o,4),.05):u(t(o,0),.35)};if("gradient"===n){const n={from:(null==a?void 0:a.from)||f,to:(null==a?void 0:a.to)||d,deg:(null==a?void 0:a.deg)||p};return{background:`linear-gradient(${n.deg}deg, ${t(n.from,r(),!1)} 0%, ${t(n.to,r(),!1)} 100%)`,color:e.white,border:"transparent",hover:null}}return"subtle"===n?{border:"transparent",background:"transparent",color:"dark"===o?"dark"===e.colorScheme?e.colors.dark[0]:e.colors.dark[9]:t(o,"dark"===e.colorScheme?2:r("light")),hover:u(t(o,"dark"===e.colorScheme?8:0),"dark"===e.colorScheme?.35:1)}:{border:"transparent",background:t(o,r()),color:e.white,hover:t(o,9===r()?8:r()+1)}}},primaryShade:l,hover:function(e){return{"@media (hover: hover)":{"&:hover":e},"@media (hover: none)":{"&:active":e}}}};var b=Object.defineProperty,h=Object.defineProperties,y=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,k=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function S(e){return t=((e,t)=>{for(var r in t||(t={}))v.call(t,r)&&k(e,r,t[r]);if(g)for(var r of g(t))x.call(t,r)&&k(e,r,t[r]);return e})({},e),r={fn:{fontStyles:m.fontStyles(e),themeColor:m.themeColor(e),focusStyles:m.focusStyles(e),largerThan:m.largerThan(e),smallerThan:m.smallerThan(e),radialGradient:m.radialGradient,linearGradient:m.linearGradient,rgba:m.rgba,size:m.size,cover:m.cover,lighten:m.lighten,darken:m.darken,primaryShade:m.primaryShade(e),radius:m.radius(e),variant:m.variant(e),hover:m.hover}},h(t,y(r));var t,r}Object.keys(o);const w=S({dir:"ltr",primaryShade:{light:6,dark:8},focusRing:"auto",loader:"oval",dateFormat:"MMMM D, YYYY",colorScheme:"light",white:"#fff",black:"#000",defaultRadius:"sm",transitionTimingFunction:"ease",colors:o,lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",primaryColor:"blue",shadows:{xs:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",sm:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",md:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",lg:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xl:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},fontSizes:{xs:12,sm:14,md:16,lg:18,xl:20},radius:{xs:2,sm:4,md:8,lg:16,xl:32},spacing:{xs:10,sm:12,md:16,lg:20,xl:24},breakpoints:{xs:576,sm:768,md:992,lg:1200,xl:1400},headings:{fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontWeight:700,sizes:{h1:{fontSize:34,lineHeight:1.3},h2:{fontSize:26,lineHeight:1.35},h3:{fontSize:22,lineHeight:1.4},h4:{fontSize:18,lineHeight:1.45},h5:{fontSize:16,lineHeight:1.5},h6:{fontSize:14,lineHeight:1.5}}},other:{},datesLocale:"en"});var $=r(1055),O=Object.defineProperty,C=Object.defineProperties,j=Object.getOwnPropertyDescriptors,z=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,E=(e,t,r)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,M=(e,t)=>{for(var r in t||(t={}))P.call(t,r)&&E(e,r,t[r]);if(z)for(var r of z(t))A.call(t,r)&&E(e,r,t[r]);return e};function F({theme:e}){return n.createElement($.xB,{styles:{"*, *::before, *::after":{boxSizing:"border-box"},body:(t=M({},e.fn.fontStyles()),r={backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,lineHeight:e.lineHeight,fontSize:e.fontSizes.md,WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"},C(t,j(r)))}});var t,r}function N(e,t,r){Object.keys(t).forEach((n=>{e[`--mantine-${r}-${n}`]="number"===typeof t[n]?`${t[n]}px`:t[n]}))}function _({theme:e}){const t={"--mantine-color-white":e.white,"--mantine-color-black":e.black,"--mantine-transition-timing-function":e.transitionTimingFunction,"--mantine-line-height":`${e.lineHeight}`,"--mantine-font-family":e.fontFamily,"--mantine-font-family-monospace":e.fontFamilyMonospace,"--mantine-font-family-headings":e.headings.fontFamily,"--mantine-heading-font-weight":`${e.headings.fontWeight}`};N(t,e.shadows,"shadow"),N(t,e.fontSizes,"font-size"),N(t,e.radius,"radius"),N(t,e.spacing,"spacing"),Object.keys(e.colors).forEach((r=>{e.colors[r].forEach(((e,n)=>{t[`--mantine-color-${r}-${n}`]=e}))}));const r=e.headings.sizes;return Object.keys(r).forEach((e=>{t[`--mantine-${e}-font-size`]=`${r[e].fontSize}px`,t[`--mantine-${e}-line-height`]=`${r[e].lineHeight}`})),n.createElement($.xB,{styles:{":root":t}})}var R=Object.defineProperty,T=Object.defineProperties,H=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,D=(e,t,r)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,B=(e,t)=>{for(var r in t||(t={}))I.call(t,r)&&D(e,r,t[r]);if(G)for(var r of G(t))W.call(t,r)&&D(e,r,t[r]);return e},L=(e,t)=>T(e,H(t));function Z(e,t){return S(function(e,t){return t?Object.keys(e).reduce(((r,n)=>{if("headings"===n&&t.headings){const n=t.headings.sizes?Object.keys(e.headings.sizes).reduce(((r,n)=>(r[n]=B(B({},e.headings.sizes[n]),t.headings.sizes[n]),r)),{}):e.headings.sizes;return L(B({},r),{headings:L(B(B({},e.headings),t.headings),{sizes:n})})}return r[n]="object"===typeof t[n]?B(B({},e[n]),t[n]):"number"===typeof t[n]?t[n]:t[n]||e[n],r}),{}):e}(e,t))}const U={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em"},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"textfield",outlineOffset:"-2px"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}};function Y(){return n.createElement($.xB,{styles:U})}var q=Object.defineProperty,V=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,K=(e,t,r)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Q=(e,t)=>{for(var r in t||(t={}))X.call(t,r)&&K(e,r,t[r]);if(V)for(var r of V(t))J.call(t,r)&&K(e,r,t[r]);return e};const ee=(0,n.createContext)({theme:w,styles:{},classNames:{},emotionOptions:{key:"mantine",prepend:!0},defaultProps:{}});function te(){var e;return(null==(e=(0,n.useContext)(ee))?void 0:e.theme)||w}function re(e){const t=(0,n.useContext)(ee);return{styles:t.styles[e]||{},classNames:t.classNames[e]||{}}}function ne(){var e;return(null==(e=(0,n.useContext)(ee))?void 0:e.emotionOptions)||{key:"mantine",prepend:!0}}function oe(e,t,r){var o,a;const i=(null==(a=null==(o=(0,n.useContext)(ee))?void 0:o.defaultProps)?void 0:a[e])||{};return Q(Q(Q({},t),i),function(e){return Object.keys(e).reduce(((t,r)=>(void 0!==e[r]&&(t[r]=e[r]),t)),{})}(r))}function ae({theme:e,styles:t={},classNames:r={},defaultProps:o={},emotionOptions:a,withNormalizeCSS:i=!1,withGlobalStyles:c=!1,withCSSVariables:s=!1,inherit:u=!1,children:l}){const f=(0,n.useContext)(ee),d={themeOverride:u?Q(Q({},f.theme),e):e,emotionOptions:u?Q(Q({},f.emotionOptions),a):a,styles:u?Q(Q({},f.styles),t):t,classNames:u?Q(Q({},f.classNames),r):r,defaultProps:u?Q(Q({},f.defaultProps),o):o},p=Z(w,d.themeOverride);return n.createElement(ee.Provider,{value:{theme:p,styles:d.styles,classNames:d.classNames,emotionOptions:d.emotionOptions,defaultProps:d.defaultProps}},i&&n.createElement(Y,null),c&&n.createElement(F,{theme:p}),s&&n.createElement(_,{theme:p}),l)}ae.displayName="@mantine/core/MantineProvider"},8679:function(e,t,r){"use strict";var n=r(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return n.isMemo(e)?i:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=i;var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(m){var o=p(r);o&&o!==m&&e(t,o,n)}var i=l(r);f&&(i=i.concat(f(r)));for(var c=s(t),b=s(r),h=0;h<i.length;++h){var y=i[h];if(!a[y]&&(!n||!n[y])&&(!b||!b[y])&&(!c||!c[y])){var g=d(r,y);try{u(t,y,g)}catch(v){}}}}return t}},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(6505)}])},6505:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(5893),o=r(9008),a=r.n(o),i=r(1648);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}function u(e){var t=e.Component,r=e.pageProps;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"Figmage App"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("meta",{name:"description",content:"Figmage - Create stunning screenshots of webapps!"}),(0,n.jsx)("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"})]}),(0,n.jsx)(i.Me,{withGlobalStyles:!0,withNormalizeCSS:!0,theme:{colorScheme:"light"},children:(0,n.jsx)(t,s({},r))})]})}},9008:function(e,t,r){e.exports=r(3121)},9921:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,x=r?Symbol.for("react.scope"):60119;function k(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case l:case f:case a:case c:case i:case p:return e;default:switch(e=e&&e.$$typeof){case u:case d:case h:case b:case s:return e;default:return t}}case o:return t}}}function S(e){return k(e)===f}t.AsyncMode=l,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=s,t.Element=n,t.ForwardRef=d,t.Fragment=a,t.Lazy=h,t.Memo=b,t.Portal=o,t.Profiler=c,t.StrictMode=i,t.Suspense=p,t.isAsyncMode=function(e){return S(e)||k(e)===l},t.isConcurrentMode=S,t.isContextConsumer=function(e){return k(e)===u},t.isContextProvider=function(e){return k(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return k(e)===d},t.isFragment=function(e){return k(e)===a},t.isLazy=function(e){return k(e)===h},t.isMemo=function(e){return k(e)===b},t.isPortal=function(e){return k(e)===o},t.isProfiler=function(e){return k(e)===c},t.isStrictMode=function(e){return k(e)===i},t.isSuspense=function(e){return k(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===f||e===c||e===i||e===p||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===b||e.$$typeof===s||e.$$typeof===u||e.$$typeof===d||e.$$typeof===g||e.$$typeof===v||e.$$typeof===x||e.$$typeof===y)},t.typeOf=k},9864:function(e,t,r){"use strict";e.exports=r(9921)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(880)}));var r=e.O();_N_E=r}]);