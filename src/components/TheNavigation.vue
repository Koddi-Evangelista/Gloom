<template>
  <div id="nav">
    <span id="logo">gloom</span>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/services">
        Services
        <div class="dropdown-cont">
          <ul>
            <li><router-link to="/behavior">behavior</router-link></li>
            <li>
              <router-link to="/social-anxiety">social anxiety</router-link>
            </li>
            <li><router-link to="/depression">depression</router-link></li>
          </ul>
          <div class="dropdown"></div>
        </div>
      </router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#nav {
  position: fixed;
  width: calc(100% - 2rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  #logo {
    font-size: 0.5rem;
    font-weight: 700;
    text-transform: capitalize;
  }
  nav {
    display: flex;
    a {
      font-size: 0.5rem;
      display: block;
      position: relative;
      letter-spacing: 0.15rem;
      font-family: "Roboto Condensed", sans-serif;
      padding: 0.5rem 0.5rem;
      text-decoration: none;
      color: #f1f1f1;
      &.router-link-exact-active {
        color: #fcb9d0;
      }
      .dropdown-cont {
        display: none;
        position: absolute;
        background-color: transparent;
        width: 200%;
        top: 100%;
        left: 0;
        overflow: hidden;
        ul {
          list-style-type: none;
          text-align: left;
          li {
            padding: 0.5rem 0;
            transition: 0.3s;
            a {
              transition: 0.3s;
              text-transform: capitalize;
              letter-spacing: 0.15rem;
              font-family: "Roboto Condensed", sans-serif;
            }
            &:hover {
              background-color: #fcb9d0;
              a {
                color: #496a61;
              }
            }
          }
        }
        .dropdown {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          z-index: -1;
        }
      }
      &:hover {
        .dropdown-cont {
          display: block;
        }
      }
    }
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 0;
    height: 1rem;
    width: 100%;
    background-color: #222;
  }
}
@media screen and (max-width: 900px) {
  #nav {
    flex-direction: column;
    nav {
      a {
        display: block;
        text-align: left;
        padding: 1rem;
      }
    }
  }
}
</style>
