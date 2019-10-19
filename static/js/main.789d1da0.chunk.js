(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(33),c=a.n(s),o=(a(76),a(18)),l=a(25),i=(a(77),a(78),a(20)),u=a(21),m=a(23),p=a(22),d=a(24),h=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement(o.b,{className:"navbar-brand",to:"/test-deploy"},"NotesApp"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav  ml-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(o.b,{className:"nav-link",to:"/test-deploy"},"Notes")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/test-deploy/create"},"Create Note")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/test-deploy/user"},"Create User"))))))}}]),t}(n.Component),f=a(3),v=a.n(f),b=a(10),E=a(11),N=a.n(E),g=a(70),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={notes:[]},a.getNotes=Object(b.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://fist-deploy.herokuapp.com/api/notes");case 2:t=e.sent,a.setState({notes:t.data});case 4:case"end":return e.stop()}}),e)}))),a.deleteNote=function(){var e=Object(b.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.delete("https://fist-deploy.herokuapp.com/api/notes/"+t);case 2:return e.next=4,a.getNotes();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getNotes();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},this.state.notes.map((function(t){return r.a.createElement("div",{className:"col-md-4 p-2",key:t._id},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header d-flex justify-content-between"},r.a.createElement("h5",null,t.title),r.a.createElement(o.b,{className:"btn btn-secondary",to:"/test-deploy/edit/"+t._id},"Edit")),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,t.content),r.a.createElement("p",null,t.author),r.a.createElement("p",null,Object(g.a)(t.date))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.deleteNote(t._id)}},"Delete"))))})))}}]),t}(n.Component),k=a(66),j=a(67),w=a.n(j),x=(a(144),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={users:[],userSelected:"",title:"",content:"",date:new Date,editing:!1,_id:""},a.onSubmit=function(){var e=Object(b.a)(v.a.mark((function e(t){var n,r,s,c,o,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=a.state,r=n.title,s=n.content,c=n.date,o=n.userSelected,l={title:r,content:s,date:c,author:o},!a.state.editing){e.next=8;break}return e.next=6,N.a.put("https://fist-deploy.herokuapp.com/api/notes/"+a.state._id,l);case 6:e.next=10;break;case 8:return e.next=10,N.a.post("https://fist-deploy.herokuapp.com/api/notes",l);case 10:window.location.href="/test-deploy";case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){a.setState(Object(k.a)({},e.target.name,e.target.value))},a.onChangeDate=function(e){a.setState({date:e})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(v.a.mark((function e(){var t,a,n,r,s,c,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://fist-deploy.herokuapp.com/api/users");case 2:if(t=e.sent,this.setState({users:t.data.map((function(e){return e.username})),userSelected:t.data[0].username}),!this.props.match.params.id){e.next=11;break}return e.next=7,N.a.get("https://fist-deploy.herokuapp.com/api/notes/"+this.props.match.params.id);case 7:a=e.sent,n=a.data,r=n.title,s=n.author,c=n.date,o=n.content,console.log(a.data),this.setState({editing:!0,title:r,userSelected:s,content:o,date:new Date(c),_id:this.props.match.params.id});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("h4",null,"Create Note"),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{className:"form-control",name:"userSelected",onChange:this.onInputChange,value:this.state.userSelected},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"title",placeholder:"Title",onChange:this.onInputChange,value:this.state.title,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{name:"content",className:"form-control",placeholder:"Content",onChange:this.onInputChange,value:this.state.content,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement(w.a,{className:"form-control",selected:this.state.date,onChange:this.onChangeDate})),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save"))))}}]),t}(n.Component)),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={users:[],username:""},a.getUsers=Object(b.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://fist-deploy.herokuapp.com/api/users");case 2:t=e.sent,a.setState({users:t.data});case 4:case"end":return e.stop()}}),e)}))),a.onChangeUserName=function(e){a.setState({username:e.target.value})},a.onSubmit=function(){var e=Object(b.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,N.a.post("https://fist-deploy.herokuapp.com/api/users",{username:a.state.username});case 3:e.sent,a.setState({username:""}),a.getUsers();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.deleteUser=function(){var e=Object(b.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.delete("https://fist-deploy.herokuapp.com/api/users/"+t);case 2:a.getUsers();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getUsers();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("h3",null,"Create New User"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",value:this.state.username,onChange:this.onChangeUserName})),r.a.createElement("button",{tye:"submit",className:"btn btn-primary"},"Save")))),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("ul",{className:"list-group"},this.state.users.map((function(t){return r.a.createElement("li",{className:"list-group-item list-group-action",key:t._id,onDoubleClick:function(){return e.deleteUser(t._id)}},t.username)})))))}}]),t}(n.Component);var C=function(){return r.a.createElement(o.a,null,r.a.createElement(h,null),r.a.createElement("div",{className:"container p-4"},r.a.createElement(l.a,{exact:!0,path:"/test-deploy/",component:y}),r.a.createElement(l.a,{path:"/test-deploy/edit/:id",component:x}),r.a.createElement(l.a,{path:"/test-deploy/create",component:x}),r.a.createElement(l.a,{path:"/test-deploy/user",component:O})))};c.a.render(r.a.createElement(C,null),document.getElementById("root"))},71:function(e,t,a){e.exports=a(146)},76:function(e,t,a){},78:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.789d1da0.chunk.js.map