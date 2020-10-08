<template>
  <div class="info">
    <h1>place to get started</h1>
    <div class="thumbnail-cont">
      <div class="thumbnail">
        <router-link to="/about">
          <div class="img">
            <img src="@/assets/about.jpg" alt="" />
          </div>
        </router-link>
        <div class="texts">
          <h1>about</h1>
          <p>get started with</p>
        </div>
      </div>
      <div class="thumbnail">
        <router-link to="/services">
          <div class="img">
            <img src="@/assets/counselling.jpg" alt="" />
          </div>
        </router-link>
        <div class="texts">
          <h1>services</h1>
          <p>learn about the service we provide</p>
        </div>
      </div>
      <div class="thumbnail">
        <router-link to="/contact">
          <div class="img">
            <img src="@/assets/contact.jpg" alt="" />
          </div>
        </router-link>
        <div class="texts">
          <h1>contact</h1>
          <p>taking the first step hard, but our team is here to help</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeInfo"
};
</script>
<style lang="scss" scoped>
.info {
  padding: 1rem;
  width: 100%;
  min-height: 100vh;
  font-family: "Roboto Condensed", sans-serif;
  h1 {
    font-size: 2rem;
    word-spacing: 0.5rem;
    font-family: "Homemade Apple", cursive;
    text-transform: capitalize;
    margin-top: 1rem;
  }
  .thumbnail-cont {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    .thumbnail {
      width: 25%;
      height: 500px;
      margin: 0 0.5rem;
      .img {
        width: 100%;
        height: 60%;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 2px 4px 10px black;
        transition: 0.6s;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        &:hover {
          transform: translateY(-10%);
          img {
            filter: opacity(0.5);
          }
        }
      }
      .texts {
        height: 40%;
        h1 {
          font-weight: 500;
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          text-transform: capitalize;
          letter-spacing: 0.1rem;
          word-spacing: 0.2rem;
        }
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .info {
    .thumbnail-cont {
      flex-direction: column;
      .thumbnail {
        width: 80%;
        height: 30%;
        margin: 2rem 0;
        .img {
          &:hover {
            transform: scale(1.1);
          }
        }
      }
      h1 {
        margin-bottom: 0;
      }
    }
  }
}
</style>
