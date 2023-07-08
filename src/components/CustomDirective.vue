<template>
  <div>
    <h1>{{ serialNumber }}、{{ title }}</h1>
    <p>
      <input type="text" v-focus>
    </p>

    <div v-demo:foo.a.b="message"></div>

    <p v-pin="200">Stick me 200px from the top of the page</p>

    <p v-pin:[direction]="200">Stick me 200px from the left of the page</p>

    <div v-styles="{ color: 'white', text: 'hello!' }"></div>
    <hr>
  </div>
</template>

<script>
export default {
  name: "customDirective",
  props: {
    serialNumber: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data: function () {
    return {
      title: "custom directive",
      direction: 'left'
    }
  },
  methods: {
    message() {
      console.log('=======');
      return 1
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      }
    },
    demo: {
       bind: function (el, binding, vnode) {
        var s = JSON.stringify
        el.innerHTML =
          'name: ' + s(binding.name) + '<br>' +
          'value: ' + s(binding.value) + '<br>' +
          'expression: ' + s(binding.expression) + '<br>' +
          'argument: ' + s(binding.arg) + '<br>' +
          'modifiers: ' + s(binding.modifiers) + '<br>' +
          'vnode keys: ' + Object.keys(vnode).join(', ')
      }
    },
    pin: {
      bind: function (el, binding) {
        el.style.position = 'fixed';
        const s = (binding.arg == 'left' ? 'left' : 'top')
        el.style[s] = binding.value + 'px';
      }
    },
    styles: {
      bind: function (el, binding) {
        console.log(binding.value.color) // => "white"
        console.log(binding.value.text)  // => "hello!"
      },
    }
  }
}
</script>