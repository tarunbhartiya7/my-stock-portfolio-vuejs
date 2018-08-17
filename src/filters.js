import Vue from 'vue'

Vue.filter('currency', function (value) {
	return '$' + parseInt(value).toLocaleString()
})

