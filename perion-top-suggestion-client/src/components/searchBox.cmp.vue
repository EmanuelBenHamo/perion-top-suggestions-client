<template>
  <form
    class="form flex column align-center grow-1 justify-start"
    @submit.prevent="handleSearchSubmit"
  >
    <section class="input-container flex align-center justify-center">
      <input
        class="search-box-input"
        placeholder="What are you looking for?"
        v-model.trim="searchTerm"
        @input="getSearchSuggestions"
      />
      <button class="search-btn">Search</button>
    </section>

    <search-suggestions-list
      class="search-suggestions-list flex column"
      v-if="searchSuggestions.length"
      :suggestions="searchSuggestions"
      @suggestionSelected="onSuggestionSelected"
    />
  </form>
</template>

<script>
import searchService from "../services/search.service";
import searchSuggestionsList from "../components/searchSuggestionsList.cmp";
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
    },
    onSuggestionSelected(suggestion) {
      this.searchTerm = suggestion;
      this.handleSearchSubmit();
    }
  },
  components: {
    searchSuggestionsList
  }
};
</script>

<style>
</style>