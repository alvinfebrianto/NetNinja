const app = Vue.createApp({
  // template: `<h2>I am the template</h2>`
  data() {
    return { title: "One Piece", author: "Eiichiro Oda", age: 49 };
  },
});

app.mount("#app");
