"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[4094],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6988:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return s}});var a=n(3117),i=(n(7294),n(3905));const r={id:"decay",title:"Decay",sidebar_label:"Decay"},o=void 0,c={unversionedId:"animations/decay",id:"version-1.x.x/animations/decay",title:"Decay",description:"Updates position and velocity nodes by running a single step of animation each time this node evaluates. State variable finished is set to 1 when the animation gets to the final point (that is the velocity drops under the level of significance). The time state node is populated automatically by this node and refers to the last clock time this node got evaluated. It is expected to be reset each time we want to restart the animation. Decay animation can be configured using deceleration config param and it controls how fast the animation decelerates. The value should be between 0 and 1 but only values that are close to 1 will yield meaningful results.",source:"@site/versioned_docs/version-1.x.x/animations/decay.md",sourceDirName:"animations",slug:"/animations/decay",permalink:"/react-native-reanimated/docs/1.x.x/animations/decay",draft:!1,tags:[],version:"1.x.x",frontMatter:{id:"decay",title:"Decay",sidebar_label:"Decay"},sidebar:"version-1.x.x/docs",previous:{title:"Timing",permalink:"/react-native-reanimated/docs/1.x.x/animations/timing"},next:{title:"Spring",permalink:"/react-native-reanimated/docs/1.x.x/animations/spring"}},l={},s=[],d={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"decay(clock, { finished, velocity, position, time }, { deceleration });\n")),(0,i.kt)("p",null,"Updates ",(0,i.kt)("inlineCode",{parentName:"p"},"position")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"velocity")," nodes by running a single step of animation each time this node evaluates. State variable ",(0,i.kt)("inlineCode",{parentName:"p"},"finished")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," when the animation gets to the final point (that is the velocity drops under the level of significance). The ",(0,i.kt)("inlineCode",{parentName:"p"},"time")," state node is populated automatically by this node and refers to the last clock time this node got evaluated. It is expected to be reset each time we want to restart the animation. Decay animation can be configured using ",(0,i.kt)("inlineCode",{parentName:"p"},"deceleration")," config param and it controls how fast the animation decelerates. The value should be between ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," but only values that are close to ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," will yield meaningful results."))}p.isMDXComponent=!0}}]);