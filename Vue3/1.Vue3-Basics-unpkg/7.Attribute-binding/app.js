const app = Vue.createApp({
    data(){
        return {
            url: 'http://www.google.com.br',
            showBooks: true, 
            books: [
                {title: 'Name of the Wind', author: 'patrick rothfuss', img: 'assets/1.jpg'},
                {title: 'The way of Kings', author: 'Brandon Sanderson', img: 'assets/2.jpg'},
                {title: 'The way of Kings', author: 'Brandon Sanderson', img: 'assets/3.jpg'},
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