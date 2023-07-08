import Vue from 'vue';

// 定义一个混入对象
var myMixin = {
  data: function () {
    return {
      mixinMsg: 'this is mixin message...',
      from: 'mixinComponent',
      title: 'mixin'
    }
  },
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}

// 定义一个使用混入对象的组件
var Component = Vue.extend({
  mixins: [myMixin],
  data: function () {
    return {
      from: 'targetComponent',
      title: 'component'
    }
  },
  created: function () {
    console.log(this.$data)
  },
  methods: {
    hello: function () {
      console.log('hello from target component!')
    }
  },
  template:`<div><p>this is a mixin component</p><p>{{this.mixinMsg}}</p></div>`
})

export default Component;
