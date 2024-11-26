(()=>{var e={};e.id=98,e.ids=[98],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},7790:e=>{"use strict";e.exports=require("assert")},7702:e=>{"use strict";e.exports=require("events")},2048:e=>{"use strict";e.exports=require("fs")},2615:e=>{"use strict";e.exports=require("http")},5240:e=>{"use strict";e.exports=require("https")},9801:e=>{"use strict";e.exports=require("os")},5315:e=>{"use strict";e.exports=require("path")},6162:e=>{"use strict";e.exports=require("stream")},4175:e=>{"use strict";e.exports=require("tty")},7360:e=>{"use strict";e.exports=require("url")},1764:e=>{"use strict";e.exports=require("util")},1568:e=>{"use strict";e.exports=require("zlib")},1952:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>p,pages:()=>u,routeModule:()=>c,tree:()=>d});var s=t(3003),a=t(4293),o=t(6550),i=t.n(o),l=t(6979),n={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);t.d(r,n);let d=["",{children:["ResetPassword",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,7329)),"/Users/user/Desktop/Currect/adilprojects/adil-webapp-nextjs/app/ResetPassword/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,6877)),"/Users/user/Desktop/Currect/adilprojects/adil-webapp-nextjs/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,2075,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/user/Desktop/Currect/adilprojects/adil-webapp-nextjs/app/ResetPassword/page.tsx"],p={require:t,loadChunk:()=>Promise.resolve()},c=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/ResetPassword/page",pathname:"/ResetPassword",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4200:(e,r,t)=>{Promise.resolve().then(t.bind(t,1002))},1002:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>p});var s=t(8819),a=t(7266),o=t(2571),i=t(2310),l=t(434),n=t(8408),d=t(4099);let u=(0,n.U)(e=>({name:"",newPassword:"",setName:r=>e({name:r}),setNewPassword:r=>e({newPassword:r}),resetPassword:async()=>{try{let{name:e,newPassword:r}=u.getState(),t=await d.Z.post("http://localhost:5151/api/person/reset-password",{name:e,newPassword:r});return console.log("Password Reset Success:",t.data),!0}catch(e){return console.error("Password Reset Failed:",e),!1}}})),p=()=>{let{name:e,newPassword:r,setName:t,setNewPassword:n,resetPassword:d}=u(),[p,c]=(0,a.useState)(null),x=async e=>{e.preventDefault(),await d()?c("Password reset successful! You can now log in with your new password."):c("Password reset failed. Please try again.")};return(0,s.jsx)("div",{className:"flex items-center justify-center bg-[#E2F3F1] p-6",children:(0,s.jsxs)("div",{className:"bg-white shadow-xl rounded-lg p-10 w-full max-w-lg flex flex-col items-center space-y-8",children:[(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("h2",{className:"text-3xl font-bold text-gray-800",children:"Reset Password"}),(0,s.jsx)("p",{className:"text-gray-600 mt-2",children:"Make sure to enter the correct name."})]}),(0,s.jsxs)("form",{onSubmit:x,className:"w-full space-y-6",children:[(0,s.jsx)(i.Z,{type:"text",placeholder:"Name",value:e,onChange:e=>t(e.target.value)}),(0,s.jsx)(i.Z,{type:"password",placeholder:"New Password",value:r,onChange:e=>n(e.target.value)}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(o.Z,{text:"Reset"})})]}),p&&(0,s.jsx)("div",{className:"mt-4 p-4 bg-gray-200 text-center text-[#1A202C] rounded",children:p}),(0,s.jsxs)("p",{className:"mt-4 text-[#1A202C]",children:["Want to log in?"," ",(0,s.jsx)(l.default,{href:"/Login",className:"text-[#1A202C] underline",children:"Click here"})]})]})})}},2571:(e,r,t)=>{"use strict";t.d(r,{Z:()=>o});var s=t(8819);t(7266);var a=t(434);let o=({text:e,href:r})=>{let t=(0,s.jsx)("button",{className:"bg-[#00bf63] p-3 hover:bg-[#00bf20] text-white font-bold h-[48px] border-b-4 border-black hover:border-gray-400 rounded",children:e});return r?(0,s.jsx)(a.default,{href:r,children:t}):t}},2310:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var s=t(8819);t(7266);let a=({type:e,placeholder:r,value:t,onChange:a,className:o})=>(0,s.jsx)("div",{className:"mb-4",children:(0,s.jsx)("input",{type:e,placeholder:r,value:t,onChange:a,className:`w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1A202C] ${o||""}`})})},7329:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{default:()=>e});var a=t(1851);let e=(await (0,a.createProxy)(String.raw`/Users/user/Desktop/Currect/adilprojects/adil-webapp-nextjs/app/ResetPassword/page.tsx`)).default;s()}catch(e){s(e)}},1)},7481:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var s=t(771);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[147,792,771,471,565],()=>t(1952));module.exports=s})();