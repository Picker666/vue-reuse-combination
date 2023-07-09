import Vue from 'vue'
import App from './App.vue'
import AnchoredHeading from './common/AnchoredHeading';
import functionalComponent from './common/functionalComponent';
import smartList from './common/smartList';
import MyPlugin from './common/MyPlugin';

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

// var getChildrenTextContent = function (children) {
//   return children.map(function (node) {
//     return node.children
//       ? getChildrenTextContent(node.children)
//       : node.text
//   }).join('')
// }

Vue.component('anchored-heading', AnchoredHeading);
Vue.component('anchored-heading-functional', functionalComponent);
Vue.component('smart-list', smartList);

Vue.use(MyPlugin);

Vue.filter('filterA', function (value) {
  const length = value.length;
  if (length < 2) return value;
  value = value.toString()
  return value[0] + value.charAt(1).toUpperCase() + value.slice(2)
})

new Vue({
  render: h => h(App),
  myOption: 'hello!'
}).$mount('#app')
