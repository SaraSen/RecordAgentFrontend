(window["webpackJsonpstar-admin-free-react"]=window["webpackJsonpstar-admin-free-react"]||[]).push([[10],{318:function(e,a,t){},339:function(e,a,t){"use strict";t.r(a),t.d(a,"BasicElements",(function(){return m}));var r=t(8),n=t(9),c=t(11),l=t(10),i=t(12),s=t(0),d=t.n(s),o=(t(318),t(319));t(321);var m=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=Object(c.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(i)))).state={startDate:new Date},t.handleChange=function(e){t.setState({startDate:e})},t}return Object(i.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=new o.DiagramEngine;e.installDefaultFactories();var a=new o.DiagramModel,t=new o.DefaultNodeModel("Node 1","rgb(0,192,255)"),r=t.addOutPort("Out");t.setPosition(100,100);var n=new o.DefaultNodeModel("Node 2","rgb(192,255,0)"),c=n.addInPort("In");n.setPosition(400,100);var l=new o.DefaultNodeModel("Node 2","rgb(192,255,0)");l.addInPort("In");l.setPosition(400,200);var i=new o.DefaultNodeModel("Node 2","rgb(0,192,255)");i.addInPort("Out");i.setPosition(400,300);var s=r.link(c);return a.addAll(t,n,l,i,s),e.setDiagramModel(a),d.a.createElement("div",null,d.a.createElement("div",{className:"page-header"},d.a.createElement("h3",{className:"page-title"}," Charts "),d.a.createElement("nav",{"aria-label":"breadcrumb"},d.a.createElement("ol",{className:"breadcrumb"},d.a.createElement("li",{className:"breadcrumb-item"},d.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Charts")),d.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Dataflow Diagram for tasks 001")))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-12 grid-margin stretch-card"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-body"},d.a.createElement(o.DiagramWidget,{className:"srd-demo-canvas",diagramEngine:e}))))))}}]),a}(s.Component);a.default=m}}]);
//# sourceMappingURL=10.ea902f5e.chunk.js.map