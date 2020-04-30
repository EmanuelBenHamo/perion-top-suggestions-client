<template>
  <section class="main-app flex column align-center">
    <main class="main-container flex column align-center grow-1">
      <search-box class="search-box" />
    </main>
    <footer class="footer flex align-center justify-center">
      <h3 class="footer-text">Submitted by Emanuel Ben Hamo</h3>
    </footer>
  </section>
</template>

<script>
import searchBox from "./components/searchBox.cmp";
export default {
  name: "App",
  components: { searchBox }
};
</script>