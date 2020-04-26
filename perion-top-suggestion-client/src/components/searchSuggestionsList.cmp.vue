<template>
  <section>
    <search-suggestion
      class="search-suggestion-item"
      v-for="(suggestion, index) in suggestions"
      :key="index"
      :suggestion="suggestion"
      @suggestionSelected="onSuggestionSelected"
    />
  </section>
</template>

<script>
import searchSuggestion from "./searchSuggestion.cmp";
export default {
  name: "search-suggestions-list",
  props: {
    suggestions: Array
  },
  methods: {
    onSuggestionSelected(suggestion) {
      this.$emit("suggestionSelected", suggestion);
    }
  },
  components: {
    searchSuggestion
  }
};
</script>

<style>
</style>