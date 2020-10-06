<template>
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
</style>
