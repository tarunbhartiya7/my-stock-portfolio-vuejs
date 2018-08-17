<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Stock Trader</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link activeClass="active" to="/portfolio" tag="li"><a>Portfolio</a></router-link>
                    <router-link activeClass="active" to="/stocks" tag="li"><a>Stocks</a></router-link>
                </ul>
                <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click="onEndDay">End Day</a></li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.state.portfolio.funds
    }
  },
  methods: {
    onEndDay() {
      this.$store.dispatch("randomizeStockPrices");
    }
  }
};
</script>

<style scoped>
nav {
  margin-top: 30px;
}
</style>
