<template>
  <div class="contacts">
    <p>
      <a href="mailto:olgaklapak@gmail.com?subject=Hello, Olga">olgaklapak@gmail.com</a>
      <a href="mailto:jujumony@gmail.com?subject=Hello, Julia">jujumony@gmail.com</a>
    </p>
  </div>
</template>

<style lang="scss">
@import '../node_modules/coriolan-ui/tools/variables';
@import '../node_modules/coriolan-ui/mixins/media';
.contacts {
  padding-top: 10em;
  a {
    padding: 1em 2em;
    display: block;
    @include media(M) {
      display: inline-block;
    }
  }
}
</style>

<script>
export default {
  layout: 'default',
  head: {
    title: 'Contacts',
    meta: [
      { hid: 'description', name: 'description', content: 'Home page description' }
    ]
  }
}
</script>
