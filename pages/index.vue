<template>
  <div class="home">
    <img class="home__icon" src="/assets/img/svg-icons/ihororlovskyi.svg">
    <h1 class="home__title">Ihor Orlovskyi</h1>
    <p class="home__subtitle">Front-end Developer</p>
  </div>
</template>

<style lang="scss">
@import '../node_modules/coriolan-ui/tools/variables';
@import '../node_modules/coriolan-ui/mixins/media';

.home {

  &__icon {
    display: block;
    max-width: 50px;
    margin: 0 auto;
    position: relative;
  }

  &__title {
    letter-spacing: 10px;
    font-size: 30px;
    margin: .3em 0;
    position: relative;
    text-transform: uppercase;
    color: #c3c3c3;

    @include media(M) {
      font-size: 50px;
    }
  }

  &__subtitle {
    letter-spacing: 2px;
    font-size: 12px;
    margin: .3em 0;
    position: relative;
    text-transform: uppercase;
    color: #c3c3c3;

    @include media(M) {
      font-size: 18px;
    }
  }
}
</style>

<script>
export default {
  head: {
    title: 'Home',
    meta: [
      { name: 'description', content: 'Home page description' },
      { property: 'og:image', content: 'Home page og-image' }
    ]
  }
}
</script>
