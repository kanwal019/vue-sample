const app = Vue.createApp({
    data() {
        return {
            title: 'Template for the component !!',
            username: 'John Smith',
            userid: 911
        }
    },
    methods: {
        changeTitle(title) {            
            typeof(title) !== 'string' ? this.title = 'Changed Title !!' : this.title = title
        }
    }
})

app.mount('#app')