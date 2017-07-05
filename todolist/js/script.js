console.log("hei there <3 ");
new Vue ({
  el : '#todolist',
  data : {
    title: 'to do list',
    tasks: [
      {
        name : 'drink coffee',
        del : '-'
      },
      {
        name : 'read a book',
        del : '-'
      },
      {
        name : 'eat healthy',
        del : '-'
      }
    ]
  },
  methods : {
    newItem : function(){
      if(!this.task.name){
        return
      }
      this.tasks.push({
        name : this.tasks.name,
        del: '-'
      })
    },
    delItem: function(task){
      this.tasks.splice(this.tasks.indexOf(task), 1)
    }
  }
})
