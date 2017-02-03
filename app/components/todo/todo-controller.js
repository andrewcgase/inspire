(function(){
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	
	var tc = this
	var todoService = new TodoService()

	todoService.getTodos(function(todo){
		console.log(todo)
		
		new Vue({
			el: '#todo',
			data: {
				todo:{}
			},
			mounted: function(){
				todoService.getTodos(this.setTodo)
			},
			methods: {
				setTodo: function(todo){
					this.todo = todo
				}
			}
		})

})

	
	
}())
