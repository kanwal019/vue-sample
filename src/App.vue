<template>
  <h1>{{ title }}</h1>
  <p>
    <input type="text" ref="name" />
    <button @click="handleClick">Click Me !!</button>
  </p>
  <br />
  <div v-if="showModal">
    <Modal :header="header" :subHeader="subHeader" theme="dark" @close="toggleModal" />
  </div>
  <button @click="toggleModal">Show Modal</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "Vue - Sample Application",
      header: "This is Modal header !!",
      subHeader: "This is Modal sub-header...",
      showModal: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("clicked");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
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
