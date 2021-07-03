const app = Vue.createApp({
    data(){
        return {
            title: "The final empire",
            author: "Brandon Sanderson",
            age: 45,
            showBooks: true, //criando um dado true para que ele seja uma condição de mostrar ou não com o v-if, podemos manipular ele,
            //via função.
            x: 0,
            y: 0 
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks //aqui estamos chamando a diferença boolean de showbook com o '!', lembre de sempre
            //quando for me referenciar a um dado(variavel) usar o this.
        },
        handleEvent(e, data){ //quando passamos um parametro para um evento e ele é disparado ele nos retorna um objeto
            console.log(e, e.type)
            if(data){ //usamos quando temos um parametro passado na função, e para chamar o evento ele deve ser declado primeiro...
                //...usando a palavra reservada 
                console.log(data)
            }
            //la no html a chamada do evento não pode ser declarada com '()', caso declarado ele vai retornar undefined.
        },
        handleMouseMove(e){
            this.x = e.offsetX,
            this.y = e.offsetY
            
        }
    }
}) 

app.mount('#app')