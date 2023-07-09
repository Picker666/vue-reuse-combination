function MyPlugin() {
  
}

MyPlugin.install = function (Vue, options) {
  console.log('options: ', options);
  // 1. 添加全局方法或 property
  Vue.myGlobalMethod = function () {
    // 逻辑...
    console.log('================= this is my global method');
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      console.log('el, binding, vnode, oldVnode: ', el, binding, vnode, oldVnode);
      // 逻辑...
    }
  })

  // 3. 注入组件选项
  Vue.mixin({
    mounted: function () {
      console.log('this is mounted from mixin ...');
    }
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    console.log('methodOptions: ', methodOptions);
  }
}

export default MyPlugin;
