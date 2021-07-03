const app = Vue.createApp({
    data(){
        return {
            url: 'http://www.google.com.br',
            showBooks: true, 
            books: [
                {title: 'Name of the Wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true},
                {title: 'The way of Kings', author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: false},
                {title: 'The Final Empire', author: 'Brandon Sanderson', img: 'assets/3.jpg', isFav: true},
            ]
        }
    },
        methods: {
                toggleShowBooks(){
                this.showBooks = !this.showBooks
        },
                switchFav(book){
                book.isFav = !book.isFav
        }
    
    }

}) 

app.mount('#app')