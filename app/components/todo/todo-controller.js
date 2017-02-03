(function(){
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	
	var todoService = new TodoService()

		
		new Vue({
			el: '#todo',
			data: {
				todos:[],
				text:''
				
			},
			mounted: function(){
				this.todos = todoService.getTodos()
			},
			methods: {
				setTodo: function(todo){
					debugger
					this.todos = todo
				},
				addTodo: function(todo){
					this.todos.push(todo)
					todoService.saveTodos(this.todos)
					this.text=''
				},
				removeTodo: function(tIndex){
					this.todos.splice(tIndex,1)
					todoService.saveTodos(this.todos)
				}
			
			},
			computed: {
				count: function(){
					return this.todos.length
				}
			}

		})



	
	
}())
