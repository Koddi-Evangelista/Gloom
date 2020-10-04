<template>
  <div class="home" v-show="created">
    <div class="video">
      <video src="../assets/homebg.mp4" muted autoplay loop></video>
      <div class="texts">
        <h1>Healing</h1>
        <h1>is not linear</h1>
        <div class="arrow-box">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="cont">
      <div class="thumbnails"></div>
      <div class="thumbnails"></div>
      <div class="thumbnails"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      created: false,
    };
  },
  created() {
    this.created = true;
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  background-color: #f6f2f3;
  .video {
    position: relative;
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    .texts {
      position: relative;
      font-family: "Homemade Apple", cursive;
      color: #ffe9ec;
      text-align: left;
      z-index: 2;
      line-height: 8rem;
      h1 {
        font-size: 5rem;
        letter-spacing: 0.5rem;
      }
      .arrow-box {
        position: absolute;
        bottom: -30%;
        left: 65%;
        span {
          display: block;
          width: 50px;
          height: 50px;
          border-bottom: 3px solid #ffe9ec;
          border-right: 3px solid #ffe9ec;
          margin: -20px;
          transform: rotate(45deg);
          animation: disappear 2s infinite;
          &:nth-child(1) {
            animation-delay: 0.2s;
          }
          &:nth-child(2) {
            animation-delay: 0.4s;
          }
          &:nth-child(3) {
            animation-delay: 0.6s;
          }
          &:nth-child(4) {
            animation-delay: 0.8s;
          }
        }
      }
    }
    video {
      width: 100%;
      height: 100%;
      z-index: 1;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 2;
    }
  }
  .cont {
    width: 80%;
    height: 40vh;
    position: relative;
    transform: translateY(-25%);
    margin: 0 auto;
    background-color: #f3f3f3;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    box-shadow: 2px 2px 10px #301e12;
    z-index: 99;
    .thumbnails {
      width: 33%;
      height: 100%;
      border: 2px solid #301e12;
    }
  }
}
@keyframes disappear {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
