<template>
  <p>Reaction Time: {{ score }} ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return { rank: null };
  },
  mounted() {
    if (this.score < 100) {
      this.rank = "S";
    } else if (this.score < 250) {
      this.rank = "A";
    } else if (this.score < 300) {
      this.rank = "B";
    } else if (this.score < 400) {
      this.rank = "C";
    } else if (this.score < 500) {
      this.rank = "D";
    } else {
      this.rank = "E";
    }
  },
};
</script>

<style>
.rank {
  font-size: 4em;
  color: crimson;
  font-weight: bold;
}
</style>
