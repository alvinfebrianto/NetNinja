const app = Vue.createApp({
  // template: `<h2>I am the template</h2>`
  data() {
    return {
      showBooks: true,
      url: "https://youtu.be",
      books: [
        { title: "Overlord", author: "Maruyama Kugane", img: "assets/1.jpg" },
        {
          title: "The Way of Kings",
          author: "Brandon Sanderson",
          img: "assets/2.jpg",
        },
        { title: "One Piece", author: "Eiichiro Oda", img: "assets/3.jpg" },
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
