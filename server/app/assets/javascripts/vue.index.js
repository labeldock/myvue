(function(){
	
	$('#main-vue-index').each(function(){
		var vm = new Vue({
			el: this,
			data: {
				message: 'Hello Vue!',
				models:[],
				tableItems:[]
			},
			methods:{
				loadModels:function(){
					fetch("/models.json").then(function(response) {
						return response.json();
					}).then(function(json) {
						Vue.set(vm,"models",json);
					});
				},
				loadTable:function(e){
					if(e.keyCode == 13 && e.target.value){
						fetch("/table/"+e.target.value+".json").then(function(response) {
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
	
}());