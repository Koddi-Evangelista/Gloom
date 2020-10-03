<template>
  <div class="home">
    <div class="video">
      <video src="../assets/homebg.mp4" muted autoplay loop></video>
      <div class="texts">
        <h1>Design a better</h1>
      </div>
    </div>
    <div class="cont"></div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  .video {
    position: relative;
    width: 100%;
    height: 85vh;
    .texts {
      z-index: 99;
    }
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 2;
    }
  }
  .cont {
    width: 100%;
  }
}
</style>
