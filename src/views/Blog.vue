<template>
  <div class="container">
    <div class="image">
      <img src="../assets/blog.jpg" alt="" />
    </div>
    <div class="details">
      <h1>blog</h1>
      <div class="blogs">
        <p>no blogs.</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: #faf8f8;
  color: #496a61;
  .image {
    position: relative;
    width: 100%;
    height: 50vh;
    margin-bottom: 2rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .details {
    padding: 0 1rem;
    font-size: 0.8rem;
    h1 {
      font-size: 1.5rem;
      text-transform: uppercase;
      border-bottom: 5px solid #496a61;
      text-align: right;
    }
    .blogs {
      padding: 2rem 0;
    }
  }
}
</style>
