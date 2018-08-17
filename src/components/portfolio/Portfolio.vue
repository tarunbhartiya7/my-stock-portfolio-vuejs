<template>
  <div>
    <transition-group name="slide" mode="out-in">
      <app-stock v-for="stock in portfolio" :key="stock.id" :stock="stock"/>
    </transition-group>
  </div>
</template>

<script>
import Stock from "./portfolioStock.vue";

export default {
  components: {
    appStock: Stock
  },
  computed: {
    portfolio() {
      return this.$store.getters.portfolio;
    }
  }
};
</script>

<style>
</style>
