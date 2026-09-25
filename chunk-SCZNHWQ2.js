import{A as Le,C as Ke,D as ce,E as je,H as Re,f as z,g as he,h as Z,j as He,k as Oe,l as ge,m as ve,n as D,o as Q,t as Ve,u as B,v as H,w as u,x as k,z as re}from"./chunk-D2WJUEMI.js";import{$ as y,Aa as Ee,B as T,Ba as ue,D as l,Da as d,Fa as me,Ga as _,Ha as fe,Ia as M,J as C,K as W,Ka as Fe,O as E,P as x,Pa as ae,Q as O,Qa as Se,R as s,Ra as Ie,S as h,T as De,Ta as Pe,U as g,V as X,X as F,Y as S,Z as p,_ as v,_a as Be,a as A,aa as L,ab as $e,b as R,da as b,ea as $,f as be,fa as we,ga as q,h as ee,ha as r,ia as K,j as U,ja as I,k as G,ka as ne,l as N,la as ie,m as c,ma as Ae,o as Ce,oa as ke,p as xe,pa as m,q as f,qa as j,ra as le,sa as pe,ta as Me,w as te,xa as P,y as Te,ya as Ne,za as oe}from"./chunk-6T7XRTZT.js";var Ue=`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        font-size: dt('accordion.header.font.size');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-accordioncontent-wrapper {
        min-height: 0;
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`;var Ge={name:"chevron-down",meta:{tags:["chevron-down","down","fall","decrease","lower"]},svg:{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 20 20",fill:"none"},nodes:[["path",{d:"M14.4697 6.96973C14.7626 6.67684 15.2374 6.67684 15.5303 6.96973C15.8232 7.26262 15.8232 7.73738 15.5303 8.03028L10.5303 13.0303C10.2374 13.3232 9.76262 13.3232 9.46972 13.0303L4.46972 8.03028C4.17683 7.73738 4.17683 7.26262 4.46972 6.96973C4.76262 6.67684 5.23738 6.67684 5.53027 6.96973L10 11.4395L14.4697 6.96973Z",fill:"currentColor",key:"a1s1p6"}]]};var dt=(t,o)=>o[1].key||t;function st(t,o){if(t&1&&(f(),b(0,"path")),t&2){let e=r().$implicit;s("d",e[1].d)("fill",e[1].fill)("fill-opacity",e[1].fillOpacity)("fill-rule",e[1].fillRule)("clip-rule",e[1].clipRule)("stroke",e[1].stroke)("stroke-width",e[1].strokeWidth)("stroke-opacity",e[1].strokeOpacity)("opacity",e[1].opacity)}}function lt(t,o){if(t&1&&(f(),b(0,"circle")),t&2){let e=r().$implicit;s("cx",e[1].cx)("cy",e[1].cy)("r",e[1].r)("fill",e[1].fill)("fill-opacity",e[1].fillOpacity)("opacity",e[1].opacity)}}function pt(t,o){if(t&1&&(f(),b(0,"rect")),t&2){let e=r().$implicit;s("x",e[1].x)("y",e[1].y)("width",e[1].width)("height",e[1].height)("rx",e[1].rx)("ry",e[1].ry)("fill",e[1].fill)("fill-opacity",e[1].fillOpacity)("opacity",e[1].opacity)}}function ut(t,o){if(t&1&&(f(),b(0,"line")),t&2){let e=r().$implicit;s("x1",e[1].x1)("y1",e[1].y1)("x2",e[1].x2)("y2",e[1].y2)("stroke",e[1].stroke)("stroke-opacity",e[1].strokeOpacity)("opacity",e[1].opacity)}}function mt(t,o){if(t&1&&(f(),b(0,"polyline")),t&2){let e=r().$implicit;s("points",e[1].points)("fill",e[1].fill)("fill-opacity",e[1].fillOpacity)("opacity",e[1].opacity)}}function ft(t,o){if(t&1&&(f(),b(0,"polygon")),t&2){let e=r().$implicit;s("points",e[1].points)("fill",e[1].fill)("fill-opacity",e[1].fillOpacity)("opacity",e[1].opacity)}}function ht(t,o){if(t&1&&(f(),b(0,"ellipse")),t&2){let e=r().$implicit;s("cx",e[1].cx)("cy",e[1].cy)("rx",e[1].rx)("ry",e[1].ry)("fill",e[1].fill)("fill-opacity",e[1].fillOpacity)("opacity",e[1].opacity)}}function gt(t,o){if(t&1&&h(0,st,1,9,":svg:path")(1,lt,1,6,":svg:circle")(2,pt,1,9,":svg:rect")(3,ut,1,7,":svg:line")(4,mt,1,4,":svg:polyline")(5,ft,1,4,":svg:polygon")(6,ht,1,7,":svg:ellipse"),t&2){let e,i=o.$implicit;g((e=i[0])==="path"?0:e==="circle"?1:e==="rect"?2:e==="line"?3:e==="polyline"?4:e==="polygon"?5:e==="ellipse"?6:-1)}}var We=(()=>{class t extends ce{constructor(){super(),this._icon=Ge}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["svg","data-p-icon","chevron-down"]],features:[x],decls:2,vars:0,template:function(i,n){i&1&&F(0,gt,7,1,null,null,dt),i&2&&S(n.iconNodes())},encapsulation:2,changeDetection:1})}return t})();var ze={name:"chevron-up",meta:{tags:["chevron-up","up","increase","rise","elevate"]},svg:{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 20 20",fill:"none"},nodes:[["path",{d:"M9.52637 6.91797C9.82095 6.67766 10.2557 6.69513 10.5303 6.96973L15.5303 11.9697C15.8232 12.2626 15.8232 12.7374 15.5303 13.0303C15.2374 13.3232 14.7626 13.3232 14.4697 13.0303L10 8.56055L5.53028 13.0303C5.23738 13.3232 4.76262 13.3232 4.46973 13.0303C4.17684 12.7374 4.17684 12.2626 4.46973 11.9697L9.46973 6.96973L9.52637 6.91797Z",fill:"currentColor",key:"ygb8i5"}]]};var vt=(t,o)=>o[1].key||t;function yt(t,o){if(t&1&&(f(),b(0,"path")),t&2){let e=r().$implicit;s("d",e[1].d)("fill",e[1].fill)("fill-opacity",e[1].fillOpacity)("fill-rule",e[1].fillRule)("clip-rule",e[1].clipRule)("stroke",e[1].stroke)("stroke-width",e[1].strokeWidth)("stroke-opacity",e[1].strokeOpacity)("opacity",e[1].opacity)}}function _t(t,o){if(t&1&&(f(),b(0,"circle")),t&2){let e=r().$implicit;s("cx",e[1].cx)("cy",e[1].cy)("r",e[1].r)("fill",e[1].fill)("fill-opacity",e[1].fillOpacity)("opacity",e[1].opacity)}}function bt(t,o){if(t&1&&(f(),b(0,"rect")),t&2){let e=r().$implicit;s("x",e[1].x)("y",e[1].y)("width",e[1].width)("height",e[1].height)("rx",e[1].rx)("ry",e[1].ry)("fill",e[1].fill)("fill-opacity",e[1].fillOpacity)("opacity",e[1].opacity)}}function Ct(t,o){if(t&1&&(f(),b(0,"line")),t&2){let e=r().$implicit;s("x1",e[1].x1)("y1",e[1].y1)("x2",e[1].x2)("y2",e[1].y2)("stroke",e[1].stroke)("stroke-opacity",e[1].strokeOpacity)("opacity",e[1].opacity)}}function xt(t,o){if(t&1&&(f(),b(0,"polyline")),t&2){let e=r().$implicit;s("points",e[1].points)("fill",e[1].fill)("fill-opacity",e[1].fillOpacity)("opacity",e[1].opacity)}}function Tt(t,o){if(t&1&&(f(),b(0,"polygon")),t&2){let e=r().$implicit;s("points",e[1].points)("fill",e[1].fill)("fill-opacity",e[1].fillOpacity)("opacity",e[1].opacity)}}function Dt(t,o){if(t&1&&(f(),b(0,"ellipse")),t&2){let e=r().$implicit;s("cx",e[1].cx)("cy",e[1].cy)("rx",e[1].rx)("ry",e[1].ry)("fill",e[1].fill)("fill-opacity",e[1].fillOpacity)("opacity",e[1].opacity)}}function wt(t,o){if(t&1&&h(0,yt,1,9,":svg:path")(1,_t,1,6,":svg:circle")(2,bt,1,9,":svg:rect")(3,Ct,1,7,":svg:line")(4,xt,1,4,":svg:polyline")(5,Tt,1,4,":svg:polygon")(6,Dt,1,7,":svg:ellipse"),t&2){let e,i=o.$implicit;g((e=i[0])==="path"?0:e==="circle"?1:e==="rect"?2:e==="line"?3:e==="polyline"?4:e==="polygon"?5:e==="ellipse"?6:-1)}}var Qe=(()=>{class t extends ce{constructor(){super(),this._icon=ze}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["svg","data-p-icon","chevron-up"]],features:[x],decls:2,vars:0,template:function(i,n){i&1&&F(0,wt,7,1,null,null,vt),i&2&&S(n.iconNodes())},encapsulation:2,changeDetection:1})}return t})();var se=["*"],At=["toggleicon"];function kt(t,o){t&1&&$(0)}function Mt(t,o){if(t&1&&O(0,kt,1,0,"ng-container",0),t&2){let e=r();p("ngTemplateOutlet",e.toggleicon())("ngTemplateOutletContext",e.toggleIconContext())}}function Nt(t,o){if(t&1&&L(0,"span",3),t&2){let e=r(3);m(e.cn(e.cx("toggleicon"),e.pcAccordion.collapseIcon())),p("pBind",e.ptm("toggleicon")),s("aria-hidden",!0)}}function Et(t,o){if(t&1&&(f(),L(0,"svg",4)),t&2){let e=r(3);m(e.cx("toggleicon")),p("pBind",e.ptm("toggleicon")),s("aria-hidden",!0)}}function Ft(t,o){if(t&1&&h(0,Nt,1,4,"span",1)(1,Et,1,4,":svg:svg",2),t&2){let e=r(2);g(e.pcAccordion.collapseIcon()?0:1)}}function St(t,o){if(t&1&&L(0,"span",3),t&2){let e=r(3);m(e.cn(e.cx("toggleicon"),e.pcAccordion.expandIcon())),p("pBind",e.ptm("toggleicon")),s("aria-hidden",!0)}}function It(t,o){if(t&1&&(f(),L(0,"svg",5)),t&2){let e=r(3);p("pBind",e.ptm("toggleicon")),s("aria-hidden",!0)}}function Pt(t,o){if(t&1&&h(0,St,1,4,"span",1)(1,It,1,2,":svg:svg",5),t&2){let e=r(2);g(e.pcAccordion.expandIcon()?0:1)}}function Bt(t,o){if(t&1&&h(0,Ft,2,1)(1,Pt,2,1),t&2){let e=r();g(e.active()?0:1)}}var Y=new N("ACCORDION_INSTANCE"),de=new N("ACCORDION_PANEL_INSTANCE"),Xe=new N("ACCORDION_HEADER_INSTANCE"),qe=new N("ACCORDION_CONTENT_INSTANCE"),Ht=`
${Ue}

/* For PrimeNG */
.p-accordionheader-toggle-icon.icon-start {
    order: -1;
}

.p-accordionheader:has(.p-accordionheader-toggle-icon.icon-start) {
    justify-content: flex-start;
    gap: dt('accordion.header.padding');
}

.p-accordionheader.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-accordioncontent .p-motion {
    display: grid;
    grid-template-rows: 1fr;
}
`,Ot={root:"p-accordion p-component",panel:({instance:t})=>["p-accordionpanel",{"p-accordionpanel-active":t.active(),"p-disabled":t.disabled()}],header:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon",contentContainer:"p-accordioncontent",contentWrapper:"p-accordioncontent-wrapper",content:"p-accordioncontent-content"},V=(()=>{class t extends Q{name="accordion";style=Ht;classes=Ot;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=U({token:t,factory:t.\u0275fac})}return t})();var $t=(()=>{class t extends H{$pcAccordionContent=c(qe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(u,{self:!0});componentName="AccordionContent";pcAccordion=c(Y);pcAccordionPanel=c(de);active=d(()=>this.pcAccordionPanel.active());ariaLabelledby=d(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);id=d(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);_componentStyle=c(V);ptParams=d(()=>({context:this.active()}));computedMotionOptions=d(()=>A(A({},this.ptm("motion",this.ptParams())),this.pcAccordion.computedMotionOptions()));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=C({type:t,selectors:[["p-accordion-content"],["p-accordioncontent"]],hostVars:6,hostBindings:function(i,n){i&2&&(s("id",n.id())("role","region")("data-p-active",n.active())("aria-labelledby",n.ariaLabelledby()),m(n.cx("contentContainer")))},features:[P([V,{provide:qe,useExisting:t},{provide:B,useExisting:t}]),E([u]),x],ngContentSelectors:se,decls:4,vars:10,consts:[["name","p-collapsible","hideStrategy","visibility",3,"visible","mountOnEnter","unmountOnLeave","options"],[3,"pBind"]],template:function(i,n){i&1&&(K(),v(0,"p-motion",0)(1,"div",1)(2,"div",1),I(3),y()()()),i&2&&(p("visible",n.active())("mountOnEnter",!1)("unmountOnLeave",!1)("options",n.computedMotionOptions()),l(),m(n.cx("contentWrapper")),p("pBind",n.ptm("contentWrapper",n.ptParams())),l(),m(n.cx("content")),p("pBind",n.ptm("content",n.ptParams())))},dependencies:[k,u,Ke,Le],encapsulation:2})}return t})(),Vt=(()=>{class t extends H{$pcAccordionHeader=c(Xe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(u,{self:!0});componentName="AccordionHeader";pcAccordion=c(Y);pcAccordionPanel=c(de);id=d(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);active=d(()=>this.pcAccordionPanel.active());disabled=d(()=>this.pcAccordionPanel.disabled());ariaControls=d(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);hostTabindex=d(()=>this.disabled()?"-1":"0");toggleicon=M("toggleicon",{descendants:!1});toggleIconContext=d(()=>({active:this.active()}));_componentStyle=c(V);dataP=d(()=>this.cn({active:this.active()}));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onClick(e){if(this.disabled())return;let i=this.active();this.changeActiveValue();let n=this.active(),a=this.pcAccordionPanel.value();!i&&n?this.pcAccordion.onOpen.emit({originalEvent:e,index:a}):i&&!n&&this.pcAccordion.onClose.emit({originalEvent:e,index:a})}onFocus(){!this.disabled()&&this.pcAccordion.selectOnFocus()&&this.changeActiveValue()}onKeydown(e){switch(e.code){case"ArrowDown":this.arrowDownKey(e);break;case"ArrowUp":this.arrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"Space":case"NumpadEnter":this.onEnterKey(e);break;default:break}}changeActiveValue(){this.pcAccordion.updateValue(this.pcAccordionPanel.value())}findPanel(e){return e?.closest('[data-pc-name="accordionpanel"]')}findHeader(e){return e?z(e,'[data-pc-name="accordionheader"]'):null}findNextPanel(e,i=!1){let n=i?e:e?.nextElementSibling;return n?Z(n,"data-p-disabled")?this.findNextPanel(n):this.findHeader(n):null}findPrevPanel(e,i=!1){let n=i?e:e?.previousElementSibling;return n?Z(n,"data-p-disabled")?this.findPrevPanel(n):this.findHeader(n):null}findFirstPanel(){return this.findNextPanel(this.pcAccordion.el.nativeElement.firstElementChild,!0)}findLastPanel(){return this.findPrevPanel(this.pcAccordion.el.nativeElement.lastElementChild,!0)}changeFocusedPanel(e,i){i&&he(i)}arrowDownKey(e){let i=this.findNextPanel(this.findPanel(e.currentTarget));i?this.changeFocusedPanel(e,i):this.onHomeKey(e),e.preventDefault()}arrowUpKey(e){let i=this.findPrevPanel(this.findPanel(e.currentTarget));i?this.changeFocusedPanel(e,i):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let i=this.findFirstPanel();this.changeFocusedPanel(e,i),e.preventDefault()}onEndKey(e){let i=this.findLastPanel();this.changeFocusedPanel(e,i),e.preventDefault()}onEnterKey(e){this.disabled()||this.changeActiveValue(),e.preventDefault()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=C({type:t,selectors:[["p-accordion-header"],["p-accordionheader"]],contentQueries:function(i,n,a){i&1&&ne(a,n.toggleicon,At,4),i&2&&ie()},hostVars:13,hostBindings:function(i,n){i&1&&q("click",function(w){return n.onClick(w)})("focus",function(){return n.onFocus()})("keydown",function(w){return n.onKeydown(w)}),i&2&&(s("id",n.id())("aria-expanded",n.active())("aria-controls",n.ariaControls())("aria-disabled",n.disabled())("role","button")("tabindex",n.hostTabindex())("data-p-active",n.active())("data-p-disabled",n.disabled())("data-p",n.dataP()),m(n.cx("header")),Ae("user-select","none"))},features:[P([V,{provide:Xe,useExisting:t},{provide:B,useExisting:t}]),E([je,u]),x],ngContentSelectors:se,decls:3,vars:1,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","pBind"],["data-p-icon","chevron-up",3,"class","pBind"],[3,"pBind"],["data-p-icon","chevron-up",3,"pBind"],["data-p-icon","chevron-down",3,"pBind"]],template:function(i,n){i&1&&(K(),I(0),h(1,Mt,1,2,"ng-container")(2,Bt,2,1)),i&2&&(l(),g(n.toggleicon()?1:2))},dependencies:[ae,We,Qe,k,u],encapsulation:2})}return t})(),Lt=(()=>{class t extends H{$pcAccordionPanel=c(de,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(u,{self:!0});componentName="AccordionPanel";pcAccordion=c(Y);value=fe(void 0);disabled=_(!1,{transform:e=>re(e)});active=d(()=>this.pcAccordion.multiple()?this.valueEquals(this.pcAccordion.value(),this.value()):this.pcAccordion.value()===this.value());_componentStyle=c(V);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}valueEquals(e,i){return Array.isArray(e)&&(typeof i=="string"||typeof i=="number")?e.includes(i):e===i}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=C({type:t,selectors:[["p-accordion-panel"],["p-accordionpanel"]],hostVars:4,hostBindings:function(i,n){i&2&&(s("data-p-disabled",n.disabled())("data-p-active",n.active()),m(n.cx("panel")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[P([V,{provide:de,useExisting:t},{provide:B,useExisting:t}]),E([u]),x],ngContentSelectors:se,decls:1,vars:0,template:function(i,n){i&1&&(K(),I(0))},dependencies:[k],encapsulation:2})}return t})(),Kt=(()=>{class t extends H{componentName="Accordion";$pcAccordion=c(Y,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(u,{self:!0});value=fe(void 0);multiple=_(!1,{transform:e=>re(e)});expandIcon=_();collapseIcon=_();selectOnFocus=_(!1,{transform:e=>re(e)});motionOptions=_(void 0);computedMotionOptions=d(()=>A(A({},this.ptm("motion")),this.motionOptions()));onClose=me();onOpen=me();id=te(He("pn_id_"));_componentStyle=c(V);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onKeydown(e){switch(e.code){case"ArrowDown":this.onTabArrowDownKey(e);break;case"ArrowUp":this.onTabArrowUpKey(e);break;case"Home":e.shiftKey||this.onTabHomeKey(e);break;case"End":e.shiftKey||this.onTabEndKey(e);break}}onTabArrowDownKey(e){let i=this.findNextHeaderAction(e.target?.parentElement??null);i?this.changeFocusedTab(i):this.onTabHomeKey(e),e.preventDefault()}onTabArrowUpKey(e){let i=this.findPrevHeaderAction(e.target?.parentElement??null);i?this.changeFocusedTab(i):this.onTabEndKey(e),e.preventDefault()}onTabHomeKey(e){let i=this.findFirstHeaderAction();this.changeFocusedTab(i),e.preventDefault()}changeFocusedTab(e){e&&he(e)}findNextHeaderAction(e,i=!1){let n=i?e:e?.nextElementSibling,a=n?z(n,'[data-pc-section="accordionheader"]'):null;return a?Z(a,"data-p-disabled")?this.findNextHeaderAction(a.parentElement):z(a.parentElement,'[data-pc-section="accordionheader"]'):null}findPrevHeaderAction(e,i=!1){let n=i?e:e?.previousElementSibling,a=n?z(n,'[data-pc-section="accordionheader"]'):null;return a?Z(a,"data-p-disabled")?this.findPrevHeaderAction(a.parentElement):z(a.parentElement,'[data-pc-section="accordionheader"]'):null}findFirstHeaderAction(){let e=this.el.nativeElement.firstElementChild;return this.findNextHeaderAction(e,!0)}findLastHeaderAction(){let e=this.el.nativeElement.lastElementChild;return this.findPrevHeaderAction(e,!0)}onTabEndKey(e){let i=this.findLastHeaderAction();this.changeFocusedTab(i),e.preventDefault()}getBlockableElement(){return this.el.nativeElement.children[0]}updateValue(e){let i=this.value();if(this.multiple()){let n=Array.isArray(i)?[...i]:[],a=n.indexOf(e);a!==-1?n.splice(a,1):n.push(e),this.value.set(n)}else i===e?this.value.set(void 0):this.value.set(e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=C({type:t,selectors:[["p-accordion"]],hostVars:2,hostBindings:function(i,n){i&1&&q("keydown",function(w){return n.onKeydown(w)}),i&2&&m(n.cx("root"))},inputs:{value:[1,"value"],multiple:[1,"multiple"],expandIcon:[1,"expandIcon"],collapseIcon:[1,"collapseIcon"],selectOnFocus:[1,"selectOnFocus"],motionOptions:[1,"motionOptions"]},outputs:{value:"valueChange",onClose:"onClose",onOpen:"onOpen"},features:[P([V,{provide:Y,useExisting:t},{provide:B,useExisting:t}]),E([u]),x],ngContentSelectors:se,decls:1,vars:0,template:function(i,n){i&1&&(K(),I(0))},dependencies:[D,k],encapsulation:2})}return t})(),Je=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=W({type:t});static \u0275inj=G({imports:[Kt,D,Lt,Vt,$t,k,D,k]})}return t})();var Ye=`
    .p-card {
        display: block;
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
        font-size: dt('card.subtitle.font.size');
        font-weight: dt('card.subtitle.font.weight');
    }
`;var jt=["header"],Rt=["title"],Ut=["subtitle"],Gt=["content"],Wt=["footer"],zt=["*",[["p-header"]],[["p-footer"]]],Qt=["*","p-header","p-footer"];function Xt(t,o){t&1&&$(0)}function qt(t,o){if(t&1&&(v(0,"div",1),I(1,1),O(2,Xt,1,0,"ng-container",2),y()),t&2){let e=r();m(e.cx("header")),p("pBind",e.ptm("header")),l(2),p("ngTemplateOutlet",e.headerTemplate())}}function Zt(t,o){if(t&1&&j(0),t&2){let e=r(2);pe(" ",e.header()," ")}}function Jt(t,o){t&1&&$(0)}function Yt(t,o){if(t&1&&(v(0,"div",1),h(1,Zt,1,1),O(2,Jt,1,0,"ng-container",2),y()),t&2){let e=r();m(e.cx("title")),p("pBind",e.ptm("title")),l(),g(e.showHeaderText()?1:-1),l(),p("ngTemplateOutlet",e.titleTemplate())}}function en(t,o){if(t&1&&j(0),t&2){let e=r(2);pe(" ",e.subheader()," ")}}function tn(t,o){t&1&&$(0)}function nn(t,o){if(t&1&&(v(0,"div",1),h(1,en,1,1),O(2,tn,1,0,"ng-container",2),y()),t&2){let e=r();m(e.cx("subtitle")),p("pBind",e.ptm("subtitle")),l(),g(e.showSubheaderText()?1:-1),l(),p("ngTemplateOutlet",e.subtitleTemplate())}}function on(t,o){t&1&&$(0)}function an(t,o){t&1&&$(0)}function rn(t,o){if(t&1&&(v(0,"div",1),I(1,2),O(2,an,1,0,"ng-container",2),y()),t&2){let e=r();m(e.cx("footer")),p("pBind",e.ptm("footer")),l(2),p("ngTemplateOutlet",e.footerTemplate())}}var cn={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},et=(()=>{class t extends Q{name="card";style=Ye;classes=cn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=U({token:t,factory:t.\u0275fac})}return t})();var tt=new N("CARD_INSTANCE"),ye=(()=>{class t extends H{componentName="Card";$pcCard=c(tt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(u,{self:!0});_componentStyle=c(et);header=_();subheader=_();headerFacet=M(ge,{descendants:!1});footerFacet=M(ve,{descendants:!1});headerTemplate=M("header",{descendants:!1});titleTemplate=M("title",{descendants:!1});subtitleTemplate=M("subtitle",{descendants:!1});contentTemplate=M("content",{descendants:!1});footerTemplate=M("footer",{descendants:!1});hasHeader=d(()=>!!(this.headerFacet()||this.headerTemplate()));hasTitle=d(()=>!!(this.header()||this.titleTemplate()));hasSubtitle=d(()=>!!(this.subheader()||this.subtitleTemplate()));hasFooter=d(()=>!!(this.footerFacet()||this.footerTemplate()));showHeaderText=d(()=>this.header()&&!this.titleTemplate());showSubheaderText=d(()=>this.subheader()&&!this.subtitleTemplate());onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}getBlockableElement(){return this.el.nativeElement}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=C({type:t,selectors:[["p-card"]],contentQueries:function(i,n,a){i&1&&ne(a,n.headerFacet,ge,4)(a,n.footerFacet,ve,4)(a,n.headerTemplate,jt,4)(a,n.titleTemplate,Rt,4)(a,n.subtitleTemplate,Ut,4)(a,n.contentTemplate,Gt,4)(a,n.footerTemplate,Wt,4),i&2&&ie(7)},hostVars:2,hostBindings:function(i,n){i&2&&m(n.cx("root"))},inputs:{header:[1,"header"],subheader:[1,"subheader"]},features:[P([et,{provide:tt,useExisting:t},{provide:B,useExisting:t}]),E([u]),x],ngContentSelectors:Qt,decls:8,vars:11,consts:[[3,"pBind","class"],[3,"pBind"],[4,"ngTemplateOutlet"]],template:function(i,n){i&1&&(K(zt),h(0,qt,3,4,"div",0),v(1,"div",1),h(2,Yt,3,5,"div",0),h(3,nn,3,5,"div",0),v(4,"div",1),I(5),O(6,on,1,0,"ng-container",2),y(),h(7,rn,3,4,"div",0),y()),i&2&&(g(n.hasHeader()?0:-1),l(),m(n.cx("body")),p("pBind",n.ptm("body")),l(),g(n.hasTitle()?2:-1),l(),g(n.hasSubtitle()?3:-1),l(),m(n.cx("content")),p("pBind",n.ptm("content")),l(2),p("ngTemplateOutlet",n.contentTemplate()),l(),g(n.hasFooter()?7:-1))},dependencies:[ae,D,k,u],encapsulation:2})}return t})(),nt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=W({type:t});static \u0275inj=G({imports:[ye,D,k,D,k]})}return t})();var it=`
    .p-skeleton {
        display: block;
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`;var sn={root:{position:"relative"}},ln={root:({instance:t})=>["p-skeleton p-component",{"p-skeleton-circle":t.shape()==="circle","p-skeleton-animation-none":t.animation()==="none"}]},ot=(()=>{class t extends Q{name="skeleton";style=it;classes=ln;inlineStyles=sn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=U({token:t,factory:t.\u0275fac})}return t})();var at=new N("SKELETON_INSTANCE"),_e=(()=>{class t extends H{componentName="Skeleton";$pcSkeleton=c(at,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(u,{self:!0});shape=_("rectangle");animation=_("wave");borderRadius=_();size=_();width=_("100%");height=_("1rem");_componentStyle=c(ot);containerStyle=d(()=>{let e=this._componentStyle?.inlineStyles.root,i=this.size(),n=this.width(),a=this.height(),w=this.borderRadius();if(!this.$unstyled())return i?R(A({},e),{width:i,height:i,borderRadius:w}):R(A({},e),{width:n,height:a,borderRadius:w})});dataP=d(()=>{let e=this.shape();return this.cn({[e]:e})});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=C({type:t,selectors:[["p-skeleton"]],hostVars:6,hostBindings:function(i,n){i&2&&(s("aria-hidden",!0)("data-p",n.dataP()),ke(n.containerStyle()),m(n.cx("root")))},inputs:{shape:[1,"shape"],animation:[1,"animation"],borderRadius:[1,"borderRadius"],size:[1,"size"],width:[1,"width"],height:[1,"height"]},features:[P([ot,{provide:at,useExisting:t},{provide:B,useExisting:t}]),E([u]),x],decls:0,vars:0,template:function(i,n){},dependencies:[D],encapsulation:2})}return t})(),rt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=W({type:t});static \u0275inj=G({imports:[_e,D,D]})}return t})();var un=()=>[1,2,3,4,5,6,7];function mn(t,o){}function fn(t,o){if(t&1&&F(0,mn,0,0,null,null,X),t&2){let e=o.$implicit;S(e.sets)}}function hn(t,o){if(t&1){let e=we();v(0,"p-card",3),oe(1,"date"),q("click",function(){let n=Ce(e).$implicit,a=r(2);return xe(a.goToDetail(n.id))}),v(2,"span",4),j(3),y(),v(4,"div",5)(5,"p"),j(6),y(),v(7,"p"),j(8),oe(9,"number"),y()(),F(10,fn,2,0,null,null,X),y()}if(t&2){let e=o.$implicit;p("classList","cursor-pointer")("header",`${e.title}`)("subheader",`${ue(1,7,e.start_time,"dd/mm/yyyy")}`),l(3),le(e.description),l(3),Me("",e.duration.hours,"h ",e.duration.minutes,"min"),l(2),le(ue(9,10,e.volume,"1.0")),l(2),S(e.exercises)}}function gn(t,o){t&1&&(v(0,"div",1),F(1,hn,12,13,"p-card",2,X),y()),t&2&&(l(),S(o.workouts))}function vn(t,o){t&1&&(v(0,"div",6),L(1,"p-skeleton",7),y())}function yn(t,o){t&1&&F(0,vn,2,0,"div",6,X),t&2&&S(Ne(0,un))}var ct=class t{_cdr=c(Fe);_httpService=c($e);_messageService=c(Oe);_router=c(Be);totalPerPage=10;currentPage=1;totalPages;workouts$;hasApiKey=d(()=>!!this._httpService.apiKey());isLoading=te(!1);constructor(){Te(()=>{this.hasApiKey()&&(this.currentPage=1,this.workouts$=this._workouts$)})}ngAfterViewInit(){this.workouts$=this._workouts$,this._cdr.detectChanges()}goToPage(o){o>(this.totalPages?.length||1)||o<1||o===this.currentPage||(this.currentPage=o,this.workouts$=this._workouts$)}goToDetail(o){if(!o){this._messageService.add({severity:"error",summary:"Erro",detail:"ID do treino em branco."});return}this._router.navigate(["/workout",o])}get _workouts$(){if(!this._httpService.apiKey()){this._messageService.add({severity:"error",summary:"Erro",detail:"A chave de API n\xE3o foi fornecida. Por favor, insira uma chave de API v\xE1lida."});return}return this.isLoading.set(!0),this._cdr.detectChanges(),this._httpService.get("https://api.hevyapp.com/v1/workouts",{headers:{"Content-Type":"application/json","api-key":this._httpService.apiKey()},params:{page:this.currentPage,pageSize:this.totalPerPage}}).pipe(ee(o=>console.log(o)),ee(()=>{this.isLoading.set(!1),this._cdr.detectChanges()}),ee(o=>this.totalPages=Array(o.page_count).fill(o.page_count).map((e,i)=>i+1)),be(o=>R(A({},o),{workouts:o.workouts.map(e=>R(A({},e),{duration:{hours:Math.round((new Date(e.end_time).getTime()-new Date(e.start_time).getTime())/(1e3*60*60)),minutes:Math.round((new Date(e.end_time).getTime()-new Date(e.start_time).getTime())/(1e3*60))%60},volume:e.exercises.reduce((i,n)=>i+n.sets.reduce((a,w)=>a+(w.weight_kg??0)*(w.reps??0),0),0)}))})))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-workout-list"]],decls:4,vars:3,consts:[[1,"container","mx-auto","my-8","px-2"],[1,"flex","flex-col","gap-2"],[3,"classList","header","subheader"],[3,"click","classList","header","subheader"],[1,"text-gray-200"],[1,"flex","gap-2"],[1,"p-1","rounded-lg","bg-surface-50","dark:bg-surface-800/75"],["width","100%","height","10rem"]],template:function(e,i){if(e&1&&(v(0,"main",0),h(1,gn,3,0,"div",1),oe(2,"async"),De(3,yn,2,1),y()),e&2){let n;l(),g((n=Ee(2,1,i.workouts$))?1:3,n)}},dependencies:[Ve,Re,rt,_e,Je,nt,ye,Se,Ie,Pe],encapsulation:2})};export{ct as WorkoutList};
