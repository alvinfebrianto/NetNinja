const app = Vue.createApp({
  // template: `<h2>I am the template</h2>`
  data() {
    return {
      showBooks: true,
      title: "One Piece",
      author: "Eiichiro Oda",
      age: 49,
    };
  },
  methods: {
    changeTitle() {
      this.title = "Spy x Family";
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
