<template>
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
            iste, accusantium magni placeat dicta velit mollitia aperiam soluta
            enim esse at sit ex reiciendis consequuntur dolorum voluptates
            maxime pariatur tempore laboriosam dolorem sapiente ipsam.
            Consequuntur amet sunt, veniam perspiciatis nulla reprehenderit vel
            omnis voluptatibus, sequi non, nesciunt accusamus ad totam sed nam
            cupiditate numquam quia voluptates adipisci! Molestias vel
            exercitationem nostrum iste quod accusamus fuga eos enim facere
            aspernatur dolorem pariatur ut quia accusantium libero, sapiente
            autem ipsum deserunt itaque ea nisi voluptas atque. Quaerat dolor
            animi repellat officiis dolores neque nobis, eum, nostrum, atque
            vitae expedita maxime placeat? Facilis.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WelcomeSection"
};
</script>
<style lang="scss" scoped>
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
@keyframes rubber {
  0% {
    transform: scaleX(1.5);
  }
  10% {
    transform: scaleX(1.2);
  }
}
</style>
