const { createApp } = Vue

createApp({
    data(){
        return{

            newTodo: ' ',
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]
            
        }
    },
    methods: {
        crea(){

            
            let imp= {
                text: this.newTodo,
                done: false
            }
            
            if( this.newTodo != ' '){
                this.todos.push(imp)
            }
        }
    }
}).mount('#app')

