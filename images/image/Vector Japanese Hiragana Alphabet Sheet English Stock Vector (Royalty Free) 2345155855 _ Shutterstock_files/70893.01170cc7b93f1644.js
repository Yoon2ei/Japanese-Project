"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70893],{39183:function(t,e,n){n.d(e,{O:function(){return v}});var i=n(47842),r=n(87394),a=n(52322),s=n(62197),o=n(21647),m=n(68052),u=n(97258),c=n(8149),l=n(13011),f=n(44297),d=n(68769),h=n(54112),b=n(2784),F=n(30816),z=function(t){var e;return e={formats:"formats",formatsWithAssetType:["formats_with_asset_type",{ASSET_TYPE:t.assetTypeLabel}],pixels:"pixels",dpi:"dpi"},(0,i.Z)(e,u.yF,"common:resolutions_4k"),(0,i.Z)(e,u.HD,"common:resolutions_hd"),(0,i.Z)(e,u.SD,"common:resolutions_sd"),(0,i.Z)(e,u.qY,"common:resolutions_web"),(0,i.Z)(e,u.Zh,"common:resolutions_web"),(0,i.Z)(e,u.T0,"common:resolutions_web"),e},S=function(t){var e=t.size,n=(0,F.e)({layout:"column"}).classes;return(0,a.jsx)("li",{children:(0,a.jsx)(s.Z,{variant:"body2",className:n.listItem,children:e||(0,a.jsx)(o.Z,{variant:"text",width:l.G})})})},v=function(t){var e=t.asset,n=t.templateFormats,i=t.assetTypeLabel,u=(0,f.Tp)(e),v=(0,f.PD)(e),g=(0,h.D)({namespace:m.sm6,translationKeys:z({assetTypeLabel:i})}),x=g.ready,p=g.labels,y=(0,F.s)({layout:"column"}).classes,Z=(0,d.Ch)(),D=(n.formattedSizes.length>=1?n:Z({asset:e,labels:p,limit:v&&1})).formattedSizes,w=[c.k4,c.pX,c.bz].includes(u)?p.formatsWithAssetType:p.formats,k=(0,r.Z)((0,b.useState)(function(){return!!n.formattedSizes.length}),2),I=k[0],N=k[1];return(0,b.useEffect)(function(){I||N(!0)},[I]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{className:y.labelTitle,children:x?w:(0,a.jsx)(o.Z,{variant:"text",width:l.pP})}),(0,a.jsx)("ul",{className:y.list,children:D.map(function(t){return(0,a.jsx)(S,{size:I?t:void 0},t)})})]})};v.defaultProps={templateFormats:{formattedSizes:[]},assetTypeLabel:""}},64155:function(t,e,n){n.r(e),n.d(e,{AssetFormats:function(){return i.O}});var i=n(39183)},65537:function(t,e,n){n.d(e,{IC:function(){return i},tS:function(){return r},xn:function(){return a}});var i="centimeters",r="inches",a="pixels"},55988:function(t,e,n){n.d(e,{HV:function(){return i},mC:function(){return a},mh:function(){return r}});var i="sstk-org",r="shutterstock-photo",a="shutterstock-premier"},68769:function(t,e,n){n.d(e,{RO:function(){return P},Ch:function(){return B},It:function(){return E},Rc:function(){return C},Ux:function(){return Z},kn:function(){return j},oE:function(){return D}});var i,r=n(47842),a=n(70865),s=n(96670),o=n(87394),m=n(50930),u=n(19522),c=n(8149),l=n(65537),f="kilobyte",d="megabyte",h="gigabyte",b="inch",F="centimeter",z=n(65532),S=n(37546),v=n(44297),g=n(2784),x=n(82603),p=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return null===(t=e.toString().match(/[0-9.,]+/))||void 0===t?void 0:t[0]},y=(i={},(0,r.Z)(i,l.xn,{suffix:"px",widthKey:"width",heightKey:"height"}),(0,r.Z)(i,l.tS,{suffix:"in",widthKey:"widthIn",heightKey:"heightIn"}),(0,r.Z)(i,l.IC,{suffix:"cm",widthKey:"widthCm",heightKey:"heightCm"}),i),Z=function(t){var e=(0,z.PE)().fullLocale;return new Intl.NumberFormat(e,t).format},D=function(t){var e=t.unit,n=t.maximumFractionDigits,i=(0,o.Z)((0,g.useState)(""),2),r=i[0],a=i[1],s=(0,z.PE)().fullLocale,m=(0,g.useMemo)(function(){try{return new Intl.NumberFormat(s,{style:"unit",unit:e,maximumFractionDigits:n})}catch(t){return a(t),{format:function(t){return t}}}},[s,n,e]);return(0,g.useMemo)(function(){return{format:m.format,error:r}},[m.format,r])},w=function(t){var e=t.humanReadableSize,n=t.size,i=t.name;return e||"".concat(n.toFixed(1)," ").concat(i)},k=function(t){var e=t.formatter,n=t.humanReadableSize,i=t.size,r=t.name,a=e.error,s=e.format;return a?w({humanReadableSize:n,size:i,name:r}):s(i)},I=function(t){var e=t.bytes,n=t.gbFormatter,i=t.mbFormatter,r=t.kbFormatter,a=t.humanReadableSize,s=e/1e3,o=s/1e3,m=o/1e3;return m>=1?k({formatter:n,humanReadableSize:a,size:m,name:"GB"}):o>=1?k({formatter:i,humanReadableSize:a,size:o,name:"MB"}):k({formatter:r,humanReadableSize:a,size:s,name:"KB"})},N=function(t,e,n){var i=y[t]||{},r=i.suffix,a=i.widthKey,s=i.heightKey,m=n[t],u=(0,o.Z)([e[a],e[s]].map(function(t){return t&&Number(p(t))}),2),c=u[0],l=u[1],f=!Number.isNaN(c)&&c>0,d=!Number.isNaN(l)&&l>0;return f||d?{formattedWidth:f?k({formatter:m,size:c,name:r}):"",formattedHeight:d?k({formatter:m,size:l,name:r}):""}:{}},R=function(t){var e=t.assetSize,n=t.kbFormatter,i=t.mbFormatter,r=t.gbFormatter,a=e.sizeInBytes,s=e.humanReadableSize,o=e.fileSize;return a||o||s?I({bytes:a||1e3*o,gbFormatter:r,mbFormatter:i,kbFormatter:n,humanReadableSize:s}):""},C=function(t){return R({assetSize:t.assetSize,kbFormatter:D({unit:f,maximumFractionDigits:0}),mbFormatter:D({unit:d,maximumFractionDigits:1}),gbFormatter:D({unit:h,maximumFractionDigits:1})})},U=function(t){var e=t.formattedWidth,n=t.formattedHeight;return"".concat(p(e)," \xd7 ").concat(n)},_=function(t){var e,n=t.assetSize,i=t.displayUnits,a=t.inchFormatter,s=t.centimeterFormatter,o=t.labels,m=void 0===o?{}:o,u=N(i,n,(e={},(0,r.Z)(e,l.tS,a),(0,r.Z)(e,l.IC,s),(0,r.Z)(e,l.xn,{format:function(t){return m.pixels?"".concat(t," ").concat(m.pixels):"".concat(t," ").concat(y[l.xn].suffix)}}),e)),c=u.formattedWidth,f=u.formattedHeight;return c||f?U({formattedWidth:c,formattedHeight:f}):""},A=function(t){return _(t)||_((0,s.Z)((0,a.Z)({},t),{displayUnits:l.xn}))},T=function(t){var e=t.displayUnits,n=t.assetSize,i=t.inchFormatter,r=t.centimeterFormatter,a=t.labels;return e===l.xn?A({assetSize:n,displayUnits:l.tS,inchFormatter:i,centimeterFormatter:r,labels:a}):A({assetSize:n,displayUnits:e,inchFormatter:i,centimeterFormatter:r,labels:a})},E=function(t){var e=t.isImageAsset,n=t.assetSize,i=t.labels,a=(0,x.n)(),s=D({unit:b,maximumFractionDigits:0}),o=D({unit:F,maximumFractionDigits:0}),m=A({assetSize:n,displayUnits:l.xn,inchFormatter:s,centimeterFormatter:o,labels:i}),u=(0,r.Z)({},l.xn,m);return e&&(u.formattedDimensions=T({assetSize:n,labels:i,displayUnits:a,inchFormatter:s,centimeterFormatter:o})),u},j=function(){var t=(0,x.n)(),e=D({unit:f,maximumFractionDigits:0}),n=D({unit:d,maximumFractionDigits:1}),i=D({unit:h,maximumFractionDigits:1}),r=D({unit:b,maximumFractionDigits:0}),a=D({unit:F,maximumFractionDigits:0});return(0,g.useCallback)(function(s){var o=s.assetSize,m=R({assetSize:o,kbFormatter:e,mbFormatter:n,gbFormatter:i}),u=A({assetSize:o,displayUnits:t,inchFormatter:r,centimeterFormatter:a});return m?{resolutionDetails:u,size:m}:{resolutionDetails:u}},[a,t,r,i,n,e])},K=function(t){var e,n=t.assetSize,i=t.centimeterFormatter,r=t.displayUnits,a=t.inchFormatter,s=t.isImageAsset,o=t.labels,u=t.isVideoAsset,f=t.isDesignAsset,d=n.format,h=n.dpi,b=n.name,F=n.resolution,z=(null==d?void 0:d.toUpperCase())||"";if(b===c.gf)return z;var S=A({assetSize:n,PIXELS:l.xn,inchFormatter:a,centimeterFormatter:i,labels:o});return e=(s||f)&&h?[S,T({assetSize:n,labels:o,displayUnits:r,inchFormatter:a,centimeterFormatter:i}),"".concat(o.dpi," ").concat(h),z]:u?[o[null==F?void 0:F.toLowerCase()]||"",S,z]:[S,z],(0,m.Z)(new Set(e)).filter(function(t){return!!t}).join(" • ")},P=function(t){var e=t.sizes;return(void 0===e?[]:e).filter(function(t){return t.format!==u.LX})},L=function(t){var e=t.limit,n=void 0===e?0:e,i=t.sortedSizes;return n>0?null==i?void 0:i.slice(0,n):i},B=function(){var t=(0,x.n)(),e=D({unit:b,maximumFractionDigits:1}),n=D({unit:F,maximumFractionDigits:1});return(0,g.useCallback)(function(i){var r=i.asset,a=i.labels,s=i.limit,o=(0,v.aT)(r),m=(0,v.Am)(r),u=(0,v.ML)(r),c=o||u?P({sizes:Object.values(r.sizes||{})}):r.sizes,l=L({limit:void 0===s?0:s,sortedSizes:o||u?(0,S.hQ)(Object.values(c)):(0,S.Z)({sizes:c})});return{formattedSizes:null==l?void 0:l.map(function(i){return K({assetSize:i,centimeterFormatter:n,displayUnits:t,inchFormatter:e,isImageAsset:o,isDesignAsset:u,labels:a,isVideoAsset:m})})}},[t,n,e])}},82603:function(t,e,n){n.d(e,{b:function(){return z},n:function(){return S}});var i,r=n(47842),a=n(70865),s=n(81740),o=n(11181),m=n(65537),u=n(55988),c=n(52884),l=n(49670),f=n(9009),d=n(3255),h=n(9823),b=n(12649),F=(i={},(0,r.Z)(i,o.BRANDS.SSTK,u.mh),(0,r.Z)(i,o.BRANDS.ENTERPRISE,u.mC),i),z=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).queryParams,e=(0,b.B)(),n=(0,h.D)().brand,i=(0,a.Z)({site_name:F[n]},t);return(0,d.ZP)(e&&(0,s.nI)({queryParams:i}).formattedUrl,function(t){return l.uS.get(t).then(function(t){return(0,f.O)(t.data)})},{dedupingInterval:c.yR})},S=function(){var t=z().data;return(null==t?void 0:t.displayUnits)||m.xn}}}]);
//# sourceMappingURL=70893.01170cc7b93f1644.js.map