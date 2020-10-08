<template>
  <div class="description">
    <div class="img-cont">
      <div class="image">
        <img src="../assets/profile.jpg" alt="profile" />
      </div>
    </div>
    <div class="texts">
      <h1>about</h1>
      <p>
        We have a strong belief that healing starts within and encompasses the
        body as a whole. We believe that everyone’s healing journey looks
        different and leads to different destinations. We enjoy seeing our
        clients actively navigate their journeys and make positive changes and
        We continually encourage and motivate them towards reaching their goals.
        We find that on the other side of pain is growth and the way to get out,
        is always through. We will be honored to help you navigate your journey
        and work towards finding peace, balance and joy. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Natus quos cum labore quae quia
        rerum perspiciatis, commodi id porro quod, eum harum sequi tempore sit!
        Voluptatum rerum ut ducimus facere tempora fugit reprehenderit alias
        autem corporis rem quas ratione incidunt, provident suscipit mollitia
        esse minus magni repellat? Sint totam tempora numquam beatae dignissimos
        voluptates nesciunt veniam sit iure quia sed vero doloribus, dicta
        magnam, nulla error explicabo molestias distinctio amet. Quibusdam nihil
        maiores dolore molestiae quasi veritatis, provident inventore magnam
        error sunt aliquid ratione eligendi sed, eos perspiciatis nam libero
        dicta amet alias? Quae, similique sit dolore quos esse pariatur quasi
        nam! Odit, dignissimos labore laboriosam beatae iusto inventore!
        Necessitatibus reprehenderit officiis, quod unde nihil inventore rem
        laborum praesentium nemo quia facilis temporibus quisquam, id ipsam
        alias molestiae consectetur error sapiente sequi labore obcaecati minima
        officia hic! Labore quis, ut, laboriosam, laborum ex eum repudiandae
        reiciendis itaque ipsam aliquid delectus?
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutDescription"
};
</script>
<style lang="scss" scoped>
.description {
  width: 100%;
  min-height: 70vh;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  .img-cont {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    .image {
      width: 100%;
      height: 60%;
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .texts {
    width: 58%;
    h1 {
      font-size: 1.5rem;
      text-transform: uppercase;
      text-align: right;
      border-bottom: 5px solid #496a61;
      margin-bottom: 1rem;
    }
    p {
      font-size: 0.8rem;
      letter-spacing: 0.1rem;
      word-spacing: 0.2rem;
      text-align: left;
      &::first-letter {
        font-weight: 700;
        font-size: 1.3rem;
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .description {
    flex-direction: column;
    .texts {
      width: 100%;
    }
  }
}
</style>
