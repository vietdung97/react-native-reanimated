"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[7661],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return t?r.createElement(h,o(o({ref:n},d),{},{components:t})):r.createElement(h,o({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81172:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(83117),a=(t(67294),t(3905));const l={id:"useAnimatedScrollHandler",title:"useAnimatedScrollHandler",sidebar_label:"useAnimatedScrollHandler"},o=void 0,i={unversionedId:"api/hooks/useAnimatedScrollHandler",id:"version-2.x/api/hooks/useAnimatedScrollHandler",title:"useAnimatedScrollHandler",description:"This is a convenience hook that returns an event handler reference which can be used with React Native's scrollable components.",source:"@site/versioned_docs/version-2.x/api/hooks/useAnimatedScrollHandler.md",sourceDirName:"api/hooks",slug:"/api/hooks/useAnimatedScrollHandler",permalink:"/react-native-reanimated/docs/2.x/api/hooks/useAnimatedScrollHandler",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/versioned_docs/version-2.x/api/hooks/useAnimatedScrollHandler.md",tags:[],version:"2.x",frontMatter:{id:"useAnimatedScrollHandler",title:"useAnimatedScrollHandler",sidebar_label:"useAnimatedScrollHandler"},sidebar:"docs",previous:{title:"useAnimatedRef",permalink:"/react-native-reanimated/docs/2.x/api/hooks/useAnimatedRef"},next:{title:"useAnimatedSensor",permalink:"/react-native-reanimated/docs/2.x/api/hooks/useAnimatedSensor"}},s={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>scrollHandlerOrHandlersObject</code> object with worklets",id:"scrollhandlerorhandlersobject-object-with-worklets",level:4},{value:"<code>dependencies</code> Array",id:"dependencies-array",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is a convenience hook that returns an event handler reference which can be used with React Native's scrollable components."),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"scrollhandlerorhandlersobject-object-with-worklets"},(0,a.kt)("inlineCode",{parentName:"h4"},"scrollHandlerOrHandlersObject")," ","[object with worklets]"),(0,a.kt)("p",null,"Object containing any of the following keys: ",(0,a.kt)("inlineCode",{parentName:"p"},"onScroll"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"onBeginDrag"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"onEndDrag"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"onMomentumBegin"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"onMomentumEnd"),".\nThe values in the object should be individual worklets.\nEach of the worklet will be triggered when the corresponding event is dispatched on the connected Scrollable component."),(0,a.kt)("p",null,"Each of the event worklets will receive the following parameters when called:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"event")," ","[object]"," - event object carrying the information about the scroll.\nThe payload can differ depending on the type of the event (",(0,a.kt)("inlineCode",{parentName:"p"},"onScroll"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"onBeginDrag"),", etc.).\nPlease consult ",(0,a.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/scrollview"},"React Native's ScrollView documentation")," to learn about scroll event structure.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"context")," ","[object]"," - plain JS object that can be used to store some state.\nThis object will persist in between scroll event occurrences and you can read and write any data to it.\nWhen there are several event handlers provided in a form of an object of worklets, the ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," object will be shared in between the worklets allowing them to communicate with each other."))),(0,a.kt)("h4",{id:"dependencies-array"},(0,a.kt)("inlineCode",{parentName:"h4"},"dependencies")," ","[Array]"),(0,a.kt)("p",null,"Optional array of values which changes cause this hook to receive updated values during rerender of the wrapping component. This matters when, for instance, worklet uses values dependent on the component's state."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{11}","{11}":!0},"const App = () => {\n  const [state, setState] = useState(0);\n  const sv = useSharedValue(0);\n\n  const handler = useAnimatedScrollHandler(\n    {\n      onEndDrag: (e) => {\n        sv.value = state;\n      },\n    },\n    dependencies\n  );\n  //...\n  return <></>;\n};\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," here may be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"undefined"),"(argument skipped) - worklet will be rebuilt if there is any change in any of the callbacks' bodies or any values from their closure(variables from outer scope used in worklet),"),(0,a.kt)("li",{parentName:"ul"},"empty array(",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),") - worklet will be rebuilt only if any of the callbacks' bodies changes,"),(0,a.kt)("li",{parentName:"ul"},"array of values(",(0,a.kt)("inlineCode",{parentName:"li"},"[val1, val2, ..., valN]"),") - worklet will be rebuilt if there is any change in any of the callbacks bodies or in any values from the given array.")),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"The hook returns a handler object that can be hooked into a scrollable container.\nNote that in order for the handler to be properly triggered, you should use containers that are wrapped with ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated")," (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.ScrollView")," and not just ",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView"),").\nThe handler should be passed under ",(0,a.kt)("inlineCode",{parentName:"p"},"onScroll")," parameter regardless of whether it is configured to receive only scroll or also momentum or drag events."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"In the below example we define a scroll handler by passing a single worklet handler.\nThe worklet handler is triggered for each of the scroll events dispatched to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.ScrollView")," component to which we attach the handler."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{10-12,29}","{10-12,29}":!0},"import Animated, {\n  useSharedValue,\n  useAnimatedStyle,\n  useAnimatedScrollHandler,\n} from 'react-native-reanimated';\n\nfunction ScrollExample() {\n  const translationY = useSharedValue(0);\n\n  const scrollHandler = useAnimatedScrollHandler((event) => {\n    translationY.value = event.contentOffset.y;\n  });\n\n  const stylez = useAnimatedStyle(() => {\n    return {\n      transform: [\n        {\n          translateY: translationY.value,\n        },\n      ],\n    };\n  });\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={[styles.box, stylez]} />\n      <Animated.ScrollView\n        style={styles.scroll}\n        onScroll={scrollHandler}\n        scrollEventThrottle={16}>\n        <Content />\n      </Animated.ScrollView>\n    </View>\n  );\n}\n")),(0,a.kt)("p",null,"If we are interested in receiving drag or momentum events instead of passing a single worklet object we can pass an object of worklets.\nBelow for convenience, we only show how the ",(0,a.kt)("inlineCode",{parentName:"p"},"scrollHandler")," should be defined in such a case.\nThe place where we attach handler to a scrollable component remains unchanged regardless of the event types we want to receive:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const isScrolling = useSharedValue(false);\n\nconst scrollHandler = useAnimatedScrollHandler({\n  onScroll: (event) => {\n    translationY.value = event.contentOffset.y;\n  },\n  onBeginDrag: (e) => {\n    isScrolling.value = true;\n  },\n  onEndDrag: (e) => {\n    isScrolling.value = false;\n  },\n});\n")))}u.isMDXComponent=!0}}]);