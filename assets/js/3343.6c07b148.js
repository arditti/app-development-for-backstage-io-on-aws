"use strict";(self.webpackChunk_aws_opa_on_aws_website=self.webpackChunk_aws_opa_on_aws_website||[]).push([[3343],{3343:(e,t,s)=>{s.d(t,{diagram:()=>V});var o=s(885),a=s(5625),i=s(4218),r=s(4743),n=s(4852);s(7484),s(7967),s(7856),s(1644),s(9354);const d="rect",l="rectWithTitle",c="statediagram",p=`${c}-state`,b="transition",g=`${b} note-edge`,h=`${c}-note`,u=`${c}-cluster`,y=`${c}-cluster-alt`,w="parent",f="note",x="----",$=`${x}${f}`,m=`${x}${w}`,T="fill:none",S="fill: #333",k="text",D="normal";let A={},_=0;function v(e="",t=0,s="",o=x){return`state-${e}${null!==s&&s.length>0?`${o}${s}`:""}-${t}`}const B=(e,t,s,a,i,n)=>{const c=s.id,b=null==(x=a[c])?"":x.classes?x.classes.join(" "):"";var x;if("root"!==c){let t=d;!0===s.start&&(t="start"),!1===s.start&&(t="end"),s.type!==o.D&&(t=s.type),A[c]||(A[c]={id:c,shape:t,description:r.e.sanitizeText(c,(0,r.c)()),classes:`${b} ${p}`});const a=A[c];s.description&&(Array.isArray(a.description)?(a.shape=l,a.description.push(s.description)):a.description.length>0?(a.shape=l,a.description===c?a.description=[s.description]:a.description=[a.description,s.description]):(a.shape=d,a.description=s.description),a.description=r.e.sanitizeTextOrArray(a.description,(0,r.c)())),1===a.description.length&&a.shape===l&&(a.shape=d),!a.type&&s.doc&&(r.l.info("Setting cluster for ",c,E(s)),a.type="group",a.dir=E(s),a.shape=s.type===o.a?"divider":"roundedWithTitle",a.classes=a.classes+" "+u+" "+(n?y:""));const i={labelStyle:"",shape:a.shape,labelText:a.description,classes:a.classes,style:"",id:c,dir:a.dir,domId:v(c,_),type:a.type,padding:15,centerLabel:!0};if(s.note){const t={labelStyle:"",shape:"note",labelText:s.note.text,classes:h,style:"",id:c+$+"-"+_,domId:v(c,_,f),type:a.type,padding:15},o={labelStyle:"",shape:"noteGroup",labelText:s.note.text,classes:a.classes,style:"",id:c+m,domId:v(c,_,w),type:"group",padding:0};_++;const r=c+m;e.setNode(r,o),e.setNode(t.id,t),e.setNode(c,i),e.setParent(c,r),e.setParent(t.id,r);let n=c,d=t.id;"left of"===s.note.position&&(n=t.id,d=c),e.setEdge(n,d,{arrowhead:"none",arrowType:"",style:T,labelStyle:"",classes:g,arrowheadStyle:S,labelpos:"c",labelType:k,thickness:D})}else e.setNode(c,i)}t&&"root"!==t.id&&(r.l.trace("Setting node ",c," to be child of its parent ",t.id),e.setParent(c,t.id)),s.doc&&(r.l.trace("Adding nodes children "),C(e,s,s.doc,a,i,!n))},C=(e,t,s,a,i,n)=>{r.l.trace("items",s),s.forEach((s=>{switch(s.stmt){case o.b:case o.D:B(e,t,s,a,i,n);break;case o.S:{B(e,t,s.state1,a,i,n),B(e,t,s.state2,a,i,n);const o={id:"edge"+_,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:T,labelStyle:"",label:r.e.sanitizeText(s.description,(0,r.c)()),arrowheadStyle:S,labelpos:"c",labelType:k,thickness:D,classes:b};e.setEdge(s.state1.id,s.state2.id,o,_),_++}}}))},E=(e,t=o.c)=>{let s=t;if(e.doc)for(let o=0;o<e.doc.length;o++){const t=e.doc[o];"dir"===t.stmt&&(s=t.value)}return s},R={setConf:function(e){const t=Object.keys(e);for(const s of t)e[s]},getClasses:function(e,t){return t.db.extract(t.db.getRootDocV2()),t.db.getClasses()},draw:async function(e,t,s,o){r.l.info("Drawing state diagram (v2)",t),A={},o.db.getDirection();const{securityLevel:l,state:p}=(0,r.c)(),b=p.nodeSpacing||50,g=p.rankSpacing||50;r.l.info(o.db.getRootDocV2()),o.db.extract(o.db.getRootDocV2()),r.l.info(o.db.getRootDocV2());const h=o.db.getStates(),u=new a.k({multigraph:!0,compound:!0}).setGraph({rankdir:E(o.db.getRootDocV2()),nodesep:b,ranksep:g,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));let y;B(u,void 0,o.db.getRootDocV2(),h,o.db,!0),"sandbox"===l&&(y=(0,i.Ys)("#i"+t));const w="sandbox"===l?(0,i.Ys)(y.nodes()[0].contentDocument.body):(0,i.Ys)("body"),f=w.select(`[id="${t}"]`),x=w.select("#"+t+" g");await(0,n.r)(x,u,["barb"],c,t);r.u.insertTitle(f,"statediagramTitleText",p.titleTopMargin,o.db.getDiagramTitle());const $=f.node().getBBox(),m=$.width+16,T=$.height+16;f.attr("class",c);const S=f.node().getBBox();(0,r.i)(f,T,m,p.useMaxWidth);const k=`${S.x-8} ${S.y-8} ${m} ${T}`;r.l.debug(`viewBox ${k}`),f.attr("viewBox",k);const D=document.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const a of D){const e=a.getBBox(),t=document.createElementNS("http://www.w3.org/2000/svg",d);t.setAttribute("rx",0),t.setAttribute("ry",0),t.setAttribute("width",e.width),t.setAttribute("height",e.height),a.insertBefore(t,a.firstChild)}}},V={parser:o.p,db:o.d,renderer:R,styles:o.s,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,o.d.clear()}}}}]);