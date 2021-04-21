const app = Vue.createApp({
    data() {
        return {
            title: 'Template for the component !!',
            username: 'John Smith',
            userid: 911,
            isDisplayed: true,
            mouseX: 0,
            mouseY: 0,
        }
    },
    methods: {
        changeTitle(title) {
            typeof (title) !== 'string' ? this.title = 'Changed Title !!' : this.title = title
        },
        toggleDisplay() {
            this.isDisplayed = !this.isDisplayed
        },
        handleEvent(event) {
            console.log(event);
            console.log(event.type);
            this.mouseX = event.offsetX;
            this.mouseY = event.offsetY;
        }
    }
})

app.mount('#app')