<template>
  <div class="container">
    <div class="img">
      <img src="../assets/aboutheader.jpg" alt="aboutheader" />
    </div>
    <about-description />
    <about-other-details />
  </div>
</template>
<script>
import AboutDescription from "@/components/AboutDescription.vue";
import AboutOtherDetails from "@/components/AboutOtherDetails.vue";
export default {
  components: {
    AboutDescription,
    AboutOtherDetails
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: auto;
  background-color: #faf8f8;
  color: #496a61;
  .img {
    position: relative;
    width: 100%;
    height: 50vh;
    margin-bottom: 2rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(2px);
    }
  }
}
</style>
