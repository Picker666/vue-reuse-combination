import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.mixin({
  created: function () {
    var myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
  }
});

// Vue.config.optionMergeStrategies.myOption = function (toVal, fromVal) {
//   // 返回合并后的值
// }
// var strategies = Vue.config.optionMergeStrategies
// strategies.myOption = strategies.methods
// const merge = Vue.config.optionMergeStrategies.computed
// Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
//   if (!toVal) return fromVal
//   if (!fromVal) return toVal
//   return {
//     getters: merge(toVal.getters, fromVal.getters),
//     state: merge(toVal.state, fromVal.state),
//     actions: merge(toVal.actions, fromVal.actions)
//   }
// }

new Vue({
  render: h => h(App),
  myOption: 'hello!'
}).$mount('#app')
