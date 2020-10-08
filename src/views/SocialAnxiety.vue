<template>
  <div class="container">
    <div class="anxiety">
      <div class="img">
        <img src="../assets/anxiety.jpg" alt="" />
      </div>
      <div class="texts">
        <h1>social anxiety</h1>
        <p>
          Anxiety disorders, such as phobias and panic attacks, are the most
          common type of mental disorders.
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  font-size: 0.8rem;
  background-color: #faf8f8;
  color: #496a61;
  .anxiety {
    width: 100%;
    height: auto;
    .img {
      width: 100%;
      height: 50vh;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .texts {
      padding: 1rem 1rem 0;
      h1 {
        font-size: 1.5rem;
        text-transform: capitalize;
        text-align: left;
        border-bottom: 5px solid #496a61;
      }
      p {
        text-align: left;
        padding: 1rem 0;
      }
    }
  }
}
</style>
