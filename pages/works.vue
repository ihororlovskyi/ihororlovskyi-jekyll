<template>
  <div class="works">
    <p>Works</p>
  </div>
</template>

<style lang="scss">
.works {
  background-color: rgba(#000,.75);
  background-image: repeating-linear-gradient(135deg, rgba(#fff,.0), rgba(#fff,.0) 4px, rgba(#fff,.1) 4px, rgba(#fff,.1) 8px);
  padding: 10em .8em;
  position: relative;
  z-index: 25;
}
</style>

<script>
export default {
  layout: 'default',
  head: {
    title: 'Works',
    meta: [
      { name: 'description', content: 'Works page description' },
      { property: 'og:image', content: 'Works page og-image' }
    ]
  }
}
</script>
