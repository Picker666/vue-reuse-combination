<template>
  <div>
    <h1>{{ serialNumber }}、{{ title }}</h1>
    <input type="text" v-model="value">
    <p>{{ value | filterA | filterB }}</p>
  </div>
</template>

<script>
export default {
  name: "filterComponent",
  props: {
    serialNumber: {
      type: Number,
      required: true,
      default: 0
    }
  },
  filters: {
    filterA1(str) {
      if (str.length === 0) {
        return '';
      }
      const first = str.charAt(0).toUpperCase();
      return first + str.slice(1);
    },
    filterB(str) {
      const length = str.length;
      if (length > 2) {
        return str;
      }

      const last = str.charAt(length - 1).toUpperCase();
      return str.slice(0, length - 1) + last;
    }
  },
  data: function () {
    return {
      title: "Filter Component",
      value: ''
    }
  }
}
</script>