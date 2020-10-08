<template>
  <div class="container">
    <div class="depression">
      <div class="img">
        <img src="../assets/depression.jpg" alt="" />
      </div>
      <div class="texts">
        <h1>depression</h1>
        <p>
          Clinical depression is more than just the occasional blues. Our
          complete guide to depression can help.
        </p>
      </div>
    </div>
    <div class="symptoms">
      <h1>symptoms</h1>
      <ul>
        <li>
          Your mood is depressed for most of the day, especially in the morning
        </li>
        <li>You feel tired or have a lack of energy almost every day.</li>
        <li>You feel worthless or guilty almost every day.</li>
        <li>
          You have a hard time focusing, remembering details, and making
          decisions.
        </li>
        <li>You can’t sleep, or you sleep too much, almost every day.</li>
        <li>
          You have almost no interest or pleasure in many activities nearly
          every day.
        </li>
        <li>
          You think often about death or suicide (not just a fear of death).
        </li>
        <li>You feel restless or slowed down.</li>
        <li>You’ve lost or gained weight.</li>
      </ul>
      <button>set an appointment</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  font-size: 0.8rem;
  background-color: #faf8f8;
  color: #496a61;
  .depression {
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
  .symptoms {
    padding: 1rem 1rem;
    h1 {
      font-size: 1.5rem;
      padding: 1rem 0;
      text-transform: capitalize;
      text-align: left;
    }
    ul {
      text-align: left;
      padding-left: 2rem;
      list-style-position: inside;
    }
    button {
      margin: 1rem 0;
      width: 50%;
      height: 70px;
    }
  }
}
</style>
