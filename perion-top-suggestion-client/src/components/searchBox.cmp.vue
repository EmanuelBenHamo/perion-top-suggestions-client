<template>
  <section>
    <form class="form flex justify-center" @submit.prevent="handleSearchSubmit">
      <input
        class="search-box-input"
        placeholder="What are you looking for?"
        v-model.trim="searchTerm"
        @input="getSearchSuggestions"
      />
      <button class="search-btn">Search</button>
      <section class="search-suggestions"></section>
    </form>
  </section>
</template>

<script>
import searchService from "../services/search.service";
export default {
  name: "search-box",
  data() {
    return {
      searchTerm: "",
      searchSuggestions: []
    };
  },
  methods: {
    async getSearchSuggestions() {
      const searchSuggestions = await searchService.getSearchSuggestions(
        this.searchTerm
      );
      this.searchSuggestions = searchSuggestions;
    },
    handleSearchSubmit() {
      const searchUrl = searchService.getSearchUrl(this.searchTerm);
      window.open(searchUrl, "_self");
    }
  }
};
</script>

<style>
</style>