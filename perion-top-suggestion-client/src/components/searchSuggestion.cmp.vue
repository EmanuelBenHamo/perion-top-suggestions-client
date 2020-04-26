<template>
  <section class="search-suggestion-container" @click="onSuggestionClick">{{suggestion}}</section>
</template>

<script>
export default {
  name: "search-suggestion",
  props: {
    suggestion: String
  },
  methods: {
    onSuggestionClick(){
      this.$emit('suggestionSelected', this.suggestion);
    }
  }
};
</script>

<style>
</style>