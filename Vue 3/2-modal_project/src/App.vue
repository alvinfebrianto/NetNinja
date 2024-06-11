<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign Up Now</a>
        <a href="#">More Info</a>
      </template>
      <h1>Ninja Giveaway</h1>
      <p>Grab your ninja swag for half price!</p>
    </Modal>
  </div>
  <button @click="toggleModal">Open Modal</button>
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
      showModal: false,
    };
  },
  methods: {
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
input,
button {
  display: block;
  margin: 0 auto;
}
</style>
