const app = Vue.createApp({
  // template: `<h2>I am the template</h2>`
  data() {
    return {
      showBooks: true,
      books: [
        { title: "Overlord", author: "Maruyama Kugane" },
        { title: "The Lord of the Rings", author: "J. R. R." },
        { title: "One Piece", author: "Eiichiro Oda" },
      ],
      // title: "One Piece",
      // author: "Eiichiro Oda",
      // age: 49,
      // x: 0,
      // y: 0,
    };
  },
  methods: {
    changeTitle() {
      this.title = "Spy x Family";
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    // handleEvent() {
    //   console.log();
    // },
    // handleMouseMove(e) {
    //   this.x = e.offsetX;
    //   this.y = e.offsetY;
    // },
  },
});

app.mount("#app");
