<template>
  <header>
    <nuxt-link to='/' exact>Ihor Orlovskyi</nuxt-link>
    <nuxt-link to='/works' exact>Works</nuxt-link>
    <nuxt-link to='/contacts'>Contacts</nuxt-link>
  </header>
</template>

<style lang="scss">
header {
  background: rgba(#000,.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 30;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 1em 2em;
    display: inline-block;

    &.nuxt-link-active {
      background-color: #111;
    }
  }
}
</style>
