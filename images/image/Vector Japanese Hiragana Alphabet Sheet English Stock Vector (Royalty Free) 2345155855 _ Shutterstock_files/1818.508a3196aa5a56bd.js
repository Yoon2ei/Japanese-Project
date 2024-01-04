"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1818],{38819:function(e,n,t){t.d(n,{W:function(){return r}});var i=t(25237),r=t.n(i)()(function(){return Promise.all([t.e(41075),t.e(88103),t.e(53849),t.e(40950)]).then(t.bind(t,40950)).then(function(e){return e.FlexPlanDialog})},{loadableGenerated:{webpack:function(){return[40950]}},ssr:!1})},77442:function(e,n,t){t.d(n,{S:function(){return B}});var i=t(47842),r=t(70865),o=t(96670),a=t(87394),s=t(52322),l=t(67550),c=t(48289),u=t(62197),d=t(72841),f=t(68052),x=t(27064),p=t(63155),g=t(27739),h=t(84664),v=t(25282),m=t(26602),P=t(88167),k=t(81372),_=t(58898),j=t(40233),b=t(47366),y=t(44510),C=t(83725),S=t(63221),w=t(51421),Z=t(27470),T=t(81166),E=t(90154),I=t(31993),M=t(5632),K=t(59877),J=t(2784),L=t(8740),F=t(56321),N=(0,L.ZL)()(function(e){var n=e.tokens,t=n.font,i=n.spacing,r=n.zIndex,o=n.color;return{loaderContainer:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:800,position:"absolute",top:0,left:0,zIndex:r["5"],backgroundColor:o.white},flexRoot:{display:"flex",alignItems:"stretch",height:"100%",width:h.Jv,minWidth:h.Jv},flexChild:{flex:1,maxWidth:"50%",width:h.Jv/2,padding:i.s,height:600,position:"relative"},marketingArea:{overflow:"auto",display:"flex",flexDirection:"column"},divider:{height:"auto"},sectionHeading:{fontSize:t.size["3xl"],color:o.gray["onyx-87"],marginBottom:i.m,fontWeight:t.weight.bold,zIndex:r["2"],position:"relative",lineHeight:i.l,paddingRight:i.l}}}),U=function(e){var n,t,a,l,c=e.labels,u=e.MarketingContent,d=void 0===u?p.Z:u,x=(0,v.s)(),h=x.discount,_=x.selectedPlan,j=x.isFreeTrial,M=(0,k.K)({productId:g.v88}).data,L=(0,P.LG)({product:M}),N=(0,J.useCallback)(function(e){var n=e.translationKey,t=e.translationProps;return(0,s.jsx)(K.cC,{ns:f.kJP,i18nKey:n,components:{b:(0,s.jsx)("b",{})},values:(0,r.Z)({},t)})},[]),U=(0,J.useCallback)(function(e){var n=e.heading,t=e.description;return(0,s.jsxs)("span",{children:[(0,s.jsxs)("b",{children:[n," "]}),t]})},[]),O=(0,k.K)({productId:g.E3O}).data,B=(0,P.LG)({product:O}),W=(0,J.useMemo)(function(){return[{icon:(0,s.jsx)(b.f,{}),text:U({heading:"Save more:",description:"Get 3.5+ million free starter images and save ".concat(null==h?void 0:h.percentage,"% off all standard license images for ").concat(B,"/month, no commitment")})},{icon:(0,s.jsx)(y.C,{}),text:U({heading:"Unlimited access:",description:"Enjoy our creative AI features to edit any Shutterstock images and create stunning designs."})},{icon:(0,s.jsx)(C.B,{}),text:U({heading:"Keep what you have licensed:",description:"Even if you cancel you can keep the images you’ve downloaded."})}]},[null==h?void 0:h.percentage,B,U]),G=(0,J.useMemo)(function(){return[{icon:(0,s.jsx)(S.n,{}),text:N({translationKey:"risk_free"})},{icon:(0,s.jsx)(C.B,{}),text:N({translationKey:"keep_what_you_have_licensed"})},{icon:(0,s.jsx)(b.f,{}),text:N({translationKey:"save_more",translationProps:{PRICE:L}})},{icon:(0,s.jsx)(w.t,{}),text:N({translationKey:"full_access"})}]},[L,N]),R=(0,J.useMemo)(function(){return[{icon:(0,s.jsx)(Z.r,{}),text:c.saveCollection},{icon:(0,s.jsx)(T.m,{}),text:c.shareCollection},{icon:(0,s.jsx)(E.I,{}),text:c.tryBeforePurchase},{icon:(0,s.jsx)(I.E,{}),text:c.keepHistoryTracking},{text:F.aP,id:5}]},[c]),z=(a={},(0,i.Z)(a,"".concat(g.v88),c.freeTrialBannerTitle),(0,i.Z)(a,"".concat(g.E3O),"Save on images with an Essentials plan"),(0,i.Z)(a,"default",c.bannerTitle),a),A=(l={default:R},(0,i.Z)(l,"".concat(g.v88),G),(0,i.Z)(l,"".concat(g.E3O),W),l),H={title:z[_]||z.default,bannerContent:null==(t=void 0===(n=({items:A[_]||A.default}).items)?[]:n)?void 0:t.map(function(e,n){return(0,o.Z)((0,r.Z)({},e),{id:n+1})}),shouldShowCancellationTerms:j,selectedPlan:_};return(0,s.jsx)(m.ExperimentP32171MarketingContent,(0,o.Z)((0,r.Z)({MarketingContent:d},H),{isFreeTrial:j}))},O=function(e){var n=e.t;return{saveCollection:n("".concat(f.kJP,"::save_sort_collection")),shareCollection:n("".concat(f.kJP,"::share_collections")),tryBeforePurchase:n("".concat(f.kJP,"::try_before_purchase")),keepHistoryTracking:n("".concat(f.kJP,"::keep_track_history")),freeTrialBannerTitle:n("".concat(f.kJP,"::create_user_trial_flex10_get_images_music_title")),bannerTitle:n("".concat(f.kJP,"::access_exclusive_features")),freeTrialSignUpTitle:n("".concat(f.kJP,"::try_shutterstock_free")),signUpTitle:n("".concat(f.kJP,"::site-header:sign_up"))}},B=function(e){var n,t,i,r,o=e.isModalOpen,h=e.setIsModalOpen,m=e.landingPage,P=e.marketingComponent,k=e.signUpPath,b=e.title,y=e.classes,C=e.disableStylingBox,S=(0,a.Z)((0,J.useState)(!1),2),w=S[0],Z=S[1],T=N(),E=T.classes,I=T.cx,L=(0,M.useRouter)(),B=L.locale,W=L.asPath,G=(0,K.$G)(f.kJP),R=G.t,z=G.ready,A=O({t:R}),H=(0,v.s)(),D=H.selectedPlan,$=H.isFreeTrial,Q=(0,j.d)(),X=(0,_.Q)({preset:$?F.IL:F.FT}),q=X.isAuthSuccess,V=X.isFbaUser,Y=X.isNewUser;return q&&o&&null!==V&&null!==Y&&(t=(D!==g.E3O||V||Y)&&(!$||V)?m:W,i="".concat("en"!==B?"/".concat(B):"").concat(t),r=new URL(i,null==window?void 0:null===(n=window.location)||void 0===n?void 0:n.origin),Q({actionName:"convert - LO image conversion panel signup successful"}),window.location.href=r.toString()),(0,s.jsxs)(x.f,{open:o,onClose:function(){h(!1)},maxWidth:"lg",width:"lg",themeModeOverride:void 0,"data-automation":"Embedded_Signup_Modal",disableStylingBox:C,children:[(0,s.jsxs)("div",{className:E.flexRoot,children:[(0,s.jsx)(l.Z,{className:I(E.flexChild,E.marketingArea,null==y?void 0:y.marketingArea),children:z?(0,s.jsx)(P||U,{labels:A}):(0,s.jsx)(p.O,{})}),(0,s.jsx)(c.Z,{className:E.divider,orientation:"vertical"}),(0,s.jsxs)(l.Z,{className:I(E.flexChild,null==y?void 0:y.formWrapper),children:[(0,s.jsx)(u.Z,{className:E.sectionHeading,component:"h1",align:"left",pl:6,children:b||($?A.freeTrialSignUpTitle:A.signUpTitle)}),(0,s.jsx)("iframe",{onLoad:function(e){e.preventDefault(),Z(!0),Q({actionName:"convert - LO image conversion panel signup modal opened"})},style:{height:600,border:"none",width:"100%",overflow:"none",marginTop:"-40px",paddingLeft:"20px"},title:b||($?"freeTrialSignUp":"SignUp"),src:k,loading:"eager"})]})]}),!w&&(0,s.jsx)(l.Z,{className:E.loaderContainer,children:(0,s.jsx)(d.Z,{color:"inherit",size:60,disableShrink:!0})})]})}},56321:function(e,n,t){t.d(n,{FT:function(){return r},IL:function(){return i},P7:function(){return c},PX:function(){return d},W7:function(){return s},aP:function(){return o},br:function(){return u},lM:function(){return a},rg:function(){return l}});var i="FreeTrialSignUpModal",r="loImageConversionPanel",o="Plus much more.",a="Ways to shop",s="First month free",l="Subscribe and save 80%",c="Subscribe and save 70%",u="Subscribe and save",d="first month"},99783:function(e,n,t){t.d(n,{v:function(){return i}});var i=(0,t(2784).createContext)(void 0)},67242:function(e,n,t){t.d(n,{S:function(){return c}});var i=t(87394),r=t(52322),o=t(27739),a=t(58332),s=t(2784),l=t(99783),c=function(e){var n=e.defaultSelectedPlan,t=e.children,c=e.discount,u=e.isEligibleForEssentialsPlan,d=(0,a.s)()?o.Pvj:o.v88,f=(0,i.Z)((0,s.useState)(n||d),2),x=f[0],p=f[1];return(0,r.jsx)(l.v.Provider,{value:{selectedPlan:x,setSelectedPlan:p,isFreeTrial:x===d,discount:c,isEligibleForEssentialsPlan:void 0!==u&&u},children:t})}},25282:function(e,n,t){t.d(n,{s:function(){return o}});var i=t(2784),r=t(99783),o=function(){return(0,i.useContext)(r.v)}},26602:function(e,n,t){t.r(n),t.d(n,{ExperimentP32171MarketingContent:function(){return y},SkeletonLoader:function(){return b},experimentConfig:function(){return j}});var i,r=t(70865),o=t(96670),a=t(52322),s=t(63155),l=t(89263),c=t(14985),u=t(81643),d=function(e){var n=e.initialProps,t=n.MarketingContent;return(0,a.jsx)(t,(0,r.Z)({},n))},f=t(47842),x=t(88849),p=t(2784),g=t(68052),h=t(51421),v=t(63221),m=t(47366),P=t(83725),k=t(59877),_=(i={},(0,f.Z)(i,x.NM,function(e){var n=e.experiment,t=e.initialProps;return(0,p.useEffect)(function(){n.recordImpression()},[]),(0,a.jsx)(d,{initialProps:t})}),(0,f.Z)(i,x.vG,function(e){var n=e.experiment,t=e.initialProps,i=t.MarketingContent,o=t.productPrice,s=void 0===o?"":o,l=t.isFreeTrial,c=(0,k.$G)(g.kJP).t,u=(0,p.useCallback)(function(e){var n=e.translationKey,t=e.translationProps;return(0,a.jsx)(k.cC,{ns:g.kJP,i18nKey:n,components:{b:(0,a.jsx)("b",{})},values:(0,r.Z)({},t),t:c})},[c]),d=c("create_user_trial_image10_title"),f=(0,p.useMemo)(function(){return[{icon:(0,a.jsx)(h.t,{}),text:u({translationKey:"full_access_alt"})},{icon:(0,a.jsx)(v.n,{}),text:u({translationKey:"risk_free"})},{icon:(0,a.jsx)(m.f,{}),text:u({translationKey:"save_more",translationProps:{PRICE:s}})},{icon:(0,a.jsx)(P.B,{}),text:u({translationKey:"keep_what_you_have_licensed_alt"})}]},[s,u]);return((0,p.useEffect)(function(){n.recordImpression()},[]),l)?(0,a.jsx)(i,{title:d,bannerContent:f,shouldShowCancellationTerms:!0}):(0,a.jsx)(i,(0,r.Z)({},t))}),i),j=(0,o.Z)((0,r.Z)({},c.LL),{treatments:_}),b=function(){return(0,a.jsx)(s.O,{})},y=function(e){return(0,u.A)()?(0,a.jsx)(l.K,{config:j,initialProps:e,Portal:d,SkeletonLoader:b}):(0,a.jsx)(d,{initialProps:e})}}}]);
//# sourceMappingURL=1818.508a3196aa5a56bd.js.map