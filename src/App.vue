<template>
  <div id="app">
    <div class="loader" v-show="!loaded"></div>
    <div vshow="loaded">
      <the-navigation></the-navigation>
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
      <the-footer />
    </div>
  </div>
</template>
<script>
import TheNavigation from "@/components/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheNavigation,
    TheFooter
  },
  data() {
    return {
      loaded: false
    };
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        this.loaded = true;
      }
    };
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
  max-width: 1980px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  #nav {
    z-index: 99;
  }
  .loader {
    width: 100%;
    height: 100vh;
    background-color: #222;
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
