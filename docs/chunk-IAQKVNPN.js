import{l as e}from"./chunk-6YHZQOLZ.js";import{O as o,T as i}from"./chunk-TZAUWE6X.js";var c=class t{constructor(r){this.http=r}productUrl="https://api.escuelajs.co/api/v1/products";getAllProducts(){return this.http.get(this.productUrl)}getProductById(r){return this.http.get(`${this.productUrl}/${r}`)}static \u0275fac=function(p){return new(p||t)(i(e))};static \u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"})};export{c as a};