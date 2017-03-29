(function(page){
	
	page("menu1",function(html){
		var vm = new Vue({
			el: this,
			data: {
				message: 'Hello Vue!',
				models:[],
				tableItems:[]
			},
			methods:{
				loadModels:function(){
					fetch("api/models.json").then(function(response) {
						return response.json();
					}).then(function(json) {
						Vue.set(vm,"models",json);
					});
				},
				loadTable:function(e){
					if(e.keyCode == 13 && e.target.value){
						fetch("api/table/"+e.target.value+".json").then(function(response) {
							return response.json();
						}).then(function(json) {
							Vue.set(vm,"tableItems",json);
						}).catch(function(){
							Vue.set(vm,"tableItems",[]);
						});
					}
				}
			},
			mounted:function(){
				this.loadModels();
			}
		});
	});
	
	
	
	
	
}(function(page,controller){
	var pageElement = document.getElementById("main-"+page);
	pageElement && typeof controller === "function" && controller.call(pageElement,pageElement);
}));