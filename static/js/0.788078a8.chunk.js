(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[0],{491:function(e,r,a){"use strict";var t=a(0),o=a(4),n=a(1),i=(a(8),a(92)),l=a(761),s=a(764),d=a(818),c=a(492),u=a(346),p=a(494),m=a(817),f=a(34),b={standard:l.a,filled:s.a,outlined:d.a},v=n.forwardRef((function(e,r){var a=e.autoComplete,l=e.autoFocus,s=void 0!==l&&l,d=e.children,f=e.classes,v=e.className,h=e.color,g=void 0===h?"primary":h,O=e.defaultValue,x=e.disabled,j=void 0!==x&&x,y=e.error,E=void 0!==y&&y,q=e.FormHelperTextProps,k=e.fullWidth,F=void 0!==k&&k,N=e.helperText,P=e.hiddenLabel,w=e.id,L=e.InputLabelProps,$=e.inputProps,T=e.InputProps,C=e.inputRef,I=e.label,R=e.multiline,S=void 0!==R&&R,D=e.name,M=e.onBlur,H=e.onChange,A=e.onFocus,W=e.placeholder,B=e.required,V=void 0!==B&&B,z=e.rows,J=e.rowsMax,_=e.select,G=void 0!==_&&_,K=e.SelectProps,Q=e.type,U=e.value,X=e.variant,Y=void 0===X?"standard":X,Z=Object(o.a)(e,["autoComplete","autoFocus","children","classes","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","hiddenLabel","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","select","SelectProps","type","value","variant"]);var ee={};if("outlined"===Y&&(L&&"undefined"!==typeof L.shrink&&(ee.notched=L.shrink),I)){var re,ae=null!==(re=null===L||void 0===L?void 0:L.required)&&void 0!==re?re:V;ee.label=n.createElement(n.Fragment,null,I,ae&&"\xa0*")}G&&(K&&K.native||(ee.id=void 0),ee["aria-describedby"]=void 0);var te=N&&w?"".concat(w,"-helper-text"):void 0,oe=I&&w?"".concat(w,"-label"):void 0,ne=b[Y],ie=n.createElement(ne,Object(t.a)({"aria-describedby":te,autoComplete:a,autoFocus:s,defaultValue:O,fullWidth:F,multiline:S,name:D,rows:z,rowsMax:J,type:Q,value:U,id:w,inputRef:C,onBlur:M,onChange:H,onFocus:A,placeholder:W,inputProps:$},ee,T));return n.createElement(u.a,Object(t.a)({className:Object(i.a)(f.root,v),disabled:j,error:E,fullWidth:F,hiddenLabel:P,ref:r,required:V,color:g,variant:Y},Z),I&&n.createElement(c.a,Object(t.a)({htmlFor:w,id:oe},L),I),G?n.createElement(m.a,Object(t.a)({"aria-describedby":te,id:w,labelId:oe,value:U,input:ie},K),d):ie,N&&n.createElement(p.a,Object(t.a)({id:te},q),N))}));r.a=Object(f.a)({root:{}},{name:"MuiTextField"})(v)},492:function(e,r,a){"use strict";var t=a(0),o=a(4),n=a(1),i=(a(8),a(92)),l=a(125),s=a(112),d=a(34),c=a(493),u=n.forwardRef((function(e,r){var a=e.classes,d=e.className,u=e.disableAnimation,p=void 0!==u&&u,m=(e.margin,e.shrink),f=(e.variant,Object(o.a)(e,["classes","className","disableAnimation","margin","shrink","variant"])),b=Object(s.a)(),v=m;"undefined"===typeof v&&b&&(v=b.filled||b.focused||b.adornedStart);var h=Object(l.a)({props:e,muiFormControl:b,states:["margin","variant"]});return n.createElement(c.a,Object(t.a)({"data-shrink":v,className:Object(i.a)(a.root,d,b&&a.formControl,!p&&a.animated,v&&a.shrink,"dense"===h.margin&&a.marginDense,{filled:a.filled,outlined:a.outlined}[h.variant]),classes:{focused:a.focused,disabled:a.disabled,error:a.error,required:a.required,asterisk:a.asterisk},ref:r},f))}));r.a=Object(d.a)((function(e){return{root:{display:"block",transformOrigin:"top left"},focused:{},disabled:{},error:{},required:{},asterisk:{},formControl:{position:"absolute",left:0,top:0,transform:"translate(0, 24px) scale(1)"},marginDense:{transform:"translate(0, 21px) scale(1)"},shrink:{transform:"translate(0, 1.5px) scale(0.75)",transformOrigin:"top left"},animated:{transition:e.transitions.create(["color","transform"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},filled:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 20px) scale(1)","&$marginDense":{transform:"translate(12px, 17px) scale(1)"},"&$shrink":{transform:"translate(12px, 10px) scale(0.75)","&$marginDense":{transform:"translate(12px, 7px) scale(0.75)"}}},outlined:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 20px) scale(1)","&$marginDense":{transform:"translate(14px, 12px) scale(1)"},"&$shrink":{transform:"translate(14px, -6px) scale(0.75)"}}}}),{name:"MuiInputLabel"})(u)},493:function(e,r,a){"use strict";var t=a(4),o=a(0),n=a(1),i=(a(8),a(92)),l=a(125),s=a(112),d=a(97),c=a(34),u=n.forwardRef((function(e,r){var a=e.children,c=e.classes,u=e.className,p=(e.color,e.component),m=void 0===p?"label":p,f=(e.disabled,e.error,e.filled,e.focused,e.required,Object(t.a)(e,["children","classes","className","color","component","disabled","error","filled","focused","required"])),b=Object(s.a)(),v=Object(l.a)({props:e,muiFormControl:b,states:["color","required","focused","disabled","error","filled"]});return n.createElement(m,Object(o.a)({className:Object(i.a)(c.root,c["color".concat(Object(d.a)(v.color||"primary"))],u,v.disabled&&c.disabled,v.error&&c.error,v.filled&&c.filled,v.focused&&c.focused,v.required&&c.required),ref:r},f),a,v.required&&n.createElement("span",{"aria-hidden":!0,className:Object(i.a)(c.asterisk,v.error&&c.error)},"\u2009","*"))}));r.a=Object(c.a)((function(e){return{root:Object(o.a)({color:e.palette.text.secondary},e.typography.body1,{lineHeight:1,padding:0,"&$focused":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),colorSecondary:{"&$focused":{color:e.palette.secondary.main}},focused:{},disabled:{},error:{},filled:{},required:{},asterisk:{"&$error":{color:e.palette.error.main}}}}),{name:"MuiFormLabel"})(u)},494:function(e,r,a){"use strict";var t=a(4),o=a(0),n=a(1),i=(a(8),a(92)),l=a(125),s=a(112),d=a(34),c=n.forwardRef((function(e,r){var a=e.children,d=e.classes,c=e.className,u=e.component,p=void 0===u?"p":u,m=(e.disabled,e.error,e.filled,e.focused,e.margin,e.required,e.variant,Object(t.a)(e,["children","classes","className","component","disabled","error","filled","focused","margin","required","variant"])),f=Object(s.a)(),b=Object(l.a)({props:e,muiFormControl:f,states:["variant","margin","disabled","error","filled","focused","required"]});return n.createElement(p,Object(o.a)({className:Object(i.a)(d.root,("filled"===b.variant||"outlined"===b.variant)&&d.contained,c,b.disabled&&d.disabled,b.error&&d.error,b.filled&&d.filled,b.focused&&d.focused,b.required&&d.required,"dense"===b.margin&&d.marginDense),ref:r},m)," "===a?n.createElement("span",{dangerouslySetInnerHTML:{__html:"&#8203;"}}):a)}));r.a=Object(d.a)((function(e){return{root:Object(o.a)({color:e.palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,margin:0,"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),error:{},disabled:{},marginDense:{marginTop:4},contained:{marginLeft:14,marginRight:14},focused:{},filled:{},required:{}}}),{name:"MuiFormHelperText"})(c)},799:function(e,r,a){"use strict";var t=a(0),o=a(4),n=a(1),i=(a(8),a(92)),l=a(755),s=a(34),d=a(192),c=n.forwardRef((function(e,r){var a=e.children,s=e.classes,c=e.className,u=e.component,p=void 0===u?"div":u,m=e.disablePointerEvents,f=void 0!==m&&m,b=e.disableTypography,v=void 0!==b&&b,h=e.position,g=e.variant,O=Object(o.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),x=Object(d.b)()||{},j=g;return g&&x.variant,x&&!j&&(j=x.variant),n.createElement(d.a.Provider,{value:null},n.createElement(p,Object(t.a)({className:Object(i.a)(s.root,c,f&&s.disablePointerEvents,x.hiddenLabel&&s.hiddenLabel,"filled"===j&&s.filled,{start:s.positionStart,end:s.positionEnd}[h],"dense"===x.margin&&s.marginDense),ref:r},O),"string"!==typeof a||v?a:n.createElement(l.a,{color:"textSecondary"},a)))}));r.a=Object(s.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(c)}}]);
//# sourceMappingURL=0.788078a8.chunk.js.map