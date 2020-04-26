<template>
  <section class="main-container flex column align-center justify-center">
    <search-box class="search-box align-start justify-center flex grow-1" />

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