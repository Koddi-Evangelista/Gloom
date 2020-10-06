<template>
  <div class="container">
    <div class="img">
      <img src="../assets/aboutheader.jpg" alt="" />
    </div>
    <div class="description">
      <div class="image">
        <img src="../assets/profile.jpg" alt="" />
      </div>
      <div class="texts">
        <h1>about</h1>
        <p>
          We have a strong belief that healing starts within and encompasses the
          body as a whole. We believe that everyone’s healing journey looks
          different and leads to different destinations. We enjoy seeing our
          clients actively navigate their journeys and make positive changes and
          We continually encourage and motivate them towards reaching their
          goals. We find that on the other side of pain is growth and the way to
          get out, is always through. We will be honored to help you navigate
          your journey and work towards finding peace, balance and joy. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Natus quos cum
          labore quae quia rerum perspiciatis, commodi id porro quod, eum harum
          sequi tempore sit! Voluptatum rerum ut ducimus facere tempora fugit
          reprehenderit alias autem corporis rem quas ratione incidunt,
          provident suscipit mollitia esse minus magni repellat? Sint totam
          tempora numquam beatae dignissimos voluptates nesciunt veniam sit iure
          quia sed vero doloribus, dicta magnam, nulla error explicabo molestias
          distinctio amet. Quibusdam nihil maiores dolore molestiae quasi
          veritatis, provident inventore magnam error sunt aliquid ratione
          eligendi sed, eos perspiciatis nam libero dicta amet alias? Quae,
          similique sit dolore quos esse pariatur quasi nam! Odit, dignissimos
          labore laboriosam beatae iusto inventore! Necessitatibus reprehenderit
          officiis, quod unde nihil inventore rem laborum praesentium nemo quia
          facilis temporibus quisquam, id ipsam alias molestiae consectetur
          error sapiente sequi labore obcaecati minima officia hic! Labore quis,
          ut, laboriosam, laborum ex eum repudiandae reiciendis itaque ipsam
          aliquid delectus?
        </p>
      </div>
    </div>
    <div class="others">
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
  components: {}
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  .img {
    position: relative;
    width: 100%;
    height: 50vh;
    margin-bottom: 2rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(2px);
    }
  }
  .description {
    width: 100%;
    display: flex;
    padding: 0 1rem;
    .image {
      width: 40%;
      height: 50vh;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .texts {
      width: 60%;
    }
  }
  .others {
    padding: 0 1rem;
    h1 {
      text-align: left;
    }
    ul {
      margin-left: 2rem;
      list-style-type: disc;
      text-align: left;
    }
    p {
      text-align: left;
    }
  }
}
</style>
