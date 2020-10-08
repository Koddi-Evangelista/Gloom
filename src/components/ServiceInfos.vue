<template>
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
        Our practice specializes in treating individuals, couples, and families
        and we offer comprehensive services dealing with:
      </p>
    </div>
    <div class="types">
      <router-link to="/behavior">
        <div class="thumbnail">
          <div class="img">
            <img src="../assets/behavior.jpg" alt="" />
          </div>
          <h1>behavior</h1>
        </div>
      </router-link>
      <router-link to="/social-anxiety">
        <div class="thumbnail">
          <div class="img">
            <img src="../assets/anxiety.jpg" alt="" />
          </div>
          <h1>social anxiety disorder</h1>
        </div>
      </router-link>
      <router-link to="/depression">
        <div class="thumbnail">
          <div class="img">
            <img src="../assets/depression.jpg" alt="" />
          </div>
          <h1>depression</h1>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ServiceInfos"
};
</script>
<style lang="scss" scoped>
.infos {
  padding: 0 1rem;
  .services {
    h1 {
      font-size: 1.5rem;
      text-transform: uppercase;
      border-bottom: 5px solid #496a61;
      text-align: left;
    }
    p {
      letter-spacing: 0.1rem;
      word-spacing: 0.2rem;
      font-size: 0.8rem;
      margin: 2rem 0;
      text-align: left;
      &::first-letter {
        font-weight: 700;
        font-size: 1.3rem;
      }
    }
  }
  .types {
    padding-bottom: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    a {
      font-size: 0.8rem;
      width: 30%;
      text-decoration: none;
      color: #496a61;
      .thumbnail {
        width: 100%;
        cursor: pointer;
        .img {
          width: 100%;
          margin-bottom: 0.5rem;
          img {
            box-shadow: 0px 0px 10px black;
            width: 100%;
            transition: 0.3s;
            &:hover {
              filter: opacity(0.6);
              transform: scale(1.1);
            }
          }
        }
        h1 {
          font-weight: 500;
          text-transform: capitalize;
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    .types {
      justify-content: center;
      align-items: center;
      flex-direction: column;
      a {
        width: 90%;
        .thumbnail {
          margin-bottom: 2rem;
          .img {
            margin-bottom: 1rem;
          }
          h1 {
            font-weight: 500;
            text-transform: capitalize;
          }
        }
      }
    }
  }
}
</style>
