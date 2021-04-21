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
                { name: 'John Smith', age: 30, gender: 'male', image: 'https://randomuser.me/api/portraits/men/1.jpg', isFamous: true },
                { name: 'John Doe', age: 40, gender: 'male', image: 'https://randomuser.me/api/portraits/men/2.jpg', isFamous: false },
                { name: 'Jane Smith', age: 40, gender: 'female', image: 'https://randomuser.me/api/portraits/women/3.jpg', isFamous: false },
                { name: 'Jane Doe', age: 30, gender: 'female', image: 'https://randomuser.me/api/portraits/women/4.jpg', isFamous: false },
                { name: 'Jon Smith', age: 50, gender: 'male', image: 'https://randomuser.me/api/portraits/men/5.jpg', isFamous: true },
                { name: 'Joan Smith', age: 40, gender: 'female', image: 'https://randomuser.me/api/portraits/women/6.jpg', isFamous: false },
                { name: 'Job Smith', age: 30, gender: 'male', image: 'https://randomuser.me/api/portraits/men/7.jpg', isFamous: true },
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
        },
        toggleFamous(name) {
            this.data.find((o, i) => {
                if (o.name === name) {
                    this.data[i] = { name: o.name, age: o.age, gender: o.gender, image: o.image, isFamous: !o.isFamous };
                    return;
                }
            });
        },
    }
})

app.mount('#app')