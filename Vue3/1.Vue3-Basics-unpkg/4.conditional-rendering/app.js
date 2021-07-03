const app = Vue.createApp({
    data(){
        return {
            title: "The final empire",
            author: "Brandon Sanderson",
            age: 45,
            showBooks: true, //criando um dado true para que ele seja uma condição de mostrar ou não com o v-if, podemos manipular ele,
            //via função.
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks //aqui estamos chamando a diferença boolean de showbook com o '!', lembre de sempre
            //quando for me referenciar a um dado(variavel) usar o this.
        }
    }

}) 

app.mount('#app')