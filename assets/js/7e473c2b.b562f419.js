"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[2265],{38038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>S,frontMatter:()=>N,metadata:()=>b,toc:()=>P});var a=n(83117),r=n(67294),o=n(3905),i=n(67177),s=n(72400),l=n(28033),d=n(82334),p=n(12717),c=n(60209),u=n(49638);const m=["#FFE780","#87CCE8","#FFA3A1","#B1DFD0","#B58DF1"],f={code:"function anonymous(){const{setNativeProps,animatedRef,COLORS}=this.__closure;setNativeProps(animatedRef,{backgroundColor:COLORS[Math.floor(Math.random()*COLORS.length)]});}"};function v(){const e=(0,d.m)();return r.createElement(i.Z,{style:h.container},r.createElement(u.n,{ref:e,style:h.box}),r.createElement(s.Z,{title:"change color",onPress:()=>{(0,p.m_)(function(){const t=function(){(0,c.R)(e,{backgroundColor:m[Math.floor(Math.random()*m.length)]})};return t.__closure={setNativeProps:c.R,animatedRef:e,COLORS:m},t.__initData=f,t.__workletHash=8389294944519,t}())()}}))}const h=l.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center"},box:{height:120,width:120,backgroundColor:"#B58DF1",borderRadius:20,marginBottom:30}}),k="import React from 'react';\nimport { Button, StyleSheet, View } from 'react-native';\nimport Animated, {\n  runOnUI,\n  setNativeProps,\n  useAnimatedRef,\n} from 'react-native-reanimated';\n\nconst COLORS = ['#FFE780', '#87CCE8', '#FFA3A1', '#B1DFD0', '#B58DF1'];\n\nexport default function Example() {\n  const animatedRef = useAnimatedRef();\n\n  const handlePress = () => {\n    runOnUI(() => {\n      // highlight-next-line\n      setNativeProps(animatedRef, {\n        backgroundColor: COLORS[Math.floor(Math.random() * COLORS.length)],\n        // highlight-next-line\n      });\n    })();\n  };\n\n  return (\n    <View style={styles.container}>\n      <Animated.View ref={animatedRef} style={styles.box} />\n      <Button title=\"change color\" onPress={handlePress} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  box: {\n    height: 120,\n    width: 120,\n    backgroundColor: '#B58DF1',\n    borderRadius: 20,\n    marginBottom: 30,\n  },\n});\n",N={sidebar_position:7},g="setNativeProps",b={unversionedId:"advanced/setNativeProps",id:"advanced/setNativeProps",title:"setNativeProps",description:"setNativeProps lets you imperatively update component properties.",source:"@site/docs/advanced/setNativeProps.mdx",sourceDirName:"advanced",slug:"/advanced/setNativeProps",permalink:"/react-native-reanimated/docs/advanced/setNativeProps",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/edit/main/docs/advanced/setNativeProps.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"dispatchCommand",permalink:"/react-native-reanimated/docs/advanced/dispatchCommand"},next:{title:"Guides",permalink:"/react-native-reanimated/docs/category/guides"}},y={},P=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>animatedRef</code>",id:"animatedref",level:4},{value:"<code>updates</code>",id:"updates",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],C=(R="InteractiveExample",function(e){return console.warn("Component "+R+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var R;const w={toc:P},x="wrapper";function S(e){let{components:t,...n}=e;return(0,o.kt)(x,(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setnativeprops"},"setNativeProps"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"setNativeProps")," lets you imperatively update component properties."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"setNativeProps")," is an escape hatch for specific edge-cases."),(0,o.kt)("p",{parentName:"admonition"},"You should always reach for ",(0,o.kt)("a",{parentName:"p",href:"docs/core/useAnimatedStyle"},(0,o.kt)("inlineCode",{parentName:"a"},"useAnimatedStyle"))," and ",(0,o.kt)("a",{parentName:"p",href:"docs/core/useAnimatedProps"},(0,o.kt)("inlineCode",{parentName:"a"},"useAnimatedProps"))," first when animating styles or properties.")),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { setNativeProps } from 'react-native-reanimated';\n\nfunction App() {\n  const animatedRef = useAnimatedRef();\n\n  const tap = Gesture.Tap().onEnd(() => {\n    // highlight-start\n    setNativeProps(animatedRef, { text: '' });\n    // highlight-end\n  });\n\n  return <TextInput ref={animatedRef} />;\n}\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Type definitions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function setNativeProps<T extends Component>(\n  animatedRef: AnimatedRef<T>,\n  updates: StyleProps\n) => void;\n"))),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"animatedref"},(0,o.kt)("inlineCode",{parentName:"h4"},"animatedRef")),(0,o.kt)("p",null,"An ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/useAnimatedRef#returns"},"animated ref")," connected to the component you'd want to get the measurements from. The animated ref has to be passed either to an ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animated-component"},"Animated component")," or a React Native built-in component."),(0,o.kt)("h4",{id:"updates"},(0,o.kt)("inlineCode",{parentName:"h4"},"updates")),(0,o.kt)("p",null,"An object with properties you want to update. These could be both style props (eg. ",(0,o.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"backgroundColor"),") and regular props (eg. ",(0,o.kt)("inlineCode",{parentName:"p"},"text"),")."),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"setNativeProps")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(C,{src:k,component:(0,o.kt)(v,{mdxType:"SetNativeProps"}),mdxType:"InteractiveExample"}),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You should always reach for ",(0,o.kt)("a",{parentName:"p",href:"docs/core/useAnimatedStyle"},(0,o.kt)("inlineCode",{parentName:"a"},"useAnimatedStyle"))," and ",(0,o.kt)("a",{parentName:"p",href:"docs/core/useAnimatedProps"},(0,o.kt)("inlineCode",{parentName:"a"},"useAnimatedProps"))," first when animating styles or properties.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"setNativeProps")," is supposed to only be used on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"setNativeProps")," function was created to allow updating props imperatively from gesture handlers. Because in other cases, you need to wrap ",(0,o.kt)("inlineCode",{parentName:"p"},"setNativeProps")," with an additional ",(0,o.kt)("inlineCode",{parentName:"p"},"runOnUI")," call, React Native's ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/animations#setnativeprops"},"built-in ",(0,o.kt)("inlineCode",{parentName:"a"},"setNativeProps"))," proves to work better with fewer jumps between runtimes."))),(0,o.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,o.kt)("div",{className:"compatibility"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Android"),(0,o.kt)("th",{parentName:"tr",align:null},"iOS"),(0,o.kt)("th",{parentName:"tr",align:null},"Web"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"))))))}S.isMDXComponent=!0},60209:(e,t,n)=>{n.d(t,{R:()=>s});var a=n(83442),r=n(79773),o=n(43219);const i=!(0,a.Wr)();let s;s=(0,a.$L)()?(e,t)=>{const n=e();(0,r.n)(t,{_component:n})}:i&&n.g._IS_FABRIC?(e,t)=>{const n=e();(0,o.Hw)(t),_updatePropsFabric([{shadowNodeWrapper:n,updates:t}])}:i?(e,t)=>{const n=e(),a=e.viewName.value;(0,o.Hw)(t),_updatePropsPaper([{tag:n,name:a,updates:t}])}:(0,a.f1)()?()=>{console.warn("[Reanimated] setNativeProps() is not supported with Chrome Debugger.")}:(0,a.V5)()?()=>{console.warn("[Reanimated] setNativeProps() is not supported with Jest.")}:()=>{console.warn("[Reanimated] setNativeProps() is not supported on this configuration.")}},49638:(e,t,n)=>{n.d(t,{n:()=>o});var a=n(67177),r=n(34605);n(67294);const o=(0,r.Z)(a.Z)},82334:(e,t,n)=>{n.d(t,{m:()=>p});var a=n(67294),r=n(10758),o=n(7737),i=n(86425),s=n(82747),l=n(22805);const d=n.g._IS_FABRIC?o.b:s.Z;function p(){const e=(0,r.y)(-1),t=(0,r.y)(null),o=(0,a.useRef)();if(!o.current){const a=r=>{var o;r&&(e.value=d(function(e){return n.g._IS_FABRIC&&e.getNativeScrollRef?e.getNativeScrollRef():!n.g._IS_FABRIC&&e.getScrollableNode?e.getScrollableNode():e}(r)),a.current=r,"ios"!==l.Z.OS||n.g._IS_FABRIC||(t.value=(null==r||null===(o=r.viewConfig)||void 0===o?void 0:o.uiViewClassName)||"RCTView"));return e.value};a.current=null;const r=(0,i.wH)({__init:()=>{const n=()=>e.value;return n.viewName=t,n}});(0,i.K_)(a,r),o.current=a}return o.current}},72400:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(28033),o=n(88548),i=n(24404),s=a.forwardRef(((e,t)=>{var n=e.accessibilityLabel,r=e.color,s=e.disabled,d=e.onPress,p=e.testID,c=e.title;return a.createElement(o.Z,{accessibilityLabel:n,accessibilityRole:"button",disabled:s,focusable:!s,onPress:d,ref:t,style:[l.button,r&&{backgroundColor:r},s&&l.buttonDisabled],testID:p},a.createElement(i.Z,{style:[l.text,s&&l.textDisabled]},c))}));s.displayName="Button";var l=r.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const d=s},88548:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(83117),r=n(80102),o=n(67294),i=n(16528),s=n(94119),l=n(28033),d=n(67177),p=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function c(e,t){var n=e.activeOpacity,l=e.delayPressIn,c=e.delayPressOut,m=e.delayLongPress,f=e.disabled,v=e.focusable,h=e.onLongPress,k=e.onPress,N=e.onPressIn,g=e.onPressOut,b=e.rejectResponderTermination,y=e.style,P=(0,r.Z)(e,p),C=(0,o.useRef)(null),R=(0,i.Z)(t,C),w=(0,o.useState)("0s"),x=w[0],S=w[1],A=(0,o.useState)(null),_=A[0],I=A[1],O=(0,o.useCallback)(((e,t)=>{I(e),S(t?t/1e3+"s":"0s")}),[I,S]),D=(0,o.useCallback)((e=>{O(null!=n?n:.2,e)}),[n,O]),F=(0,o.useCallback)((e=>{O(null,e)}),[O]),E=(0,o.useMemo)((()=>({cancelable:!b,disabled:f,delayLongPress:m,delayPressStart:l,delayPressEnd:c,onLongPress:h,onPress:k,onPressStart(e){var t=null!=e.dispatchConfig?"onResponderGrant"===e.dispatchConfig.registrationName:"keydown"===e.type;D(t?0:150),null!=N&&N(e)},onPressEnd(e){F(250),null!=g&&g(e)}})),[m,l,c,f,h,k,N,g,b,D,F]),Z=(0,s.Z)(C,E);return o.createElement(d.Z,(0,a.Z)({},P,Z,{accessibilityDisabled:f,focusable:!f&&!1!==v,pointerEvents:f?"none":void 0,ref:R,style:[u.root,!f&&u.actionable,y,null!=_&&{opacity:_},{transitionDuration:x}]}))}var u=l.Z.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),m=o.memo(o.forwardRef(c));m.displayName="TouchableOpacity";const f=m}}]);