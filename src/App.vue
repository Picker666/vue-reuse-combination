<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MixinComponent :serialNumber="1" />
    <CustomDirective :serialNumber="2" />
    <RenderFunction :serialNumber="3" />
    <PluginExample :serialNumber="4" />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import MixinComponent from './components/MixinComponent';
import CustomDirective from './components/CustomDirective';
import RenderFunction from './components/RenderFunction';
import PluginExample from './components/PluginExample';

export default {
  name: 'App',
  components: {
    HelloWorld,
    CustomDirective,
    MixinComponent,
    RenderFunction,
    PluginExample
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
