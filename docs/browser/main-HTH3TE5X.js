import{a as Q}from"./chunk-DTPXPP37.js";import{a as x,b as P,c as z,d as U,e as $,f as q,g as J,h as K}from"./chunk-BF22RW3M.js";import{g as I,h as N,i as Z,j as V,m as R,n as j,o as B,r as G}from"./chunk-6YHZQOLZ.js";import{$a as H,Hb as D,Ia as _,La as l,U as T,Ua as S,Ya as y,Z as d,_a as u,eb as e,fb as t,gb as o,ia as p,ja as s,kb as f,mb as O,rb as i,sb as v,tb as C,vb as c,wb as k,yb as M,zb as E}from"./chunk-TZAUWE6X.js";var W=()=>({exact:!0});function ee(r,a){r&1&&(e(0,"div",29)(1,"ul",30)(2,"li")(3,"a",31),i(4,"Home"),t()(),e(5,"li")(6,"a",32),i(7,"About"),t()(),e(8,"li")(9,"a",33),i(10,"Services"),t()()()()),r&2&&(l(3),u("routerLinkActiveOptions",k(1,W)))}function te(r,a){if(r&1&&(e(0,"div",34)(1,"div",35),o(2,"img",36),t(),e(3,"div",37)(4,"p",38),i(5),t(),e(6,"p",39),i(7),t()(),e(8,"div",40),i(9),M(10,"currency"),t()()),r&2){let n=a.$implicit;l(2),O("alt",n.title),u("src",n.images[0],_),l(3),v(n.title),l(2),v(n.description),l(2),C(" ",E(10,5,n.price)," ")}}var g=class r{isSidebarOpen=S(!1);isMobileMenuOpen=S(!1);cartService=T(Q);cart=this.cartService.cart;cartTotal=this.cartService.cartTotal;toggleSidebar(){this.isSidebarOpen.update(a=>!a)}toggleMobileMenu(){this.isMobileMenuOpen.update(a=>!a)}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=d({type:r,selectors:[["app-navbar"]],standalone:!0,features:[c],decls:45,vars:10,consts:[[1,"bg-slate-900"],[1,"max-w-screen-xl","flex","flex-wrap","items-center","justify-between","mx-auto","p-4"],[1,"flex","items-center","space-x-8"],["href","https://flowbite.com/",1,"flex","items-center"],["src","https://flowbite.com/docs/images/logo.svg","alt","Flowbite Logo",1,"h-6","mr-3"],[1,"self-center","text-xl","font-semibold","whitespace-nowrap","text-gray-200"],["type","button","aria-controls","mobile-menu","aria-expanded","false",1,"inline-flex","items-center","p-2","ml-3","text-sm","text-gray-200","rounded-lg","md:hidden","hover:bg-gray-700","focus:outline-none",3,"click"],[1,"sr-only"],["fill","none","stroke","currentColor","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",1,"w-6","h-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M4 6h16M4 12h16m-7 6h7"],["id","mobile-menu",1,"hidden","w-full","md:flex","md:items-center","md:w-auto"],[1,"flex","space-x-6"],["routerLink","/","routerLinkActive","underline","aria-current","page",1,"block","hover:underline","text-gray-200",3,"routerLinkActiveOptions"],["routerLink","/about","routerLinkActive","underline",1,"block","hover:underline","text-gray-200"],["routerLink","/services","routerLinkActive","underline",1,"block","hover:underline","text-gray-200"],[1,"flex","items-center"],[1,"p-2","border","rounded","relative",3,"click"],[1,"absolute","-top-2","-left-2","rounded-full","bg-red-600","text-white","text-xs","w-5","h-5","flex","items-center","justify-center","animate-bounce"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-6","h-6"],["stroke-linecap","round","stroke-linejoin","round","d","M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"],["class","md:hidden bg-slate-900 text-gray-200",4,"ngIf"],[1,"fixed","border-l-4","top-0","right-0","z-40","w-72","h-screen","p-4","overflow-y-auto","transition-transform","bg-white"],[1,"flex","justify-between","items-center"],[1,"text-xl"],[3,"click"],["stroke-linecap","round","stroke-linejoin","round","d","M6 18L18 6M6 6l12 12"],["class","flex items-center py-4",4,"ngFor","ngForOf"],[1,"fixed","bottom-0","right-0","w-1/3","p-4","bg-white","border-t"],[1,"text-lg","font-semibold"],[1,"md:hidden","bg-slate-900","text-gray-200"],[1,"space-y-4","p-4"],["routerLink","/","routerLinkActive","underline","aria-current","page",1,"block","hover:underline",3,"routerLinkActiveOptions"],["routerLink","/about","routerLinkActive","underline",1,"block","hover:underline"],["routerLink","/services","routerLinkActive","underline",1,"block","hover:underline"],[1,"flex","items-center","py-4"],[1,"flex-shrink-0"],[1,"w-8","h-8","rounded-full",3,"src","alt"],[1,"flex-1","min-w-0","ms-4"],[1,"text-sm","font-medium","text-gray-900","truncate","dark:text-white"],[1,"text-sm","text-gray-500","truncate","dark:text-gray-400"],[1,"inline-flex","items-center","text-base","font-semibold","text-gray-900","dark:text-white"]],template:function(n,m){n&1&&(e(0,"nav",0)(1,"div",1)(2,"div",2)(3,"a",3),o(4,"img",4),e(5,"span",5),i(6,"My Store On Angular"),t()()(),e(7,"button",6),f("click",function(){return m.toggleMobileMenu()}),e(8,"span",7),i(9,"Open main menu"),t(),p(),e(10,"svg",8),o(11,"path",9),t()(),s(),e(12,"div",10)(13,"ul",11)(14,"li")(15,"a",12),i(16,"Home"),t()(),e(17,"li")(18,"a",13),i(19,"About"),t()(),e(20,"li")(21,"a",14),i(22,"Services"),t()()()(),e(23,"div",15)(24,"button",16),f("click",function(){return m.toggleSidebar()}),e(25,"div",17),i(26),t(),p(),e(27,"svg",18),o(28,"path",19),t()()()(),y(29,ee,11,2,"div",20),t(),s(),e(30,"div",21)(31,"div",22)(32,"p",23),i(33,"My Cart"),t(),e(34,"button",24),f("click",function(){return m.toggleSidebar()}),p(),e(35,"svg",18),o(36,"path",25),t()()(),y(37,te,11,7,"div",26),s(),e(38,"div",27)(39,"div",22)(40,"span",28),i(41,"Total:"),t(),e(42,"span",28),i(43),M(44,"currency"),t()()()()),n&2&&(l(15),u("routerLinkActiveOptions",k(9,W)),l(11),C(" ",m.cart().length," "),l(3),u("ngIf",m.isMobileMenuOpen()),l(),H("translate-x-full",!m.isSidebarOpen()),l(7),u("ngForOf",m.cart()),l(6),v(E(44,7,m.cartTotal())))},dependencies:[V,I,N,Z,P,z],encapsulation:2})};var h=class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=d({type:r,selectors:[["app-footer"]],standalone:!0,features:[c],decls:72,vars:0,consts:[[1,"bg-white","dark:bg-gray-900"],[1,"mx-auto","w-full","max-w-screen-xl","p-4","py-6","lg:py-8"],[1,"md:flex","md:justify-between"],[1,"mb-6","md:mb-0"],["href","https://flowbite.com/",1,"flex","items-center"],["src","https://flowbite.com/docs/images/logo.svg","alt","FlowBite Logo",1,"h-8","me-3"],[1,"self-center","text-2xl","font-semibold","whitespace-nowrap","dark:text-white"],[1,"grid","grid-cols-2","gap-8","sm:gap-6","sm:grid-cols-3"],[1,"mb-6","text-sm","font-semibold","text-gray-900","uppercase","dark:text-white"],[1,"text-gray-500","dark:text-gray-400","font-medium"],[1,"mb-4"],["href","https://flowbite.com/",1,"hover:underline"],["href","https://tailwindcss.com/",1,"hover:underline"],["href","https://github.com/themesberg/flowbite",1,"hover:underline"],["href","https://discord.gg/4eeurUVvTy",1,"hover:underline"],["href","#",1,"hover:underline"],[1,"my-6","border-gray-200","sm:mx-auto","dark:border-gray-700","lg:my-8"],[1,"sm:flex","sm:items-center","sm:justify-between"],[1,"text-sm","text-gray-500","sm:text-center","dark:text-gray-400"],[1,"flex","mt-4","sm:justify-center","sm:mt-0"],["href","#",1,"text-gray-500","hover:text-gray-900","dark:hover:text-white"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 8 19",1,"w-4","h-4"],["fill-rule","evenodd","d","M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z","clip-rule","evenodd"],[1,"sr-only"],["href","#",1,"text-gray-500","hover:text-gray-900","dark:hover:text-white","ms-5"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 21 16",1,"w-4","h-4"],["d","M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 17",1,"w-4","h-4"],["fill-rule","evenodd","d","M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z","clip-rule","evenodd"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 20",1,"w-4","h-4"],["fill-rule","evenodd","d","M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z","clip-rule","evenodd"],["fill-rule","evenodd","d","M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z","clip-rule","evenodd"]],template:function(n,m){n&1&&(e(0,"footer",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),o(5,"img",5),e(6,"span",6),i(7,"Flowbite"),t()()(),e(8,"div",7)(9,"div")(10,"h2",8),i(11,"Resources"),t(),e(12,"ul",9)(13,"li",10)(14,"a",11),i(15,"Flowbite"),t()(),e(16,"li")(17,"a",12),i(18,"Tailwind CSS"),t()()()(),e(19,"div")(20,"h2",8),i(21,"Follow us"),t(),e(22,"ul",9)(23,"li",10)(24,"a",13),i(25,"Github"),t()(),e(26,"li")(27,"a",14),i(28,"Discord"),t()()()(),e(29,"div")(30,"h2",8),i(31,"Legal"),t(),e(32,"ul",9)(33,"li",10)(34,"a",15),i(35,"Privacy Policy"),t()(),e(36,"li")(37,"a",15),i(38,"Terms & Conditions"),t()()()()()(),o(39,"hr",16),e(40,"div",17)(41,"span",18),i(42,"\xA9 2023 "),e(43,"a",11),i(44,"Flowbite\u2122"),t(),i(45,". All Rights Reserved. "),t(),e(46,"div",19)(47,"a",20),p(),e(48,"svg",21),o(49,"path",22),t(),s(),e(50,"span",23),i(51,"Facebook page"),t()(),e(52,"a",24),p(),e(53,"svg",25),o(54,"path",26),t(),s(),e(55,"span",23),i(56,"Discord community"),t()(),e(57,"a",24),p(),e(58,"svg",27),o(59,"path",28),t(),s(),e(60,"span",23),i(61,"Twitter page"),t()(),e(62,"a",24),p(),e(63,"svg",29),o(64,"path",30),t(),s(),e(65,"span",23),i(66,"GitHub account"),t()(),e(67,"a",24),p(),e(68,"svg",29),o(69,"path",31),t(),s(),e(70,"span",23),i(71,"Dribbble account"),t()()()()()())},encapsulation:2})};var b=class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=d({type:r,selectors:[["app-layout"]],standalone:!0,features:[c],decls:3,vars:0,template:function(n,m){n&1&&o(0,"app-navbar")(1,"router-outlet")(2,"app-footer")},dependencies:[g,h,K,x],encapsulation:2})};var X=[{path:"",component:b,children:[{path:"",loadComponent:()=>import("./chunk-QOX7HK62.js")},{path:"about",loadComponent:()=>import("./chunk-FK6Q6PKN.js")},{path:"product/:productId",loadComponent:()=>import("./chunk-YJX3FJAU.js")},{path:"**",loadComponent:()=>import("./chunk-4CXX6XFZ.js")}]}];var Y={providers:[D({eventCoalescing:!0}),$(X,J(),q(U)),G(),R(j())]};var w=class r{title="store";static \u0275fac=function(n){return new(n||r)};static \u0275cmp=d({type:r,selectors:[["app-root"]],standalone:!0,features:[c],decls:1,vars:0,template:function(n,m){n&1&&o(0,"router-outlet")},dependencies:[x],encapsulation:2})};B(w,Y).catch(r=>console.error(r));
