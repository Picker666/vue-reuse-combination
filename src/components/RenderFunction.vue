<template>
  <div>
    <h1>{{ serialNumber }}、{{ title }}</h1>
    <anchored-heading :level="1">Hello Picker...</anchored-heading>

    <anchored-heading-functional :level="2"> Hello Christine...</anchored-heading-functional>

    <anchored-heading-functional :level="2" @click="handleFunctionalClick"> Hello Christine with Click...</anchored-heading-functional>

    <smart-list :items="[]"/>

    <smart-list :items="items"/>
    <hr>
  </div>
</template>

<script>
export default {
  name: "renderFunction",
  props: {
    serialNumber: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data: function () {
    return {
      title: "render function",
      items: [{
        id: 1,
        name: 'line1'
      }, {
        id: 2,
        name: 'line2'
      }]
    }
  },
  methods: {
    handleFunctionalClick() {
      console.log('==================handleFunctionalClick');
    }
  }
}
</script>