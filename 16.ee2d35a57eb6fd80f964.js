(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"2MiI":function(i,t,e){"use strict";e.d(t,"a",function(){return l});var n=e("OGMK"),s=e("fXoL"),o=e("ofXK"),r=e("TEn/");function c(i,t){if(1&i&&(s.Rb(0,"ion-header",3),s.Rb(1,"ion-toolbar"),s.Rb(2,"ion-buttons",4),s.Nb(3,"ion-menu-button"),s.Qb(),s.Rb(4,"ion-title"),s.rc(5),s.Qb(),s.Qb(),s.Qb()),2&i){const i=s.bc();s.hc("translucent",!0),s.Bb(5),s.sc(i.title)}}function b(i,t){if(1&i&&(s.Rb(0,"ion-header",5),s.Rb(1,"ion-toolbar"),s.Rb(2,"ion-title",6),s.rc(3),s.Qb(),s.Qb(),s.Qb()),2&i){const i=s.bc();s.Bb(3),s.sc(i.title)}}function a(i,t){1&i&&s.Nb(0,"div",7)}let l=(()=>{class i{constructor(){this.title="",this.isMobile=!0}ngOnInit(){this.subscription&&!this.subscription.closed&&this.subscription.unsubscribe(),this.subscription=n.a.GetAppInfo().subscribe(i=>{this.isMobile=i.appWidth<=n.a.maxMobileWidth})}ngOnDestroy(){this.subscription&&!this.subscription.closed&&this.subscription.unsubscribe()}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=s.Gb({type:i,selectors:[["app-header"]],inputs:{title:"title",segment:"segment"},decls:3,vars:3,consts:[[3,"translucent",4,"ngIf"],["collapse","condense",4,"ngIf"],["style","width: 100%; height: 65px;",4,"ngIf"],[3,"translucent"],["slot","start"],["collapse","condense"],["size","large"],[2,"width","100%","height","65px"]],template:function(i,t){1&i&&(s.qc(0,c,6,2,"ion-header",0),s.qc(1,b,4,1,"ion-header",1),s.qc(2,a,1,0,"div",2)),2&i&&(s.hc("ngIf",t.isMobile&&"0"==t.segment),s.Bb(1),s.hc("ngIf",t.isMobile&&"1"==t.segment),s.Bb(1),s.hc("ngIf",!t.isMobile&&"0"==t.segment))},directives:[o.k,r.o,r.T,r.f,r.B,r.S],styles:[""]}),i})()},dagM:function(i,t,e){"use strict";e.d(t,"a",function(){return b});var n=e("ofXK"),s=e("3Pt+"),o=e("tyNb"),r=e("TEn/"),c=e("fXoL");let b=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=c.Kb({type:i}),i.\u0275inj=c.Jb({imports:[[r.U,n.b,s.a,o.k]]}),i})()},uQSZ:function(i,t,e){"use strict";e.r(t),e.d(t,"AdvertsPageModule",function(){return M});var n=e("ofXK"),s=e("3Pt+"),o=e("TEn/"),r=e("tyNb"),c=e("mrSG"),b=e("OGMK"),a=e("fXoL"),l=e("3LUQ"),d=e("Gdn9"),u=e("4kQV"),h=e("2MiI");function p(i,t){1&i&&(a.Rb(0,"div",7),a.rc(1,"An\xfancios"),a.Qb())}function f(i,t){1&i&&(a.Rb(0,"div",8),a.rc(1,"Nenhum item encontrado."),a.Qb())}function v(i,t){if(1&i){const i=a.Sb();a.Rb(0,"ion-item-options",16),a.Rb(1,"ion-item-option",17),a.Zb("click",function(){a.nc(i);const t=a.bc().$implicit;return a.bc().DeleteAdvert(t.id)}),a.Rb(2,"span",18),a.rc(3,"Deletar"),a.Qb(),a.Qb(),a.Qb()}}function g(i,t){if(1&i&&(a.Rb(0,"ion-item",19),a.Zb("click",function(i){return i.stopPropagation()}),a.rc(1,"Editar"),a.Qb()),2&i){const i=a.bc().$implicit;a.jc("routerLink","/productForm/",i.id,"")}}function m(i,t){if(1&i){const i=a.Sb();a.Rb(0,"ion-item",20),a.Zb("click",function(t){a.nc(i);const e=a.bc().$implicit,n=a.bc();return t.stopPropagation(),n.DeleteAdvert(e.id)}),a.rc(1,"Deletar"),a.Qb()}}function y(i,t){if(1&i&&(a.Rb(0,"ion-item-options",21),a.Rb(1,"ion-item-option",22),a.Rb(2,"span",18),a.rc(3,"Editar"),a.Qb(),a.Qb(),a.Qb()),2&i){const i=a.bc().$implicit;a.Bb(1),a.jc("routerLink","/productForm/",i.id,"")}}function A(i,t){if(1&i){const i=a.Sb();a.Rb(0,"ion-item-sliding"),a.qc(1,v,4,0,"ion-item-options",9),a.Rb(2,"ion-item",10),a.Zb("click",function(){a.nc(i);const e=t.$implicit;return a.bc().GoTo(e)}),a.Nb(3,"img",11),a.Rb(4,"ion-label"),a.Rb(5,"h2"),a.rc(6),a.Rb(7,"span",12),a.rc(8),a.Qb(),a.Qb(),a.Rb(9,"h3"),a.rc(10),a.cc(11,"currency"),a.Rb(12,"span",12),a.rc(13),a.Qb(),a.Qb(),a.Rb(14,"h4"),a.rc(15),a.Qb(),a.Qb(),a.qc(16,g,2,1,"ion-item",13),a.qc(17,m,2,0,"ion-item",14),a.Qb(),a.qc(18,y,4,1,"ion-item-options",15),a.Qb()}if(2&i){const i=t.$implicit,e=a.bc();a.Bb(1),a.hc("ngIf",e.isMobile),a.Bb(2),a.hc("src",(null==i.gallery?null:i.gallery.length)>0?i.gallery[0]:"assets/sem-foto.png",a.oc)("alt",i.name),a.Bb(3),a.sc(i.name),a.Bb(2),a.tc("Stock: ",i.stock,""),a.Bb(2),a.sc(a.dc(11,11,i.price,"BRL")),a.Bb(3),a.tc("Avalia\xe7\xe3o: ",i.avgReview||0==i.avgReview?i.avgReview+"%":"Nenhum",""),a.Bb(2),a.sc(i.verified?"Verificado":"N\xe3o Verificado"),a.Bb(1),a.hc("ngIf",!e.isMobile),a.Bb(1),a.hc("ngIf",!e.isMobile),a.Bb(1),a.hc("ngIf",e.isMobile)}}const R=function(i){return{webrowser:i}},I=[{path:"",component:(()=>{class i{constructor(i,t,e,n){this.alertService=i,this.router=t,this.productService=e,this.reviewService=n,this.adverts=[]}ngOnInit(){}ionViewWillEnter(){return Object(c.b)(this,void 0,void 0,function*(){this.GetPlataformInfo(),this.GetUserAndAdverts()})}ionViewWillLeave(){this.adverts=[],this.user=null,this.subscription1&&!this.subscription1.closed&&this.subscription1.unsubscribe(),this.subscription2&&!this.subscription2.closed&&this.subscription2.unsubscribe(),this.subscription3&&!this.subscription3.closed&&this.subscription3.unsubscribe()}GetPlataformInfo(){this.subscription1=b.a.GetAppInfo().subscribe(i=>{this.isMobile=i.appWidth<=b.a.maxMobileWidth,this.setDivWidth(.4*i.appWidth>b.a.maxMobileWidth/1.5?"40%":b.a.maxMobileWidth/1.5+"px")})}setDivWidth(i){document.body.style.setProperty("--maxWidth",i)}GetUserAndAdverts(){return Object(c.b)(this,void 0,void 0,function*(){yield this.alertService.presentLoading().then(i=>this.loadingAlertID=i),this.subscription2=b.a.GetUserInfo().subscribe(i=>Object(c.b)(this,void 0,void 0,function*(){if(!i)return yield this.router.navigate(["/login"]),void(yield this.alertService.dismissLoading(this.loadingAlertID));this.user=i,this.GetAdverts()}),i=>Object(c.b)(this,void 0,void 0,function*(){yield this.alertService.dismissLoading(this.loadingAlertID),yield this.alertService.presentAlert("Ops","Algo deu errado, tente novamente mais tarde.")}))})}GetAdverts(){return Object(c.b)(this,void 0,void 0,function*(){this.subscription3&&!this.subscription3.closed&&this.subscription3.unsubscribe(),this.subscription3=(yield this.productService.GetAllFromSeller(this.user.id)).subscribe(i=>{this.adverts=i,this.FillProductAttributes()},i=>Object(c.b)(this,void 0,void 0,function*(){yield this.alertService.dismissLoading(this.loadingAlertID),yield this.alertService.presentAlert("Ops","Algo deu errado, tente novamente mais tarde.")}))})}FillProductAttributes(){return Object(c.b)(this,void 0,void 0,function*(){var i=!0,t=[],e=0,n=this.adverts.length;if(this.adverts&&n>0)for(var s of this.adverts)s.fillSubCategory(),t.push((yield this.reviewService.GetAllFromProduct(s.id)).subscribe(t=>{s.reviews=t,s.reviews&&s.calculateAvgRating(),++e>=n&&(i=!1)},t=>Object(c.b)(this,void 0,void 0,function*(){i=!1})));else i=!1;for(;i;)yield new Promise(i=>setTimeout(i,10));for(var o of t)o.unsubscribe();yield this.alertService.dismissLoading(this.loadingAlertID)})}DeleteAdvert(i){return Object(c.b)(this,void 0,void 0,function*(){var t=!1;yield this.alertService.confirmationAlert("Deletar","Tem certeza que deseja deletar esse anuncio?").then(i=>t=i),t&&(yield this.alertService.presentLoading().then(i=>this.loadingAlertID=i),yield this.productService.DeleteCallFromUser(i,!0).then(()=>Object(c.b)(this,void 0,void 0,function*(){yield this.alertService.presentAlert("Feito!","O An\xfancio foi deletado.")})).catch(i=>{this.alertService.presentAlert("Erro","Ocorreu um erro e n\xe3o foi possivel deletar esse an\xfancio, tente novamente mais tarde.")}).finally(()=>Object(c.b)(this,void 0,void 0,function*(){yield this.alertService.dismissLoading(this.loadingAlertID)})))})}GoTo(i){return Object(c.b)(this,void 0,void 0,function*(){i.verified?yield this.router.navigate([`/product/${i.id}`]):this.alertService.presentAlert("Produto n\xe3o Verificado","Esse produto ainda n\xe3o foi verificado e ent\xe3o ainda n\xe3o possui uma pagina.")})}}return i.\u0275fac=function(t){return new(t||i)(a.Mb(l.a),a.Mb(r.g),a.Mb(d.a),a.Mb(u.a))},i.\u0275cmp=a.Gb({type:i,selectors:[["app-adverts"]],decls:8,vars:7,consts:[["title","An\xfancios","segment","0"],[3,"fullscreen"],["title","An\xfancios","segment","1"],[3,"ngClass"],["style","padding-bottom: .3rem;",4,"ngIf"],["style","text-align: center;",4,"ngIf"],[4,"ngFor","ngForOf"],[2,"padding-bottom",".3rem"],[2,"text-align","center"],["side","start",4,"ngIf"],["lines","inset","button","",3,"click"],[3,"src","alt"],[1,"ion-float-right",2,"font-size",".75rem"],["class","ion-margin-start","color","warning",3,"routerLink","click",4,"ngIf"],["class","ion-margin","color","danger","button","",3,"click",4,"ngIf"],["side","end",4,"ngIf"],["side","start"],["color","danger",3,"click"],["id","optionRight"],["color","warning",1,"ion-margin-start",3,"routerLink","click"],["color","danger","button","",1,"ion-margin",3,"click"],["side","end"],["color","warning",3,"routerLink"]],template:function(i,t){1&i&&(a.Nb(0,"app-header",0),a.Rb(1,"ion-content",1),a.Nb(2,"app-header",2),a.Rb(3,"div",3),a.qc(4,p,2,0,"div",4),a.Rb(5,"ion-list"),a.qc(6,f,2,0,"div",5),a.qc(7,A,19,14,"ion-item-sliding",6),a.Qb(),a.Qb(),a.Qb()),2&i&&(a.Bb(1),a.hc("fullscreen",!0),a.Bb(2),a.hc("ngClass",a.kc(5,R,!t.isMobile)),a.Bb(1),a.hc("ngIf",!t.isMobile),a.Bb(2),a.hc("ngIf",!t.adverts||t.adverts&&1>t.adverts.length),a.Bb(1),a.hc("ngForOf",t.adverts))},directives:[h.a,o.m,n.i,n.k,o.y,n.j,o.w,o.s,o.x,o.v,o.u,o.cb,r.h],pipes:[n.c],styles:["img[_ngcontent-%COMP%]{border-radius:10%;height:40px;width:40px;margin:0 7px 0 0}.webrowser[_ngcontent-%COMP%]{text-align:center;width:var(--maxWidth);margin:0 auto;padding-top:1rem}#optionRight[_ngcontent-%COMP%]{margin:0 .9rem 0 1rem}"]}),i})()}];let w=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=a.Kb({type:i}),i.\u0275inj=a.Jb({imports:[[r.k.forChild(I)],r.k]}),i})();var Q=e("dagM");let M=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=a.Kb({type:i}),i.\u0275inj=a.Jb({imports:[[n.b,s.a,o.U,w,Q.a]]}),i})()}}]);