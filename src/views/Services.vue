<template>
  <div class="container">
    <div class="image">
      <img src="../assets/service.jpg" alt="" />
    </div>
    <div class="cto">
      <h1>Don't Wait to Get the Help You Need</h1>
      <button>
        start here
      </button>
    </div>
    <div class="infos">
      <div class="services">
        <h1>services</h1>
        <p>
          We realize that no two people are the same and as such tailor our
          therapies to meet the specific needs of our clients. Whether you are
          struggling with anxiety, depression, or any other issue, we will help
          you recognize underlying problems, fully realize your strengths and
          adjust certain behaviors and thoughts to see things a different,
          healthier way.
        </p>
        <p>
          Our practice specializes in treating individuals, couples, and
          families and we offer comprehensive services dealing with:
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Services"
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
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
}
</style>
