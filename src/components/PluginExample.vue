<template>
  <div>
    <h1 v-my-directive:picker="666">{{ serialNumber }}、{{ title }}</h1>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'pluginExample',
  props: {
    serialNumber: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data: function () {
    return {
      title: "Plugin Example",
    }
  },
  mounted: function () {
    Vue.myGlobalMethod();
    this.$myMethod();
    console.log('this is plugin example mounted ===========');
  }
}
</script>