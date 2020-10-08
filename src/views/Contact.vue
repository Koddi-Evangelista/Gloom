<template>
  <div class="container">
    <div class="image">
      <img src="../assets/contactImg.jpg" alt="" />
    </div>
    <h1>contact</h1>
    <div class="contact">
      <p>send me your questions</p>
      <p>
        If you have a general inquiry, please use the form below. I will attempt
        to return your message within 24 hours.
      </p>
      <form action="" method="post">
        <p>
          <label for="name">Name:</label>
          <input type="text" name="name" id="name" />
        </p>
        <p>
          <label for="email">Email:</label>
          <input type="email" name="email" id="email" />
        </p>
        <p>
          <label for="number">Phone number:</label>
          <input type="number" name="number" id="number" />
        </p>
      </form>
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
  h1 {
    font-size: 1.5rem;
    text-transform: uppercase;
    border-bottom: 5px solid #496a61;
    text-align: left;
  }
}
</style>
