(function(page){
	
	page("home",function(main){
		console.log("Hello home",main);
	});
	
	page("menu1",function(main){
		console.log("Hello menu1",main);
	});
	
	page("menu2",function(main){
		console.log("Hello menu2",main);
	});
	
	page("menu3",function(main){
		console.log("Hello menu3",main);
	});
	
}(function(page,controller){
	var pageElement = document.getElementById("main-"+page);
	pageElement && typeof controller === "function" && controller.call(pageElement,pageElement);
}));