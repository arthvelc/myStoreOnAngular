import './polyfills.server.mjs';
import{a as f}from"./chunk-WWQHJLPL.mjs";import{a as U}from"./chunk-XRYZQYPD.mjs";import{d as N}from"./chunk-CUYVVV4I.mjs";import{m as H,s as V}from"./chunk-QAKKQ3XX.mjs";import{Ha as F,K as k,Ka as a,Q as l,R as _,Ta as x,V as m,Za as p,ab as b,bb as h,ca as T,cb as y,da as E,db as o,ea as P,eb as i,fa as I,fb as c,gb as j,jb as u,ka as L,kb as D,qb as d,rb as s,ub as g,wb as M,xb as A,yb as B}from"./chunk-K2OTAPWY.mjs";import"./chunk-5XUXGTUW.mjs";var G=t=>["/product",t],v=class t{product;addToCart=new L;productService=_(f);constructor(){}addToCartHandler(){console.log("Se hizo click en el bot\xF3n de agregar al carrito"),this.addToCart.emit(this.product)}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=m({type:t,selectors:[["app-product"]],inputs:{product:"product"},outputs:{addToCart:"addToCart"},standalone:!0,features:[g],decls:27,vars:8,consts:[[1,"w-full","max-w-sm","bg-white","border","border-gray-200","rounded-lg","shadow","dark:bg-gray-800","dark:border-gray-700"],["href","#"],["alt","product image",1,"p-8","rounded-t-lg",3,"src"],[1,"px-5","pb-5"],[3,"routerLink"],[1,"text-xl","font-semibold","tracking-tight","text-gray-900","dark:text-white"],[1,"flex","items-center","mt-2.5","mb-5"],[1,"flex","items-center","space-x-1","rtl:space-x-reverse"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 22 20",1,"w-4","h-4","text-yellow-300"],["d","M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 22 20",1,"w-4","h-4","text-gray-200","dark:text-gray-600"],[1,"bg-blue-100","text-blue-800","text-xs","font-semibold","px-2.5","py-0.5","rounded","dark:bg-blue-200","dark:text-blue-800","ms-3"],[1,"flex","items-center","justify-between"],[1,"text-3xl","font-bold","text-gray-900","dark:text-white"],[1,"text-white","bg-blue-700","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:bg-blue-600","dark:hover:bg-blue-700","dark:focus:ring-blue-800",3,"click"]],template:function(r,n){r&1&&(o(0,"div",0)(1,"a",1),c(2,"img",2),i(),o(3,"div",3)(4,"a",4)(5,"h5",5),d(6),i()(),o(7,"div",6)(8,"div",7),P(),o(9,"svg",8),c(10,"path",9),i(),o(11,"svg",8),c(12,"path",9),i(),o(13,"svg",8),c(14,"path",9),i(),o(15,"svg",8),c(16,"path",9),i(),o(17,"svg",10),c(18,"path",9),i()(),I(),o(19,"span",11),d(20,"5.0"),i()(),o(21,"div",12)(22,"span",13),d(23),A(24,"currency"),i(),o(25,"button",14),u("click",function(){return n.addToCartHandler()}),d(26,"Add to cart "),i()()()()),r&2&&(a(2),p("src",n.product.images[0],F),a(2),p("routerLink",M(6,G,n.product.id)),a(2),s(n.product.title),a(17),s(B(24,4,n.product.price)))},dependencies:[H,N],encapsulation:2})};var C=class t{http=l(V);categoriesUrl="https://api.escuelajs.co/api/v1/categories";constructor(){}getAllCategories(){return this.http.get(this.categoriesUrl)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})};function R(t,e){if(t&1&&(o(0,"li")(1,"a",4),d(2),i()()),t&2){let r=e.$implicit;a(2),s(r.name)}}function Z(t,e){if(t&1){let r=j();o(0,"app-product",5),u("addToCart",function(w){T(r);let O=D();return E(O.addToCart(w))}),i()}if(t&2){let r=e.$implicit;p("product",r)}}var S=class t{products=x([]);categories=x([]);cartService=l(U);productService=l(f);categoryService=l(C);ngOnInit(){this.getProducts(),this.getCategories()}addToCart(e){this.cartService.addProductToCart(e),console.log("Se agreg\xF3 al carrito el producto:  ",e.title)}getProducts(){this.productService.getAllProducts().subscribe({next:e=>{this.products.set(e)},error:e=>console.error("Error al obtener los productos: ",e)})}getCategories(){this.categoryService.getAllCategories().subscribe({next:e=>{this.categories.set(e),console.log("Categorias: ",e)},error:e=>console.error("Error al obtener las categorias: ",e)})}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=m({type:t,selectors:[["app-list"]],standalone:!0,features:[g],decls:8,vars:0,consts:[[1,"container","mx-auto","flex","flex-row"],[1,"hidden","md:block","space-x-4","mt-16"],[1,"grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-3","gap-4","justify-center","m-8"],[3,"product"],[1,"cursor-pointer","hover:underline"],[3,"addToCart","product"]],template:function(r,n){r&1&&(o(0,"div",0)(1,"div",1)(2,"ul"),h(3,R,3,1,"li",null,b),i()(),o(5,"div",2),h(6,Z,1,1,"app-product",3,b),i()()),r&2&&(a(3),y(n.categories()),a(3),y(n.products()))},dependencies:[v],encapsulation:2})};export{S as default};