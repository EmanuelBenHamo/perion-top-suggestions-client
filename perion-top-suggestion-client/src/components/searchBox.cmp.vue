<template>
  <section class="search-box-container flex column">
    <button class="search-btn flex" @click="handleSearchSubmit">Search</button>
    <el-autocomplete
      class="search-box-autocomplete"
      v-model="searchTerm"
      :fetch-suggestions="getSearchSuggestions"
      placeholder="What are you looking for?"
      :trigger-on-focus="false"
      @select="onSuggestionSelected"
      size="medium"
      :autofocus="true"
      :clearable="true"
    />
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
    async getSearchSuggestions(searchTermStr, cb) {
      this.searchSuggestions = await searchService.getSearchSuggestions(
        searchTermStr
      );
      const newSuggestions = this.searchSuggestions.map(suggestion => {
        return {
          value: suggestion,
          link: searchService.getSearchUrl(suggestion)
        };
      });
      cb(newSuggestions);
    },
    handleSearchSubmit() {
      const searchUrl = searchService.getSearchUrl(this.searchTerm);
      window.open(searchUrl, "_self");
    },
    onSuggestionSelected(suggestion) {
      this.searchTerm = suggestion.value;
      this.handleSearchSubmit();
    }
  }
};
</script>

<style>
</style>