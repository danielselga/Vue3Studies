const app = Vue.createApp({
    data(){
        return {
            title: "The final empire",
            author: "Brandon Sanderson",
            age: 45
        }
    },
    methods: {
        changeTitle(title){
            //this.title = 'words of radiance'
            this.title = title
        }
    }

}) 

app.mount('#app')