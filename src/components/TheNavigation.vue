<template>
  <div id="nav">
    <span id="logo">atomic</span>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/gallery">Gallery</router-link>
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
  color: #252624;
  #logo {
    font-weight: 700;
    text-transform: capitalize;
    &:hover {
      color: #42b983;
    }
  }
  nav {
    a {
      padding: 0 0.5rem;
      text-decoration: none;
      color: #252624;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>