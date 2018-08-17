<template>
  <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input
						type="text"
						class="form-control"
						placeholder="Quantity"
                        v-model="quantity"
                        @keypress="isNumber"
                    >
                </div>
                <div class="pull-right">
                    <button
						class="btn btn-success"
                        @click="onBuy"
                    >Buy
                    </button>                   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { isNumber } from '../../utilities'

export default {
  props: ["stock"],
  data() {
    return {
      quantity: ""
    };
  },
  methods: {
    onBuy() {
      let order = {
        id: this.stock.id,
        price: this.stock.price,
        quantity: parseInt(this.quantity)
      };
      this.$store.dispatch("buyStocks", order);
      this.quantity = "";
    },
    isNumber(evt) {
      isNumber(evt)
    }
  }
};
</script>

<style>
</style>
