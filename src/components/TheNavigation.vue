<template>
  <div id="nav">
    <span id="logo">gloom</span>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/services">Services</router-link>
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  #logo {
    font-weight: 700;
    text-transform: capitalize;
    &:hover {
      color: #42b983;
    }
  }
  nav {
    a {
      letter-spacing: 0.15rem;
      font-family: "Roboto Condensed", sans-serif;
      padding: 0 0.5rem;
      text-decoration: none;
      color: #f1f1f1;
      &.router-link-exact-active {
        color: #fcb9d0;
      }
    }
  }
}
</style>
