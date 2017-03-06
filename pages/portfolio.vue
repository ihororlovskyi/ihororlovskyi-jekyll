<template>
  <div class="portfolio">
    <h1>Portfolio</h1>
    <nav class="portfolio__list">
      <div class="portfolio__item" v-for="(site, key) in sites">
        <nuxt-link class="portfolio__link" :to="{ path: `/site/${key}`}">{{ site.title }}</nuxt-link>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
@import '../node_modules/coriolan-ui/tools/variables';
@import '../node_modules/coriolan-ui/mixins/media';

.portfolio {
  // background-color: rgba(#000,.05);
  margin: 0 auto;
  max-width: 999px;

  &__list {
    display: flex;
    flex-wrap: wrap;
    // justify-content: flex-start;
    // align-items: center;
  }

  &__item {
    background-color: rgba(#fff,.05);
    flex-basis: (100% / 2);
    position: relative;

    @include media(M) {
      flex-basis: (100% / 3);
    }

    @include media(L) {
      flex-basis: (100% / 4);
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-image: repeating-linear-gradient(135deg, rgba(#fff,.0), rgba(#fff,.0) 4px, rgba(#fff,.1) 4px, rgba(#fff,.1) 8px);
      opacity: 0;
      transition: opacity .2s ease-in-out;
    }

    &:hover:before {
      opacity: 1;
    }
  }

  &__link {
    display: block;
    padding: 2em .8em;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
  }
}
</style>

<script>
import axios from '~plugins/axios'

export default {
  head: {
    title: 'Portfolio',
    meta: [
      { name: 'description', content: 'Portfolio page description' }
    ]
  },
  async data() {
    const { data } = await axios.get('sites.json')
    return {
      sites: data
    }
  }
}
</script>
