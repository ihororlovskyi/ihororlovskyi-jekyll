<template>
  <div class="contacts">
    <div class='footer__title'>Contact:</div>
    <p><a href='mailto:ihororlovskyi@gmail.com?subject=Hello, Ihor'>ihororlovskyi@gmail.com</a></p>
    <p>+38(095)3452589</p>
    <div class='footer__title'>Let's be in touch:</div>
    <!-- <nav class='footer__socnav'>
      {% for i in site.data.Footer.config %}
        <a href='{{ i.url }}' class='{% if i.hide == true %}is-hiden{% endif %}' target='_blank'>
          <span class='icon-{{ i.icon }}'></span>
          <span class='link-name'>{{ i.icon }}</span>
        </a>
      {% endfor %}
    </nav> -->
  </div>
</template>

<style lang="scss">
$text-color: #ccc;
$accent-color: lighten($text-color, 10%);

.contacts {
  background-color: rgba(#000,.75);
  padding: 10em .8em;
  // filter: blur(6px);
  position: relative;
  z-index: 25;

  &__title {
    color: $accent-color;
    font-weight: 700;
    text-transform: uppercase;
  }
}
</style>

<script>
export default {
  layout: 'default',
  head: {
    title: 'Contacts',
    meta: [
      { name: 'description', content: 'Contacts page description' },
      { property: 'og:image', content: 'Contacts page og-image' }
    ]
  }
}
</script>
