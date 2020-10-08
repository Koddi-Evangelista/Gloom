<template>
  <div class="footer">
    <div class="quote">
      <p>
        Contact me today to break free, live strong, and build the life you
        want!
      </p>
    </div>
    <div class="infos">
      <div class="company">
        <h1>Gloom</h1>
        <p>Registered Mental Health Company</p>
        <p>IMH 18395</p>
        <p>Certified Yoga Teachers</p>
        <p>Certified Life Coaches</p>
      </div>
      <div class="social-medias">
        <a href="#">
          <img src="../assets/Facebook.svg" alt="" />
        </a>
        <a href="#">
          <img src="../assets/Instagram.svg" alt="" />
        </a>
        <a href="#">
          <img src="../assets/Twitter.svg" alt="" />
        </a>
        <a href="#">
          <img src="../assets/Email.svg" alt="" />
        </a>
      </div>
    </div>
    <div class="extra">
      <router-link to="/policy">Privacy Policy</router-link>
      <p>Website by <a href="#">Kodi</a></p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 80vh;
  background-color: #e3ece9;
  .quote {
    width: 100%;
    height: 10%;
    background-color: #f2f6f5;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 0.8rem;
    }
  }
  .infos {
    width: 100%;
    height: 80%;
    display: flex;
    .company {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
      p {
        margin: 0.5rem 0;
        font-size: 0.8rem;
        letter-spacing: 0.1rem;
      }
    }
    .social-medias {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media screen and (max-width: 900px) {
    .infos {
      padding-top: 2rem;
      align-items: center;
      flex-direction: column;
    }
  }
  .social-medias {
    a {
      &:hover {
        opacity: 0.5;
      }
    }
  }
  .extra {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 0.8rem;
      margin-left: 1rem;
    }
    a {
      font-size: 0.8rem;
    }
  }
}
</style>
