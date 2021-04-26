<template>
  <div class="backdrop">
    <div class="modal" :class="{ dark: theme === 'dark' }">
      <h1>{{ header }}</h1>
      <p>{{ subHeader }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "subHeader", "theme"],
};
</script>


<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.modal.dark {
  background: #444;
}
.modal.dark p {
  color: #fff;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
h1 {
  color: teal;
  border: none;
  padding: 0;
}
</style>