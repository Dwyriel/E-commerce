(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"2MiI":function(t,i,e){"use strict";e.d(i,"a",function(){return l});var s=e("OGMK"),n=e("fXoL"),r=e("ofXK"),o=e("TEn/");function c(t,i){if(1&t&&(n.Rb(0,"ion-header",3),n.Rb(1,"ion-toolbar"),n.Rb(2,"ion-buttons",4),n.Nb(3,"ion-menu-button"),n.Qb(),n.Rb(4,"ion-title"),n.qc(5),n.Qb(),n.Qb(),n.Qb()),2&t){const t=n.bc();n.gc("translucent",!0),n.Bb(5),n.rc(t.title)}}function u(t,i){if(1&t&&(n.Rb(0,"ion-header",5),n.Rb(1,"ion-toolbar"),n.Rb(2,"ion-title",6),n.qc(3),n.Qb(),n.Qb(),n.Qb()),2&t){const t=n.bc();n.Bb(3),n.rc(t.title)}}function b(t,i){1&t&&n.Nb(0,"div",7)}let l=(()=>{class t{constructor(){this.title="",this.isMobile=!0}ngOnInit(){this.subscription&&!this.subscription.closed&&this.subscription.unsubscribe(),this.subscription=s.a.GetAppInfo().subscribe(t=>{this.isMobile=t.appWidth<=s.a.maxMobileWidth})}ngOnDestroy(){this.subscription&&!this.subscription.closed&&this.subscription.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=n.Gb({type:t,selectors:[["app-header"]],inputs:{title:"title",segment:"segment"},decls:3,vars:3,consts:[[3,"translucent",4,"ngIf"],["collapse","condense",4,"ngIf"],["style","width: 100%; height: 65px;",4,"ngIf"],[3,"translucent"],["slot","start"],["collapse","condense"],["size","large"],[2,"width","100%","height","65px"]],template:function(t,i){1&t&&(n.pc(0,c,6,2,"ion-header",0),n.pc(1,u,4,1,"ion-header",1),n.pc(2,b,1,0,"div",2)),2&t&&(n.gc("ngIf",i.isMobile&&"0"==i.segment),n.Bb(1),n.gc("ngIf",i.isMobile&&"1"==i.segment),n.Bb(1),n.gc("ngIf",!i.isMobile&&"0"==i.segment))},directives:[r.k,o.o,o.S,o.f,o.B,o.R],styles:[""]}),t})()},dagM:function(t,i,e){"use strict";e.d(i,"a",function(){return u});var s=e("ofXK"),n=e("3Pt+"),r=e("tyNb"),o=e("TEn/"),c=e("fXoL");let u=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({imports:[[o.T,s.b,n.a,r.k]]}),t})()},tr9m:function(t,i,e){"use strict";e.r(i),e.d(i,"ProductListPageModule",function(){return P});var s=e("ofXK"),n=e("3Pt+"),r=e("TEn/"),o=e("tyNb"),c=e("mrSG"),u=e("OGMK"),b=e("PVVB"),l=e("fXoL"),a=e("Gdn9"),h=e("4kQV"),d=e("3LUQ"),p=e("2MiI");function g(t,i){if(1&t&&(l.Rb(0,"div",10),l.qc(1),l.Qb()),2&t){const t=l.bc();l.Bb(1),l.rc(t.title)}}function f(t,i){if(1&t){const t=l.Sb();l.Rb(0,"div",11),l.Rb(1,"ion-select",12),l.Zb("ngModelChange",function(i){return l.mc(t),l.bc().sorting=i})("ngModelChange",function(){return l.mc(t),l.bc().sortListing()}),l.Rb(2,"ion-select-option",13),l.qc(3,"Maior pre\xe7o"),l.Qb(),l.Rb(4,"ion-select-option",13),l.qc(5,"Menor pre\xe7o"),l.Qb(),l.Rb(6,"ion-select-option",13),l.qc(7,"Avalia\xe7\xe3o"),l.Qb(),l.Qb(),l.Qb()}if(2&t){const t=l.bc();l.Bb(1),l.gc("ngModel",t.sorting),l.Bb(1),l.gc("value",0),l.Bb(2),l.gc("value",1),l.Bb(2),l.gc("value",2)}}function v(t,i){1&t&&(l.Rb(0,"div",14),l.qc(1,"Nenhum item encontrado."),l.Qb())}function m(t,i){if(1&t&&l.Nb(0,"img",18),2&t){const t=l.bc().$implicit;l.gc("src",t.gallery[0],l.nc)("alt",t.name)}}function y(t,i){if(1&t&&(l.Rb(0,"ion-item",15),l.pc(1,m,1,2,"img",16),l.Rb(2,"ion-label"),l.Rb(3,"h2"),l.qc(4),l.Qb(),l.Rb(5,"h3"),l.qc(6),l.cc(7,"currency"),l.Rb(8,"span",17),l.qc(9),l.Qb(),l.Qb(),l.Qb(),l.Qb()),2&t){const t=i.$implicit;l.ic("routerLink","/product/",t.id,""),l.Bb(1),l.gc("ngIf",(null==t.gallery?null:t.gallery.length)>0),l.Bb(3),l.rc(t.name),l.Bb(2),l.rc(l.dc(7,5,t.price,"BRL")),l.Bb(3),l.sc("Avalia\xe7\xe3o: ",t.avgReview||0==t.avgReview?t.avgReview+"%":"Nenhum","")}}const R=function(t){return{webrowser:t}},M=[{path:"",component:(()=>{class t{constructor(t,i,e,s,n){this.activatedRoute=t,this.productService=i,this.reviewService=e,this.router=s,this.alertService=n,this.searchInput=null,this.title="Produtos"}ngOnInit(){}ionViewWillEnter(){return Object(c.b)(this,void 0,void 0,function*(){this.GetPlataformInfo(),this.GetProducts()})}ionViewWillLeave(){this.subscription1&&!this.subscription1.closed&&this.subscription1.unsubscribe(),this.subscription2&&!this.subscription2.closed&&this.subscription2.unsubscribe(),this.subscription3&&!this.subscription3.closed&&this.subscription3.unsubscribe(),this.subscription4&&!this.subscription4.closed&&this.subscription4.unsubscribe()}GetPlataformInfo(){this.subscription3=u.a.GetAppInfo().subscribe(t=>{this.isMobile=t.appWidth<=u.a.maxMobileWidth,this.setDivWidth(.4*t.appWidth>u.a.maxMobileWidth/1.5?"40%":u.a.maxMobileWidth/1.5+"px")})}setDivWidth(t){document.body.style.setProperty("--maxWidth",t)}GetProducts(t=null){return Object(c.b)(this,void 0,void 0,function*(){yield this.alertService.presentLoading().then(t=>this.LoadingAlertID=t),this.searchInput=this.activatedRoute.snapshot.paramMap.get("search"),this.allFromCat=this.activatedRoute.snapshot.paramMap.get("cat"),this.categoryValue=parseInt(this.activatedRoute.snapshot.paramMap.get("value")),this.searchInput?this.GetProductsFromSearch(t):"all"!==this.allFromCat?"sub"!==this.allFromCat?yield this.GetAllProducts(t):yield this.GetProductsFromSubCat(t):this.GetProductsFromCat(t)})}GetProductsFromSearch(t=null){return Object(c.b)(this,void 0,void 0,function*(){this.title=`Busca: ${this.searchInput}`,this.subscription4&&!this.subscription4.closed&&this.subscription4.unsubscribe(),this.subscription4=(yield this.productService.GetBySearchFullString(this.searchInput)).subscribe(i=>Object(c.b)(this,void 0,void 0,function*(){this.products=i,yield this.FillProductAttributes(t)}))})}GetProductsFromCat(t=null){return Object(c.b)(this,void 0,void 0,function*(){b.a.CatsContains(this.categoryValue)&&(this.category=b.a.GetCatFromValue(this.categoryValue),this.title=`Categoria: ${this.category.title}`,this.products=yield this.productService.GetAllVerifiedFromCat(this.categoryValue),yield this.FillProductAttributes(t))})}GetProductsFromSubCat(t=null){return Object(c.b)(this,void 0,void 0,function*(){b.a.SubCatsContains(this.categoryValue)&&(this.subcategory=b.a.GetSubCatFromValue(this.categoryValue),this.title=`${this.subcategory.title} em ${b.a.GetCatFromValue(this.subcategory.category).title}`,this.subscription1&&!this.subscription1.closed&&this.subscription1.unsubscribe(),this.subscription1=(yield this.productService.GetAllVerifiedFromSubCat(this.categoryValue)).subscribe(i=>Object(c.b)(this,void 0,void 0,function*(){this.products=i,yield this.FillProductAttributes(t)})))})}GetAllProducts(t=null){return Object(c.b)(this,void 0,void 0,function*(){this.subscription2&&!this.subscription2.closed&&this.subscription2.unsubscribe(),this.subscription2=(yield this.productService.GetAllVerified()).subscribe(i=>Object(c.b)(this,void 0,void 0,function*(){this.title="Produtos",this.products=i,yield this.FillProductAttributes(t)}))})}FillProductAttributes(t){return Object(c.b)(this,void 0,void 0,function*(){var i=!0,e=[],s=0,n=this.products.length;if(this.products&&this.products.length>0)for(var r of this.products)r.fillSubCategory(),e.push((yield this.reviewService.GetAllFromProduct(r.id)).subscribe(t=>{r.reviews=t,r.reviews&&r.calculateAvgRating(),++s>=n&&(i=!1)},t=>Object(c.b)(this,void 0,void 0,function*(){i=!1})));else i=!1;for(;i;)yield new Promise(t=>setTimeout(t,10));for(var o of e)o.unsubscribe();t&&(yield t.target.complete()),yield this.alertService.dismissLoading(this.LoadingAlertID)})}RefreshContent(t){return Object(c.b)(this,void 0,void 0,function*(){yield this.GetProducts(t)})}sortListing(){switch(this.sorting){case 0:this.products.sort((t,i)=>i.price-t.price);break;case 1:this.products.sort((t,i)=>t.price-i.price);break;case 2:this.products.sort((t,i)=>i.avgReview-t.avgReview)}}}return t.\u0275fac=function(i){return new(i||t)(l.Mb(o.a),l.Mb(a.a),l.Mb(h.a),l.Mb(o.g),l.Mb(d.a))},t.\u0275cmp=l.Gb({type:t,selectors:[["app-product-list"]],decls:11,vars:10,consts:[["segment","0",3,"title"],[3,"fullscreen"],["segment","1",3,"title"],["slot","fixed",3,"ionRefresh"],["pullingIcon","bubbles","refreshingSpinner","bubbles"],[3,"ngClass"],["style","padding-bottom: .3rem;",4,"ngIf"],["style","width: 40%; margin-left: 58%; text-align: right;",4,"ngIf"],["style","text-align: center;",4,"ngIf"],["lines","inset",3,"routerLink",4,"ngFor","ngForOf"],[2,"padding-bottom",".3rem"],[2,"width","40%","margin-left","58%","text-align","right"],["name","sort","interface","popover","placeholder","Ordenar",3,"ngModel","ngModelChange"],[3,"value"],[2,"text-align","center"],["lines","inset",3,"routerLink"],[3,"src","alt",4,"ngIf"],[1,"ion-float-right",2,"font-size",".75rem"],[3,"src","alt"]],template:function(t,i){1&t&&(l.Nb(0,"app-header",0),l.Rb(1,"ion-content",1),l.Nb(2,"app-header",2),l.Rb(3,"ion-refresher",3),l.Zb("ionRefresh",function(t){return i.RefreshContent(t)}),l.Nb(4,"ion-refresher-content",4),l.Qb(),l.Rb(5,"div",5),l.pc(6,g,2,1,"div",6),l.Rb(7,"ion-list"),l.pc(8,f,8,4,"div",7),l.pc(9,v,2,0,"div",8),l.pc(10,y,10,8,"ion-item",9),l.Qb(),l.Qb(),l.Qb()),2&t&&(l.gc("title",i.title),l.Bb(1),l.gc("fullscreen",!0),l.Bb(1),l.gc("title",i.title),l.Bb(3),l.gc("ngClass",l.jc(8,R,!i.isMobile)),l.Bb(1),l.gc("ngIf",!i.isMobile),l.Bb(2),l.gc("ngIf",i.products&&i.products.length>0),l.Bb(1),l.gc("ngIf",!i.products||i.products&&1>i.products.length),l.Bb(1),l.gc("ngForOf",i.products))},directives:[p.a,r.m,r.E,r.F,s.i,s.k,r.y,s.j,r.K,r.cb,n.f,n.i,r.L,r.s,r.bb,o.h,r.x],pipes:[s.c],styles:["img[_ngcontent-%COMP%]{border-radius:10%;height:40px;width:40px;margin:0 7px 0 0}.webrowser[_ngcontent-%COMP%]{text-align:center;width:var(--maxWidth);margin:0 auto;padding-top:1rem}"]}),t})()}];let w=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({imports:[[o.k.forChild(M)],o.k]}),t})();var I=e("dagM");let P=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({imports:[[s.b,n.a,r.T,w,I.a]]}),t})()}}]);