<template>
  <div class="container">
    <div class="image">
      <img src="../assets/service.jpg" alt="" />
    </div>
    <div class="cto">
      <h1>Don't Wait to Get the Help You Need</h1>
      <router-link to="/contact">
        <button>
          start here
        </button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ServiceHeader"
};
</script>
<style lang="scss" scoped>
.image {
  position: relative;
  width: 100%;
  height: 50vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.cto {
  background-color: #ffc2ca;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  h1 {
    font-size: 1.5rem;
    margin-right: 3rem;
  }
  button {
    position: relative;
    background-color: #496a61;
    padding: 1rem 2rem;
    font-size: 0.8rem;
    text-transform: capitalize;
    border-radius: 8px;
    border: none;
    outline: none;
    color: white;
    transition: 0.3s;
    overflow: hidden;
    cursor: pointer;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      background-color: rgba(255, 255, 255, 0.4);
      width: 100%;
      height: 100%;
      z-index: 3;
      transition: 0.3s;
    }
    &:hover {
      &::before {
        left: 0;
      }
    }
    &:focus {
      box-shadow: 0px 0px 0px 5px #a4c0bf;
      transform: scaleX(1.1);
    }
  }
}
@media screen and (max-width: 900px) {
  .cto {
    flex-direction: column;
    button {
      width: 100%;
    }
  }
}
</style>
