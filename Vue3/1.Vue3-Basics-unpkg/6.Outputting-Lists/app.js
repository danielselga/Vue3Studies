const app = Vue.createApp({
    data(){
        return {
            showBooks: true, 
            books: [
                {title: 'Name of the Wind', author: 'patrick rothfuss'},
                {title: 'The way of Kings', author: 'Brandon Sanderson'},
                {title: 'The way of Kings', author: 'Brandon Sanderson'},
            ]
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }

}) 

app.mount('#app')