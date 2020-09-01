(this["webpackJsonpfd-app"]=this["webpackJsonpfd-app"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),l=a.n(c),s=a(9),i=a(5),o=(a(49),function(){return r.a.createElement("nav",{className:"navbar navbar-dark navbar-expand-lg container-fluid"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement(s.b,{to:"/",className:"navbar-brand brand"},"Fd")),r.a.createElement("button",{type:"button",className:"navbar-toggler","data-toggle":"collapse","data-target":"#myNavbar",name:"button"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"myNavbar"},r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/",className:"nav-link nlink"},"Home"))),r.a.createElement("ul",{className:"nav navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/Login",className:"nav-link nlink"},r.a.createElement("i",{className:"fa fa-user","aria-hidden":"true"})," Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/Signup",className:"nav-link nlink"},r.a.createElement("i",{className:"fa fa-sign-out","aria-hidden":"true"})," Signup")))))}),m=a(1),u=a(2),d=a(4),p=a(3),h=(a(54),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).cityHandler=function(e){n.setState({restaurant:""}),n.setState({city:e.target.value}),sessionStorage.setItem("city",e.target.value);var t=e.target.value;fetch("".concat("https://myzomatoapi.herokuapp.com/restauranthome?city=").concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(e){n.setState({restaurant:e})}))},n.restHandler=function(e){n.props.restid(e.target.value)},n.renderLocation=function(e){if(e)return e.map((function(e){return r.a.createElement("option",{value:e.city},e.name)}))},n.renderRest=function(e){if(e)return e.map((function(e){return r.a.createElement("option",{value:e._id},e.name," |",e.locality)}))},n.state={city:"",restaurant:""},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"imageContainer container-fluid"},r.a.createElement("div",{className:"mainText"},r.a.createElement("div",{className:"logo"},"Fd"),r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,"Find the best restaurents, cafes, bars")),r.a.createElement("div",{className:"locationContainer input-group"},r.a.createElement("select",{className:"location",onChange:this.cityHandler},this.renderLocation(this.props.location)),r.a.createElement("select",{id:"restList",onChange:this.restHandler},this.renderRest(this.state.restaurant)))))}}]),a}(n.Component)),E=(a(55),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).renderMealdata=function(e){if(e)return e.map((function(e){return r.a.createElement("div",{className:"QSCol col-md-4 col-sm-6 col-lg-3"},r.a.createElement(s.b,{to:"/details/".concat(e.mealtype)},r.a.createElement("div",{className:"component"},r.a.createElement("div",{className:"QSimg"},r.a.createElement("img",{className:"responsive",src:"/images/".concat(e.name,".jpg"),alt:"".concat(e.name,"_img")})),r.a.createElement("div",{className:"QStxt"},r.a.createElement("h5",{className:"compHead"},e.name[0].toUpperCase()+e.name.slice(1)),r.a.createElement("p",{className:"txt"},"Start your day with exclusive ",e.name)))))}))},n.state={mealData:""},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"QSContainer"},r.a.createElement("h1",{className:"QShead"},"Quick Search"),r.a.createElement("p",{className:"subHead"},"Discover restaurents by type of meal"),r.a.createElement("div",{className:"row"},this.renderMealdata(this.props.mealData))))}}]),a}(n.Component)),v=a(16),f=a.n(v),b=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).setrestId=function(e){n.props.history.push("/rest/".concat(Number(e)))},n.state={location:"",mealData:""},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(h,{location:this.state.location,restid:function(t){return e.setrestId(t)}}),r.a.createElement(E,{mealData:this.state.mealData}))}},{key:"componentDidMount",value:function(){var e=this;sessionStorage.setItem("city",1),f.a.get("https://myzomatoapi.herokuapp.com/location").then((function(t){e.setState({location:t.data})})),f.a.get("https://myzomatoapi.herokuapp.com/mealtype").then((function(t){e.setState({mealData:t.data})}))}}]),a}(n.Component),g=(a(73),a(41)),N=a.n(g),y=(a(89),a(90),a(42)),O=a.n(y),j={content:{}},C=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).openModal=function(){n.setState({modalOpen:!0})},n.closeModal=function(){n.setState({modalOpen:!1})},n.renderCarousel=function(){var e={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0};return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,e,r.a.createElement("div",null,r.a.createElement("img",{class:"img-responsive car-img",src:"https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg",alt:"First slide"})),r.a.createElement("div",null,r.a.createElement("img",{class:"img-responsive car-img",src:"https://b.zmtcdn.com/data/pictures/7/18690357/0df7f4ca0c645a68a1657b1e69b015fa.jpg",alt:"Second slide"})),r.a.createElement("div",null,r.a.createElement("img",{class:"img-responsive car-img ",src:"https://b.zmtcdn.com/data/res_imagery/6508401_RESTAURANT_21a925c42f2f93c9709e1945b9eae56f.jpg",alt:"Third slide"})),r.a.createElement("div",null,r.a.createElement("img",{class:"img-responsive car-img ",src:"https://b.zmtcdn.com/data/pictures/1/50471/bcf68da39dcfb0fe5bcfb742c337385e.jpg",alt:"Forth slide"}))))},n.state={modalOpen:!1},n}return Object(u.a)(a,[{key:"render",value:function(){var e;return e=""==this.props.restData?{}:{backgroundImage:"url('".concat(this.props.restData[0].thumb,"')"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container mainContainer"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 col-12",style:e},r.a.createElement("div",{className:"gallery"},r.a.createElement("button",{className:"btn btn-light img_btn",onClick:this.openModal},"Click to see Image Gallery"),r.a.createElement(O.a,{isOpen:this.state.modalOpen,onRequestClose:this.closeModal,style:j,className:"modalImage"},this.renderCarousel()))))))}}]),a}(n.Component),S=a(14),D=(a(100),a(101),function(e){var t=sessionStorage.getItem("meal"),a=Object(i.e)(),n=function(e){t?a.push("/details/".concat(t)):a.push("/")};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},function(e){var t=e.restData;if(t)return r.a.createElement("div",{className:"matter"},r.a.createElement("h1",{id:"heading"},t[0].name),r.a.createElement(S.d,null,r.a.createElement(S.b,null,r.a.createElement(S.a,{className:"react-tabs__tab"},"Overview"),r.a.createElement(S.a,{className:"react-tabs__tab"}," Contact")),r.a.createElement(S.c,null,r.a.createElement("h3",{className:"overview"},"About this place"),r.a.createElement("p",{className:"overTxt"},"This restaurant is famous for ",t[0].Cuisine[0].name," and ",t[0].Cuisine[1].name," ")),r.a.createElement(S.c,null,r.a.createElement("h5",{className:"head"},"Cost for two : ",t[0].cost),r.a.createElement("div",{className:"add"},r.a.createElement("h3",{className:"addName"},t[0].name),r.a.createElement("p",{className:"addTxt"},t[0].address)))),r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"btn btn-danger btn-lg order-buttons",onClick:n},"Back"),r.a.createElement(s.b,{to:"/form/".concat(t[0]._id)},r.a.createElement("button",{type:"button",className:"btn btn-success btn-lg  order-buttons"},"Place Order"))))}(e)))}),k=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={restData:""},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C,{restData:this.state.restData}),r.a.createElement(D,{restData:this.state.restData}))}},{key:"componentDidMount",value:function(){var e=this,t=parseInt(this.props.match.params.id);fetch("".concat("https://myzomatoapi.herokuapp.com/restaurantdetail/").concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({restData:t})}))}}]),a}(n.Component),I=a(18),_=(a(102),function(e){return r.a.createElement("div",null,function(e){var t=e.restData;if(t)return t.map((function(e){var t;return r.a.createElement("div",{className:"RestData"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"restImg"},r.a.createElement("img",(t={className:"img-responsive"},Object(I.a)(t,"className","restImage"),Object(I.a)(t,"src","".concat(e.thumb)),Object(I.a)(t,"alt","breakfast_img"),t)))),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"restDet"},r.a.createElement(s.b,{to:"/rest/".concat(e._id),className:"RestTitle"},r.a.createElement("h2",null,e.name)),r.a.createElement("p",{className:"resttxt"}," ",e.address)))),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("p",{className:"resttxt"},"CUSINES:")),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"restDet"},r.a.createElement("p",{className:"resttxt"}," ",e.Cuisine[0].name,", ",e.Cuisine[1].name)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("p",{className:"resttxt"},"COST FOR TWO:")),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"restDet"},r.a.createElement("p",{className:"resttxt"}," ",e.cost)))))}))}(e))}),x=(a(22),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).cuisineFilter=function(e){var t="";e.target.value&&(t=e.target.value),n.props.filterByCuisine(t)},n.renderCusine=function(e){var t=e.cusineData;if(t)return t.map((function(e){return r.a.createElement("div",null,r.a.createElement("label",{className:"radio filterItem"},r.a.createElement("input",{type:"radio",value:e.cuisine,name:"cusine"})," ",e.name))}))},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"filter"},r.a.createElement("h6",null,"Cusine"),r.a.createElement("hr",null),r.a.createElement("div",{onChange:this.cuisineFilter},r.a.createElement("div",null,r.a.createElement("label",{className:"radio filterItem"},r.a.createElement("input",{type:"radio",value:"",name:"cusine"})," All")),this.renderCusine(this.props)))}}]),a}(n.Component)),P=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).costFilter=function(t){var a="",n="",r=t.target.value.split(",");null==r[1]?a=r[0]:(n=r[0],a=r[1]),e.props.filterByCost(a,n)},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"filter"},r.a.createElement("h6",null,"Cost for two "),r.a.createElement("hr",null),r.a.createElement("div",{onChange:this.costFilter},r.a.createElement("div",{className:"radio"},r.a.createElement("label",{className:"radio filterItem"},r.a.createElement("input",{type:"radio",value:"0,500",name:"cost"})," 0 to ",r.a.createElement("i",{className:"fa fa-inr ","aria-hidden":"true"}," 500"))),r.a.createElement("div",null,r.a.createElement("label",{className:"radio filterItem"},r.a.createElement("input",{type:"radio",value:"500,800",name:"cost"})," ",r.a.createElement("i",{className:"fa fa-inr ","aria-hidden":"true"}," 500 ")," to ",r.a.createElement("i",{className:"fa fa-inr ","aria-hidden":"true"}," 800 "))),r.a.createElement("div",null,r.a.createElement("label",{className:"radio filterItem"},r.a.createElement("input",{type:"radio",value:"800,1000",name:"cost"})," ",r.a.createElement("i",{className:"fa fa-inr ","aria-hidden":"true"}," 800 ")," to ",r.a.createElement("i",{className:"fa fa-inr ","aria-hidden":"true"}," 1000 "))),r.a.createElement("div",null,r.a.createElement("label",{className:"radio filterItem"},r.a.createElement("input",{type:"radio",value:"1000",name:"cost"})," ",r.a.createElement("i",{className:"fa fa-inr ","aria-hidden":"true"}," 1000+")))))}}]),a}(n.Component),T=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).sortFilter=function(t){var a;t.target.value&&(a=t.target.value),e.props.filterBySort(a)},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"filter"},r.a.createElement("h6",null,"Sort "),r.a.createElement("hr",null),r.a.createElement("div",{onChange:this.sortFilter},r.a.createElement("div",{className:"radio"},r.a.createElement("label",{className:"radio filterItem"},r.a.createElement("input",{type:"radio",value:"1",name:"sort"})," Ascending")),r.a.createElement("div",null,r.a.createElement("label",{className:"radio filterItem"},r.a.createElement("input",{type:"radio",value:"-1",name:"sort"})," Descending"))))}}]),a}(n.Component),w=(a(103),a(43)),H=a.n(w),F=(a(106),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={activePage:""},e}return Object(u.a)(a,[{key:"handlePageChange",value:function(e){console.log("active page is ".concat(e)),this.setState({activePage:e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(H.a,{hideFirstLastPages:!0,activePage:this.state.activePage,itemsCountPerPage:10,totalItemsCount:450,pageRangeDisplayed:5,onChange:this.handlePageChange.bind(this)}))}}]),a}(n.Component)),R=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).setDataPerSort=function(e){n.setState({sort:e},n.getRestData)},n.state={cusineId:"",hcost:"",lcost:"",sort:"1",restData:"",cusineData:""},n}return Object(u.a)(a,[{key:"getRestData",value:function(){var e,t,a,n=this,r=sessionStorage.getItem("city"),c=sessionStorage.getItem("meal"),l="".concat("https://myzomatoapi.herokuapp.com/restaurantlist","/").concat(r,"/").concat(c,"?sort=").concat(this.state.sort);e=""==this.state.cusineId?"":"&cuisine=".concat(this.state.cusineId),a=""==this.state.hcost?"":"&hcost=".concat(this.state.hcost),t=""==this.state.lcost?"":"&lcost=".concat(this.state.lcost);var s="".concat(l).concat(e).concat(a).concat(t);console.log("Url = ".concat(l)),fetch(s,{method:"GET"}).then((function(e){return e.json()})).then((function(e){n.setState({restData:e})}))}},{key:"setDataPerCuisine",value:function(e){this.setState({cusineId:e},this.getRestData)}},{key:"setDataPerCost",value:function(e,t){this.setState({hcost:e,lcost:t},this.getRestData)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"heading"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 filtercontainer"},r.a.createElement(x,{cusineData:this.state.cusineData,filterByCuisine:function(t){e.setDataPerCuisine(t)}}),r.a.createElement(P,{filterByCost:function(t,a){e.setDataPerCost(t,a)}}),r.a.createElement(T,{filterBySort:function(t){e.setDataPerSort(t)}})),r.a.createElement("div",{className:"col-md-8 detailDiv"},r.a.createElement(_,{restData:this.state.restData})))),r.a.createElement("div",{className:"paginate"},r.a.createElement(F,null)))}},{key:"componentDidMount",value:function(){var e=this,t=parseInt(this.props.match.params.mealtype);sessionStorage.setItem("meal",t);var a=sessionStorage.getItem("city"),n="".concat("https://myzomatoapi.herokuapp.com/restaurantlist","/").concat(a,"/").concat(t);f.a.get(n).then((function(t){e.setState({restData:t.data})})),f.a.get("https://myzomatoapi.herokuapp.com/cuisine").then((function(t){e.setState({cusineData:t.data})}))}}]),a}(n.Component),z=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).nameHandler=function(e){n.setState({name:e.target.value})},n.phoneHandler=function(e){n.setState({phone:e.target.value})},n.emailHandler=function(e){n.setState({email:e.target.value})},n.addressHandler=function(e){n.setState({address:e.target.value})},n.personHandler=function(e){n.setState({person:e.target.value})},n.handleSubmit=function(){var e={order_id:n.state.order_id,name:n.state.name,phone:n.state.phone,email:n.state.email,address:n.state.address,rest_name:n.state.rest_name,person:n.state.person};fetch("https://myzomatoapi.herokuapp.com/placeorder",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(n.props.history.push("/orderDisplay"))},n.state={order_id:Math.floor(1e4*Math.random()),name:"",phone:"",email:"",address:"",rest_name:"",person:1},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{name:"control-label"},"Order Id:"),r.a.createElement("input",{type:"text",className:"form-control",name:"order_id",value:"".concat(this.state.order_id),readOnly:!0}),r.a.createElement("label",{name:"control-label"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",value:"".concat(this.state.name),name:"name",onChange:this.nameHandler}),r.a.createElement("label",{name:"control-label"},"Phone"),r.a.createElement("input",{type:"text",className:"form-control",value:"".concat(this.state.phone),name:"phone",onChange:this.phoneHandler}),r.a.createElement("label",{name:"control-label"},"Email"),r.a.createElement("input",{type:"text",className:"form-control",value:"".concat(this.state.email),name:"email",onChange:this.emailHandler}),r.a.createElement("label",{name:"control-label"},"Address"),r.a.createElement("input",{type:"text",className:"form-control",value:"".concat(this.state.address),name:"address",onChange:this.addressHandler}),r.a.createElement("label",{name:"control-label"},"Restaurant name"),r.a.createElement("input",{type:"text",className:"form-control",value:"".concat(this.state.rest_name),name:"rest_name",readOnly:!0}),r.a.createElement("label",{name:"control-label"},"Persons"),r.a.createElement("input",{type:"text",className:"form-control",value:"".concat(this.state.person),name:"person",onChange:this.personHandler})),r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"btn btn-success",onClick:this.handleSubmit},"Submit")))}},{key:"componentDidMount",value:function(){var e=this,t="https://myzomatoapi.herokuapp.com/restaurantdetails/".concat(this.props.match.params.id);fetch(t,{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({rest_name:t[0].name})}))}}]),a}(n.Component),M=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).renderOrders=function(e){if(e)return e.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.order_id),r.a.createElement("td",null,e.rest_name),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.address),r.a.createElement("td",null,e.person))}))},e.state={orders:""},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("center",null,r.a.createElement("table",{className:"table table-responsive"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"order_id"),r.a.createElement("th",null,"rest_name"),r.a.createElement("th",null,"name"),r.a.createElement("th",null,"phone"),r.a.createElement("th",null,"email"),r.a.createElement("th",null,"address"),r.a.createElement("th",null,"person"))),r.a.createElement("tbody",null,this.renderOrders(this.state.orders)))))}},{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8900/orders",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({orders:t})}))}}]),a}(n.Component),A=function(){return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement(i.a,{exact:!0,path:"/",component:b}),r.a.createElement(i.a,{exact:!0,path:"/details/:mealtype",component:R}),r.a.createElement(i.a,{path:"/rest/:id",component:k}),r.a.createElement(i.a,{path:"/form/:id",component:z}),r.a.createElement(i.a,{path:"/orderDisplay",component:M})))};l.a.render(r.a.createElement(A,null),document.getElementById("root"))},22:function(e,t,a){},44:function(e,t,a){e.exports=a(107)},49:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},73:function(e,t,a){}},[[44,1,2]]]);
//# sourceMappingURL=main.602f040d.chunk.js.map