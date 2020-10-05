<template>
  <div class="home" v-show="created">
    <div class="video">
      <video src="../assets/homebg.mp4" muted autoplay loop></video>
      <div class="texts">
        <h1>Understand. Heal. Grow.</h1>
        <h1>We Can Do This Together</h1>
        <div class="arrow-box">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="welcome-cont">
      <div class="cont"></div>
      <div class="welcome">
        <h1>
          <span>w</span>
          <span>e</span>
          <span>l</span>
          <span>c</span>
          <span>o</span>
          <span>m</span>
          <span>e</span>
        </h1>
        <div class="intro">
          <div class="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              iste, accusantium magni placeat dicta velit mollitia aperiam
              soluta enim esse at sit ex reiciendis consequuntur dolorum
              voluptates maxime pariatur tempore laboriosam dolorem sapiente
              ipsam. Consequuntur amet sunt, veniam perspiciatis nulla
              reprehenderit vel omnis voluptatibus, sequi non, nesciunt
              accusamus ad totam sed nam cupiditate numquam quia voluptates
              adipisci! Molestias vel exercitationem nostrum iste quod accusamus
              fuga eos enim facere aspernatur dolorem pariatur ut quia
              accusantium libero, sapiente autem ipsum deserunt itaque ea nisi
              voluptas atque. Quaerat dolor animi repellat officiis dolores
              neque nobis, eum, nostrum, atque vitae expedita maxime placeat?
              Facilis.
            </p>
          </div>
        </div>
      </div>
    </div>
    <paralaxx-item />
    <div class="info">
      <h1>place to get started</h1>
      <div class="thumbnail-cont">
        <div class="thumbnail">
          <div class="img">
            <img src="@/assets/about.jpg" alt="" />
          </div>
          <h1>about</h1>
          <p>get started with</p>
        </div>
        <div class="thumbnail">
          <div class="img">
            <img src="@/assets/counselling.jpg" alt="" />
          </div>
          <h1>services</h1>
          <p>learn about the service we provide</p>
        </div>
        <div class="thumbnail">
          <div class="img">
            <img src="@/assets/contact.jpg" alt="" />
          </div>
          <h1>contact</h1>
          <p>taking the first step hard, but our team is here to help</p>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
import ParalaxxItem from "@/components/ParalaxxItem.vue";
export default {
  name: "Home",
  components: {
    ParalaxxItem
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
        font-size: 3rem;
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
  .welcome-cont {
    background-image: url("../assets/texture.jpg");
    background-size: cover;
    padding-bottom: 5rem;
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
      z-index: 2;
      .thumbnails {
        width: 33%;
        height: 100%;
        border: 3px solid #2f2e41;
      }
    }
    .welcome {
      width: 100%;
      height: 100vh;
      padding: 1rem;
      h1 {
        border-bottom: 10px solid #98b8af;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
        letter-spacing: 0.8rem;
        span {
          display: block;
          cursor: pointer;
        }
        span:hover {
          animation: rubber 1s linear;
        }
      }
      .intro {
        .texts {
          font-size: 1.2rem;
          width: 65%;
          p {
            letter-spacing: 0.1rem;
            word-spacing: 0.3rem;
          }
        }
      }
      h1 {
        text-transform: uppercase;
        font-size: 5rem;
        font-family: "Roboto Condensed", sans-serif;
      }
    }
  }
  .info {
    padding: 1rem;
    width: 100%;
    height: 100vh;
    h1 {
      font-size: 4rem;
      text-transform: capitalize;
      margin: 1rem 0;
    }
    .thumbnail-cont {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 80%;
      .thumbnail {
        width: 25%;
        height: 50%;
        margin: 0 0.5rem;
        .img {
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 2px 4px 10px black;
          transition: 0.6s;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: opacity(0.5);
          }
          &:hover {
            transform: translateY(-25%);
            img {
              filter: opacity(1);
            }
          }
        }
        h1 {
          font-weight: 500;
          font-size: 2.5rem;
        }
      }
    }
  }
  .footer {
    width: 100%;
    height: 80vh;
    background-color: #e3ece9;
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
@keyframes rubber {
  0% {
    transform: scaleX(1.5);
  }
  10% {
    transform: scaleX(1.2);
  }
}
</style>
