<template>
  <picture>
    <!-- Cara kerja style scoped ialah Vue menginject random data atribut pada CSS+HTML masing² elemen di dalam komponen -->
    <img src="https://i.ibb.co/TLSPr0N/brave-2024-06-09-20-11-31.png" />
    <img src="https://i.ibb.co/rtP6FbY/brave-2024-06-09-20-12-55.png" />
  </picture>
</template>

<style>
picture img {
  width: 60vh;
  border: 1px dashed rgba(0, 0, 0, 0.5);
}
picture {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  flex-wrap: wrap;
  pointer-events: none;
  margin-top: 4rem;
}
</style>
