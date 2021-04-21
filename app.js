const app = Vue.createApp({
    data() {
        return {
            googleURL: 'https://www.google.com/',
            title: 'Template for the component !!',
            username: 'John Smith',
            userid: 911,
            isDisplayed: false,
            mouseX: 0,
            mouseY: 0,
            data: [
                { name: 'John Smith', age: 30, gender: 'male' },
                { name: 'John Doe', age: 40, gender: 'male' },
                { name: 'Jane Smith', age: 40, gender: 'female' },
                { name: 'Jane Doe', age: 30, gender: 'female' },
                { name: 'Jon Smith', age: 50, gender: 'male' },
                { name: 'Joan Smith', age: 40, gender: 'female' },
                { name: 'Job Smith', age: 30, gender: 'male' },
            ]
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