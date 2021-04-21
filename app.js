const app = Vue.createApp({
    data() {
        return {
            title: 'Template for the component !!',
            username: 'John Smith',
            userid: 911,
            isDisplayed: true
        }
    },
    methods: {
        changeTitle(title) {            
            typeof(title) !== 'string' ? this.title = 'Changed Title !!' : this.title = title
        },
        toggleDisplay() {
            this.isDisplayed = !this.isDisplayed
        }
    }
})

app.mount('#app')