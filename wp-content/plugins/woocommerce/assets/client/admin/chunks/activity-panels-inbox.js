"use strict";(self.webpackChunk_wcAdmin_webpackJsonp=self.webpackChunk_wcAdmin_webpackJsonp||[]).push([[8851],{79316:function(e,t,o){o.d(t,{U:function(){return h},e:function(){return N}});var a=o(69307),n=o(83849),s=o.n(n),c=o(59838),r=o(76292),i=o.n(r),l=o(7862),m=o.n(l),d=o(86020),_=o(55609),u=o(92819);class p extends a.Component{render(){const{className:e,hasAction:t,hasDate:o,hasSubtitle:n,lines:c}=this.props,r=s()("woocommerce-activity-card is-loading",e);return(0,a.createElement)("div",{className:r,"aria-hidden":!0},(0,a.createElement)("span",{className:"woocommerce-activity-card__icon"},(0,a.createElement)("span",{className:"is-placeholder"})),(0,a.createElement)("div",{className:"woocommerce-activity-card__header"},(0,a.createElement)("div",{className:"woocommerce-activity-card__title is-placeholder"}),n&&(0,a.createElement)("div",{className:"woocommerce-activity-card__subtitle is-placeholder"}),o&&(0,a.createElement)("div",{className:"woocommerce-activity-card__date"},(0,a.createElement)("span",{className:"is-placeholder"}))),(0,a.createElement)("div",{className:"woocommerce-activity-card__body"},(0,u.range)(c).map((e=>(0,a.createElement)("span",{className:"is-placeholder",key:e})))),t&&(0,a.createElement)("div",{className:"woocommerce-activity-card__actions"},(0,a.createElement)("span",{className:"is-placeholder"})))}}p.propTypes={className:m().string,hasAction:m().bool,hasDate:m().bool,hasSubtitle:m().bool,lines:m().number},p.defaultProps={hasAction:!1,hasDate:!1,hasSubtitle:!1,lines:1};var N=p;class h extends a.Component{getCard(){const{actions:e,className:t,children:o,date:n,icon:c,subtitle:r,title:l,unread:m}=this.props,_=s()("woocommerce-activity-card",t),u=Array.isArray(e)?e:[e],p=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(n)?i().utc(n).fromNow():n;return(0,a.createElement)("section",{className:_},m&&(0,a.createElement)("span",{className:"woocommerce-activity-card__unread"}),c&&(0,a.createElement)("span",{className:"woocommerce-activity-card__icon","aria-hidden":!0},c),l&&(0,a.createElement)("header",{className:"woocommerce-activity-card__header"},(0,a.createElement)(d.H,{className:"woocommerce-activity-card__title"},l),r&&(0,a.createElement)("div",{className:"woocommerce-activity-card__subtitle"},r),p&&(0,a.createElement)("span",{className:"woocommerce-activity-card__date"},p)),o&&(0,a.createElement)(d.Section,{className:"woocommerce-activity-card__body"},o),e&&(0,a.createElement)("footer",{className:"woocommerce-activity-card__actions"},u.map(((e,t)=>(0,a.cloneElement)(e,{key:t})))))}render(){const{onClick:e}=this.props;return e?(0,a.createElement)(_.Button,{className:"woocommerce-activity-card__button",onClick:e},this.getCard()):this.getCard()}}h.propTypes={actions:m().oneOfType([m().arrayOf(m().element),m().element]),onClick:m().func,className:m().string,children:m().node,date:m().string,icon:m().node,subtitle:m().node,title:m().oneOfType([m().string,m().node]),unread:m().bool},h.defaultProps={icon:(0,a.createElement)(c.Z,{size:48}),unread:!1}},72840:function(e,t,o){o.r(t),o.d(t,{InboxPanel:function(){return c}});var a=o(69307),n=o(71704),s=o(36285);const c=e=>{let{hasAbbreviatedNotifications:t,thingsToDoNextCount:o}=e;return(0,a.createElement)("div",{className:"woocommerce-notification-panels"},t&&(0,a.createElement)(s.vn,{thingsToDoNextCount:o}),(0,a.createElement)(n.Z,{showHeader:!1}))};t.default=c},71704:function(e,t,o){o.d(t,{Z:function(){return f}});var a=o(69307),n=o(65736),s=o(86020),c=o(55609),r=o(67221),i=o(9818),l=o(14599),m=o(16970),d=o(10776),_=o(14812),u=o(76292),p=o.n(u),N=o(79316),h=o(89069),E=o(15635),w=e=>{let{onClose:t}=e;const{createNotice:o}=(0,i.useDispatch)("core/notices"),{batchUpdateNotes:s,removeAllNotes:m}=(0,i.useDispatch)(r.NOTES_STORE_NAME);return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(c.Modal,{title:(0,n.__)("Dismiss all messages","woocommerce"),className:"woocommerce-inbox-dismiss-all-modal",onRequestClose:t},(0,a.createElement)("div",{className:"woocommerce-inbox-dismiss-all-modal__wrapper"},(0,a.createElement)("div",{className:"woocommerce-usage-modal__message"},(0,n.__)("Are you sure? Inbox messages will be dismissed forever.","woocommerce")),(0,a.createElement)("div",{className:"woocommerce-usage-modal__actions"},(0,a.createElement)(c.Button,{onClick:t},(0,n.__)("Cancel","woocommerce")),(0,a.createElement)(c.Button,{isPrimary:!0,onClick:()=>{(async()=>{(0,l.recordEvent)("wcadmin_inbox_action_dismissall",{});try{const e=await m({status:"unactioned"});o("success",(0,n.__)("All messages dismissed","woocommerce"),{actions:[{label:(0,n.__)("Undo","woocommerce"),onClick:()=>{s(e.map((e=>e.id)),{is_deleted:0})}}]})}catch(e){o("error",(0,n.__)("Messages could not be dismissed","woocommerce")),t()}})(),t()}},(0,n.__)("Yes, dismiss all","woocommerce"))))))};const g={page:1,per_page:5,status:"unactioned",type:r.QUERY_DEFAULTS.noteTypes,orderby:"date",order:"desc",_fields:["id","name","title","content","type","status","actions","date_created","date_created_gmt","layout","image","is_deleted","is_read","locale"]},v=["en_US","en_AU","en_CA","en_GB","en_ZA"],b=p()("2022-01-11","YYYY-MM-DD").valueOf(),y=(e,t)=>{(0,l.recordEvent)("inbox_action_click",{note_name:e.name,note_title:e.title,note_content_inner_link:t})};let C=!1;var f=e=>{let{showHeader:t=!0}=e;const[o,u]=(0,a.useState)(g.per_page),[f,k]=(0,a.useState)(!1),[x,S]=(0,a.useState)([]),[A,D]=(0,a.useState)({}),{createNotice:T}=(0,i.useDispatch)("core/notices"),{removeNote:M,updateNote:U,triggerNoteAction:B,invalidateResolutionForStoreSelector:R}=(0,i.useDispatch)(r.NOTES_STORE_NAME),O=(0,E.GG)(),Y=(0,a.useMemo)((()=>({...g,per_page:o})),[o]),{isError:H,notes:F,notesHaveResolved:P,isBatchUpdating:I,unreadNotesCount:Z}=(0,i.useSelect)((e=>{const{getNotes:t,getNotesError:o,isNotesRequesting:a,hasFinishedResolution:n}=e(r.NOTES_STORE_NAME);return{notes:t(Y),unreadNotesCount:t({...g,is_read:!1,per_page:-1}).length,isError:Boolean(o("getNotes",[Y])),isBatchUpdating:a("batchUpdateNotes"),notesHaveResolved:!a("batchUpdateNotes")&&n("getNotes",[Y])}}));(0,a.useEffect)((()=>{P&&F.length<o&&k(!0),P&&F.length&&S(F.map((e=>{const t=p()(e.date_created_gmt,"YYYY-MM-DD").valueOf();return v.includes(e.locale)&&t>=b?{...e,content:(0,h.r7)(e.content,320)}:e})))}),[F,P]);const[z,L]=(0,a.useState)(!1);if(H){const e=(0,n.__)("There was an error getting your inbox. Please try again.","woocommerce"),t=(0,n.__)("Reload","woocommerce"),o=()=>{window.location.reload()};return(0,a.createElement)(s.EmptyContent,{title:e,actionLabel:t,actionURL:null,actionCallback:o})}return P&&!x.length?null:(0,a.createElement)(a.Fragment,null,z&&(0,a.createElement)(w,{onClose:()=>{L(!1)}}),(0,a.createElement)("div",{className:"woocommerce-homepage-notes-wrapper"},!P&&!x.length&&(0,a.createElement)(s.Section,null,(0,a.createElement)(_.InboxNotePlaceholder,{className:"banner message-is-unread"})),(0,a.createElement)(s.Section,null,Boolean(x.length)&&(e=>{let{hasNotes:t,isBatchUpdating:o,notes:r,onDismiss:i,onNoteActionClick:u,onNoteVisible:p,setShowDismissAllModal:h,showHeader:E=!0,loadMoreNotes:w,allNotesFetched:v,notesHaveResolved:b,unreadNotesCount:f}=e;if(o)return;if(!t)return(0,a.createElement)(N.U,{className:"woocommerce-empty-activity-card",title:(0,n.__)("Your inbox is empty","woocommerce"),icon:!1},(0,n.__)("As things begin to happen in your store your inbox will start to fill up. You'll see things like achievements, new feature announcements, extension recommendations and more!","woocommerce"));C||((0,l.recordEvent)("inbox_panel_view",{total:r.length}),C=!0);const k=Object.keys(r).map((e=>r[e]));return(0,a.createElement)(c.Card,{size:"large"},E&&(0,a.createElement)(c.CardHeader,{size:"medium"},(0,a.createElement)("div",{className:"wooocommerce-inbox-card__header"},(0,a.createElement)(_.Text,{size:"20",lineHeight:"28px",variant:"title.small"},(0,n.__)("Inbox","woocommerce")),(0,a.createElement)(s.Badge,{count:f})),(0,a.createElement)(s.EllipsisMenu,{label:(0,n.__)("Inbox Notes Options","woocommerce"),renderContent:e=>{let{onToggle:t}=e;return(0,a.createElement)("div",{className:"woocommerce-inbox-card__section-controls"},(0,a.createElement)(c.Button,{onClick:()=>{h(!0),t()}},(0,n.__)("Dismiss all","woocommerce")))}})),(0,a.createElement)(m.Z,{role:"menu"},k.map((e=>{const{id:t,is_deleted:o}=e;return o?null:(0,a.createElement)(d.Z,{key:t,timeout:500,classNames:"woocommerce-inbox-message"},(0,a.createElement)(_.InboxNoteCard,{key:t,note:e,onDismiss:i,onNoteActionClick:u,onBodyLinkClick:y,onNoteVisible:p}))}))),v?null:b?(0,a.createElement)(c.CardFooter,{className:"wooocommerce-inbox-card__footer",size:"medium"},(0,a.createElement)(c.Button,{isPrimary:!0,onClick:()=>{w()}},k.length>g.per_page?(0,n.__)("Show more","woocommerce"):(0,n.__)("Show older","woocommerce"))):(0,a.createElement)(_.InboxNotePlaceholder,{className:"banner message-is-unread"}))})({loadMoreNotes:()=>{(0,l.recordEvent)("inbox_action_load_more",{quantity_shown:x.length}),u(o+10)},hasNotes:(0,h.kS)(x),isBatchUpdating:I,notes:x,onDismiss:async e=>{(0,l.recordEvent)("inbox_action_dismiss",{note_name:e.name,note_title:e.title,note_name_dismiss_all:!1,note_name_dismiss_confirmation:!0,screen:O});const t=e.id;try{await M(t),R("getNotes"),T("success",(0,n.__)("Message dismissed","woocommerce"),{actions:[{label:(0,n.__)("Undo","woocommerce"),onClick:async()=>{await U(t,{is_deleted:0}),R("getNotes")}}]})}catch(e){T("error",(0,n._n)("Message could not be dismissed","Messages could not be dismissed",1,"woocommerce"))}},onNoteActionClick:(e,t)=>{B(e.id,t.id)},onNoteVisible:e=>{A[e.id]||e.is_read||(D({...A,[e.id]:!0}),setTimeout((()=>{U(e.id,{is_read:!0})}),3e3)),(0,l.recordEvent)("inbox_note_view",{note_content:e.content,note_name:e.name,note_title:e.title,note_type:e.type,screen:O})},setShowDismissAllModal:L,showHeader:t,allNotesFetched:f,notesHaveResolved:P,unreadNotesCount:Z}))))}}}]);