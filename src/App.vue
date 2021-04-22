<template>
  <h1>{{ title }}</h1>
  <p>
    <input type="text" ref="name" />
    <button @click="handleClick">Click Me !!</button>
  </p>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "Vue - Sample Application",
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("clicked");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
input.clicked {
  background-color: coral;
  color: white;
}
</style>
