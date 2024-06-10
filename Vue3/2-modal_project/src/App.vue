<template>
  <h1>{{ title }}</h1>
  <!-- <Modal header="Sign Up for the Giveaway!" text="Grab your ninja swag for half price" /> -->
  <Modal :header="header" :text="text" theme="sale" />
  <Log />
</template>

<script>
import Modal from "./components/Modal.vue";
import Log from "./components/Log.vue";

export default {
  name: "App",
  components: { Modal, Log },
  data() {
    return {
      title: "My First Vue App :)",
      header: "Sign Up for the Giveaway!",
      text: "Grab your ninja swag for half price",
    };
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
input,
button {
  display: block;
  margin: 0 auto;
}
</style>
