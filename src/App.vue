<template>
  <div id="app">
    <the-navigation></the-navigation>
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
import TheNavigation from "@/components/TheNavigation.vue";
export default {
  components: {
    TheNavigation
  }
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  #nav {
    z-index: 99;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.3s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
</style>
