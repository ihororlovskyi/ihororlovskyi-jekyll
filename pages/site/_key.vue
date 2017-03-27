<template>
  <div class="site">
    <h1>{{ site.title }}</h1>
    <div class="site__scaler">
      <div class="site__ratio">
        <iframe class="site__iframe" :src="site.url"></iframe>
      </div>
    </div>
    <div class="site__container">
      <div>
        Link: <a :href="site.url" target="_blank">{{ site.url }}</a>
      </div>
      <div v-if='site.source'>
        Source: <a :href="site.source" target="_blank">{{ site.source }}</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../node_modules/coriolan-ui/mixins/ratio';

.site {
  width: 100%;
  padding: 0 .8em;
  box-sizing: border-box;

  &__scaler {
    transform: scale(.75);
    transform-origin: top center;
    margin-bottom: -10%;
    padding: 16px;
    background: rgba(#fff,.1);
    border-radius: 8px;
    box-sizing: border-box;
  }

  &__ratio {
    @include ratio(100%,4,3);
    margin: 0 auto;
    background-image: repeating-linear-gradient(135deg, rgba(#fff,.0), rgba(#fff,.0) 4px, rgba(#fff,.1) 4px, rgba(#fff,.1) 8px);
  }

  &__iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  &__container {
    max-width: 555px;
    text-align: left;
    margin: 0 auto;
  }
}
</style>

<script>
import axios from '~plugins/axios'

export default {
  head: {
    title: 'Site',
    meta: [
      { name: 'description', content: '' }
    ]
  },
  async asyncData({ route }) {
    const { key } = route.params
    const { data } = await axios.get(`sites/${key}.json`)
    return {
      site: data
    }
  }
}
</script>
