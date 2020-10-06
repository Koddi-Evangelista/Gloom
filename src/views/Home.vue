<template>
  <div class="home" v-show="created">
    <home-video />
    <welcome-section />
    <paralaxx-item />
    <home-info />
  </div>
</template>
<script>
import ParalaxxItem from "@/components/ParalaxxItem.vue";
import HomeVideo from "@/components/HomeVideo.vue";
import WelcomeSection from "@/components/WelcomeSection.vue";
import HomeInfo from "@/components/HomeInfo.vue";
export default {
  name: "Home",
  components: {
    ParalaxxItem,
    HomeVideo,
    WelcomeSection,
    HomeInfo
  },
  data() {
    return {
      created: false
    };
  },
  created() {
    this.created = true;
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: auto;
  background-color: #ffe9ec;
  color: #496a61;
}
</style>
