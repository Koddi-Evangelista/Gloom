<template>
  <div class="container">
    <img src="@/assets/paralaxx.jpg" alt="very cool bg" />
  </div>
</template>
<script>
export default {
  components: {}
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  max-height: 500px;
  overflow: hidden;
  img {
    width: 100%;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
  }
}
@media screen and(max-width: 900px) {
  .container {
    max-height: 250px;
  }
}
</style>
