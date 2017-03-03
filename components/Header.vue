<template>
  <header>
    <nuxt-link to='/' exact>Mess division</nuxt-link>
    <nuxt-link to='/contacts'>Contacts</nuxt-link>
    <a href='https://www.facebook.com/messdivision/' target='_blank'>facebook</a>
  </header>
</template>

<style lang="scss">
  header {
    background: #fff;

    a {
      font-weight: 600;
      color: #000;
      text-transform: uppercase;
      padding: 1em 2em;
      display: inline-block;

      &.nuxt-link-active {
        background-color: rgba(#000,.05);
      }
    }
  }
</style>
