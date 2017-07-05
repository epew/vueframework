new Vue ({

	el: '#toDoList',
	data: {
		title: 'to do list',
		tasks: [
			{
				name: 'drink a cup of coffee',
				del: '-'
			},
			{
				name: 'read a book',
				del: '-'
			},
			{
				name: 'eat pizza',
				del: '-'
			}
		]
	},

	methods: {
		newItem: function() {
			if (!this.tasks.name) {
				return
			}
			this.tasks.push ( {
				name: this.tasks.name,
				del: '-'
			})
		},
		delItem: function (task) {
			this.tasks.splice(this.tasks.indexOf(task), 1)
		}
	}

})
