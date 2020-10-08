<template>
  <div class="others">
    <div class="edcert">
      <h1>education & certification</h1>
      <ul>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          accusamus.
        </li>
        <li>
          Lorem ipsum dolor sit ametetur adipisicing elit. Dolorum, accusamus.
        </li>
        <li>
          Lorem ipst consectetur adipisicing elit. Dolorum, accusamus.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adiping elit. Dolorum,
          accusamus.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          accusamus.
        </li>
        <li>
          Lorem ipsum dolor sit amet co elit. Dolorum, accusamus.
        </li>
      </ul>
    </div>
    <div class="exp">
      <h1>experience</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
        praesentium placeat asperiores ratione, laudantium nemo ex porro
        voluptatem sunt labore? Labore ratione illo dignissimos ipsum numquam
        ullam nemo, eum nisi beatae esse. Harum eius sapiente quibusdam
        molestias qui omnis repellat? Fuga, voluptate autem quod voluptatem
        voluptates nisi adipisci ab expedita architecto placeat itaque tempora
        laudantium ducimus repellat nemo, voluptatum hic minima, sequi cumque
        alias iste quasi atque delectus natus! Mollitia ad minima assumenda
        delectus perferendis quaerat quas quia expedita omnis ea architecto non
        quo aliquid maiores consequuntur reiciendis aliquam cumque illo eveniet,
        fugit tenetur, suscipit quae! Numquam corrupti consequuntur atque!
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutOtherDetails"
};
</script>
<style lang="scss" scoped>
.others {
  margin-top: 1rem;
  padding: 2rem 1rem;
  h1 {
    font-size: 1.5rem;
    margin: 1rem 0;
    text-transform: capitalize;
    text-align: left;
  }
  .edcert {
    ul {
      margin-left: 2rem;
      list-style-type: disc;
      text-align: left;
      list-style-position: inside;
      li {
        padding: 0.5rem 0;
        font-size: 0.8rem;
        letter-spacing: 0.1rem;
      }
    }
  }
  .exp {
    p {
      margin-left: 2rem;
      text-align: left;
      font-size: 0.8rem;
      letter-spacing: 0.1rem;
    }
  }
}
</style>
