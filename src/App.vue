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
    <div class="border"></div>
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
html {
  font-size: calc(1em + 1vw);
}
#app {
  background-color: #222;
  padding: 1rem;
  max-width: 1980px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  #nav {
    z-index: 99;
  }
  .loader {
    width: 100%;
    height: 100vh;
    background-color: #222;
  }
  .border {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    background-color: #222;
    z-index: 9;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.5s;
}
.slide-enter {
  opacity: 0;
  transform: translateY(-50%);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(50%);
}
</style>
